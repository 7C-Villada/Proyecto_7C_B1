import React, { useState, useEffect } from "react";
import Card from "./Card/MLibreCard";
import axios from "axios";
import styled from "styled-components";

const Header = styled.h2.attrs({
  className: "pb-2 border-bottom fw-bold",
})`
  color: rgb(62, 35, 7);
`;

const MLibreInfoSection = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/mercado-libre/")
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container py-5">
        <Header>Nuestros Principales Colaboradores</Header>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {cardData.map((card) => {
            return (
              <div className="col">
                <Card />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MLibreInfoSection;

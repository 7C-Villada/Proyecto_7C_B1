import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../LandingPage/UI/Card";
import axios from "axios";

const GridSectionContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin-top: 400px;
  }
`;

const GridH1 = styled.h1`
  color: #3e2307;
  font-size: 2.5rem;
  margin-bottom: 75px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 75px;
  }
`;

const GridCardWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  width: 60%;
  margin-bottom: 150px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
    width: 80%;
  }
`;

const GridSection = () => {
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
      <GridSectionContainer>
        <GridH1>Nuestras Tiendas</GridH1>
        <GridCardWrapper>
          {cardData.map((card) => {
            return (
              <Card
                key={card.id}
                img="https://cloudfront-us-east-1.images.arcpublishing.com/semana/BUWWOGAC7FHG7NGJZGHJHGVC7I.jpg"
                title={card.nombre}
                desc={card.descripcion}
              />
            );
          })}
        </GridCardWrapper>
      </GridSectionContainer>
    </>
  );
};

export default GridSection;

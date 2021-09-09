import React from "react";
import styled from "styled-components";
import MLibreLogo from "../static/logoML.jpeg";

const MLCard = styled.div.attrs({
  className:
    "card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow",
})`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    url(${MLibreLogo});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 1rem;
  border-color: white;
  transition: transform 0.1s;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.2)),
      url(${MLibreLogo});
    border-color: #50b559;
    transform: scale(1.06);
  }
`;

const Card = (props) => {

  return (
    <>
      <a href={props.link} className="text-decoration-none">
        <MLCard >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
              {props.name}
            </h2>
          </div>
        </MLCard>
      </a>
    </>
  );
};

export default Card;

import React from "react";
import "./QuienesSomos.css";
import Mision from "./images/mision.jpg";
import Vision from "./images/vision.jpg";
import Valores from "./images/valores.png";
import logo from '../Navbar/Logo.png';
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div.attrs({
  className: "card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
})`
  // background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${(props) => props.bg});
  // background-repeat: no-repeat;
  // background-position: center center;
  // background-size: cover;
  border-radius: 1rem;
  border-color: white;
  transition: transform .1s; 

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.2)), url(${(props) => props.bg});
    border-color: #50b559;
    transform: scale(1.06);
  }
`;

export const Header = styled.h1.attrs({
  className: "display-4 border-bottom fw-bold"
})`
  color: rgb(62,35,7);
`;

const QuienesSomos = () => {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <Header>¿Quiénes Somos?</Header>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <Card>
              <div className="tile d-flex flex-column h-100 text-white text-shadow-1">
                <img src={Vision}/>
                <div className="text">
                  <h2 className="mb-2 display-6 lh-1 fw-bold">
                    Nuestra Visión
                  </h2>
                  <p class="animate-text small">Ver jóvenes comprometidos con una sociedad sustentable, que ejerzan sus derechos a vivir en libertad, equilibrio y armonía.</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="col">
            <Card >
              <div className="tile d-flex flex-column h-100 text-white text-shadow-1">
                <img src={Mision}/>
                <div className="text">
                  <h2 className="mb-2 display-6 lh-1 fw-bold">
                    Nuestra Misión
                  </h2>
                  <p class="animate-text small">Educar en valores a través del aprender haciendo, aprender jugando y aprender experimentando en espacios naturales.</p>
                </div>
                
              </div>
            </Card>
          </div>

          <div className="col">
            <Card >
              <div className="tile d-flex flex-column h-100 text-white text-shadow-1">
                <img src={Valores}/>
                <div className="text"> 
                  <h2 className="mb-2 display-6 lh-1 fw-bold">
                    Nuestros Valores
                  </h2>
                  <p class="animate-text small">El amor y el cuidado de la naturaleza. Generosidad con el saber. Respeto por los otros. Coherencia entre el decir y el hacer. Inclusión.</p>
                </div>
                
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;

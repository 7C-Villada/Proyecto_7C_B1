import React from "react";
import "./QueHacemos.css";
import Educacion from "./images/educacion.jpg";
import Ambiente from "./images/ambiente.JPG";
import Sustentabilidad from "./images/sustentabilidad.jpg";
import styled from "styled-components";


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

export const Content = styled.p.attrs({
  className: "animate-text small"
})`

  @media screen and (max-width: 977px) {
    font-size: 1.5em !important;
  }
  @media screen and (max-width: 539px) {
    font-size: .875em !important;
  }
`;

export const Title = styled.h2.attrs({
  className: "mb-2 display-6 lh-1 fw-bold"
})`

  @media screen and (max-width: 977px) {
    font-size: 4em !important;
  }
  @media screen and (max-width: 539px) {
    font-size: 1.5em !important;
  }
`;

const QueHacemos = () => {
  return (
    <div className="container pt-3" id={'que_hacemos'}>
      <div className="container px-4 pt-5" id="custom-cards">
      <Header>¿Qué Hacemos?</Header>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <Card>
            <div className="tile d-flex flex-column h-100 text-white text-shadow-1">
              <img src={Educacion}/>
              <div className="text">
                <Title>
                  Educación
                </Title>
                <Content>Conocer los recursos naturales. Entender los procesos del ambiente. Aprender sobre bosque nativo.</Content>
              </div>
            </div>
          </Card>
        </div>

        <div className="col">
          <Card >
            <div className="tile d-flex flex-column h-100 text-white text-shadow-1">
              <img src={Ambiente}/>
              <div className="text">
                <Title>
                  Ambiente
                </Title>
                <Content>Identificar los recursos disponibles. Respetar la naturaleza. Reconocer el bosque de nuestra región.</Content>
              </div>
              
            </div>
          </Card>
        </div>

        <div className="col">
          <Card >
            <div className="tile d-flex flex-column h-100 text-white text-shadow-1">
              <img src={Sustentabilidad}/>
              <div className="text">
                <Title>
                  Sustentabilidad
                </Title>
                <Content>Utilizar racionalmente los recursos. Vivir en armonía con el ambiente. Restaurar el bosque y vivir en equilibrio con él.</Content>
              </div>
              
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
};

export default QueHacemos;

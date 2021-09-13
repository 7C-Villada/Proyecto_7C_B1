import React from "react";
import "./QueHacemos.css";
import Educacion from "./images/educacion.jpeg";
import Ambiente from "./images/ambiente.jpg";
import Sustentabilidad from "./images/sustentabilidad.jpeg";
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

const QueHacemos = () => {
  return (
    <div className="container px-4 pt-5" id="custom-cards">
    <Header>¿Qué Hacemos?</Header>
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <Card>
          <div className="tile d-flex flex-column h-100 text-white text-shadow-1">
            <img src={Educacion}/>
            <div className="text">
              <h2 className="mb-2 display-6 lh-1 fw-bold">
                Educación
              </h2>
              <p class="animate-text small">Conocer los recursos naturales. Entender los procesos del ambiente. Aprender sobre bosque nativo.</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="col">
        <Card >
          <div className="tile d-flex flex-column h-100 text-white text-shadow-1">
            <img src={Ambiente}/>
            <div className="text">
              <h2 className="mb-2 display-6 lh-1 fw-bold">
                Ambiente
              </h2>
              <p class="animate-text small">Identificar los recursos disponibles. Respetar la naturaleza. Reconocer el bosque de nuestra región.</p>
            </div>
            
          </div>
        </Card>
      </div>

      <div className="col">
        <Card >
          <div className="tile d-flex flex-column h-100 text-white text-shadow-1">
            <img src={Sustentabilidad}/>
            <div className="text">
              <h2 className="mb-2 display-6 lh-1 fw-bold">
                Sustentabilidad
              </h2>
              <p class="animate-text small">Utilizar racionalmente los recursos. Vivir en armonía con el ambiente. Restaurar el bosque y vivir en equilibrio con él.</p>
            </div>
            
          </div>
        </Card>
      </div>
    </div>
  </div>
  );
};

export default QueHacemos;

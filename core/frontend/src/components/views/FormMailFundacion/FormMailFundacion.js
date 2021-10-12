import React from "react";
import styled from "styled-components";
import FormMail from "../../ui/FormMail/FormMail";
import background from "../../../fotos/IMG_4243.JPG";

const Background = styled.div.attrs({
  className: "py-4 px-2",
})`
  //width: 100%;
  //height: 95vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FormMailFundacion = () => {
  return (
    <>
      <Background>
        <div className="container col-xxl-8 px-4 py-4 rounded-3 border shadow-lg card">
          <FormMail email="6bae887b0aa2cd51eb857248d3b9154f" subject="Contacto Fundación"></FormMail>
        </div>
      </Background>
    </>
  );
};

export default FormMailFundacion;
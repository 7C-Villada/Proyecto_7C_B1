import React from "react";
import axios from "axios";

import {
  H1Styled,
  ButtonFormaParte,
  Background,
  HeroBackground,
  PDescription,
  HeroContainer,
} from "./styles/Hero";

const Hero = () => {

  const getFormUrl = () => {
    axios.get("/api/forma-parte").then((response) => {
      let link = response.data.link;
      let statusCode = response.status;
      if (statusCode === 200) {
        if (link.includes('https://')) {
          window.open(link, "_blank");
        } else {
          link = 'https://' + link;
          window.open(link, "_blank");
        }
      } else {
        console.log('No link provided ;)')
      }
    });
  };

  return (
    <>
      {/* <IMGBackground> */}
      <HeroContainer>
        <HeroBackground>
          <Background autoPlay muted loop></Background>
        </HeroBackground>
        <div className="col-lg-12 align-self-center">
          <H1Styled primary>Aprender</H1Styled>
          <H1Styled >Haciendo</H1Styled>
          <div className="container">
            <PDescription>
              Nuestro objetivo principal es educar en la concientización del
              ejercicio libre de los derechos de los niños y la conservación del
              medio ambiente.
            </PDescription>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <ButtonFormaParte function={getFormUrl}>Formá Parte</ButtonFormaParte>
              {/* <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Secondary
                </button> */}
            </div>
          </div>
        </div>
      </HeroContainer>
      {/* </IMGBackground> */}
    </>
  );
};

export default Hero;

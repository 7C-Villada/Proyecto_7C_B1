import React from "react";

import {
  H1Styled,
  ButtonFormaParte,
  MP4Background,
  HeroBackground,
  IMGBackground,
  PDescription,
  HeroContainer,
} from "./styles/Hero";

const Hero = () => {
  return (
    <>
      {/* <IMGBackground> */}
      <HeroContainer>
        <HeroBackground>
          <MP4Background autoPlay muted loop></MP4Background>
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
              <ButtonFormaParte>Formá Parte</ButtonFormaParte>
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

import React from "react";

import { H1Styled } from "./styles/Hero";

import { IMGBackground } from "../../views/Home/styles/Home.js";

const Hero = () => {
  return (
    <>
      <IMGBackground>
        <div className="px-4 py-5 my-5 text-center">
          <H1Styled>Aprender</H1Styled>
          <H1Styled primary>Haciendo</H1Styled>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-white">
              Nuestro objetivo principal es educar en la concientización del
              ejercicio libre de los derechos de los niños y la conservación del
              medio ambiente.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                Primary button
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div>
          </div>
        </div>
      </IMGBackground>
    </>
  );
};

export default Hero;

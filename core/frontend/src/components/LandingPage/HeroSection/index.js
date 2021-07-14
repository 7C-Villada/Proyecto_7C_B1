import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import { Button } from "../UI/ButtonElement";
import Video from "../../../videos/video.mp4";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
        </HeroBg>
        <HeroContent>
          <HeroH1>Aprender</HeroH1>
          <HeroH1 primary>Haciendo</HeroH1>
          <HeroP>
            Nuestro objetivo principal es educar en la concientización del
            ejercicio libre de los derechos de los niños y la conservación del
            medio ambiente.
          </HeroP>
          <HeroBtnWrapper>
            <Button>Formá Parte</Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;

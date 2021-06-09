import React from "react";
import HeroSection from "./HeroSection";
import Carousel from "./Carousel";
import { CarouselData } from "./CarouselData";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Carousel slides={CarouselData} />
    </div>
  );
};

export default LandingPage;

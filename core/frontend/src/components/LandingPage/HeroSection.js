import React from "react";
import "./HeroSection.css";
import Carousel from "./Carousel";
import { CarouselData } from "./CarouselData";
import { FaHandsHelping } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1 className="title-green">Aprender</h1>
      <h1 className="title-cream">Haciendo</h1>
      <button className="forma-parte__btn">
        Formá Parte <FaHandsHelping />
      </button>
      <Carousel slides={CarouselData} className="carousel" />
    </div>
  );
};

export default HeroSection;

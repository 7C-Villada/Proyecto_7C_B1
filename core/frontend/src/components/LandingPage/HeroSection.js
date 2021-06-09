import React from "react";
import "./HeroSection.css";

import { FaHandsHelping } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1 className="title-green">Aprender</h1>
      <h1 className="title-cream">Haciendo</h1>
      <button className="forma-parte__btn">
        Formá Parte <FaHandsHelping />
      </button>
    </div>
  );
};

export default HeroSection;

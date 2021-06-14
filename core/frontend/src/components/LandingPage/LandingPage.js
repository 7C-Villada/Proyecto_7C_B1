import React from "react";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <HeroSection />
      <InfoSection />
    </div>
  );
};

export default LandingPage;

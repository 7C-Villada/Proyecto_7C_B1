import React from "react";
import "./InfoSection.css";
import CardSection from "./CardSection";
import Footer from "../Footer/Footer";
import MapSection from "./MapSection";

const InfoSection = () => {
  return (
    <div className="info-section-container">
      <CardSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default InfoSection;

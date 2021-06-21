import React from "react";
import "./InfoSection.css";
import CardSection from "./CardSection";
import Footer from "../Footer/Footer";
import MapSection from "./MapSection";
import Convenios from "./Convenios";
import { ConveniosData } from "./ConveniosData";
import CalendarSection from "./CalendarSection";

const InfoSection = () => {
  return (
    <div className="info-section-container">
      <CardSection />
      <CalendarSection />
      <MapSection />
      <Convenios slides={ConveniosData} />
      <Footer />
    </div>
  );
};

export default InfoSection;

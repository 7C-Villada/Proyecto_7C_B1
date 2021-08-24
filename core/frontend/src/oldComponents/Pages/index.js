import React from "react";
import CovenantSection from "../LandingPage/CovenantSection";
import EventsSection from "../LandingPage/EventsSection";
import HeroSection from "../LandingPage/HeroSection";
import InfoSection from "../LandingPage/InfoSection";
import MapSection from "../LandingPage/MapSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <EventsSection />
      <MapSection />
      <CovenantSection />
    </>
  );
};

export default Home;

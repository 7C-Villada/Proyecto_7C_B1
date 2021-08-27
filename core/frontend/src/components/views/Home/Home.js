import React from "react";

// UI modules
import Hero from "../../ui/Hero/Hero";
import CardSection from "../../ui/CardSection/CardSection";
import ConveniosSection from "../../ui/ConveniosSection/ConveniosSection";

import { Divider } from "./styles/Home"
import MapSection from '../../ui/MapSection/MapSection'

// Styles modules

const Home = () => {
  return (
    <>
      <Hero />
      <Divider></Divider>
      <CardSection />
      <Divider></Divider>
      <MapSection />
      <Divider></Divider>
      <ConveniosSection></ConveniosSection>
    </>
  );
};

export default Home;

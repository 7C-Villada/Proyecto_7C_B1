import React from "react";

// UI modules
import Hero from "../../ui/Hero/Hero";
import CardSection from "../../ui/CardSection/CardSection";
import CarouselSection from "../../ui/CarouselSection/CarouselSection";
import { Divider } from "../../ui/Divider/Divider";
import ConveniosSection from "../../ui/ConveniosSection/ConveniosSection";
import MapSection from '../../ui/MapSection/MapSection'


// Styles modules

const Home = () => {
  return (
    <>
      <Hero />
      <Divider></Divider>
      <CardSection />
      <Divider></Divider>
      <CarouselSection></CarouselSection>
      <Divider></Divider>
      <MapSection />
      <Divider></Divider>
      <ConveniosSection></ConveniosSection>

    </>
  );
};

export default Home;

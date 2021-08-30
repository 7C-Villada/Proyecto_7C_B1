import React from "react";

// UI modules
import Hero from "../../ui/Hero/Hero";
import CardSection from "../../ui/CardSection/CardSection";
import CarouselSection from "../../ui/CarouselSection/CarouselSection";
import { Divider } from "./styles/Home";

// Styles modules

const Home = () => {
  return (
    <>
      <Hero />
      <Divider></Divider>
      <CardSection />
      <Divider></Divider>
      <CarouselSection></CarouselSection>
    </>
  );
};

export default Home;

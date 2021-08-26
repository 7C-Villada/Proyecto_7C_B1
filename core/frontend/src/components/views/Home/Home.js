import React from "react";

// UI modules
import Hero from "../../ui/Hero/Hero";
import CardSection from "../../ui/CardSection/CardSection";
import { Divider } from "./styles/Home"

// Styles modules

const Home = () => {
  return (
    <>
      <Hero />
      <Divider></Divider>
      <CardSection />
      <Divider></Divider>
    </>
  );
};

export default Home;

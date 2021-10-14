import React, { Suspense } from "react";

// UI modules
import Hero from "../../ui/Hero/Hero";
import CardSection from "../../ui/CardSection/CardSection";
// import CarouselSection from "../../ui/CarouselSection/CarouselSection";
import { Divider } from "../../ui/Divider/Divider";
// import ConveniosSection from "../../ui/ConveniosSection/ConveniosSection";
import MapSection from "../../ui/MapSection/MapSection";

const CarouselSection = React.lazy(() =>
  import("../../ui/CarouselSection/CarouselSection")
);

const ConveniosSection = React.lazy(() =>
  import("../../ui/ConveniosSection/ConveniosSection")
);

// Styles modules

const Home = () => {
  return (
    <>
      <Hero />
      <Divider></Divider>
      <CardSection />
      <Divider></Divider>
      <Suspense fallback={<div>Loading...</div>}>
        <CarouselSection />
      </Suspense>
      <Divider></Divider>
      {/* <MapSection />
      <Divider></Divider> */}
      <Suspense fallback={<div>Loading...</div>}>
        <ConveniosSection />
      </Suspense>
    </>
  );
};

export default Home;

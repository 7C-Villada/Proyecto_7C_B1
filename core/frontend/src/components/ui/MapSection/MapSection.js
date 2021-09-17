import React from "react";
import { Header, MapDiv } from "./style/MapSectionElements";
import CustomMap from "./CustomMap";

const MapSection = () => {
  const tiles = "./tiles/{z}/{x}/{y}.png";

  return (
    <>
      <div className="container py-5">
        <Header>Mapa Interactivo</Header>
        <div className="row py-auto">
          {/* <MapDiv> */}
          <CustomMap></CustomMap>
          {/* </MapDiv> */}
        </div>
      </div>
    </>
  );
};

export default MapSection;

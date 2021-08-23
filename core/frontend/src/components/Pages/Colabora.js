import React from "react";
import DonateSection from "../Colabora/DonateSection";
import styled from "styled-components";
import GridSection from "../Colabora/GridSection";

const ColaboraContainer = styled.div`
  height: 100vh;
`;

const Colabora = () => {
  return (
    <ColaboraContainer>
      <DonateSection />
      <GridSection />
    </ColaboraContainer>
  );
};

export default Colabora;

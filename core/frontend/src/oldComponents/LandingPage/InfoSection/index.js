import React from "react";
import Card from "../UI/Card";
import { CardsInfo } from "./CardsInfo";
import { InfoContainer, InfoWrapper, InfoH1 } from "./InfoElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoH1>Sobre Nosotros</InfoH1>
        <InfoWrapper>
          {CardsInfo.map((card) => {
            return <Card img={card.img} title={card.title} desc={card.desc} />;
          })}
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

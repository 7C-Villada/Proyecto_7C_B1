import React, { useState } from "react";
import {
  CovenantContainer,
  CovenantH1,
  CovenantWrapper,
  ChevronLeft,
  ChevronRight,
  ImgWrapper,
  CovenantImg,
} from "./CovenantElements";
import Scouts from "../../../fotos/Scouts.png";
import UNC from "../../../fotos/unc.jpg";

const CovenantSection = () => {
  const [current, setCurrent] = useState(0);
  const Images = [Scouts, UNC];
  const length = Images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <CovenantContainer>
        <CovenantH1>Convenios</CovenantH1>
        <CovenantWrapper>
          <ChevronLeft onClick={prevSlide} />
          <ChevronRight onClick={nextSlide} />
          <ImgWrapper>
            {Images.map((slide, index) => {
              return (
                <>
                  {index === current && (
                    <CovenantImg src={slide} alt="Carrousel Imagen" />
                  )}
                </>
              );
            })}
          </ImgWrapper>
        </CovenantWrapper>
      </CovenantContainer>
    </>
  );
};

export default CovenantSection;

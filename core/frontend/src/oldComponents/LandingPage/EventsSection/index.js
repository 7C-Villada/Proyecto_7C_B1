import React, { useState } from "react";
import {
  EventsContainer,
  EventsH1,
  EventsWrapper,
  CarouselContainer,
  CarouselImg,
  ChevronLeft,
  ChevronRight,
} from "./EventsElements";
import Card from "../UI/Card";
import { CarouselData } from "./CarouselData";

const EventsSection = () => {
  const length = CarouselData.length;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <EventsContainer>
        <EventsH1>Eventos</EventsH1>
        <EventsWrapper>
          <CarouselContainer>
            <ChevronLeft onClick={prevSlide} />
            <ChevronRight onClick={nextSlide} />
            {CarouselData.map((slide, index) => {
              return (
                <>
                  {index === current && (
                    <CarouselImg src={slide.img} alt={slide.alt} />
                  )}
                </>
              );
            })}
          </CarouselContainer>
          <Card />
        </EventsWrapper>
      </EventsContainer>
    </>
  );
};

export default EventsSection;

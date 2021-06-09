import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
      {CarouselData.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"}>
            {index === current && (
              <img src={slide.img} alt={slide.alt} className="image" />
            )}
            {index === current && <h2 className="date">{slide.date}</h2>}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;

import React, { useState } from "react";
import "./Convenios.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Convenios = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="convenios-container">
      <FaChevronLeft className="convenios-aleft" onClick={prevSlide} />
      <FaChevronRight className="convenios-aright" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <img
            src={slide.img}
            alt={slide.alt}
            className={`carousel-img ${index === current ? "active" : ""}`}
          />
        );
      })}
    </div>
  );
};

export default Convenios;

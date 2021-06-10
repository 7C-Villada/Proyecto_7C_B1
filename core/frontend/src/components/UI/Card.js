import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-info">
        <img src={props.img} alt={props.alt} className="card-img"></img>
        <h1 className="card-title">{props.title}</h1>
        <p className="card-description">Descripción</p>
      </div>
      <button className="card-btn">Más Información +</button>
    </div>
  );
};

export default Card;

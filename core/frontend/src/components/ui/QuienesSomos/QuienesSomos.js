import React from "react";
import "./QuienesSomos.css";
import Mision from "./images/mision.jpg";
import Vision from "./images/vision.jpg";
import Valores from "./images/valores.png";


const QuienesSomos = () => {
  return (
    <div className="quienessomos">
      <div className="cabeza">
        <p>Conócenos</p>
        <h1>¿Quiénes Somos?</h1>
      </div>
      
      <div class="wrap">
        <div class="tile"> 
          <img src={Mision}/>
          <div class="text">
          <h1>Nuestra Misión</h1>
          <p class="animate-text">Ver jóvenes comprometidos con una sociedad sustentable, que ejerzan sus derechos a vivir en libertad, equilibrio y armonía.</p>
          </div>
        </div>
        <div class="tile"> 
          <img src={Vision}/>
          <div class="text">
          <h1>Nuestra Visión</h1>
          <p class="animate-text">Educar en valores a través del aprender haciendo, aprender jugando y aprender experimentando en espacios naturales.</p>

          </div>
        </div>
          
          <div class="tile"> 
          <img src={Valores}/>
          <div class="text">
          <h1>Nuestros Valores</h1>
          <p class="animate-text">El amor y el cuidado de la naturaleza. Generosidad con el saber. Respeto por los otros. Coherencia entre el decir y el hacer. Inclusión</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;

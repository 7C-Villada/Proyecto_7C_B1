import React from "react";
import "./QueHacemos.css";
import Educacion from "./images/educacion.jpeg";
import Ambiente from "./images/ambiente.jpg";
import Sustentabilidad from "./images/sustentabilidad.jpeg";


const QueHacemos = () => {
  return (
    <div className="quehacemos">
      <div className="cabeza">
        <p>Conócenos</p>
        <h1>¿Qué Hacemos?</h1>
      </div>
      <div class="wrap">
        <div class="tile"> 
          <img src={Educacion}/>
          <div class="text">
          <h1>Educación</h1>
          <p class="animate-text">Conocer los recursos naturales. Entender los procesos del ambiente. Aprender sobre bosque nativo.</p>
          </div>
        </div>


        <div class="tile"> 
        <img src={Ambiente}/>
          <div class="text">
          <h1>Ambiente</h1>
          <p class="animate-text">Identificar los recursos disponibles. Respetar la naturaleza. Reconocer el bosque de nuestra región.</p>

          </div>
        </div>
          
          <div class="tile"> 
          <img src={Sustentabilidad}/>
          <div class="text">
          <h1>Sustentabilidad</h1>
          <p class="animate-text">Utilizar racionalmente los recursos. Vivir en armonía con el ambiente. Restaurar el bosque y vivir en equilibrio con él.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QueHacemos;

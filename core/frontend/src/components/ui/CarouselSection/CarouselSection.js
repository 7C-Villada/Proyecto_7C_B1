import React, { useState, useEffect } from "react";
import axios from "axios";

import placeholder1 from "./bg.jpg";
import placeholder2 from "./bg2.jpg";
import placeholder3 from "./bg3.jpg";

import { Header, CarouselImg, CarouselItem } from "./style/CarouselSectionStyle";

const CarouselSection = () => {

  const [proyectoData, setProyectoData] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
    axios
      .get("/api/ultimos-proyectos/",config)
      .then((response) => {
        console.log(response);
        setProyectoData(response.data);
        console.log(proyectoData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let isActive = true;

  return (
    <>
      <div className="container px-4 py-5">
        <Header>Actividades Recientes</Header>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
          {
            proyectoData != [] ?
            proyectoData.map((proyecto) => {
                
              let img = "https://res.cloudinary.com/aprenderhaciendo/" + proyecto.imagen;

              if (isActive) {
                isActive = false;
                console.log(isActive);
                return (
                  <div className="carousel-item active">
                    <img src={img} className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{proyecto.title}</h5>
                      <p>{proyecto.description}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="carousel-item">
                    <img src={img} className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{proyecto.title}</h5>
                      <p>{proyecto.description}</p>
                    </div>
                  </div>
                );
              }
            })
            : 
            <div className="col pt-3">
              <p className="small text-muted"><em>Ups... Parece que aún no hay nadie.</em></p>
            </div>
          }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselSection;
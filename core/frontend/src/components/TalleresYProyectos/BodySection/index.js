import React, { useState, useEffect } from "react";
import {
  BodyContainer,
  CardContainer,
} from "./BodyElements";
import Card from "./Card";
import axios from 'axios';

const BodySection = () => {

  const [talleres, setTalleres] = useState([])

  useEffect(() => {
    axios
      .get('/api/taller/')
      .then((response) => {
        setTalleres(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const [proyectos, setProyectos] = useState([])

  useEffect(() => {
    axios
      .get('/api/proyecto/')
      .then((response) => {
        setProyectos(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])



  return (
    <BodyContainer>
        {talleres.filter(taller => taller.title.includes("")).map((filteredTaller) => {
          return (
            <CardContainer>
              <Card url={"taller/"} id={filteredTaller.id} titulo={filteredTaller.title} sDate={filteredTaller.startDate} image={filteredTaller.imagen} />
            </CardContainer>
          )
        })}
        {proyectos.filter(proyecto => proyecto.title.includes("")).map((filteredProyecto) => {
          return (
            <CardContainer>
              <Card url={"proyecto/"} id={filteredProyecto.id} titulo={filteredProyecto.title} sDate={filteredProyecto.startDate} image={filteredProyecto.imagen} />
            </CardContainer>
          )
        })}
    </BodyContainer>
  );
};

export default BodySection;
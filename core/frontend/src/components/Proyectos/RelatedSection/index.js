import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {
    RelatedContainer,
    CardContainer,
  } from "./RelatedElements";
 import Card from "./Card";


const RelatedSection = () => {

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
        <RelatedContainer>
          {proyectos.filter(proyecto => proyecto.title.includes("")).map((filteredProyecto) => {
            return (
              <CardContainer>
                <Card url={"taller/"} id={filteredProyecto.id} titulo={filteredProyecto.title} sDate={filteredProyecto.startDate} image={filteredProyecto.imagen} />
              </CardContainer>
            )
          })}
          <h1>aca van los related</h1>
        </RelatedContainer>
    );
  };

export default RelatedSection;
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {
    RelatedContainer,
    CardContainer,
  } from "./RelatedElements";
 import Card from "./Card";


const RelatedSection = () => {

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

    return (
        <RelatedContainer>
          {talleres.filter(taller => taller.title.includes("")).map((filteredTaller) => {
            return (
              <CardContainer>
                <Card url={"taller/"} id={filteredTaller.id} titulo={filteredTaller.title} sDate={filteredTaller.startDate} image={filteredTaller.imagen} />
              </CardContainer>
            )
          })}
          <h1>aca van los related</h1>
        </RelatedContainer>
    );
  };

export default RelatedSection;
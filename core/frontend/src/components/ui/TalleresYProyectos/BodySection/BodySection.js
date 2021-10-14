import React, { useState, useEffect } from "react";
import { BodyContainer, CardContainer, CardCol, Square } from "./BodyElements";
import Card from "./Card";
import axios from "axios";

const BodySection = () => {
  const [talleres, setTalleres] = useState([]);

  useEffect(() => {
    axios
      .get("/api/taller/")
      .then((response) => {
        setTalleres(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/proyecto/")
      .then((response) => {
        setProyectos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BodyContainer>
      <CardContainer>
        {talleres != [] ? (
          talleres
            .filter((taller) => taller.title.includes(""))
            .map((filteredTaller) => {
              return (
                <CardCol>
                  <Square>
                    <Card
                      url={"taller/"}
                      id={filteredTaller.id}
                      titulo={filteredTaller.title}
                      sDate={filteredTaller.startDate}
                      image={filteredTaller.imagen}
                    />
                  </Square>
                </CardCol>
              );
            })
        ) : (
          <div className="col pt-3">
            <p className="small text-muted">
              <em>Ups... Parece que aún no hay nadie.</em>
            </p>
          </div>
        )}

        {proyectos != [] ? (
          proyectos
            .filter((proyecto) => proyecto.title.includes(""))
            .map((filteredProyecto) => {
              return (
                <CardCol>
                  <Square>
                    <Card
                      url={"proyecto/"}
                      id={filteredProyecto.id}
                      titulo={filteredProyecto.title}
                      sDate={filteredProyecto.startDate}
                      image={filteredProyecto.imagen}
                    />
                  </Square>
                </CardCol>
              );
            })
        ) : (
          <div className="col pt-3">
            <p className="small text-muted">
              <em>Ups... Parece que aún no hay nadie.</em>
            </p>
          </div>
        )}
      </CardContainer>
    </BodyContainer>
  );
};

export default BodySection;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../CampamentosSection/CampamentosSection";
import TyPCard from "./TyPCard";

const FilterSection = () => {
  const [talleres, setTalleres] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  let hola = [];

  useEffect(() => {
    axios
      .get("/api/taller/")
      .then((response) => {
        setTalleres(response.data);
        hola = hola.concat(response.data);
        // console.log(hola);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/api/proyecto/")
      .then((response) => {
        setProyectos(response.data);
        hola = hola.concat(response.data);
        // console.log(hola);
        setFilteredData(hola);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilteredData = (event) => {
    let resultadoBusqueda = event.target.value;
    let talleresproyectos = talleres.concat(proyectos);

    let result = [];
    result = talleresproyectos.filter((tp) => {
      return tp.title.search(resultadoBusqueda) !== -1;
    });

    setFilteredData(result);
  };

  return (
    <>
      <div className="container px-4 py-5">
        <div className="container-fluid pt-4">
          <Header>Talleres y Proyectos</Header>
          <p className="col-md-8 fs-4">
            Descubre nuestros Talleres y Proyectos.
          </p>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            onChange={handleFilteredData}
          ></input>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch py-4">
          {filteredData.map((item) => {
            
            var link;
            if (item.tipo === 1) {
              link = "/proyecto/" + item.id;
            } else {
              link = "/taller/" + item.id;
            }

            return (
              <TyPCard
                randomImage={item.imagen}
                title={item.title}
                date={item.startDate}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterSection;

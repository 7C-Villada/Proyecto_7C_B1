import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../CampamentosSection/CampamentosSection";
import TyPCard from "./TyPCard";
import CalendarFilter from "../CalendarSection/CalendarFilter";

const FilterSection = () => {
  const [talleres, setTalleres] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [filteredData, setFilteredData] = useState(talleresproyectos);

  const talleresproyectos = [...talleres, ...proyectos];

  useEffect(() => {
    axios
      .get("/api/taller/")
      .then((response) => {
        setTalleres(response.data);
        talleresproyectos.push(...response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/api/proyecto/")
      .then((response) => {
        setProyectos(response.data);
        talleresproyectos.push(...response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(talleresproyectos);
  }, []);

  const handleFilteredData = (event) => {
    let resultadoBusqueda = event.target.value;
    console.log(talleresproyectos);

    let result = [];
    result = talleresproyectos.filter((tp, index) => {
      return tp.title.search(resultadoBusqueda) !== -1;
    });

    talleresproyectos.push(result);
  };

  return (
    <>
      <div className="container px-4 py-5">
        <div className="container-fluid pt-4">
          <Header>Talleres y Proyectos</Header>
          <p className="col-md-8 fs-4">
            Descubre nuestros Talleres y Proyectos.
          </p>
          <div className="d-flex flex-row">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar"
              onChange={handleFilteredData}
            ></input>
            <CalendarFilter />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch py-4">
          {talleresproyectos.map((item) => {
            
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

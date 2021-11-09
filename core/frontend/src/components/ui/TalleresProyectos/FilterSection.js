import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../CampamentosSection/CampamentosSection";
import TyPCard from "./TyPCard";
import CalendarFilter from "../CalendarSection/CalendarFilter";
import { FilterContainer, SearchInput } from "./FilterSectionElements";

const FilterSection = () => {
  const [items, setItems] = useState([]);
  const [filteredData, setFilteredData] = useState(items);

  useEffect(() => {
    const talleres = axios.get("/api/taller");
    const proyectos = axios.get("/api/proyecto/");

    axios.all([talleres, proyectos]).then(
      axios.spread((...responses) => {
        console.log(responses[0].data.concat(responses[1].data));
        setItems(responses[0].data.concat(responses[1].data));
        setFilteredData(responses[0].data.concat(responses[1].data));
      })
    );
  }, []);

  //This function acts as a callback and a filter
  const handleCallback = (date) => {
    console.log(date);
    if (date !== null) {
      let result = [];

      result = filteredData.filter((tp) => {
        return tp.startDate === date.toISOString().substring(0, 10);
      });

      setFilteredData(result);
    } else {
      setFilteredData(items);
    }
  };

  const handleFilteredData = (event) => {
    let resultadoBusqueda = event.target.value.toLowerCase();
    let hola = filteredData;

    let result = [];
    result = items.filter((tp) => {
      return tp.title.toLowerCase().search(resultadoBusqueda) !== -1;
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
          <FilterContainer>
            <SearchInput
              type="text"
              className="form-control"
              placeholder="Buscar"
              onChange={handleFilteredData}
            ></SearchInput>
            <CalendarFilter parentCallback={handleCallback} />
          </FilterContainer>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch py-4">
          {filteredData.map((item) => {
            return (
              <TyPCard
                randomImage={item.imagen}
                title={item.title}
                date={item.startDate}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterSection;

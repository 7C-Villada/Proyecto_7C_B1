import React, { useState, useEffect } from "react";
import {
  BodyContainer,
  CardContainer,
  CardCol,

  Square,

} from "./BodyElements";
import Card from "./Card";
import axios from 'axios';
//import {searchQuery, typeQuery} from "../HeaderSection/HeaderSection"

var searchParam = "";
var typeParam = "";

//#region a
/*
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
      <CardContainer>

        

        {talleres.filter(taller => taller.title.includes(searchParam)).map((filteredTaller) => {
          return (

            <CardCol>
              <Square>
                
                <Card url={"taller/"} id={filteredTaller.id} titulo={filteredTaller.title} sDate={filteredTaller.startDate} image={filteredTaller.imagen} />

              </Square>
            </CardCol>

          )
        })}
        
        {proyectos.filter(proyecto => proyecto.title.includes(searchParam)).map((filteredProyecto) => {
          return (

            <CardCol>
              <Square>
                
                <Card url={"proyecto/"} id={filteredProyecto.id} titulo={filteredProyecto.title} sDate={filteredProyecto.startDate} image={filteredProyecto.imagen} />

              </Square>
            </CardCol>

          )
        })}

      </CardContainer>
    </BodyContainer>
  );
};
*/
//#endregion

class BodySection extends React.Component{
  state = {
    talleres: [],
    proyectos: [],
  }

  componentDidMount() {
    axios
      .get('/api/taller/')
      .then((response) => {
        const talleres = response.data;
        this.setState({ talleres });
      })
      .catch((error) => {
        console.log(error)
      })

      axios
      .get('/api/proyecto/')
      .then((response) => {
        const proyectos = response.data;
        this.setState({ proyectos });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render(){
    return(
      <BodyContainer>
        <CardContainer>

          {this.state.talleres.filter(taller => taller.title.includes("")).map((filteredTaller) => {
            return (

              <CardCol>
                <Square>
                  
                  <Card url={"taller/"} id={filteredTaller.id} titulo={filteredTaller.title} sDate={filteredTaller.startDate} image={filteredTaller.imagen} />

                </Square>
              </CardCol>

            )
          })}
          
          {this.state.proyectos.filter(proyecto => proyecto.title.includes(searchParam)).map((filteredProyecto) => {
            return (

              <CardCol>
                <Square>
                  
                  <Card url={"proyecto/"} id={filteredProyecto.id} titulo={filteredProyecto.title} sDate={filteredProyecto.startDate} image={filteredProyecto.imagen} />

                </Square>
              </CardCol>

            )
          })}

        </CardContainer>
      </BodyContainer>
    );
  }

};

export default BodySection;
//#region HeaderSection
import React, { Component, useState, useEffect } from "react";
import {
    HeaderContainer,
    HeaderBg,
    ImageBg,
    ContentRow,
    ContentCol,

    SearchContainer,

    SearchRow,

    SearchBarColumn,
    SearchBarRow,
    SearchBar,

    DropDownColumn,
    DropDownRow,
    DropDownButton,
    DropDown,
    DropDownItem,

    SearchButtonColumn,
    SearchButtonRow,
    SearchButton,
    Icon,

    TitleRow,
    HeaderTitle,
    Title,
    Subtitle,
} from "../HeaderSection/HeaderElements";

import Background from "../images/bg.jpg";

//#endregion

//#region BodySection
//import React, { useState, useEffect } from "react";
import {
  BodyContainer,
  CardContainer,
  CardCol,

  Square,

} from "../BodySection/BodyElements";
import Card from "../BodySection/Card";
import axios from 'axios';
//#endregion

var searchQuery = "";
var typeQuery = "";

class AllInOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            talleres: [],
            proyectos: [],
            title: "",
            type: "",
        }
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

  
  handleInputChange(event) {
    searchQuery = event.target.value;
  }

  handleDropDownChange(event) {
    typeQuery = event.target.value
  }

  handleFormSubmission(e) {
    this.setState({
        title: searchQuery,
        type: typeQuery
      });

    //alert("SEARCH QUERY: \n - Title: " + searchQuery + " \n - Type: " + typeQuery);

    e.preventDefault();
  }

  

  render() {
    return (
        <div>
            <HeaderContainer>
                <HeaderBg>
                    <ImageBg src={Background} type="image/jpg"/>
                </HeaderBg>
        
                <ContentRow>
        
                    {/* TÍTULO */}
                    <ContentCol>
                        <TitleRow>
        
                        <HeaderTitle>
                            <Title>Aprender</Title>
                            <Title primary>Haciendo</Title>
                            <Subtitle>Talleres y Proyectos.</Subtitle>
                            <br></br>
                            {/*<Subtitle>Input: {this.state.title}</Subtitle>*/}
                        </HeaderTitle>
                        
                        </TitleRow>
                    </ContentCol>
        
                    {/* BARRA DE BÚSQUEDA */}
                    <ContentCol>
                        <SearchRow>
        
                        {/* Barra */}
                            <SearchContainer onSubmit={this.handleFormSubmission.bind(this)}>
                                <SearchBarColumn>

                                <SearchBar name={"title"} type={"text"} autoComplete={"off"} onChange={this.handleInputChange.bind(this)} placeholder={"Filtrar talleres o proyectos por nombre..."}></SearchBar>
                                
                                </SearchBarColumn>
                                <DropDownColumn>
                                
                                <DropDown name={"type"} className={"dropdown"} onChange={this.handleDropDownChange.bind(this)}>
                                    <DropDownItem value={"todo"}>Todo</DropDownItem>
                                    <DropDownItem value={"talleres"}>Solo Talleres</DropDownItem>
                                    <DropDownItem value={"proyectos"}>Solo Proyectos</DropDownItem>
                                </DropDown>
                                
                                </DropDownColumn>
                                <SearchButtonColumn>
                                
                                    <SearchButton><Icon /></SearchButton>
                                
                                </SearchButtonColumn>
                            </SearchContainer>
        
                        </SearchRow>
                    </ContentCol>
        
                </ContentRow>
            </HeaderContainer>



            <BodyContainer>

                {this.state.type == "todo" &&
                    <CardContainer>

                        {this.state.talleres.filter(taller => taller.title.toLowerCase().includes(this.state.title.toLowerCase())).map((filteredTaller) => {
                            return (
                                <CardCol>
                                    <Square>
                                        <Card url={"taller/"} id={filteredTaller.id} titulo={filteredTaller.title} sDate={filteredTaller.startDate} image={filteredTaller.imagen} />
                                    </Square>
                                </CardCol>
                            )
                        })}
                
                        {this.state.proyectos.filter(proyecto => proyecto.title.toLowerCase().includes(this.state.title.toLowerCase())).map((filteredProyecto) => {
                            return (
                            <CardCol>
                                <Square>
                                    <Card url={"proyecto/"} id={filteredProyecto.id} titulo={filteredProyecto.title} sDate={filteredProyecto.startDate} image={filteredProyecto.imagen} />
                                </Square>
                            </CardCol>
                            )
                        })}
                    </CardContainer>
                }

                {this.state.type == "" &&    
                    <CardContainer>
                        {this.state.talleres.filter(taller => taller.title.toLowerCase().includes(this.state.title.toLowerCase())).map((filteredTaller) => {
                            return (
                                <CardCol>
                                    <Square>
                                        <Card url={"taller/"} id={filteredTaller.id} titulo={filteredTaller.title} sDate={filteredTaller.startDate} image={filteredTaller.imagen} />
                                    </Square>
                                </CardCol>
                            )
                        })}
                
                        {this.state.proyectos.filter(proyecto => proyecto.title.toLowerCase().includes(this.state.title.toLowerCase())).map((filteredProyecto) => {
                            return (
                            <CardCol>
                                <Square>
                                    <Card url={"proyecto/"} id={filteredProyecto.id} titulo={filteredProyecto.title} sDate={filteredProyecto.startDate} image={filteredProyecto.imagen} />
                                </Square>
                            </CardCol>
                            )
                        })}
                    </CardContainer>
                }

                {this.state.type == "talleres" &&
                    <CardContainer>
                        {this.state.talleres.filter(taller => taller.title.toLowerCase().includes(this.state.title.toLowerCase())).map((filteredTaller) => {
                            return (
                                <CardCol>
                                    <Square>
                                        <Card url={"taller/"} id={filteredTaller.id} titulo={filteredTaller.title} sDate={filteredTaller.startDate} image={filteredTaller.imagen} />
                                    </Square>
                                </CardCol>
                            )
                        })}
                    </CardContainer>
                }

                {this.state.type == "proyectos" &&
                    <CardContainer>
                        {this.state.proyectos.filter(proyecto => proyecto.title.toLowerCase().includes(this.state.title.toLowerCase())).map((filteredProyecto) => {
                            return (
                            <CardCol>
                                <Square>
                                    <Card url={"proyecto/"} id={filteredProyecto.id} titulo={filteredProyecto.title} sDate={filteredProyecto.startDate} image={filteredProyecto.imagen} />
                                </Square>
                            </CardCol>
                            )
                        })}
                    </CardContainer>
                }

            </BodyContainer>
        </div>
    );
  }
  
};

export default AllInOne;
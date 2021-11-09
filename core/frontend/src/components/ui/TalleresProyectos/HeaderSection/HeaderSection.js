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
} from "./HeaderElements";
import Background from "../images/bg.jpg";

var searchQuery;
var typeQuery;

class HeaderSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
    }
  }

  
  handleInputChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleDropDownChange(event) {
    this.setState({
      type: event.target.value
    });
  }

  handleFormSubmission(e) {
    searchQuery = this.state.title;
    typeQuery = this.state.type;
    
    //alert("SEARCH QUERY: \n - Title: " + searchQuery + " \n - Type: " + typeQuery);

    //e.preventDefault();
  }

  

  render() {
    return (
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

                          <SearchBar name={"title"} type={"text"} autoComplete={"off"} onChange={this.handleInputChange.bind(this)} value={this.state.title} placeholder={"Filtrar talleres o proyectos por nombre..."}></SearchBar>
                        
                        </SearchBarColumn>
                        <DropDownColumn>
                        
                          <DropDown name={"type"} className={"dropdown"} value={this.state.type} onChange={this.handleDropDownChange.bind(this)}>
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
    );
  }
  
};

export default HeaderSection;
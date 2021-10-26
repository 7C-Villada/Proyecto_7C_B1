import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
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

var titleParam;

class params extends React.Component{
  titleParam = "";
};

class HeaderSection extends React.Component{

  constructor(props) {
		super(props);
    this.state = {
      value: ''
    }
	}

  handleInputChange(e){
    titleParam = e.target.value;
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit(e){
    alert('A name was submitted: ' + titleParam);
    //e.preventDefault();
  }

  render () {
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
                    <Subtitle>{titleParam}</Subtitle>
                  </HeaderTitle>
                
                </TitleRow>
            </ContentCol>

            {/* BARRA DE BÚSQUEDA */}
            <ContentCol>
                <SearchRow>

                  {/* Barra */}
                    <SearchContainer>
                      
                      <SearchBarColumn>
                        <SearchBar placeholder={"Filtrar talleres o proyectos por nombre..."} onChange={this.handleInputChange.bind(this)} value={this.state.value}></SearchBar>
                      </SearchBarColumn>

                      <DropDownColumn>
                        
                        <DropDownButton id="dropdownMenuButton" data-toggle="dropdown" value={this.state.value} onChange={this.handleInputChange.bind(this)}><b>Mostrar</b></DropDownButton>
                        <DropDown>
                          <DropDownItem value="talleres">Solo Talleres</DropDownItem>
                          <DropDownItem value="proyectos">Solo Proyectos</DropDownItem>
                          <DropDownItem value="ambos">Ambos</DropDownItem>
                        </DropDown>

                      </DropDownColumn>

                      <SearchButtonColumn>
                        <form onSubmit={this.handleSubmit}>
                          <SearchButton><Icon /></SearchButton>
                        </form>
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
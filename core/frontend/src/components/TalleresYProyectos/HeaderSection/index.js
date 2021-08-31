import React from "react";
import {
  HeaderContainer,
  HeaderBg,
  ImageBg,
  HeaderTitle,
  HeaderH1,
  HeaderP,
  SearchContainer,
  SearchBar,
  SearchBarColumn,
  CheckBox,
  A,
  CheckboxColumn,
  SearchButton,
  SearchButtonColumn,
  Icon,

} from "./HeaderElements";
import Background from "../../../videos/bg.jpg";
import Lens from "../../../fotos/lens.png";

class inputMethods {

  constructor(props){
    this.state = {
      title: "",
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
  } 

  handleInputChange = (event) => {
    this.setState({
      title: event.target.value
    })
    console.log(this.state)
  }
  
}

const HeaderSection = () => {

  return (
    <HeaderContainer>
      <HeaderBg>
        <ImageBg src={Background} type="image/jpg"></ImageBg>
      </HeaderBg>

      <HeaderTitle>
        <HeaderH1>Aprender</HeaderH1>
        <HeaderH1 primary>Haciendo</HeaderH1>
        <HeaderP>
          Talleres y Proyectos.
        </HeaderP>
      </HeaderTitle>

      <SearchContainer>

          <SearchBarColumn>
            <SearchBar onChange={inputMethods.handleInputChange} name="title" placeholder={'Ingrese el nombre del taller o proyecto...'}></SearchBar>
          </SearchBarColumn>

          <CheckboxColumn>
            <CheckBox type='checkbox'></CheckBox>
            <A>Talleres</A>
            <br></br>
            <CheckBox type='checkbox'></CheckBox>
            <A>Proyectos</A>
          </CheckboxColumn>

          <SearchButtonColumn>
            <SearchButton><Icon src={Lens}></Icon></SearchButton>
          </SearchButtonColumn>

      </SearchContainer>

    </HeaderContainer>
  );
};

export default HeaderSection;
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {
    HeaderContainer,
    HeaderBg,
    ImageBg,
    InfoContainer,
    TitleBox,
    Title,
    DateBox,
    Date,
  } from "./HeaderElements";
import ScrollToTop from "./ScrollToTop";

const HeaderSection = () => {
    const [proyectos, setProyectos] = useState([])
    const { id } = useParams()
  
    useEffect(() => {
      axios
        .get('/api/proyecto/' + id )
        .then((response) => {
          setProyectos(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])
  
    return (
        <HeaderContainer>
          <ScrollToTop />
          
          <HeaderBg>
            <ImageBg src={`https://res.cloudinary.com/aprenderhaciendo/${proyectos.imagen}`} />
          </HeaderBg>

          <InfoContainer>
            <TitleBox>
              <Title primary>{proyectos.title}</Title>
            </TitleBox>

            <DateBox>
              <Date>{proyectos.startDate}</Date>
            </DateBox>
          </InfoContainer>

        </HeaderContainer>
    );
  };

export default HeaderSection;
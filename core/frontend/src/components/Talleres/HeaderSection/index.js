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
    const [taller, setTalleres] = useState([])
    const { id } = useParams()
    const { url } = useParams()
  
    useEffect(() => {
      axios
        .get('/api/taller/' + id )
        .then((response) => {
          setTalleres(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])
  
    return (
        <HeaderContainer>
          <ScrollToTop />
          
          <HeaderBg>
            <ImageBg src={`https://res.cloudinary.com/aprenderhaciendo/${taller.imagen}`} />
          </HeaderBg>

          <InfoContainer>
            <TitleBox>
              <Title primary>{taller.title}</Title>
            </TitleBox>

            <DateBox>
              <Date>{taller.startDate}</Date>
            </DateBox>
          </InfoContainer>

        </HeaderContainer>
    );
  };

export default HeaderSection;
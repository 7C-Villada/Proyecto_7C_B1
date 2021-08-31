import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {
    BodyContainer, 
    DescPanel, 
    Description, 
    DescriptionBox, 
    SDateBox,
    EDateBox, 
    AboutBox, 
    ImagePanel, 
    ImageBox,
    CarouselContainer,
    ChevronLeft,
    ChevronRight,
    CarouselImg,
} from "../BodySection/BodyElements";
import { CarouselData } from "./CarouselData";

const BodySection = () => {

    const length = CarouselData.length;
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    };



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
        <BodyContainer>

            <DescPanel>
                <AboutBox>
                    <a>Sobre el proyecto...</a>
                </AboutBox>
                <DescriptionBox>
                    <Description>{proyectos.description}</Description>
                </DescriptionBox>
                <SDateBox>
                    <Description>Fecha de Inicio: {proyectos.startDate}</Description>
                </SDateBox>
                <EDateBox>
                    <Description>Concluye: </Description>
                </EDateBox>
            </DescPanel>

            <ImagePanel>
                <ImageBox>

                    <CarouselContainer>
                        <ChevronLeft onClick={prevSlide} />
                        <ChevronRight onClick={nextSlide} />
                        {CarouselData.map((slide, index) => {
                            return (
                                <>
                                {index === current && (
                                    <CarouselImg src={slide.img} alt={slide.alt} />
                                )}
                                </>
                            );
                        })}
                    </CarouselContainer>
                    
                </ImageBox>
            </ImagePanel>

        </BodyContainer>
    )
};

export default BodySection;
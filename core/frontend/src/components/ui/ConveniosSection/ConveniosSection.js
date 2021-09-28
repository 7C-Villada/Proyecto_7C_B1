import React, { useState, useEffect } from 'react'

import { DivContainer, CarouselSlide } from './styles/ConveniosStyle'
import { Header } from '../CardSection/style/CardSectionStyle'

import foto1 from '../../../fotos/Scouts.png'
import foto2 from '../../../fotos/unc.jpg'
import axios from "axios";

const ConveniosSection = () => {

    const [convenioData, setConvenioData] = useState([]);

    useEffect(() => {
        let config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        axios
            .get("/api/convenio/",config)
            .then((response) => {
                console.log(response);
                setConvenioData(response.data);
                console.log(convenioData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    let isActive = true;

    return (
        <>
            <DivContainer>
                <Header>Convenios</Header>
                <CarouselSlide data-bs-ride="carousel">
                    <div className="carousel-inner">
                    {
                        convenioData != [] ?
                        convenioData.map((convenio) => {
                            
                            let img = "https://res.cloudinary.com/aprenderhaciendo/" + convenio.imagen;

                            if (isActive) {
                                isActive = false;
                                console.log(isActive);
                                return (
                                    <div className="carousel-item active">
                                        <img src={img} className="d-block w-100" alt="..."></img>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="carousel-item">
                                        <img src={img} className="d-block w-100" alt="..."></img>
                                    </div>
                                );
                            }
                        })
                        : 
                        <div className="col pt-3">
                        <p className="small text-muted"><em>Ups... Parece que aún no hay nadie.</em></p>
                        </div>
                    }
                        {/* <div className="carousel-item active">
                            <img src={foto1} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={foto2} className="d-block w-100" alt="..."></img>
                        </div> */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#principalCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#principalCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </CarouselSlide>
            </DivContainer>
        </>
    )
}

export default ConveniosSection

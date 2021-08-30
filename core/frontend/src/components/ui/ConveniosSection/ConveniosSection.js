import React from 'react'

import { DivContainer, CarouselSlide } from './styles/ConveniosStyle'
import { Header } from '../CardSection/style/CardSectionStyle'

import foto1 from '../../../fotos/Scouts.png'
import foto2 from '../../../fotos/unc.jpg'

const ConveniosSection = () => {
    return (
        <>
            <DivContainer>
                <Header>Convenios</Header>
                <CarouselSlide data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={foto1} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={foto2} className="d-block w-100" alt="..."></img>
                        </div>
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

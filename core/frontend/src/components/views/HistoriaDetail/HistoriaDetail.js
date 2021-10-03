import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from "axios";

import styled from "styled-components";

export const Header = styled.h2.attrs({
    className: "col fw-bold"
  })`
    color: rgb(62,35,7);
    margin-bottom: none !important;
  `;


export const CarouselImg = styled.img.attrs(props => ({
    className: "d-block w-100",
    src: props.src,
  }))`
  `;


export const CarouselItem = styled.div.attrs(props => ({
    className:  (props.active ? "carousel-item active" : "carousel-item")
  }))`
    height: 400px;
    
    @media screen and (max-width: 768px) {
      height: 175px;
    }
    
  `; 

const HistoriaDetail = () => {
  const { id } = useParams();

  const [historiaData, setHistoriaData] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
    var endpoint = "/api/historia/" + id;

    axios
      .get(endpoint, config)
      .then((response) => {
        setHistoriaData(response.data);
        console.log(response.data.imageAlbum);
        axios
        .get("/api/image-album/" + response.data.imageAlbum , config)
        .then((response) => {
          setAlbumData(response.data.images);
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let isActive = true;

  return(
    <div className="container px-4 py-5">
      <div className="row align-items-center">
        <Header>{ historiaData.title }</Header>
        <em className="col-2 small text-muted">{historiaData.date}</em>
        {/* <p className="col small text-muted"><em>{historiaData.date}</em></p> */}
      </div>

      <div className="container pt-4 pb-5 px-3 border-top">
        {historiaData.content}
      </div>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        {
          albumData != [] ?
          albumData.map((image) => {
              
            let img = "https://res.cloudinary.com/aprenderhaciendo/" + image.imagen;

            if (isActive) {
              isActive = false;
              console.log(isActive);
              return (
                <CarouselItem active>
                  <img src={img} className="d-block w-100" alt="..."></img>
                </CarouselItem>
              );
            } else {
              return (
                <CarouselItem>
                  <img src={img} className="d-block w-100" alt="..."></img>
                </CarouselItem>
              );
            }
          })
          : 
          <div className="col pt-3">
            <p className="small text-muted"><em>Ups... Parece que aún no hay nadie.</em></p>
          </div>
        }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HistoriaDetail;
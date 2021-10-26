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

  export const Date = styled.span.attrs({
    className: "col-md-auto small text-muted"
  })`
    white-space:nowrap;
  `;

  export const Content = styled.p.attrs({
    className: ""
  })`
    margin: 0;
    text-align: justify;
    white-space: pre-line;
  `;

export const CarouselItem = styled.div.attrs(props => ({
    className:  (props.active ? "carousel-item active" : "carousel-item")
  }))`
    height: 400px;
    
    @media screen and (max-width: 768px) {
      height: 175px;
    }
    
  `; 

  export const ButtonFormaParte = styled.button.attrs(props =>({
    className: "btn px-4 mb-5 gap-3 rounded-pill",
    type: "button",
    onClick: props.function,
  }))`
    color: #f8f0bb !important;
    font-size: 1.6rem;
    background-color: #618817;
    border-color: #618817;
    box-shadow: 0px 3px 6px black;
    $btn-padding-y: "10";
    &:hover {
      color: #618817 !important;
      background-color: #f8f0bb;
      border-color: #618817;
    }
    &:focus {
      outline: none !important;
      box-shadow: none;
    }
  
    @media screen and (max-width: 480px) {
      font-size: 1.2rem;
    }
  `;

const HistoriaDetail = () => {
  const { id } = useParams();

  const [historiaData, setHistoriaData] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  var endpoint = "/api/historia/" + id;

  useEffect(() => {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }

    axios
      .get(endpoint, config)
      .then((response) => {
        setHistoriaData(response.data);
        axios
        .get("/api/image-album/" + response.data.imageAlbum , config)
        .then((response) => {
          setAlbumData(response.data.images);
        })
        .catch((error) => {
        });
      })
      .catch((error) => {
      });
  }, []);

  const getFormUrl = () => {
    axios.get(endpoint).then((response) => {
      let link = response.data.link;
      let statusCode = response.status;
      if (statusCode === 200) {
        if (link.includes('https://')) {
          window.open(link, "_blank");
        } else {
          link = 'https://' + link;
          window.open(link, "_blank");
        }
      } else {
        console.log('No link provided ;)')
      }
    });
  };

  let isActive = true;

  return(
    <div className="container px-4 py-5">
      <div className="row align-items-center">
        <Header>{ historiaData.title }</Header>
        <Date>{historiaData.date}</Date>
      </div>

      <div className="container pt-4 pb-5 px-3 border-top">
        <Content>
          {historiaData.content}
        </Content>
      </div>

    {
      // console.log(historiaData.link + "caca")
      historiaData.link !== null ? 
      <div className="container pt-4 pb-5 px-3 d-flex justify-content-center">
        <ButtonFormaParte function={getFormUrl}>Inscribirse</ButtonFormaParte>
      </div>
      :
      <div></div>
    }

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        {
          albumData != [] ?
          albumData.map((image) => {
              
            let img = "https://res.cloudinary.com/aprenderhaciendo/" + image.imagen;

            if (isActive) {
              isActive = false;
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
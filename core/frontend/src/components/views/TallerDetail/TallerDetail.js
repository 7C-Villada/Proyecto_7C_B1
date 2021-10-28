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

const TallerDetail = () => {
  const { id } = useParams();

  const [tallerData, setTallerData] = useState([]);

  var endpoint = "/api/taller/" + id;

  useEffect(() => {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }

    axios
      .get(endpoint, config)
      .then((response) => {
        setTallerData(response.data);
        console.log(response.data)
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

  return(
    <div className="container px-4 py-5">
      <div className="row align-items-center">
        <Header>{ tallerData.title }</Header>
        <Date>{tallerData.date}</Date>
      </div>

      <div className="container pt-4 pb-5 px-3 border-top">
        <Content>
          {tallerData.description}
        </Content>
      </div>

    {
      tallerData.link !== null ? 
      <div className="container pt-4 pb-5 px-3 d-flex justify-content-center">
        <ButtonFormaParte function={getFormUrl}>Inscribirse</ButtonFormaParte>
      </div>
      :
      <div></div>
    }

    <div className="container d-flex justify-content-center">
        <img className="img-fluid" src={"https://res.cloudinary.com/aprenderhaciendo/" + tallerData.imagen}></img>
    </div>

    </div>
  );
}

export default TallerDetail;
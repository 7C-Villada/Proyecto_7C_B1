import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import imgCard1 from './static/unsplash-photo-1.jpg';
import imgCard2 from './static/unsplash-photo-2.jpg';
import imgCard3 from './static/unsplash-photo-3.jpg';
import logo from '../Navbar/Logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import axios from "axios";

export const Card = styled.div.attrs({
  className: "card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
})`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 1rem;
  border-color: white;
  transition: transform .1s; 

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.2)), url(${(props) => props.bg});
    border-color: #50b559;
    transform: scale(1.06);
  }
`;

const CampamentosSection = () => {

  const [historiaData, setHistoriaData] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
    axios
      .get("/api/historia/",config)
      .then((response) => {
        setHistoriaData(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div class="container py-4">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Campamentos</h1>
            <p class="col-md-8 fs-4">Aquí encontrarás alguna de nuestras tantas historias...</p>
            <button class="btn btn-primary btn-lg" type="button">Example button</button>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {
          historiaData != [] ?
          historiaData.map((historia) => {

            return (
              <div className="col">
              <Link to="/conocenos/#como_hacemos" className="text-decoration-none">
                <Card bg={imgCard3}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{historia.title}</h2>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img src={logo} alt="¿Cómo lo hacemos?" width="32" height="32" className="rounded-circle border border-white"></img>
                    </li>
                    <li className="d-flex align-items-center">
                      <small>{historia.date}</small>
                    </li>
                    </ul>
                </div>
                </Card>
              </Link>
            </div>
            );

          })
          : 
          <div className="col pt-3">
            <p className="small text-muted"><em>Ups... Parece que aún no hay nadie.</em></p>
          </div>
        }


        </div>
      </div>
    </>
  )
}

export default CampamentosSection
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../Navbar/Logo.png";
import { HashLink as Link } from "react-router-hash-link";
import axios from "axios";

export const Card = styled.div.attrs({
  className:
    "card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg",
})`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 1rem;
  border-color: white;
  transition: transform 0.1s;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.2)),
      url(${(props) => props.bg});
    border-color: #618817;
    transform: scale(1.06);
  }
`;

export const Header = styled.h1.attrs({
  className: "display-5 fw-bold",
})`
  color: rgb(62, 35, 7);
`;

const CampamentosSection = () => {
  const [historiaData, setHistoriaData] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .get("/api/historia/", config)
      .then((response) => {
        setHistoriaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/api/image-album/", config)
      .then((response) => {
        setAlbumData(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="rounded-3">
          <div className="container-fluid pt-4">
            <Header>Campamentos</Header>
            <p className="col-md-8 fs-4">
              Aquí encontrarás alguna de nuestras tantas historias...
            </p>
            {/* <button className="btn btn-primary btn-lg" type="button">Example button</button> */}
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 pt-3 pb-5 px-3">
          {historiaData != [] ? (
            historiaData.map((historia) => {
              var storyAlbum;
              var randNumber;
              var randomImage;
              var link;

              for (var album of albumData) {
                if (historia.imageAlbum === album.id) {
                  storyAlbum = album;
                  randNumber = randomNumber(0, album.images.length);
                  randomImage =
                    "https://res.cloudinary.com/aprenderhaciendo/" +
                    album.images[randNumber].imagen;
                  link = "/historia/" + historia.id;
                }
              }

              return (
                <div className="col">
                  <Link to={link} className="text-decoration-none">
                    <Card bg={randomImage}>
                      <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                          {historia.title}
                        </h2>
                        <ul className="d-flex list-unstyled mt-auto">
                          <li className="me-auto">
                            <img
                              src={logo}
                              width="32"
                              height="32"
                              className="rounded-circle border border-white"
                            ></img>
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
          ) : (
            <div className="col pt-3">
              <p className="small text-muted">
                <em>Ups... Parece que aún no hay nadie.</em>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CampamentosSection;

import React from "react";
import imgCard1 from './static/unsplash-photo-1.jpg';
import imgCard2 from './static/unsplash-photo-2.jpg';
import imgCard3 from './static/unsplash-photo-3.jpg';
import logo from '../Navbar/Logo.png';
import { Card, Header } from './style/CardSectionStyle.js';
import { HashLink as Link } from 'react-router-hash-link';

const CardSection = () => {
  return (
    <>
        <div className="container px-4 py-5" id="custom-cards">
            <Header>Sobre Nosotros</Header>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
                <Link to="/conocenos/#quienes_somos" className="text-decoration-none">
                    <Card bg={imgCard1}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">¿Quiénes Somos?</h2>
                            <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <img src={logo} alt="¿Quiénes Somos?" width="32" height="32" className="rounded-circle border border-white"></img>
                            </li>
                            </ul>
                        </div>
                    </Card>
                </Link>
            </div>

            <div className="col">
                <Link to="/conocenos/#que_hacemos" className="text-decoration-none">
                    <Card bg={imgCard2}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">¿Qué Hacemos?</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto">
                            <img src={logo} alt="¿Qué Hacemos?" width="32" height="32" className="rounded-circle border border-white"></img>
                        </li>
                        {/* <li className="d-flex align-items-center me-3">
                            <small>Pakistan</small>
                        </li>
                        <li className="d-flex align-items-center">
                            <small>4d</small>
                        </li> */}
                        </ul>
                    </div>
                    </Card>
                </Link>
            </div>

            <div className="col">
                <Link to="/conocenos/#como_hacemos" className="text-decoration-none">
                    <Card bg={imgCard3}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">¿Cómo lo hacemos?</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                        <li className="me-auto">
                            <img src={logo} alt="¿Cómo lo hacemos?" width="32" height="32" className="rounded-circle border border-white"></img>
                        </li>
                        {/* <li className="d-flex align-items-center me-3">
                            <small>California</small>
                        </li>
                        <li className="d-flex align-items-center">
                            <small>5d</small>
                        </li> */}
                        </ul>
                    </div>
                    </Card>
                </Link>
            </div>
            </div>
        </div>
    </>
  );
};

export default CardSection;
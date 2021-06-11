import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-title">Seguinos en nuestras redes:</h1>
      <ul className="footer-list">
        <li>
          <FaInstagram className="footer-icon" />
          <h2 className="footer-info">fundacionaprenderhaciendo</h2>
        </li>
        <li>
          <FaFacebookSquare className="footer-icon" />
          <h2 className="footer-info">Fundación Aprender Haciendo</h2>
        </li>
        <li>
          <FaLinkedin className="footer-icon" />
          <h2 className="footer-info">Fundación Aprender Haciendo</h2>
        </li>
        <li>
          <FaYoutube className="footer-icon" />
          <h2 className="footer-info">Fundación Aprender Haciendo</h2>
        </li>
        <li>
          <FaEnvelope className="footer-icon" />
          <h2 className="footer-info">aprenderhaciendofund@gmail.com</h2>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

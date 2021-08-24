import React from "react";
import "./Footer.css";

function Footer() {
  return (
      <div className="main-footer">
        <div className="contenedor">
          <div className="redessoc">
            <h3 className="title" >Nuestras Redes Sociales:</h3>
            <ui className="nombre">
              <a href="https://www.instagram.com/fundacionaprenderhaciendo/?igshid=1b7iyx92lmbre">fundacionaprenderhaciendo</a>
              <br/>
              <a href="https://www.facebook.com/Fundaci%C3%B3n-Aprender-Haciendo-106219127385194/">Fundación Aprender Haciendo</a>
              <br/>
              <a href="https://ar.linkedin.com/in/fundaci%C3%B3n-aprender-haciendo-b4397b208">Fundación Aprender Haciendo</a>
              <br/>
              <a href="https://www.youtube.com/channel/UCZLlMVdcLU_UUwmOgTvr1MA">Fundación Aprender Haciendo</a>
              <br/>
              <a href="https://www.gmail.com">aprenderhaciendofund@gmail.com</a>
            </ui>
          </div>
          <br />
          <br />
          <hr />
          <div className="pie-footer">
            <p className="info">
              &copy;{new Date().getFullYear()} Copyright | Fundación Aprender Haciendo |
              Diseñado por ITS Villada
            </p>
          </div>
        </div>
      </div>
  );
}

export default Footer;

import React from "react";
import styled from "styled-components";
import Pic from "./bootstrap-themes.png";

export const Header = styled.h1.attrs({
  className: "display-5 border-bottom fw-bold lh-1 mb-3",
})`
  color: rgb(62, 35, 7);
`;

export const SocialMediaButton = styled.a.attrs(props => ({
  className:"shadow btn btn-floating btn-lg px-5 me-md-2",
  href: props.href,
}))`
color: rgba(62,35,7,1) !important;
background-color: #f8f0bb;
&:hover {
  ${({ facebook }) => facebook && `
    background-color: #3b5998 !important;
  `}
  ${({ gmail }) => gmail && `
    background-color: #ff6666 !important;
  `}
  color: #f8f0bb !important;
}
&:focus {
  box-shadow: none !important;
}
`;

export const buttonText = styled.p.attrs({
  className: "display-5 border-bottom fw-bold lh-1 mb-3",
})`
  color: rgb(62, 35, 7);
`;

const ReservaHeroSection = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={Pic} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
            {/* <iframe className="d-block mx-lg-auto" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13659.81072887819!2d-64.4520141!3d-31.1388288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b107f754f22dba9!2sC%C3%B3rdoba%20Gilwell%20Park!5e0!3m2!1ses!2sar!4v1631811330728!5m2!1ses!2sar" width="600" height="537" style={{border: "0",}} allowfullscreen="" loading="lazy"></iframe> */}
          </div>
          <div className="col-lg-6">
            <Header>Córdoba Gilwell Park</Header>
            <p className="lead">Córdoba Gillwell Park, es un campo virgen de 70 hectáreas, ubicado en Casa Grande, Valle Hermoso, provincia de Córdoba. Un arroyo cruza toda la quebrada formando ollitas de agua cristalina en diferentes sectores. Hay una gran variedad de flora y fauna autóctona. Es un lugar de las sierras destinado a la realización de campamentos scouts, educativos y actividades ecosutentables.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <SocialMediaButton href={"https://www.facebook.com/CordobaGilwellPark/"} facebook>
                <div className="row align-items-center gx-3">
                  {/* <i className="col fab fa-facebook-f"></i> */}
                  <span className="col align-middle  small">Facebook</span>
                </div>
              </SocialMediaButton>
              <SocialMediaButton href={"mailto:cordobagilwellpark@gmail.com"} gmail>
                <div className="row align-items-center gx-3">
                  {/* <i className="col fab fa-facebook-f"></i> */}
                  <span className="col align-middle  small">E-Mail</span>
                </div>
              </SocialMediaButton>
              {/* <SocialMediaButton href={"https://www.facebook.com/CordobaGilwellPark/"}>
                <div className="d-flex align-items-center gx-3">
                  <i className="fas fa-envelope"></i>
                  <p className="small" style={{display:'inline'}}>E-Mail</p>
                </div>
              </SocialMediaButton> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservaHeroSection;
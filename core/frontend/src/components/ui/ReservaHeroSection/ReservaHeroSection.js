import React from "react";
import styled from "styled-components";
import background from "../../../fotos/IMG_4243.JPG";

const Background = styled.div.attrs({
  className: "py-4 px-2",
})`
  //width: 100%;
  //height: 95vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

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

export const SubmitButton = styled.button.attrs(props => ({
  className:"shadow btn btn-floating btn-lg px-5 me-md-2",
  href: props.href,
}))`
color: rgba(62,35,7,1) !important;
background-color: #f8f0bb;
&:hover {
  background-color: rgba(62,35,7,1) !important;
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
    <Background>
          <div className="container col-xxl-8 px-4 py-4 rounded-3 border shadow-lg card">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <Header>Córdoba Gilwell Park</Header>
                <p className="lead">Córdoba Gillwell Park, es un campo virgen de 70 hectáreas, ubicado en Casa Grande, Valle Hermoso, provincia de Córdoba. Un arroyo cruza toda la quebrada formando ollitas de agua cristalina en diferentes sectores. Hay una gran variedad de flora y fauna autóctona. Es un lugar de las sierras destinado a la realización de campamentos scouts, educativos y actividades ecosutentables.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <SocialMediaButton href={"https://www.facebook.com/CordobaGilwellPark/"} facebook>
                    <div className="row align-items-center gx-3">
                      <span className="col align-middle small">Facebook</span>
                    </div>
                  </SocialMediaButton>
                  {/* <SocialMediaButton href={"mailto:cordobagilwellpark@gmail.com"} gmail>
                    <div className="row align-items-center gx-3">
                      <span className="col align-middle small">E-Mail</span>
                    </div>
                  </SocialMediaButton> */}
                </div>
              </div>
              <div className="col">
                <div className="embed-responsive embed-responsive-16by9">
                  <div className="embed-responsive-item">
                    <div style={{width: "100%"}}><iframe style={{boxShadow:"0 .5rem 1rem rgba(0,0,0,.35)"}} width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=C%C3%B3rdoba%20Gilwell%20Park+(C%C3%B3rdoba%20Gilwell%20Park)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hay q cambiar por su mail */}
            <form action="https://formsubmit.co/6bae887b0aa2cd51eb857248d3b9154f" method="POST">
              <div class="mb-3 mt-5">
                <Header>Contactanos</Header>
                <label for="exampleInputEmail1" class="form-label">Dirección Email</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" required></input>
              </div>
              <div class="mb-3">
                <input type="hidden" name="_subject" value="Contacto Reserva" class="form-control" id="exampleInputSubject1"></input>
              </div>
              <div class="mb-3">
                <label for="exampleContent1" class="form-label">Contenido</label>
                <textarea type="text" name="message" className="form-control" id="exampleContent1" rows="4" cols="50" required></textarea>
              </div>
              <SubmitButton type="submit">Enviar</SubmitButton>
            </form>
          </div>
    </Background>
    </>
  );
};

export default ReservaHeroSection;
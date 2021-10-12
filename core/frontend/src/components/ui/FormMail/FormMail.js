import React from "react";
import styled from "styled-components";

export const Header = styled.h1.attrs({
  className: "display-5 border-bottom fw-bold lh-1 mb-3",
})`
  color: rgb(62, 35, 7);
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

const FormMail = (props) => {

  return (
    <>
      {/* Hay q cambiar por su mail */}
      <form action={"https://formsubmit.co/" + props.email} method="POST">
        <div class="mb-3 mt-5">
          <Header>Contactanos</Header>
          <label for="exampleInputEmail1" class="form-label">Dirección Email</label>
          <input type="email" name="email" class="form-control" id="exampleInputEmail1" required></input>
        </div>
        <div class="mb-3">
          <input type="hidden" name="_subject" value={props.subject} class="form-control" id="exampleInputSubject1"></input>
        </div>
        <div class="mb-3">
          <label for="exampleContent1" class="form-label">Contenido</label>
          <textarea type="text" name="message" className="form-control" id="exampleContent1" rows="4" cols="50" required></textarea>
        </div>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </form>
    </>
  );
};

export default FormMail;
import styled from "styled-components";
import img from "../../../../fotos/IMG_4243.JPG"

import video from "../../../../videos/video.mp4";

export const H1Styled = styled.h1.attrs({
  className: "display-5 fw-bold",
})`
  color: ${(props) => (props.primary ? "#618817" : "#F8F0BB")}; //49A651
  font-size: 5rem;
  text-align: center;
  text-shadow: 0px 0px 6px black;
  line-height: 80px;

  @media screen and (max-width: 760px) {
    font-size: 4rem;
    line-height: 65px;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
    line-height: 50px;
  }
`;

export const ButtonFormaParte = styled.button.attrs(props =>({
  className: "btn px-4 gap-3 rounded-pill",
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

export const HeroContainer = styled.div.attrs({
  className: "container-fluid px-4 py-5 text-center row",
})`
  position: relative;
  height: 80vh;
  margin: 0;
  padding: 0;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
  width: 100%;
  height: 100%;
  background: #232a24;
`;

export const Background = styled.img.attrs({
  src: img,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a24;
  opacity: 0.6;
`;

export const PDescription = styled.p.attrs({
  className: "lead mb-4",
})`
  color: #f8f0bb;
  font-size: 1.6rem;
  text-shadow: 10px 5px 10px black;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

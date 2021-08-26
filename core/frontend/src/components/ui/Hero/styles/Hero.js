import styled from "styled-components";

import bg from "../../../views/Home/bg.jpg";

import video from "../../../../videos/video.mp4";

export const H1Styled = styled.h1.attrs({
  className: "display-5 fw-bold",
})`
  color: ${(props) => (props.primary ? "#F8F0BB" : "#49a651")};
  font-size: 5rem;
  text-align: center;
  text-shadow: 0px 0px 15px black;
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

export const ButtonFormaParte = styled.button.attrs({
  className: "btn btn-lg px-4 gap-3 rounded-pill border-1",
  type: "button",
})`
  color: #f8f0bb !important;
  font-size: 1.6rem;
  background-color: #49a651;
  border-color: #49a651;
  box-shadow: 0 10px 10px black;
  $btn-padding-y: "10";
  &:hover {
    background: #f8f0bb;
    border: 6px solid #f8f0bb;
    color: #49a651 !important;
  }
  &:focus {
    outline: none !important;
    box-shadow: 0 10px 10px black;
  }
`;

export const IMGBackground = styled.div.attrs({
  className: "bg-image",
})`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg});
  // height: 50%;
  // width:100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
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

export const MP4Background = styled.video.attrs({
  src: video,
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
`;

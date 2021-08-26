import styled from "styled-components";
//import imgCard1 from '../static/unsplash-photo-1.jpg';

export const Card = styled.div.attrs({
  className: "card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
})`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 1rem;
  border-color: white;
  transition: transform .2s; 

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${(props) => props.bg});
    border-color: #50b559;
    transform: scale(1.06);
  }
`;

export const Header = styled.h2.attrs({
  className: "pb-2 border-bottom fw-bold"
})`
  color: rgb(62,35,7);
`;

export const Divider = styled.div.attrs({
  className: "b-example-divider"
})`
  height: 3.5rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
`;
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div.attrs({
  className: "row card card-cover overflow-hidden text-white bg-dark rounded-5 shadow-lg"
})`

  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  border: none;
  border-radius: 10%;

  position: absolute;
  width: 95%;
  height: 95%;
  transition: .1s;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.2)), url(${(props) => props.bg});
    border: 3px solid #50b559;
    transform: scale(1.06);
  }

`;

export const TitleContainer = styled.div.attrs({
  className: "row px-4 justify-content-center align-items-center"
})`

  height: 85%;
  background-color: rgba(0, 0, 0, 0.2);
  text-overflow: ellipsis;

`;

export const Text = styled.h5.attrs({
  className: "fw-bold"
})`

  // background-color: blue;

  text-align: center;
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  font-size: 2.5vmin;

`;

export const DateContainer = styled.div.attrs({
  className: "row justify-content-center align-items-center"
})`

  height: 15%;
  background-color: rgba(0, 0, 0, 0.2);
  text-overflow: hidden;

`;

export const Date = styled.p.attrs({
  className: "fw-normal text-nowrap"
})`

  // background-color: blue;

  text-align: center;
  position: absolute;
  font-size: 2.25vmin;
  

`;

const Card = (props) => {
  return (

    <Link to={`${props.url + props.id}`}>

      <Content bg={`https://res.cloudinary.com/aprenderhaciendo/${props.image}`}>

        <TitleContainer>
          <Text>{props.titulo}</Text>
        </TitleContainer>

        <DateContainer>
          <Date>{props.sDate}</Date>
        </DateContainer>

      </Content>

    </Link>

  );
};

export default Card;
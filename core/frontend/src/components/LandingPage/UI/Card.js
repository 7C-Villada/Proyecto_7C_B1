import React from "react";
import {
  CardWrapper,
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  DataWrapper,
  ButtonWrapper,
} from "./CardElement";
import { Button } from "../UI/ButtonElement";

const Card = (props) => {
  return (
    <CardWrapper>
      <CardContainer>
        <DataWrapper>
          <CardImage src={props.img} alt="Card Image" />
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.desc}</CardDescription>
        </DataWrapper>
      </CardContainer>
      <ButtonWrapper>
        <Button small>Más Información +</Button>
      </ButtonWrapper>
    </CardWrapper>
  );
};

export default Card;

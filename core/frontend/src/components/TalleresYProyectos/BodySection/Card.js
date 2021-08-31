import React from "react";
import { Link } from "react-router-dom";
import {
  CardBoxFormat,
  CardImage,
  TextContainer,
  CardTitle,
  CardDate,
} from "./BodyElements";



const Card = (props) => {
  return (
    
    <Link to={`${props.url + props.id}`}>
      <CardBoxFormat>

          <CardImage src={`https://res.cloudinary.com/aprenderhaciendo/${props.image}`} />

          <TextContainer>
              <CardTitle>{props.titulo}</CardTitle>
              <CardDate>{props.sDate}</CardDate>
          </TextContainer>

          <scrollToTop />

      </CardBoxFormat>
    </Link>
  );
};

export default Card;
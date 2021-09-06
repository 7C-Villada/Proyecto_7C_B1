import styled from "styled-components";

export const Header = styled.h2.attrs({
    className: "pb-2 border-bottom fw-bold"
  })`
    color: rgb(62,35,7);
  `;


export const CarouselImg = styled.img.attrs(props => ({
    className: "d-block w-100",
    src: props.src,
  }))`
    // position: absolute;
    // top: -15%;
    // width: 100%;

    // @media screen and (max-width: 768px) {
    //   height: 100%;
    //   width: none;
    //   top: -25%;
    // }
  `;


export const CarouselItem = styled.div.attrs(props => ({
    className:  (props.active ? "carousel-item active" : "carousel-item")
  }))`
    // position: relative;
    // overflow: hidden;
    height: 400px;
    
    @media screen and (max-width: 768px) {
      height: 175px;
    }
    
  `; 

  
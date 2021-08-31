import styled from "styled-components";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const BodyContainer = styled.div`
  /*background: red;*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 625px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 780px) {
    justify-content: center;
  }
`;

export const DescPanel = styled.div`
  /*background: turquoise;*/

  position: relative;

  width: 50%;
  height: 100%;
`;

export const AboutBox = styled.div`
  /*background: red;*/
  background: white;
  border: 2px solid grey;
  border-radius: 2.5vw;

  position: absolute;
  top: 5%; left: 0; right: 0;
  margin: auto;

  width: 50%;
  height: auto;
  max-height: 10%;

  text-align: center;
  font-size: 2vw;
  
`;

export const DescriptionBox = styled.div`
  /*background: red;*/
  background: white;
  border: 2px solid grey;
  border-radius: 1vw;

  position: absolute;
  top: 15%; left: 0; right: 0;
  margin: auto;

  width: 90%;
  height: auto;
  max-height: 70%;

  padding-left: 1vw;
  padding-right: 1vw;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 20px;
    }
    
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
    background: #49a651; 
    border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
    background: #347339; 
    }
  
`;

export const SDateBox = styled.div`
  /*background: red;*/
  background: white;
  border: 2px solid grey;
  border-radius: 2.5vw;

  position: absolute;
  bottom: 5%; left: 5%;
  margin: auto;

  width: 46%;
  height: auto;
  max-height: 10%;
  font-size: 1rem;

  padding-left: 1vw;
  padding-right: 1vw;
  overflow-y: auto;
  
`;

export const EDateBox = styled.div`
  /*background: red;*/
  background: white;
  border: 2px solid grey;
  border-radius: 2.5vw;

  position: absolute;
  bottom: 5%; right: 5%;
  margin: auto;

  width: 40%;
  height: auto;
  max-height: 10%;
  font-size: 1rem;

  padding-left: 1vw;
  padding-right: 1vw;
  overflow-y: auto;
  
`;

export const Description = styled.a`
  font-size: 1.2rem;
  color: black;
`;

export const ImagePanel = styled.div`
  /*background: fuchsia;*/
  position: relative;

  width: 50%;
  height: 100%;
`;

export const ImageBox = styled.div`
  border-radius: 15px;

  position: absolute;
  top: 25%; left: 0; right: 0;
  margin: auto;

  width: 90%;
  
  
`;

export const CarouselContainer = styled.div`
  height: 50vh;
  width: 100%;
  min-width: 290px;
  border-radius: 15px;
  background: #0f0f0f;
  box-shadow: 0 10px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    height: 400px;
    width: 350px;
  }
`;

export const CarouselImg = styled.img`
  object-fit: scale-down;
  opacity: 0.8;
  width: 100%;
  height: 100%;
`;

export const ChevronRight = styled(FaChevronRight)`
  font-size: 3rem;
  color: #f8f0bb;
  cursor: pointer;
  user-select: none;
  position: absolute;
  right: 2%;
  z-index: 10;

  transition: .3s all;
  &:hover {
    opacity: 0.6;
  }
`;

export const ChevronLeft = styled(FaChevronLeft)`
  font-size: 3rem;
  color: #f8f0bb;
  cursor: pointer;
  user-select: none;
  position: absolute;
  left: 2%;
  z-index: 10;

  transition: .3s all;
  &:hover {
    opacity: 0.6;
  }
`;
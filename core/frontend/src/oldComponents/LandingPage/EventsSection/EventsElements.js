import styled from "styled-components";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const EventsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: 1300px;
  }
`;

export const EventsH1 = styled.h1`
  font-size: 2.5rem;
  color: #f8f0bb;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const EventsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 350px;
  align-items: center;
  grid-gap: 10rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 350px;
    grid-gap: 3rem;
  }
`;

export const CarouselContainer = styled.div`
  height: 40vh;
  width: 700px;
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
  object-fit: cover;
  opacity: 0.6;
  width: 100%;
  height: 100%;
`;

export const ChevronRight = styled(FaChevronRight)`
  font-size: 3rem;
  color: #f8f0bb;
  cursor: pointer;
  user-select: none;
  position: absolute;
  right: 10%;
  z-index: 10;
`;

export const ChevronLeft = styled(FaChevronLeft)`
  font-size: 3rem;
  color: #f8f0bb;
  cursor: pointer;
  user-select: none;
  position: absolute;
  left: 10%;
  z-index: 10;
`;

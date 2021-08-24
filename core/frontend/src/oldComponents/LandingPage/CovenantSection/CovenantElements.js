import styled from "styled-components";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const CovenantContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CovenantH1 = styled.h1`
  font-size: 2.5rem;
  color: #f8f0bb;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const CovenantWrapper = styled.div`
  width: 1000px;
  height: 100px;
  margin-top: 64px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 500px;
  }

  @media screen and (max-width: 480px) {
    width: 350px;
  }
`;

export const ChevronLeft = styled(FaChevronLeft)`
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  position: absolute;
  color: #f8f0bb;
  left: 5%;

  @media screen and (max-width: 480px) {
    left: 0;
  }
`;

export const ChevronRight = styled(FaChevronRight)`
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  position: absolute;
  color: #f8f0bb;
  right: 5%;

  @media screen and (max-width: 480px) {
    right: 0;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 350px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;

export const CovenantImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

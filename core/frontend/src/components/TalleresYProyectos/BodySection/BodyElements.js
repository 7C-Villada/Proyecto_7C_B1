import styled from "styled-components";


export const BodyContainer = styled.div`
  float: left;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 15%;
  margin-top: 1%;
  margin-left: 1%;
  max-width: 15%;
  max-height: 15%;
  
`;

export const CardBoxFormat = styled.div`
  width: 15vw;
  height: 15vw;
  border-radius: 2.5vw;
  
  transition: .3s all;
  &:hover {
    width: 14vw;
    height: 14vw;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2.5vw;
  object-fit: cover;
    
`;

export const TextContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 2.5vw;
    border-bottom-right-radius: 2.5vw;

    width: 100%;
    height: 20%;
    position: relative;
    margin-top -23.3%;
    padding-left: 5%;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    text-align: center;
`;

export const CardTitle = styled.h1`
  font-size: 1rem;
  color: white;
  
`;

export const CardDate = styled.h1`
  font-size: .7rem;
  color: white;
`;

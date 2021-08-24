import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 400px;

  @media screen and (max-width: 480px) {
    height: 325px;
  }
`;

export const CardContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  height: 400px;
  box-shadow: 0 10px 10px #ccc;
  transition: all 0.2 ease-in-out;

  @media screen and (max-width: 780px) {
    height: 300px;
  }
`;

export const DataWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 15px;
`;

export const CardImage = styled.img`
  opacity: 0.7;
  height: 5rem;
  width: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h1`
  font-family: "Kaushan Script", cursive;
  font-size: 3rem;
  text-align: center;
  line-height: 50px;

  @media screen and (max-width: 780px) {
    font-size: 2.5rem;
  }
`;

export const CardDescription = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  padding: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: -20px;
`;

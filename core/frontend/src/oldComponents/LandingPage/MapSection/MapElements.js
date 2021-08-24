import styled from "styled-components";

export const MapContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MapWrapper = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  height: 700px;
  width: 800px;
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f0bb;

  @media screen and (max-width: 768px) {
    height: 500px;
    width: 350px;
  }
`;

export const MapH1 = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => (props.main ? "#f8f0bb" : "#0fc11f")};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

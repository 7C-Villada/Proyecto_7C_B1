import styled from "styled-components";

export const MapContainer = styled.div.attrs({
  className: 'col mx-auto'
})` 
  background: brown;
  border: 3px solid green;
  border-radius: 10px;
  height: 500px;

  @media screen and (max-width: 480px) {
    max-width: 95%;
  }
`

export const Header = styled.h2.attrs({
  className: "pb-2 border-bottom fw-bold"
})`
  color: rgb(62,35,7);
`;
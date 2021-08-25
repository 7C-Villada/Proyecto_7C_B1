import styled from "styled-components";

export const H1Styled = styled.h1.attrs({
  className: "display-5 fw-bold"
})`
color: ${(props) => (props.primary ? "#F8F0BB" : "#49a651")};
font-size: 5rem;
text-align: center;
text-shadow: 0px 0px 10px black;
line-height: 80px;

@media screen and (max-width: 760px) {
  font-size: 4rem;
  line-height: 65px;
}

@media screen and (max-width: 480px) {
  font-size: 3rem;
  line-height: 50px;
}
`;
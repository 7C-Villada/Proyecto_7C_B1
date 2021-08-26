import styled from "styled-components";

export const H1Styled = styled.h1.attrs({
  className: "display-5 fw-bold"
})`
color: ${(props) => (props.primary ? "#F8F0BB" : "#49a651")};
font-size: 5rem;
text-align: center;
text-shadow: 0px 0px 6px black;
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

export const ButtonFormaParte = styled.button.attrs({
  className: "btn btn-lg px-4 gap-3 rounded-pill border-1",
  type: "button",
})`
  color: #f8f0bb !important;
  background-color: #49a651;
  border-color: #49a651;
  $btn-padding-y: "10";
  &:hover {
    background-color: #50b559;
    border-color: #50b559;
  }
  &:focus {
    outline: none !important;
    box-shadow: none;
  }
`;

export const ButtonColabora = styled.button.attrs({
  className: "btn btn-outline-success rounded-pill border-1",
})`
  margin-left: 2px;
  margin-right: 2px;
  color: #0fc11f;
  border-color: #0fc11f;
  $btn-padding-y: "10";
  &:hover {
    background-color: #0fc11f;
    border-color: #0fc11f;
  }
  &:focus {
    outline: none !important;
    box-shadow: none;
  }
`;
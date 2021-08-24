import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font-size: ${(props) => (props.small ? "1rem" : "1.6rem")};
  border-radius: 5rem;
  background-color: #49a651;
  border: 6px solid #49a651;
  color: #f8f0bb;
  transition: all 0.1s ease-in-out 0s;
  padding: ${(props) => (props.small ? "0 15px" : "5px 30px")};
  box-shadow: 0 10px 10px black;
  outline: none;

  &:hover {
    background: #f8f0bb;
    border: 6px solid #f8f0bb;
    color: #49a651;
  }

  @media screen and (max-width: 760px) {
    font-size: 1.2rem;
    padding: 2.5px 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: 0px 15px;
  }
`;

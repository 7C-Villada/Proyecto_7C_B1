import styled from "styled-components";

export const FilterContainer = styled.div.attrs({
  className: "d-flex flex-column flex-sm-row py-3 px-3",
})``;

export const SearchInput = styled.input.attrs({
  type: "text",
  className: "form-control",
  placeholder: "Buscar",
})`
  border-radius: 75px 0 0 75px;
  background-color: #e5e4e2;

  :focus {
    background-color: #e5e4e2;
    color: rgb(62, 35, 7);
  }

  ::placeholder {
    color: rgb(62, 35, 7);
  }

  @media screen and (max-width: 576px) {
    border-radius: 10px 10px 0 0;
  }
`;

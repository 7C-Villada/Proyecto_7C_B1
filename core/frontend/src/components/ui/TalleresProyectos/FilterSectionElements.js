import styled from "styled-components";

export const FilterContainer = styled.div.attrs({
  className: "d-flex flex-column flex-sm-row py-3 px-3 rounded",
})`
  background-color: #e5e4e2;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  className: "form-control",
  placeholder: "Buscar",
})`
  border-radius: 75px 0 0 75px;
`;

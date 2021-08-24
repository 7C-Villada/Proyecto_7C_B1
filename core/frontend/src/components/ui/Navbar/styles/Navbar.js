import styled from "styled-components";

export const NavbarStyle = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark",
})`
  background: #3e2307;
  height: 80px;
  font-size: 1rem;
`;

export const NavButton = styled.button.attrs({
  className: "btn btn-outline-success rounded border-0",
})`
  color: #f8f0bb !important;
  &:hover {
    background-color: #0fc11f;
    color: #f8f0bb !important;
  }
  &:focus {
    outline: none !important;
    box-shadow: none;
  }
`;

export const NavButtonDropdown = styled.button.attrs({
  className: "btn btn-outline-success dropdown-toggle rounded border-0",
})`
  color: #f8f0bb !important;
  &:hover {
    background-color: #0fc11f !important ;
    color: #f8f0bb !important;
  }
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const UlDropdownMenu = styled.ul.attrs({
  className: "dropdown-menu",
})`
  background: #f8f0bb !important;
`;

export const ButtonColabora = styled.button.attrs({
  className: "btn btn-outline-success rounded-pill border-4",
})`
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

import styled from "styled-components";

// <nav class="navbar navbar-dark bg-dark" aria-label="First navbar example" >
export const NavbarStyle = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
})`
  background: rgb(62,35,7);
  background: linear-gradient(0deg, rgba(62,35,7,1) 0%, rgba(62,35,7,1) 100%);
  // font-size: 1rem;
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


// <ul class="dropdown-menu" aria-labelledby="dropdown01"></ul>
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
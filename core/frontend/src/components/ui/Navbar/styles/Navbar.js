import styled from "styled-components";

export const NavbarStyle = styled.nav.attrs({
  className: "navbar sticky-top navbar-expand-lg navbar-dark bg-dark",
})`
  background: rgb(62, 35, 7);
  background: linear-gradient(
    0deg,
    rgba(62, 35, 7, 1) 0%,
    rgba(62, 35, 7, 1) 100%
  );
  // font-size: 1rem;
`;

export const NavButton = styled.button.attrs({
  className: "btn rounded border-0",
})`
  margin-left: 2px;
  margin-right: 2px;
  color: #f8f0bb !important;
  &:hover {
    background-color: #618817;
  }
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const NavButtonDropdown = styled.button.attrs({
  className: "btn dropdown-toggle rounded border-0",
})`
  margin-left: 2px;
  margin-right: 2px;
  color: #f8f0bb !important;
  &:hover {
    background-color: #618817 !important;
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
  className: "btn rounded-pill border-2",
})`
  margin-left: 2px;
  margin-right: 2px;
  color: #618817;
  border-color: #618817;
  $btn-padding-y: "10";
  &:hover {
    background-color: #618817;
    border-color: #618817;
    color: white;
  }
  &:focus {
    outline: none !important;
    box-shadow: none;
  }
`;
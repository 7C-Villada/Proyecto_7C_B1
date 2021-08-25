import React from "react";
import navLogo from "./Logo.png";

// CSS
import {
  NavbarStyle,
  ButtonColabora,
  NavButton,
  NavButtonDropdown,
  UlDropdownMenu,
} from "./styles/Navbar";

const Navbar = () => {
  return (
    <>
      <NavbarStyle>
        <div class="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={navLogo} alt="nav Logo" width="50" height="50"></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarsExample01">
            <ul class="navbar-nav mb-2 mb-lg-0"> 
            {/* navbar-nav me-auto mb-2  */}
              <li class="nav-item">
                <NavButton href="/">Inicio</NavButton>
              </li>
              <li class="nav-item dropdown">
                <NavButtonDropdown
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Campo Escuela
                  </NavButtonDropdown>
                  <UlDropdownMenu aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/">Reserva</a></li>
                    <li><a className="dropdown-item" href="/">Campamentos</a></li>
                  </UlDropdownMenu>
              </li>
              <li class="nav-item">
                <NavButton href="/">Conocenos</NavButton>
              </li>
              <li class="nav-item">
                <NavButton href="/">Talleres y Proyectos</NavButton>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <ButtonColabora>Colaborá</ButtonColabora>
              </li>
            </ul>
          </div>
        </div>
      </NavbarStyle>
       {/* <NavbarStyle>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={navLogo} alt="nav Logo" width="50" height="50"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavbarCollapse id="navbarNavDropdown">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavButton href="/">Inicio</NavButton>
              </li>
              <li className="nav-item dropdown">
                <NavButtonDropdown
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Campo Escuela
                </NavButtonDropdown>
                <UlDropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="/">
                      Reserva
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Campamentos
                    </a>
                  </li>
                </UlDropdownMenu>
              </li>
              <li className="nav-item">
                <NavButton href="/">Conocenos</NavButton>
              </li>
              <li className="nav-item">
                <NavButton href="/">Talleres y Proyectos</NavButton>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <ButtonColabora>Colaborá</ButtonColabora>
              </li>
            </ul>
          </NavbarCollapse>
        </div>
      </NavbarStyle> */}
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <a className="navbar-brand">
              <img src={navLogo} alt="nav Logo" width="50" height="50"></img>
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample01"
            aria-controls="navbarsExample01"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarsExample01">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                  <NavButton>Inicio</NavButton>
                </Link>
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
                  <li>
                    <Link to="/reserva" className="text-decoration-none">
                      <a className="dropdown-item">Reserva</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/campamentos" className="text-decoration-none">
                      <a className="dropdown-item">Campamentos</a>
                    </Link>
                  </li>
                </UlDropdownMenu>
              </li>
              <li class="nav-item">
                <Link to="/conocenos">
                  <NavButton>Conocenos</NavButton>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/talleres-y-proyectos">
                  <NavButton>Talleres y Proyectos</NavButton>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <Link to="/colabora">
                  <ButtonColabora>Colaborá</ButtonColabora>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </NavbarStyle>
    </>
  );
};

export default Navbar;

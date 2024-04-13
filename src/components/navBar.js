import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ handleMenuClick }) => {
  return (
    <nav className="main-header navbar navbar-expand-lg navbar-dark navbar-light bg-secondary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav">

            <li className="nav-item d-none d-sm-inline-block fs-5">
              <Link to="/inicio" className="nav-link">
                Inicio
              </Link>
            </li>

            <li className="nav-item d-none d-sm-inline-block fs-5">
              <Link to="/integrantes" className="nav-link">
                Integrantes
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;

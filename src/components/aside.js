import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="main-sidebar bg-primary sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/" className="brand-link">
        <img
          src="/dsilogo.png"
          alt="DSI Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">DSI 2024</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <p className="d-block">
              TPI Integrador - Grupo XX
              <br />
              BONVINO
              <br />
              Conoce tu mejor vino
            </p>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/listado" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Generar ranking de vinos</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item menu-open">
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/importar" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Importar actualización de vinos de bodega</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item menu-open">
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/tablas" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Tablas del sistema</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Aside;

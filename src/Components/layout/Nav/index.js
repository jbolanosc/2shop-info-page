import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <nav className="navbar px-5 mb-5 navbar-expand-lg navbar-light justify-content-center">
      <Link className="navbar-brand" to="/">
        <h2 className="covered text-primary">
          <span className="number">2</span>Shop
        </h2>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link font-weight-bold text-uppercase text-primary"
            >
              Acerca de Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sellers"
              className="nav-link font-weight-bold text-uppercase text-primary"
            >
              Para Vendedores
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link font-weight-bold text-uppercase text-primary"
              to="/users"
            >
              Para Usuarios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

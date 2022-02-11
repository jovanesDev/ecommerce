import React from "react";
import logo from "../../assets/img/logo2.png";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border">
      <div className="container-fluid d-flex">
        <Link className="navbar-brand" to="/">
          <img className="logo rounded  border-dark" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Search className="form-control d-none d-lg-block w-25 mx-4"/>
        <div
          className="collapse navbar-collapse justify-content-end my-2 my-lg-0"
          id="navbarSupportedContent"
        >
        <div className='w-100 border-top border-dark d-lg-none'></div>
          <div className="d-flex flex-direction-column  my-2">
            <ul className="navbar-nav my-2 my-lg-0 mb-lg-0">
              <li className="nav-item dropdown mx-4 w-100 mt-2 my-lg-0">
                <a
                  className="nav-link dropdown-toggle border border-dark rounded  px-4 "
                  id="navbarDropdown"
                  role="button"
                  href="/"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink active="true" to="/games/xbox" className="dropdown-item">Xbox</NavLink>
                  </li>
                  <li>
                    <NavLink active="true" to="/games/play-station" className="dropdown-item">PlayStation</NavLink>
                  </li>
                  <li>
                    <NavLink active="true" to="/games/pc" className="dropdown-item">PC</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        <Search className="form-control d-lg-none w-25 mx-4"/>
        <CartWidget classname="btn d-lg-none bg-dark d-flex w-25 mx-4 my-2" />
        </div>
        <CartWidget classname="btn d-lg-block d-none bg-dark d-flex" />
      </div>
    </nav>
  );
};

export default Navbar;

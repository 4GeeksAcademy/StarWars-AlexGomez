import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img className="logo h-100 pe-5" src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="fs-2 fav">
                  Favorites{" "}
                  <span className="badge ">
                    {store.favorites.length > 0 ? store.favorites.length : 0}
                  </span>
                </span>
              </button>
              <ul className="dropdown-menu">
                {store.favorites.length <= 0 ? (
                  <li className="d-flex justify-content-center dropdown-item text-center">
                    <h5>(Empty)</h5>
                  </li>
                ) : (
                  store.favorites.map((item, index) => (
                    <li
                      key={index}
                      className="d-flex justify-content-between dropdown-item"
                    >
                      <Link
                        to={{
                          pathname: `/Description/${store.datosNav[0]}/${store.datosNav[1]}`,
                        }}
                        className="btn btn-outline-dark me-5 fw-bold my-2"
                      >
                        {item}
                      </Link>
                    
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => {
                          actions.addFavorite(
                            store.favorites.filter(
                              (favorite) => favorite !== item
                            )
                          );
                        }}
                      ></i>
                    </li>
                  ))
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

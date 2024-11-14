import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0">
                    <img className="logo mx-lg-4 ps-3" src={logo} alt="Logo" />
                </span>
            </Link>
            <div className="ml-auto">
                <div style={{marginBottom: "33px"}} className="dropdown mx-5 p-0">
                    <button className="btn btn-primary dropdown-toggle px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge bg-secondary">{store.favorites.length > 0 ? store.favorites.length : 0}</span>
                    </button>
                    <ul className="dropdown-menu">
                         {store.favorites.length <= 0 ?  
                                <li  className="d-flex justify-content-center dropdown-item text-center">
                                    <h5 >(Empty)</h5> 
                                </li> 
                         : <>
                        
                         {store.favorites.map((item, index) => (                   
                            <li key={index} className="d-flex justify-content-between dropdown-item">
                                <span>{item}</span>
                                <i className="fas fa-trash-alt" onClick={() => 
                                {
                                    const favorites = store.favorites.filter((favorite) => favorite !== item);
                                    actions.Favorite({ favorites: favorites })
                                }
                                }></i>
                            </li>
                        ))}
                    </>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

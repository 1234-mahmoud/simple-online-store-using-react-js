import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style/index.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
export default function Navbar() {
  const { cart, getCartTotal } = useContext(CartContext);
  return (
    <div className="navbar_">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="link_">
              Home
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  to=""
                  className="link_ nav-link dropdown-toggle text-light fw-semibold"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Products
                </Link>

                <ul className="dropdown-menu ">
                  <li>
                    <Link to="/branches/electronics" className="dropdown-item">
                      Electronics
                    </Link>
                  </li>

                  <li>
                    <Link to="/branches/clothes" className="dropdown-item">
                      Clothes
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/branches/electrical_devices"
                      className="dropdown-item"
                    >
                      Electrical Devices
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/branches/electrical_tools"
                      className="dropdown-item"
                    >
                      Electrical Tools
                    </Link>
                  </li>

                  <li>
                    <Link to="/branches/super_market" className="dropdown-item">
                      Super Market
                    </Link>
                  </li>

                  <li>
                    <Link to="/branches/watches" className="dropdown-item">
                      Watches
                    </Link>
                  </li>

                  <li>
                    <Link to="/branches/baby_toys" className="dropdown-item">
                      Baby Toys
                    </Link>
                  </li>

                  <li>
                    <Link to="/branches/furniture" className="dropdown-item">
                      Furniture
                    </Link>
                  </li>

                  <li>
                    <Link to="/branches/hairdressing" className="dropdown-item">
                      Hairdressing machines
                    </Link>
                  </li>
                </ul>
              </li>
              <button className="btn btn-primary fs-5">
                <Link
                  to={"/components/login"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Log in
                </Link>
              </button>
            </ul>
            <form className="d-flex w-sm-25 w-md-50 w-lg-75 w-xxl-100" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // style={{width:'400px'}}
              />
              <button
                className="btn btn-dark text-light fw-semibold"
                type="submit"
              >
                Search
              </button>
            </form>
            <Link to="/components/Cart" target="_blank" className="link_">
              <div className="cart_group">
                <span className="counter">{cart.length}</span>
                <i className="bi bi-cart4 text-light fs-3"></i>
              </div>

            </Link>
              <div className="text-bg-primary p-3 fs-5">
                Total
                <span className="badge text-bg-success fs-5 mx-1">
                  {getCartTotal()}
                </span>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

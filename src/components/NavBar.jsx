import React from "react";
import Vector from "../images/rr.png";

const NavBar = () => {
  return (
    <>
      <div className=" nav_bg NavBar_row">
        <div className="row ">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div>
                <img src={Vector} alt="imagee" />
                 <span className="NavBar_name">VigourMe</span>
                </div>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active NavBar_item"
                        aria-current="page"
                        href="/"
                     >
                       Home
                      
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active NavBar_item"
                        aria-current="page"
                        href="/about"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        className="nav-link active NavBar_item"
                        aria-current="page"
                        href="/service"
                      >
                        Service
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        className="nav-link active NavBar_item"
                        aria-current="page"
                        href="/faq"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

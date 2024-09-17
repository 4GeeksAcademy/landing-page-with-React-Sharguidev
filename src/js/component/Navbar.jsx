import React from "react"





export default function Navbar() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand ps-3" href="#">Start Bootstrap</a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="navbar-nav  mb-3 mb-lg-0 ms-auto pe-3" >
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">Services</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">Contact</a>
              </li>
            </ul>
        
          </div>
        </div>
      </nav>
    );
  };
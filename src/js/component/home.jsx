import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
     <Navbar />
     <Jumbotron/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Footer/>

   </>
  );
};

const styleNavbar = {
  marginLeft: "1400px",
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Start Bootstrap
        </a>
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
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5 ">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          quibusdam libero praesentium, repudiandae labore quae iste repellendus
          doloribus harum molestiae dolorum necessitatibus fuga, maxime
          perferendis, voluptate alias nam cupiditate a?
        </p>
        <button className="btn btn-primary btn-lg">Call to Action!</button>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="row align-items-md-strech d-flex">
      <div className="card col-2" >
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sint assumenda aspernatur pariatur omnis accusamus non unde numquam porro explicabo!</p>
        </div>
        <div className="card-body text-center">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
     </div>
   </div>
  );
};



const Footer = () => {
  <div className="container bg-body-tertiary text-center">
    Copyright © Sharguidev.com 2024
  </div>
};

export default Home;


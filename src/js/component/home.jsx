import React from "react";
import ReactDOM from "react-dom";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <Navbar />
   
  );
};

const styleNavbar = {
  marginLeft : "1400px"
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Start Bootstrap
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">
          
        </h1>
      </div>
    </div>
  );

  
}

const Card = () => {
  return (
    <div className="card m-5">
			<img className="card-img-top" src=""alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title"></h5>
				<p className="card-text"></p>
				<a href="#" className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>


  );
}

const Footer = () => {
  
}



export default Home;
ReactDOM.render(<Home />, document.querySelector("#app"));

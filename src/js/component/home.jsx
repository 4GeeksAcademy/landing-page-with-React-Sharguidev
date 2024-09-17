import React from "react";
import Jumbotron from "./Jumbotron"
import Navbar from "./Navbar"
import Card from "./Cards"
import Footer from "./Footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <div className="bg-body-tertiary">
        <Navbar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <Jumbotron />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <Card />
          </div>
          <div className="col-lg">
            <Card />
          </div>
          <div className="col-lg">
            <Card />
          </div>
          <div className="col-lg">
            <Card />
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <Footer />
      </div>
    </>
  );
};













export default Home;

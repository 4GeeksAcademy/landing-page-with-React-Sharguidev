import React from "react";
import Jumbotron from "./Jumbotron"
import Navbar from "./Navbar"
import Card from "./Cards";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
    <div className="text-white">
      <Navbar />
    </div>
     
    <div className="d-flex flex-column justify-content-center w-full" >
      <Jumbotron />
      <div className="d-flex  justify-content-center ">
          <Card />
          <Card />
          <Card />
          <Card />
    </div>
      
    </div>
    
      
      
      <div>
        <Footer/>
      </div>
    </>
  );
};











const Footer = () => {
  <div className="container bg-body-tertiary text-center">
    Copyright © Sharguidev.com 2024
  </div>;
};

export default Home;

import React from "react";

const jumbotronStyle  = {
  
  fontSize : "60px",
  color : "black"

}

export default function Jumbotron (){
  return (
    <div className="alert alert-secondary  m-5 p-5" role="alert" >
    <h1 className="alert-heading " style={jumbotronStyle}>A Warm Welcome!</h1>
    <p className="mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ullam consequatur explicabo ut similique reiciendis numquam dolorum expedita, incidunt error  <br /> modi voluptates aspernatur fugiat iste neque quidem corporis id quo!</p>
    
    <a href="#" className="btn btn-primary mt-2">Call to action!</a>
  </div>
  );
};



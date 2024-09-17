import React from "react";

const cardStyle = {
  maxHeight: "320px",
  
 
};

export default function Card() {
  return (
    <div className="card mt-5">
      <img
        src="https://plus.unsplash.com/premium_photo-1666824468749-3ce4c85dc2e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="card-img-top"
        alt="..." style={cardStyle}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, sint
          assumenda aspernatur !
        </p>
      </div>
      
      <div className="card-footer text-center">
        <a href="#" className="btn btn-primary">
          Find out More!
        </a>
      </div>
      
    </div>
  );
}

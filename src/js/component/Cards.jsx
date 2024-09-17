import React from "react"

const cardStyle = { 
    height : "400px",
    width : "350px",
    marginLeft : "90px"

}


export default function Card() {

    return (
     
      
          <div className="card" style={cardStyle}>
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
                sint assumenda aspernatur pariatur omnis accusamus non unde numquam
                porro explicabo!
              </p>
            </div>
            
            <div className="card-body text-center">
            <hr className="" />
              <a href="#" className="btn btn-primary">
                Find Out More!
              </a>
            </div>
          </div>
       
      
    );
  };
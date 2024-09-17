import React from "react";

const backStyle = {
  backgroundColor : "#e9ecef"
}

export default function Jumbotron (){
  return (
    <div class="jumbotron mt-5 p-3  rounded-2" style={backStyle}>
      <h1 class="display-4">A Warm Welcome!</h1>
      <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor itaque, inventore quod perspiciatis magnam. Natus quos recusandae quis voluptatum est architecto corporis? Dolores impedit tempore ipsam placeat, iste officia?</p>
      
      
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
  );
};



import React from "react";
//import {robots} from "./robots";


const Card=({id,name,emai})=>{
  //  const link = ${"id"}
return(
  <div className="tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5">
  <img src= {"http://www.robohash.org/test?size=200x200"} alt="robot"></img>
  <div>
  <h1>{name}</h1>
  <p>{emai}</p>
  </div>
  </div>  
);
}

export default Card;
import React from "react";

const Searchbox = ({searchChange}) =>{
    return(
    <div className = "tc">
        {
    <input
       type = "text" placeholder="search"
       onChange= {searchChange}/>
        }
        </div>
    );
}
export default Searchbox;
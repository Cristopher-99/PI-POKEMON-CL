import React from "react";
import loader from "../../img/pikachuLoader.gif"
import"./Loader.css";
const Loader =()=>{

    return (
        <div>
            <img src={loader} width="600px" height="200px"/>
            <div className="spinner">
                <span>C</span>
                <span>A</span>
                <span>R</span>
                <span>G</span>
                <span>A</span>
                <span>N</span>
                <span>D</span>
                <span>0..</span>
            </div>
        </div>
    )
}

export default Loader;
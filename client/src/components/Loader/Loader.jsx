import React from "react";
import pikachu from "../../img/pikachuLoader.gif"
import"./Loader.css";
const Loader =()=>{

    return (
        <div className="LoaderContainer">
            <div className="landing">
                <img src={pikachu} className="img" width="700px" height="200px"/>
                <span className="loader">Cargando...</span>
            </div>
        </div>
        
    )
}

export default Loader;
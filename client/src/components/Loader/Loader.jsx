import React from "react";
import pikachu from "../../img/pikachuLoader.gif"
import"./Loader.css";
const Loader =() =>{

    return (
        <div className="LoaderContainer">
                <img src={pikachu} className="img" width="600px" height="200px"/>
                <p className="loader">Cargando...</p>
        </div>
        
    )
}

export default Loader;
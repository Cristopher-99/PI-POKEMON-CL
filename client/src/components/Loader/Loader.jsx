import React from "react";
import pikachu from "../../img/pikachuLoader.gif"
import"./Loader.css";
const Loader =() =>{

    return (
        <div className="LoaderContainer">
            <div className="loaderMain">
                <img src={pikachu} width="600px" height="200px"/>
                <p className="loader">Cargando ...</p>
            </div>
        </div>
        
    )
}

export default Loader;
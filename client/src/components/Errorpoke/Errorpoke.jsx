import React from "react";
import "./Errorpoke.css"
import error from "../../img/errorpokemon.gif"

const Errorpoke = ()=>{

    return (
        <div className="Container">
            <div className="msgError">
                <p className="msg"> No se Encontraron Pokemons</p>
                <img src={error} className="imgerror" width="500px" height="350px"/> 
            </div>
        </div>
    )

}

export default Errorpoke;
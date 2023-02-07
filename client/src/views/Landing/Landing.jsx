import React from "react";
import { Link } from "react-router-dom";
import portada from "../../img/portadapokemon.png"
import poke from "../../img/botoncarga.png"
import "./Landing.css";

const Landing = () =>{
    return (
        <div className="LandingContainer">
            <img src={portada} alt="img" height="300vh" width="450vh"/>                
            <div className="Welcome">
                <h1>Bienvenidos a mi App de Pokemon</h1>
                <Link to ="/home" className="iniciar">
                    <img src={poke} width="200" height="200" />
                    <h2>Iniciar</h2>
                 </Link>

            </div>

        </div>
    )

}

export default Landing;
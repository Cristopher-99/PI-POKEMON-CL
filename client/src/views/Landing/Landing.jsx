import React from "react";
import { Link } from "react-router-dom";
import portada from "../../img/portadapokemon.png"
import "./Landing.css";

const Landing = () =>{
    return (
        <div className="LandingContainer">
            <img src={portada} alt="img" height="180vh" width="200vh"/>                
            <div className="Welcome">
                <h1>Bienvenidos a mi App de Pokemon</h1>
                <Link to ="/home">
                    <button className="btnPoke"> Iniciar </button>
                 </Link>

            </div>

        </div>
    )

}

export default Landing;
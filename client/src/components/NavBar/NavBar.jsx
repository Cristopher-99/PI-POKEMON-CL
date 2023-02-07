import React from "react";
import { Link } from "react-router-dom";
import logoPoke from "../../img/portadapokemon.png"
import "./NavBar.css"
const NavBar = (props)=> {

    return (
        <div className="NavContainer">
            <nav>
                <div className="navContent"> 
                    <Link to="/" className="imgNav"><img src={logoPoke} alt="logo" height="120vh" width="180vh"/></Link>
                    <Link to="/home" className="n">Home</Link>
                    <Link to="/create" className="n">Create Pokemon</Link>
                    <Link to="/about" className="n">About me</Link>

                </div>
            </nav>
        </div>
    )
}

export default NavBar;
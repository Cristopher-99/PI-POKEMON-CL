import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/index";
import github from "../../img/footer/github.png";
import gmail from "../../img/footer/gmail.png";
import linke from "../../img/footer/link.png";

import "./Aboutme.css";

const Aboutme = ()=>{

    return (
        <div className="AboutContainer">
            <NavBar/>
            <div className="Redes">
                <h1 className="titleRedes">Contacto</h1>
                <div className="icon">
                    <a href="https://github.com/Cristopher-99">
                        <img src={github} width="200" height="200"/>
                        <p>Github</p>
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/cristopher-lazo-60a4b218a/" >
                        <img src={linke} width="200" height="200" />
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div className="icon">
                    <a href="mailto:cristopherlazo1999@gmail.com">
                        <img src={gmail} width="200" height="200"/>
                        <p>cristopherlazo1999@gmail.com</p>
                    </a>
                </div>
            </div>
        </div>

    )

}


export default Aboutme;
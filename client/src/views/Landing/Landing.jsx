import { Link } from "react-router-dom";
import Home from "../Home/Home";
import "./Landing.css";
const Landing = () =>{
    return (
        <div className="LandingContainer">
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
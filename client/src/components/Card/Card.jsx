import React from "react";
import "./Card.css"
// import { useSelector } from "react-redux";
const Card = (props) =>{
    // const types= useSelector((state)=> state.types);
    return (
            <div className="CardStats">
                <h1 className="titleCard">{props.name} </h1>
                <img className="imgCard"src={props.img} alt="cover" width='280px' height='235px' />
                <h2 className="health">Vida: {props.health}</h2>
                <h2 className="attack">Ataque: {props.attack}</h2>
                <h3 className="types">Tipo: {props.types?.toString().split(",").join(" / ")} </h3>
            </div>
   
    )
}
export default Card;
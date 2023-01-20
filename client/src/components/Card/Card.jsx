import React from "react";
import "./Card.css"
// import { useSelector } from "react-redux";
const Card = (props) =>{
    // const types= useSelector((state)=> state.types);
    return (
            <div className="CardStats">
                <h1 className="title">{props.name} </h1>
                <img className="date"src={props.img} alt="cover" width='280px' height='250px' />
                <h2 className="date">Ataque: {props.attack}</h2>
                <h2 className="date">Tipos: {props.types?.toString().split(",").join(" / ")} </h2>
            </div>
   

    )
}
export default Card;
import React from "react";
import { getDetails, clearDetails } from "../../redux/actions";
import { useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
// import btn from "../../img/btnback.png"
import "./Detail.css"

const Detail = () =>{
    const dispatch= useDispatch();
    
    const {id}= useParams();
    const detailsPoke= useSelector((state)=> state.details)

    useEffect(()=>{
        dispatch(getDetails(id))
        return ()=>{
            dispatch(clearDetails())
        }
    },[dispatch,id])
    
    return (
        <div className='detailContainer'>
            <div>
                <NavBar/>
            </div>
                <div className="detailStats">
                    <h1 >{detailsPoke.name}</h1>
                    <img className='objDetail' src= {detailsPoke.img} alt='Imagen no encontrada' width='400px' height='400px'/>
                    <div className='obj2Detail'>
                        <h2>ID: {detailsPoke.id} </h2>
                        <div>
                            <label for="health">Vida: {detailsPoke.health} </label>
                            <progress id="health" value={detailsPoke.health} max="100"></progress>
                        </div>
                        <div>
                            <label for="attack">Ataque: {detailsPoke.attack} </label>
                            <progress id="attack" value={detailsPoke.attack} max="100"></progress>
                        </div>
                        <div>
                            <label for="defense"> Defensa: {detailsPoke.defense} </label>
                            <progress id="defense" value={detailsPoke.defense} max="100"></progress>
                        </div>
                        <div>
                            <label for="defense">Velocidad: {detailsPoke.speed} </label>
                            <progress id="speed" value={detailsPoke.speed} max="100"></progress>
                        </div>
                        <p className="height">Altura: {detailsPoke.height} m</p>
                        <p className="weight">Peso: {detailsPoke.weight} kg</p>
                        
                        <div>
                            <h2>Tipos: </h2>
                            {detailsPoke.types?.map((e,i)=>{
                                return(
                                    <p key={i} className="divpoketype">{e.name}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
          


    )
}

export default Detail;
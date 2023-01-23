import React from "react";
import { getDetails, clearDetails } from "../../redux/actions";
import { useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

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
        <div>
        <div>
            <NavBar/>
        </div>
            <div className='detailContent'>
                    <img className='objDetail' src= {detailsPoke.img} alt='Imagen no encontrada' width='350px' height='350px'/>
                    <div className='obj2Detail'>
                    <h2>Id:  {detailsPoke.id} </h2>
                    <h2>Nombre:  {detailsPoke.name}</h2>
                    <h2>Ataque:  {detailsPoke.attack}</h2>
                    <h2>Defensa:  {detailsPoke.defense}</h2>
                    <h2>Vida:  {detailsPoke.health}</h2>
                    <h2>Altura:  {detailsPoke.height}</h2>
                    <h2>Peso:  {detailsPoke.weight} gr</h2>
                    <h2>Tipos: </h2>
                     {detailsPoke.types?.map((e,i)=>{
                        return(
                            <h3 key={i} className="divpoketype">-{e.name}</h3>
                        )
                    })}
                    {/* <h2>Tipos:  detailsPoke.types?.map(t=>t)}</h2> */}
                    </div>
            </div>
        </div>
          


    )
}

export default Detail;
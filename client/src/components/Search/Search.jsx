import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchByName} from "../../redux/actions"
import "./Search.css"

const Search = (props) => {
    const dispatch= useDispatch();
    const [name, setName] = useState("");


    const handleInputChange= (e)=>{
        setName(e.target.value.toLowerCase())
    }
    const handleSumit= (e) =>{
        e.preventDefault();
        if(!name.length) return alert("Debe colocar un nombre");
        dispatch(searchByName(name))
        props.paginado(1);
        setName('')
    }
    return (
        <div className="searchContainer">
            <form className="form">
                <input className="input" type="text" onChange={(e)=> handleInputChange(e)} value={name} placeholder="Buscar pokemon..." id ="search"/>
                <button className="searchBtn" type="submit" onClick={(e)=>handleSumit(e)}>Buscar</button>   
                
                    
            </form>
        </div>

    )



}

export default Search;
import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchByName } from "../../redux/actions"
// import lupa from "../../img/lupa.png"
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
        <form className="form">
                <input className="input" type="text" onChange={(e)=> handleInputChange(e)} value={name} placeholder="Buscar pokemon..." id ="search"  />
                <button className="searchBtn" type="submit" onClick={(e)=>handleSumit(e)}>Buscar</button>   
                {/* <img src={lupa} width="30px" height="20px" className="searchBtn" onClick={(e)=> handleSumit(e)} id="search" /> */}
        </form>

    )



}

export default Search;
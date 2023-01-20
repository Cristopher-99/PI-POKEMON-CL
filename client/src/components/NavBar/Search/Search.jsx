import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchByName } from "../../../redux/actions"

const Search = (props) => {
    const dispatch= useDispatch();
    const [name, setName]= useState("");

    const handleInputChange= (e)=>{
        setName(e.target.value.toLowerCase())
    }
    const handleSumit= (e) =>{
        e.preventDefault();
        dispatch(searchByName(name))
        props.paginado(1);

    }

    return (
        <form className="form">
            <label htmlFor="search">
                <input onChange={(e)=> handleInputChange(e)} className="input" type="text" requerid="" placeholder="Buscar pokemon" id ="search" />
                <button className="search-btn" onClick={(e)=> handleSumit(e)}>Buscar</button>
                
            </label>
        </form>

    )



}

export default Search;
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { FilteredByTypes, FilteredByCreated, OrderByNameOrAttack,OrderByDefense,FilteredByAttack} from "../../redux/actions";
import "./Filters.css"

const Filters= (props)=>{
    const dispatch= useDispatch();
    const AllTypes= useSelector((state) => state.types)
    const [orden, setOrden]= useState("");

    function handleFilteredByTypes(e){
        dispatch(FilteredByTypes(e.target.value))
        props.paginado(1);
    }
    function handleFilteredCreated(e){
        dispatch(FilteredByCreated(e.target.value))
        props.paginado(1);
    }
    function handleOrder(e){
        e.preventDefault();
        dispatch(OrderByNameOrAttack(e.target.value))
        props.paginado(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handlerFilteredByAttack(e){
        e.preventDefault()
        dispatch(FilteredByAttack(e.target.value))
        props.paginado(1);
    }

    return (
        <div className="FilterAndOrder">
        {/* <button type="submit" onClick={(e)=>handleResetFilter(e)}>Reset Filter</button> */}
        <div className="FilterContainer">
            <select className="FilterPokemon" onChange={(e)=>handlerFilteredByAttack(e)}>
                <option value="default">Filtrar por Ataque :</option>
                <option value="mayor_atack">Mayores a 50 :</option>
                <option value="menor_atack">Menores a 50 :</option>

            </select>
            <select className="FilterPokemon" onChange={(e) =>handleFilteredByTypes(e)} > 
                <option value="All">Filtrar por Tipo:</option>
                {AllTypes.map((e)=>
                    <option value={e}>{e}</option>
                    
                    )}
            </select>
            <select className="FilterPokemon" onChange={(e)=>handleFilteredCreated(e)} >
                <option value="All">Filtrar por Pokemon:</option>
                <option value="All">Todos</option>
                <option value="created">Creado</option>
                <option value="api">Api</option>
            </select>
        </div>
        <div className="OrderContariner">
            <select className="OrderPokemon" onChange={(e)=>handleOrder(e)}>
                <option value="default">Ordenar por:</option>
                <optgroup label="Nombres">
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </optgroup>
                <optgroup label="Ataque">
                    <option value="min">Menor a Mayor</option>
                    <option value="max">Mayor a Menor</option>
                </optgroup>

            </select>
        </div>
    </div>
    )

}
export default Filters;
import React from "react";
import { Card, Filters, NavBar, Paginado, Search,Loader} from "../../components/index.js"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllPokes, clearTypes, getAllPokemons, getAllTypes} from "../../redux/actions";
import { Link } from "react-router-dom";
import recarga from "../../img/botoncarga.png"
import "./Home.css";

const Home = () =>{
    const dispatch= useDispatch();
    const Allpokemons= useSelector((state)=> state.pokemons)
    const pokemonsCopy= useSelector((state)=> state.pokeCopy)
    const AllTypes= useSelector((state) => state.types)

    ///paginado
    const[CurrentPage, setCurrentPage]= useState(1)
    const[cardsPerPage, setCardsPerPage]= useState(12)
    const indexLastCard = CurrentPage * cardsPerPage; // 
    const indexFirstCard =  indexLastCard - cardsPerPage; // 
    const cardCurrent = Allpokemons?.slice(indexFirstCard, indexLastCard);
    //
    const paginado= (page) =>{
        setCurrentPage(page)
    }
    ///
    useEffect(()=>{
        // if(!AllTypes.length){
        dispatch(getAllPokemons()); 
        dispatch(getAllTypes());
        
    },[dispatch])// AllTypes.length

    function handlerClick(e){
        e.preventDefault();
        dispatch(clearTypes())
        dispatch(clearAllPokes())
        dispatch(getAllPokemons());
        dispatch(getAllTypes());
        setCurrentPage(1);
    }
    return (
        <div className="HomeContainer">
            <div className="header">
                <NavBar/>
                <Search paginado={paginado}/>
                <div>
                    <h3 className="p_reload" id="reloadpoke">Recargar Pokemons</h3>
                    <img className="reload" src={recarga} onClick={(e)=> handlerClick(e)} id="reloadpoke"width="80" height="80px" />
                </div>
                
            </div>
            
            <div className="filterAndPaginate">
                <Filters paginado={paginado} />
                <Paginado cardsPerPage={cardsPerPage} AllPokes={Allpokemons.length} paginado={paginado} currentPage={CurrentPage}/>
            </div>
            <div>
               {pokemonsCopy.length
               ?
               <div className="Cards">
                    {cardCurrent.length? cardCurrent?.map(el=>{
                        return(
                            <div key={el.id} className="divCard">
                                <Link to={`/home/${el.id}`}>
                                    <Card 
                                        id= {el.id}
                                        name={el.name} 
                                        img={el.img}
                                        health={el.health}
                                        attack={el.attack}
                                        defense={el.defense}
                                        types={el.types?.map(t=>t)}
                                        />
                                </Link>
                            </div>
                        )  
                    })
                    :
                    <Loader/>}
                </div>
                : 
                <Loader/>}
            </div>

        </div>
    )
}

export default Home;
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes} from "../../redux/actions";
import { Link } from "react-router-dom";
import { Card, Filters, NavBar, Paginado, Search} from "../../components/index.js"
import Loader from "../Loader/Loader";
import "./Home.css";

const Home = (props) =>{
    const dispatch= useDispatch();
    const Allpokemons= useSelector((state)=> state.pokemons)
    const AllTypes= useSelector((state) => state.types)
    const pokemonsCopy= useSelector((state)=> state.pokeCopy)

    ///paginado
    const[CurrentPage, setCurrentPage]= useState(1)
    const[cardsPerPage, setCardsPerPage]= useState(12)
    const indexLastCard = CurrentPage * cardsPerPage;
    const indexFirstCard =  indexLastCard - cardsPerPage;
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
        dispatch(getAllPokemons());
        setCurrentPage(1);
    }
    return (
        <div className="HomeContainer">
            <div>
                <NavBar/>
                <Search paginado={paginado}/>
            </div>
            
            <button className="reload" onClick={(e)=> handlerClick(e) }>Recargar</button>
                <Filters paginado={paginado}/>
                <div>
                <Paginado cardsPerPage={cardsPerPage} AllPokes={Allpokemons.length} paginado={paginado} currentPage={CurrentPage}/>
               </div>
                <div className="Cards">
                    {cardCurrent.length? cardCurrent?.map(el=>{
                        return(
                            <div key={el.id} className="divCard">
                                <Link to={`/home/${el.id}`}>
                                    <Card 
                                        name={el.name} 
                                        img={el.img}
                                        attack={el.attack}
                                        types={el.types?.map(t=>t)}
                                        />
                                </Link>
                            </div>
                        )
                      })
                :<div className="loader_div"> <Loader/></div>}
                </div>
        </div>

        
    )
}

export default Home;
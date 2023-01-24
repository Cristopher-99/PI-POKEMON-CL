import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilteredByTypes, FilteredByCreated, OrderByNameOrAttack,clearAllPokes, clearDetails, getAllPokemons, getAllTypes, clearTypes} from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import Paginado from "../../components/Paginado/Paginado";
import Search from "../../components/Search/Search";
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
    const cardCurrent = Allpokemons.slice(indexFirstCard, indexLastCard);
    //
    const [orden, setOrden]= useState("");
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
    function handleFilteredByTypes(e){
        dispatch(FilteredByTypes(e.target.value))
        setCurrentPage(1);
    }
    function handleFilteredCreated(e){
        dispatch(FilteredByCreated(e.target.value))
        setCurrentPage(1);
    }
    function handleOrder(e){
        e.preventDefault();
        dispatch(OrderByNameOrAttack(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    return (
        <div className="HomeContainer">
            <div>
                <NavBar/>
                <Search paginado={paginado}/>
            </div>
            
            <button className="reload" onClick={(e)=> handlerClick(e) }>Recargar</button>
            <div className="FilterAndOrder">
                <select className="FilterPokemon" onChange={(e) =>handleFilteredByTypes(e)}> 
                    <option>Filtrar por Tipos</option>
                    <option value="All">Todos</option>
                    {AllTypes.map((e)=>
                        <option value={e}>{e}</option>
                    
                    )}
                </select>
                <select className="FilterPokemon" onChange={(e)=>handleFilteredCreated(e)}>
                    <option>Filtrar por Pokemon</option>
                    <option value="All">Todos</option>
                    <option value="created">Creado</option>
                    <option value="api">Api</option>
                </select>

                <select className="OrderPokemon" onChange={(e)=>handleOrder(e)}>
                    <option>Ordenar Alfabeticamnete</option>
                    <option value="asc"> A-Z</option>
                    <option value="desc"> Z-A</option>
                </select>
                <select className="OrderPokemon" onChange={(e)=>handleOrder(e)}>
                    <option >Ordenar por Ataque</option>
                    <option value="min">Menor Ataque</option>
                    <option value="max">Mayor Ataque</option>
                </select>
            </div>
                <div>
                <Paginado cardsPerPage={cardsPerPage} AllPokes={Allpokemons.length} paginado={paginado} currentPage={CurrentPage}/>
               </div>
                <div className="Cards">
                    {cardCurrent.length? cardCurrent?.map((el)=>{
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
                :<div> <Loader/></div>}
                </div>
        </div>

        
    )
}

export default Home;
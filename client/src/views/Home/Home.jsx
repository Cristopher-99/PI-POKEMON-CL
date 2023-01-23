// import CardsContainer from "../../components/CardsContainer/CardsContainer";
import React from "react";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterByTypes, FilteredByCreated, OrderByName, OrderbyAttack, getAllPokemons, getAllTypes } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import Paginado from "../../components/Paginado/Paginado";
import "./Home.css";

const Home = () =>{
    const dispatch= useDispatch();
    const Allpokemons= useSelector((state)=> state.pokemons)
    const AllTypes= useSelector((state) => state.types)
    ///paginado
    const[CurrentPage, setCurrentPage]= useState(1)
    const[cardsPerPage, setCardsPerPage]= useState(12)
    const indexLastCard = CurrentPage * cardsPerPage;
    const indexFirstCard =  indexLastCard - cardsPerPage;
    const cardCurrent = Allpokemons?.slice(indexFirstCard, indexLastCard) //!
    
    //
    const [orden, setOrden]= useState("");
    const paginado= (page) =>{
        setCurrentPage(page)
    }
    ///
    useEffect(()=>{
        // if(!AllTypes.length){
            dispatch(getAllPokemons()); //!
            dispatch(getAllTypes());
        // }

    },[dispatch])// AllTypes.length

    function handlerClick(e){
        e.preventDefault();
        dispatch(getAllPokemons());
        setCurrentPage(1);
    }
    function handleFilteredTypes(e){
        dispatch(FilterByTypes(e.target.value))
    }
    function handleFilteredCreated(e){
        dispatch(FilteredByCreated(e.target.value))
    }
    function handleOrderByName(e){
        e.preventDefault();
        dispatch(OrderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleOrderByAttack(e){
        e.preventDefault();
        dispatch(OrderbyAttack(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div className="HomeContainer">
            <div>
                <NavBar paginado={paginado}/>
            </div>
            <button className="reload" onClick={(e)=> handlerClick(e) }>Recargar</button>
            <div className="FilterAndOrder">
                <select className="FilterTypePokemon" onChange={(e) =>handleFilteredTypes(e)}> 
                    <option value="">Filtrar por Tipos</option>
                    <option value="All">Todos</option>
                    {AllTypes.map((e)=>
                        <option value={e}>{e}</option>
                    
                    )}
                </select>
                <select className="FilterPokemonCreated" onChange={(e)=>handleFilteredCreated(e)}>
                    <option value="">Filtrar por Pokemon</option>
                    <option value="All">Todos</option>
                    <option value="created">Creado</option>
                    <option value="api">Api</option>

                </select>

                <select className="OrderByName" onChange={(e)=>handleOrderByName(e)}>
                    <option value="">Ordenar Alfabeticamnete</option>
                    <option value="asc"> A-Z</option>
                    <option value="desc"> Z-A</option>
                </select>
                <select className="OrderByAttack" onChange={(e)=>handleOrderByAttack(e)}>
                    <option value="">Ordenar por Ataque</option>
                    <option value="min">Menor Ataque</option>
                    <option value="max">Mayor Ataque</option>
                </select>
            </div>

        
                 <div className="Cards">
                {cardCurrent.length ? 
                    cardCurrent?.map((el)=>{
                        return(
                            <div key={el.id} className="divCard">
                                <Link to={`/home/${el.id}`}>
                                 <Card 
                                    name={el.name} 
                                    img={el.img}
                                    attack={el.attack}
                                    types={el.types?.map(t=>t)}
                                // types={Alltypes.lenght && Alltypes?.map(t=>t)}    
                                    />
                                    </Link>
                            </div>
                        )
                })
                :<p>cargando</p>
            }
               </div>
               <div>
                <Paginado cardsPerPage={cardsPerPage} AllPokes={Allpokemons.length} paginado={paginado} currentPage={CurrentPage}/>
               </div>



            
        </div>

        
    )
}

export default Home;
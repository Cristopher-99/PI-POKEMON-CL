// import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes } from "../../redux/actions";
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
    const[pageCurrent, setPageCurrent]= useState(1)
    const[cardsPerPage, setCardsPerPage]= useState(12)
    const indexLastCard = pageCurrent * cardsPerPage;
    const indexFirstCard =  indexLastCard - cardsPerPage;
    const cardCurrent = Allpokemons?.slice(indexFirstCard, indexLastCard) //!
    
    const paginado= (page) =>{
        setPageCurrent(page)
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
        setPageCurrent(1);
    }

    return (
        <div className="HomeContainer">
            <div>
                <NavBar paginado={paginado}/>
            </div>
            <button className="reload" onClick={(e)=> handlerClick(e) }>Recargar</button>
            <div className="FilterAndOrder">
                <select className="FilterTypePokemon"> 
                    <option value="">Filtrar por Tipos</option>
                    <option value="All">Todos</option>
                </select>
                <select className="FilterPokemonCreated">
                    <option value="">Filtrar por Pokemon creado</option>
                    <option value="All">Todos</option>
                    <option value="created">Creado</option>
                    <option value="api">Api</option>
                </select>

                <select className="OrderByName">
                    <option value="">Ordenar Alfabeticamnete</option>
                    <option value="Ascendente"> A-Z</option>
                    <option value="Descendente"> Z-A</option>
                </select>
                <select className="OrderByAttack">
                    <option value="">Ordenar por Ataque</option>
                    <option value="MaxAtaque">Mayor Ataque</option>
                    <option value="MenorAtaque">Menor Ataque</option>
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
                <Paginado cardsPerPage={cardsPerPage} AllPokes={Allpokemons.length} paginado={paginado} currentPage={pageCurrent}/>
               </div>



            
        </div>

        
    )
}

export default Home;
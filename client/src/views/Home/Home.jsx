import NavBar from "../../components/NavBar/NavBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";

const Home = () =>{
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getAllPokemons());
    },[dispatch])

    return (
        <div>
            <NavBar/>
            <h1>Este es mi HOME</h1>

            <CardsContainer/>
        </div>

        
    )
}

export default Home;
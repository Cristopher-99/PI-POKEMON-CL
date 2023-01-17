import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
    const pokemons= useSelector(state => state.pokemons)

    return (
        <div className="CardsContainer">
            {pokemons.map (poke=>{
                return <Card
                    id= {poke.id}
                    name= {poke.name}
                    img= {poke.img}
                    />    
                
            })}

        </div>
    )

}
export default CardsContainer;
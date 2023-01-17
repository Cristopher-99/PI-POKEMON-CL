import axios from "axios";
export const GET_POKEMONS= "GET_POKEMONS";

export const getAllPokemons = () =>{
    return async function (dispatch){
        const apiData= await axios.get("https://pokeapi.co/api/v2/pokemon");
        const pokemons= apiData.data;
        dispatch({type: GET_POKEMONS, payload: pokemons });
    }
}
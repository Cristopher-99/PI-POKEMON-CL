import axios from "axios";
export const GET_POKEMONS= "GET_POKEMONS";
export const GET_TYPES= "GET_TYPES";
export const GET_DETAILS= "GET_DETAILS";
export const CLEAR_DETAIL= "CLEAR_DETAIL";
export const SEARCH_BY_NAME= "SEARCH_BY_NAME";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const CLEAR_CREATE_POKEMON = "CLEAR_CREATE_POKEMON";
export const CLEAR_ALL_POKES ="CLEAR_ALL_POKES";
export const CLEAR_TYPES= "CLEAR_TYPES";
export const FILTER_BY_TYPES ="FILTER_BY_TYPES";
export const FILTER_BY_CREATED= "FILTER_BY_CREATED";
export const ORDER_BY_NAME_OR_ATTACK = "ORDER_BY_NAME_OR_ATTACK";
// export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";


export const getAllPokemons = () =>{
    return async function (dispatch){ // "aca es donde se comunican el back con el front" no se conectan
        try {
            const apiData= await axios.get("http://localhost:3001/pokemons");
            return dispatch ({
                type: GET_POKEMONS,
                payload: apiData.data,
            });
        }
         catch (error) {
            alert("Error al cargar los pokemons")
            return(error)
        }
    }
}
export const getAllTypes= ()=>{
    return async function(dispatch){
        try {
            const apiTypes= await axios.get("http://localhost:3001/types")
            return dispatch({
                type:GET_TYPES,
                payload: apiTypes.data,
            })
            
        } catch (error) {
            alert('Error: no se pudo cargar los tipos')
            return (error);
        }
    }
}
export const getDetails= (id)=>{
    return async function(dispatch){
        const apiDetail= await axios.get(`http://localhost:3001/pokemons/${id}`)
        return dispatch({
            type:GET_DETAILS,
            payload: apiDetail.data,
        })
    }
}
export const clearDetails= ()=>{
    return {
        type: CLEAR_DETAIL
    }
}
export const searchByName= (name)=>{
    return async function(dispatch){
        try {
            const apiName= await axios.get(`http://localhost:3001/pokemons?name=${name}`)
              return dispatch({
                  type: SEARCH_BY_NAME, 
                  payload: apiName.data,
              })
              
          } catch (error) {
            alert("Pokemon no encontrado");
            console.log(error);
          }
        
    }
}
export const createPokemon= (poke)=>{
    return async function(dispatch){
        let response = await axios.post("http://localhost:3001/pokemons",poke)
        return dispatch({
            type: CREATE_POKEMON,
            payload: response.data,
        })
    }
}
export const clearCreatePokemon= ()=>{
    return {
        type: CLEAR_CREATE_POKEMON,
    }
}
export const clearAllPokes= ()=>{
    return {
        type: CLEAR_ALL_POKES,
    }
}
export const clearTypes =()=>{
    return {
        type: CLEAR_TYPES,
    }
}
export const FilteredByTypes = (payload)=>{
    return{
        type: FILTER_BY_TYPES,
        payload,
    }
}
export const FilteredByCreated= (payload) =>{   
    return {
        type: FILTER_BY_CREATED,
        payload,
    }
}

export const OrderByNameOrAttack = (payload) =>{
    return {
        type: ORDER_BY_NAME_OR_ATTACK,
        payload,
    }
}
// export const OrderbyAttack = (payload)=>{
//     return {
//         type: ORDER_BY_ATTACK,
//         payload
//     }
// }
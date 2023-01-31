import { stat } from "fs";
import order from "../functions/order";
import { GET_POKEMONS, GET_TYPES ,GET_DETAILS, CLEAR_DETAIL, SEARCH_BY_NAME,
         CREATE_POKEMON, CLEAR_ALL_POKES, CLEAR_TYPES,
        FILTER_BY_TYPES,FILTER_BY_CREATED, ORDER_BY_NAME_OR_ATTACK, ORDER_BY_DEFENSE} from "./actions";

const initialState = {
    pokemons:[],
    pokeCopy:[],
    types:[],
    details:{},
    // pokeCreated: {},
};

const rootReducer = (state= initialState, action) =>{
    const AllPokemons= state.pokeCopy;

    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload, 
                pokeCopy: action.payload };
        
        case GET_TYPES:
            return {
                ...state, 
                types: action.payload };
            
        case GET_DETAILS:
           return {
            ...state, 
            details: action.payload }

        case SEARCH_BY_NAME:
            return {
                ...state, 
                pokemons: action.payload }
                
        case CREATE_POKEMON:
            return{
                ...state, 
                }

        case CLEAR_DETAIL:
            return {
                ...state, 
                details: {} }

        case CLEAR_ALL_POKES:
            return{
                ...state, 
                pokemons:[]}
            
        case CLEAR_TYPES: 
            return {
                ...state, 
                types:[]}
        
        case FILTER_BY_TYPES:
            const FilteredByTypes = action.payload === "All" 
            ? AllPokemons 
            : AllPokemons.filter((el) => el.types?.includes(action.payload))
            return{
                ...state, 
                pokemons: FilteredByTypes,

            }
        case FILTER_BY_CREATED:
            const FilteredByCreated= action.payload === "created" 
            ? AllPokemons.filter(el => el.created) 
            : AllPokemons.filter(el=> !el.created)
            return {
                ...state,
                pokemons: action.payload === "All" 
                ? AllPokemons 
                : FilteredByCreated
            } 

        case ORDER_BY_NAME_OR_ATTACK:
            return{
                 ...state,
                pokemons: order(state.pokemons, action.payload).map((el)=>el),
            }
        // case ORDER_BY_DEFENSE:
        //     const orderDefense = action.payload === "asc_defense" 
        //     ? state.pokemons.sort(function(a,b){
        //         if(a.defense > b.defense) return 1;
        //         if(b.defense > a.defense) return -1;
        //         return 0;
        //     })
        //     : state.pokemons.sort(function(a,b){
        //         if(a.defense > b.defense) return -1;
        //         if(b.defense > a.defense) return 1;
        //         return 0;
        //     })

        //     return{
        //         ...state,
        //         pokemons: orderDefense
        //     }

        default:
            return{...state};
    }
}
    

export default rootReducer;
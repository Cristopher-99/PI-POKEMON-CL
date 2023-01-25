import order from "../functions/order";
import { GET_POKEMONS, GET_TYPES ,GET_DETAILS, CLEAR_DETAIL, SEARCH_BY_NAME,
         CREATE_POKEMON, CLEAR_CREATE_POKEMON, CLEAR_ALL_POKES, CLEAR_TYPES,
        FILTER_BY_TYPES,FILTER_BY_CREATED, ORDER_BY_NAME_OR_ATTACK} from "./actions";

const initialState = {
    pokemons:[],
    pokeCopy:[],
    types:[],
    details:{},
    pokeCreated: {},
};

const rootReducer = (state= initialState, action) =>{
    const auxAllPokes= state.pokeCopy;
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload, 
                pokeCopy: action.payload};
        
        case GET_TYPES:
            return {
                ...state, 
                types: action.payload };
            
        case GET_DETAILS:
           return {
            ...state, 
            details: action.payload }

        case CLEAR_DETAIL:
            return {
                ...state, 
                details: {} }

        case SEARCH_BY_NAME:
            return {
                ...state, 
                pokemons: action.payload }

        case CREATE_POKEMON:
            return{
                ...state, 
                pokeCreated: action.payload}
        
        case CLEAR_CREATE_POKEMON:
            return{
                ...state, 
                pokeCreated:{}}

        case CLEAR_ALL_POKES:
            return{
                ...state, 
                pokeCopy:[]}
            
        case CLEAR_TYPES: 
            return {
                ...state, 
                types:[]}
        
        case FILTER_BY_TYPES:
            const AllPokemons= state.pokeCopy;
            const FilteredByTypes = action.payload === "All" 
            ? AllPokemons 
            : AllPokemons.filter((el) => el.types?.includes(action.payload))
            return{
                ...state, 
                pokemons: FilteredByTypes,

            }
        case FILTER_BY_CREATED:
            const FilteredByCreated= action.payload === "created" 
            ? state.pokeCopy.filter(el => el.created) 
            : state.pokeCopy.filter(el=> !el.created)
            return {
                ...state,
                pokemons: action.payload === "All" ? state.pokeCopy : FilteredByCreated
            } 

        case ORDER_BY_NAME_OR_ATTACK:
            return{
                 ...state,
                pokemons: order(state.pokemons, action.payload).map((el)=>el),
            }

        default:
            return{...state};
    }
}
    

export default rootReducer;
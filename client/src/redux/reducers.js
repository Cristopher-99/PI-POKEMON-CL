import { GET_POKEMONS, GET_TYPES ,GET_DETAILS, CLEAR_DETAIL, SEARCH_BY_NAME,
         CREATE_POKEMON, CLEAR_CREATE_POKEMON, CLEAR_ALL_POKES, CLEAR_TYPES,
        FILTER_BY_TYPES} from "./actions";

const initialState = {
    pokemons:[],
    pokeCopy:[],
    types:[],
    details:{},
    pokeCreated: {},
};

const rootReducer = (state= initialState, action) =>{
    switch(action.type){
        case GET_POKEMONS:
            return {...state, pokemons: action.payload, pokeCopy: action.payload};
        
        case GET_TYPES:
            return {...state, types: action.payload}
            
        case GET_DETAILS:
           return {...state, details: action.payload}

        case CLEAR_DETAIL:
            return {...state, details: {}}

        case SEARCH_BY_NAME:
            return {...state, pokemons: action.payload}

        case CREATE_POKEMON:
            return{...state, pokeCreated: action.payload}
        
        case CLEAR_CREATE_POKEMON:
            return{...state, pokeCreated:{}}

        case CLEAR_ALL_POKES:
            return{...state, pokeCopy:[]}
            
        case CLEAR_TYPES: 
            return {...state, types:[]}
        case FILTER_BY_TYPES:
            return{...state, types: action.payload}

        default:
            return{...state};
    }
}
    

export default rootReducer;
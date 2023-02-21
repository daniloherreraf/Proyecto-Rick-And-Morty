 import { CLEAN_DETAIL, FILTER_BY_ORDER, FILTER_CHARACTERS, FILTER_GENDERS, FILTER_STATUS, GET_CHARACTERS, GET_CHARACTER_ID, GET_GENDERS, RESET_PAGE, CREATE_CHARACTER, GET_CHARACTER_NAME } from "../actions";
 
 
 const initialState = {
    characters: [],
    charactersAll: [],
    characterDetail: [],
    genders: [],
    currentPage: 1
 }
 
 
 const rootReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS:
            return {...state, characters: action.payload, charactersAll: action.payload };
        case GET_GENDERS:
            return {...state, genders: action.payload };
        case GET_CHARACTER_ID:
            return {...state, characterDetail: action.payload };
        case CREATE_CHARACTER:
            return {...state}
        case GET_CHARACTER_NAME:
            return {...state, characters: action.payload }
        case CLEAN_DETAIL:
            return {...state, characters: [], characterDetail: [] }
        case RESET_PAGE:
            return {...state, currentPage: action.payload}
        case FILTER_BY_ORDER:
            return {...state, characters: action.payload }
        case FILTER_GENDERS:
            const all = state.charactersAll;
            const filtered = action.payload === "all" ? all : all.filter((element) => element.gender == action.payload)
            console.log(filtered)
                return {...state, characters: filtered}
        case FILTER_CHARACTERS:
            const filterCharacters = state.charactersAll;
            const filteredCharacters = action.payload === "db" ? filterCharacters.filter(el => el.createdInDb === true) : filterCharacters.filter(el => el.created === false)
            return {...state, characters: filteredCharacters}
        case FILTER_STATUS:
            const filterStatus = state.charactersAll;
            const filteredStatus = filterStatus.filter(element => element.status == action.payload)
            return {...state, characters: filteredStatus}
        default:
            return { ...state };
    }

 }

 export default rootReducer;
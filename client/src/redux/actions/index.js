import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_GENDERS = "GET_GENDERS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const RESET_PAGE = "RESET_PAGE";
export const FILTER_BY_ORDER = "FILTER_BY_ORDER";
export const FILTER_GENDERS = "FILTER_GENDERS";
export const FILTER_CHARACTERS = "FILTER_CHARACTERS";
export const FILTER_STATUS = "FILTER_STATUS";
export const GET_CHARACTER_ID = "GET_CHARACTER_ID";
export const CREATE_CHARACTER = "CREATE_CHARACTER";
export const GET_CHARACTER_NAME = "GET_CHARACTER_NAME";

export const getCharacters = () => {
    return async function(dispatch) {
            const charactersData = await axios.get(
                "http://localhost:3001/character"
            )
            const characters = charactersData.data;
            dispatch({type: GET_CHARACTERS, payload: characters})
            }
}; 

export const getGenders = () => {
    return async function(dispatch) {
        const gendersData = await axios.get(
            "http://localhost:3001/gender"
        );
        const genders = gendersData.data;
        dispatch({type: GET_GENDERS, payload: genders}) 
    };
};

export const getCharactersById =(id) => {
    return async function(dispatch) {
        const charactersData = await axios.get(
            `http://localhost:3001/character/${id}`
        )
        const character = charactersData.data;
        dispatch({type: GET_CHARACTER_ID, payload: character})
    }
}

export function createCharacter(payload) {
    return async function(dispatch) {
        
        const response = await axios.post("http://localhost:3001/character", payload)
        return response
    }
}

export const getCharactersName = (name) => {
    return async function(dispatch) {
        try {
            const characterData = await axios.get(
                `http://localhost:3001/character?name=${name}`
            )
            const characters = characterData.data;
            dispatch({type: GET_CHARACTER_NAME, payload: characters})
            
        } catch (error) {
            alert (`Character ${name} not found`)
        }
        
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
    }
}

export const resetPage = (payload) => {
    return(dispatch) => {
        dispatch({type: RESET_PAGE, payload})
    }
}

export const filterByOrder = (characters, value) => {
    try {
        let charactersByOrder = value === 'orderAZ' ? 
        characters.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } 
            if (b.name.toLowerCase() > a.name.toLowerCase()){
                return -1
            }
                return 0;
        }): 
        characters.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
            } 
            if (b.name.toLowerCase() > a.name.toLowerCase()){
                return 1
            }
                return 0;
        })
        return function(dispatch){
            dispatch({type: FILTER_BY_ORDER, payload: charactersByOrder})
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const filterGenders = (payload) => {
    return {
        type: FILTER_GENDERS,
        payload
    }
};

export const filterCharacter = (payload) => {
    return {
        type: FILTER_CHARACTERS,
        payload
    }
};

export const filterStatus = (payload) =>{
    return {
        type: FILTER_STATUS,
        payload
    }
};


import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";

/* export const getCharacters = () => {
    return async function(dispatch) {
            const charactersData = await axios.get(
                "http://localhost:3001/character"
            );
            const characters = charactersData.data;
            console.log(characters)
            dispatch({type: GET_CHARACTERS, payload: characters});
    };
}; */

export const getCharacters= () => async(dispatch) => {
   /*  try { */
   
        const results = await axios.get("http://localhost:3001/character")
        
        return dispatch({ type: GET_CHARACTERS, payload: results.data});
    /* } catch (error) {
        throw new Error(error);
    } */
}
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getCharactersById } from "../../redux/actions";
import { useEffect } from "react";
import style from "./Detail.module.css";


const Detail = () => {
    const dispatch = useDispatch()
    const character = useSelector((state)=> state.characterDetail)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getCharactersById(id));
        return () => {
            dispatch(cleanDetail())
        }
    }, [id, dispatch])

    return (
        <div className={style.bgImg}>
            {
                character.length>0 ?
                <div>
                    <h1 className={style.bgDetail}>{character[0].name}</h1>
                    <div>
                        <img className={style.imagen} src={character[0].image}/>
                    </div>
                    <h2 className={style.bgDetail} >Location: {character[0].location}</h2>
                    <div className={style.contenido3}>
                        <h3>Status: {character[0].status}</h3>
                        <br />
                        <h3>Species: {character[0].species}</h3>
                        <br />
                        <h3>Gender: {character[0].gender}</h3>
                    </div>
                </div> : <p>Loading...</p>
            }
        </div>
    )
}

export default Detail;
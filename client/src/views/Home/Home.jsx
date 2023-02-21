import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardCharacter from "../../components/CardCharacter/CarCharacter"
import style from "./Home.module.css";
import { getCharacters } from "../../redux/actions";

const Home = () => {
    const characters = useSelector((state) => state.characters)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getCharacters())
    }, [dispatch])
    

       
    
    return (
       <div className={style.bg}>
        <div className={style.card}>
            <div className={style.card1}>
        {
        characters.map((element)=>{
            return(
                <div key={element.id}>
                    <CardCharacter
                    id={element.id}
                    name={element.name}
                    img={element.image}
                    gender={element.gender}
                    location={element.location}
                    />
                </div>
            )})}
            </div>
        </div>
       </div>
    )
}

export default Home;
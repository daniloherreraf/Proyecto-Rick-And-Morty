import React from "react";
import { Link } from "react-router-dom";
import style from "./CardCharacter.module.css";


const CardCharacter = ({name, img, gender, location, id}) => {
    return(
        <div className={style.card} >
            <div className={style.infoCard}>
                <img title={name} src={img} alt="Image Not Found" />
            </div>
            <div className={style.btnI}>
                <div>
                <Link to={`/detail/${id}`}>
                    <h3>{name}</h3>
                </Link>
                </div>
            </div>
            
            <div className={style.btnI}>
                {/* <p className={style.infoCard2}> */}
                    <h4>{gender}</h4>
                {/* </p> */}
                
            </div>
        
            <div className={style.btnI}>
                    <h5>{location}</h5>
            </div>
            

        </div>
    )
}

export default CardCharacter;
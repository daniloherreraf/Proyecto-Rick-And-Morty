import React from "react";
import { Link } from "react-router-dom";
import style from "./CardCharacter.module.css";


const CardCharacter = (props) => {
    return(
        <div className={style.card} >
            <div className={style.infoCard}>
                <img title={props.name} src={props.img} alt="Image Not Found" />
            </div>
            <div className={style.btnI}>
                <div>
                <Link>
                    <h3>{props.name}</h3>
                </Link>
                </div>
            </div>
            
            <div className={style.btnI}>
                {/* <p className={style.infoCard2}> */}
                    <h4>{props.gender}</h4>
                {/* </p> */}
                
            </div>
        
            <div className={style.btnI}>
                    <h5>{props.location}</h5>
            </div>
            

        </div>
    )
}

export default CardCharacter;
import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <div className={style.bgImg}>
            <div className={style.mensaje}>
            <div >Welcome My App Rick and Morty</div>
            </div>
            <div className={style.bgHyC}>
            <Link to="/Home">
                <button>ENTER CHARACTERS</button>
            </Link>
            </div>
        </div>
    )

}

export default LandingPage
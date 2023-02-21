import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import Search from "../Search/Search";

const NavBar = () => {
    return(
        <div className={style.bg}>
            <div className={style.bgHyC}> 
                <Link to="/">
                    <button>LANDINGPAGE</button>
                </Link>
                <Link to="/home">
                    <button>HOME</button>
                </Link>
                <Link to="/create">
                    <button>FORM</button>
                </Link>
                <Search/>
            </div>
        </div>
    )

}

export default NavBar;
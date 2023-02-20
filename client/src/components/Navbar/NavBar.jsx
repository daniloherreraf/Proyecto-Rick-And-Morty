import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={style.bg}>
            <div className={style.bgHyC}> 
                <Link to="/">
                    <button>LANDIGPAGE</button>
                </Link>
                <Link to="/home">
                    <button>HOME</button>
                </Link>
                <Link to="/create">
                    <button>FORM</button>
                </Link>
            </div>
        </div>
    )

}

export default NavBar;
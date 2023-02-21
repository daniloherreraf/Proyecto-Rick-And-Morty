import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardCharacter from "../../components/CardCharacter/CarCharacter"
import style from "./Home.module.css";
import Paginated from "../../components/Paginated/Paginated";
import { filterCharacter, getCharacters, getGenders, cleanDetail, resetPage, filterByOrder, filterGenders, filterStatus } from "../../redux/actions";

const Home = () => {
    const [order, setOrder] = useState("")
    const [charactersPerPage, setCharactersPerPage] = useState(6)
    const characters = useSelector((state) => state.characters)
    const dispatch = useDispatch();
    const currentPage = useSelector((state)=> state.currentPage)
    const genders = useSelector((state) => state.genders)


    useEffect(()=> {
        dispatch(getCharacters());
        dispatch(getGenders());
        dispatch(cleanDetail());
    }, [dispatch]);

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexofFirtsCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexofFirtsCharacter, indexOfLastCharacter);
    
    const paginated = (currentPage) => {
        dispatch(resetPage(currentPage))
    };

    function handleCharacters(e) {
        dispatch(getCharacters());
        paginated(1);
    };

    function handleFilterByOrder(e) {
        dispatch(filterByOrder(characters, e.target.value));
        dispatch(resetPage(1));
        setOrder(`Order ${e.target.value}`);
    };

    function handleFilter(e) {
        dispatch(filterGenders(e.target.value));
        dispatch(resetPage(1));
        setOrder(`Order ${e.target.value}`);
    };

    function handleFilterCharacter(e) {
        dispatch(filterCharacter(e.target.value))
        dispatch(resetPage(1));
        setOrder(`Order ${e.target.value}`);
    };

    function handleFilterBystatus(e) {
        dispatch(filterStatus(e.target.value));
        dispatch(resetPage(1));
        setOrder(`Order ${e.target.value}`);
    };

       
    
    return (
       <div className={style.bg}>
        <div className={style.bg}>
            <div className={style.bg}>
                <div className={style.filtroPaginado}>
                    <div className={style.sortFilter}>
                        <h1>Meet the characters from the Rick and Morty series</h1>
                        <div>
                            <button onClick={(e) => handleCharacters(e)}>Refresh</button>
                        </div>
                        <select onChange={(e)=> handleFilterByOrder(e)}>
                            <option value="orderAZ">Characters A-Z</option>
                            <option value="orderZA">Characters Z-A</option>
                        </select>
                        <select onChange={e => handleFilter(e)}>
                                <option value="all">All Genders</option>
                                {genders.length ? genders.map((e) =>
                                <option value={e.name} key={e.id}>{e.name}</option>) : null}
                        </select>
                        <select onChange={(e) => handleFilterCharacter(e)}>
                            <option value="all">All Characters</option>
                            <option value="api">API Characters</option>
                            <option value="db">DATA BASE Characters</option>
                        </select>
                        <select onChange={(e)=> handleFilterBystatus(e)}>
                            <option value="Alive">Alive</option>
                            <option value="Dead">Dead</option>
                            <option value="unknown">unknown</option>
                        </select>
                        <div className={style.card}>
                            <div className={style.card1}>
                                 {
                                    currentCharacters?.map((element)=>{
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
                        <div>
                            <Paginated
                            charactersPerPage={charactersPerPage}
                            characters={characters.length}
                            paginated={paginated}/>
                        </div>
                          

                    </div>
                </div>
            </div>
        </div>
        
       </div>
    )
}

export default Home;



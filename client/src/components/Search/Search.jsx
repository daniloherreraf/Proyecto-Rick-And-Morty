import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPage, cleanDetail, getCharactersName } from '../../redux/actions';
import style from "./Search.module.css"

const Search = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const searchHandler = (e) => {
        setName(e.target.value)
    }

    const submitHandler = () => {
        if(name) {
            dispatch(getCharactersName(name));
            dispatch(cleanDetail())
            dispatch(resetPage(1));
            setName("")
            
            } else {
                alert("!!Type a name to search!!")
            }
    }

  return (
    <div>
        <input  id="search" type="search" placeholder='Write name search character...' onChange={searchHandler} value={name} />
        <button type="submit" onClick={submitHandler} value={name} >SEARCH</button>
    </div>
  )
}

export default Search
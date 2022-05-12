import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Search() {

    let [responseData, setResponseData] = useState('')
    let length;
    const {movie} = useParams();
    let array;

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=3c79b15f`)
        .then((response)=>{
            setResponseData = response.data.Search[0].Title
            console.log(setResponseData);
            length = response.data.Search.length;
            array = response.data.Search
            //console.log(response.data.Search[0].Poster)
           // console.log(array)
           

        })
        .catch((error) => {
            console.log(error)
        })
     }, [movie, length])
     
     return(
        <div style={{textAlign: "center"}}>
            <h1>SEARCH BY FILM</h1>
            <p>{length}</p>
            <table>
                <tr><td>{}</td></tr>
            </table>
        </div>
    )
}

export default Search;
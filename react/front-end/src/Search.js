import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Search() {

    let [responseData, setResponseData] = useState([]);
    const {movie} = useParams();

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=3c79b15f`)
        .then((response)=>{
            console.log(response.data);
            setResponseData(response.data.Search);
            console.log(response.data.Search[0])
           

        })
        .catch((error) => {
            console.log(error)
        })
     }, [movie])
     
     return(
        <div style={{textAlign: "center"}}>
            <h1>SEARCH BY FILM</h1>
            
            {responseData.map(data =>   
            <table style={{border: "3px solid rgb(0, 0, 0)", marginLeft: "auto", marginRight: "auto"}}>
                
                <tr><td><img src={data.Poster} /></td></tr>
                    <tr><td>{data.Title}</td></tr>
                    <tr><td>{data.Year}</td></tr>
                    <tr><td>{data.imdbID}</td></tr>
                
                </table>
                )}
            
        </div>
    )
}

export default Search;
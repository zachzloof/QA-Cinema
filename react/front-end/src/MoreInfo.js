import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function MoreInfo() {

    let [responseData, setResponseData] = useState({});
    
    const {movie} = useParams();

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=${movie}&apikey=3c79b15f`)
        .then((response)=>{
            console.log(response.data);
            setResponseData(response.data)
            // console.log(response.data)

           

        })
        .catch((error) => {
            console.log(error)
        })
     }, [movie])
     
     return(
        <div style={{textAlign: "center"}}>
            <h1>SEARCH BY FILM</h1>
             
             {
                 <table style={{border: "3px solid rgb(0, 0, 0)", marginLeft: "8%", marginRight: "auto"}}>
                
                <tr><td>Rated: {responseData.Rated}</td></tr>
                 <tr><td>Title: {responseData.Title}</td></tr>
                 <tr><td>Year: {responseData.Year}</td></tr>
                 <tr><td>Released: {responseData.Released}</td></tr>
                 <tr><td>Runtime: {responseData.Runtime}</td></tr>
                 <tr><td>Genre: {responseData.Genre}</td></tr>
                 <tr><td>Director: {responseData.Director}</td></tr>
                 <tr><td>Actors: {responseData.Actors}</td></tr>
                 <tr><td>plot: {responseData.Plot}</td></tr>
             
             </table>} 
            
                
            
        </div>
    )
}

export default MoreInfo;
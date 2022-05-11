import React, { useEffect, useState } from "react";
import axios from "axios";
// movie listing page using jsx
const Movie = () => 
{ 

    const[data, setData] =useState([]);
    
    const[loaded, setLoaded] =useState(false);
    useEffect(()=>{
        axios.get("http://www.omdbapi.com/?s=star wars&apikey=2c98117c")
        .then((res)=>{
            
            setData(res.data.Search) 
            console.log(data)
            setLoaded(true)

        }).catch((err)=>{ console.log(err)
            setLoaded(true)

        }
        )
    },[]) 
    if(loaded){
        return (<>
       
           {data.map((Movie)=>(
        <>
        
         <img src={Movie.Poster} /><h3> {Movie.Title}</h3></> 
        ))}
           
       
        <h1> This is Star Wars</h1>
        </>
    )
        
    }
    else{return(
        <h1> loading... </h1>
    )}
    


}
   



export default Movie;


import React, { useEffect, useState } from "react";
import axios from "axios";
// movie listing page using jsx
const Movie = () => 
{ 

    // FROM HERE
    const[avengersData, setAvengersData] =useState([]);
    //
    const[narutoData, setNarutoData] =useState([]);
    //
    const[batmanData, setBatmanData] =useState([]);
    //
    const[spongebobData, setSpongebobData] =useState([]);
    //
    const[sonicData, setSonicData] =useState([]);
    //
    const[morbiusData, setMorbiusData] =useState([]);

    


    const[loaded, setLoaded] =useState(false);
    // HERE 
    useEffect(()=>{
        axios.get("http://www.omdbapi.com/?i=tt5108870&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setMorbiusData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?I=tt12412888&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setSonicData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt0345950&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setSpongebobData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt1877830&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setBatmanData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt4154796&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setAvengersData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt6342474&apikey=2c98117c")
        .then((res)=>{
            
            setNarutoData(res.data) 
            setLoaded(true)

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
       


    },[]) 

    // HTML section


    if(loaded){
        return (
        <>
         <img src={avengersData.Poster} alt="avengers" />
         <h1> {avengersData.Title}</h1>
         <h2 id="movie-title"> A QA Cinemas special showing especially for marvel fans who want to rewatch the action in the big Screen! </h2>
         <h4> {avengersData.Plot}</h4>

         <img src={narutoData.Poster} alt="naruto" />
         <h1> {narutoData.Title}</h1>
         <h2 id="movie-title"> A QA Cinemas special for all shinobi to enjoy in glorious IMAX</h2>
         <h4> {narutoData.Plot}</h4>

         <img src={sonicData.Poster} alt="sonic" />
         <h1> {sonicData.Title}</h1>
         <h2 id="movie-title"> Faster than the flash?!</h2>
         <h4>  {sonicData.Plot} </h4>

         <img src={batmanData.Poster} alt="batman" />
         <h1> {batmanData.Title}</h1>
         <h2 id="movie-title"> The Batman Returns in 2022 </h2>
         <h4> {batmanData.Plot}</h4>

         <img src={spongebobData.Poster} alt="spongebob" />
         <h1> {spongebobData.Title}</h1>
         <h2 id="movie-title"> The best film of all time?</h2>
         <h4> {spongebobData.Plot} </h4>


         <img src={morbiusData.Poster} alt="morbius" />
         <h1> {morbiusData.Title}</h1>
         <h2 id="movie-title"> A pretty shit film...</h2>
         <h4> {morbiusData.Plot} </h4>
          </>
        
    )
        
    }
    else{return(
        <h1> loading... </h1>
    )}
    


}
   



export default Movie;



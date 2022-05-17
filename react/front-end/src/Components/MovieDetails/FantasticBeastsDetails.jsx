import React, { useEffect, useState } from "react";
import axios from "axios";

const FantasticBeastsDetails = () =>
{

    const[fantasticbeastsData, setFantasticbeastsData] =useState([]);

    

    const[loaded, setLoaded] =useState(false);

    useEffect(()=>{

        axios.get("http://www.omdbapi.com/?i=tt4123432&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setFantasticbeastsData(res.data) 
            setLoaded(true)

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )






























    },[])
       

    if(loaded){
        return(

            <>


         <h1> {fantasticbeastsData.Title}</h1>
          
         <a href="https://youtu.be/Y9dr2zw-TXQ" target="_blank">
         <img src={fantasticbeastsData.Poster} alt="Fantastic Beasts" id="fantastic-beasts" /> </a>

        
         <h4> <b>Directors:</b> {fantasticbeastsData.Director} </h4>
         <h4> <b>Cast:</b> {fantasticbeastsData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {fantasticbeastsData.Plot}</h4>
         <h4> <b>Run time:</b> {fantasticbeastsData.Runtime}</h4>
         <h4> <b> Genre: </b> {fantasticbeastsData.Genre}</h4>
         

         </>



            

  )}
            




        
    



























}


export default FantasticBeastsDetails;

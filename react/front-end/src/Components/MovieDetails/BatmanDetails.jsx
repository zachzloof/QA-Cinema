import React, { useEffect, useState } from "react";
import axios from "axios";

const BatmanDetails = () =>
{

    const[batmanData, setBatmanData] =useState([]);

    

    const[loaded, setLoaded] =useState(false);

    useEffect(()=>{

        axios.get("http://www.omdbapi.com/?i=tt1877830&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setBatmanData(res.data) 
            setLoaded(true)

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )






























    },[])
       

    if(loaded){
        return(

            <>


         <h1> {batmanData.Title}</h1>
          
         <a href="https://youtu.be/mqqft2x_Aa4" target="_blank">
         <img src={batmanData.Poster} alt="avengers" id="avengers" /> </a>

        
         <h4> <b>Directors:</b> {batmanData.Director} </h4>
         <h4> <b>Cast:</b> {batmanData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {batmanData.Plot}</h4>
         <h4> <b>Run time:</b> {batmanData.Runtime}</h4>
         <h4> <b> Genre: </b> {batmanData.Genre}</h4>
         

         </>



            

  )}
            




        
    



























}


export default BatmanDetails;
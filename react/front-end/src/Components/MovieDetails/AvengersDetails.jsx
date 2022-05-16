import React, { useEffect, useState } from "react";
import axios from "axios";

const AvengersDetails = () =>
{

    const[avengersData, setAvengersData] =useState([]);

    

    const[loaded, setLoaded] =useState(false);

    useEffect(()=>{

        axios.get("http://www.omdbapi.com/?i=tt4154796&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setAvengersData(res.data) 
            setLoaded(true)

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )






























    },[])
       

    if(loaded){
        return(

            <>


         <h1> {avengersData.Title}</h1>
          
         <a href="https://youtu.be/TcMBFSGVi1c" target="_blank">
         <img src={avengersData.Poster} alt="avengers" id="avengers" /> </a>

        
         <h4> <b>Directors:</b> {avengersData.Director} </h4>
         <h4> <b>Cast:</b> {avengersData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {avengersData.Plot}</h4>
         <h4> <b>Run time:</b> {avengersData.Runtime}</h4>
         <h4> <b> Genre: </b> {avengersData.Genre}</h4>
         

         </>



            

  )}
            




        
    



























}


export default AvengersDetails;
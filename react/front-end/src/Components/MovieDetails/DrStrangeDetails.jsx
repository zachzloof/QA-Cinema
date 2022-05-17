import React, { useEffect, useState } from "react";
import axios from "axios";

const DrStrangeDetails = () =>
{

    const[drstrangeData, setDrstrangeData] =useState([]);

    

    const[loaded, setLoaded] =useState(false);

    useEffect(()=>{

        axios.get("http://www.omdbapi.com/?i=tt9419884&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setDrstrangeData(res.data) 
            setLoaded(true)

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )

























    },[])
       

    if(loaded){
        return(

            <>


         <h1> {drstrangeData.Title}</h1>
          
         <a href="https://youtu.be/TcMBFSGVi1c" target="_blank">
         <img src={drstrangeData.Poster} alt="avengers" id="avengers" /> </a>

        
         <h4> <b>Directors:</b> {drstrangeData.Director} </h4>
         <h4> <b>Cast:</b> {drstrangeData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {drstrangeData.Plot}</h4>
         <h4> <b>Run time:</b> {drstrangeData.Runtime}</h4>
         <h4> <b> Genre: </b> {drstrangeData.Genre}</h4>
         

         </>



            

  )}

  else{
    return(
    <h1> Loading data... </h1>
)}
            




        
    



























}


export default DrStrangeDetails;


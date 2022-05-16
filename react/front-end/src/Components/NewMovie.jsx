import React, { useEffect, useState } from "react";
import axios from "axios";


const NewMovie = () =>
{
    //const for movie API data
    const[jurassicworldData, setJurassicworldData] = useState([]);
    const[avatarData, setAvatarData] = useState([]);
    const[thorData, setThorData] = useState([]);
    const[blackpantherData, SetBlackpantherData] =useState([]);
    const[blackadamData, SetBlackadamData] =useState([]);
    const[killersoftheflowermoonData, SetKillersoftheflowermoonData] =useState([]);



    const[loaded, setLoaded] =useState(false);
    
    useEffect(()=>{
        
        axios.get("http://www.omdbapi.com/?i=tt5537002&apikey=e71f477")
        .then((res)=>{
            console.log(res)
            SetKillersoftheflowermoonData(res.data) 
            

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt6443346&apikey=e71f477")
        .then((res)=>{
            console.log(res)
            SetBlackadamData(res.data) 
            

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt9114286&apikey=e71f477")
        .then((res)=>{
            console.log(res)
            SetBlackpantherData(res.data) 
            

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt10648342&apikey=e71f477")
        .then((res)=>{
            console.log(res)
            setThorData(res.data) 
            

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt8041270&apikey=e71f477")
        .then((res)=>{
            console.log(res)
            setJurassicworldData(res.data) 
            

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt1630029&apikey=e71f477")
        .then((res)=>{
            console.log(res)
            setAvatarData(res.data) 
            setLoaded(true)

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )

       
    },[]) 

    // HTML section


    if(loaded){
        return(

        <>
        <h1> QA CINEMAS UPCOMING MOVIES</h1>

         <a href="https://youtu.be/fb5ELWi-ekk" target="_blank">
         <img src={jurassicworldData.Poster} alt="Jurassic World Dominion" id="jurassic-world" /> </a>
         <h1> {jurassicworldData.Title}</h1>
         <h4> <b>Directors:</b> {jurassicworldData.Director} </h4>
         <h4> <b>Cast:</b> {jurassicworldData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {jurassicworldData.Plot}</h4>
         <h4> <b>Run time:</b> {jurassicworldData.Runtime}</h4>
         <h4> <b> Genre: </b> {jurassicworldData.Genre}</h4>

         <a href="https://youtu.be/a8Gx8wiNbs8" target="_blank">
         <img src={avatarData.Poster} alt="Avatar the way of water" id="avatar" /> </a>
         <h1> {avatarData.Title}</h1>
         <h4> <b>Directors:</b> {avatarData.Director} </h4>
         <h4> <b>Cast:</b> {avatarData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {avatarData.Plot}</h4>
         <h4> <b>Run time:</b> {avatarData.Runtime}</h4>
         <h4> <b> Genre: </b> {avatarData.Genre}</h4>

         <a href="https://youtu.be/tgB1wUcmbbw" target="_blank">
         <img src={thorData.Poster} alt="Thor love and thunder" id="thor" /> </a>
         <h1> {thorData.Title}</h1>
         <h4> <b>Directors:</b> {thorData.Director} </h4>
         <h4> <b>Cast:</b> {thorData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {thorData.Plot}</h4>
         <h4> <b>Run time:</b> {thorData.Runtime}</h4>
         <h4> <b> Genre: </b> {thorData.Genre}</h4>

         <a href="" target="_blank">
         <img src={blackpantherData.Poster} alt="Black Panther Wakanda Forever" id="black-panther" /> </a>
         <h1> {blackpantherData.Title}</h1>
         <h4> <b>Directors:</b> {blackpantherData.Director} </h4>
         <h4> <b>Cast:</b> {blackpantherData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {blackpantherData.Plot}</h4>
         <h4> <b>Run time:</b> {blackpantherData.Runtime}</h4>
         <h4> <b> Genre: </b> {blackpantherData.Genre}</h4>
         
         
         <a href="https://youtu.be/Knw-Hmo4GZE" target="_blank">
         <img src={blackadamData.Poster} alt="Black Adam" id="black-adam" /> </a>
         <h1> {blackadamData.Title}</h1>
         <h4> <b>Directors:</b> {blackadamData.Director} </h4>
         <h4> <b>Cast:</b> {blackadamData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {blackadamData.Plot}</h4>
         <h4> <b>Run time:</b> {blackadamData.Runtime}</h4>
         <h4> <b> Genre: </b> {blackadamData.Genre}</h4>
         
         <a href="" target="_blank">
         <img src={killersoftheflowermoonData.Poster} alt="Killers of the flower moon" id="flower-moon" /> </a>
         <h1> {killersoftheflowermoonData.Title}</h1>
         <h4> <b>Directors:</b> {killersoftheflowermoonData.Director} </h4>
         <h4> <b>Cast:</b> {killersoftheflowermoonData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {killersoftheflowermoonData.Plot}</h4>
         <h4> <b>Run time:</b> {killersoftheflowermoonData.Runtime}</h4>
         <h4> <b> Genre: </b> {killersoftheflowermoonData.Genre}</h4>
         
         
     

        </>
    )}
    





    
    else{
        return(
        <h1> Loading data... </h1>
    )}
    
    



    
    
    
    
























    






}







export default NewMovie;




















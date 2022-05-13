import React, { useEffect, useState } from "react";
import axios from "axios";


// movie listing page using jsx
const Movie = () => 
{ 

    // Const for API Data
    const[avengersData, setAvengersData] =useState([]);
    //
    const[batmanData, setBatmanData] =useState([]);
    //
    const[spongebobData, setSpongebobData] =useState([]);
    //
    const[sonicData, setSonicData] =useState([]);
    //
    const[morbiusData, setMorbiusData] =useState([]);
    //
    const[topgunData, setTopgunData] =useState([]);
    //
    const[drstrangeData, setDrstrangeData] =useState([]);
    //
    const[fantasticbeastsData, setFantasticbeastsData] =useState([]);
    //
    const[spidermanData, setSpidermanData] =useState([]);
    //
    const[thelostcityData, setThelostcityData] =useState([]);

    


    const[loaded, setLoaded] =useState(false);
    
    useEffect(()=>{
        
        axios.get("http://www.omdbapi.com/?i=tt13320622&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setThelostcityData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt10872600&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setSpidermanData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt4123432&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setFantasticbeastsData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt9419884&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setDrstrangeData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
        axios.get("http://www.omdbapi.com/?i=tt1745960&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setTopgunData(res.data) 

           

        }).catch((err)=>{ console.log(err)
            setLoaded(true)
            
        }
        )
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
        <h1> QA CINEMAS </h1>

         <a href="https://youtu.be/TcMBFSGVi1c" target="_blank">
         <img src={avengersData.Poster} alt="avengers" id="avengers" /> </a>
         <h1> {avengersData.Title}</h1>
         <h4> <b>Directors:</b> {avengersData.Director} </h4>
         <h4> <b>Cast:</b> {avengersData.Actors}</h4> 
         <h4> <b>Synopsis:</b> {avengersData.Plot}</h4>
         <h4> <b>Run time:</b> {avengersData.Runtime}</h4>
         <h4> <b> Genre: </b> {avengersData.Genre}</h4>
         
         <a href="https://youtu.be/mqqft2x_Aa4" target="_blank"> 
         <img src={batmanData.Poster} alt="batman" id="batman" /> </a>
         <h1> {batmanData.Title}</h1>
         <h4> <b>Directors:</b> {batmanData.Director} </h4>
         <h4> <b>Cast:</b> {batmanData.Actors}</h4>
         <h4> <b>Synopsis:</b> {batmanData.Plot}</h4>
         <h4> <b>Run time: </b>{batmanData.Runtime}</h4>
         <h4> <b> Genre: </b> {batmanData.Genre}</h4>
         
         

         <a href="https://youtu.be/aWzlQ2N6qqg" target="_blank">
         <img src={drstrangeData.Poster} alt="drstrange" id="drstrange" />  </a>
         <h1> {drstrangeData.Title}</h1>
         <h4> <b>Directors:</b> {drstrangeData.Director} </h4>
         <h4> <b>Cast:</b> {drstrangeData.Actors}</h4>
         <h4> <b>Synopsis:</b> {drstrangeData.Plot}</h4>
         <h4> <b>Run time:</b> {drstrangeData.Runtime}</h4>
         <h4> <b> Genre: </b> {drstrangeData.Genre}</h4>
         

         <a href="https://youtu.be/Y9dr2zw-TXQ" target="_blank"> 
         <img src={fantasticbeastsData.Poster} alt="fantasticbeasts" id="fantasticbeasts" /> </a>
         <h1> {fantasticbeastsData.Title}</h1>
         <h4> <b>Directors:</b> {fantasticbeastsData.Director} </h4>
         <h4> <b>Cast</b>: {fantasticbeastsData.Actors}</h4>
         <h4> <b>Synopsis:</b> {fantasticbeastsData.Plot}</h4>
         <h4> <b>Run time: </b>{fantasticbeastsData.Runtime}</h4>
         <h4> <b> Genre: </b> {fantasticbeastsData.Genre}</h4>

         <a href="https://youtu.be/oZ6iiRrz1SY" target="_blank">
         <img src={morbiusData.Poster} alt="morbius" id="morbius" /> </a>
         <h1> {morbiusData.Title}</h1>
         <h4> <b>Directors:</b> {morbiusData.Director} </h4>
         <h4> <b>Cast:</b> {morbiusData.Actors} </h4>
         <h4> <b>Synopsis:</b> {morbiusData.Plot} </h4>
         <h4> <b>Run time: </b>{morbiusData.Runtime}</h4>
         <h4> <b> Genre: </b> {morbiusData.Genre}</h4>
     

         <a href="https://youtu.be/G5kzUpWAusI" target="_blank"> 
         <img src={sonicData.Poster} alt="sonic" id="sonic" /> </a>
         <h1> {sonicData.Title}</h1>
         <h4> <b>Directors:</b> {sonicData.Director} </h4>
         <h4> <b>Cast:</b> {sonicData.Actors} </h4>
         <h4> <b>Synopsis:</b>  {sonicData.Plot} </h4>
         <h4> <b>Run time:</b> {sonicData.Runtime}</h4>
         <h4> <b> Genre: </b> {sonicData.Genre}</h4>

         <a href="https://youtu.be/JfVOs4VSpmA" target="_blank"> 
         <img src={spidermanData.Poster} alt="spiderman" id="spiderman" /> </a>
         <h1> {spidermanData.Title}</h1>
         <h4> <b>Directors:</b> {spidermanData.Director}</h4>
         <h4> <b>Cast:</b> {spidermanData.Actors}</h4>
         <h4> <b>Synopsis:</b> {spidermanData.Plot}</h4>
         <h4> <b>Run time:</b> {spidermanData.Runtime}</h4>
         <h4> <b> Genre: </b> {spidermanData.Genre}</h4>
         
         <a href="https://youtu.be/0ec9Thn50hs" target="_blank">
         <img src={spongebobData.Poster} alt="spongebob" id="spongebob" /> </a>
         <h1> {spongebobData.Title}</h1>
         <h4> <b>Directors:</b> {spongebobData.Director} </h4>
         <h4> <b>Cast:</b> {spongebobData.Actors} </h4>
         <h4> <b>Synopsis:</b> {spongebobData.Plot} </h4>
         <h4> <b>Run time:</b> {spongebobData.Runtime}</h4>
         <h4> <b> Genre: </b> {spongebobData.Genre}</h4>

         <a href="https://youtu.be/nfKO9rYDmE8" target="_blank">
         <img src={thelostcityData.Poster} alt="topgun" id="topgun" /> </a>
         <h1> {thelostcityData.Title}</h1>
         <h4> <b>Directors:</b> {thelostcityData.Director} </h4>
         <h4> <b>Cast:</b> {thelostcityData.Actors} </h4>
         <h4> <b>Synopsis:</b> {thelostcityData.Plot}</h4>
         <h4> <b>Run time:</b> {thelostcityData.Runtime}</h4>
         <h4> <b> Genre: </b> {thelostcityData.Genre}</h4>
       
         
         <a href="https://youtu.be/giXco2jaZ_4" target="_blank"> 
         <img src={topgunData.Poster} alt="topgun" id="topgun" /> </a>
         <h1> {topgunData.Title}</h1>
         <h4> <b>Directors:</b> {topgunData.Director} </h4>
         <h4> <b>Cast:</b> {topgunData.Actors} </h4>
         <h4> <b>Synopsis: </b> {topgunData.Plot}</h4>
         <h4> <b>Run time: </b> {topgunData.Runtime}</h4>
         <h4> <b> Genre: </b> {topgunData.Genre}</h4>

        </>
    )}
    
    else{
        return(
        <h1> what is happening </h1>
    )}
    
    


}


export default Movie;



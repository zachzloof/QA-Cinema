import React, { useEffect, useState } from "react";
import axios from "axios";


// movie listing page using jsx
const Movie = () => 
{ 

    // Const for API Data
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

        axios.get("http://www.omdbapi.com/?s=The lost city&apikey=2c98117c")
        .then((res)=>{
            console.log(res)
            setSpidermanData(res.data) 

           

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

    // todo: link images to a trailer


    if(loaded){
        return (

        <>

        <h1> QA CINEMAS </h1>


       
         <img src={avengersData.Poster} alt="avengers" id="avengers" />
         <h1> {avengersData.Title}</h1>
         <h4> <b>Directors:</b> {avengersData.Director} </h4>
         <h4> <b>Cast:</b> {avengersData.Actors}</h4> 
         <h4> <b>Plot:</b> {avengersData.Plot}</h4>
         <h4> <b>More Info...</b></h4>
         
         
         <img src={batmanData.Poster} alt="batman" id="batman" />
         <h1> {batmanData.Title}</h1>
         <h4> <b>Directors:</b> {batmanData.Director} </h4>
         <h4> <b>Cast:</b> {batmanData.Actors}</h4>
         <h4> <b>Synopsis:</b> {batmanData.Plot}</h4>
         <h4> <b>More Info...</b></h4>

         <img src={drstrangeData.Poster} alt="drstrange" id="drstrange" />
         <h1> {drstrangeData.Title}</h1>
         <h4> <b>Directors:</b> {drstrangeData.Director} </h4>
         <h4> <b>Cast:</b> {drstrangeData.Actors}</h4>
         <h4> <b>Synopsis:</b> {drstrangeData.Plot}</h4>
         <h4> <b>More Info...</b></h4>

         
         <img src={fantasticbeastsData.Poster} alt="fantasticbeasts" id="fantasticbeasts" />
         <h1> {fantasticbeastsData.Title}</h1>
         <h4> <b>Directors:</b> {fantasticbeastsData.Director} </h4>
         <h4> <b>Cast</b>: {fantasticbeastsData.Actors}</h4>
         <h4> <b>Synopsis:</b> {fantasticbeastsData.Plot}</h4>
         <h4> <b>More Info...</b></h4>

         
         <img src={morbiusData.Poster} alt="morbius" id="morbius" />
         <h1> {morbiusData.Title}</h1>
         <h4> <b>Directors:</b> {morbiusData.Director} </h4>
         <h4> <b>Cast:</b> {morbiusData.Actors} </h4>
         <h4> <b>Synopsis:</b> {morbiusData.Plot} </h4>
         <h4> <b>More Info...</b></h4>


         <img src={narutoData.Poster} alt="naruto" id="naruto" />
         <h1> {narutoData.Title}</h1>
         <h4> <b>Directors:</b> {narutoData.Director} </h4>
         <h4> <b>Cast:</b> {narutoData.Actors}</h4>
         <h4> <b>Synopsis:</b> {narutoData.Actors}</h4>
         <h4> <b>More Info...</b></h4>

         <img src={sonicData.Poster} alt="sonic" id="sonic" />
         <h1> {sonicData.Title}</h1>
         <h4> <b>Directors:</b> {sonicData.Director} </h4>
         <h4> <b>Cast:</b> {sonicData.Actors} </h4>
         <h4> <b>Synopsis:</b>  {sonicData.Plot} </h4>
         <h4> <b>More Info...</b></h4>

         <img src={spidermanData.Poster} alt="spiderman" id="spiderman" />
         <h1> {spidermanData.Title}</h1>
         <h4> <b>Directors:</b> {spidermanData.Director}</h4>
         <h4> <b>Cast:</b> {spidermanData.Actors}</h4>
         <h4> <b>Synopsis:</b> {spidermanData.Plot}</h4>
         <h4> <b>More Info...</b></h4>

         
         <img src={spongebobData.Poster} alt="spongebob" id="spongebob" />
         <h1> {spongebobData.Title}</h1>
         <h4> <b>Directors:</b> {spongebobData.Director} </h4>
         <h4> <b>Cast:</b> {spongebobData.Actors} </h4>
         <h4> <b>Synopsis:</b> {spongebobData.Plot} </h4>
         <h4> <b>More Info...</b></h4>


         <img src={topgunData.Poster} alt="topgun" id="topgun" />
         <h1> {topgunData.Title}</h1>
         <h4> <b>Directors:</b> {topgunData.Director} </h4>
         <h4> <b>Cast:</b> {topgunData.Actors} </h4>
         <h4> <b>Synopsis:</b> {topgunData.Plot}</h4>
         <h4> <b>MoreInfo...</b></h4>
         


          </>
        
    )
        
    }
    else{return(
        <h1> loading... </h1>
    )}
    
    


}
   



export default Movie;



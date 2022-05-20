import React, { useEffect, useState } from "react";
import axios from "axios";
import './Movie.css'


// movie listing page using jsx
const Movie = () => {

    // Const for API Data
    const [avengersData, setAvengersData] = useState([]);
    //
    const [batmanData, setBatmanData] = useState([]);
    //
    const [sonicData, setSonicData] = useState([]);
    //
    const [morbiusData, setMorbiusData] = useState([]);
    //
    const [drstrangeData, setDrstrangeData] = useState([]);
    //
    const [fantasticbeastsData, setFantasticbeastsData] = useState([]);
    //
    const [spidermanData, setSpidermanData] = useState([]);
    //
    const [thelostcityData, setThelostcityData] = useState([]);




    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        axios.get("http://www.omdbapi.com/?i=tt13320622&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setThelostcityData(res.data)



            }).catch((err) => {
                console.log(err)
                setLoaded(true)

            }
            )
        axios.get("http://www.omdbapi.com/?i=tt10872600&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setSpidermanData(res.data)



            }).catch((err) => {
                console.log(err)
                setLoaded(true)

            }
            )
        axios.get("http://www.omdbapi.com/?i=tt4123432&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setFantasticbeastsData(res.data)



            }).catch((err) => {
                console.log(err)
                setLoaded(true)

            }
            )
        axios.get("http://www.omdbapi.com/?i=tt9419884&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setDrstrangeData(res.data)



            }).catch((err) => {
                console.log(err)
                setLoaded(true)

            }
            )
        axios.get("http://www.omdbapi.com/?i=tt5108870&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setMorbiusData(res.data)



            }).catch((err) => {
                console.log(err)
                setLoaded(true)

            }
            )
        axios.get("http://www.omdbapi.com/?I=tt12412888&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setSonicData(res.data)



            }).catch((err) => {
                console.log(err)
                setLoaded(true)

            }
            )
        axios.get("http://www.omdbapi.com/?i=tt1877830&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setBatmanData(res.data)



            }).catch((err) => {
                console.log(err)
                setLoaded(true)

            }
            )
        axios.get("http://www.omdbapi.com/?i=tt4154796&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setAvengersData(res.data)
                setLoaded(true)



            }).catch((err) => {
                console.log(err)
                setLoaded(true)

            }
            )

    }, [])

    // HTML section


    if (loaded) {
        return (

            <>

                <body style={{ marginLeft: "8%", marginRight: "auto", textAlign: "center" }}>
                    <h1> QA CINEMAS </h1>


                    <a href="/listings/Batman" target="_blank">
                        <img className="img-listings" src={batmanData.Poster} alt="batman" id="batman" /> </a>
                    <h1> {batmanData.Title}</h1>



                    <a href="/listings/DrStrange" target="_blank">
                        <img className="img-listings" src={drstrangeData.Poster} alt="drstrange" id="drstrange" />  </a>
                    <h1> {drstrangeData.Title}</h1>



                    <a href="listings/FantasticBeasts" target="_blank">
                        <img className="img-listings" src={fantasticbeastsData.Poster} alt="fantasticbeasts" id="fantasticbeasts" /> </a>
                    <h1> {fantasticbeastsData.Title}</h1>


                    <a href="/listings/Morbius" target="_blank">
                        <img className="img-listings" src={morbiusData.Poster} alt="morbius" id="morbius" /> </a>
                    <h1> {morbiusData.Title}</h1>


                    <a href="listings/Sonic" target="_blank">
                        <img className="img-listings" src={sonicData.Poster} alt="sonic" id="sonic" /> </a>
                    <h1> {sonicData.Title}</h1>


                </body>


            </>
        )
    }







    else {
        return (
            <h1> Loading data... </h1>
        )
    }




}


export default Movie;





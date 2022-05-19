import React, { useEffect, useState } from "react";
import axios from "axios";

const MorbiusDetails = () => {

    const [morbiusData, setMorbiusData] = useState([]);



    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        axios.get("http://www.omdbapi.com/?i=tt5108870&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setMorbiusData(res.data)
                setLoaded(true)



            }).catch((err) => {
                console.log(err)
                setLoaded(true)

            }
            )

    }, [])


    if (loaded) {
        return (

            <>
                <body style={{ marginLeft: "8%", marginRight: "auto", textAlign: "center" }}>
                    <h1> {morbiusData.Title}</h1>

                    <a href="https://youtu.be/oZ6iiRrz1SY" target="_blank">
                        <img src={morbiusData.Poster} alt="morbius" id="morbius" /> </a>


                    <h4> <b>Directors:</b> {morbiusData.Director} </h4>
                    <h4> <b>Cast:</b> {morbiusData.Actors}</h4>
                    <h4> <b>Synopsis:</b> {morbiusData.Plot}</h4>
                    <h4> <b>Run time:</b> {morbiusData.Runtime}</h4>
                    <h4> <b> Genre: </b> {morbiusData.Genre}</h4>

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


export default MorbiusDetails;
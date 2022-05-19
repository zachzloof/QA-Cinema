import React, { useEffect, useState } from "react";
import axios from "axios";

const SonicDetails = () => {

    const [sonicData, setSonicData] = useState([]);



    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        axios.get("http://www.omdbapi.com/?I=tt12412888&apikey=2c98117c")
            .then((res) => {
                console.log(res)
                setSonicData(res.data)
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
                    <h1> {sonicData.Title}</h1>

                    <a href="https://youtu.be/G5kzUpWAusI" target="_blank">
                        <img src={sonicData.Poster} alt="sonic" id="sonic" /> </a>


                    <h4> <b>Directors:</b> {sonicData.Director} </h4>
                    <h4> <b>Cast:</b> {sonicData.Actors}</h4>
                    <h4> <b>Synopsis:</b> {sonicData.Plot}</h4>
                    <h4> <b>Run time:</b> {sonicData.Runtime}</h4>
                    <h4> <b> Genre: </b> {sonicData.Genre}</h4>

                </body>
            </>





        )
    }
}


export default SonicDetails;
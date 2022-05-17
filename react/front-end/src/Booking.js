import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';





const Booking = () => {

    const [children, setChildren] = useState(0);
    const [student, setStudent] = useState(0);
    const [adult, setAdult] = useState(0);
    const [screen, setScreen] = useState("");
    const [movie, setMovie] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const navigate = useNavigate();

    const saveData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4005/processBooking", {
            children, //DEFAULTS TO VARIABLE NAME ^^^^^
            student,
            adult,
            screen,
            movie,
            date,
            time

        })
            .then((response) => {
                console.log(response);
                navigate("/payment/" + response.data.id);
            });
    }


    return (<div style={{ marginLeft: "25%" }}>
        <form onSubmit={saveData}>
            Children tickets £13.55: <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} placeholder="CHILDREN: £13.55" /> <br />
            Student tickets: £15.50<input type="number" value={student} onChange={(e) => setStudent(e.target.value)} placeholder="STUDENT: £15.50" />   <br />
            Adult: £17.99<input type="number" value={adult} onChange={(e) => setAdult(e.target.value)} placeholder="ADULT: 17.99" />  <br />
            Screen: <select value={screen} onChange={(e) => setScreen(e.target.value)}>
            <option></option>
                <option selected="selected">standard</option>
                <option>deluxe</option>
            </select>
            <br />

            movie:  <select value={movie} onChange={(e) => setMovie(e.target.value)} >
            <option></option>
                <option selected="selected">Doctor Strange - Multiverse of Madness</option>
                <option>Fantastic Beasts - The Secrets of Dumbledore</option>
                <option>The Batman</option>
                <option>Spiderman - No Way Home</option>
                <option>Sonic the Hedgehog</option>
            </select>
            <br />

            date: <select value={date} onChange={(e) => setDate(e.target.value)}>
            <option></option>
            <option>23/05/2022</option>
            <option>24/05/2022</option>
            <option>25/05/2022</option>
            <option>26/05/2022</option>
            <option>27/05/2022</option>
            <option>28/05/2022</option>
            <option>29/05/2022</option>
            <option>30/05/2022</option>
            <option>31/05/2022</option>
            </select>
            <br />

            time: <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option></option>
            <option selected="selected">16:00</option>
            <option>18:00</option>
            <option>20:00</option>
            <option>22:00</option>
            </select>
            <br />
            <button>BOOK!</button>
        </form>
    </div>)


}



export default Booking;
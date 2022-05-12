import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';





const Booking = () => {

    const [children, setChildren] = useState(0);
    const [student, setStudent] = useState(0);
    const [adult, setAdult] = useState(0);

    const navigate = useNavigate();

    const saveData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4005/processBooking", {
            children, //DEFAULTS TO VARIABLE NAME ^^^^^
            student, 
            adult
        })
            .then((response) => {
                console.log(response);
                navigate("/payment/" + response.data.id);
            });
    }


    return (<div style={{textAlign: "center"}}>
        <form onSubmit={saveData}>
            Children tickets £13.55: <input type="number" value={children} onChange={(e)=> setChildren(e.target.value)} placeholder="CHILDREN: £13.55" /> <br/>
            Student tickets: £15.50<input type="number" value={student} onChange={(e)=> setStudent(e.target.value)} placeholder="STUDENT: £15.50" />   <br/>
            Adult: £17.99<input type="number" value={adult} onChange={(e)=> setAdult(e.target.value)} placeholder="ADULT: 17.99" />  <br/>
            <button>BOOK!</button>
        </form>
    </div>)


}



export default Booking;
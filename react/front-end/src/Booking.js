import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { Button, Form } from 'react-bootstrap';





const Booking = () => {

    const [children, setChildren] = useState(0);
    const [student, setStudent] = useState(0);
    const [adult, setAdult] = useState(0);
    const [screen, setScreen] = useState("standard");
    const [movie, setMovie] = useState("Doctor Strange - Multiverse of Madness");
    const [date, setDate] = useState("23/05/2022");
    const [time, setTime] = useState("16:00");

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


    return (

    <body style={{ marginTop: '20px', marginLeft: '6%', textAlign: "center" }}>

        <h1> BOOK YOUR JOURNEY TO ENTERTAINMENT </h1>
        <br />

        <Form onSubmit={saveData} style={{ width: '60%', marginLeft: '20%', textAlign: "center" }}>

            <Form.Group className='mb-3'>
                <Form.Label>
                    Child Ticket(s) (£13.55):
                </Form.Label>
                <Form.Control type='number' value={children} onChange={(e) => setChildren(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>
                    Student Ticket(s) (£15.50):
                </Form.Label>
                <Form.Control type='number' value={student} onChange={(e) => setStudent(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>
                    Adult Ticket(s) (£17.99):
                </Form.Label>
                <Form.Control type='number' value={adult} onChange={(e) => setAdult(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>
                    Screen:
                </Form.Label>
                <Form.Select value={screen} onChange={(e) => setScreen(e.target.value)}>

                    <option>Standard</option>
                    <option>Deluxe</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>
                    Movie:
                </Form.Label>
                <Form.Select value={movie} onChange={(e) => setScreen(e.target.value)}>
                    <option>Doctor Strange - Multiverse of Madness</option>
                    <option>Fantastic Beasts - The Secrets of Dumbledore</option>
                    <option>The Batman</option>
                    <option>Spiderman - No Way Home</option>
                    <option>Sonic the Hedgehog</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>
                    Date:
                </Form.Label>
                <Form.Select value={date} onChange={(e) => setScreen(e.target.value)}>

                    <option>23/05/2022</option>
                    <option>24/05/2022</option>
                    <option>25/05/2022</option>
                    <option>26/05/2022</option>
                    <option>27/05/2022</option>
                    <option>28/05/2022</option>
                    <option>29/05/2022</option>
                    <option>30/05/2022</option>
                    <option>31/05/2022</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>
                    Timing:
                </Form.Label>
                <Form.Select value={time} onChange={(e) => setScreen(e.target.value)}>
                    <option>16:00</option>
                    <option>18:00</option>
                    <option>20:00</option>
                    <option>22:00</option>
                </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit">
                Checkout!
            </Button>
        </Form>
        </body>)}



export default Booking;
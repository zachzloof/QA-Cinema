import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Form } from 'react-bootstrap';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target[0].value)
        let name = e.target[0].value;
        let email = e.target[1].value;
        let subject = e.target[2].value;
        let body = e.target[3].value;
        if (name == "") {
            alert("PLEASE ENTER A NAME")
        } else if (email == "") {
            alert("PLEASE ENTER AN EMAIL")
        } else if (subject == "") {
            alert("PLEASE ENTER A SUBJECT")
        } else if (body == "") {
            alert("PLEASE ENTER A MESSAGE")
        } else {
            emailjs.sendForm('service_3db4zda', 'template_t3nt2zr', form.current, '1jYw_FThaeEzl3l6g')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };



    return (
        <body style={{ marginTop: '20px', marginLeft: '6%', textAlign: "center" }}>
            <h1>Feel free to contact us!</h1>
            <h4>Please complete the form below</h4>
            <h6>We aim to respond to emails within 72 hours</h6>
<br />

            <Form style={{ width: '60%', marginLeft: '20%', textAlign: "center" }} ref={form} onSubmit={sendEmail}>
                <Form.Group className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder='Please enter your name' />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="user_email" />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' rows='3' name="message" />
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Send
                </Button>
            </Form>
        </body>
    );
};

export default Contact;
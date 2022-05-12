import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xsd1f7m', 'template_t3nt2zr', form.current, '1jYw_FThaeEzl3l6g')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div style={{ textAlign: "center", marginLeft: "8%", merginRight: "auto" }}>
            <h1>Feel free to contact us!</h1>
            <h4>Below you will find a form and a physical address</h4>
            <h6>We will respond to emails within 72 hours, and reply to mail within 2 working days of us receiving them</h6>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label> <br />
                <input type="text" name="user_name" /> <br />
                <label>Email</label> <br />
                <input type="email" name="user_email" /> <br />
                <label>Message</label> <br />
                <textarea name="message" /> <br />
                <input type="submit" value="Send" />
            </form>
            <p>Headquarters address:  3rd Floor, International House, 1 St Katharine's Way, London E1W 1UN</p>
        </div>
    );
};

export default Contact;
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
            
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label> <br />
                <input type="text" name="user_name" /> <br />
                <label>Email</label> <br />
                <input type="email" name="user_email" /> <br />
                <label>Message</label> <br />
                <textarea name="message" /> <br />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;
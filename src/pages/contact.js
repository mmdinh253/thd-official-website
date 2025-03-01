import React, { useState } from "react";
import "../components/ContactForm.css";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipient = "mmdinh253@gmail.com";
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        
        console.log('Form submitted:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="page-container">
            <div className="subtitle">
                <h1>Contact</h1>
            </div>

            <div className="contact-form-container"> {/* ADDED THIS CONTAINER */}
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // FIXED HERE
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import './ContactUs.css';  // Sigurohu që importon stilin këtu

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:info@mastercutz.com">info@mastercutz.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
            <p>Address: 123 Barber Street, City, Country</p>
        </div>
    );
};

export default ContactUs;

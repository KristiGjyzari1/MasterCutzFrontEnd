import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to MasterCutz</h1>
            <p>Your one-stop shop for the best barber services.</p>
            <div className="home-buttons">
                <a href="/services" className="btn">Our Services</a>
                <a href="/booking" className="btn">Book an Appointment</a>
            </div>
        </div>);
};

export default Home;

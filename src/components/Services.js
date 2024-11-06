import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <h2>Our Services</h2>
            <div className="services-list">
                <div className="service-item">
                    <h3>Haircut</h3>
                    <p>Classic or modern cuts to fit your style.</p>
                </div>
                <div className="service-item">
                    <h3>Beard Trim</h3>
                    <p>Precise beard trimming for a polished look.</p>
                </div>
                <div className="service-item">
                    <h3>Shave</h3>
                    <p>Traditional hot towel shave for the smoothest experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UpdateProfile.css';

const UpdateProfile = () => {
    const { id } = useParams();
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/clients/updateProfile/${id}`, { email, phoneNumber });
            console.log(response.data);
            alert('Profile updated successfully!');
        } catch (err) {
            setError('Failed to update profile');
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <h2>Update Profile</h2>
            {error && <p>{error}</p>}
            <input
                type="email"
                placeholder="New Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="New Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateProfile;

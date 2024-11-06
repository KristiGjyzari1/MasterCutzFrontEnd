import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';
import Index from './index.js';
import Home from './components/Home'; // Shtuar
import Services from './components/Services'; // Shtuar
import AboutUs from './components/AboutUs'; // Shtuar
//import Booking from './components/Booking'; // Shtuar
import ContactUs from './components/ContactUs'; // Shtuar
import Navbar from './components/Navbar'; // Shtuar
import Footer from './components/Footer'; // Shtuar
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Shtuar Navbar */}
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Faqja kryesore */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/index" element={<Index />} />
                    <Route path="/updateProfile/:id" element={<UpdateProfile />} />
                    <Route path="/services" element={<Services />} /> {/* Shërbimet */}
                    <Route path="/about" element={<AboutUs />} /> {/* Rreth nesh */}
                    <Route path="/contact" element={<ContactUs />} /> {/* Kontakti */}
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/posts" element={<PostList />} />
                </Routes>
                <Footer /> {/* Shtuar Footer */}
            </div>
        </Router>
    );
}

export default App;

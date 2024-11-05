import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';
import Index from './index.js';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/index" element={<Index />} />
                    <Route path="/updateProfile/:id" element={<UpdateProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
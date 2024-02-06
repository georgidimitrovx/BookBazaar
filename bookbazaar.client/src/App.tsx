import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

// Define the authenticateUser function inside or import it from another file
const authenticateUser = async () => {
    // todo use register login with credentials

    try {
        const response = await axios.post('https://localhost:7106/api/Auth/token', {
            Email: 'admin', // These should come from user input
            Password: 'password', // These should come from user input
        });
        const { token } = response.data;
        localStorage.setItem('token', token); // Consider security implications
        console.log('Authentication successful, token stored: ', token);
    } catch (error) {
        console.error("Authentication failed:", error);
    }
};

export default App;
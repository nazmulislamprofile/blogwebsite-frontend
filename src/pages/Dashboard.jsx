import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Dashboard/>
            <Footer />
        </div>
    );
};

export default HomePage;
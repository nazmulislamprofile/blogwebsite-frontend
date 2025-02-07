import React from 'react';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ServicePage = () => {
    return (
        <div>
            <Navbar />
            <h1>Service Page</h1>
            <ServiceSection />
            <Footer />
        </div>
    );
};

export default ServicePage;
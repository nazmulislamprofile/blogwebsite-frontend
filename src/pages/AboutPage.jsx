import React from 'react';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            
            {/* About Page Header with Background Image */}
            <section 
                className="text-white py-5" 
                style={{
                    backgroundImage: 'url("https://img.freepik.com/premium-photo/creative-workspace-featuring-light-bulb-symbolizing-innovation-team-collaboration-spirit_24623-12726.jpg?w=826")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="container">
                    <h1 className="display-4 text-center">About Us</h1>
                    <p className="lead text-center">We are a passionate team building innovative solutions to help businesses thrive in the digital world.</p>
                </div>
            </section>
            
            {/* About Content Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Our Mission</h2>
                            <p>
                                Our mission is to build powerful and user-friendly web applications that provide exceptional value to users. We focus on delivering quality and innovative solutions that help businesses grow.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2>Our Vision</h2>
                            <p>
                                We aim to be a leader in the tech industry by continuously improving our services and adapting to the latest technological advancements. Our vision is to create products that make a positive impact on the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Team Section */}
            <TeamSection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutPage;

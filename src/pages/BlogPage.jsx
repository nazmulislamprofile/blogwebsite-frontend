import React from 'react';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BlogPage = () => {
    return (
        <div>
            <Navbar />
            <h1>Blog Page</h1>
            <BlogSection />
            <Footer />
        </div>
    );
};

export default BlogPage;
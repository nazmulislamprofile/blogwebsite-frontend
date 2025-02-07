import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Left Section - Branding */}
          <div className="col-md-4 text-center text-md-start">
            <h5>Blog Website</h5>
            <p className="text-white">Sharing knowledge, one blog at a time.</p>
          </div>

          {/* Center Section - Quick Links */}
          <div className="col-md-4 text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/blog" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="/service" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Right Section - Social Media */}
          <div className="col-md-4 text-center text-md-end">
                    <h5>Follow Us</h5>
            <a href="#" className="me-3">
                <i className="fab fa-facebook fa-lg text-white"></i>
            </a>
            <a href="#" className="me-3">
                <i className="fab fa-twitter fa-lg text-white"></i>
            </a>
            <a href="#" className="me-3">
                <i className="fab fa-instagram fa-lg text-white"></i>
            </a>
            <a href="#">
                <i className="fab fa-linkedin fa-lg text-white"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Blog Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

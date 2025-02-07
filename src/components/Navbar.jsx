import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu"; // Import the Menu component

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (based on token in localStorage)
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* Brand Name */}
        <a className="navbar-brand" href="/">
          BLOG SHARE
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Component Inside Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <Menu /> {/* Injecting Menu Component */}
          
          {/* Login/Logout Button */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {isLoggedIn ? (
                <button className="btn btn-danger ms-2" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <a className="btn btn-primary ms-2" href="/login">
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

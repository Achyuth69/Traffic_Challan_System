import React from "react"; import { Link } from 
"react-router-dom"; import "./Navbar.css"; // Ensure this CSS file exists 
       const Navbar = () => { 
          return ( 
            <nav className="navbar"> 
              <div className="logo">Traffic Challan System</div> 
              <ul className="nav-links"> 
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/login">Login</Link></li> 
                <li><Link to="/register">Register</Link></li> 
                <li><Link to="/dashboard">Dashboard</Link></li> {/* Added Dashboard */} 
              </ul> 
            </nav> 
          ); 
        }; 
 
        export default Navbar; 
import React, { useState } from "react";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // State for mobile navbar visibility

  // Function to handle navigation and scrolling
  const handleNavigation = (path, sectionId, offset = -100) => {
    if (window.location.pathname === path) {
      // If already on the same page, scroll with an offset
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset =
          element.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        window.location.reload(); // 🔥 Forces a full page reload
      }, 0);
    }
    setIsMobileNavOpen(false); // Close the mobile navbar after navigation
  };

  // Function to toggle mobile navbar visibility
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Function to close mobile navbar
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div className="nav_container">
      <div className="nav_top">
        <div className="sx">
          <h2 className="couple_name">Daryl & Pat</h2>
        </div>
        <div className="sx MOBILE_SEC">
          {/* Hamburger Menu */}
          <div className="hamburger_menu" onClick={toggleMobileNav}>
            <img
              src="https://i.imgur.com/AdTSOis.png"
              alt="mobile menu hamburger"
              className="hmb"
            />
          </div>

          {/* Mobile Navbar */}
          <ul className={`mobile_ul ${isMobileNavOpen ? "open" : ""}`}>
            <div className="closer" onClick={closeMobileNav}>
              <img
                src="https://i.imgur.com/hBwPaR3.png"
                alt="close"
                className="close"
              />
            </div>
            {/* Close Button */}

            {/* Mobile Nav Links */}
            <li
              className="mobile_li"
              onClick={() => handleNavigation("/", "home")}
            >
              Home
            </li>
            <li
              className="mobile_li"
              onClick={() => handleNavigation("/details", "location")}
            >
         Details
            </li>
            <li
              className="mobile_li"
              onClick={() => handleNavigation("/guest-book", "")}
            >
              Guest Book
            </li>

            <li
              className="mobile_li"
              onClick={() => handleNavigation("/", "countdown", -150)}
            >
              Countdown
            </li>
            {/* <li
              className="mobile_li"
              onClick={() => handleNavigation("/", "playlist")}
            >
              Playlist
            </li> */}
            <li
              className="mobile_li"
              onClick={() => handleNavigation("/rsvp", "")}
            >
              RSVP
            </li>
          </ul>
        </div>
      </div>

      {/* Web Navbar */}
      <div className="nav_tops">
        <ul className="web_ul">
          <li className="web_li">
            <Link to="/">Home</Link>
          </li>
          <li className="web_li">
            <Link to="/details">Details</Link>
          </li>
          <li className="web_li">
            <Link to="/guest-book">Guest Book</Link>
          </li>

          <li
            className="web_li"
            onClick={() => handleNavigation("/", "countdown", -150)}
          >
            Countdown
          </li>
          {/* <li
            className="web_li"
            onClick={() => handleNavigation("/", "playlist")}
          >
            Playlist
          </li> */}
          <li className="web_li">
            <Link to="/rsvp">RSVP</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

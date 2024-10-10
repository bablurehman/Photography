import React, { useState, useEffect } from "react";
import "./Navbar.css";

import {Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTypewriter} from "react-simple-typewriter";

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [typeEffect] = useTypewriter({
    words: ["Famous Photography", "Awards Winning", "Indian Photography"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <>
      <nav className="navbar-container">
        <div className={`navbar ${sticky ? "sticky-nav" : ""}`}>
          <div className="logo">
            <h1>
              Pics<span>.</span>
            </h1>
          </div>
          <ul
            className={`nav-menu ${menu ? "nav-menu active-list" : ""}`}
            onClick={handleMenu}
          >
            <li
              
            >
              <NavLink className="nav-items" to="/" >
                Home
              </NavLink>
            </li>
            <li
            >
              <NavLink className="nav-items" to="/trending" >
                Trending
              </NavLink>
            </li>
            <li
             
            >
              <NavLink className="nav-items" to="/awards">
                Awards
              </NavLink>
            </li>
            <li
             
            >
              <NavLink className="nav-items" to="/explore">
                Explore
              </NavLink>
            </li>
            <li
          
            >
              <NavLink className="nav-items" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <div className="mobile">
            {menu === false ? (
              <FaBars className="mobile open" onClick={handleMenu} />
            ) : (
              <FaTimes className="mobile close" onClick={handleMenu} />
            )}
          </div>
        </div>

        <div className="bg-container">
          <h1 className="bg-logo">
            Pics<span>.</span>
          </h1>
          <h2 className="effect">
            'The <span>{typeEffect}</span>'
          </h2>
          
          <p>
            The Photography is the art of capturing light with a camera, and in the
            case of digital photography, usually via a digital sensor or film,
            to create an image. Here you found lots of photography or images
            that based on all time popular, awards winning, and top of the weeks,
            etc.
          </p>
          <Link to="/about">
            <button type="button" className="btn">
              About Us
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


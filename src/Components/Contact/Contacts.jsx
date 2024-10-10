import React from "react";

import { Link } from "react-router-dom";

import "./Contacts.css";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <h1 className="heading">Contact Us</h1>

        <section className="contact-container">
          <div className="contact-left">
            <h2>Follow Us</h2>

            <div className="contact-details">
              <div>
                <FaEnvelope className="icon" /> <p>pics@gmail.com</p>
              </div>

              <div>
                <FaPhoneVolume className="icon" /> <p>+91 8453853893</p>
              </div>

              <div>
                <FaLocationDot className="icon" />{" "}
                <p>Gurugram, Sec-9, Haryana</p>
              </div>
            </div>

            <ul>
              <li>
                <Link
                  href="https://www.instagram.com/bablurehman_/"
                  target="_blank"
                >
                  <FaInstagramSquare />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/bablurehman/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                {" "}
                <Link href="https://github.com/bablurehman" target="_blank">
                  <FaGithubSquare />
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-right">
            <label htmlFor="name">Full Name</label>
            <input type="name" id="name" placeholder="enter your name" required autoComplete="off"/>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="example@gamil.com" required autoComplete="off"/>

            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="enter your message"
              autoComplete="off"
            ></textarea>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        PORTFOLIO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/harshal-yallewar-41232a280/">
          <BsLinkedin className="icon" />
        </a>
        <a href="">
          <BsInstagram className="icon" />
        </a>
        <a href="">
          <BsTwitter className="icon" />
        </a>
      </div>
      <div className="footer_copyright">
        <small>Thank you for visiting my portfolio website.</small>
      </div>
    </footer>
  );
}

export default Footer
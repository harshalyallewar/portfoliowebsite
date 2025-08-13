import React from "react";
import ME from "../../assets/ME.webp";
import "./about.css";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 Year Learning</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>DSA</h5>
              <small>4 star coder</small>
            </article>
          </div>
          <p>
            Hello, my name is harshal yallewar and currently I am in 4th year
            and pursuing my btech from ycce in computer technology. I have
            experience in programming languages such as C, Java, JavaScript, and
            SQL. I have also been involved in competitive programming which
            helped me to improve my problem solving and coding skills.
            Additionally, I have experience in building web applications using
            the MERN stack (MongoDB, Express.js, React, and Node.js).I have 4*
            rating on hackerrank for java and problem solving and I also have
            solved the 400+ problems on leetcode.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

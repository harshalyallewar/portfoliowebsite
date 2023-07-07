import React from 'react'
import {MdOutlineMailOutline} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs/";
import { BsLinkedin } from "react-icons/bs/";
import './contact.css'

const Contact = () => {

  const subTheForm = (event)=>{
    event.preventDefault();
    console.log(
      event.target.name.value,'\n',
      event.target.email.value,'\n',
      event.target.message.value
    );
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icon" />
            <h4>Email</h4>
            <h5>harshalyallewar2@gmail.com</h5>
            <a href="mailto:harshalyallewar2@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Harshal Yallewar</h5>
            <a
              href="https://www.linkedin.com/in/harshal-yallewar-41232a280/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>Direct Inbox</h5>
            <a href="#contact">Send a message</a>
          </article>
        </div>

        <form action="" onSubmit={subTheForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact
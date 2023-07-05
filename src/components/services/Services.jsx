import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5 className="text-light">What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_icon" />
              <p>
                React: JavaScript library for building interactive user
                interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                HTML/CSS: Markup and styling languages for structuring and
                styling web content.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                JavaScript: Programming language used for frontend logic and
                interactivity.
              </p>
            </li>
            
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Backend development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_icon" />
              <p>
                Node.js: JavaScript runtime environment for server-side
                development.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                Express.js: Fast and minimalist web application framework for
                Node.js.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>MongoDB: Scalable NoSQL database for flexible data storage.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services
import React from 'react'
import './portfolio.css'
import jpg1 from '../../assets/jpg1.jpg'
import sheyhealthy from "../../assets/sheyhealthy.jpg";
import ecommdashboard from "../../assets/ecommdashboard.jpg";
import portfoliowebsite from "../../assets/portfoliowebsite.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={sheyhealthy} alt="" />
          </div>

          <h3>SheyHealthy</h3>
          <div className="portfolio_item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ecommdashboard} alt="" />
          </div>

          <h3>Ecomm-Dashboard</h3>
          <div className="portfolio_item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={portfoliowebsite} alt="" />
          </div>

          <h3>Portfolio site</h3>
          <div className="portfolio_item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio
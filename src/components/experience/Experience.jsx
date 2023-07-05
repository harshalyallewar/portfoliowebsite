import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="container_details-icon"/>
              <div className="skills">
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="container_details-icon"/>
              <div className="skills">
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="container_details-icon" />
              <div className="skills">
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="container_details-icon" />
              <div className="skills">
                <h4>Reactjs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="container_details-icon" />
              <div className="skills">
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="container_details-icon" />
              <div className="skills">
                <h4>ExpressJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="container_details-icon" />
              <div className="skills">
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="container_details-icon" />
              <div className="skills">
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience
import React from 'react'
import CTA from './CTA'
import ME from '../../assets/ME.webp'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <div className="namecontainer">
          <h1 className="myname">Harshal Yallewar</h1>
        </div>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          scroll down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
}

export default Header
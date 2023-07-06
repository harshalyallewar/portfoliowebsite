import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/harshal-yallewar-41232a280/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/harshalyallewar" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/harshal_yallewar/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials
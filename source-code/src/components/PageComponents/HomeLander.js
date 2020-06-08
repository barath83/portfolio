import React from 'react';

import './HomeLander.css';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const homeLander = props =>{

    return(
      <div className="lander-screen">
          <Typical className="main-text"
          steps={['', 1000, 'Barath Gopinath', 1500]}
          loop={1}
          wrapper="p"
          />
          <h3 className="sub-text">Student | Programmer | Developer</h3>
            <div className="contact-links">
              <a href="mailto:barathgopi1699@gmail.com">
                <FontAwesomeIcon className="contact-icon" icon={faEnvelope} color="#00ff41"/>
              </a>
              <a href="https://github.com/barath83">
                <FontAwesomeIcon className="contact-icon" icon={faGithub} color="#00ff41"/>
              </a>
              <a href="https://www.linkedin.com/in/barath-gopinath-38a74978/">
                <FontAwesomeIcon className="contact-icon" icon={faLinkedin} color="#00ff41"/>
              </a>
              <a href="https://www.instagram.com/barath_gopinath/">
                <FontAwesomeIcon className="contact-icon" icon={faInstagram} color="#00ff41"/>
              </a>
            </div>
      </div>
    );
}

export default homeLander;
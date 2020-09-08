import React, { useState, useEffect } from 'react';

import './HomeLander.css';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { useDencrypt } from "use-dencrypt-effect";

const values = ["Student","Programmer","App Developer","Web Developer"];

const HomeLander = props =>{

  const { result, dencrypt } = useDencrypt(8000);
  
  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, []);


    return(
      <div className="lander-screen">
          <h1 className="main-text">BARATH GOPINATH</h1>
          <h2 className="sub-text">{result}</h2>
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

export default HomeLander;
import React from 'react';
import './Skills.css';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid,faHtml5,faCss3Alt,faJs,faReact,faPython} from '@fortawesome/free-brands-svg-icons'; 
import { faFireAlt,} from '@fortawesome/free-solid-svg-icons';
import cpp from '../../assets/cpp.png';

const skills = props => {

      return (
           <div className="skill">
                <div className="skill-title">Skills</div>
               <Typical className="skill-text"
                        steps={['', 1000, 'Android Developer', 1500]}
                        loop={1}
                        wrapper="p"/>
                <div className="skills-icon">
                        <FontAwesomeIcon className="skill-icon" icon={faAndroid} color="#00ff41"/>
                </div> 
                <Typical className="skill-text"
                        steps={['', 1000, 'Firebase Web-App Services', 1500]}
                        loop={1}
                        wrapper="p"/>
                <div className="skills-icon">
                        <FontAwesomeIcon className="skill-icon" icon={faFireAlt} color="#00ff41"/>
                </div>
                <Typical className="skill-text"
                        steps={['', 1000, 'Web Developer', 1500]}
                        loop={1}
                        wrapper="p"/>
                <div className="skills-icon">
                        <FontAwesomeIcon className="skill-icon" icon={faHtml5} color="#00ff41"/>
                        <FontAwesomeIcon className="skill-icon" icon={faCss3Alt} color="#00ff41"/>
                        <FontAwesomeIcon className="skill-icon" icon={faJs} color="#00ff41"/>
                        <FontAwesomeIcon className="skill-icon" icon={faReact} color="#00ff41"/>
                </div> 
                <Typical className="skill-text"
                        steps={['', 1000, 'Data Structures and Algorithms', 1500]}
                        loop={1}
                        wrapper="p"/>
                <div className="skills-icon">
                        <img src={cpp} alt="cpp-icon"/>
                        <FontAwesomeIcon className="skill-icon" icon={faPython} color="#00ff41"/>
                </div>                            
           </div>
        );
};
    

export default skills;
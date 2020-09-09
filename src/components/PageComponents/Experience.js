import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTypingEffect from 'react-typing-effect';
import {faBriefcase,faLink,faUsers,faClock} from '@fortawesome/free-solid-svg-icons';


const experience = props => {

    return (
        <div className="exp-main">
            <div class="experience-title"><ReactTypingEffect text="E:\Barath\portfolio..> Experience" speed = "150" typingDelay = "1000" /></div>
            <div className="e-div">
            <div className="exp-container">

                <div className="exp-content">
                    <h3 class="exp-title">
                    <span class="exp-icon"><FontAwesomeIcon className="exp-icon"  icon={faBriefcase} color="#00ff41"/></span>
                     Lead Instructor & Brand Ambassador<br></br>Hatch School of Code</h3>
                     <h5 class="exp-time">July 2020 - Present<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                    <p class="exp-desc">Working as an instructor teaching the fundamentals of programming in Python and Web-development using HTML,CSS,JS to kids of age group 9-12.As a brand ambassador,I help Hatch roping in instructors who are better suited for the community. 
                    </p>
                </div>

                <div className="exp-content">
                    <h3 class="exp-title">
                    <span class="exp-icon"><FontAwesomeIcon className="exp-icon"  icon={faBriefcase} color="#00ff41"/></span>
                     Android Developer Intern<br></br>Lema Labs</h3>
                     <h5 class="exp-time">May 2019 - July 2019<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                    <p class="exp-desc">Developed two Android Applications from scratch for a community of aspiring students.Worked on developing a full stack application which is pretty useful for beginners learning IoT based projects. 
                    <a href="https://drive.google.com/file/d/1n35tOtU9QfF7PU6clfCCDoUt5ps_IPPy/view?usp=sharing"><span class="exp-icon"><FontAwesomeIcon className="exp-icon"  icon={faLink} color="#00ff41"/></span></a></p>
                </div>

                <div className="exp-content">
                    <h3 class="exp-title">
                    <span class="exp-icon"><FontAwesomeIcon className="exp-icon" icon={faBriefcase} color="#00ff41"/></span>
                    Android Developer,App Team<br></br>Interrupt 2K19</h3>
                    <h5 class="exp-time">Aug 2019 - Sep 2019<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                    <p class="exp-desc">
                    An Android application that has a handy UI with a retro video games based theme that displayed all the information that the participants might require while participating in events.Developed the skeletal structure of pages in the application and ensured the responsiveness of the application in multiple devices.
                    <a href="https://play.google.com/store/apps/details?id=com.interruptsvce.interrupt2k19&hl=en_IN"><span class="exp-icon"><FontAwesomeIcon className="exp-icon"  icon={faLink} color="#00ff41"/></span></a></p>
                </div>

                <div className="exp-content">
                    <h3 class="exp-title">
                    <span class="exp-icon"><FontAwesomeIcon className="exp-icon" icon={faUsers} color="#00ff41"/></span>
                    Vice President<br></br>Association of Computer Engineers,SVCE</h3>
                    <h5 class="exp-time">July 2020 - Present<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                    <p class="exp-desc">Spearheading the team in organising various events, actively involved in planning agenda that would meet student's requirements.</p>
                </div>

                <div className="exp-content">
                    <h3 class="exp-title">
                    <span class="exp-icon"><FontAwesomeIcon className="exp-icon" icon={faUsers} color="#00ff41"/></span>
                    Executive Member<br></br>Association of Computer Engineers,SVCE</h3>
                    <h5 class="exp-time">Aug 2019 - Jun 2020<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                    <p class="exp-desc">As an Executive member,I was held responsible for organizing various events through out the year including the flagship events Interrupt 2k19 and <a href="hackerrupt.in/index.html">Hackerrupt.</a><br></br>I played an active role in public relations,marketing team and put forth my hand in preparing creative content.</p>
                </div>

            </div>
            </div>
        </div>

    );
    
};

export default experience;
import React from 'react';
import './Work.css';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink,faClock,faTrophy} from '@fortawesome/free-solid-svg-icons';

const work = props => {

    return (
        <div className="work">
            
            <div className="projects">
                <div className="projects-title"><ReactTypingEffect text="E:\Barath\portfolio..> Projects" speed = "150" typingDelay = "1000"/></div>
                <div className="projects-list">
                    <ul>

                        //1.
                        <li><span className="pro-title">T20 Cricket Auction</span>
                        <a href="https://play.google.com/store/apps/details?id=com.t20auction.iplbidder"><span class="work-icon"><FontAwesomeIcon className="work-icon"  icon={faLink} color="#00ff41"/></span></a>
                        <br></br><h5 class="work-time">July 2020 - Present<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                        <br></br>An android application from scratch that provides a virtual IPL auction experience with multiplayer facility.This app is live in playstore with 3K+ installs.
                        </li> 

                        //2.
                        <li><span className="pro-title">Agro Bharat</span>
                        <a href="https://github.com/barath83/AgroBharat"><span class="work-icon"><FontAwesomeIcon className="work-icon"  icon={faLink} color="#00ff41"/></span></a>
                        <br></br><h5 class="work-time">Jan 2020 - Feb 2020<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                        <br></br>A forum for farmer's community where farmers educate and assist fellow farmers across the nation through their native language.
                        </li>  

                        //3.
                        <li><span className="pro-title">Voice Based Customer Grievance Redressal System</span>
                        <a href="https://github.com/barath83/Voice-based-Grievance-Redressal-System"><span class="work-icon"><FontAwesomeIcon className="work-icon"  icon={faLink} color="#00ff41"/></span></a>
                        <br></br><h5 class="work-time">Aug 2019 - Sep 2019<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                        <br></br>An automated software that records customer feedback,complaints and bank related queries via voice. The recorded grievances of every customer is been analyzed and a report of their problem is generated, which is redirected to the respective departments. The customers can keep track about status of their complaint through the application.
                        </li>


                        //4.
                        <li><span className="pro-title">Smart Garbage Disposal and Monitoring System</span>
                        <a href="https://github.com/barath83/Smart-Garbage-Disposal-and-Monitoring-System"><span class="work-icon"><FontAwesomeIcon className="work-icon"  icon={faLink} color="#00ff41"/></span></a>
                        <br></br><h5 class="work-time">Mar 2019 - Aug 2019<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                        <br></br>A project that primarily focuses to eliminate the hazards of garbage overflow.The system is primarily based on IoT that can alert the responsible officials to collect the garbage from the locations where overflowing dumpsters need immediate concern.
                        </li>

                        //5.
                        <li><span className="pro-title">Velaanmai</span>
                        <a href="https://github.com/barath83/Velaanmai"><span class="work-icon"><FontAwesomeIcon className="work-icon"  icon={faLink} color="#00ff41"/></span></a>
                        <br></br><h5 class="work-time">Jan 2019 - Mar 2019<span class="exp-icon-cal"><FontAwesomeIcon className="exp-icon-cal"  icon={faClock} color="#00ff41"/></span></h5>
                        <br></br>A dynamic system that is deployed using an IoT kit. The retrieved values from the cloud are explicated by a sophisticated machine learning model and provide insights to the farmers through an android application in making decision whether to sow a particular seed or not based upon the geography and the current scenario of the physical land.
                        </li>

                       
                    </ul>
                </div>
            </div>

            <div className="awards">
                <div className="awards-title"><ReactTypingEffect text="E:\Barath\portfolio\..> Awards" /></div>
                <div className="awards-list">
                    <ul>
                        <li><span class="awa-icon"><FontAwesomeIcon className="awa-icon"  icon={faTrophy} color="#00ff41"/></span>
                        7th Rank in Synd iNNOVATE, finals of National Level Hackathon by Syndicate Bank</li>

                        <li><span class="awa-icon"><FontAwesomeIcon className="awa-icon"  icon={faTrophy} color="#00ff41"/></span>
                        Won First place in Project Presentation in the International conference, PECTEAM-2019</li>

                        <li><span class="awa-icon"><FontAwesomeIcon className="awa-icon"  icon={faTrophy} color="#00ff41"/></span>
                        Winner - St.Peter's Hackathon 2019</li>

                        <li><span class="awa-icon"><FontAwesomeIcon className="awa-icon"  icon={faTrophy} color="#00ff41"/></span>
                        2nd Runner-Up HackHub 2019 by VIT Chennai's IEEE-Computer Society</li>

                        <li><span class="awa-icon"><FontAwesomeIcon className="awa-icon"  icon={faTrophy} color="#00ff41"/></span>
                        First Place - PALS case study contest</li>

                        <li><span class="awa-icon"><FontAwesomeIcon className="awa-icon"  icon={faTrophy} color="#00ff41"/></span>
                        Second Place - CodeLock, an intra college coding event</li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default work;
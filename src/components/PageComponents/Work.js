import React from 'react';
import './Work.css';
const work = props => {

    return (
        <div className="work">
            <div className="awards">
                <div className="awards-title">Awards</div>
                <div className="awards-list">
                    <ul>
                        <li>7th Rank in Synd iNNOVATE, finals of National Level Hackathon by Syndicate Bank</li>
                        <li>Won First place in Project Presentation in the International conference, PECTEAM-2019</li>
                        <li>Winner - St.Peter's Hackathon 2019</li>
                        <li>2nd Runner-Up HackHub 2019 by VIT Chennai's IEEE-Computer Society</li>
                        <li>First Place - PALS case study contest</li>
                    </ul>
                </div>
            </div>
            <div className="projects">
                <div className="projects-title">Projects</div>
                <div className="projects-list">
                    <ul>
                        <li><a href="https://github.com/barath83/Velaanmai"><span className="pro-title">Velaanmai</span></a><br></br><br></br>A dynamic system that is deployed using an IoT kit. The retrieved values from the cloud are explicated by a sophisticated machine learning model and provide insights to the farmers through an android application in making decision whether to sow a particular seed or not based upon the geography and the current scenario of the physical land.</li>
                        <li><a href="https://github.com/barath83/Voice-based-Grievance-Redressal-System"><span className="pro-title">Voice based Customer Grievance Redressal System</span></a><br></br><br></br>An automated software that records customer feedback,complaints and bank related queries via voice. The recorded grievances of every customer is been analyzed and a report of their problem is generated, which is redirected to the respective departments. The customers can keep track about status of their complaint through the application.</li>
                        <li><a href="https://github.com/barath83/Smart-Garbage-Disposal-and-Monitoring-System"><span className="pro-title">Smart Garbage Monitoring and Disposal System</span></a><br></br><br></br>A project that primarily focuses to eliminate the hazards of garbage overflow.The system is primarily based on IoT that can alert the responsible officials to collect the garbage from the locations where overflowing dumpsters need immediate concern.</li>
                        <li><a href="https://github.com/barath83/AgroBharat"><span className="pro-title">Agro Bharat</span></a><br></br><br></br>A forum for farmer's community where farmers educate and assist fellow farmers across the nation through their native language.</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default work;
import React from 'react';
import './Experience.css';


const experience = props => {

    return (
        <div className="exp-main">
            <div class="experience-title">Experience</div>
            <div className="e-div">
            <div className="exp-container">
                <div className="exp-content">
                    <h3 class="exp-title"><a href="https://drive.google.com/file/d/1n35tOtU9QfF7PU6clfCCDoUt5ps_IPPy/view?usp=sharing">Android Developer Intern<br></br>Lema Labs</a></h3>
                    <p class="exp-desc">Developed two Android Applications from scratch for a community of students who are passionately inspired by the emerging technologies at a start-up incubated by prestigious IIT Madras.</p>
                </div>
                <div className="exp-content">
                    <h3 class="exp-title"><a href="https://play.google.com/store/apps/details?id=com.interruptsvce.interrupt2k19&hl=en_IN">Android Developer<br></br>App Team Interrupt 2k19</a></h3>
                    <p class="exp-desc">As an Executive Member in Association of Computer Engineers,I was a part of the team that developed an android application for the National level technical symposium Interrupt 2k19.<br></br><br></br>
                    An Android application that has a handy UI with a retro video games based theme that displayed all the information that the participants might require while participating in events.</p>
                </div>
                <div className="exp-content">
                    <h3 class="exp-title">Executive Member<br></br>Association of Computer Engineers,SVCE</h3>
                    <p class="exp-desc">As a Executive member,I was held responsible for organizing various events through out the year including the flagship events Interrupt 2k19 and <a href="hackerrupt.in/index.html">Hackerrupt.</a><br></br><br></br> I played a active role in public relations,marketing team and put forth my hand in preparing creative content.</p>
                </div>
            </div>
            </div>
        </div>

    );
    
};

export default experience;
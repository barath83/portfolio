import React from 'react';

import './SideDrawer.css';


const sideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href ="/about">About Me</a></li>
                <li><a href ="/experience">Experience</a></li>
                <li><a href ="/skills">Skills</a></li>
                <li><a href ="/work">Work</a></li>
            </ul>
            
        </nav>
    );
    

};

export default sideDrawer;
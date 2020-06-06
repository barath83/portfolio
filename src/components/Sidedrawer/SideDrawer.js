import React from 'react';

import {Link} from 'react-router-dom';
import './SideDrawer.css';


const sideDrawer = (props) =>{

    

    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

    
   
    return (
        
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/" onClick={props.closed}>Home</Link></li>
                <li><Link to ="/about" onClick={props.closed}>About Me</Link></li>
                <li><Link to="/experience" onClick={props.closed}>Experience</Link></li>
                <li><Link to ="/skills" onClick={props.closed}>Skills</Link></li>
                <li><Link to ="/work" onClick={props.closed}>Work</Link></li>
            </ul>
            
        </nav>
    );
    

};

export default sideDrawer;



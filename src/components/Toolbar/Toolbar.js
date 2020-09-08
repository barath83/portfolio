import React from 'react';
import {Link} from 'react-router-dom'
import './Toolbar.css';




import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><Link to="/">Barath G</Link></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to ="/about">About Me</Link></li>
                    <li><Link to ="/experience">Experience</Link></li>
                    <li><Link to ="/skills">Skills</Link></li>
                    <li><Link to ="/work">Work</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar; 
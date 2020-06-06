import React from 'react';
import './Toolbar.css';




import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">Barath Gopinath</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href ="/about">About Me</a></li>
                    <li><a href ="/experience">Experience</a></li>
                    <li><a href ="/skills">Skills</a></li>
                    <li><a href ="/work">Work</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar; 
import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Sidedrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter ,Route} from 'react-router-dom';

import AboutMe from './components/PageComponents/AboutMe';
import Experience from './components/PageComponents/Experience';
import Work from './components/PageComponents/Work';
import HomeLander from './components/PageComponents/HomeLander';
import Skills from './components/PageComponents/Skills';

class App extends Component {

  state = {
    sideDrawerOpen : false
  };

  drawerToggleClickHandler = () => {
      this.setState((prevState)=>{
        return {sideDrawerOpen : !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  }

    render () {

        let backdrop;
        if(this.state.sideDrawerOpen) {
          
          backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return (
          <BrowserRouter>
          <div>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
              <main style={{marginTop : '60px',}}>
              </main>
          </div>
          <Route path="/portfolio/" exact component={HomeLander}/>
          <Route path="/portfolio/about" exact component={AboutMe}/>
          <Route path="/portfolio/experience" exact component={Experience}/>
          <Route path="/portfolio/skills" exact  component={Skills}/>
          <Route path="/portfolio/work"  exact component={Work}/>
          </BrowserRouter>
        );
  };
}

export default App;

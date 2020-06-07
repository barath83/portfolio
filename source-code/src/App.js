import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Sidedrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { HashRouter ,Route} from 'react-router-dom';

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
          <HashRouter>
          <div>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen} closed={this.backdropClickHandler}/>
            {backdrop}
              <main style={{marginTop : '60px',}}>
              </main>
          </div>
          <Route exact path="/" component={HomeLander}/>
          <Route path="/about"  component={AboutMe}/>
          <Route path="/experience"  component={Experience}/>
          <Route path="/skills"   component={Skills}/>
          <Route path="/work"   component={Work}/>
          </HashRouter>
        );
  };
}

export default App;

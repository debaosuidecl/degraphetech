import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout'
import Thanks from './components/Thanks/Thanks'
import {Route, Switch} from 'react-router-dom'

class App extends Component {

    state = {
        hasHoverClass: false,
        lastTouchTime : 0,
    };

    componentDidMount(){

    }
     watchForHover = ()=> {
        document.addEventListener('touchstart', this.updateLastTouchTime, true);
        document.addEventListener('touchstart', this.disableHover, true);
        document.addEventListener('mousemove', this.enableHover, true);
        this.enableHover();
    }
     enableHover = ()=>{
        // filter emulated events coming from touch events
         const container = document.body;
        if ((new Date() - this.state.lastTouchTime )< 500) return;
        if (this.state.hasHoverClass) return;

        container.className += ' hasHover';
        this.setState({hasHoverClass : true});
    }
     disableHover = ()=> {
        const container = document.body;
        if (!this.state.hasHoverClass) return;
        container.className = container.className.replace(' hasHover', '');
        this.setState({hasHoverClass : false});
    }

     updateLastTouchTime= ()=> {
        this.setState({lastTouchTime : new Date()});
    }


  render() {

      const routes = (
          <Switch>

            <Route path="/thanks" component={Thanks}/>
            <Route path="/" exact component={Layout}/>

          </Switch>

      );
    return (
      <div className="App">

          {routes}
      </div>
    );
  }
}

export default App;

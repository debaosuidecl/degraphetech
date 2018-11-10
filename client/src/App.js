import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout'
import {Route, Switch} from 'react-router-dom'

class App extends Component {

  render() {

      const routes = (
          <Switch>
            <Route path="/" component={Layout}/>
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

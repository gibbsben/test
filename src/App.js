import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import project from './components/pages/project';
import aboutUs from './components/pages/aboutUs';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
      
          <Route path='/project' component={project} />
          <Route path='/aboutUs' component={aboutUs} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;

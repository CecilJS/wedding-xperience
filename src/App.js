import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Event from './components/Event';
import Footer from './components/Footer'


function App() {
  return (
        <div>
            <Navbar/>
              
            <Switch>
              <Route exact path="/" component={Home}>
            
              </Route>
              <Route path="/event" component={Event}>
              
              </Route>
              <Route path="/contact" component={Contact}>
              
              </Route>

            </Switch>
            
            <Footer/>
        </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

 class Navbar extends Component {
    state = {
      showNavItems: false,
      changeToggler: false
      

    }

    //Event to toggle the navitems & to transform the toggler
    
      toggleEvent =()=>{

        this.setState({
          showNavItems: !this.state.showNavItems,
          changeToggler: !this.state.changeToggler
        });
      }

    // function to hide li items on click 

     hideListItems =(e)=> {
      if(e.target){

        this.setState({
          showNavItems: false,
          changeToggler: false
        })
      } 

     }

     // init animation lib
       componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }

      /**
       * If showNavItems !== null, change toggler state (setting it to a different style) ---achieved: 16.10.2020
       * forEach navItem that is clicked, set showNavItems to false
       * I might have to attch another event to the <ul> to achieve the above task
       * When showNavItems !== null, if any other part of the page is clicked, set showNavItems to null
       * 
       * set a click event on the ul
       * pass in the event object as a parameter
       * Use e.target as the condition to setState of showNavItems to false
       * 
       */


    render() {

      const {showNavItems, changeToggler} = this.state;
        return (
           
                <nav id="custom-nav"> 
                    <div className="nav-wrapper"> 
                    <Link to="/" onClick={this.hideListItems}>
              
                    </Link>
                       <Link to="/" id="brand" data-aos="zoom-in-right">JellaWeds</Link>
                   {showNavItems ? ( <ul id="nav-mobile" className="right" onClick={this.hideListItems}>
                       <li>
                          <Link to="/about" data-aos="zoom-in-left">About Us</Link>
                        </li>
                        <li>
                          <Link to="/gallery" data-aos="zoom-in-left">Our Gallery</Link>
                        </li>
                        <li>
                          <Link to="/event" data-aos="zoom-in-left">Program</Link>
                        </li>
                        <li>
                          <Link to="/contact" data-aos="zoom-in-left">Contact</Link>
                        </li>
                       </ul>) : null}
                    </div>
                   <span className="menu" onClick={this.toggleEvent}>Menu</span> 
                    <div className="right"  id={changeToggler ? "transformed-toggler" : "toggler"} onClick={this.toggleEvent}> 
                      <div>
                      </div>
                      <div>  
                      </div>
                    </div>
                </nav>
           
        )
    }
}

export default Navbar;
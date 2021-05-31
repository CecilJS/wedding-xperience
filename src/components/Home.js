import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import background from '../images/worldwide.gif';


const ourCore = ['story'];
const ourCoreAnimation = ['zoom-in-up', 'zoom-in', 'zoom-in-down', 'zoom-out-up'];
let count = 0;

class Home extends Component {

  state = {
    moreInfo: false,
    theCore: ourCore[0],
    theAnimation: ourCoreAnimation[0]
  }

  showMore = () => {

    this.setState({
      moreInfo: !this.state.moreInfo
    })
  }
      
    // Init animation library
    componentDidMount(){
        AOS.init({
          duration : 2000
        })

        setTimeout(()=>{
          this.updateCta();
          setInterval(this.updateCta,5000);
      }, 2500);
      
      }

      //Clear the funtion when unmounted

     
     

      // Function that updates state with either of the values of ourCore every 5 seconds
     updateCta = ()=> {
      count++;
      if(count >= ourCore.length){

        count = 0;
       }

      this.setState({
        theCore: ourCore[count],
        theAnimation: ourCoreAnimation[count]
       
      })

       }

     

    render() {

      // Destructuring for use inside JSX
      const {theCore} = this.state
      
        return (
            <section >
            <div className="container row" id="cta" >
              <div className="col l12 m12 s12" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat" }}>
                <p> Jeremiah Weds Angela</p>
                <h1>We have a <span id="ourCore">{theCore}</span></h1>
                <p id="intro">Welcome to Our Wedding Page</p>
                <button className="waves-effect waves-light btn" data-aos="fade-right" id="learn" ><a href="/about" alt="this is just to lead to more info"><i className="material-icons right"></i>Learn more</a></button>
               
              </div>
            </div>
            </section>
        )
    }
}



export default Home;
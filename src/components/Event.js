import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'materialize-css';
import { Card, Row, Col, Icon  } from 'react-materialize';
import background from '../images/bg-img.jpg';

 class Event extends Component {

     // Init animation library
     componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }

    render() {
        return (
            <div className="container"  data-aos="zoom-in-right" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat" }}>
             <section className="row">
                <h1>Event Page</h1>
               <section className="col l12 m12 s12">
                         <Row>
                              <Col
                                m={6}
                                s={12}
                              >
                                <Card
                                  actions={[
                                    <a key="1" href="./components/docs/PROGRAM.pdf" download>DOWNLOAD PROGRAM</a>
                                    
                                  ]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="black-text"
                                  title="DOWNLOAD THE PROGRAM"
                                >
                                 <p> A digital copy of the wedding program has been provided for your convinience. Please click the button below for your personal copy.</p>
                                </Card>
                              </Col>
                            </Row>
                 </section>   
                 <section classNameName="col l12 m12 s12">
                         <Row>
                              <Col m={6} s={12}>
                                <Card actions={[<a key="1" href="https://bit.ly/3uVKZCE" target="_blank" rel="noopener noreferrer">WhatsApp</a>]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="black-text"
                                  title="HOW TO CONTACT US"
                                  >
                                  <p>
                                  Do you have any queries? <br></br> We will be happy to help. <br></br> <br></br>Would you like to give the couple a gift? <br></br> We can be your courier.<br></br><br></br>
                                  Are you experiencing any technical issues connecting to zoom? <br></br><br></br>Please send all your queries across via WhatsApp using the button below.
                                  </p>
                                </Card>
                              </Col>
                            </Row>
                 </section> 
                </section>
            </div>
        )
    }
}


export default Event;
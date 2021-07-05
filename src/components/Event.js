import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'materialize-css';
import { Card, Row, Col, Icon  } from 'react-materialize';
import background from '../images/bg-img.jpg';
import program from '../docs/PROGRAM.pdf';

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
                 
                 <section classNameName="col l12 m12 s12">
                         <Row>
                              <Col m={6} s={12}>
                                <Card actions={[<a key="2" href={program} download>DOWNLOAD PROGRAM</a>]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="black-text"
                                  title="DOWNLOAD THE PROGRAM"
                                  >
                                  <p>Would you like to know the order of events?</p>
                                  <br></br>
                                  <p>
                                  A digital copy of the wedding program has been provided for your convenience. Please click the button below for your personal copy.
                                  </p>
                                </Card>
                              </Col>
                              <Col m={6} s={12}>
                                <Card actions={[<a key="1" href="https://docs.google.com/forms/d/e/1FAIpQLSc38dtfgH-5Y67EofroSWfhwe0UN2ISfRE_I49qbc_S5Uwi4Q/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">send comment</a>]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="black-text"
                                  title="WELL WISHES"
                                  >

                                  <p>
                                  It's been said that words have power. For this reason, we would love to hear your comments for us. 
                                  Kindly use the link below to send us some kind words.
                                  </p>
                                  <br></br>
                                  <p>Thank you in advance!</p>
                                  
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
                              <Col m={6} s={12}>
                                <Card actions={[<a key="1" href="https://bit.ly/3uVKZCE" target="_blank" rel="noopener noreferrer">send image</a>]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="black-text"
                                  title="SHARE A PICTURE"
                                  >
                                  <p>
                                  Thank you so much for joining us on this very special day. Words alone cannot express how grateful we are that you came, 
                                  albeit virtually and contributed to the joy of the occasion.
                                  </p> <br></br>

                                  <p>
                                  As you know, memories are timeless treasures of the heart. Therefore, we would like you to use this link to share a picture of yourself with us for our album.
                                  </p>
                                  <br></br>
                                  <p>Thank you once again!</p>
                                  
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
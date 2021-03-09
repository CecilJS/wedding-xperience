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
                                    <a key="1" href="#">This is a link</a>
                                    
                                  ]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="red-text"
                                  title="HOW TO CONTACT US"
                                >
                                  I am a very simple card.
                                </Card>
                              </Col>
                            </Row>
                 </section>   
                 <section classNameName="col l12 m12 s12">
                         <Row>
                              <Col
                                m={6}
                                s={12}
                              >
                                <Card
                                  actions={[
                                    <a key="1" href="#">This is a link</a>
                                    
                                  ]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="red-text"
                                  title="HOW TO CONTACT US"
                                >
                                  I am a very simple card.
                                </Card>
                              </Col>
                            </Row>
                 </section> 
                 <section classNameName="col l12 m12 s12">
                         <Row>
                              <Col
                                m={6}
                                s={12}
                              >
                                <Card
                                  actions={[
                                    <a key="1" href="#">This is a link</a>
                                    
                                  ]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="red-text"
                                  title="HOW TO CONTACT US"
                                >
                                  I am a very simple card.
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
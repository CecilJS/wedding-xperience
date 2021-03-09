import React, { Component } from 'react';
import './css/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Row, Col, Icon  } from 'react-materialize';
import background from '../images/bg-img.jpg';



 class Contact extends Component {

    // Init animation library
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }


    render() {
        return (
        <section className="container" id="contact-page" data-aos="zoom-in-right" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat" }}>
        <section className="row">
        <section className="col l12 m12 s12">
            <h1>How can we <span id="contact-heading"><br/>help?</span></h1>
                            
                            <Row>
                              <Col
                                m={6}
                                s={12}
                              >
                                <Card
                                  actions={[
                                    <a key="1" href="#">email</a>
                                    
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
            <section className="col l12 m12 s12">
                         <Row>
                              <Col
                                m={6}
                                s={12}
                              >
                                <Card
                                  actions={[
                                    <a key="1" href="#">whatsapp</a>
                                    
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
        </section>
        )
    }
}

export default Contact;
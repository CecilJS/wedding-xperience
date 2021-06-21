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
        <section className="container" data-aos="zoom-in-right" style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat" }}>
        <section className="row">
        <section className="col l12 m12 s12">
            <h1>How can we <span id="contact-heading"><br/>help?</span></h1>
                            
                            <Row>
                              <Col
                                m={6}
                                s={12}
                              >
                                <Card actions={[<a key="1" href="https://bit.ly/3uVKZCE" target="_blank" rel="noopener noreferrer">WhatsApp</a>]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="black-text"
                                  title="HOW TO CONTACT US"
                                  >
                                  <p>
                                  We are happy that you have decided to join us on our big day. If you have any queries at all that we can help with, please do not hesitate to reach out. 
                                  Use the button below to contact us via WhatsApp and we will be in touch with you shortly, thank you.
                                  </p>
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
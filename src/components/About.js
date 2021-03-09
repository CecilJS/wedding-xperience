import React, { Component } from 'react';
import './css/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'materialize-css';
import { Card, Row, Col, Icon, MediaBox} from 'react-materialize';
import invite from '../images/love.jpg';
import background from '../images/bg-img.jpg';


 class About extends Component {

    // Init animation library
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }


    render() {
        return (
        <section className="container" id="contact-page" data-aos="zoom-in-right">
        <section className="row">
        <h1>Our story</h1>
        <section className="col l7 m12 s12" style={{ backgroundImage: `url(${background})` }}>
           
                              <Row>
                              <Col
                                m={6}
                                s={12}
                                >
                                <Card
                                  actions={[
                                    <a key="1" href="/event">view program</a>
                                    
                                  ]}
                                  className="white darken-1"
                                  closeIcon={<Icon>close</Icon>}
                                  revealIcon={<Icon>more_vert</Icon>}
                                  textClassName="black-text"
                                  title="THIS IS OUR STORY"
                                  >
                                  Angela and Jeremiah first met about three years ago while she was on her trip to Ghana. 
                                  Angela had wished to visit Bethel with her family and Jeremiah happened to be in charge of planning their tour.
                                  <br/>
                                  <br/>
                                  Never could they have imagined how that encounter would change their lives forever. 
                                  It started with a simple lunch and followed up with a memorable dinner a week after…
                                  We kept in touch and as time passed we started noticing how much we enjoyed each other’s company and admired each other’s qualities.
                                  <br/>
                                  <br/>
                                  We became very good friends, and the love grew quickly. A year and a half later we got engaged and have been eagerly waiting for our big day.  
                                  We are so looking forward to starting this new chapter together, and can’t wait to celebrate with you.
                                </Card>
                              </Col>
                            </Row>
              

            
            </section> 
            <section className="col l5 m12 s12">

            <MediaBox
                    id="MediaBox_7"
                    options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200
                    }}
                    >
                    <img
                        alt=""
                        src={invite}
                        width="350"
                    />
                    
                    
                </MediaBox>
                
            </section>     
          </section>         
        </section>
        )
    }
}

export default About;
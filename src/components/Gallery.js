import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'materialize-css';
import { MediaBox } from 'react-materialize';
import background from '../images/bg-img.jpg';
import peace from '../images/peace.jpg';
import engaged from '../images/engaged.JPG';
import joy from '../images/joy.JPG';
import happiness from '../images/happiness.jpg';
import ring from '../images/ring.jpg';
import calmness from '../images/calmness.JPG';

 class Gallery extends Component {

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
                <h1>Our Gallery</h1>
               <section className="col l4 m4 s12">
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
                        src={joy}
                        width="350"
                    />
                    
                    
                </MediaBox>
                
                 </section>
                 <section className="col l4 m4 s12">
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
                        src={ring}
                        width="350"
                    />
                    
                    
                </MediaBox>
                
                 </section> 
                 <section className="col l4 m4 s12">
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
                        src={happiness}
                        width="350"
                    />
                    
                    
                </MediaBox>
                
                 </section>     
                </section>
                <section className="row">
               <section className="col l4 m4 s12">
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
                        src={peace}
                        width="350"
                    />
                    
                    
                </MediaBox>
                
                 </section>
                 <section className="col l4 m4 s12">
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
                        src={engaged}
                        width="350"
                    />
                    
                    
                </MediaBox>
                
                 </section> 
                 <section className="col l4 m4 s12">
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
                        src={calmness}
                        width="350"
                    />
                    
                    
                </MediaBox>
                
                 </section>     
                </section>
            </div>
        )
    }
}


export default Gallery;
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import mypic from '../../Assets/kiran1111.png'
import { db } from "../../firebase";
import Particle from "../Particle";
import Home2 from "./Home2";
import Cookies from 'js-cookie'
import SocialMediaIcons from "../SocialMedia/SocialMediaIcons";

function Home() {

  useEffect(()=> {
      if(!Cookies.get("visitors")){
        db.collection("visitorCounter").doc("one").get().then(snap=>{
            console.log(snap.data().count,"========================")
            var cnt = snap.data().count
            Cookies.set("visitors",cnt+1)
                db.collection("visitorCounter").doc("one").update({
                    count: cnt + 1
                }).then(()=>{
                    console.log("Count Increased")
                }).catch((err)=>{
                    console.log(err)
                })
        }).catch(err=>{
            console.log(err)
        })
    }
      
  },[])
  
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Kiran N Chavan</strong>
              </h1>
              <SocialMediaIcons/>
            </Col>

            <Col md={5} style={{ paddingBottom: 10, borderRadius:"50%", background:"black"}}>
              <img src={mypic} alt="home pic" className="img-fluid" style={{borderRadius:"50%", background:"white"}} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

import React from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavbarView } from "../../ui/Navbar";



const SplashScreen = () => {
 

  return (
    <div className="splashContainer">
      <NavbarView />
      <hr />
      <div className="upperView">
        <div className="getStarted">
          <h1>
            Welcome To <br /> My<span>Jobs</span>
          </h1>
          <button className="blueBtn">Get Started</button>
        </div>

        <img
          src="/assets/SplashImage.png"
          className="imageContainer"
          height={"400px"}
          width="580px"
          alt="splash img"
        />
         </div>
        <div className="cardsContainer">
          <h4>Why Us?</h4>
          <div className="childCardContainer">
            <Row>
              <Col>
                <Card style={{ width: "18rem" }} className="cardsView">
                  <Card.Body>
                    <Card.Title>Get More Visibility</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus tincidunt, ex ac viverra vulputate, elit diam
                      maximus metus, in pulvinar erat urna id eros.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }} className="cardsView">
                  <Card.Body>
                    <Card.Title>Get More Visibility</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus tincidunt, ex ac viverra vulputate, elit diam
                      maximus metus, in pulvinar erat urna id eros.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }} className="cardsView">
                  <Card.Body>
                    <Card.Title>Get More Visibility</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus tincidunt, ex ac viverra vulputate, elit diam
                      maximus metus, in pulvinar erat urna id eros.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            </div>
        </div>
            

            <div className="lowerView">
            <h2>Companies who trust us</h2>
              <div className="childLowerView">
            <img src="/assets/solaytic.png"  className="logos" alt="logo img"/>
            <img src="/assets/ideaa.png"  className="logos" alt="logo img"/>
            <img src="/assets/kanba.png"  className="logos" alt="logo img"/>
            <img src="/assets/lighting.png"  className="logos" alt="logo img"/>
            </div>
            <div className="childLowerView">
            <img src="/assets/liva.png"  className="logos" alt="logo img"/>
            <img src="/assets/goldline.png"  className="logos" alt="logo img"/>
            <img src="/assets/ztos.png"  className="logos" alt="logo img"/>
            </div>
            </div>
      
     
    </div>
  );
};

export default SplashScreen;

import React, { useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

 import backs from "../assets/images/22.png";

const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    // Optionally, you can reset the subscription state after a few seconds
    setTimeout(() => setIsSubscribed(false), 3000); // hides after 3 seconds
  };

  const backgroundStyle = {
    backgroundImage: `url(${backs})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    
   
  };

  return (
    <section className="newsletter" style={backgroundStyle}>
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get valuable travel tips and updates.</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn" onClick={handleSubscribe}>
                  Subscribe
                </button>
              </div>

              <p>
                Get the latest travel tips, destination highlights, and exclusive deals. Your adventure awaits—stay informed and inspired!
              </p>
            </div>
          </Col>

            <Col lg="6">
              <div className="newsletter__img">
                <img src={maleTourist} alt="Male tourist holding a map" />
              </div>
            </Col>
        </Row>

        {/* Subscription popup notification */}
        {isSubscribed && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
            You are subscribed!
          </div>
        )}
      </Container>
    </section>
  );
};

export default Newsletter;

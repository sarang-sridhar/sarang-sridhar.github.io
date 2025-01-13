import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarang Sridhar </span>
            from <span className="purple"> Chennai, India.</span>
            <br />I am a Masters Student in computer science at the university of Pennsylvania. 
            <br />
            <br />
          </p>
          

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

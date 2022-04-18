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
            <br />I am a Sophomore pursuing Computer Science and Engineering in BITS, Pilani.
            <br />
            <br />
            Apart from coding, some other activities that I love to do are 
          </p>
          <ul>
            
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Sci-Fi
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

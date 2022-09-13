import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title} {props.flag==1?<><br></br><a href={props.toBelink}>{props.toBe}</a></>:<></>}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {!props.flag==2 || !props.flag || props.flag==1?props.description:<>
          {props.before}
          <a href={props.toBelink}>{props.toBe}</a>
          {props.after}
          </>}
         
        </Card.Text>
        {props.link!='false'?<Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>:<></>}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

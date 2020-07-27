import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Thumbnail(props) {
  const link1=props.link;
  if (link1=="no"){
    return(
    <div className="project">
        <a href={props.web} target="_blank">
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="content">
          <div className="project-title">{props.title}</div>
          <div className="project-description">{props.description}</div>
        </div>
        </a>
    </div>
    )
  }
  else{
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="content">
          <div className="project-title">{props.title}</div>
          <div className="project-description">{props.description}</div>
        </div>
      </Link>
    </div>
  )
  }
}

export default Thumbnail;

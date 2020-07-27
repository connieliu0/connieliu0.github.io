import React from 'react';
import './App.css';
function ThumbnailCode(props) {
    return(
    <div className="project">
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="buttons">
        <a href={props.code} target="_blank">Github</a>
        <a href={props.live} target="_blank">View Live</a>
        <div className="codecontent">
          <div className="project-title">{props.title}</div>
          <div className="project-description">{props.description}</div>
        </div>
        </div>
    </div>
    )
 
}

export default ThumbnailCode;

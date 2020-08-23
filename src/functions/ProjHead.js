import React from 'react';
import '../App.css';
function ProjHead(props) {
  return (
    <div className="center1">
      {(props.image.length!==0)&&<img src={props.image} alt={props.title}/>}
      <div className = "projheader">
          <div className="col">
          <h1>{props.title}</h1>
          <h2 className="small"><em>{props.description}</em></h2>
          </div>
          <div className="row">
          <div className="col">
            <h2>Timeline</h2>
            <h3>{props.timeline}</h3>
          </div>
          <div className="col">
            <h2>{props.role}</h2>
            <h3>{props.team}</h3>
          </div>
          <div className="col">
            <h2>Tools</h2>
           <h3>{props.tools} </h3>
          </div>
          </div>
      </div>
    </div>
  )
}
export default ProjHead;

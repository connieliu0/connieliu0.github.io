import React from 'react';
import '../App.css';
function ProjHead(props) {
  return (
    <div>
      <div className = "header">
        <div className="row">
          <h1>{props.title}<em>{props.description}</em></h1>
          <img src={props.image} alt={props.title}/>
          </div>
          <div class="col">
    
          </div>
          <p>{props.blurb}</p>
      </div>
    </div>
  )
}
export default ProjHead;

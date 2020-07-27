import React from 'react';
import '../App.css';
function Bottom(props) {
  return (
    <div className="projfooter">
     <div className="left">
    <a href="https://connieliu0.github.io/#/">
     <h2>← Back</h2>
     <h3>View All Projects</h3>
     </a>
     </div>
     <div className="right">
     <a href={props.next}>
    <h2>Next Project →</h2>
    <h3>{props.nextproject}</h3>
    </a>
     </div>
    </div>
  )
}
export default Bottom;
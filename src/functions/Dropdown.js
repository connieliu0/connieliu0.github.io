import React, { useState } from 'react';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
function Dropdown(props) {
  const [show, setShow] = useState(false);
  const nothing= '';
  return (
    <div className="dropdwn">
    <div className="listtext">{props.title}</div>
      <button onClick={() => setShow(show => !show)}>
        {show ? "-" : "+"}
      </button>
      {show ? (
      <SlideDown className={'my-dropdown-slidedown'}>
        <div className="listtext">{props.lists}</div>
      </SlideDown>
    ): (
      <SlideDown className={'my-dropdown-slidedown'}>
      <div className="listtext1">{nothing}</div>
      </SlideDown>
    )}
    </div>
  );
};

export default Dropdown;

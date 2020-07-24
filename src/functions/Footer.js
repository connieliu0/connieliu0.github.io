import React from 'react';
import '../App.css';

function Footer(props) {
  return (
    <div className="footer">
      <p><a href="https://instagram.com/conliuart">instagram </a>/<a href="https://www.linkedin.com/in/connie-liu-617b8b148/"> linkedin </a>/<a href="https://twitter.com/conliuart"> twitter</a></p>
      <p>this site was made from scratch with react.js</p>
      <div className="nochange">
      <p>to see sources and various npms that helped me click <a href="https://github.com/connieliu0/connieliu0.github.io/blob/ef92012344fc9c0e0a278b5206c66294231d262f/README.md">here</a></p>
      </div>
    </div>
  )
}

export default Footer;

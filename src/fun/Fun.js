import React from 'react';
import Thumbnail from '../Thumbnail.js';
import Footer from '../functions/Footer.js';
import { Link } from 'react-router-dom';
import '../App.css';
import '../home.css';

function Code(props) {
  return (
    <div>
    <div className="bodytextwide">
    <div className="titledesc">
    </div>
      <hr/><h2>Code and Web Dev Projects</h2>
      <p>Although I'm primarily a designer, I love exploring front-end and making things with cool people!</p>
      <div className="row">
      <Thumbnail
          link="no"
          web="https://github.com/connieliu0/p5.js-showcase"
          image="gsoc.png"
          title="Google Summer of Code Internship"
          description="React.js/i18next"
        />

        <Thumbnail
          link="no"
          web="http://formsofbelonging.com/about.html"
          image="images/medium.png"
          title="Medium Forms of Belonging Website"
          description="Figma/p5.js/HTML&CSS"
        />

        <Thumbnail
          link="/creativecode"
          image= "images/code.png"
          title="Creative Coding and Digital Media"
          description="Unity/p5.js/Raspberry Pi"
        />
      </div>
    </div>
    <Footer
    />
  </div>
  )
}
export default Code;

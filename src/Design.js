import React from 'react';
import Typewriter from 'typewriter-effect';
import Thumbnail from './Thumbnail.js';
import Footer from './functions/Footer.js';
import { Link } from 'react-router-dom';
import './App.css';
import './home.css';

const tagline = <Typewriter
  options={{
    strings: ['a designer', 'an artist', 'an aspiring creative technologist', 'interested in social impact'],
    autoStart: true,
    loop: true,
}}
/>

function Design(props) {
  return (
    <div>
    <div className="bodytextwide">
    <div className="titledesc">
      <p>Hi there! My name's Connie and I'm <span className="typewriter">{tagline}</span></p>
      <p>Currently <a href="https://medium.com/processing-foundation/announcing-processing-foundation-google-summer-of-code-2020-af39dbf41d25" target="_blank">@Google Summer of Code</a> and <a href="https://www.abillionveg.com/" target="_blank">@abillionveg</a>, Designer of <a href="https://devpost.com/software/ponder-tiw5y3" target="_blank">Ponder</a></p>
    </div>
      <hr/>
      <div className="center"><h2>Design Projects</h2></div>
      <div className="row">
      <Thumbnail
          link="/twitter"
          image= "images/twitter.png"
          title="Twitter Groups Concept"
          description="UX Case Study"
        />
       <Thumbnail
          link="/arcade"
          image= "images/arcade.png"
          title="Arcade App Design"
          description="Adobe 48 hour Creative Jam"
        />
        <Thumbnail
          link="/Auxilio"
          image= "images/auxilio.png"
          title="Auxilio Web App"
          description="BigRed//Hacks Beginner's Prize"
        />
        <Thumbnail
          link="/habitat"
          image="images/habitat.png"
          title="Habitat for Humanity"
          description="Product Design"
        />
        <Thumbnail
          link="/visual"
          image="images/VisualDesign.png"
          title="Visual and Graphic Design"
          description="Adobe Photoshop/Paint Tool Sai"
        />
        <Thumbnail
          web="https://medium.com/@connie_liu/heart-tube-heart-designing-a-connector-for-storytelling-d49b1767a0b3"
          link="no"
          image="images/experiment.png"
          title="Heart-Tube-Heart"
          description="Experimental Design"
        />
      </div>
    </div>
    <Footer
    />
  </div>
  )
}

export default Design;

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
      <p>Currently <a href="https://summerofcode.withgoogle.com/">@Google Summer of Code</a> and <a href="https://www.abillionveg.com/">@abillionveg</a>, Designer of <a href="https://devpost.com/software/ponder-tiw5y3">Ponder</a></p>
    </div>
      <hr/><h2>Design Projects</h2>
      <div className="row">
      <Thumbnail
          web="https://medium.com/@connie_liu/finding-your-own-nests-a-twitter-case-study-970d2aa4efd8?sk=a5b747a828806ab667d438b79978d783"
          link="no"
          image= "images/twitter.png"
          title="Twitter Groups Concept"
          description="UX Case Study"
        />

        <Thumbnail
          link="/Auxilio"
          image= "images/auxilio.png"
          title="Auxilio Web App"
          description="BigRed//Hacks Beginner's Prize"
        />
        <Thumbnail
          web="https://xd.adobe.com/view/bf82c9a1-3633-495a-7c74-925d62caa59f-c9b3/"
          link="no"
          image= "images/arcade.png"
          title="Arcade App (details coming soon)"
          description="Adobe 48 hour Creative Jam"
        />
        <Thumbnail
          web="https://medium.com/@connie_liu/heart-tube-heart-designing-a-connector-for-storytelling-d49b1767a0b3"
          link="no"
          image="images/experiment.png"
          title="Heart-Tube-Heart"
          description="Experimental Design"
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

      </div>
    </div>
    <Footer
    />
  </div>
  )
}

export default Design;

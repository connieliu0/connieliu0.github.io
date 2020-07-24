import './App.css';
import Footer from './Footer.js';
import ProjHead from "./ProjHead.js";
import ReactPlayer from 'react-player';
import React from 'react';

function WIP(props) {
  return(
    <div>
      <ProjHead
        title="Work in Progress"
        details="Case Studies and Write Ups Coming Soon!"
      />
      <div className="projmargins">
        <div className="row">
        <div className="col">
            <img src="wip/habitat.png" img alt="habitat pic"/>
            <img src="wip/cover.png" img alt="cover fb pic"/>
        </div>
          <div className="col">
            <h2>Hack4Impact</h2>
            <p>As a designer for Hack4Impact I'm currently working on the product design of our Habitat4Humanity Tompkin's County project as well as helping out with the front-end. For this project we're creating a web app to streamline their volunteer signup system! <strong>More details available on request!</strong></p>
            <p>I'm also working on expanding the club's reach and size with the rest of the team by developing marketing materials and a branding guideline.</p>
          </div>
      </div>
        <div className="row">
        <div className="col">
          <h2>Twitter Case Study</h2>
          <p>Currently creating a UX case study ideating a new feature on Twitter based off of user research with prototyping and user testing done in Figma. Full case-study will be done and showcased sometime in May! <strong>More details available on request!</strong></p>
        </div>
        <div className="col">
          <img src="wip/twitterflows.png" img alt="twitter pic"/>
        </div>
        </div>
        <div className="row">
        <div className="col">
            <img src="wip/passiton.png" img alt="pass it on"/>
        </div>
          <div className="col">
            <h2>Ludum Dare 46: Pass It On</h2>
            <p>Created a game in a team of five for Ludus Dare 46 (a game creation competition)! I was in charge of the game's aesthetic and prototyped the look, feel, and brand on Figma. View the entry <a href= "https://ldjam.com/events/ludum-dare/46/pass-it-on">here</a> and play it <a href="https://pio.garykim.dev/">here</a>! The game currently has been played by over a hundred people worldwide.</p>
          </div>
      </div>
        <div className="row">
        <div className="col">
            <h2>BigRedHacks</h2>
            <p>Currently designing the website, branding and promotional materials for Cornell's largest student-run hackathon! The accompanying image is a cover I made for the prospectus to gain sponsorship and it was made with Photoshop.</p>
          </div>
          <div className="col">
            <img src="wip/prospectus.png" img alt="prospectus pic"/>
          </div>
        </div>
      </div>
      <Footer
      />
    </div>
  )
}
export default WIP;

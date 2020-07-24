import '../App.css';
import Footer from '../functions/Footer.js';
import ProjHead from "../functions/ProjHead.js";
import ReactPlayer from 'react-player'
import React from 'react';

function Medium(props) {
  return(
    <div>
      <div className="bodytext">
      <ProjHead
        title="Forms of Belonging"
        details= "Medium Design Collective Showcase Website | Spring 2020 | Figma/p5.js/HTML & CSS"
      />
      <div className="projmargins">
      <p>Worked in a team of six at Cornell's 24 Hour Makeathon to prototype a device to automate card dealing. Team won the Rookie Award (best device made by an entirely beginner team).</p>
      </div>
      <div className="center">
      <img src="makeathon.png" alt="makethon"/>
      </div>
      </div>
      <Footer
      />
    </div>
  )
}
export default Medium;

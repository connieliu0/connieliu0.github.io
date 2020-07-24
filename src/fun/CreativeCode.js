import '../App.css';
import Footer from '../functions/Footer.js';
import ProjHead from "../functions/ProjHead.js";
import ReactPlayer from 'react-player'
import React from 'react';

function CreativeCode(props) {
  return(
    <div>
      <div className="bodytext">
      <hr/>
      <ProjHead
        title="Cornell Makeathon"
        details= "Rookie Award | 2020 | Raspberry Pi"
      />
      <div className="projmargins">
      <p>Worked in a team of six at Cornell's 24 Hour Makeathon to prototype a device to automate card dealing. Team won the Rookie Award (best device made by an entirely beginner team).</p>
      </div>
      <div className="center">
      <img src="makeathon.png" alt="makethon"/>
      </div>
      <ProjHead
        title="Various Digital Media"
        details= "Just for Fun | 2019 | p5.js/Unity/Adobe Flash"
      />
      <div className="projmargins">
      <p>Below is a video demonstrating a project I made based off of the Unity Roll a Ball tutorial (figures modeled by me in Blender) some p5.js experiments, and some Flash animations. <a href="https://editor.p5js.org/connieliu/sketches/rJVVfTjhQ">Link to "wave effect" p5.js project</a></p>
      <ReactPlayer url= "https://youtu.be/9YH1rhhUjkY" playing/>
      <p><a href="https://editor.p5js.org/connieliu/present/OlNZ47EHu">Link to a project I used the p5.js speech library with!</a></p>
      <div className="center1">
      <img src="p52.png" alt="p5js experiment 2"/>
      </div>
      </div>
      </div>
      <Footer
      />
    </div>
  )
}
export default CreativeCode;

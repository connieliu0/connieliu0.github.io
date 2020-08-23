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
            title="Automatic Card Dispenser"
            description="winner of the Rookie Award at Cornell's Makeathon"
            image="makeathon.png"
            timeline="24 Hour Makeathon"
            role="With"
            team="1 business major, 1 pre-med, 3 engineers"
            tools="Python, Laser Cutting, Raspberry Pi"
          />
      <div className="projmargins">
      <p>Worked in a team of six at Cornell's 24 Hour Makeathon to prototype a device to automate card dealing. Team won the Rookie Award (best device made by an entirely beginner team).</p>
      </div>
      <ProjHead
            title="Assorted Digial Media Projects"
            description="done for fun"
            image=""
            timeline="2019"
            role="Role"
            team="Coder/3D Modeler/Animator"
            tools="p5.js, Unity, Adobe Flash"
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

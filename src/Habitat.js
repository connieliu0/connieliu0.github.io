import './App.css';
import Footer from './functions/Footer.js';
import ProjHead from "./functions/ProjHead.js";
import React from 'react';

function Habitat(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
          <ProjHead
            title="Habitat for Humanity Volunteer Portal"
            details="Web App | Spring 2020 | Figma/HTML & CSS"
          />
        <div className="projmargins">
        <div className="center">
          <img src="habitat/habitat.png" img alt="habitat pic"/>
        </div>
        <h2>Overview</h2>
        <p>Habitat for Humanity Tompkins County is a non-profit group in the Ithaca Area that builds homes for those in need. As part of Cornell's Hack4Impact chapter I was in charge of scoping out the details and designing a volunteer portal to streamline the process.</p>
        <h2>The Problem</h2>
        <p>Currently the Habitat for Humanity Tompkins County chapter streamlines the volunteer sign up process through email and an excel document which can lead to many errors. We were tasked to create a portal for volunteers to sign up for shifts and to upload forms to help make the process easier and reduce the amount of work needed by the one volunteer administrator.</p>
        <h2>My Role</h2>
        <p>I was the sole designer on the team and created low-fidelity and high-fidelity mockups. I also communicated with the client on product specifications and created a workshop with the front-end team to explain HTML and CSS.</p>
        <div className="center">
        <img src="habitat/image.png" img alt="habitat pic"/>
        </div>
        <h2>Final Product</h2>
        <p>Coming soon :)</p>
        <h2>Reflection</h2>
       <p>Coming soon :)</p>
        </div>
        </div>
      <Footer
      />
    </div>
  )
}
export default Habitat;

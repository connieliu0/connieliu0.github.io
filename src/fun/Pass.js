import '../App.css';
import Footer from '../functions/Footer.js';
import ProjHead from "../functions/ProjHead.js";
import React from 'react';

function Pass(props) {
  return(
    <div>
      <div className="bodytext">
      <hr/>
      <ProjHead
        title="Pass it On"
        details= "Ludum Dare 46 #11 in Innovation | Spring 2020 | Figma/Photoshop"
      />
      <div className="projmargins">
          <h2>About</h2>
        <p>Ludum Dare is an online game jam open to anyone from all over the world! We won <strong>11th out of 4,959 games</strong> and had over 150 users play our game.</p>
        <p>See our gamepage <a href="https://ldjam.com/events/ludum-dare/46/pass-it-on">here</a>. Play the game <a href="https://pio.garykim.dev/#/">here</a>!</p>
        <h2>My Role</h2>
      <p>Worked in a team with four other developers as the only designer to create the brand and look of the game.</p>
      </div>
      <div className="center">
      <img src="passiton.png" alt="pass it on"/>
      </div>
      </div>
      <Footer
      />
    </div>
  )
}
export default Pass;

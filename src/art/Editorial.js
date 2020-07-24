import '../App.css';
import Footer from '../functions/Footer.js';
import ProjHead from "../functions/ProjHead.js";
import React from 'react';

function Editorial(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
        <ProjHead
            title="Editorial-esque Works"
            details="Editorial | 2017-18 | Paint Tool Sai"
          />
        <div className="center">
          <img src="dig/whatgoes.jpg" alt = "what goes around comes around"/>
          <p><strong>What Goes Around Comes Around: </strong> This was published in Blue Marble Review and I was inspired by biomagnification, which I learned through my scientific research. It conveys how we are harming ourselves by recklessly polluting the ocean as we depend on it as a source of food. I hope to send the message that taking care of our oceans is of utmost importance and the current issues urgently need to be addressed.</p>
          <img src="dig/buildup.jpg" alt = "overflow"/>
          <p><strong>Overflow: </strong>This poster received first in the World Food Day hosted by the United Nations.  In this piece, there are multiple causes that are leading to a changing climate, which ultimately affects the agricultural industry. I seek to demonstrate how our environmental implications have an impact on us, demonstrated by the polluted water coming out of the faucet.</p>
        </div>
        </div>
      <Footer
      />
    </div>
  )
}
export default Editorial;

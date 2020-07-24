import './App.css';
import Footer from '../functions/Footer.js';
import ProjHead from "../functions/ProjHead.js";
import React from 'react';

function Sustainability(props) {
  return(
    <div>
      <div className="bodytext">
      <ProjHead
        title="Sustainability"
        details="Mobile App Concept | Winter 2018 | Photoshop"
      />
      <div className="projmargins">
      <h2>Problem</h2>
      <p>From a young age me and my peers have been taught how to be sustainable- the three fundamental R’s, reduce, reuse and recycle. Yet growing up I saw many of my classmates throwing food into the recycling and using single use plastics liberally. I wondered why people didn’t make more sustainable decisions such as using reusable materials, especially since it would only cause a minor inconvenience.</p>
      <p><strong>Questions</strong> I asked: Why don’t people take more sustainable steps in their lives? Is there a way to encourage more sustainable behavior? </p>
      <h2>Hypothesis</h2>
      <p>People don’t partake in sustainable actions because they don’t see any tangible impact from it, and it’s hard to change from a daily routine if there is no incentive.</p>
      <h2>User Testing</h2>
      <p>The users I interviewed were primarily adults and teenagers as they were the demographic most likely to use a mobile app. Questions I asked users were: Why do you find it difficult to implement sustainable habits? What are some ways you remember to do daily tasks? What would incentivize you to be more sustainable?</p>
      <h2>Personas and Key Findings</h2>
      <div className="center">
        <img src="personas.png" img alt="user personas"/>
        <img src="interview.png" img alt="user interview"/>
     </div>
     <h2>Content</h2>
     <p>Based off of the user research there are specific interrelated mechanics:</p>
     <ul>
      <li><strong>Scheduling</strong> daily routine tasks such as "bring reusable bag for work"</li>
      <li><strong>Task completion</strong>- finishing a task causes a plant to grow and the ability to earn coins to buy special edition plants (gamification). Each plant has an environmental fact related to it that measures the impact of the user's actions.</li>
      <li>To also help with <strong>motivation</strong>, there is a trend page to account for the user's progress and to provide a measure of how the user's habits would build up to substantial impacts over time.</li>
      <li>To allow the user to <strong>explore sustainability</strong> in their neighborhood, there is a map function to specifically display sustainable venues.</li>
    </ul>
      <p>Below is the information architecture for the app features</p>
     <div className="center">
       <img src="infoarch.png" img alt="information architecture"/>
    </div>
     <p>For my final draft I first sketched a mockup with traditional materials and then finalized it in Photoshop.</p>
      <div className="center">
        <img src="wireframedraft.jpg" img alt="wireframe draft"/>
        <img src="Sus.png" img alt="final wireframe"/>
     </div>
     <h2>Future and Reflection</h2>
     <p>I created this back when I did not own Sketch but if I could do it over again I would create an interactive prototype and conduct user testing to see if the concept actually worked. I would also explore different options for the mockup instead of one.</p>
     <p>Interesting directions:</p>
     <ul>
       <li>Explore a more concrete way for users to earn money by logging in their recycling (perhaps create a partnership with a recycling service and earn ten cents for every clean usable bale)</li>
       <li>Provide statistical metrics in the trends page, such as “you have saved this many watts of energy this week”.</li>
       <li>Formulate a real world reward system through possiblities such as money</li>
     </ul>
     </div>
      </div>
      <Footer
      />
    </div>
  )
}
export default Sustainability;

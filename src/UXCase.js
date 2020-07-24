import './App.css';
import Footer from './functions/Footer.js';
import ProjHead from "./functions/ProjHead.js";
import ReactPlayer from 'react-player';
import React from 'react';

function UXCase(props) {
  return(
    <div>
      <div className="bodytext">
      <ProjHead
        title="Instagram Stories Redesign"
        details="UX Mini Case Study | December 2019-January 2020 | Figma"
      />
      <div className="projmargins">
      <div className="center">
        <img src="instatop.png" img alt="instagram cover pic"/>
      </div>
        <h2>Problem</h2>
        <p>Instagram Stories is a new feature shipped in 2018 similar to Snapchat stories. However the difference between the two is that Instagram has a wide variety of users, from celebrities to artists to influencers to close friends to family members.</p>
        <p><strong>Primary Objective:</strong> Understand the pain points users have when navigating stories. How do we make it easier for users to choose what kind of accounts they want to see given Instagram’s large and diverse user base.</p>
      <h2>Target Audience</h2>
        <p>I utilized user interviews with frequent Instagrammers (high schoolers to college students) about: </p>
        <ul>
          <li>How often they used stories</li>
          <li>Why they used it as much as they did</li>
          <li>What would incentivize them to use it more</li>
          <li>Differences to snapchat stories</li>
        </ul>
        <p>In addition to in person interviews, I made a form to gather more data from different groups of users. <a href="https://docs.google.com/document/d/1jYBAo1ZWGLeSHhnl50lnWReJhn8CCACgwpxTFe9AssA/edit?usp=sharing">Click here to view results and analysis from that form!</a></p>
      <h2>Key Findings</h2>
        <p>In order to organize my key findings, I used an affinity diagram to sort the information from user interviews.</p>
      <div className="center">
      <img src="igfindings.png" img alt="compiled findings"/>
     </div>
     <h2>Personas</h2>
     <div className="center">
       <img src="igpersonas.png" img alt="user profiles"/>
    </div>
    <h2>Narrowing the Problem</h2>
    <p>Based off of my key findings and the needs of my personas I decided on a new problem statement.</p>
    <p>People want to use stories about people they care about but they can’t because:</p>
    <ul>
      <li>Instagram’s algorithm is based off of what they click on the most</li>
      <li>Other accounts get buried as a result</li>
      <li>Users don’t have time to scroll through all their stories</li>
    </ul>
    <p>Through my research, users indicated that they cared most about <strong>their close friends</strong> and having more <strong>ease</strong> in navigating what stories were available for viewing.</p>
    <p>After brainstorming, I decided on the solution space which was separating stories based off of <strong>account types</strong>. Examples of these types would be: "personal, business, art, writing, music". Additionally Instagram's close friends functionality would serve as another account type.</p>
    <p>In fact Instagram already has a functionality for this, by asking businesses to fit themselves under categories as seen by the screenshot below.</p>
    <div className="center">
      <img src="igcategories.png" img alt="igcategories"/>
   </div>
    <h2>Ideation</h2>
    <p>I created three low to mid fidelity mock ups of the solution space.</p>
    <h2>Idea 1: List Mode</h2>
    <div className="center">
        <img src="1.jpg" img alt="first ideation"/>
    </div>
    <div class="row">
      <div class="col">
      <h2>Pros</h2>
      <ul>
        <li>Allows user to see all different account types at once</li>
        <li>Medium feasibility- have to construct different screens</li>
      </ul>
      </div>
      <div class="col">
      <h2>Cons</h2>
      <ul>
        <li>Have to tap multiple times to get to see the list of all the stories</li>
        <li>Medium-low impact- does not take into account what the user wants to see the most</li>
      </ul>
      </div>
    </div>
    <div className="center">
        <img src="mid1.png" img alt="first ideation"/>
    </div>
    <h2>Idea 2: Expand and Collapse</h2>
    <div className="center">
        <img src="2.jpg" img alt="second ideation"/>
    </div>
    <div class="row">
        <div class="col">
        <h2>Pros</h2>
        <ul>
          <li>Automatically opens to close friend’s stories, the ones the user will care about most</li>
          <li>Allows for exploration of other type of accounts at the same time</li>
          <li>High impact and high feasibility</li>
        </ul>
        </div>
        <div class="col">
        <h2>Cons</h2>
        <ul>
          <li>Can’t see all different kinds of accounts at once</li>
        </ul>
        </div>
    </div>
    <div class="center">
        <img src="mid2.png" img alt="second ideation"/>
    </div>
    <h2>Idea 3: Tap and Drag</h2>
    <div className="center">
        <img src="3.jpg" img alt="third ideation"/>
    </div>
    <div class="row">
        <div class="col">
        <h2>Pros</h2>
        <ul>
          <li>Can see all different account types at once</li>
          <li>Simple drag down to view all stories at once, or one account type at a time</li>
          <li>Medium impact- lets user explore easily</li>
        </ul>
        </div>
        <div class="col">
        <h2>Cons</h2>
        <ul>
          <li>Still can’t see stories immediately after opening the app, have to click or drag to get to stories</li>
          <li>Medium-low feasibility- markably different from the current Instagram stories layout</li>
        </ul>
        </div>
    </div>
    <div className="center">
        <img src="mid3.png" img alt="third ideation"/>
    </div>
    <h2>Exploring Expand n Collapse</h2>
    <p>I chose this option because it allows:</p>
    <ul>
    <li>Users to preview stories automatically from the beginning. Being able to preview any stories of close friends from the getgo is important because it'll encourage the user to explore stories rather than to ignore the function entirely.</li>
    <li>Users to easily explore other account types and see their close friends from the beginning</li>
    </ul>
    <p>In my process I went through two iterations, below is the first</p>
    <div className="center1">
        <img src="iteration1.gif" img alt="first iteration with figma"/>
    </div>
    <p>I decided that there would be accessibility issues with this first iteration as the button to close the category is hard to click on. </p>
    <p>Below is the second iteration I decided on, which both allows the user to see their close friend's stories right away and also makes it easy to explore other account types.</p>
    <ReactPlayer url= "https://youtu.be/KaSkzdl6UIk" playing/>
    <h2>Conclusion</h2>
<p>In the future I plan on developing this case study to change the way how Instagram is wired- to be more specific, making it easier to identify close friends and how stories could play into discovering niche communities. I also plan to understand how to use Sketch. To be continued in the future!</p>
        </div>
      </div>
      <Footer
      />
    </div>
  )
}
export default UXCase;

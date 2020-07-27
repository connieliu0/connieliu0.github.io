import './App.css';
import Footer from './functions/Footer.js';
import ProjHead from "./functions/ProjHead.js";
import React from 'react';
import Bottom from './functions/Bottom.js';

function Habitat(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
        <div className="projmargins">
        <ProjHead
            title="Habitat for Humanity"
            description="streamlining volunteer signups through a volunteer portal"
            image="habitat/habitat.png"
            timeline="Spring 2020, 6 weeks"
            role="With"
            team="2 Project Managers, 4 Engineers"
            tools="Figma, HTMl/CSS"
          />
        <div className="forty">
        <h2>Overview</h2>
        <p>Habitat for Humanity Tompkins County is a non-profit group in the Ithaca Area that builds homes for those in need. As part of Cornell's Hack4Impact chapter I was in charge of scoping out the details and designing a volunteer portal to streamline the process. At this point in time I was the club's <em>sole designer</em>.
        </p>
        <h2>The Problem</h2>
        <p>Currently the Habitat for Humanity Tompkins County chapter streamlines the volunteer sign up process through email and an excel document which can lead to many errors. We were tasked to create a portal for volunteers to sign up for shifts and to upload forms to help make the process easier and reduce the amount of work needed by the one volunteer administrator.</p>
        <h2>Process</h2>
        <p>I started off with determining product specs through a call with the client. Based off the first call I made a series of low-fi sketches.</p>
        <img src="habitat/lofis.png" img alt="lofis"/>
        <p>The low fidelities revealed many product specs that we needed to sort out with the client, such as the need for "groups" of volunteers. We recompiled a list of questions to ask at the next meeting. Then, based off of that I began to do a medium fidelity prototype</p>
        <p>Due to time constraints, the medium-fidelity immediately turned into the high-fidelity as front-end needed to get started within the given time constraint. Because of the expedited timeline, we ended up having to accomodate for new needs on the fly such as:</p>
        <ul>
          <li>Integrating a general information notice sent out to volunteers onto the website</li>
          <li>Adding log in, log out, and change password flows</li>
          <li>Filtering and searching for events on the admin side</li>
          <li>Deleting events on the admin side</li>
        </ul>
        <p>Please contact me if you'd like to learn more about various decisions we made!</p>
        <h2>Final Product</h2>
        <p>We're currently still working on implementing the live version! However below are the wireframes I created for the product.</p>
        <h2>Admin Flow</h2>
        <h2>Volunteer Flow</h2>
        <h2>Reflection</h2>
        <p>It was my first time working on a large team and also with a client! Because Hack4Impact Cornell is still a young and growing club on campus, I took a cross-discplinary role and even held a workshop for front-end on best HTML and CSS practices. Moving to remote teamwork halfway through the semester became a challenge, but I realized a huge part of success is overcommunication and always checking in with your teammates. </p>
        <img src="habitat/image.png" img alt="habitat pic"/>
        <h2>Future</h2>
        <p>Because a major hurdle was not having design integrated into the timeline, I was unable to spend as much time on user research, prototyping, and usability testing as I would have liked. I was unable to support decisions off of user research, and much of the design thinking was lost due to time constraints.</p>
        <p>Currently I'm serving as <strong>National Director of Design</strong> for the overarching Hack4Impact organization to remedy this problem. For Summer 2020 I've been reaching out to various chapters to learn more about their design practices to consolidate an official timeline for teams to follow.</p>
        <h2>Bonus</h2>
        <p>I also do marketing for Hack4Impact, and recently did a revamp of the brand. Check out a graphic I made below!</p>
        <img src="habitat/cover.png" img alt="h4i cover"/>
       </div>
        </div>
        <Bottom
      nextproject="Visual Design Work"
      next="https://connieliu0.github.io/#/visual"
      />
        </div>

      <Footer
      />
    </div>
  )
}
export default Habitat;

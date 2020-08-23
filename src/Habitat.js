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
            timeline="Spring 2020, 6 weeks with Cornell Hack4Impact"
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
          <li>Filtering and searching for events on the volunteer side</li>
        </ul>
        <p>Please contact me if you'd like to learn more about various decisions we made!</p>
        <h2>Final Product</h2>
        <p>We're currently still working on implementing the live version! However below are the wireframes I created for the product.</p>
        <h2>Admin Flow</h2>
        <p><strong>View our live prototype <a href="https://www.figma.com/proto/nIF9eGrTjsXGsi335IxRLZ/Habitat-for-Humanity-Figma?node-id=760%3A2&viewport=460%2C367%2C0.08831579238176346&scaling=scale-down-width/" target="_blank">here</a></strong> or follow along below.</p>
        <img src="habitat/admin3.png" img alt="admin3views"/>
        <p>In the admin flow, we have current volunteer assignments sorted by day because there can be multiple assignments in a day. Then for adding events we made sure to have repeat weeks as many assignments are on a weekly basis. Finally we have account information for password and contact management. Although not pictured, this tab will also be for <strong>volunteers</strong> in the final project.</p>
        <img src="habitat/adminform.png" img alt="admin form view"/>
        <p>Because the main purpose of the liability form tracker is to know which groups haven’t completed their forms yet, we included a way to hide completed groups in the second iteration. We also allowed a way for administrators to upload forms as we learned that often volunteers will hand in their forms in person on the actual day of the event.</p>
        <h2>Volunteer Flow</h2>
        <p><strong>View our live prototype <a href="https://www.figma.com/proto/8AgoqtIhrZosB3RQ3u4Zvd/Habitat-for-Humanity-Volunteer-Flow?node-id=1%3A244&viewport=458%2C366%2C0.06753058731555939&scaling=scale-down-width/" target="_blank">here</a></strong> or follow along below</p>
        <img src="habitat/volunteershifts.png" alt="shifts"/>
        <p>The first page of the volunteer flow is upcoming shifts, because that way they have a constant reminder of what is coming up. We also have a calendar view so they can see what they have coming up long-term. We strayed away from a daily or weekly calendar because most volunteers for Habitat for Humanity only had unique monthly appointments. For the visual design of the different blocks in the calendar, we made sure we stuck with our color system and did not rely solely on color to improve accessibility.</p>
        <p>In our color system, a blue with white inside block meant pending assignments, crossed out text meant it was canceled, and green filled in block meant the volunteer confirmed and was going.</p>
        <img src="habitat/volunteersignup.png" alt="signup"/>
      <p>We continued this color system into signup. As you can see the green outline box was in the confirmed for upcoming shifts and the button when the user confirms. The blue outline box is there for upcoming shifts you can sign up for. </p>
      <p>We added filtering later because volunteers would often plan for shifts months in advance, and those wouldn’t immediately show up in the beginning.</p>
      <p>Although not detailed, we had to figure out how the group system and if individuals in the group would have to make individual accounts or be incorporated into our database. Because many of these group members would be one-time only (for example clubs and fraternities), we decided that only the group leader needed to make the account.</p>
      <img src="habitat/volunteerform.png" alt="volunteer form"/>
      <p>For the form we have two versions, individual and group to account for the two different use cases.</p>
        <h2>Reflection</h2>
        <p>It was my first time working on a large team and also with a client! Because Hack4Impact Cornell is still a young and growing club on campus, I took a cross-discplinary role and even held a workshop for front-end on best HTML and CSS practices. Moving to remote teamwork halfway through the semester became a challenge, but I realized a huge part of success is overcommunication and always checking in with your teammates. </p>
        <img src="habitat/image.png" img alt="habitat pic"/>
        <h2>Future</h2>
        <p>Because a major hurdle was not having design integrated into the timeline, I was unable to spend as much time on user research, prototyping, and usability testing as I would have liked. I was unable to support decisions off of user research, and much of the design thinking was lost due to time constraints.</p>
        <p>Currently I'm serving as <strong>National Director of Design</strong> for the overarching Hack4Impact organization to remedy this problem. For Summer 2020 I've been reaching out to various chapters to learn more about their design practices to consolidate an official timeline for teams to follow as well as compiling resources. Please <strong>contact me</strong> to see a preview of what I've been working on as the official national website is still in-progress.</p>
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

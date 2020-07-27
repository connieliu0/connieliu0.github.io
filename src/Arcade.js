import './App.css';
import Bottom from './functions/Bottom.js';
import Footer from './functions/Footer.js';
import ProjHead from "./functions/ProjHead.js";
import React from 'react';

function Arcade(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
        <div className="projmargins">
          <ProjHead
            title="Arcade"
            description="gaming social app for seniors"
            image="arcade/arcadecover.png"
            timeline="June 2020, 48 Hour Adobe Creative Jam"
            role="With"
            team="Renee Hoh-Designer"
            tools="Adobe XD"
          />
        <h2>Overview</h2>
        <p>Adobe hosts a ~48 (might be slightly less) hour Creative Jam for college students around the world to compete in their prototyping skills! Me and my partner participated according to this <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:cf8f4e73-3942-4298-8894-3d1effe75557#pageNum=1">project brief</a> and ended up in <a href="https://assets.adobe.com/public/b7e508d5-10e4-4af1-7450-be3ced472a1d">top 50 out of ~200 teams</a> (we were called Cornell Corns).</p>
        <h4>The Problem</h4>
        <h2>How do we encourage seniors to participate in the gaming community, especially during a time of social distancing?</h2>
        <p>Will be filled in soon!</p>
        <p>We sought to answer a series of questions in our product creation:</p>
        <ul>
          <li>How do we make this app friendly and accessible to seniors?</li>
          <li>How do we optimize the experience to recommend games that account for any problems that come with older age?</li>
          <li>How do we take in account the social networks of seniors?</li>
        </ul>
        <h2>Our Solution</h2>
        <h2>User Research</h2>
        <h2>Major Considerations</h2>
        <h2>Scheduling and Invites</h2>
        <h2>Onboarding</h2>
        <h2>Community View</h2>
        <h2>Explore</h2>
        <h2>Visual Decision-making</h2>
        <h2>Results and Reflection</h2>
        </div>
        <Bottom
      nextproject="Auxilio"
      next="https://connieliu0.github.io/#/auxilio"
      />
        </div>

        <Footer
      />
    </div>
  )
}
export default Arcade;

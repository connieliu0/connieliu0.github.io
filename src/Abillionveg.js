import './App.css';
import Bottom from './functions/Bottom.js';
import Footer from './functions/Footer.js';
import ProjHead from "./functions/ProjHead.js";
import React from 'react';

function Abillionveg(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
        <div className="projmargins">
          <ProjHead
            title="abillionveg UX Internship"
            description="connecting vegan communities together"
            image="abillionveg/abillionvegcover.png"
            timeline="June 2020 - Aug 2020 8 weeks, Part-time"
            role="With"
            team="Jonathan Ng (Product Manager), Design Team"
            tools="Adobe XD"
          />
        <h2>Overview</h2>
        <p>abillionveg is a vegan review app that provides a way for vegans, flexitarians, omnivores, or those simply just curious to find places that offer vegan dishes. For every five reviews the user contributes, the app donates money to an animal sanctuary of their choice. Currently it has an extensive global audience, with reviews more concentrated towards cities.</p>
        <h4>Researching the Problem</h4>
            <p>While the amount of users using the app to post reviews and view reviews is high, there is currently no way for users to truly interact with each other or companies. Based off of data, with amplitude</p>
            <ul>
            <li>Only a 1/5 of users check their activity, on average, 2% of users comment on reviews, users with many followers (400-800) don't get many likes </li>
            </ul>
            <p>Overall, because of the sparse vegan community, many users don't know others on the app, which means the amount of engagement they have is low as their is not as much incentive to comment on reviews or like reviews compared to traditional social media platforms.</p>
        <h2>Primary Goals</h2>
        <p>To increase engagement and sense of community on the app. Currently the app consists of many disjointed users and a social feature that is underutilized due to lack of value to users. However many users are using the app for the primary action, which is to look up restaurants that have vegan options and to make social impact.</p>
        <p>How might we's:</p>
        <ul>
          <li>How might we increase time spent on the app for other activities than reviews?</li>
          <li>How might we cultivate a community centered around veganism?</li>
          <li>How might we encourage users to follow each other and comment?</li>
          <li>How might we encourage users to check their feed and feel more excited about the content?</li>
        </ul>
        <p>This project is still in development! Check by the end of August for the full case study.</p>
        <p>For now, feel free to check out my project files</p>
        <ul>
        <li><a href="https://xd.adobe.com/view/d5668bbb-d685-4f22-906e-a0432db487a1-8035/">Information Architecture</a></li>
        <li>Low Fidelities: <a href="https://xd.adobe.com/view/d389bdcd-bc98-46f5-92e2-b10a27f12e7e-86da/">Direct-Messaging</a>, <a href="https://xd.adobe.com/view/2a704ffb-c3ef-48cd-999f-972b4cb26ec2-7f23/">Community Posts</a>, <a href="https://xd.adobe.com/view/4d5223fb-00e1-467e-95c8-50962e121267-1801/">Search Flow</a></li>
        </ul>
        </div>

        <Bottom
      nextproject="Twitter"
      next="https://connieliu0.github.io/#/twitter"
      />
        </div>

        <Footer
      />
          </div>

  )
}
export default Abillionveg;

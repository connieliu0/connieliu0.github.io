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
            timeline="June 2020, 48 Hour Online Adobe Creative Jam"
            role="With"
            team="Renee Hoh-Designer"
            tools="Adobe XD"
          />
        <h2>Overview</h2>
        <p>Adobe hosts a ~48 (might be slightly less) hour Creative Jam for college students around the world to compete in their prototyping skills! Me and my partner participated according to this <a href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:cf8f4e73-3942-4298-8894-3d1effe75557#pageNum=1">project brief</a> and ended up in <a href="https://assets.adobe.com/public/b7e508d5-10e4-4af1-7450-be3ced472a1d">top 50 out of ~200 teams</a> (we were called Cornell Corns).</p>
        <p><strong>View our live prototype <a href="https://xd.adobe.com/view/bf82c9a1-3633-495a-7c74-925d62caa59f-c9b3/" target="_blank">here</a>!</strong></p>
        <h4>The Problem</h4>
        <h2 className="none">How do we encourage seniors to participate in the gaming community, especially during a time of social distancing?</h2>
        <p>We sought to answer a series of questions in our product creation:</p>
        <ul>
          <li>How do we make this app friendly and accessible to seniors?</li>
          <li>How do we optimize the experience to recommend games that account for any problems that come with older age?</li>
          <li>How do we take in account the social networks of seniors?</li>
        </ul>
        <div className="forty">
        <h2>Our Solution</h2>
        <p>We designed an app called <em>Arcade</em> which plays homage to the classic video game experiences many seniors have experienced when they were young.</p>
        <p>In our app, seniors are able to join pre-created groups set by their family or nursing home to then set up times to play online games with each other through a Google Meet call. They’re also able to discover games that fit their liking based off of various filters that take in motor control, cognitive ability, genre, and more. We were inspired by online games in general because there are thousands that have been converted for online play that people don’t know about.</p>
        <h2>User Research</h2>
        <p>Because of the condensed time we weren’t able to interview anyone, so we got most of our information from the internet and my past experiences as a teacher at a senior living home.</p>
        <h2>Major Considerations</h2>
        <h3>Visually</h3>
        <p>Our research revealed that elderly individuals may have difficulty seeing cool colors, so we used warm colors for our app’s visual design. Additionally, we purposely leaned toward larger icons and components, visual indicators that are not color-dependent, and a minimalist style to make interactions clear and accessible, to account for those with color-blindness or poor vision. Therefore for different buttons, we tried to incorporate different non-color reliant differences such as border style and thickness even though our palette was not color-blind friendly.</p>
        <h3>Functionally</h3>
        <p>Originally we planned to have a traditional social media platform where anyone on the internet could connect with each other. However our research revealed that <strong>seniors preferred to limit their circle to those they already have in-person and close interaction with</strong>. We saw this app to be a tool to connect seniors with their more immediate network (ie family), and therefore focused more on joining groups based off of a code provided by the family. </p>
        <h2>Final Product</h2>
        <img src="arcade/onboarding.png" alt="onboarding"/>
        <p>For onboarding we decided to focus on three major limiting factors for seniors - motor control, cognitive difficulty, and other physical problems they may have to recommend games that would best fit their needs. 
</p>
        <img src="arcade/schedule.png" alt="scheduling"/>
        <p>For scheduling and viewing invites, we made sure to have large clickable buttons which are also visually different through the border style. Event discovery is simple because we restricted it to pre-organized groups because seniors prefer to have interactions with a close intimate group.
</p>
        <img src="arcade/user_communityflow.png" alt="user/comm"/>
        <p>For the user view we allowed them to bookmark games to play later and favorite games along with standard community joining functionalities. </p>
        <img src="arcade/explore.png" alt="explore"/>
        <p>For the explore page we continued with the same filtering process as onboarding. If you look at the style of each border for each filter, they correspond with the style of the button during the filtering selection.</p>
        <h2>Results and Reflection</h2>
        <p>We ended up scoring 77/100 which was pretty good for our first time ever participating in a design competition. I got a cumulative 12 hours of sleep that weekend, but I learned how to work with design systems on the go and with a partner remotely.
        </p>
        <p>
        Looking back, we would’ve done more thinking to make the game to video integration process more seamless for non-technologically savvy users. Currently the flow would be to copy the game link and to paste it into the Google Meet chat, which definitely seems confusing. Also before prototyping, I would’ve definitely taken in spacing into consideration, as we were struggling to standardize it towards the end. To further improve the app, user-testing with seniors would definitely be needed as user-research relied entirely on prior experiences and online articles.
        </p>
        </div>
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

import './App.css';
import Footer from './functions/Footer.js';
import ProjHead from "./functions/ProjHead.js";
import React from 'react';

function Auxilio(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
          <ProjHead
            title="Auxilio"
            description="quantifying natural disaster relief efforts"
            image="aux0.png"

          />
        <div className="projmargins">
        <h2>Overview</h2>
        <p>Auxilio (which means I help in Latin) was developed at the September BigRedHacks Hackathon and won the <strong>Beginner's Prize</strong> (best project made by first timer hackers). It takes first hand accounts of life from users after natural disasters and analyzes them for negative sentiment which it presents as a percentage. <strong>A functional version of the app can be seen <a href= "https://bigredhacks40677.appspot.com">here</a></strong></p>
        <p>I worked on this project with two other talented freshmen: <strong>Jonna Chen</strong> who did the front-end and <strong>Angelina Saililing</strong> who did the back-end.</p>
        <h2>The Problem</h2>
        <p>Under the umbrella theme of <strong>natural disasters</strong>, we decided to focus on the long term mental health of a community after a natural disaster. Oftentimes, apps and relief efforts are focused on the immediate impact and there is little information on the community years after.</p>
        <p>We sought to answer a series of questions in our product creation:</p>
        <ul>
          <li>How do we look over multiple communities years after a disaster?</li>
          <li>How do we make sure implementation efforts are successful?</li>
          <li>How do we understand numerous individual feedback messages?</li>
          <li>How do we accomodate the needs of both <strong>users</strong>, the government and survivors?</li>
        </ul>
        <h2>My Role</h2>
        <p>During our process I was tasked with developing a friendly user interface and color scheme to make our user (survivors) feel at ease with 1) contributing stories and bringing up past trauma and 2) understanding the stories of others.</p>
        <div className="center">
          <img src="aux1.png" img alt="wireframe"/>
          <img src="aux2.png" img alt="wireframe"/>
        </div>
        <p>I created a mascot, a koala in a construction hat to give off a vibe of optimism and rebuilding. The color scheme of light browns and mint greens represent a natural color scheme with the green representing rejuvenation. Besides wireframing and illustration I also worked with the team on brainstorming the idea and assisted with HTML/CSS.</p>
        <h2>Final Product</h2>
        <p>Ultimately we decided on using sentiment analysis to characterize large sets of written personal accounts for various different natural disasters. In our final product, the first page focused on explaining the product. Then the official first page is focused on user (survivors) input, because the primary objective is to collect data for sentiment analysis. Because the survivor’s well-being is a focus as well we included access to mental health and support sources. The next page in the flow is the overall sentiment analysis so there is transparency about the purpose of collecting the responses. The sentiment analysis page is mostly for governmental organizations to see.</p>
        <div className="center">
          <img src="aux3.1.png" img alt="finalproduct"/>
        </div>
        <p>We have also added a page about what others have said so the survivor can feel a sense of solidarity (the stock responses are not authentic responses and just to test to see if the sentiment analysis worked). An about page was added for context about the project.</p>
        <div className="center">
          <img src="aux3.2.png" img alt="finalproduct"/>
        </div>
        <h2>Reflection</h2>
        <p>If we had more time our team would focus on creating a long-term analytics portion of the website. That way the charity or governmental organization could have a comprehensive view to see if their efforts have paid off or not truly in the long-term rather than a single point in time.</p>
        <p>A general note on the <strong>users</strong> of the product, since it includes both survivors and governmental organizations/charities, we designed with considerations of both in mind. We were particularly wary about the mental health of the survivors and in future iterations of the product would communicate with real users (survivors) to see if we handled collecting information deliberately enough.</p>
        <p>Overall, it was my first time ever-making a web app with a team (shoutout to my teammates they were absolutely amazing) and I learned a lot on the way beyond making our product from IBM Watson to the Agile framework. More importantly, turns out you can get enough sleep at a Hackathon and make a product at the same time!</p>
        <div className="center">
          <img src="hackathon.jpg" img alt="the team"/>
        </div>
        </div>
        </div>
      <Footer
      />
    </div>
  )
}
export default Auxilio;

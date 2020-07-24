import './App.css';
import Footer from './functions/Footer.js';
import Dropdown from './functions/Dropdown.js';
import React from 'react';

function About(props) {
  return (
    <div>
      <div className="bodytext">
      <hr/>
        <div className="row">
          <div className="part1">
            <img src="images/profile.jpg" alt="Profile Image"/>
          </div>
          <div className="part2">
            <h2>About</h2>
            <p>I'm a current freshman at Cornell University studying Information and Computer Science. This summer I'm working with p5.js, an open source creative computing platform, through <a href="https://summerofcode.withgoogle.com/" target="_blank">Google Summer of Code</a> and <a href="https://www.abillionveg.com/" target="_blank">abillionveg</a> as a UX intern.</p>
            <p>On campus I design for <a href="https://cornellmedium.design" target ="_blank">Medium Design Collective</a>, <a href="https://hack4impact.org/" target ="_blank">Hack4Impact</a> (which I'm also the National Director of Design for), and volunteer for Science Olympiad at Cornell. I aspire to one day make a living through by bridging my artistic and technical sides through possibly design, UX engineering, and computational art. I'm deeply passionate about the environment and using my skills for social good</p>
            <h3>View my resume <a href="https://drive.google.com/file/d/1jMxJbtkbtd9KD7hQQcyB-1MatrlFZBB8/view?usp=sharing" target ="_blank">here</a>!</h3>
            <h2>Contact Me!</h2>
            <p>Send me a message for any collaborative or job opportunities at <a href="mailto:cl2264@cornell.edu">cl2264@cornell.edu</a></p>
            <Dropdown
              title={
                <h3>Past Experiences</h3>
              }
              lists={
              <ul>
                <li>INFO 2300: Intermediate WebDev Class at Cornell where I used SQL, PHP, JQuery, HTML/CSS and user research skills. <a href="http://stark-everglades-92037.herokuapp.com/">Link to a bird database project!</a></li>
                <li>July 2019: Web Development/Design at <a href="https://www.getinstahub.com/careers">InstaHub</a>, used (and self-taught) Bootstrap and HTML/CSS</li>
                <li>May 2019: Design Intern at <a href="https://dscience.com/">Design Science</a>, used Adobe XD and After Effects</li>
                <li>Summer 2018: Computer Data Science Team <a href="https://drive.google.com/file/d/0B8VoTRak9wUmSlZ5U3lwSlFjTEQyVm15VkdDYXBHdnRFVkg4/view?usp=sharing">Research Project</a> as part of <a href="http://sciences.pa-gov-schools.org/">Pennsylvania Governor's School for the Sciences</a>, used Python</li>
              </ul>
            }
            />
            <Dropdown
              title={
                <h3>Fun Facts!</h3>
              }
              lists={
                <ul>
                  <li>I like to doodle for my <a href= "https://www.instagram.com/conliuart/">art blog</a> in my free time!</li>
                  <li>In high school I created an <a href="https://conliuart.wixsite.com/portfolio/art-as-service">art show</a> and hope to continue my sustainability efforts in the coming years at Cornell</li>
                  <li>I once had a <a href="https://www.webtoons.com/en/challenge/paper-planes/chapter-one/viewer?title_no=38596&episode_no=2">webcomic</a> that did pretty well until I had no time to work on it 12 hours a week</li>
                  <li>Inspired by indie films, impressionism, and <a href="https://nobrow.net/shop/in-waves/">indie comics!</a></li>
                  <li>I like (trying) to play basketball</li>
                </ul>
              }
            />
          </div>
        </div>
      <Footer
      />
      </div>
    </div>
  )
}

export default About;

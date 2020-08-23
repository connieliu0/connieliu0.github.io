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
            <h2>My Story into Design</h2>
            <p>Originally I wanted to be an environmental scientist, and did a variety of <a href="https://drive.google.com/file/d/1cFJ9ouxJBrIoytYrEl3QIHFcIs8pGeUV/view?usp=sharing" target ="_blank">advocacy and research</a> projects. At the same time, I was highly interested in art and tech, eventually stumbling on the path of Product Design my junior year of highschool.</p>
            <p>Design soon became my dream career. I realized I didn't enjoy spending days in the lab, and I actually enjoyed <strong>speaking with people</strong> on how to solve problems instead. Ultimately, even though my career has changed, my goal still remains the same - <strong>to solve problems and make the world a better place</strong>.</p>
            <p>I'm currently a sophomore at Cornell University studying Information Science (w/ concentrations in UX and Interactive Technology) with a minor in Computer Science. I'm interested in designing for the cross-intersections of <strong>sustainability, art, and tech</strong>.</p>
            <h3>View my resume <a href="https://drive.google.com/file/d/1hFXY-SyhK6SbAYaHI12ibua6T0GTGITs/view?usp=sharing" target ="_blank">here</a>!</h3>
           </div>
         </div> 
         <div className="projmargins">
         <h2>What I'm Working on Now</h2>
         <div className="row">
           <div className="col">
         <h3>Currently</h3>
         <ul>
            <li>Developing/Designing a Showcase for p5.js, an open source creative computing platform @ <a href="https://medium.com/processing-foundation/announcing-processing-foundation-google-summer-of-code-2020-af39dbf41d25" target="_blank">Google Summer of Code</a></li>
            <li>Designing @ <a href="https://www.abillionveg.com/" target="_blank">abillionveg</a> a 500startups backed vegan review app.</li>
            <li>Designed <a href="https://ldjam.com/events/ludum-dare/46/pass-it-on">Pass it On</a> w/ a team for a Global Game Jam and won 11th in innovation out of 4000+ games!</li>
            <li>Designed <a href="https://devpost.com/software/ponder-tiw5y3">Ponder</a> a mental health journaling app for FB's online hackathon.</li>
            </ul>
            </div>
            <div className="col">
            <h3>On Campus</h3>
            <ul>
            <li>Sole Cornell Designer and National Director of Design @ <a href="https://hack4impact.org/" target ="_blank">Hack4Impact</a>, working on expanding design resources for all seven chapters</li>
            <li>Publicity Director @ <a href="https://wicc.cornell.edu/">Women in Computing at Cornell</a>, creating social media features and spotlights for 2000+ viewers </li>
            <li>Designer @ <a href="https://cornellmedium.design" target ="_blank">Medium Design Collective</a>, using human-centered design for web and speculative projects</li> 
            <li>Volunteering w/ Cornell Science Olympiad</li>
            </ul>
            </div>
         </div>
            <div className="row">
          <div className="col">
           <Dropdown
              title={
                <h3>Past Experiences</h3>
              }
              lists={
              <ul>
                <li>Spring 2020 INFO 2300: Intermediate WebDev Class at Cornell where I used SQL, PHP, JQuery, HTML/CSS and user research skills. <a href="http://stark-everglades-92037.herokuapp.com/">Link to a bird database project!</a></li>
                <li>July 2019: Web Development/Design at <a href="https://www.getinstahub.com/careers">InstaHub</a>, used (and self-taught) Bootstrap and HTML/CSS</li>
                <li>Summer 2018: Computer Data Science Team <a href="https://drive.google.com/file/d/0B8VoTRak9wUmSlZ5U3lwSlFjTEQyVm15VkdDYXBHdnRFVkg4/view?usp=sharing">Research Project</a> as part of <a href="http://sciences.pa-gov-schools.org/">Pennsylvania Governor's School for the Sciences</a>, used Python</li>
                <li>Summer 2017: Environmental Science Researcher at UPenn under the <a href="http://ceet.upenn.edu/training-career-development/summer-programs/teen-research-and-education-in-environmental-science/student-bios/">TREES program</a></li>
              </ul>
            }
            />
          </div>
          <div className="col">
            <Dropdown
              title={
                <h3>Random Facts!</h3>
              }
              lists={
                <ul>
                  <li>I like to doodle for my <a href= "https://www.instagram.com/conliuart/">art blog</a> in my free time!</li>
                  <li>In high school I created an <a href="https://conliuart.wixsite.com/portfolio/art-as-service">art show</a> and hope to continue my sustainability efforts in the coming years at Cornell</li>
                  <li>I once had a <a href="https://www.webtoons.com/en/challenge/paper-planes/chapter-one/viewer?title_no=38596&episode_no=2">webcomic</a> that did pretty well until I had no time to work on it 12 hours a week</li>
                  <li>Inspired by Mitski, art museums, and <a href="https://nobrow.net/shop/in-waves/">indie comics!</a></li>
                  <li>I like (trying) to play basketball</li>
                </ul>
              }
            />
            </div>
            </div>
            <h2>Contact Me!</h2>
            <p>Send me a message for any collaborative or job opportunities at <a href="mailto:cl2264@cornell.edu">cl2264@cornell.edu</a></p>
            </div>
        </div>
      <Footer
      />
      </div>
  )
}

export default About;

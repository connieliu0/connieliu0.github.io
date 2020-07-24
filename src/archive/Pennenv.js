import React from 'react';
import './App.css';
import Footer from './Footer.js';
import ProjHead from "./ProjHead.js";
import ImageGallery from 'react-image-gallery';
const design = [
  { original: 'pennenv01.jpg'},
  { original: 'pennenv02.jpg'}
];
function Pennenv(props) {
  return(
    <div>
      <div className="bodytext">
      <ProjHead
        title="PennEnvironment 100% Renewable Infographic"
        details="Infographic | Summer 2019 | Adobe Illustrator"
      />
      <div className="projmargins">
      <h2>Overview</h2>
      <p>Over the summer I created an infographic for PennEnvironment as a way to keep designing even though school was over and because I wanted to contribute to the environmental movement. During high school I did various forms of <a href="https://conliuart.wixsite.com/portfolio/art-as-service">environmental activism</a> with the local borough but this time I wanted to use my skills for a professional nonprofit organization.</p>
      <h2>Process</h2>
       <p>At the beginning of the project I first went to the PennEnvironment office to discuss what content they wanted in the infographic. I was provided with a couple documents that contained an overview of the Bill and I organized the most important/relevant information into a document. Then, I drafted what the infographic would look like through a sketch. I then sent that to the outreach director and received feedback on the design and content. I also drafted the colors in a low fidelity mockup. Below is the first iteration:</p>
       </div>
       <div className="center">
         <img src="penn1.png" img alt="design sketches"/>
         <img src="penn2.png" img alt="color mockup"/>
      </div>
      <div className="projmargins">
      <p>Based off of the feedback, I was given two major suggestions- one to include more PennEnvironment colors (add blues), to change certain informational parts and to improve on categorizing information by providing clear distinguishable markers in content through color and shapes. Below is the final iteration:</p>
      </div>
      <div className="center">
      <ImageGallery items={design} />
     </div>
      <div className="projmargins">
      <h2>Reflection</h2>
      <p>Future Directions</p>
       <ul>
       <li><strong>Increase accessibility:</strong> I would experiment more with using distinct shapes and rely less on color. Currently there are some features to improve accessibility, for one the header of each section is left aligned and the same font/size so the reader knows where to expect each part. Also, if I could revamp this infographic, I would definitely add bolded text to large blocks of text (since the flyer is very word heavy).</li>
       <li><strong>Compartmentalize information even further:</strong> For the Purpose section I would split the purposes into the topics that talk about reducing and eliminating and topics that talk about building and growing and add subheadings.</li>
       </ul>
      <p>For my second formal attempt with Adobe Illustrator I'd say I learned a lot and putting together informational graphics is easier said than done! Overall it was extremely gratifying to know that my flyer has been helpful in educating people about Pennsylvania's renewable energy efforts.</p>
      </div>
      </div>
      <Footer
      />
    </div>
  )
}
export default Pennenv;

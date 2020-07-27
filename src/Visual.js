import './App.css';
import Footer from './functions/Footer.js';
import ProjHead from "./functions/ProjHead.js";
import React from 'react';
import Bottom from './functions/Bottom.js';
import ImageGallery from 'react-image-gallery';
const design = [
  { original: 'pennenv01.jpg'},
  { original: 'pennenv02.jpg'}
];
function Visual(props) {
  return(
    <div>
      <div className="bodytext">
      <hr/>
      <ProjHead
           title="Visual Design Work"
           description="various projects in graphic design and publication design"
           timeline="2018-2019"
           image=""
           role="Role"
           team="Designer, Head Editor, Intern"
           tools="Illustrator, Photoshop, Publisher"
            />
            <div className="projmargins">
      <h2 className="forty">InstaHub Work</h2>
      <p>Visual iconography was taken from open source websites. All other work from color scheme, vector graphics, layout, and content writing is mine. The prompt I was given was to create a flyer for the product, which was still in its beginning stages. In order to write the content I interviewed various interns and the CEO on the various benefits of the product. This led to the change in content on the last iteration as the final feature of building safety was no longer considered a selling point for the product.</p>
      <p>As for web design work I created high fidelity mockups for the job application and job search pages. I coded the individual job description pages (example <a href = "https://getinstahub.com/businessDev">here</a>) and made sure they worked with responsive resizing.</p>
      <img src="instahub.png" img alt ="instahub design examples"/>
      <h2 className="forty">Role for FBLA/Rhapsody</h2>
      <a href = "https://issuu.com/udhsrhapsody/docs/rhapsody_magazine_2019_final">2019 Version (NCTE REALM First Class Award)</a> | <a href = "https://issuu.com/udhsrhapsody/docs/rhapsody_magazine_2018_final">2018 Version (NCTE REALM Superior Award)</a>
      <p>For the literary arts magazine I was the art editor in 2018 and editor in chief (or senior editor) in 2019. While desgining the graphic assets, cover, and layout I consulted with a team consisting of primarily writers with less design or art experience. With every decision I ran it by my team and listened to their concerns such as the readability with certain fonts. I learned through this experience how to justify design decisions and iterate on feedback.</p>
      <p>The 2019 Magazine was awarded <a href="https://ncte.org/wp-content/uploads/2020/01/Pennsylvania.pdf"><strong>First Class for the NCTE REALM competition</strong></a>- a distinction given only to 46 magazines out of 325 entries in the <a href = "https://ncte.org/awards/program-to-recognize-in-student-literary-magazines/">national competition.</a></p>
      <img src="rhapsody.png" img alt ="Rhapsody final"/>
      <p>The FBLA magazine was done with a fellow classmate and won <strong>5th in PA state</strong>. She was in charge of the logo, which I helped thumbnail with her. She also made the broken triangle motif and helped compose the interview. The ad was done entirely myself with her feedback as well as the opening page for the Virtual Business Challenge article. The design process started off with determining the theme (modern) and taking inspiration from notable business magazines such as TIME magazine. After thumbnailing different layouts, the best one was chosen and implemented with Photoshop.</p>
      <img src="fblafinal.png" img alt ="fbla final"/>
      <img src="process.png" img alt ="process for fbla"/>
      </div>
      <div className="projmargins">
      <h2 className="forty">PennEnvironment 100% Renewable Infographic</h2> 
      <h2 className="forty">Overview</h2>
      <p>Over the summer I created an infographic for PennEnvironment as a way to keep designing even though school was over and because I wanted to contribute to the environmental movement. During high school I did various forms of <a href="https://conliuart.wixsite.com/portfolio/art-as-service">environmental activism</a> with the local borough but this time I wanted to use my skills for a professional nonprofit organization.</p>
      <h2 className="forty">Process</h2>
       <p>At the beginning of the project I first went to the PennEnvironment office to discuss what content they wanted in the infographic. I was provided with a couple documents that contained an overview of the Bill and I organized the most important/relevant information into a document. Then, I drafted what the infographic would look like through a sketch. I then sent that to the outreach director and received feedback on the design and content. I also drafted the colors in a low fidelity mockup. Below is the first iteration:</p>
         <img src="penn1.png" img alt="design sketches"/>
         <img src="penn2.png" img alt="color mockup"/>
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
      <Bottom
      nextproject="Heart-Tube-Heart, Experimental Design"
      next="https://medium.com/@connie_liu/heart-tube-heart-designing-a-connector-for-storytelling-d49b1767a0b3"
      />
      <Footer
      />
    </div>
    </div>
  )
}
export default Visual;

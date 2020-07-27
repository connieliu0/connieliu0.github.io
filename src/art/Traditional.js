import '../App.css';
import Footer from '../functions/Footer.js';
import ProjHead from "../functions/ProjHead.js";
import ImageGallery from 'react-image-gallery';
import React from 'react';

const illust = [
  { original: 'trad/Blossoming.jpg'},
  { original: 'trad/DSC_3581.jpg'},
  { original: 'trad/OpeningUp.jpg'},
  { original: 'trad/SuburbanSprawl.jpg'},
  { original: 'trad/Vegetation.jpg'},
  { original: 'trad/forgetmenot.png'},
  { original: 'trad/touch.png'}
];
const art = [
  { original: 'trad/Light.JPG'},
  { original: 'trad/oldgrowth.jpg'},
  { original: 'trad/statue.jpg'},
  { original: 'trad/Blessed.jpg'}
];
function Traditional(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
        <div className="projmargins">
          <ProjHead
          title="Traditional Illustrations"
          description="Themed Portfolio"
          timeline="2017-2019"
          image=""
          role="Award"
          team="Fourth image- Scholastic Gold Key"
          tools="Oil, Watercolor, Ink, Gouache,Pencil"
          />
         <p>My set of pieces “Floral Epoch” is centered around facets of vulnerability, especially as they manifest during teenage years. Usually, we characterize vulnerability as a source of shame. It’s embarrassing to cry in front of our friends and it’s scary to admit that we’re not okay. However, by symbolizing different vulnerabilities as plants in my work, I seek to show that it’s a natural and necessary part of living that shouldn’t be ignored. I hope that after people view my portfolio, they embrace their vulnerabilities as natural facets of themselves. Fourth image has won a Scholastic Gold Key.</p>
          <ImageGallery items={illust} />
          <ProjHead
          title="Traditional Art"
          description="Observational/Realistic Art"
          timeline="2015-2019"
          image=""
          role="Award"
          team="Scholastic Gold and Silver Keys"
          tools="Oil, Pencil, Colored Pencil"
          />
        <p>Various traditional art pieces focused on realism and technical skill. Some have won Gold and Silver Keys.</p>
          <ImageGallery items={art} />
          <h1>Process Images</h1>
        </div>
        <div className="center">
          <img src="dig/wip1.jpg" alt = "wip1"/>
          <img src="dig/wip2.jpg" alt = "wip2"/>
        </div>
        </div>
      <Footer
      />
    </div>
  )
}
export default Traditional;

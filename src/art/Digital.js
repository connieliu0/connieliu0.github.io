import React from 'react';
import '../App.css';
import Footer from '../functions/Footer.js';
import ProjHead from "../functions/ProjHead.js";
import ImageGallery from 'react-image-gallery';

const art = [
  { original: 'dig/wallflower.jpg'},
  { original: 'dig/life.jpg'},
  { original: 'dig/rain.jpg'},
  { original: 'dig/sea.jpg'},
  { original: 'dig/magic.png'},
  { original: 'dig/penny.png'}
];
function Digital(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
        <div className="projmargins">
          <ProjHead
            title="Digital Illustrations"
            details="2017-19 | Photoshop/Paint Tool Sai"
            blurb= "Various digital illustrations I did for fun. First image has won a Scholastic Gold Key."
          />
          <ImageGallery items={art} />
        </div>
        </div>
      <Footer
      />
    </div>
  )
}
export default Digital;

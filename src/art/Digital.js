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
  { original: 'dig/penny.png'},
  { original: 'dig/pic1.jpg'}

];
function Digital(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
        <div className="projmargins">
        <ProjHead
           title="Digital Illustrations"
           description=""
           timeline="2017-2019"
           image=""
           role="Award"
           team="First image- Scholastic Gold Key"
           tools="Photoshop, Paint Tool Sai"
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

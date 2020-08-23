import '../App.css';
import Footer from '../functions/Footer.js';
import ProjHead from "../functions/ProjHead.js";
import ImageGallery from 'react-image-gallery';
import React from 'react';

const images = [
  { original: 'comic/cover.jpg'},
  { original: 'comic/p1.jpg'},
  { original: 'comic/p2.jpg'},
  { original: 'comic/p3.jpg'},
  { original: 'comic/p4.jpg'},
  { original: 'comic/p5.jpg'},
  { original: 'comic/p6.jpg'}
];
function Comics(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
        <div className="projmargins">
        <ProjHead
           title="A Particular Feeling"
           description="an abstract comic about feelings and literature"
           timeline="December 2018, 2 days"
           image=""
           role="Award"
           team="National Scholastic Arts and Writing Silver Medal"
           tools="Photoshop, Paint Tool Sai"
            />

          <ImageGallery items={images} />
        </div>
        </div>
      <Footer
      />
    </div>
  )
}
export default Comics;

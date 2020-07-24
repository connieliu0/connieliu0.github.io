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
            details="Comic | December 2018 | Photoshop/Paint Tool Sai | National Scholastic Arts and Writing Silver Medal"
            blurb= "A comic I made articulating my feelings about experiencing art and how viewing art hits me close to home as an artist. As for the process the script was typed out and then the sequence of images was thumb nailed physically with pen."
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

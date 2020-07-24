import React from 'react';
import Thumbnail from '../Thumbnail.js'; // Import the Thumbnail component
import '../App.css';
import Footer from '../functions/Footer.js';
function Art(props) {
    return (
      // Render a Thumbnail component
      <div>
      <div className="bodytext">
      <div className="titledesc">
    </div>
          <hr/><h2>Art</h2>
          <p class="center">Illustrations and non-linear narratives.</p>
        <div className="row">
          <Thumbnail
            link="/comics"
            image= "images/comic.png"
            title="A Particular Feeling (comic)"
            description="Photoshop/Paint Tool Sai"
          />

          <Thumbnail
            link="/traditional"
            image="images/traditional.png"
            title="Traditional Illustrations"
            description="Ink/Watercolor/Oil/Pencil"
          />

          <Thumbnail
            link="/digital"
            image="images/digital.png"
            title="Digital Illustrations"
            description="Photoshop/Paint Tool Sai"
          />
          <Thumbnail
            link="/editorial"
            image= "images/editorial.png"
            title="Editorial Work"
            description="Paint Tool Sai"
          />
        </div>
      </div>
      <Footer
      />
    </div>
    )
}

export default Art;

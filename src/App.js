import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Design from './Design.js';
import CreativeCode from './fun/CreativeCode.js';
import Art from './art/Art.js';
import About from './About.js';
import Comics from './art/Comics.js';
import Traditional from './art/Traditional.js';
import Digital from './art/Digital.js';
import Editorial from './art/Editorial.js';
import Auxilio from './Auxilio.js';
import UXCase from './UXCase.js';
import Visual from './Visual.js';
import Habitat from './Habitat.js';
import Arcade from './Arcade.js';
import Twitter from './Twitter.js';
import Fun from './fun/Fun.js';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
      <div className="header">
        <div className="navigation">
        <h1>Connie Liu</h1>
            <Link to="/" className="item">Design</Link>
            <Link to="/code" className="item">Code</Link>
            <Link to="/art" className="item">Art</Link>
            <Link to="/about" className="item">About</Link>
            <div className="navigation-sub">
          </div>
          <Route exact path="/" component={Design} />
          <Route path="/art" component={Art} />
          <Route path="/code" component={Fun} />
          <Route path="/about" component={About} />
        </div>
        </div>
        <Route path="/comics" component={Comics} />
        <Route path="/traditional" component={Traditional} />
        <Route path="/digital" component={Digital} />
        <Route path="/editorial" component={Editorial} />
        <Route path="/auxilio" component={Auxilio} />
        <Route path="/visual" component={Visual} />
        <Route path="/creativecode" component={CreativeCode} />
        <Route path="/UXcase" component={UXCase} />
        <Route path="/arcade" component={Arcade} />
        <Route path="/twitter" component={Twitter} />
        {/* <Route path="/passiton" component={Pass} /> */}
        <Route path="/habitat" component={Habitat} />

      </div>
    </HashRouter>
  );
}

export default App;

import React from 'react';

import "./Header.css"
function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
         
          
        </nav>
        <div className="background-image"><h1>Save n Reuse</h1>
          <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          <button>Book A Table</button>
        <button>Explore Menu</button>
          
          </div>
      </header>
    </div>
  );
}

export default Header;
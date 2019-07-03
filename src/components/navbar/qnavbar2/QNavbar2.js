import React, { useState } from 'react';
import cx from 'classnames';
import './qnavbar2.scss';

export default function QNavbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header id="q-navbar-2">
        <h2 id="navbar-2-logo">Logo</h2>
        <nav>
          <ul className="nav-links-2">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <a href="#" id="navbar-cta-2"><button>Contact</button></a>
        <a href="#" id="navbar-menu-cta" onClick={() => setMenuOpen(!menuOpen)}><button>Menu</button></a>
      </header>
      <div id="mobile-menu" className={cx(
          "overlay", {
            menuOpen
          })}>
        <a href="#" className="close" onClick={() => setMenuOpen(!menuOpen)}>&times;</a>
        <div className="overlay-content">
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
        </div>
      </div>
    </>
  )
}

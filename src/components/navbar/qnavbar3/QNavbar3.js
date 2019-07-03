import React, { useState } from 'react';
import cx from 'classnames';
import './qnavbar3.scss';

export default function QNavbar3() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="q-navbar-3">
      <h2 id="navbar-3-logo">Logo</h2>
      <nav>
        <ul className="nav-links-3">
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <a href="#" id="navbar-cta-3"><button>Contact</button></a>
    </header>
  )
}

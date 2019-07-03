import React, { useState } from 'react';
import cx from 'classnames';
import './qnavbar5.scss';

export default function QNavbar5() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header id="q-navbar-5">
        <h2 id="navbar-5-logo">Logo</h2>
        <nav>
          <ul className="nav-links-5">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

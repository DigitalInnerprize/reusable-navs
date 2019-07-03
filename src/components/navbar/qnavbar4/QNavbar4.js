import React, { useState } from 'react';
import './qnavbar4.scss';

export default function QNavbar4() {
  return (
    <>
      <header id="q-navbar-4">
        <h2 id="navbar-4-logo">Logo</h2>
        <nav>
          <ul className="nav-links-4">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

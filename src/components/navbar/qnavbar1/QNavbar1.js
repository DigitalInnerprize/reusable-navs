import React, { useState } from 'react';
import cx from 'classnames';
import './qnavbar1.scss';

export default function QNavbar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="q-navbar-1">
      <nav>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={cx(
          "nav-links-1", {
            menuOpen
          })}>
          <li className={cx({
            fade: menuOpen
          })}><a href="#">About</a></li>
          <li className={cx({
            fade: menuOpen
          })}><a href="#">Projects</a></li>
          <li className={cx({
            fade: menuOpen
          })}><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

import React, { useEffect } from 'react';
import QNavbar1 from '../navbar/qnavbar1/QNavbar1';
import QNavbar2 from '../navbar/qnavbar2/QNavbar2';
import QNavbar3 from '../navbar/qnavbar3/QNavbar3';
import QNavbar4 from '../navbar/qnavbar4/QNavbar4';
import QNavbar5 from '../navbar/qnavbar5/QNavbar5';

import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'Navbars';
  })
  return (
    <div className="App">
      <QNavbar1 />
      <QNavbar2 />
      <QNavbar3 />
      <QNavbar4 />
      <QNavbar5 />
    </div>
  );
}

export default App;

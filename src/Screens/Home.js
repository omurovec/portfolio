import React, { useEffect, useState } from 'react';
import { Icosahedron } from '../Components';

export default function Home() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [loading, setLoading] = useState(true);
  const FIRST_NAME = 'Owen';
  const LAST_NAME = 'Murovec';

  useEffect(() => {
    if (loading) {
      initIso();
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    if (fName.length !== FIRST_NAME.length) {
      setTimeout(() => {
        setFName(fName + FIRST_NAME[fName.length]);
      }, 50);
    } else if (lName.length !== LAST_NAME.length) {
      setTimeout(() => {
        setLName(lName + LAST_NAME[lName.length]);
      }, 50);
    }
  }, [fName, lName]);

  function initIso() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    if (width >= height) {
      Icosahedron('#canvas', { width: height / 2, height: height / 2 });
    } else {
      Icosahedron('#canvas', { width: width, height: width });
      document.getElementById('canvas').style.transform = 'scale(0.6)';
    }
  }

  return (
    <div className="page" id="home">
      <div className="name">
        <h1>
          {fName}&nbsp;
          <br />
          {lName}&nbsp;
        </h1>
      </div>
      <div id="canvas" />
    </div>
  );
}

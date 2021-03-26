import React, { useState } from 'react';
import Profile from '../assets/profile.png';

export default function About() {
  const [matrixStyles, setMatrixStyles] = useState({ display: 'none' });

  const fontSettings = {
    fontRatio: 0.651,
    numCols: 30,
    numRows: 15,
  };

  const animateMatrix = () => {
    const matrixElem = document.getElementById('matrix');
    setInterval(() => {
      const matrix = matrixElem.innerHTML.split('<br>');
      const col = Math.floor(Math.random() * matrix[0].length);
      const row = Math.floor(Math.random() * (matrix.length - 1));

      matrix[row] =
        matrix[row].substr(0, col) +
        Number(!Number(matrix[row].charAt(col))) +
        matrix[row].substr(col + 1);
      matrixElem.innerHTML = matrix.reduce((acc, elem) => acc + '<br>' + elem);
    }, 10);
  };

  const initMatrix = () => {
    const profileImage = document.getElementById('profile-image');
    const styles = getComputedStyle(profileImage);
    const width = Number(styles.getPropertyValue('width').slice(0, -2));
    const height = Number(styles.getPropertyValue('height').slice(0, -2));
    const lineHeight = height / fontSettings.numRows;
    const fontSize = Math.round(lineHeight * 0.6);
    const letterSpacing =
      width / fontSettings.numCols - fontSize * fontSettings.fontRatio;
    setMatrixStyles({
      lineHeight: String(lineHeight) + 'px',
      fontSize: String(fontSize) + 'px',
      letterSpacing: String(letterSpacing) + 'px',
    });
    animateMatrix();
  };

  return (
    <div className="page" id="about">
      <div className="container">
        <div className="about">
          <div>
            <h2>About Me</h2>
            <p>
              I'm a developer who's driven to bring new, innovative ideas to
              life. I started my journey in highschool where I learned basic web
              development and continued my studies at UBC Okanagan. Outside of
              classes I spent a majority of my free time learning up to date
              frameworks and tools to improve my abilities. I am currently
              working to finish my degree while doing freelance work and
              building personal projects on the side. I specialize in Front-end
              React development and recently I've been working in the DEFI space
              to help build the future of finance.
            </p>
          </div>
        </div>
        <div className="profile">
          <img
            src={Profile}
            alt="Profile"
            id="profile-image"
            onLoad={initMatrix}
          />
          <p style={matrixStyles} id="matrix">
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
            000000000000000000000000000000
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

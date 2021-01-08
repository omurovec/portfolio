import React, { useState } from 'react';
import Profile from '../assets/profile.png';

export default function About() {
  const [matrixStyles, setMatrixStyles] = useState({display: "none"});

  const fontSettings = {
    fontRatio: 0.651,
    numCols: 30,
    numRows: 15
  };

  const animateMatrix = () => {
    const matrixElem = document.getElementById("matrix");
    setInterval(() => {
      const matrix = matrixElem.innerHTML.split("<br>");
      const col = Math.floor(Math.random()*matrix[0].length);
      const row = Math.floor(Math.random()*(matrix.length-1));
      
      matrix[row] = matrix[row].substr(0, col) + Number(!Number(matrix[row].charAt(col))) + matrix[row].substr(col+1);
      matrixElem.innerHTML = matrix.reduce((acc, elem) => acc + "<br>" + elem);
    }, 10);
  }

  const initMatrix = () => {
    const profileImage = document.getElementById("profile-image");
    const styles = getComputedStyle(profileImage);
    const width = Number(styles.getPropertyValue("width").slice(0, -2));
    const height = Number(styles.getPropertyValue("height").slice(0, -2));
    const lineHeight = height / fontSettings.numRows;
    const fontSize = Math.round(lineHeight * 0.6);
    const letterSpacing = width / fontSettings.numCols - fontSize * fontSettings.fontRatio;
    setMatrixStyles({
      lineHeight: String(lineHeight) + "px",
      fontSize: String(fontSize) + "px",
      letterSpacing: String(letterSpacing) + "px"
    });
    animateMatrix();
  }
    
  return (
      <div className="page" id="about">
        <div className="container">
          <div className="about">
            <div>
              <h2>About Me</h2>
              <p>
                I’m a growing web developer with a mathematical brain
                and an artistic point of view. My interest in
                programming largely stems from my fascination with
                the way things work and my desire to understand how things
                operate behind the scenes. Once I learned how to write programs in
                highschool it gave me a new perspective and I knew that
                I needed to learn more. Since then, I have continued to
                research Computer Science and spend time challenging myself with
                new projects and concepts. One day I hope to use my skills to
                build solutions that solve large scale, real world problems.
              </p>
            </div>
          </div>
          <div className="profile">
            <img src={Profile} alt="Profile" id="profile-image" onLoad={initMatrix}/>
            <p style={matrixStyles} id="matrix">
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
              000000000000000000000000000000<br/>
            </p>
          </div>
        </div>
    </div>
  )
}

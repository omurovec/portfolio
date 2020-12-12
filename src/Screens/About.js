import React from 'react';
import Profile from '../assets/profile.png';

export default function About() {
    
  return (
      <div className="page" id="about">
        <div className="container">
          <div className="about">
            <div>
              <h2>About Me</h2>
              <p>
                  I’m a growing web developer with a mathematical brain
                  and an artistic point of view. My interest in
                  programming stemmed from my fascination with
                  the way things work and wanting to take a look behind
                  the curtain. Once I learned how to build programs in
                  highschool it gave me a new perspective and I knew that
                  this is what I wanted to do for a living. I come from a
                  family of builders and I aspire to use that foundation
                  to build new solutions that solve large scale problems in
                  the world of tech.
              </p>
            </div>
          </div>
          <div className="profile">
              <img src={Profile} alt="Profile"/>
          </div>
        </div>
    </div>
  )
}

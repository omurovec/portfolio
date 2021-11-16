import React, { useState, useRef, useEffect } from 'react';
import { Matrix } from '.';
import Profile from '../assets/profile.png';

export default function About() {
  const profileContainer = useRef();
  const [matrixSize, setMatrixSize] = useState();

  useEffect(() => {
    if (profileContainer.current) {
      const width = profileContainer.current.offsetWidth;
      const height = profileContainer.current.offsetHeight;
      setMatrixSize(Math.min(width, height));
    }
  }, [profileContainer]);

  return (
    <div className="page" id="about">
      <div className="container">
        <div className="about">
          <h2>About</h2>
          <p>
            I’m a Front-End Developer in the growing Web3 ecosystem and I’ve
            been working on projects relating to DeFi, NFTs and DAOs since early
            2021. Before learning about decentralization I spent time working in
            the traditional Web2 space where I focused heavily on creating
            attractive, functional interfaces using a wide range of front-end
            technologies and frameworks. Currently I am building{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://increment.finance"
            >
              Increment
            </a>
            , a decentralized exchange rate protocol with a hope to make
            decentralized finance more global.
          </p>
        </div>
        <div className="profile" ref={profileContainer}>
          <img src={Profile} alt="Profile" id="profile-image" />
          <Matrix
            fontRatio={0.66}
            density={25}
            refreshRate={20}
            size={matrixSize}
          />
        </div>
      </div>
    </div>
  );
}

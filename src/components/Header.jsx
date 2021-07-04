import React, { useState, useEffect } from 'react';
import Toggle from '../assets/toggle.svg';
import ToggleClose from '../assets/toggle-close.svg';
import './Header.scss';

export default function Header() {
  const [pageState, setPageState] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function scrollTo(pageID) {
    let posY = document.getElementById(pageID).offsetTop;
    setExpanded(false);
    window.scrollTo(0, posY);
  }

  function handleScroll() {
    let posY = window.scrollY;
    let pageBuffer = window.innerHeight / 2;

    if (posY < document.getElementById('about').offsetTop - pageBuffer) {
      setPageState(0);
    } else if (
      posY <
      document.getElementById('portfolio').offsetTop - pageBuffer
    ) {
      setPageState(1);
    } else if (
      posY <
      document.getElementById('contact').offsetTop - pageBuffer
    ) {
      setPageState(2);
    } else {
      setPageState(3);
    }
  }

  return (
    <div id="header">
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
        id="toggle"
      >
        <img src={expanded ? ToggleClose : Toggle} alt="toggle" />
      </button>
      <div className={expanded ? 'expanded container' : 'collapsed container'}>
        <button
          className="page-link"
          onClick={() => {
            scrollTo('home');
          }}
        >
          {pageState === 0 ? <b>Home</b> : 'Home'}
        </button>
        <button
          className="page-link"
          onClick={() => {
            scrollTo('about');
          }}
        >
          {pageState === 1 ? <b>About</b> : 'About'}
        </button>
        <button
          className="page-link"
          onClick={() => {
            scrollTo('portfolio');
          }}
        >
          {pageState === 2 ? <b>Portfolio</b> : 'Portfolio'}
        </button>
        <button
          className="page-link"
          onClick={() => {
            scrollTo('contact');
          }}
        >
          {pageState === 3 ? <b>Contact</b> : 'Contact'}
        </button>
      </div>
    </div>
  );
}

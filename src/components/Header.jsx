import React, { useState, useEffect } from 'react';
import Toggle from '../assets/toggle.svg';
import ToggleClose from '../assets/toggle-close.svg';

export default function Header() {
  const [pageState, setPageState] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = ['Home', 'About', 'Portfolio', 'Contact'];

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

    if (posY > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    for (let i = 0; i < sections.length; i++) {
      if (
        posY <
        document.getElementById(sections[i].toLowerCase()).offsetTop +
          pageBuffer
      ) {
        setPageState(i);
        break;
      }
    }
  }

  return (
    <div id="header" className={scrolled ? 'scrolled' : null}>
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
        id="toggle"
      >
        <img src={expanded ? ToggleClose : Toggle} alt="toggle" />
      </button>
      <div className={expanded ? 'expanded container' : 'collapsed container'}>
        {sections.map((name, index) => (
          <button
            key={name}
            className={`page-link ${pageState === index ? 'selected' : ''}`}
            onClick={() => {
              scrollTo(name.toLowerCase());
            }}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

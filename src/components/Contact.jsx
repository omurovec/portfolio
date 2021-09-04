import React from 'react';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import PaperPlane from '../assets/paper-plane.svg';

export default function Contact() {
  const mailTo = () => {
    window.location.href = 'mailto:owen@murovec.me';
  };

  return (
    <div className="page" id="contact">
      <img
        className="button"
        onClick={() => {
          window.open('https://github.com/omurovec');
        }}
        src={Github}
        alt="Github logo"
        target="_blank"
        rel="noopener noreferrer"
      />
      <img
        className="button"
        onClick={() => {
          window.open('https://www.linkedin.com/in/owen-murovec/');
        }}
        src={Linkedin}
        alt="Linkedin logo"
        target="_blank"
        rel="noopener noreferrer"
      />
      <img className="plane" src={PaperPlane} alt="plane" onClick={mailTo} />
    </div>
  );
}

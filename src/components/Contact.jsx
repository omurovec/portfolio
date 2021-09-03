import React from 'react';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import PaperPlane from '../assets/paper-plane.svg';

export default function Contact() {
  return (
    <div className="page" id="contact">
      <img
        className="button"
        onClick={() => {
          window.open('https://github.com/omurovec');
        }}
        src={Github}
        alt="Github logo"
      />
      <img
        className="button"
        onClick={() => {
          window.open('https://www.linkedin.com/in/owen-murovec/');
        }}
        src={Linkedin}
        alt="Linkedin logo"
      />
      <img className="plane" src={PaperPlane} alt="plane" />
    </div>
  );
}

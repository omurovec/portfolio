import React, {useState} from 'react';
import Background from '../assets/background.png';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import iPhone from '../assets/iPhone-body.png';
import Link from '../assets/link.svg';

export default function Portfolio() {
    
  return (
    <div className="page" id="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <div>
            <img className="background" src={Background} alt="background"/>
            <Carousel/>
        </div>
      </div>
    </div>
  )
}

const Carousel = (data) => {
  const [panelInd, setPanelInd] = useState(0);
  const entries = [
    {
      video: "geoguesser.mp4",
      title: "GeoQuiz",
      desc: "The idea behind this project was to recreate the popular web game GeoGuessr as a native mobile app and one of the first large-scale applications I've designed and developed on my own. Built using React Native and Redux for the front end and TypeScript/Node with Firebase for the backend services. One of the most challenging aspects of this project was making the tool to generate random streetview locations within a GeoPoint polygon which can be found at the link below.",
      links: [
        {
          name: "StreetView Location Generator",
          link: "https://github.com/omurovec/geoquiz-map-tool"
        }
      ]
    },
    {
      video: "omdb.mp4",
      title: "Open Movie DB Nomination Service",
      desc: "This is a simple web application using the Open Movie Database that allows users to nominate up to 5 of their favourite movies. Search results are updated as the user types, nominations are stored in local storage, and users can click on a result to see more info. This site and source code can be found in the links below.",
      links: [
        {
          name: "Live Website",
          link: "https://omurovec.github.io/OMDB-frontend/"
        },
        {
          name: "Source Code",
          link: "https://github.com/omurovec/OMDB-frontend"
        }
      ]
    }
  ];

  function incPanel(i) {
    if(panelInd===0&i<0) {
      setPanelInd(entries.length-1);
    }else if(panelInd===entries.length-1&i>0) {
      setPanelInd(0);
    }else {
      setPanelInd(panelInd + i);
    }
  }

  return (
    <div className="panel">
      <div className="phone-container">
        <img
          src={ArrowLeft}
          className="arrow left"
          alt="arrowL"
          onClick={() => incPanel(-1)}
        />
        <img
          src={iPhone}
          className="phone-body"
          alt="iphone"
        />
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          src={require(`../assets/${entries[panelInd].video}`)}
          className="phone-video"
          alt="phoneVideo"
        >
        </video>
        <img
          src={ArrowRight}
          className="arrow right"
          alt="arrowR"
          onClick={() => incPanel(1)}
        />
      </div>
      <div className="text-container">
        <h2>{entries[panelInd].title}</h2>
        <p>{entries[panelInd].desc}</p>
        {entries[panelInd].links?.map((item) => 
          <div className="link" key={item.name}>
            <img src={Link} alt="link"/>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

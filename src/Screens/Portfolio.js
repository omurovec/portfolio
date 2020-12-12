import React, {useState} from 'react';
import Background from '../assets/background.png';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';

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
      img: "iphone-test.png",
      title: "GeoQuiz",
      desc: "this is a description"
    },
    {
      img: "purplr-test.png",
      title: "Purplr",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed nulla at diam vestibulum dictum ut vitae diam. Donec malesuada augue in auctor euismod. Morbi sodales volutpat lacus ac cursus. Suspendisse consectetur lectus ac lorem finibus interdum. Nulla facilisi. Duis mattis ligula ex, ac rutrum lorem luctus quis. Nullam elementum condimentum quam. Phasellus pharetra consequat libero, et feugiat ligula placerat a."
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
          src={require(`../assets/${entries[panelInd].img}`)}
          className="phone"
          alt="phoneImage"
        />
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
      </div>
    </div>
  );
}

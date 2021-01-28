import React, { useState, useEffect } from 'react';
import Background from '../assets/background.png';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import iPhone from '../assets/iPhone-body.png';
import Link from '../assets/link.svg';
import { firestore, storage } from '../Firebase';

export default function Portfolio() {
  return (
    <div className="page" id="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="slide">
          <img className="background" src={Background} alt="background" />
          <Carousel />
        </div>
      </div>
    </div>
  );
}

const Carousel = (data) => {
  const [panelInd, setPanelInd] = useState(0);
  const [entries, setEntries] = useState(0);

  useEffect(() => {
    let subscribed = true;
    if (!entries) {
      firestore
        .collection('entries')
        .get()
        .then((snapshot) => {
          let results = [];
          snapshot.forEach((doc) => {
            results.push(doc.data());
          });
          if (subscribed) {
            setEntries(results);
          }
        })
        .catch((err) => console.warn(err));
    }
    return () => {
      subscribed = false;
    };
  }, [entries]);

  function incPanel(i) {
    if ((panelInd === 0) & (i < 0)) {
      setPanelInd(entries.length - 1);
    } else if ((panelInd === entries.length - 1) & (i > 0)) {
      setPanelInd(0);
    } else {
      setPanelInd(panelInd + i);
    }
  }

  return entries ? (
    <div className="panel">
      <div className="phone-container">
        <img
          src={ArrowLeft}
          className="arrow left"
          alt="arrowL"
          onClick={() => incPanel(-1)}
        />
        <img src={iPhone} className="phone-body" alt="iphone" />
        <PhoneVideo videoRef={entries[panelInd].videoRef} />
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
        {entries[panelInd].links?.map((item) => (
          <div className="link" key={item.name}>
            <img src={Link} alt="link" />
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="panel loading-container">
      <div className="loader" />
    </div>
  );
};

const PhoneVideo = ({ videoRef }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let subscribed = true;
    storage
      .ref(videoRef)
      .getDownloadURL()
      .then((result) => {
        if (subscribed) {
          setSrc(result);
        }
      })
      .catch((err) => {
        console.warn(err);
      });
    return () => {
      subscribed = false;
    };
  }, [videoRef]);

  return src ? (
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      src={src}
      className="phone-video"
      alt="phoneVideo"
    ></video>
  ) : (
    <div className="phone-video">
      <div className="loader" />
    </div>
  );
};

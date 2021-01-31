import React, { useState, useEffect } from 'react';
import Background from '../assets/background.png';
import iPhone from '../assets/iPhone-body.png';
import Link from '../assets/link.svg';
import { firestore, storage } from '../Firebase';
import { Carousel } from '../Components';

export default function Portfolio() {
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

  return (
    <div className="page" id="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <img className="background" src={Background} alt="background" />
        {entries ? (
          <Carousel
            data={entries}
            renderItem={(entry) => (
              <>
                <div className="phone-container">
                  <img src={iPhone} className="phone-body" alt="iphone" />
                  <PhoneVideo videoRef={entry.videoRef} />
                </div>
                <div className="text-container">
                  <h2>{entry.title}</h2>
                  <p>{entry.desc}</p>
                  {entry.links?.map((item) => (
                    <div className="link" key={item.name}>
                      <img src={Link} alt="link" />
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          />
        ) : (
          <div className="loading-container">
            <div className="loader" />
          </div>
        )}
      </div>
    </div>
  );
}

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

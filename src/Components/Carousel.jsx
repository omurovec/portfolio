import React, { useState } from 'react';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';

function Carousel(props) {
  const [ind, setInd] = useState(1);
  // Non Re-rendering variables
  const screenWidth = window.innerWidth;
  let startX = null;
  let x = null;
  const getSlide = () => document.querySelector('.slide');
  const getLeft = () => document.querySelector('.faux-slide.left');
  const getRight = () => document.querySelector('.faux-slide.right');
  const transform = (trans, scale, percent) =>
    `translateX(${trans}%) scale(${0.9 + scale / 10})`;

  const dragStart = (e) => {
    startX = e.touches[0].screenX;
  };

  const drag = (e) => {
    x = e.touches[0].screenX;
    const slide = getSlide();
    const left = getLeft();
    const right = getRight();
    const percent = (x - startX) / screenWidth;

    // Set transformations
    slide.style.transform = transform(0 + percent * 100, 1 - Math.abs(percent));
    right.style.transform = transform(100 + percent * 100, -percent);
    left.style.transform = transform(-100 + percent * 100, percent);
    console.log('dragging');
  };

  const dragEnd = (e) => {
    const slide = getSlide();
    const left = getLeft();
    const right = getRight();
    const percent = (x - startX) / screenWidth;

    const reset = () => {
      // Reset stack without animations
      slide.style.transition = 'all ease-in-out 0ms';
      right.style.transition = 'all ease-in-out 0ms';
      left.style.transition = 'all ease-in-out 0ms';
      slide.style.transform = null;
      right.style.transform = null;
      left.style.transform = null;
      setTimeout(() => {
        // Reset to original transition times
        slide.style.transition = null;
        right.style.transition = null;
        left.style.transition = null;
      }, 200);
    };

    // Set transformations
    if (percent > 0.15) {
      // Swipe Right
      slide.style.transform = transform(100, 0);
      right.style.transform = transform(200, -1);
      left.style.transform = transform(0, 1);
      setTimeout(() => {
        reset();
        incInd(1);
      }, 300);
    } else if (percent < -0.15) {
      // Swipe Left
      slide.style.transform = transform(-100, 0);
      right.style.transform = transform(0, 1);
      left.style.transform = transform(-200, -1);
      setTimeout(() => {
        reset();
        incInd(-1);
      }, 300);
    } else {
      // No Swipe
      slide.style.transform = transform(0, 1);
      right.style.transform = transform(100, 0);
      left.style.transform = transform(-100, 0);
    }
  };

  const incInd = (i) => {
    if ((ind === 0) & (i < 0)) {
      setInd(props.data.length - 1);
    } else if ((ind === props.data.length - 1) & (i > 0)) {
      setInd(0);
    } else {
      setInd(ind + i);
    }
  };

  return (
    <div
      className="faux-carousel"
      onTouchStart={dragStart}
      onTouchMove={drag}
      onTouchEnd={dragEnd}
    >
      <div className="faux-slide left" />
      <div className="slide">
        <img
          src={ArrowLeft}
          alt="arrowL"
          className="arrow left"
          onClick={() => {
            incInd(-1);
          }}
        />

        {props.renderItem(props.data[ind])}
        <img
          src={ArrowRight}
          alt="arrowR"
          className="arrow right"
          onClick={() => {
            incInd(1);
          }}
        />
      </div>
      <div className="faux-slide right" />
    </div>
  );
}

export default Carousel;

import React, { useEffect, useRef, useState } from 'react';

export default function Matrix({ fontRatio, density, refreshRate, size }) {
  const [matrixStyles, setMatrixStyles] = useState({ display: 'none' });
  const matrix = useRef();

  useEffect(() => {
    if (matrix.current && fontRatio && density && refreshRate && size) {
      // Fill Matrix
      let text = '';
      for (let y = 0; y < density; y++) {
        for (let x = 0; x < density; x++) {
          text += '0';
        }
        text += '<br/>';
      }
      matrix.current.innerHTML = text;

      // Setup Matrix Styles
      const lineHeight = size / density;
      const fontSize = lineHeight * 0.6;
      const letterSpacing = size / density - fontSize * fontRatio;

      setMatrixStyles({
        lineHeight: String(lineHeight) + 'px',
        fontSize: String(fontSize) + 'px',
        letterSpacing: String(letterSpacing) + 'px',
        transform: `translateX(${fontSize / 2}px)`,
      });

      // Animate Matrix
      setInterval(() => {
        const text = matrix.current.innerHTML.split('<br>');
        const col = Math.floor(Math.random() * text[0].length);
        const row = Math.floor(Math.random() * (text.length - 1));

        text[row] =
          text[row].substr(0, col) +
          Number(!Number(text[row].charAt(col))) +
          text[row].substr(col + 1);
        matrix.current.innerHTML = text.reduce(
          (acc, elem) => acc + '<br>' + elem
        );
      }, refreshRate);
    }
  }, [matrix, fontRatio, density, refreshRate, size]);

  return <p id="matrix" ref={matrix} style={matrixStyles} />;
}

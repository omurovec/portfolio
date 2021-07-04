import React, { useRef, useEffect } from 'react';
import { Header } from './Components';
import { Home, About, Portfolio, Contact } from './Screens';
import particles from './util/particles';
import './App.scss';

function App() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      particles(ref.current);
    }
  }, [ref]);

  return (
    <div id="app" ref={ref}>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

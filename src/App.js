import React from 'react';
import { Header } from './Components';
import { Home, About, Portfolio, Contact } from './Screens';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

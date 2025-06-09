import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Features from './components/features/Features'
import Menu from './components/menu/Menu'
import Choose from './components/choose/Choose';
import Statistics from './components/statistiics/Statistics';
import Gallery from './components/gallery/Gallery';
// import Offer from './components/offer/Offer';
import Team from './components/team/Team';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
      <Choose />
      <Statistics />
      <Gallery />
      {/* <Offer /> */}
      <Team />
    </>
  );
};

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Game from './components/Game';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Game></Game>
      <Footer></Footer>
    </>
  );
}

export default App;

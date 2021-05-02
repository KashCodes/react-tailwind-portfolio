import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Header></Header>
        <About></About>
        <Project></Project>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;

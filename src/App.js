import React from 'react';
import About from './components/About/About.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Project from './components/Project/Project.jsx';
import Skills from './components/Skills/Skills.component.jsx';
import './App.css';

function App() {
  return (
    <body className="bg-indigo-900 bg-cover h-auto">
      <main className="bg-indigo-900 bg-cover h-auto">
        <Nav></Nav>
        <Header></Header>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Footer></Footer>
      </main>
    </body>
  );
}

export default App;

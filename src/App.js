import React from "react";
import "./App.css";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Image from "./assets/images/parallax/25101.webp";



// components
import MyNavBar from './components/Nav/MyNavBar.jsx';
import Header from './components/Header/Header.jsx';
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Project from './components/Project/Project.jsx';
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
    <body className="bg-indigo-900 bg-cover h-auto">
      <main className="bg-indigo-900 bg-cover h-auto">
        <MyNavBar></MyNavBar>
        <Header></Header>

        

        {/* ********************** */}
        {/* About me section */}
        {/* ********************** */}

        <div>
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={Image}
            bgImageAlt=""
            strength={-200}
          >
            <div>
              <Container className="container-box rounded">
                
                  <About />
               
              </Container>
            </div>
          </Parallax>
        </div>

        {/* ********************** */}
        {/* Skills section */}
        {/* ********************** */}

        <div>
          <Container className="container-box rounded">
            
              <hr />
              <Skills />
              
          </Container>
        </div>


      {/* ********************** */}
      {/* Projects section */}
      {/* ********************** */}

      <div>
        <Container className="container-box rounded">
         
            <hr />
            <Project />
         
        </Container>
      </div>
      
      {/* ********************** */}
      {/* Contact section */}
      {/* ********************** */}

      <div>
        <Container className="container-box rounded">
          
            <hr />
            <Contact />
         
        </Container>
      </div>
      <div>
        <hr />
        <Footer />
      </div>
      </main>
    </body>
  );
}

export default App;

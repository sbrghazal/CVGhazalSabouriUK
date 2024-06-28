import React from 'react';
import Header from './components/Header';
import CareerProfile from './components/CareerProfile';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Honors from './components/Honors';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CareerProfile />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Honors />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;

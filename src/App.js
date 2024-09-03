import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Header />
        <About />
        <Projects />
        <Contact />
      <Footer/>
    </div>
  );
}

export default App;

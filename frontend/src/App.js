import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Benefits />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

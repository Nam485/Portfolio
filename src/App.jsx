import React from 'react';
import About from './Components/About/about';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import MyWork from './Components/MyWork/MyWork';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Service/Service';
import Timeline from './Components/Timeline/Timeline';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

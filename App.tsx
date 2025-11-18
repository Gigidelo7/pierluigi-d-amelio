
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Services from './components/Services';
import Training from './components/Training';
import Testimonials from './components/Testimonials';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Biography />
        <Services />
        <Training />
        <Testimonials />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

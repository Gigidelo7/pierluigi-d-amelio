
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
      ></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-shadow-lg animate-fade-in-down" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
          Sorrisi d'Autore, Estetica d'Eccellenza
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-slate-200 mb-8" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
          L'innovazione digitale e un approccio personalizzato al servizio del tuo sorriso.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#servizi"
            className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white text-lg font-semibold rounded-full hover:bg-primary-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Scopri i Servizi
          </a>
          <a
            href="#contatti"
            className="w-full sm:w-auto px-8 py-3 bg-white text-primary-600 text-lg font-semibold rounded-full hover:bg-slate-100 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Richiedi Informazioni
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

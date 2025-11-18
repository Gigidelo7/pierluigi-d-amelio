
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-slate-600 hover:text-primary-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-primary-700">
              Dr. Pierluigi D'Amelio
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#biografia">Chi Sono</NavLink>
              <NavLink href="#servizi">Servizi</NavLink>
              <NavLink href="#formazione">Formazione</NavLink>
              <NavLink href="#contatti">Contatti</NavLink>
              <a href="#contatti" className="ml-4 px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-300 shadow-sm font-semibold">
                Prenota Visita
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-primary-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Apri menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#biografia" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50">Chi Sono</a>
            <a href="#servizi" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50">Servizi</a>
            <a href="#formazione" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50">Formazione</a>
            <a href="#contatti" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50">Contatti</a>
             <a href="#contatti" className="block w-full text-left mt-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 shadow-sm font-semibold">
                Prenota Visita
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

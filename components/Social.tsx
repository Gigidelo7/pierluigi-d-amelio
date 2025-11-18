
import React from 'react';

const Social: React.FC = () => {
  return (
    <section id="social" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1200/600?random=1')" }}>
          <div className="absolute inset-0 bg-primary-800 opacity-80"></div>
          <div className="relative grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 text-white">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Oltre il Camice</h2>
              <p className="text-lg text-primary-100 max-w-xl">
                Fuori dallo studio, la mia più grande passione è il calcio. Credo fermamente che l'equilibrio tra vita professionale e interessi personali sia fondamentale. L'impegno, la strategia e il gioco di squadra appresi sul campo sono valori che porto ogni giorno anche nel mio lavoro.
              </p>
            </div>
            <div className="md:col-span-2 flex justify-center">
               <img src="https://picsum.photos/300/300?random=2" alt="Calcio" className="rounded-full shadow-2xl border-4 border-white w-48 h-48 md:w-64 md:h-64 object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;

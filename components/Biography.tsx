
import React from 'react';

const BioPoint: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="text-slate-600">{children}</p>
        </div>
    </div>
);

const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422A12.083 12.083 0 0121 18.782V21M3 21v-2.218c0-1.02.6-1.938 1.5-2.43L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0121 18.782V21M3 21v-2.218c0-1.02.6-1.938 1.5-2.43L12 14z" />
    </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.884 5.036A9 9 0 0112 3c1.352 0 2.646.243 3.845.678M18 10a9 9 0 01-1.447 5.036M6.155 15.036A9 9 0 016 10m12 0a9 9 0 01-1.447 5.036M12 21a9 9 0 01-3.845-.678" />
    </svg>
);


const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0l-2.293-2.293a1 1 0 010-1.414l7.586-7.586a1 1 0 011.414 0z" />
    </svg>
);


const Biography: React.FC = () => {
  return (
    <section id="biografia" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Dr. Pierluigi D'Amelio</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Un professionista guidato dalla passione per l'estetica e l'innovazione, con un percorso formativo internazionale.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img 
              src="https://picsum.photos/id/1005/400/500" 
              alt="Dr. Pierluigi D'Amelio" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-3 space-y-8">
             <BioPoint icon={<GraduationCapIcon />} title="Formazione d'Eccellenza">
                Laureato con lode presso la prestigiosa Universidad Europea, ha affinato le sue competenze con corsi di perfezionamento presso la Universidade Potiguar in Brasile.
            </BioPoint>
            <BioPoint icon={<GlobeIcon />} title="Esperienza Internazionale">
                Relatore e formatore in Master di Protesi Fissa, condivide la sua expertise in chirurgia orale, implantologia e protesi digitale con colleghi in Italia e all'estero.
            </BioPoint>
            <BioPoint icon={<SparklesIcon />} title="Filosofia e Approccio">
                Ogni paziente è unico. L'obiettivo è creare un sorriso armonioso e naturale che rispecchi la personalità di chi lo indossa, utilizzando le più moderne tecnologie.
            </BioPoint>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;

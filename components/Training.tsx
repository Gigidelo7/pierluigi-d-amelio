
import React from 'react';

const Training: React.FC = () => {
    return (
        <section id="formazione" className="py-20 lg:py-28 bg-primary-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="pr-0 md:pr-12">
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Formazione e Aggiornamento Continuo</h2>
                        <p className="text-lg text-primary-200 mb-6">
                            La passione per l'odontoiatria si traduce anche nel desiderio di condividere la conoscenza. In qualità di relatore in corsi e master specialistici, contribuisco alla formazione dei professionisti del futuro, presentando le ultime innovazioni in protesi fissa e odontoiatria digitale.
                        </p>
                        <ul className="space-y-3 text-primary-100 mb-8">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Relatore in Master di Protesi Fissa
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Corsi specialistici su tecniche innovative
                            </li>
                             <li className="flex items-center">
                                <svg className="w-5 h-5 mr-2 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Focus su Chirurgia e Protesi Digitale
                            </li>
                        </ul>
                        <a href="#contatti" className="px-8 py-3 bg-white text-primary-700 text-lg font-semibold rounded-full hover:bg-slate-100 transition-transform transform hover:scale-105 duration-300 shadow-lg inline-block">
                            Contatta per Corsi
                        </a>
                    </div>
                     <div>
                        <img 
                          src="https://picsum.photos/id/10/600/400" 
                          alt="Dr. D'Amelio durante un corso di formazione" 
                          className="rounded-xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Training;


import React from 'react';
import { services } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6">
            <div dangerouslySetInnerHTML={{ __html: service.icon }} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
        <p className="text-slate-600 flex-grow">{service.description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="servizi" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Trattamenti Specialistici</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Offriamo un'ampia gamma di servizi odontoiatrici all'avanguardia, dall'estetica alla chirurgia complessa, per rispondere ad ogni esigenza.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

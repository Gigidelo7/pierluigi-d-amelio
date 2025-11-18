
import React from 'react';

const LocationCard: React.FC<{ title: string; address: string; phone: string; email: string }> = ({ title, address, phone, email }) => (
    <div className="bg-slate-50 p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-primary-700 mb-4">{title}</h3>
        <p className="text-slate-600 mb-2 flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-primary-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            {address}
        </p>
        <p className="text-slate-600 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 006.257 6.257l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
            {phone}
        </p>
        <p className="text-slate-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            {email}
        </p>
    </div>
);

const Contact: React.FC = () => {
    return (
        <section id="contatti" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Contatti e Prenotazioni</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Scegli la sede più comoda per te e contattaci per fissare un appuntamento o per qualsiasi informazione.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <LocationCard 
                            title="Sede di Montemiletto (AV)" 
                            address="Via Roma, 123, 83038 Montemiletto AV"
                            phone="+39 012 345 6789"
                            email="info.montemiletto@damelio.it"
                        />
                         <LocationCard 
                            title="Sede di Marsicovetere (PZ)" 
                            address="Piazza Garibaldi, 45, 85050 Marsicovetere PZ"
                            phone="+39 098 765 4321"
                            email="info.marsicovetere@damelio.it"
                        />
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl shadow-md">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Richiedi Informazioni</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome</label>
                                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Messaggio</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors duration-300 shadow-sm">
                                    Invia Richiesta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;


import React from 'react';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
        { name: 'Instagram', href: '#', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-4 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' },
        { name: 'LinkedIn', href: '#', icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.11 16.14V8.4h-2.1v7.74h2.1zM7.06 7.42c.7 0 1.27-.57 1.27-1.27s-.57-1.27-1.27-1.27c-.7 0-1.27.57-1.27 1.27s.57 1.27 1.27 1.27zM16.14 16.14h-2.1v-3.77c0-.9-.02-2.06-1.26-2.06-1.26 0-1.45.98-1.45 2v3.83h-2.1V8.4h2.02v.92h.03c.28-.53.96-1.1 1.99-1.1 2.13 0 2.52 1.4 2.52 3.22v3.71z' },
    ];

    return (
        <footer className="bg-slate-800 text-slate-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-white">Dr. Pierluigi D'Amelio</h3>
                        <p className="mt-2 text-sm text-slate-400 max-w-sm">
                            Specialista in Odontoiatria Estetica. Passione, competenza e innovazione al servizio del tuo sorriso.
                        </p>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#biografia" className="text-slate-400 hover:text-white transition-colors">Chi Sono</a></li>
                            <li><a href="#servizi" className="text-slate-400 hover:text-white transition-colors">Servizi</a></li>
                            <li><a href="#formazione" className="text-slate-400 hover:text-white transition-colors">Formazione</a></li>
                            <li><a href="#contatti" className="text-slate-400 hover:text-white transition-colors">Contatti</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Seguimi sui Social</h3>
                        <div className="flex mt-4 space-x-4">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors">
                                    <span className="sr-only">{link.name}</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d={link.icon} clipRule="evenodd" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Dr. Pierluigi D'Amelio. Tutti i diritti riservati.</p>
                     <p>P.IVA 1234567890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

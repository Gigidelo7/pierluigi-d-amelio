
import type { Service, Testimonial } from './types';

export const services: Service[] = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>',
    title: 'Protesi Fissa e Digitale',
    description: 'Realizziamo corone, ponti e faccette con tecnologia digitale CAD/CAM per una precisione assoluta e un risultato estetico impeccabile.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    title: 'Odontoiatria Estetica',
    description: 'Dallo sbiancamento professionale alle faccette estetiche, progettiamo il tuo sorriso ideale nel rispetto della naturalezza e armonia del volto.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>',
    title: 'Chirurgia Orale',
    description: 'Interventi di chirurgia orale, incluse estrazioni complesse e di denti del giudizio, eseguiti con tecniche mininvasive per un recupero rapido.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>',
    title: 'Implantologia',
    description: 'Sostituzione di denti mancanti con impianti in titanio osteointegrati, una soluzione fissa, duratura e funzionale come i denti naturali.',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>',
    title: 'Pedodonzia',
    description: 'Cure dentali dedicate ai più piccoli, con un approccio empatico e giocoso per garantire un\'esperienza positiva e costruire un rapporto di fiducia.',
  },
   {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    title: 'Igiene e Prevenzione',
    description: 'Programmi personalizzati di igiene orale professionale e prevenzione per mantenere la salute di denti e gengive nel tempo.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Professionalità, competenza e una grande attenzione al paziente. Il Dott. D\'Amelio mi ha restituito il sorriso che desideravo, con un risultato naturale e bellissimo.',
    name: 'Maria Rossi',
    info: 'Paziente Protesi Estetica',
    avatar: 'https://picsum.photos/id/237/100/100'
  },
  {
    quote: 'Ho affrontato un intervento di implantologia con un po\' di timore, ma lo staff mi ha messo subito a mio agio. Intervento perfetto e zero dolore. Assolutamente consigliato!',
    name: 'Giovanni Verdi',
    info: 'Paziente Implantologia',
    avatar: 'https://picsum.photos/id/238/100/100'
  },
  {
    quote: 'Finalmente un dentista che unisce tecnologia all\'avanguardia e un lato umano eccezionale. Ho apprezzato la chiarezza nelle spiegazioni e la cura in ogni dettaglio.',
    name: 'Laura Bianchi',
    info: 'Paziente Odontoiatria Estetica',
    avatar: 'https://picsum.photos/id/239/100/100'
  }
];

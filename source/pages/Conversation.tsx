import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const IRIT_LOGO_URL = "https://www.irit.fr/wp-content/uploads/2025/01/LogoUT_intitule_horizontal_2lignes_tutelles_202502.png";

export interface Interview {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  quote: string;
  content: React.ReactNode;
  sidebar: React.ReactNode;
  image?: string;
}

export const INTERVIEWS: Interview[] = [
  {
    id: '1',
    date: 'February 24, 2025',
    title: 'The Architect of Dependable Systems',
    subtitle: 'Precision in an Imprecise World',
    excerpt: 'In an era defined by complexity, Dr. Baouya is pioneering the mathematical rigor required to keep our satellites flying and our factories running.',
    quote: '"The engineering of dependable and secure systems isn\'t just a technical challenge. It is a societal imperative."',
    image: 'images/bio-photo-2.jpg',
    content: (
       <>
        <p className="text-xl leading-relaxed mb-8 text-slate-800 font-serif first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-12px]">
            In an era defined by complexity, Dr. Baouya is pioneering the mathematical rigor required to keep our satellites flying and our factories running. His work in Model-Based Engineering bridges the gap between theoretical formal methods and practical industrial application.
        </p>

        <blockquote className="border-l-4 border-black pl-6 my-10 italic text-2xl text-slate-700 leading-relaxed font-serif">
            "The engineering of dependable and secure systems isn't just a technical challenge. It is a societal imperative."
        </blockquote>

        <div className="prose prose-slate prose-lg max-w-none font-serif text-slate-800">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 mt-12">The Interview</p>
            
            <h4 className="font-bold text-xl text-black mb-3 mt-8">Your research portfolio is incredibly diverse, ranging from satellite systems to warehouse robots. Is there a common thread that ties these domains together?</h4>
            <p>
                "At their core, these are all <strong className="font-semibold">Cyber-Physical Systems (CPS)</strong>. Whether it's a satellite performing collaborative maintenance or a swarm of robots in a warehouse (like in the BRAIN-IoT project), the fundamental challenge is dependability. My work uses Model-Based Engineering and Formal Methods to mathematically guarantee that these systems behave exactly as intended, even when facing hardware faults or cyber-attacks. The context changes—from orbit to the factory floor—but the mathematical rigor remains the same."
            </p>

            <h4 className="font-bold text-xl text-black mb-3 mt-8">You recently published in the <em>Journal of Systems and Software</em> about stochastic games. How does game theory intersect with satellite dependability?</h4>
            <p>
                "Traditional verification often assumes a static environment. But in reality, systems interact—sometimes cooperatively, sometimes competitively, and sometimes against malicious actors. By modeling these interactions as <strong className="font-semibold">stochastic games</strong>, we can predict how a system like a satellite constellation or an edge server will perform under stress or attack. It allows us to design strategies that optimize for safety and energy consumption simultaneously, ensuring that collaborative maneuvers don't compromise system integrity."
            </p>

            <h4 className="font-bold text-xl text-black mb-3 mt-8">Leading projects like <em>HERMES-Design</em> and <em>ACIS-IoT</em> places you at the cutting edge of secure system design. How do you see the role of the human operator evolving?</h4>
            <p>
                "We cannot automate everything—nor should we. The 'Human-in-the-loop' is critical. My work with HERMES-Design focuses on human-centric architectural decision-making. We need systems that don't just execute commands but understand the intent and limitations of their human operators. This prevents error propagation and ensures true resilience. It's about creating a partnership between the operator and the machine."
            </p>

            <h4 className="font-bold text-xl text-black mb-3 mt-8">As a young researcher influencing the field through the ARGOS team, what is the 'Next Big Thing' for formal verification?</h4>
            <p>
                "It is the convergence of <strong className="font-semibold">Human-in-the-loop with Hardware-in-the-loop</strong>. We have excelled at verifying software models in isolation, but real-world dependability requires us to bridge the gap between abstract logic, physical hardware reality, and human decision-making. Integrating these dimensions into a unified, rigorous verification framework is the frontier I am dedicated to exploring."
            </p>
        </div>
       </>
    ),
    sidebar: (
        <ul className="space-y-8">
            <li>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">Field of Study</span>
                <span className="block font-serif text-xl leading-snug text-slate-900">Cyber-Physical Systems & Satellite Technology</span>
            </li>
            <li>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">Key Methodology</span>
                <span className="block font-serif text-xl leading-snug text-slate-900">Stochastic Games & Formal Verification</span>
            </li>
            <li>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">Current Vision</span>
                <span className="block font-serif text-xl leading-snug text-slate-900">Human-in-the-loop with Hardware-in-the-loop</span>
            </li>
        </ul>
    )
  }
];

const Conversation: React.FC = () => {
  const location = useLocation();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (location.state && (location.state as any).selectedId) {
      setSelectedId((location.state as any).selectedId);
      // Clean up state to prevent stuck navigation if needed, or leave it
      window.scrollTo(0, 0);
    }
  }, [location]);

  const selectedInterview = INTERVIEWS.find(i => i.id === selectedId);

  if (selectedInterview) {
    const avatarSrc = selectedInterview.image || IRIT_LOGO_URL;
    const avatarClass = selectedInterview.image ? "object-cover grayscale contrast-110" : "object-contain p-1 bg-white";

    return (
        <section className="bg-white border-t-4 border-black py-8 mb-8 font-serif text-slate-900 animate-in fade-in duration-500">
             {/* Navigation Back */}
            <button 
                onClick={() => setSelectedId(null)}
                className="mb-6 flex items-center text-xs font-sans font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors group px-4 sm:px-6"
            >
                <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i> Back to All Conversations
            </button>

            {/* Newspaper Header */}
            <div className="border-b-2 border-black pb-6 mb-8 flex flex-col md:flex-row justify-between items-end px-4 sm:px-6">
                <div className="mb-4 md:mb-0 max-w-3xl">
                <h6 className="font-sans font-bold text-[10px] uppercase tracking-[0.2em] mb-3 text-slate-500">Science & Technology</h6>
                <h2 className="text-3xl md:text-5xl font-bold leading-none tracking-tight text-slate-900">
                    {selectedInterview.title} <br /> <i className="font-light text-2xl md:text-4xl">{selectedInterview.subtitle}</i>
                </h2>
                </div>
                <div className="text-right font-sans flex flex-col items-end">
                <div className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 mb-1">{selectedInterview.date}</div>
                <div className="text-xs text-slate-500 italic">Featured Profile</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-4 sm:px-6">
                {/* Main Content Column */}
                <div className="lg:col-span-8">
                <div className="mb-10">
                    <div className="flex items-center gap-4 mb-6 border-b border-slate-200 pb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                            <img src={avatarSrc} alt="Dr. Abdelhakim Baouya" className={`w-full h-full ${avatarClass}`}/>
                        </div>
                        <div className="font-sans text-xs">
                            <p className="font-bold uppercase text-slate-900">By The Editorial Team</p>
                            <p className="text-slate-500">Based on recent works & publications</p>
                        </div>
                    </div>

                    {selectedInterview.content}

                    <div className="text-center my-12 border-t border-slate-200 pt-8">
                        <span className="inline-block w-3 h-3 bg-black transform rotate-45 mb-4"></span>
                        <p className="font-sans text-sm italic text-slate-500">
                            This interview has been edited for length and clarity.
                        </p>
                    </div>
                </div>
                </div>

                {/* Sidebar Column */}
                <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-8 font-sans sticky top-8 h-fit">
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">At a Glance</h4>
                    {selectedInterview.sidebar}
                    
                    <div className="mt-10 p-6 bg-slate-50 border border-slate-100 rounded-sm">
                        <h5 className="font-bold text-xs uppercase mb-3">About the Team</h5>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                            Dr. Baouya conducts his research within the <strong>ARGOS team</strong> at IRIT, focusing on rigorous software and system engineering.
                        </p>
                        <a href="https://www.irit.fr/" target="_blank" rel="noreferrer" className="text-[10px] font-bold text-primary uppercase hover:underline flex items-center">
                            Visit IRIT Lab <i className="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
  }

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-8">
         <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <span className="w-1 h-8 bg-primary rounded-full mr-3"></span>Conversations
        </h2>

        <div className="grid grid-cols-1 gap-6">
            {INTERVIEWS.map((interview) => {
                const thumbSrc = interview.image || IRIT_LOGO_URL;
                const thumbClass = interview.image ? "object-cover grayscale group-hover:grayscale-0" : "object-contain p-4 bg-white";
                return (
                    <div 
                        key={interview.id} 
                        onClick={() => setSelectedId(interview.id)}
                        className="group cursor-pointer bg-white border-b border-slate-200 pb-8 hover:bg-slate-50/50 transition-colors rounded-xl p-4"
                    >
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-48 h-32 flex-shrink-0 bg-slate-200 rounded-lg overflow-hidden border border-slate-100">
                                <img src={thumbSrc} alt={interview.title} className={`w-full h-full ${thumbClass} transition-all duration-500`} />
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">Interview</span>
                                    <span className="text-xs text-slate-500 font-medium flex items-center">
                                        <i className="far fa-calendar mr-1"></i> {interview.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                    {interview.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {interview.excerpt}
                                </p>
                                <span className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:underline decoration-primary decoration-2 underline-offset-4">
                                    Read Conversation <i className="fas fa-arrow-right ml-2 text-xs transform group-hover:translate-x-1 transition-transform"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
  );
};

export default Conversation;
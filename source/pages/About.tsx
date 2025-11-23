
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-8">
        <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mr-4 text-lg shadow-sm">
                <i className="fas fa-user"></i>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Biography</h2>
        </div>
        
        <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed text-justify">
            <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                I am an Associate Professor at the University of Toulouse - Jean Jaurès (UT2) and a researcher at the Institut de Recherche en Informatique de Toulouse (IRIT).
            </p>
            <p className="mb-6">
                My research interests lie in <strong className="text-slate-800 font-semibold">Model-Based Engineering</strong> and <strong className="text-slate-800 font-semibold">Formal Methods</strong>. I pioneer next-generation methodologies for automated verification and validation (V&V) of complex system models (AADL, BIP, UML/SysML). 
            </p>
            <p className="mb-6">
                 My work is particularly devoted to <strong className="text-slate-800 font-semibold">Model-Based Dependability Assessment</strong> of <strong className="text-slate-800 font-semibold">Cyber-Physical Systems (CPS)</strong>, including satellite platform systems. I also integrate <strong className="text-slate-800 font-semibold">human-in-the-loop</strong> considerations by modeling human operators to analyze human error propagation and situational awareness in critical operational scenarios.
            </p>
        </div>

        {/* Personal Interests Section */}
        <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
                <i className="fas fa-mug-hot text-primary mr-2"></i> Beyond Research
            </h3>
            <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-medium border border-slate-200 hover:border-primary/30 hover:bg-blue-50 transition-colors cursor-default">
                    <i className="fas fa-mountain text-slate-400 mr-2"></i> Indoor Rock Climbing
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-medium border border-slate-200 hover:border-primary/30 hover:bg-blue-50 transition-colors cursor-default">
                    <i className="fas fa-bicycle text-slate-400 mr-2"></i> Cycling
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-medium border border-slate-200 hover:border-primary/30 hover:bg-blue-50 transition-colors cursor-default">
                    <i className="fas fa-bullseye text-slate-400 mr-2"></i> Archery
                </span>
                 <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-medium border border-slate-200 hover:border-primary/30 hover:bg-blue-50 transition-colors cursor-default">
                    <i className="fas fa-swimmer text-slate-400 mr-2"></i> Swimming
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-medium border border-slate-200 hover:border-primary/30 hover:bg-blue-50 transition-colors cursor-default">
                    <i className="fas fa-hiking text-slate-400 mr-2"></i> Hiking
                </span>
            </div>
        </div>

        {/* Recent News Highlight - Professional Light Theme */}
        <div className="mt-10 bg-slate-50 rounded-2xl border border-slate-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <h3 className="relative z-10 text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center shadow-sm border border-blue-100 mr-3">
                    <i className="fas fa-newspaper text-xs"></i>
                </span>
                Latest News & Publications
            </h3>
            
            <ul className="relative z-10 space-y-4">
                <li className="flex flex-col sm:flex-row gap-4 items-start group">
                    <div className="flex-shrink-0 mt-1 w-16 text-center sm:text-left">
                        <span className="block font-bold text-xl leading-none text-primary">Jan</span>
                        <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">2026</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 w-full">
                        <p className="text-sm leading-relaxed text-slate-600">
                            <strong className="text-slate-900">A. Baouya</strong>, B. Hamid, O. Ait Mohamed, & S. Bensalem. "Model-based dependability and performance analysis for satellite systems with collaborative maintenance maneuvers via stochastic games" <em className="text-primary font-medium not-italic">Elsevier Journal of Systems and Software</em> (IF: 4.4).
                        </p>
                    </div>
                </li>
                <li className="flex flex-col sm:flex-row gap-4 items-start group">
                    <div className="flex-shrink-0 mt-1 w-16 text-center sm:text-left">
                        <span className="block font-bold text-xl leading-none text-primary">Oct</span>
                        <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">2025</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 w-full">
                        <p className="text-sm leading-relaxed text-slate-600">
                            Joined the <a href="https://gtico.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">GT ICO</a> (Groupe de travail Facteur Humain & Cybersécurité) funded by ICO.
                        </p>
                    </div>
                </li>
                <li className="flex flex-col sm:flex-row gap-4 items-start group">
                    <div className="flex-shrink-0 mt-1 w-16 text-center sm:text-left">
                        <span className="block font-bold text-xl leading-none text-primary">Mar</span>
                        <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">2025</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 w-full">
                        <p className="text-sm leading-relaxed text-slate-600">
                            <strong className="text-slate-900">A. Baouya</strong>, B. Hamid, O. Ait Mohamed, & S. Bensalem. "Detection and Mitigation of Clock Deviation in the Verification & Validation of Drone-aided Lifting Operations." <em className="text-primary font-medium not-italic">Elsevier Ad Hoc Networks</em> (IF: 4.4).
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};

export default About;

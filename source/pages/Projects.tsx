import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mr-4 text-lg shadow-sm">
                <i className="fas fa-rocket"></i>
            </div>
            Projects & Management
        </h2>

        <h3 className="text-lg font-bold text-slate-800 mt-4 mb-6 flex items-center pl-2 border-l-4 border-primary">
            Funded Projects
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {PROJECTS.map((proj) => (
                <div key={proj.id} className="flex flex-col bg-slate-50/50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:shadow-slate-200/50 hover:border-blue-200 transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">{proj.name}</h4>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{proj.duration}</span>
                        </div>
                        {proj.role && (
                            <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                                proj.role === 'Leader' 
                                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                                : 'bg-blue-100 text-blue-700 border border-blue-200'
                            }`}>
                                {proj.role}
                            </span>
                        )}
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-6">
                        {proj.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 mt-auto">
                        <div className="text-sm">
                            <span className="text-slate-400 mr-2">Funding:</span>
                            <span className="font-mono font-medium text-slate-700 bg-white px-2 py-1 rounded border border-slate-100">{proj.funding || 'N/A'}</span>
                        </div>
                        
                        {proj.url && (
                            <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-blue-700 flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors">
                                Visit Site <i className="fas fa-arrow-up-right-from-square text-xs"></i>
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>

         <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center pl-2 border-l-4 border-primary">
            Management Roles
         </h3>
         
         <div className="relative overflow-hidden p-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-sm group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-blue-200/50"></div>
             
             <div className="relative flex items-start gap-5">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-50">
                    <i className="fas fa-sitemap text-xl"></i>
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-1">Program Director</h4>
                    <p className="text-slate-700 font-medium">Bachelor of Computer Science Program, University of Toulouse - UT2</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                        <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded uppercase tracking-wide">Since Sept 2023</span>
                    </div>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed max-w-2xl">
                        Leading the academic and pedagogical coordination of the program, ensuring curriculum alignment with industry standards and research advancements.
                    </p>
                 </div>
             </div>
         </div>

    </section>
  );
};

export default Projects;

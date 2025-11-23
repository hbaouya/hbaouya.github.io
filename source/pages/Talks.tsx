import React from 'react';
import { TALKS } from '../constants';

const Talks: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center font-sans">
            <span className="w-1 h-8 bg-primary rounded-full mr-3"></span>Invited Talks
        </h2>
        
        <div className="relative border-l-2 border-slate-200 ml-3 space-y-12 pb-4">
            {TALKS.map((talk) => (
                <div key={talk.id} className="ml-8 relative group">
                    {/* Timeline dot */}
                    <span className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-primary rounded-full group-hover:bg-blue-50 transition-colors shadow-sm"></span>
                    
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow font-sans">
                        <h3 className="font-bold text-slate-900 text-lg mb-2">{talk.title}</h3>
                        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-slate-600 mb-3">
                            <span className="flex items-center">
                                <i className="fas fa-calendar-day mr-2 text-primary/70"></i>
                                {talk.date}
                            </span>
                            <span className="flex items-center">
                                <i className="fas fa-map-marker-alt mr-2 text-primary/70"></i>
                                {talk.location}
                            </span>
                        </div>
                        <p className="text-sm text-slate-700 font-medium border-l-2 border-primary/30 pl-3">
                            {talk.event}
                        </p>
                        {talk.note && (
                            <p className="text-xs text-slate-500 mt-2 italic">
                                {talk.note}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Talks;
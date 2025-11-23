
import React from 'react';
import { ACTIVITIES, REVIEWER_ACTIVITIES } from '../constants';

const Activities: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <span className="w-1 h-8 bg-primary rounded-full mr-3"></span>International Activities
        </h2>
        
        <div className="grid grid-cols-1 gap-12">
            
            {/* Program Committees & Boards */}
            <div>
                <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">
                    {ACTIVITIES.title}
                </h3>
                <ul className="space-y-6">
                    {ACTIVITIES.items.map((item, idx) => (
                        <li key={idx} className="flex items-start group">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <i className={`${item.icon}`}></i>
                            </span>
                            <div className="pt-1">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <span className="font-bold text-slate-800 block text-base">{item.role}</span>
                                    {item.url && (
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100 hover:bg-blue-100 transition-colors flex items-center">
                                            <i className="fas fa-external-link-alt mr-1 text-[10px]"></i> Visit
                                        </a>
                                    )}
                                </div>
                                {Array.isArray(item.details) ? (
                                    <ul className="space-y-1">
                                        {item.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="text-sm text-slate-600 flex items-start">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 mr-2 flex-shrink-0"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span className="text-sm text-slate-600">{item.details}</span>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Reviewer */}
            <div>
                <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">
                    Reviewer for International Journals
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {REVIEWER_ACTIVITIES.map((activity, idx) => (
                        <div key={idx} className={`p-5 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow ${idx === REVIEWER_ACTIVITIES.length - 1 ? 'md:col-span-2' : ''}`}>
                            <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                                <i className={`${activity.icon} text-primary mr-2`}></i> {activity.publisher}
                            </h4>
                            <ul className="space-y-1">
                                {activity.journals.map((journal, jIdx) => (
                                    <li key={jIdx} className="text-sm text-slate-600 flex items-start pl-2 border-l-2 border-slate-200 hover:border-primary transition-colors">
                                        {journal}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  );
};

export default Activities;

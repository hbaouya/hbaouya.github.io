import React from 'react';
import { TEACHING } from '../constants';

const Teaching: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <span className="w-1 h-8 bg-primary rounded-full mr-3"></span>Teaching Experience
        </h2>
        
        <div className="grid grid-cols-1 gap-6">
            {TEACHING.map((exp, index) => (
                <div key={index} className={`p-6 border rounded-xl transition-all hover:shadow-md ${index === 0 ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-white hover:bg-slate-50'}`}>
                    <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm ${index === 0 ? 'bg-primary text-white' : 'bg-white text-slate-500 border border-slate-100'}`}>
                            <i className={`${exp.icon} text-xl`}></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">{exp.institution}</h3>
                            <p className="text-sm text-slate-500 font-medium">{exp.role}</p>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 ml-2 md:ml-16">
                        {exp.courses.map((course, idx) => (
                             <div key={idx} className="flex items-center bg-white/50 p-2 rounded border border-transparent hover:border-slate-200 transition-colors">
                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-100 text-slate-600 text-xs font-bold rounded mr-3">
                                    {course.level}
                                </span>
                                <span className="text-slate-700 text-sm font-medium">{course.name}</span>
                             </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Teaching;
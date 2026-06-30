import React from 'react';
import { useProfileData } from '../profileDataContext';
import { motion } from 'framer-motion';

const Talks: React.FC = () => {
  const { data } = useProfileData();
  const talksList = data.talks || [];

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10 mb-8 animate-in fade-in duration-500">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-5">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mr-4 text-lg shadow-sm">
                    <i className="fa-solid fa-microphone-lines text-sm"></i>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 font-sans">Invited Talks & Seminars</h2>
                    <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-widest font-semibold">Keynotes, Lecture Series & Distinguished Seminars</p>
                </div>
            </div>
            <div className="hidden sm:block text-xs font-mono font-medium text-slate-400 bg-slate-50 border border-slate-100 rounded px-2.5 py-1">
                Total: {talksList.length} Sessions
            </div>
        </div>
        
        {/* Timeline representation */}
        {talksList.length > 0 ? (
          <div className="relative border-l-2 border-slate-100 ml-3 md:ml-6 space-y-10 pb-4">
              {talksList.map((talk, index) => {
                  const isKeynoteOrSummerSchool = talk.event.toLowerCase().includes('summer school') || talk.event.toLowerCase().includes('keynote');
                  const badgeStyle = isKeynoteOrSummerSchool 
                    ? 'bg-amber-50 text-amber-800 border-amber-200' 
                    : 'bg-blue-50/70 text-blue-800 border-blue-100';

                  return (
                      <motion.div 
                          key={talk.id || index} 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
                          className="ml-6 md:ml-10 relative group"
                      >
                          {/* Timeline Node Point - Clean, professional dot */}
                          <span className="absolute -left-[31px] md:-left-[35px] top-6 w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow-sm z-10 group-hover:scale-125 transition-transform duration-200"></span>
                          
                          {/* Academic Presentation Card */}
                          <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200/60 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 relative overflow-hidden">
                              {/* Background academic detail watermark */}
                              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full pointer-events-none -mr-4 -mt-4"></div>

                              <div className="relative z-10 flex flex-col gap-4">
                                  {/* Badges & Meta info */}
                                  <div className="flex flex-wrap items-center justify-between gap-3">
                                      <div className="flex items-center gap-2">
                                          <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${badgeStyle}`}>
                                              <i className="fa-solid fa-circle-nodes mr-1.5 opacity-70"></i>
                                              {talk.event}
                                          </span>
                                          {talk.note && (
                                              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-100">
                                                  {talk.note}
                                              </span>
                                          )}
                                      </div>
                                      
                                      <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
                                          <span className="flex items-center bg-slate-50 border border-slate-100 rounded px-2 py-0.5">
                                              <i className="far fa-calendar-alt mr-1.5 text-slate-400"></i>
                                              {talk.date}
                                          </span>
                                      </div>
                                  </div>

                                  {/* Title of Presentation */}
                                  <h3 
                                    className="font-bold text-slate-900 text-lg md:text-xl leading-snug font-serif group-hover:text-blue-600 transition-colors duration-200" 
                                    style={{ fontFamily: 'Lora, Georgia, serif' }}
                                  >
                                      {talk.title}
                                  </h3>
                                  
                                  {/* Hosting Entity Details */}
                                  <div className="flex items-start gap-2.5 text-sm text-slate-600 bg-slate-50/50 rounded-xl p-3 border border-slate-100/40">
                                      <div className="w-5 h-5 rounded bg-white border border-slate-200/80 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                          <i className="fa-solid fa-building-columns text-[10px]"></i>
                                      </div>
                                      <div>
                                          <p className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-0.5">Hosting Institution</p>
                                          <p className="text-slate-600 font-sans text-xs flex flex-wrap items-center gap-2">
                                              <span>{talk.location}</span>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </motion.div>
                  );
              })}
          </div>
        ) : (
          <p className="text-slate-400 text-center italic py-12">No invited talks or lecture sessions registered yet.</p>
        )}
    </section>
  );
};

export default Talks;

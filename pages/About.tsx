import React, { useState, useEffect } from 'react';
import { useProfileData } from '../profileDataContext';

const About: React.FC = () => {
  const { data } = useProfileData();
  const { biography } = data;
  const [fetchedNews, setFetchedNews] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/5hn4w7q8omlhy')
      .then(res => res.json())
      .then(data => setFetchedNews(data))
      .catch(err => console.error("Failed to fetch news:", err));
  }, []);

  const renderTextWithItalics = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(".*?")/g);
    return parts.map((part, i) => {
      if (part.startsWith('"') && part.endsWith('"') && part.length > 1) {
        return <span key={i} className="italic">{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const renderBiography = () => {
    if (!biography.paragraphs || biography.paragraphs.length === 0) return null;
    const firstPara = biography.paragraphs[0];
    const dropCap = firstPara.charAt(0);
    const restOfFirstPara = firstPara.slice(1);

    return (
      <div className="space-y-6 font-serif text-slate-800 leading-relaxed text-justify" style={{ fontFamily: 'Lora, Georgia, serif' }}>
        <p className="text-lg md:text-[1.125rem] leading-[1.85] text-slate-800">
          <span className="float-left text-6xl font-black text-blue-600 mr-3 mt-1.5 font-serif leading-[0.75] select-none">
            {dropCap}
          </span>
          {restOfFirstPara}
        </p>
        {biography.paragraphs.slice(1).map((para, idx) => (
          <p key={idx} className="text-base md:text-[1.05rem] leading-[1.8] text-slate-700">
            {para}
          </p>
        ))}
      </div>
    );
  };

  // Dynamic configurations
  const focusAreas = biography.focusAreas || [
    "Model-Based Engineering",
    "Formal Methods",
    "Safety-Critical Systems",
    "Human-in-the-Loop Systems"
  ];

  const pillars = biography.pillars || [
    {
      title: "Cyber-Physical Systems",
      icon: "fa-solid fa-satellite",
      description: "Ensuring the dependability and dynamic performance of critical infrastructure ranging from nanosatellites to robotic fleets."
    },
    {
      title: "Formal Verification",
      icon: "fa-solid fa-brain",
      description: "Integrating model checking, static analysis, and logic strategies to build provably correct system environments."
    },
    {
      title: "Human-in-the-Loop",
      icon: "fa-solid fa-users-gear",
      description: "Developing mathematical and logical models of human actions to model error propagation and support secure decisions."
    }
  ];

  const getPillarTheme = (idx: number) => {
    const themes = [
      {
        bg: "bg-blue-50 text-blue-600",
        hoverBg: "group-hover:bg-blue-600 group-hover:text-white",
        border: "hover:border-blue-200"
      },
      {
        bg: "bg-indigo-50 text-indigo-600",
        hoverBg: "group-hover:bg-indigo-600 group-hover:text-white",
        border: "hover:border-indigo-200"
      },
      {
        bg: "bg-emerald-50 text-emerald-600",
        hoverBg: "group-hover:bg-emerald-600 group-hover:text-white",
        border: "hover:border-emerald-200"
      }
    ];
    return themes[idx % themes.length];
  };

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10 mb-8">
        {/* Title */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-5">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mr-4 text-lg shadow-sm">
                    <i className="fas fa-university"></i>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 font-sans">Academic Biography</h2>
                    <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-widest font-semibold">Toulouse Jean Jaurès University & IRIT/CNRS</p>
                </div>
            </div>
        </div>
        
        {/* Biography Block - Monograph style */}
        <div className="relative border-l-4 border-blue-600 bg-slate-50/50 p-6 md:p-10 rounded-r-3xl border border-y-slate-100 border-r-slate-100 transition-all hover:bg-slate-50 duration-300">
            {/* Elegant academic background visual element */}
            <div className="absolute top-4 right-6 text-slate-200/40 text-7xl font-serif select-none pointer-events-none">
                <i className="fa-solid fa-quote-right opacity-10"></i>
            </div>
            
            {renderBiography()}
            
            {/* Interactive/static research domains highlight inside Biography */}
            {focusAreas.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-200/60 font-sans flex flex-wrap gap-2 text-xs">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider mr-2 self-center">Focus areas:</span>
                  {focusAreas.map((area, idx) => {
                    const pillThemes = [
                      "bg-blue-50 text-blue-700 border border-blue-100/60",
                      "bg-indigo-50 text-indigo-700 border border-indigo-100/60",
                      "bg-emerald-50 text-emerald-700 border border-emerald-100/60",
                      "bg-slate-55 text-slate-700 border border-slate-200/60"
                    ];
                    return (
                      <span key={idx} className={`${pillThemes[idx % pillThemes.length]} px-2.5 py-1 rounded-md font-medium`}>
                        {area}
                      </span>
                    );
                  })}
              </div>
            )}
        </div>

        {/* Research Core/Pillars Grid */}
        {pillars.length > 0 && (
          <div className="mt-12">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                  <span className="w-5 h-px bg-slate-200 mr-2.5"></span> Core Research Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pillars.map((pillar, idx) => {
                    const theme = getPillarTheme(idx);
                    return (
                      <div key={idx} className={`bg-white border border-slate-100 p-6 rounded-2xl ${theme.border} hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 group`}>
                          <div className={`w-10 h-10 rounded-xl ${theme.bg} flex items-center justify-center mb-4 transition-colors ${theme.hoverBg}`}>
                              <i className={`${pillar.icon} text-sm`}></i>
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm mb-2 font-sans">{pillar.title}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed">
                              {pillar.description}
                          </p>
                      </div>
                    );
                  })}
              </div>
          </div>
        )}

        {/* Recent News Highlight - Professional Light Theme */}
        {fetchedNews && fetchedNews.length > 0 && (
          <div className="mt-12 bg-slate-50 rounded-2xl border border-slate-200/80 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/40 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              <h3 className="relative z-10 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-sm border border-blue-100 mr-3">
                      <i className="fas fa-bullhorn text-[11px]"></i>
                  </span>
                  Latest News & Updates
              </h3>
              
              <ul className="relative z-10 space-y-4">
                  {fetchedNews.map((item, idx) => (
                    <li key={idx} className="flex flex-col sm:flex-row gap-4 items-start group">
                        <div className="flex-shrink-0 mt-1 w-20 text-center sm:text-left">
                            <span className="block font-black text-xl leading-none text-blue-600">{item.month}</span>
                            <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">{item.year}</span>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100/50 transition-all duration-300 w-full">
                            <p className="text-sm leading-relaxed text-slate-600 font-sans">
                                {renderTextWithItalics(item.info)}{' '}
                                {item.link && (
                                  <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1.5 ml-1"
                                  >
                                    Link <i className="fas fa-external-link-alt text-[10px]"></i>
                                  </a>
                                )}
                            </p>
                        </div>
                    </li>
                  ))}
              </ul>
          </div>
        )}

        {/* Personal Interests Section */}
        {biography.interests && biography.interests.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                  <span className="w-5 h-px bg-slate-200 mr-2.5"></span> Beyond Academics & Research
              </h3>
              <div className="flex flex-wrap gap-3">
                  {biography.interests.map((interest, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 hover:border-blue-200/50 hover:bg-blue-50/50 transition-all duration-300 cursor-default"
                    >
                        <i className={`${interest.icon || 'fas fa-star'} text-slate-400 mr-2 text-sm`}></i> {interest.name}
                    </span>
                  ))}
              </div>
          </div>
        )}
    </section>
  );
};

export default About;

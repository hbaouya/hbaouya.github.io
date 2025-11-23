import React from 'react';
import { PUBLICATIONS } from '../constants';
import { Publication } from '../types';

const PublicationItem: React.FC<{ pub: Publication }> = ({ pub }) => {
  let badgeStyle = 'bg-slate-100 text-slate-600 border-slate-200';
  let icon = 'fas fa-file-alt';
  
  if (pub.type === 'Journal') {
      badgeStyle = 'bg-emerald-50 text-emerald-700 border-emerald-200';
      icon = 'fas fa-book-journal-whills';
  }
  if (pub.type === 'Conference') {
      badgeStyle = 'bg-violet-50 text-violet-700 border-violet-200';
      icon = 'fas fa-users';
  }
  if (pub.type === 'Workshop') {
      badgeStyle = 'bg-amber-50 text-amber-700 border-amber-200';
      icon = 'fas fa-laptop-code';
  }
  if (pub.type === 'Thesis') {
      badgeStyle = 'bg-gray-50 text-gray-700 border-gray-200';
      icon = 'fas fa-graduation-cap';
  }

  return (
    <div className="group relative p-5 rounded-xl bg-white border border-slate-100 hover:border-primary/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border ${badgeStyle} bg-opacity-50`}>
            <i className={`${icon} text-sm`}></i>
        </div>
        
        <div className="flex-grow">
            <div className="flex justify-between items-start gap-4 mb-2">
                <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-primary transition-colors">
                {pub.title}
                </h4>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${badgeStyle} whitespace-nowrap`}>
                {pub.date}
                </span>
            </div>
            
            <p className="text-slate-600 text-sm mb-3">
                {pub.authors}
            </p>
            
            <div className="flex flex-wrap items-center gap-3">
                <div className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100 inline-flex items-center">
                    <i className="fas fa-landmark mr-2 opacity-50"></i>
                    {pub.venue}
                </div>
                
                {pub.badges && pub.badges.map((badge, idx) => (
                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border border-amber-200 px-2 py-1 rounded-md flex items-center">
                        <i className="fas fa-star mr-1 text-amber-500"></i>{badge}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const Publications: React.FC = () => {
  const journals = PUBLICATIONS.filter(p => p.type === 'Journal');
  const conferences = PUBLICATIONS.filter(p => p.type === 'Conference');
  const workshops = PUBLICATIONS.filter(p => p.type === 'Workshop');
  const thesis = PUBLICATIONS.filter(p => p.type === 'Thesis');

  const SectionHeader: React.FC<{ title: string, count: number }> = ({ title, count }) => (
      <div className="flex items-center gap-3 mb-6 mt-8 first:mt-0 pb-2 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">{count}</span>
      </div>
  );

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
             <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center mr-4 text-lg shadow-sm">
                <i className="fas fa-scroll"></i>
            </div>
            Publications
        </h2>
        
        <div className="space-y-2">
            {journals.length > 0 && (
                <div>
                    <SectionHeader title="International Refereed Journals" count={journals.length} />
                    <div className="grid gap-4">
                        {journals.map(pub => <PublicationItem key={pub.id} pub={pub} />)}
                    </div>
                </div>
            )}

            {conferences.length > 0 && (
                <div>
                    <SectionHeader title="International Conference Proceedings" count={conferences.length} />
                    <div className="grid gap-4">
                        {conferences.map(pub => <PublicationItem key={pub.id} pub={pub} />)}
                    </div>
                </div>
            )}

            {workshops.length > 0 && (
                <div>
                    <SectionHeader title="Workshops" count={workshops.length} />
                    <div className="grid gap-4">
                        {workshops.map(pub => <PublicationItem key={pub.id} pub={pub} />)}
                    </div>
                </div>
            )}

             {thesis.length > 0 && (
                <div>
                    <SectionHeader title="Thesis" count={thesis.length} />
                    <div className="grid gap-4">
                        {thesis.map(pub => <PublicationItem key={pub.id} pub={pub} />)}
                    </div>
                </div>
            )}
        </div>
    </section>
  );
};

export default Publications;
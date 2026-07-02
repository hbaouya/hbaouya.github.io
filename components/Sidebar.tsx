
import React from 'react';
import { useProfileData } from '../profileDataContext';

const Sidebar: React.FC = () => {
  const { data } = useProfileData();
  const { profile } = data;

  return (
    <div className="sticky top-8">
      <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden transition-transform hover:scale-[1.01] duration-300">
        
        {/* Header Gradient */}
        <div className="h-24 bg-gradient-to-br from-blue-600 to-blue-400 relative">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="relative w-24 h-24">
              <img 
                src={profile.image || "images/bio-photo-2.jpg"} 
                alt={profile.name} 
                className="w-full h-full object-cover rounded-full ring-4 ring-white shadow-md bg-white"
              />
            </div>
          </div>
        </div>

        <div className="pt-16 pb-8 px-6 text-center">
          <h1 className="text-xl font-bold text-slate-900">{profile.name}</h1>
          <p className="text-primary font-medium mb-6 text-sm tracking-wide uppercase">{profile.title}</p>

          <div className="mb-6 flex flex-wrap justify-center items-center gap-2 text-sm text-slate-600 px-2">
            {profile.emails.map((emailObj, idx) => (
              <React.Fragment key={emailObj.email}>
                {idx > 0 && <span className="text-slate-300">/</span>}
                <a 
                  href={`mailto:${emailObj.email}`} 
                  className="hover:text-primary transition-colors flex items-center" 
                  title={emailObj.title}
                >
                  {idx === 0 && <i className="fas fa-envelope mr-1.5 text-slate-400"></i>}
                  {emailObj.email}
                </a>
              </React.Fragment>
            ))}
          </div>
            
          <div className="mb-8 flex items-center justify-center text-slate-500 text-sm border-t border-slate-100 pt-4">
              <i className="fas fa-location-dot mr-2 text-slate-400 flex-shrink-0"></i>
              <span className="whitespace-pre-line text-xs">{profile.location}</span>
          </div>

          <div className="flex justify-center gap-3 mb-2">
            {profile.socials.scholar && profile.socials.scholar !== '#' && (
              <a href={profile.socials.scholar} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all" title="Google Scholar">
                <i className="ai ai-google-scholar"></i>
              </a>
            )}
            {profile.socials.linkedin && profile.socials.linkedin !== '#' && (
              <a href={profile.socials.linkedin} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0077b5] hover:text-white transition-all" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            {profile.socials.github && profile.socials.github !== '#' && (
              <a href={profile.socials.github} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-black hover:text-white transition-all" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
            )}
            {profile.socials.researchgate && profile.socials.researchgate !== '#' && (
              <a href={profile.socials.researchgate} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#00ccbb] hover:text-white transition-all" title="ResearchGate">
                <i className="ai ai-researchgate"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

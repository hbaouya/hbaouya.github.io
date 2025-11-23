
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sticky top-8">
      <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden transition-transform hover:scale-[1.01] duration-300">
        
        {/* Header Gradient */}
        <div className="h-24 bg-gradient-to-br from-blue-600 to-blue-400 relative">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="relative w-24 h-24">
              <img 
                src="images/bio-photo-2.jpg" 
                alt="Abdelhakim Baouya" 
                className="w-full h-full object-cover rounded-full ring-4 ring-white shadow-md bg-white"
              />
            </div>
          </div>
        </div>

        <div className="pt-16 pb-8 px-6 text-center">
          <h1 className="text-xl font-bold text-slate-900">Dr. Abdelhakim Baouya</h1>
          <p className="text-primary font-medium mb-6 text-sm tracking-wide uppercase">Associate Professor</p>

          <div className="mb-6 flex flex-wrap justify-center items-center gap-2 text-sm text-slate-600 px-2">
            <a href="mailto:abdelhakim.baouya@irit.fr" className="hover:text-primary transition-colors flex items-center" title="IRIT Email">
                <i className="fas fa-envelope mr-1.5 text-slate-400"></i>
                abdelhakim.baouya@irit.fr
            </a>
            <span className="text-slate-300">/</span>
            <a href="mailto:abaouya@acm.org" className="hover:text-primary transition-colors" title="ACM Email">
                abaouya@acm.org
            </a>
          </div>
            
          <div className="mb-8 flex items-center justify-center text-slate-500 text-sm border-t border-slate-50 pt-4">
              <i className="fas fa-location-dot mr-2 text-slate-400"></i>
              <span>University of Toulouse - UT2<br/>IRIT/CNRS</span>
          </div>

          <div className="flex justify-center gap-3 mb-2">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all" title="Google Scholar">
              <i className="ai ai-google-scholar"></i>
            </a>
            <a href="https://www.linkedin.com/in/dynamoz/" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0077b5] hover:text-white transition-all" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-black hover:text-white transition-all" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#00ccbb] hover:text-white transition-all" title="ResearchGate">
              <i className="ai ai-researchgate"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

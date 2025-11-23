import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Publications from './pages/Publications';
import Talks from './pages/Talks';
import Teaching from './pages/Teaching';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Conversation from './pages/Conversation';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/publications" element={<PageWrapper><Publications /></PageWrapper>} />
        <Route path="/talks" element={<PageWrapper><Talks /></PageWrapper>} />
        <Route path="/teaching" element={<PageWrapper><Teaching /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/activities" element={<PageWrapper><Activities /></PageWrapper>} />
        <Route path="/conversation" element={<PageWrapper><Conversation /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar */}
          <aside className="lg:col-span-3">
            <Sidebar />
          </aside>

          {/* Right Content */}
          <main className="lg:col-span-9 flex flex-col min-h-[calc(100vh-5rem)]">
            <Navbar />
            <div className="flex-grow">
              <AnimatedRoutes />
            </div>
            
            {/* Footer */}
            <footer className="mt-12 text-center text-sm text-slate-400 py-6 border-t border-slate-200">
                <div className="flex flex-col items-center mb-4">
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">Affiliations</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        {/* University of Toulouse */}
                        <a href="https://www.univ-toulouse.fr/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105 duration-300">
                            <img 
                              src="https://www.univ-toulouse.fr/sites/default/files/U-Communaute-universites-etablissements-Toulouse_small_1.png" 
                              alt="University of Toulouse" 
                              className="h-12 w-auto object-contain mix-blend-multiply" 
                            />
                        </a>

                        {/* UT2J */}
                        <a href="https://www.univ-tlse2.fr/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105 duration-300">
                            <img 
                              src="https://www.univ-tlse2.fr/uas/ksup/LOGO/UT2J_U_LOGO.png" 
                              alt="University of Toulouse - Jean Jaurès" 
                              className="h-12 w-auto object-contain mix-blend-multiply" 
                            />
                        </a>

                        {/* IRIT */}
                        <a href="https://www.irit.fr/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105 duration-300">
                            <img 
                              src="https://www.irit.fr/wp-content/uploads/2025/01/LogoUT_intitule_horizontal_2lignes_tutelles_202502.png" 
                              alt="IRIT Laboratory" 
                              className="h-16 w-auto object-contain mix-blend-multiply" 
                            />
                        </a>
                    </div>
                </div>
                <p>&copy; {new Date().getFullYear()} Abdelhakim Baouya. All rights reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
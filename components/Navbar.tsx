import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Publications', path: '/publications' },
    { name: 'Talks', path: '/talks' },
    { name: 'Teaching', path: '/teaching' },
    { name: 'Projects', path: '/projects' },
    { name: 'Activities', path: '/activities' },
  ];

  return (
    <nav className="sticky top-4 z-50 mb-8">
      <div className="bg-white/90 backdrop-blur-lg shadow-lg shadow-slate-200/50 border border-white/20 rounded-full px-2 py-2 overflow-x-auto">
        <div className="flex gap-1 text-sm font-medium text-slate-600 min-w-max px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-blue-200'
                    : 'hover:bg-slate-50 hover:text-primary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
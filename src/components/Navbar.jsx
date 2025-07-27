import React from 'react';
import { Home, User, GraduationCap, Code, Briefcase, GitBranch, Award, Mail } from 'lucide-react';

const Navbar = ({ activeSection, isScrolled, scrollToSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: GitBranch },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-600 shadow-lg shadow-black/50' 
        : 'bg-gray-900/90 backdrop-blur-sm border-b border-gray-700'
    }`}>
      {/* Single integrated top bar */}
      <div className="px-1 py-3"> {/* Reduced padding even more */}
        <div className="w-full flex items-center justify-between"> {/* Removed max-width constraint */}
          
          {/* Left section: Window controls + Terminal title (shifted more left) */}
          <div className="flex items-center space-x-3 flex-shrink-0"> {/* Added flex-shrink-0 */}
            {/* Window controls (extreme left positioning) */}
            <div className="flex space-x-1.5 pl-3"> {/* Further reduced to pl-1 */}
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            
            {/* Separator */}
            <div className="w-px h-5 bg-gray-600"></div>
            
            {/* Terminal info */}
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3"/>
              </svg>
              <span className="font-mono text-gray-300 text-sm whitespace-nowrap">portfolio-terminal</span>
            </div>
          </div>

          {/* Center-Right section: Navigation buttons (shifted more right) */}
          <div className="hidden md:flex items-center space-x-1 ml-16 flex-1 justify-center"> {/* Increased to ml-16 and centered in remaining space */}
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md font-mono text-sm transition-all duration-200 whitespace-nowrap ${
                    activeSection === item.id
                      ? 'bg-green-600/20 text-green-400 border border-green-400/30 shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent hover:border-gray-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right section: Status (ensured single line) */}
          <div className="flex items-center space-x-2 flex-shrink-0 pr-4"> {/* Added flex-shrink-0 and right padding */}
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-gray-300 text-sm whitespace-nowrap">Open to Work</span> {/* Added whitespace-nowrap */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

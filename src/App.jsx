// import React, { useState, useEffect } from 'react';
// import { 
//   ChevronDown, Terminal, User, GraduationCap, Code, Briefcase, GitBranch, Award, Mail 
// } from 'lucide-react';
// import LoadingScreen from './components/LoadingScreen';

// // Navbar Component
// const Navbar = ({ activeSection, isScrolled, scrollToSection }) => {
//   const navItems = [
//     { id: 'hero', label: 'Hero', icon: Terminal },
//     { id: 'about', label: 'About', icon: User },
//     { id: 'education', label: 'Education', icon: GraduationCap },
//     { id: 'skills', label: 'Skills', icon: Code },
//     { id: 'experience', label: 'Experience', icon: Briefcase },
//     { id: 'projects', label: 'Projects', icon: GitBranch },
//     { id: 'achievements', label: 'Achievements', icon: Award },
//     { id: 'contact', label: 'Contact', icon: Mail }
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//       isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gray-700' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center space-x-2">
//             <Terminal className="w-6 h-6 text-green-400" />
//             <span className="font-mono text-white font-bold">siddharth@portfolio:~$</span>
//           </div>

//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`flex items-center space-x-2 px-3 py-2 rounded-md font-mono text-xs transition-all duration-200 ${
//                     activeSection === item.id
//                       ? 'bg-gray-800 text-green-400 border border-green-400/30'
//                       : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
//                   }`}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span>{item.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Hero Component
// const Hero = () => {
//   const [currentCommand, setCurrentCommand] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [showCursor, setShowCursor] = useState(true);

//   const commands = [
//     "Full Stack Developer",
//     "Tech Lead & Innovator",
//     "AI/ML Enthusiast",
//     "Problem Solver"
//   ];

//   useEffect(() => {
//     const command = commands[currentCommand];
//     let currentIndex = 0;
//     let isDeleting = false;
//     let timeoutId;

//     const typeEffect = () => {
//       if (!isDeleting && currentIndex < command.length) {
//         setDisplayText(command.substring(0, currentIndex + 1));
//         currentIndex++;
//         timeoutId = setTimeout(typeEffect, 150);
//       } else if (isDeleting && currentIndex > 0) {
//         setDisplayText(command.substring(0, currentIndex - 1));
//         currentIndex--;
//         timeoutId = setTimeout(typeEffect, 100);
//       } else if (!isDeleting && currentIndex === command.length) {
//         timeoutId = setTimeout(() => {
//           isDeleting = true;
//           typeEffect();
//         }, 2000);
//       } else if (isDeleting && currentIndex === 0) {
//         setCurrentCommand((prev) => (prev + 1) % commands.length);
//         isDeleting = false;
//         timeoutId = setTimeout(typeEffect, 500);
//       }
//     };

//     typeEffect();

//     return () => {
//       if (timeoutId) clearTimeout(timeoutId);
//     };
//   }, [currentCommand]);

//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setShowCursor(prev => !prev);
//     }, 500);
//     return () => clearInterval(cursorInterval);
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
//       {/* Matrix Background Effect */}
//       <div className="absolute inset-0 opacity-5">
//         {[...Array(100)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-green-400 text-xs font-mono animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//             }}
//           >
//             {Math.random() > 0.5 ? '1' : '0'}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-6xl mx-auto px-6 text-left relative z-10 w-full animate-fade-in-up">
//         <div className="font-mono space-y-6">
//           <div className="text-gray-400 text-lg">
//             <span className="text-green-400">siddharth@vit:~$</span> whoami
//           </div>

//           <div className="text-white text-5xl md:text-7xl font-bold mb-4">
//             Siddharth Seth
//           </div>

//           <div className="text-gray-400 text-lg">
//             <span className="text-green-400">siddharth@vit:~$</span> cat current_role.txt
//           </div>

//           <div className="text-blue-400 text-2xl md:text-3xl h-12 mb-8">
//             {displayText}
//             <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
//           </div>

//           <div className="text-gray-400 text-lg">
//             <span className="text-green-400">siddharth@vit:~$</span> ls -la info/
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//             <div className="flex items-center space-x-3 text-purple-400">
//               <GraduationCap className="w-5 h-5" />
//               <span>BTech CSE (AI & Robotics) | VIT</span>
//             </div>
//             <div className="flex items-center space-x-3 text-blue-400">
//               <Code className="w-5 h-5" />
//               <span>Full Stack Development</span>
//             </div>
//             <div className="flex items-center space-x-3 text-yellow-400">
//               <Briefcase className="w-5 h-5" />
//               <span>Ex-Intern @ Tata Power & IIT Patna</span>
//             </div>
//             <div className="flex items-center space-x-3 text-pink-400">
//               <Award className="w-5 h-5" />
//               <span>TechnoVIT 2024 Winner</span>
//             </div>
//           </div>

//           <div className="text-gray-400 text-lg mt-12">
//             <span className="text-green-400">siddharth@vit:~$</span> echo "Ready to build something amazing together!"
//           </div>

//           <div className="text-yellow-400 text-xl mb-8">
//             Ready to build something amazing together! 🚀
//           </div>

//           <div className="flex flex-wrap gap-4">
//             <button 
//               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
//               className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-mono transition-all duration-200 hover:scale-105"
//             >
//               <GitBranch className="w-5 h-5" />
//               <span>./view_projects.sh</span>
//             </button>
//             <button 
//               onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
//               className="flex items-center space-x-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-mono transition-all duration-200 hover:scale-105"
//             >
//               <Briefcase className="w-5 h-5" />
//               <span>./check_experience.sh</span>
//             </button>
//             <button 
//               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//               className="flex items-center space-x-2 border border-blue-600 hover:border-blue-500 text-blue-400 hover:text-blue-300 px-6 py-3 rounded-lg font-mono transition-all duration-200 hover:scale-105"
//             >
//               <Mail className="w-5 h-5" />
//               <span>./contact_me.sh</span>
//             </button>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-6 h-6 text-gray-400" />
//         </div>
//       </div>
//     </div>
//   );
// };

// // About Component
// const About = () => {
//   return (
//     <section className="py-20 bg-gray-900/20">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
//           <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
//             <div className="flex space-x-2">
//               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             </div>
//             <span className="text-gray-400 font-mono text-sm">About.jsx</span>
//             <div className="w-16"></div>
//           </div>

//           <div className="p-8">
//             <div className="font-mono space-y-6">
//               <div className="text-gray-400">
//                 <span className="text-green-400">siddharth@vit:~$</span> cat about_me.md
//               </div>

//               <div className="text-white">
//                 <h2 className="text-3xl font-bold mb-6">
//                   <span className="text-green-400"># </span>About Siddharth Seth
//                 </h2>

//                 <div className="text-gray-300 leading-relaxed space-y-4">
//                   <p>
//                     Hey there! I'm a passionate <span className="text-blue-400">Computer Science student</span> at VIT, 
//                     specializing in <span className="text-purple-400">AI and Robotics</span>. With a strong foundation 
//                     in full-stack development and emerging technologies, I love building solutions that make a difference.
//                   </p>
                  
//                   <p>
//                     My journey spans from <span className="text-green-400">web applications</span> to <span className="text-yellow-400">mobile apps</span>, 
//                     <span className="text-pink-400"> machine learning models</span>, and everything in between. 
//                     I believe in clean code, innovative thinking, and collaborative teamwork.
//                   </p>
                  
//                   <p>
//                     Currently maintaining a <span className="text-green-400">CGPA of 8.37</span> while actively 
//                     contributing to various projects and leading technical initiatives at IEEE Photonics Society.
//                   </p>
//                 </div>

//                 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="text-center p-4 bg-gray-800/50 rounded-lg">
//                     <div className="text-2xl font-bold text-green-400">15+</div>
//                     <div className="text-sm text-gray-400">Projects Completed</div>
//                   </div>
//                   <div className="text-center p-4 bg-gray-800/50 rounded-lg">
//                     <div className="text-2xl font-bold text-blue-400">3+</div>
//                     <div className="text-sm text-gray-400">Internships</div>
//                   </div>
//                   <div className="text-center p-4 bg-gray-800/50 rounded-lg">
//                     <div className="text-2xl font-bold text-purple-400">100+</div>
//                     <div className="text-sm text-gray-400">Workshop Attendees</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Main App Component
// const App = () => {
//   const [activeSection, setActiveSection] = useState('hero');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showLoadingScreen, setShowLoadingScreen] = useState(true); // Loading screen visibility

//   const handleLoadingComplete = () => {
//     setShowLoadingScreen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       const sections = ['hero', 'about', 'education', 'skills', 'experience', 'projects', 'achievements', 'contact'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });

//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const navbarHeight = 80;
//       const elementPosition = element.offsetTop - navbarHeight;

//       window.scrollTo({
//         top: elementPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="bg-black text-white min-h-screen relative">
//       {/* Main Content - Always rendered */}
//       <div className="relative">
//         <Navbar
//           activeSection={activeSection}
//           isScrolled={isScrolled}
//           scrollToSection={scrollToSection}
//         />

//         <section id="hero">
//           <Hero />
//         </section>

//         <section id="about">
//           <About />
//         </section>

//         {/* Placeholder sections */}
//         <section id="education" className="py-20">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold text-white font-mono">Education.jsx - Coming Soon</h2>
//           </div>
//         </section>

//         <section id="skills" className="py-20 bg-gray-900/20">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold text-white font-mono">Skills.jsx - Coming Soon</h2>
//           </div>
//         </section>

//         <section id="experience" className="py-20">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold text-white font-mono">Experience.jsx - Coming Soon</h2>
//           </div>
//         </section>

//         <section id="projects" className="py-20 bg-gray-900/20">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold text-white font-mono">Projects.jsx - Coming Soon</h2>
//           </div>
//         </section>

//         <section id="achievements" className="py-20">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold text-white font-mono">Achievements.jsx - Coming Soon</h2>
//           </div>
//         </section>

//         <section id="contact" className="py-20 bg-gray-900/20">
//           <div className="max-w-6xl mx-auto px-6 text-center">
//             <h2 className="text-3xl font-bold text-white font-mono">Contact.jsx - Coming Soon</h2>
//           </div>
//         </section>
//       </div>

//       {/* Loading Screen Overlay - Only shows on top */}
//       {showLoadingScreen && (
//         <LoadingScreen onLoadingComplete={handleLoadingComplete} />
//       )}
//     </div>
//   );
// };

// // Add fade-in animation CSS
// const style = document.createElement('style');
// style.textContent = `
//   @keyframes fade-in-up {
//     from {
//       opacity: 0;
//       transform: translateY(30px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   .animate-fade-in-up {
//     animation: fade-in-up 1s ease-out 0.5s both;
//   }
// `;

// if (!document.head.querySelector('style[data-fade-animations]')) {
//   style.setAttribute('data-fade-animations', 'true');
//   document.head.appendChild(style);
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'education', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Main Content */}
      <div className="relative">
        <Navbar
          activeSection={activeSection}
          isScrolled={isScrolled}
          scrollToSection={scrollToSection}
        />

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* Loading Screen Overlay */}
      {showLoadingScreen && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
    </div>
  );
};

// Add fade-in animation CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out 0.5s both;
  }
`;

if (!document.head.querySelector('style[data-fade-animations]')) {
  style.setAttribute('data-fade-animations', 'true');
  document.head.appendChild(style);
}

export default App;


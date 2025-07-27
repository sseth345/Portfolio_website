// import React, { useState, useEffect } from 'react';
// import { ChevronDown, GraduationCap, Code, Briefcase, Award, Download, Mail, MapPin } from 'lucide-react';

// // Import profile image from assets folder
// import profileImage from '../assets/1692924836670.jpg';

// const Hero = () => {
//   const [currentCommand, setCurrentCommand] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [showCursor, setShowCursor] = useState(true);
//   const [showEchoOutput, setShowEchoOutput] = useState(false);
//   const [isEchoPressed, setIsEchoPressed] = useState(false);

//   const commands = [
//     "Full Stack Developer",
//     "Technical Lead @ IEEE",
//     "AI/ML Researcher",
//     "Android Developer"
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

//   const handleEchoClick = () => {
//     setIsEchoPressed(true);
//     setShowEchoOutput(true);
//     setTimeout(() => setIsEchoPressed(false), 150);
//   };

//   const handleResumeDownload = () => {
//     // Open Google Drive link for resume download
//     window.open('https://drive.google.com/file/d/1d2SiOldP41hqSqSBJw6T73bhrgnycRq9/view?usp=sharing', '_blank');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black hero-container">
//       {/* Matrix Background Effect with Hover */}
//       <div className="absolute inset-0 opacity-5 matrix-bg">
//         {[...Array(100)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-gray-600 text-xs font-mono animate-pulse matrix-digit transition-all duration-300"
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

//       <div className="max-w-7xl mx-auto px-6 relative z-10 w-full animate-fade-in-up">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
//           {/* Left Side - Content */}
//           <div className="font-mono space-y-6">
//             <div className="text-gray-400 text-lg">
//               <span className="text-green-400">portfolio@siddharth:~$</span> A bit about me
//             </div>

//             <div className="text-white text-5xl md:text-7xl font-bold mb-4">
//               Siddharth Seth
//             </div>

//             <div className="text-blue-400 text-2xl md:text-3xl h-12 mb-8">
//               {displayText}
//               <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
//             </div>

//             <div className="text-gray-400 text-lg">
//               <span className="text-green-400">portfolio@siddharth:~$</span> my info
//             </div>

//             {/* Updated Role Info with Light Creme Color */}
//             <div className="text-sm">
//               <div className="flex items-center space-x-3" style={{ color: '#f9f7f0' }}>
//                 <GraduationCap className="w-5 h-5" />
//                 <span>Ex-Intern@TPCODL | Ex Research Intern@IIT Patna | Technical Lead@IEEE Photonics | Pre-final@VIT</span>
//               </div>
//             </div>

//             {/* Location Widget */}
//             <div className="flex items-center space-x-3 text-cyan-400 bg-gray-800/30 p-3 rounded-lg border border-gray-700">
//               <MapPin className="w-5 h-5" />
//               <span className="font-mono">Chennai, India</span>
//             </div>

//             <div className="text-gray-400 text-lg mt-12">
//               <span className="text-green-400">portfolio@siddharth:~$</span> echo "Ready to build something amazing together!"
//             </div>

//             {/* Green Radially Glowing Echo Button */}
//             <button 
//               onClick={handleEchoClick}
//               className={`echo-glow bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-mono text-sm transition-all duration-200 transform ${
//                 isEchoPressed ? 'scale-95' : 'scale-100'
//               } hover:scale-105 active:scale-90`}
//             >
//               echo
//             </button>

//             {/* Echo Output */}
//             {showEchoOutput && (
//               <div className="text-yellow-400 text-xl mb-8 animate-fade-in">
//                 Ready to build something amazing together!
//               </div>
//             )}

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 mt-8">
//               <button 
//                 onClick={handleResumeDownload}
//                 className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-mono transition-all duration-200 hover:scale-105"
//               >
//                 <Download className="w-5 h-5" />
//                 <span>./download_resume.sh</span>
//               </button>
//               <button 
//                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="flex items-center space-x-2 border border-blue-600 hover:border-blue-500 text-blue-400 hover:text-blue-300 px-6 py-3 rounded-lg font-mono transition-all duration-200 hover:scale-105"
//               >
//                 <Mail className="w-5 h-5" />
//                 <span>./contact_me.sh</span>
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Profile Image with Glowing Window */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               {/* Image Container with Glowing Background */}
//               <div className="profile-window bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
//                 <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
//                   <div className="flex space-x-2">
//                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                   </div>
//                   <span className="text-gray-400 font-mono text-sm">profile_pic</span>
//                   <div className="w-16"></div>
//                 </div>
                
//                 {/* Actual Profile Image */}
//                 <div className="p-4">
//                   <div className="w-80 h-80 rounded-lg overflow-hidden border border-gray-600">
//                     <img 
//                       src={profileImage} 
//                       alt="Siddharth Seth Profile" 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-mono font-bold animate-pulse">
//                 ONLINE
//               </div>
//               <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-mono">
//                 VIT Chennai
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Down Arrow with Enhanced Glow - Moved Even Lower */}
//         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce-glow">
//           <ChevronDown className="w-6 h-6 text-gray-400" />
//         </div>
//       </div>

//       {/* Enhanced Custom Styles */}
//       <style jsx>{`
//         /* Matrix hover effect - digits turn green on hero hover */
//         .hero-container:hover .matrix-digit {
//           color: #22c55e !important;
//           text-shadow: 0 0 8px #22c55e, 0 0 15px #22c55e;
//           transition: all 0.3s ease;
//         }

//         /* Radial glow animation for echo button */
//         .echo-glow {
//           animation: radial-glow 2s infinite ease-in-out;
//         }
        
//         @keyframes radial-glow {
//           0%, 100% {
//             box-shadow: 0 0 15px 5px rgba(34, 197, 94, 0.6);
//           }
//           50% {
//             box-shadow: 0 0 25px 10px rgba(34, 197, 94, 1);
//           }
//         }

//         /* Profile window with green and purple glow */
//         .profile-window {
//           position: relative;
//           animation: profile-glow 4s infinite ease-in-out;
//         }
        
//         .profile-window::before {
//           content: '';
//           position: absolute;
//           top: -15px;
//           left: -15px;
//           right: -15px;
//           bottom: -15px;
//           background: linear-gradient(135deg, #22c55e 0%, #8b5cf6 100%);
//           border-radius: 1rem;
//           filter: blur(20px);
//           z-index: -1;
//           opacity: 0.7;
//         }

//         @keyframes profile-glow {
//           0%, 100% {
//             filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 30px rgba(139, 92, 246, 0.4));
//           }
//           50% {
//             filter: drop-shadow(0 0 35px rgba(34, 197, 94, 0.9)) drop-shadow(0 0 45px rgba(139, 92, 246, 0.7));
//           }
//         }

//         /* Enhanced bounce glow for down arrow */
//         @keyframes bounce-glow {
//           0%, 100% {
//             transform: translateY(0);
//             filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6));
//           }
//           50% {
//             transform: translateY(-10px);
//             filter: drop-shadow(0 0 15px rgba(34, 197, 94, 0.8));
//           }
//         }
//         .animate-bounce-glow {
//           animation: bounce-glow 2s infinite ease-in-out;
//         }

//         /* Smooth transition for all matrix digits */
//         .matrix-digit {
//           transition: color 0.3s ease, text-shadow 0.3s ease;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';
import { ChevronDown, GraduationCap, Code, Briefcase, Award, Download, Mail, MapPin } from 'lucide-react';

// Import profile image from assets folder
import profileImage from '../assets/1692924836670.jpg';

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showEchoOutput, setShowEchoOutput] = useState(false);
  const [isEchoPressed, setIsEchoPressed] = useState(false);

  const commands = [
    "Full Stack Developer",
    "Technical Lead @ IEEE",
    "AI/ML Researcher",
    "Android Developer"
  ];

  useEffect(() => {
    const command = commands[currentCommand];
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeEffect = () => {
      if (!isDeleting && currentIndex < command.length) {
        setDisplayText(command.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeEffect, 150);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(command.substring(0, currentIndex - 1));
        currentIndex--;
        timeoutId = setTimeout(typeEffect, 100);
      } else if (!isDeleting && currentIndex === command.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, 2000);
      } else if (isDeleting && currentIndex === 0) {
        setCurrentCommand((prev) => (prev + 1) % commands.length);
        isDeleting = false;
        timeoutId = setTimeout(typeEffect, 500);
      }
    };

    typeEffect();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentCommand]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleEchoClick = () => {
    setIsEchoPressed(true);
    setShowEchoOutput(true);
    setTimeout(() => setIsEchoPressed(false), 150);
  };

  const handleResumeDownload = () => {
    // Open Google Drive link for resume download
    window.open('https://drive.google.com/file/d/1d2SiOldP41hqSqSBJw6T73bhrgnycRq9/view?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black hero-container">
      {/* Matrix Background Effect with Hover */}
      <div className="absolute inset-0 opacity-5 matrix-bg">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gray-600 text-xs font-mono animate-pulse matrix-digit transition-all duration-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Content */}
          <div className="font-mono space-y-6">
            <div className="text-gray-400 text-lg">
              <span className="text-green-400">portfolio@siddharth:~$</span> A bit about me
            </div>

            <div className="text-white text-5xl md:text-7xl font-bold mb-4">
              Siddharth Seth
            </div>

            <div className="text-blue-400 text-2xl md:text-3xl h-12 mb-8">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </div>

            <div className="text-gray-400 text-lg">
              <span className="text-green-400">portfolio@siddharth:~$</span> my info
            </div>

            {/* Updated Role Info with Light Creme Color */}
            <div className="text-sm">
              <div className="flex items-center space-x-3" style={{ color: '#f9f7f0' }}>
                <GraduationCap className="w-5 h-5" />
                <span>Ex-Intern@TPCODL | Ex Research Intern@IIT Patna | Technical Lead@IEEE Photonics | Pre-final@VIT</span>
              </div>
            </div>

            {/* Location Widget */}
            <div className="flex items-center space-x-3 text-cyan-400 bg-gray-800/30 p-3 rounded-lg border border-gray-700">
              <MapPin className="w-5 h-5" />
              <span className="font-mono">Chennai, India</span>
            </div>

            <div className="text-gray-400 text-lg mt-12">
              <span className="text-green-400">portfolio@siddharth:~$</span> echo "Ready to build something amazing together!"
            </div>

            {/* Green Radially Glowing Echo Button */}
            <button 
              onClick={handleEchoClick}
              className={`echo-glow bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-mono text-sm transition-all duration-200 transform ${
                isEchoPressed ? 'scale-95' : 'scale-100'
              } hover:scale-105 active:scale-90`}
            >
              echo
            </button>

            {/* Echo Output */}
            {showEchoOutput && (
              <div className="text-yellow-400 text-xl mb-8 animate-fade-in">
                Ready to build something amazing together!
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={handleResumeDownload}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-mono transition-all duration-200 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>./download_resume.sh</span>
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center space-x-2 border border-blue-600 hover:border-blue-500 text-blue-400 hover:text-blue-300 px-6 py-3 rounded-lg font-mono transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>./contact_me.sh</span>
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image with Glowing Window */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Image Container with Glowing Background */}
              <div className="profile-window bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 font-mono text-sm">profile_pic</span>
                  <div className="w-16"></div>
                </div>
                
                {/* Actual Profile Image */}
                <div className="p-4">
                  <div className="w-80 h-80 rounded-lg overflow-hidden border border-gray-600">
                    <img 
                      src={profileImage} 
                      alt="Siddharth Seth Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-mono font-bold animate-pulse">
                ONLINE
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-mono">
                VIT Chennai
              </div>
            </div>
          </div>
        </div>

        {/* Down Arrow with Enhanced Glow - Moved Even Lower */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce-glow">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        /* Matrix hover effect - digits turn green on hero hover */
        .hero-container:hover .matrix-digit {
          color: #22c55e !important;
          text-shadow: 0 0 8px #22c55e, 0 0 15px #22c55e;
          transition: all 0.3s ease;
        }

        /* Radial glow animation for echo button */
        .echo-glow {
          animation: radial-glow 2s infinite ease-in-out;
        }
        
        @keyframes radial-glow {
          0%, 100% {
            box-shadow: 0 0 15px 5px rgba(34, 197, 94, 0.6);
          }
          50% {
            box-shadow: 0 0 25px 10px rgba(34, 197, 94, 1);
          }
        }

        /* Profile window with green and purple glow */
        .profile-window {
          position: relative;
          animation: profile-glow 4s infinite ease-in-out;
        }
        
        .profile-window::before {
          content: '';
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          background: linear-gradient(135deg, #22c55e 0%, #8b5cf6 100%);
          border-radius: 1rem;
          filter: blur(20px);
          z-index: -1;
          opacity: 0.7;
        }

        @keyframes profile-glow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 30px rgba(139, 92, 246, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 35px rgba(34, 197, 94, 0.9)) drop-shadow(0 0 45px rgba(139, 92, 246, 0.7));
          }
        }

        /* Enhanced bounce glow for down arrow */
        @keyframes bounce-glow {
          0%, 100% {
            transform: translateY(0);
            filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6));
          }
          50% {
            transform: translateY(-10px);
            filter: drop-shadow(0 0 15px rgba(34, 197, 94, 0.8));
          }
        }
        .animate-bounce-glow {
          animation: bounce-glow 2s infinite ease-in-out;
        }

        /* Smooth transition for all matrix digits */
        .matrix-digit {
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Hero;

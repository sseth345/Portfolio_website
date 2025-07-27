import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showStats, setShowStats] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  // Individual progress states for each module
  const [moduleProgress, setModuleProgress] = useState({
    react: 0,
    javascript: 0,
    leadership: 0,
    api: 0,
    project: 0
  });

  // Battery-style progress bar generator
  const generateProgressBar = (progress) => {
    const bars = 12;
    const filled = Math.floor((progress / 100) * bars);
    const empty = bars - filled;
    return `[${filled > 0 ? '█'.repeat(filled) : ''}${empty > 0 ? '░'.repeat(empty) : ''}] ${progress}%`;
  };

  // Slower boot sequence for 2-3 seconds
  const bootSequence = [
    { text: "$ ssh siddharth.seth@portfolio.dev", delay: 100, type: "command" },
    { text: "Connecting to remote server...", delay: 120, type: "output" },
    { text: "✓ SSH connection established", delay: 100, type: "success" },
    { text: "$ systemctl start portfolio.service", delay: 80, type: "command" },
    { text: "Loading core modules...", delay: 120, type: "output" },
    { text: "react", delay: 150, type: "progress", module: "react" },
    { text: "javascript", delay: 150, type: "progress", module: "javascript" },
    { text: "leadership", delay: 150, type: "progress", module: "leadership" },
    { text: "api", delay: 150, type: "progress", module: "api" },
    { text: "project", delay: 150, type: "progress", module: "project" },
    { text: "$ docker-compose up portfolio", delay: 100, type: "command" },
    { text: "Creating portfolio_frontend_1 ... done", delay: 80, type: "docker" },
    { text: "Creating portfolio_backend_1  ... done", delay: 80, type: "docker" },
    { text: "Creating portfolio_database_1 ... done", delay: 80, type: "docker" },
    { text: "$ npm run build:production", delay: 80, type: "command" },
    { text: "Optimizing bundle size... 2.1MB → 847KB", delay: 100, type: "build" },
    { text: "✓ Build completed successfully", delay: 80, type: "success" },
    { text: "$ git status", delay: 60, type: "command" },
    { text: "On branch main - All systems operational", delay: 80, type: "git" },
    { text: "Siddharth Seth's portfolio ready to deploy! 🚀", delay: 120, type: "final" }
  ];

  const stats = [
    { label: "Performance", value: "A+", color: "text-green-400" },
    { label: "Code Quality", value: "★★★★★", color: "text-blue-400" },
    { label: "Team Leadership", value: "97%", color: "text-yellow-400" },
    { label: "Load Time", value: "2.5s", color: "text-purple-400" }
  ];

  // Slower module progress animation
  const animateModuleProgress = (module) => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15 + 8; // Moderate increments
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
      }
      setModuleProgress(prev => ({
        ...prev,
        [module]: Math.floor(currentProgress)
      }));
    }, 100); // Slower updates for smoother animation
  };

  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;

    const addLine = () => {
      if (currentIndex < bootSequence.length) {
        const line = bootSequence[currentIndex];
        
        // Start progress animation for progress bars
        if (line.type === "progress" && line.module) {
          animateModuleProgress(line.module);
        }
        
        setTerminalLines(prev => [...prev, { ...line, id: currentIndex }]);
        
        currentIndex++;
        setProgress(Math.round((currentIndex / bootSequence.length) * 100));
        timeoutId = setTimeout(addLine, line.delay);
      } else {
        // Show stats for a bit longer
        setTimeout(() => {
          setShowStats(true);
          setTimeout(() => {
            setIsExiting(true);
          }, 800); // Longer pause to appreciate the completion
        }, 200);
      }
    };

    // Start with small initial delay
    timeoutId = setTimeout(addLine, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 500); // Smooth fade out
      return () => clearTimeout(timer);
    }
  }, [isExiting, onLoadingComplete]);

  const getLineStyle = (type) => {
    switch (type) {
      case 'command': return 'text-cyan-400 font-mono';
      case 'success': return 'text-green-400 font-mono';
      case 'output': return 'text-gray-300 font-mono';
      case 'progress': return 'text-blue-300 font-mono text-sm';
      case 'docker': return 'text-purple-400 font-mono text-sm';
      case 'build': return 'text-orange-400 font-mono text-sm';
      case 'git': return 'text-yellow-400 font-mono';
      case 'final': return 'text-pink-400 font-mono font-bold';
      default: return 'text-gray-400 font-mono';
    }
  };

  const renderProgressLine = (line) => {
    const moduleNames = {
      react: "React Framework",
      javascript: "JavaScript Engine", 
      leadership: "Team Leadership",
      api: "API Endpoints",
      project: "Project Management"
    };

    if (line.type === "progress" && line.module) {
      const moduleName = moduleNames[line.module];
      const progress = moduleProgress[line.module];
      const progressBar = generateProgressBar(progress);
      
      return (
        <div key={line.id} className="mb-1 text-blue-300 font-mono text-sm">
          <span className="text-gray-400">├── </span>
          <span className="text-blue-300">{moduleName}</span>
          <span className="ml-2 text-green-400">{progressBar}</span>
        </div>
      );
    }

    return (
      <div
        key={line.id}
        className={`mb-1 animate-fade-in ${getLineStyle(line.type)}`}
        style={{ 
          animationDelay: '0.1s',
          animationDuration: '0.4s'
        }}
      >
        {line.type === 'command' && <span className="text-green-400">$ </span>}
        <span>{line.text}</span>
        {line.id === terminalLines.length - 1 &&
          <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>}
      </div>
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Clean background without 0/1 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/15 to-black"></div>
      </div>

      <div className="relative h-full flex">
        {/* Terminal Section */}
        <div className="flex-1 p-8 overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center mb-6 border-b border-gray-700 pb-4">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 font-mono text-sm">siddharth@portfolio-terminal:~$</span>
          </div>

          {/* Terminal Content */}
          <div className="h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
            {terminalLines.map((line) => renderProgressLine(line))}
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="w-80 bg-gray-900/50 border-l border-gray-700 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">SIDDHARTH.SYS</h1>
            <div className="text-sm text-gray-400 font-mono">
              Build: v2.1.0 | Node: 18.x | React: 18.x
            </div>
          </div>

          {/* Progress Ring */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="45"
                stroke="rgba(34, 197, 94, 0.2)"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="45"
                stroke="#22c55e"
                strokeWidth="6"
                fill="none"
                strokeDasharray={2 * Math.PI * 45}
                strokeDashoffset={2 * Math.PI * 45 * (1 - progress / 100)}
                className="transition-all duration-500 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{progress}%</div>
                <div className="text-xs text-gray-400">LOADED</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          {showStats && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                System Status
              </h3>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg animate-slide-up"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: '0.5s'
                  }}
                >
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                  <span className={`font-mono font-bold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}

              {/* Performance Bars */}
              <div className="mt-6">
                <div className="text-sm text-gray-400 mb-2">Performance Metrics</div>
                <div className="flex space-x-1 h-16">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex-1 bg-gray-700 rounded-sm overflow-hidden">
                      <div
                        className="bg-gradient-to-t from-green-500 to-blue-500 transition-all duration-700 rounded-sm"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 50}ms`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="absolute bottom-8 right-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400 font-mono">ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

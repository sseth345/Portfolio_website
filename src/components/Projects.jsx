import React from 'react';
import { Github, ExternalLink, Calendar, Code, Smartphone, Brain } from 'lucide-react';

// Import project images from assets folder
import vitalVisionImage from '../assets/photo-collage.png.png';
import intelliLibImage from '../assets/Untitled design(2).png';
import aqiImage from '../assets/photo-collage.png(1).png';

const Projects = () => {
  const projects = [
    {
      title: "VitalVision",
      icon: Smartphone,
      color: "text-green-400",
      date: "06/2025",
      tech: ["Kotlin", "Jetpack Compose", "Google ML Kit", "Room Database"],
      github: "https://github.com/sseth345/VitalVision", // Actual VitalVision GitHub
      imageUrl: vitalVisionImage, // VitalVision image from assets
      liveUrl: "https://github.com/sseth345/VitalVision", // Same as GitHub for now
      windowTitle: "vitalvision_app.apk",
      description: "Real-time Android app for emotion detection and analysis",
      achievements: [
        "Reduced processing time by 35% through optimized ML models",
        "Automated emotion history tracking and analytics",
        "Enabled secure local image sharing across platforms",
        "Cut patient care response time by 30%",
        "Suitable for healthcare, wellness, and user engagement scenarios"
      ]
    },
    {
      title: "IntelliLib",
      icon: Code,
      color: "text-blue-400", 
      date: "02/2025",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Flutter"],
      github: "https://github.com/dipsitarout/LIBRARY_MANAGEMENT", // Actual IntelliLib GitHub
      imageUrl: intelliLibImage, // IntelliLib image from assets
      liveUrl: "https://github.com/dipsitarout/LIBRARY_MANAGEMENT", // Same as GitHub for now
      windowTitle: "intellilib_system.exe",
      description: "Full-stack library management system with web and mobile interfaces",
      achievements: [
        "Reduced manual data entry by 60% through real-time synchronization",
        "Implemented secure authentication with JWT",
        "Automated workflows by integrating RFID/barcode scanning",
        "Cut book check-in/out time by 40%",
        "Deployed cloud-based document processing (Puppeteer, Cloudinary)"
      ]
    },
    {
      title: "AI Air Quality Forecasting",
      icon: Brain,
      color: "text-purple-400",
      date: "06/2024", 
      tech: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy"],
      github: "https://www.kaggle.com/code/sethsiddharth/allmodels", // Actual Kaggle link
      imageUrl: aqiImage, // AQI image from assets
      liveUrl: "https://www.kaggle.com/code/sethsiddharth/allmodels", // Same as Kaggle
      windowTitle: "aqi_forecasting.ipynb",
      description: "Deep learning-based air quality prediction system",
      achievements: [
        "Engineered ConvTRANS model for analyzing 5+ years of pollutant trends",
        "Covered six major Indian cities for comprehensive analysis",
        "Designed end-to-end ML pipeline for preprocessing, training, and deployment",
        "Used LSTM, GRU, and Transformers for advanced forecasting",
        "Enhanced forecasting accuracy by 20% (RMSE, R2, MSE, MAE)"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 font-mono text-sm">Projects.jsx</span>
            <div className="w-16"></div>
          </div>

          <div className="p-8">
            <div className="font-mono space-y-6">
              <div className="text-gray-400">
                <span className="text-green-400">siddharth@vit:~$</span> ls -la projects/
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="text-green-400"># </span>Featured Projects
                </h2>

                {/* Vertical Tiles Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                  {projects.map((project, index) => {
                    const Icon = project.icon;
                    return (
                      <div key={index} className="bg-gray-800/50 border border-gray-600 rounded-lg overflow-hidden hover:border-gray-500 transition-colors">
                        
                        <div className="flex flex-col lg:flex-row">
                          {/* Project Image Window */}
                          <div className="lg:w-1/3">
                            <div className="bg-gray-800 px-3 py-2 border-b border-gray-600">
                              <div className="flex items-center justify-between">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                                <span className="text-gray-400 font-mono text-xs">{project.windowTitle}</span> {/* Dynamic window title */}
                              </div>
                            </div>
                            <div className="relative h-64 lg:h-full bg-gray-700 flex items-center justify-center">
                              <img 
                                src={project.imageUrl} 
                                alt={`${project.title} preview`} 
                                className="w-full h-full object-cover" // Keep object-cover for project images
                              />
                              <div className="absolute inset-0 bg-black/10"></div> {/* Reduced overlay */}
                              <div className="absolute bottom-3 right-3 flex space-x-2">
                                <a 
                                  href={project.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-md text-xs transition-colors"
                                  title="View on GitHub/Kaggle"
                                >
                                  <Github className="w-4 h-4" />
                                </a>
                                <a 
                                  href={project.liveUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md text-xs transition-colors"
                                  title="View Live Project"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="lg:w-2/3 p-6">
                            <div className="flex items-start mb-4">
                              <Icon className={`w-8 h-8 ${project.color} mt-1 mr-4 flex-shrink-0`} />
                              <div className="flex-1">
                                <h3 className={`text-2xl font-bold ${project.color} mb-2`}>{project.title}</h3>
                                <p className="text-gray-300 text-lg mb-3">{project.description}</p>
                                
                                <div className="flex items-center space-x-2 mb-4">
                                  <Calendar className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-400 font-mono text-sm">{project.date}</span>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                  <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                      <span 
                                        key={techIndex}
                                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-mono"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-2">
                                  {project.achievements.map((achievement, achIndex) => (
                                    <div key={achIndex} className="flex items-start space-x-2">
                                      <span className="text-green-400 mt-1">◦</span>
                                      <span className="text-gray-300 text-sm">{achievement}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

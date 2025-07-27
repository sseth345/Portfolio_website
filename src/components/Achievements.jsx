import React from 'react';
import { Award, Trophy, FileText, Calendar, MapPin } from 'lucide-react';

// Import certificate images from assets folder
import tpcodlCertificate from '../assets/tpcodl_certificate.jpg';
import iitpatnaCertificate from '../assets/iitpatna_certificate.jpg';
import hackathonCertificate from '../assets/hackathon_certificater.jpg';
import wroCertificate from '../assets/wro_certificate.jpg';

const Achievements = () => {
  const achievements = [
    {
      title: "Certificate of Internship",
      organization: "Tata Power Central Odisha Distribution Limited",
      type: "Summer Intern",
      date: "06/2025",
      icon: FileText,
      color: "text-blue-400",
      imageUrl: tpcodlCertificate, // TPCODL certificate image
      certificateUrl: "https://drive.google.com/file/d/1Y-MxpBN5JKXRWkMfftMFIzQb0Rm5ogyr/view?usp=sharing", // TPCODL certificate PDF
      windowTitle: "tpcodl_internship.pdf",
      description: "Completed comprehensive summer internship program"
    },
    {
      title: "Winner – TechnoVIT 2024 Full-Stack Hackathon",
      organization: "BandVIT",
      type: "1st Place",
      date: "09/2024",
      location: "VIT Campus",
      icon: Trophy,
      color: "text-yellow-400",
      imageUrl: hackathonCertificate, // Hackathon certificate image
      certificateUrl: "https://drive.google.com/file/d/1gg0mce8VVbsIsbpH2HR1bskitAYKqEuI/view?usp=sharing", // Hackathon certificate PDF
      windowTitle: "technovit_winner.pdf",
      description: "Competed among 100+ teams from VIT and different colleges, with a team of 3"
    },
    {
      title: "Certificate of Internship",
      organization: "IIT Patna",
      type: "Research Intern (Machine Learning & Deep Learning)",
      date: "06/2024",
      icon: FileText,
      color: "text-green-400",
      imageUrl: iitpatnaCertificate, // IIT Patna certificate image
      certificateUrl: "https://drive.google.com/file/d/1htfKmFC5WAN1lZL4zMxQ6PxDBE8L1Cnt/view?usp=sharing", // IIT Patna certificate PDF
      windowTitle: "iit_patna_internship.pdf",
      description: "Research internship in Computer Science Department"
    },
    {
      title: "World Robotics Olympiad India 2018",
      organization: "WRO India",
      type: "3rd Place, Regional Championship",
      date: "08/2018",
      location: "Varanasi",
      icon: Award,
      color: "text-purple-400",
      imageUrl: wroCertificate, // WRO certificate image
      certificateUrl: "https://drive.google.com/file/d/11_BEyQHcMKtLpeJM5_eBMcSLNTV0dZo8/view?usp=sharing", // WRO certificate PDF
      windowTitle: "wro_bronze_medal.pdf",
      description: "Bronze medal in regional robotics championship"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 font-mono text-sm">Achievements.jsx</span>
            <div className="w-16"></div>
          </div>

          <div className="p-8">
            <div className="font-mono space-y-6">
              <div className="text-gray-400">
                <span className="text-green-400">siddharth@vit:~$</span> cat certifications_achievements.json
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="text-green-400"># </span>Certifications & Achievements
                </h2>

                {/* Vertical Tiles Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="bg-gray-800/50 border border-gray-600 rounded-lg overflow-hidden hover:border-gray-500 transition-colors">
                        
                        {/* Certificate Image Window */}
                        <div className="relative">
                          <div className="bg-gray-800 px-3 py-2 border-b border-gray-600">
                            <div className="flex items-center justify-between">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              <span className="text-gray-400 font-mono text-xs">{achievement.windowTitle}</span> {/* Dynamic window title */}
                            </div>
                          </div>
                          <div className="relative h-48 bg-gray-700 flex items-center justify-center">
                            <img 
                              src={achievement.imageUrl} 
                              alt={`${achievement.title} certificate`} 
                              className="w-full h-full object-contain bg-white p-2" // Changed to object-contain with white background
                            />
                            <div className="absolute inset-0 bg-black/10"></div> {/* Reduced overlay for better visibility */}
                            <a 
                              href={achievement.certificateUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="absolute bottom-3 right-3 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-xs font-mono transition-colors flex items-center space-x-1"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              <span>View</span>
                            </a>
                          </div>
                        </div>

                        {/* Achievement Details */}
                        <div className="p-6">
                          <div className="flex items-start mb-4">
                            <Icon className={`w-6 h-6 ${achievement.color} mt-1 mr-3 flex-shrink-0`} />
                            <div className="flex-1">
                              <h3 className={`text-lg font-bold ${achievement.color} mb-1`}>{achievement.title}</h3>
                              <p className="text-white text-sm font-medium mb-2">{achievement.organization}</p>
                              <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                              
                              <div className="flex flex-col space-y-1 text-xs text-gray-400 font-mono">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{achievement.date}</span>
                                </div>
                                {achievement.location && (
                                  <div className="flex items-center space-x-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{achievement.location}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full bg-gray-700 ${achievement.color} whitespace-nowrap`}>
                              {achievement.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Summary Stats */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">1</div>
                    <div className="text-sm text-gray-400">Hackathon Win</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">3</div>
                    <div className="text-sm text-gray-400">Certifications</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">2</div>
                    <div className="text-sm text-gray-400">Research Projects</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">1</div>
                    <div className="text-sm text-gray-400">National Award</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

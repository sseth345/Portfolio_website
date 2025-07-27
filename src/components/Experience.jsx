import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

// Import images from assets folder
import tpcodlLogo from '../assets/tpcodl_logo.jpg';
import iitPatnaLogo from '../assets/iitpatna_logo.png';
import ieeeLogo from '../assets/ieee_logo.jpg';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Lead",
      company: "IEEE Photonics Society",
      location: "Chennai, India",
      duration: "08/2024 – Present",
      type: "Leadership Role",
      color: "text-purple-400",
      imageUrl: ieeeLogo,
      windowTitle: "chapter",
      certificateUrl: "https://www.linkedin.com/company/ieee-photonics-society-student-chapter-vit-chennai/", // IEEE LinkedIn URL
      achievements: [
        "Promoted to Technical Lead for session 2025-26",
        "Spearheaded technical webinars and interactive workshops, engaging 100+ attendees",
        "Driving industry-academic collaboration as Core member"
      ]
    },
    {
      title: "Summer Intern",
      company: "Tata Power Central Odisha Distribution Limited",
      location: "Bhubaneswar, India",
      duration: "05/2025 – 07/2025",
      type: "Industry Internship",
      color: "text-blue-400",
      imageUrl: tpcodlLogo,
      windowTitle: "corporation",
      certificateUrl: "https://www.linkedin.com/company/tpcentralodishadistributionlimited/posts/?feedView=all", // TPCODL LinkedIn URL
      achievements: [
        "Developed Android apps, including a Spot Billing solution in Kotlin",
        "Reduced manual errors by 67% and improved billing efficiency by 43%",
        "Enabled efficient on-device face detection with Google ML Kit",
        "Increased analysis speed by 80% and achieved over 90% detection accuracy"
      ]
    },
    {
      title: "Research Intern",
      company: "Dept. of Computer Science, Indian Institute of Technology(IIT), Patna",
      location: "Patna, India",
      duration: "05/2024 – 06/2024",
      type: "Research Internship",
      color: "text-green-400",
      imageUrl: iitPatnaLogo,
      windowTitle: "institute",
      certificateUrl: "https://www.linkedin.com/school/indian-institute-of-technology-patna/", // IIT Patna LinkedIn URL
      achievements: [
        "Worked on deep learning models to forecast air pollutant exceedances across 6 Indian megacities",
        "Conducted data preprocessing, model development, and analysis under HOD CSE Department",
        "Gained hands-on experience in time series forecasting",
        "Processed 5+ years of data for comprehensive analysis"
      ]
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
            <span className="text-gray-400 font-mono text-sm">Experience.jsx</span>
            <div className="w-16"></div>
          </div>

          <div className="p-8">
            <div className="font-mono space-y-6">
              <div className="text-gray-400">
                <span className="text-green-400">siddharth@vit:~$</span> cat work_experience.json
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="text-green-400"># </span>Work Experience & Extracurriculars
                </h2>

                {/* Vertical Tiles Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {experiences.map((exp, index) => (
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
                            <span className="text-gray-400 font-mono text-xs">{exp.windowTitle}</span> {/* Dynamic window title */}
                          </div>
                        </div>
                        <div className="relative h-48 bg-gray-700 flex items-center justify-center">
                          <img 
                            src={exp.imageUrl} 
                            alt={`${exp.title} certificate`} 
                            className="w-full h-full object-contain bg-white p-4"
                          />
                          <div className="absolute inset-0 bg-black/10"></div>
                          <a 
                            href={exp.certificateUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute bottom-3 right-3 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-xs font-mono transition-colors flex items-center space-x-1"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Visit</span> {/* Changed to Visit for LinkedIn pages */}
                          </a>
                        </div>
                      </div>

                      {/* Experience Details */}
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <Briefcase className={`w-6 h-6 ${exp.color} mt-1 mr-3 flex-shrink-0`} />
                          <div className="flex-1">
                            <h3 className={`text-lg font-bold ${exp.color} mb-1`}>{exp.title}</h3>
                            <p className="text-white text-sm font-medium mb-2">{exp.company}</p>
                            <div className="flex flex-col space-y-1 text-xs text-gray-400 font-mono">
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{exp.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{exp.duration}</span>
                              </div>
                            </div>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full bg-gray-700 ${exp.color} whitespace-nowrap`}>
                            {exp.type}
                          </span>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-2">
                              <ChevronRight className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

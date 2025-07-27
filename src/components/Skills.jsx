import React from 'react';
import { Code, Database, Smartphone, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: ["C++", "Java", "JavaScript (ES6+)", "Python"]
    },
    {
      icon: Code,
      title: "Web Technologies", 
      color: "text-green-400",
      skills: ["HTML5", "CSS3", "React.js", "Next.js", "Express.js", "REST APIs"]
    },
    {
      icon: Smartphone,
      title: "App Technologies",
      color: "text-purple-400", 
      skills: ["React Native", "Kotlin", "Supabase", "Firebase"]
    },
    {
      icon: Database,
      title: "Backend & Databases",
      color: "text-yellow-400",
      skills: ["Node.js", "MongoDB", "SupaBase", "MySQL"]
    },
    {
      icon: Brain,
      title: "Data Science & ML",
      color: "text-pink-400",
      skills: ["Data Analysis", "Visualization", "Azure AI", "Excel", "Kaggle", "Google Colab"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "text-orange-400",
      skills: ["Project Leadership", "Agile Development", "Cross-Functional Collaboration", "Effective Communication"]
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
            <span className="text-gray-400 font-mono text-sm">Skills.jsx</span>
            <div className="w-16"></div>
          </div>

          <div className="p-8">
            <div className="font-mono space-y-6">
              <div className="text-gray-400">
                <span className="text-green-400">siddharth@vit:~$</span> cat technical_skills.json
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="text-green-400"># </span>Technical Skills
                </h2>

                {/* 3x3 Grid Layout - 2 Rows of 3 tiles each */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Back to 3 columns for proper 3x3 layout */}
                  {skillCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <div key={index} className="bg-gray-800/50 border border-gray-600 rounded-lg overflow-hidden hover:border-gray-500 transition-colors">
                        
                        {/* Category Window Header with increased size */}
                        <div className="bg-gray-800 px-4 py-4 border-b border-gray-600">
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Icon className={`w-5 h-5 ${category.color}`} />
                              <span className={`font-mono text-sm font-bold ${category.color}`}>
                                {category.title}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Category Content with Normal Text Skills */}
                        <div className="p-5">
                          <div className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="flex items-center space-x-3">
                                <span className="text-green-400 font-bold">▸</span>
                                <span className="text-gray-300 font-normal text-sm">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Skills Summary */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">4</div>
                    <div className="text-sm text-gray-400">Programming Languages</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">6</div>
                    <div className="text-sm text-gray-400">Web Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">4</div>
                    <div className="text-sm text-gray-400">Mobile & Cloud</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-pink-400">6</div>
                    <div className="text-sm text-gray-400">Data & Analytics</div>
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

export default Skills;

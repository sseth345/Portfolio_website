import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 font-mono text-sm">Education.jsx</span>
            <div className="w-16"></div>
          </div>

          <div className="p-8">
            <div className="font-mono space-y-6">
              <div className="text-gray-400">
                <span className="text-green-400">siddharth@vit:~$</span> cat education.json
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="text-green-400"># </span>Education
                </h2>

                <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-8 h-8 text-purple-400" />
                      <div>
                        <h3 className="text-xl font-bold text-white">Vellore Institute of Technology</h3>
                        <p className="text-blue-400">Bachelor of Technology in Computer Science with AI and Robotics</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>07/2023 – Expected 06/2027</span>
                      </div>
                      <div className="text-green-400 font-bold text-lg mt-1">CGPA: 8.37</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">Relevant Coursework:</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Data Structures and Algorithms",
                        "Object-Oriented Programming", 
                        "Web Technologies",
                        "Database Management Systems",
                        "Computer Networks",
                        "Operating Systems"
                      ].map((course, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="text-green-400">▸</span>
                          <span className="text-gray-300">{course}</span>
                        </div>
                      ))}
                    </div>
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

export default Education;

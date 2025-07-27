import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 font-mono text-sm">About.jsx</span>
            <div className="w-16"></div>
          </div>

          <div className="p-8">
            <div className="font-mono space-y-6">
              <div className="text-gray-400">
                <span className="text-green-400">siddharth@vit:~$</span> cat about_me.md
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-green-400"># </span>About Siddharth Seth
                </h2>

                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Hey there! I'm a passionate <span className="text-blue-400">Computer Science student</span> at VIT, 
                    specializing in <span className="text-purple-400">AI and Robotics</span>. As a <span className="text-green-400">Technical Lead at IEEE Photonics Society</span>, 
                    I love building solutions that make a real impact.
                  </p>
                  
                  <p>
                    My journey spans from <span className="text-green-400">Android development</span> to <span className="text-yellow-400">full-stack web applications</span>, 
                    <span className="text-pink-400"> machine learning research</span>, and cutting-edge <span className="text-cyan-400">AI solutions</span>. 
                    I believe in clean code, innovative thinking, and collaborative teamwork.
                  </p>
                  
                  <p>
                    Currently maintaining a <span className="text-green-400">CGPA of 8.37</span> while actively 
                    contributing to various projects and leading technical initiatives. My recent work includes 
                    reducing <span className="text-orange-400">manual errors by 67%</span> through innovative Android solutions.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                  <div className="text-sm text-gray-400 mb-2">
                    <span className="text-green-400">siddharth@vit:~$</span> cat contact.txt
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="text-blue-400">📧 sethsiddharth345@gmail.com</div>
                    <div className="text-green-400">📱 +91-8521138416</div>
                    <div className="text-purple-400">💼 linkedin.com/in/sseth345</div>
                    <div className="text-yellow-400">🔗 github.com/sseth345</div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">3+</div>
                    <div className="text-sm text-gray-400">Major Projects</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">3</div>
                    <div className="text-sm text-gray-400">Internships</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">100+</div>
                    <div className="text-sm text-gray-400">Workshop Attendees</div>
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

export default About;

import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sethsiddharth345@gmail.com",
      link: "mailto:sethsiddharth345@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8521138416",
      link: "tel:+918521138416",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sseth345",
      link: "https://linkedin.com/in/sseth345",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub", 
      value: "github.com/sseth345",
      link: "https://github.com/sseth345",
      color: "text-gray-400"
    }
  ];

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
            <span className="text-gray-400 font-mono text-sm">Contact.jsx</span>
            <div className="w-16"></div>
          </div>

          <div className="p-8">
            <div className="font-mono space-y-6">
              <div className="text-gray-400">
                <span className="text-green-400">siddharth@vit:~$</span> ./connect_with_me.sh
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="text-green-400"># </span>Let's Connect
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                      <span className="text-green-400">$ </span>Contact Information
                    </h3>
                    
                    <div className="space-y-4">
                      {contactInfo.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                          <a
                            key={index}
                            href={contact.link}
                            target={contact.link.startsWith('http') ? '_blank' : '_self'}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors group"
                          >
                            <Icon className={`w-6 h-6 ${contact.color} group-hover:scale-110 transition-transform`} />
                            <div>
                              <p className="text-gray-400 text-sm">{contact.label}</p>
                              <p className={`${contact.color} font-medium`}>{contact.value}</p>
                            </div>
                          </a>
                        );
                      })}
                    </div>

                    <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-400 font-semibold">Current Location</span>
                      </div>
                      <p className="text-gray-300">Vellore Institute of Technology (VIT), Chennai, India</p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                      <span className="text-green-400">$ </span>Send Message
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors resize-none"
                          placeholder="Your message here..."
                          required
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-mono transition-all duration-200 hover:scale-105"
                      >
                        <Send className="w-5 h-5" />
                        <span>./send_message.sh</span>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-400">
                    <span className="text-green-400">siddharth@vit:~$</span> echo "Looking forward to connecting with you!"
                  </p>
                  <p className="text-yellow-400 mt-2">Looking forward to connecting with you! 🚀</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

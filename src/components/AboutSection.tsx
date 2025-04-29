import React from 'react';
import { CheckCircle2, Server, Database, Code, Laptop, Layout } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const skills = [
    { name: 'Laravel', level: 70 },
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 80 },
    { name: 'JS', level: 70 },
    { name: 'PHP', level: 50 },
    { name: 'MySQL', level: 70 },
    { name: 'API Development', level: 70 },
  ];

  return (
    <section 
      id="about" 
      className={`py-20 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
            
            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a skilled web developer with a passion for creating beautiful, functional websites. 
              With a strong background in Laravel, MySQL, HTML, SASS, JavaScript, Bulma CSS, and Bootstrap, 
              I am a full-stack developer capable of handling every aspect of building a website from scratch.
            </p>
            
            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I have a keen eye for design and a deep understanding of how to build user-friendly interfaces 
              that provide an exceptional user experience. I'm committed to staying current with the latest 
              technologies and trends in web development to ensure that my clients receive the best, most 
              modern solutions for their needs.
            </p>

            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I specialize in developing maintainable and well-tested code using Laravel best practices. 
              My approach focuses on clean architecture, performance optimization, and security.
            </p>
            
            <div className="space-y-3 mb-8">
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Development Philosophy
              </h3>
              
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="text-red-600 mt-1 mr-2" size={20} />
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>Clean Code:</strong> Writing readable, maintainable code that follows SOLID principles
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-red-600 mt-1 mr-2" size={20} />
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>Test-Driven Development:</strong> Ensuring reliability through comprehensive test coverage
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-red-600 mt-1 mr-2" size={20} />
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>Performance Optimization:</strong> Building applications that scale efficiently
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-red-600 mt-1 mr-2" size={20} />
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>Security-First Mindset:</strong> Implementing best practices to protect data and users
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className={`rounded-xl p-8 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className="h-full rounded-full bg-red-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                <div className={`p-4 rounded-lg text-center ${
                  darkMode ? 'bg-gray-700' : 'bg-white shadow'
                }`}>
                  <Server className={`mx-auto mb-2 ${darkMode ? 'text-red-500' : 'text-red-600'}`} size={24} />
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Backend Development
                  </p>
                </div>
                <div className={`p-4 rounded-lg text-center ${
                  darkMode ? 'bg-gray-700' : 'bg-white shadow'
                }`}>
                  <Database className={`mx-auto mb-2 ${darkMode ? 'text-red-500' : 'text-red-600'}`} size={24} />
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Database Design
                  </p>
                </div>
                <div className={`p-4 rounded-lg text-center ${
                  darkMode ? 'bg-gray-700' : 'bg-white shadow'
                }`}>
                  <Code className={`mx-auto mb-2 ${darkMode ? 'text-red-500' : 'text-red-600'}`} size={24} />
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    API Development
                  </p>
                </div>
                <div className={`p-4 rounded-lg text-center ${
                  darkMode ? 'bg-gray-700' : 'bg-white shadow'
                }`}>
                  <Laptop className={`mx-auto mb-2 ${darkMode ? 'text-red-500' : 'text-red-600'}`} size={24} />
                  <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Frontend Integration
                  </p>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
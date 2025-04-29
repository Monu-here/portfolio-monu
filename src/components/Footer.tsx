import React from 'react';
import { Github, Linkedin, Twitter, Mail ,Facebook } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Monu | Laravel Dev. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/monu-here" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/monu-thakur/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://facebook.com/tmonu995" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="mailto:kumar.monuthakur12@gmail.com" 
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
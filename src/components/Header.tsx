import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? `${darkMode ? 'bg-gray-900/95 shadow-lg' : 'bg-white/95 shadow-md'}`
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">
              <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Monu | Laravel </span>
              <span className="text-red-600">Dev</span>
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className={`text-sm font-medium hover:text-red-600 transition-colors ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`text-sm font-medium hover:text-red-600 transition-colors ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`text-sm font-medium hover:text-red-600 transition-colors ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`text-sm font-medium hover:text-red-600 transition-colors ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center">
          
            
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
              ) : (
                <Menu size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#projects"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
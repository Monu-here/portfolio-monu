import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  // Check user's preference or system preference for dark mode
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : prefersDarkMode;
  });
  
  // Update localStorage when dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-gray-950 text-white';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-white text-gray-900';
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Update the document title
  useEffect(() => {
    document.title = 'Monu | Laravel Dev';
  }, []);
  
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
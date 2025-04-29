import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <main>
      <HeroSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
    </main>
  );
};

export default Home;
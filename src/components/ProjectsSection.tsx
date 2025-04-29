import React, { useState, useEffect } from 'react';
import { projects as fallbackProjects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { fetchProjects } from '../utils/api';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetchProjects();
        if (response.success && response.data) {
          setProjects(response.data);
        } else {
          // Fallback to local data if API fails
          console.warn('Using fallback project data');
        }
      } catch (err) {
        setError('Failed to load projects');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);
  
  // Get unique technologies from all projects
  const allTechnologies = [...new Set(
    projects.flatMap(project => project.technologies)
  )].sort();
  
  const filteredProjects = filter 
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  if (loading) {
    return (
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/4 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Failed to load projects, using fallback data');
  }

  return (
    <section 
      id="projects" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore my Laravel-based projects. Each one demonstrates different techniques and 
            solutions for real-world problems.
          </p>
        </div>
        
        <div className="flex justify-center mb-8 overflow-x-auto py-2">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === null
                  ? 'bg-red-600 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === tech
                    ? 'bg-red-600 text-white'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
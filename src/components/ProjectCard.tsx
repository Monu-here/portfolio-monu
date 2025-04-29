import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, darkMode }) => {
  return (
    <div 
      className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
        darkMode 
          ? 'bg-gray-800 hover:bg-gray-750' 
          : 'bg-white hover:bg-gray-50'
      }`}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-800 transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-red-600/80 text-white rounded-full hover:bg-red-500 transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
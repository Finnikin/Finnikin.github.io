
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ExternalLinkIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-sky-500/20 transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
    >
      <div className="relative">
        <img
          src={project.thumbnailUrl}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center">
             <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
             <ExternalLinkIcon className="w-6 h-6 text-slate-400 group-hover:text-sky-400 transition-colors duration-300" />
        </div>
       
        <p className="mt-2 text-slate-400 text-sm">
          {project.description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;

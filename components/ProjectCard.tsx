
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ExternalLinkIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.035l2.47-2.47a.75.75 0 011.06 1.06l-2.47 2.47a5.25 5.25 0 01-7.424-7.424l4.5-4.5a5.25 5.25 0 017.424 0 1.5 1.5 0 01-2.122 2.122l-2.25-2.25a.75.75 0 00-1.06-1.06l2.25 2.25c.62.62.62 1.636 0 2.256l-1.121 1.121a2.25 2.25 0 01-3.182-3.182l4.5-4.5a2.25 2.25 0 013.182 0z" clipRule="evenodd" />
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

import React from 'react';
import { PROJECTS } from './constants';
import { Project } from './types';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-200">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Header />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {PROJECTS.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <footer className="text-center mt-20 text-slate-500">
            <p>&copy; {new Date().getFullYear()} typa.me. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
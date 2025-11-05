import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center relative">
      {/* This div creates the aurora/glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[80%] md:w-[60%] h-32 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse -z-10"
        aria-hidden="true"
      />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 animated-gradient fade-in-up-1">
        typa.me
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto fade-in-up-2">
        A curated collection of my web applications. Each project is a journey in design and functionality.
      </p>
    </header>
  );
};

export default Header;
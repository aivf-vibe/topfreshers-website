

import React from 'react';

const UXDesign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Top Freshers
              </span>
            </a>
            <a 
              href="/" 
              className="text-amber-400 hover:text-amber-300 flex items-center"
            >
              <span className="mr-2">←</span> Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                UX Design
              </span>
              <br />
              <span className="text-white">Intensive</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Master the complete UX design process from research to portfolio-ready projects
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">UX Design Intensive</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              During this 12-week, hands on learning experience, students are brought through User Interface & User Experience Design industry best practices from the ground up. Through 4 hands-on projects (1 with an outside client!), students will learn Information Architecture, Interaction Design, Interface Design, and Usability Testing. After learning trade tools like Sketch & InVision, you'll have a complete professional UX Design portfolio.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The key components of User Experience Design that allow designers to understand their users, create efficient flows, and optimize for the best user experience possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Core UX Components */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Core Components</h3>
              <div className="space-y-3">
                {['Concept Design', 'Information Architecture', 'Interaction Design', 'Interface Design'].map(item => (
                  <div key={item} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Testing */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Research & Testing</h3>
              <div className="space-y-3">
                {['Personas', 'Qualitative Research', 'Usability Testing', 'User Scenarios'].map(item => (
                  <div key={item} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design & Prototyping */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Design & Prototyping</h3>
              <div className="space-y-3">
                {['Prototyping', 'Wireframes', 'Sketch', 'Professional Development'].map(item => (
                  <div key={item} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl lg:col-span-3">
              <h3 className="text-2xl font-bold text-white mb-4">Project Management & Portfolio</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {['Project Management', 'Project Scoping', 'Portfolio Development', 'Client Projects', 'Industry Tools', 'Career Preparation'].map(item => (
                  <div key={item} className="bg-slate-700/30 p-4 rounded-lg">
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-400/10 to-amber-500/10 backdrop-blur-sm border border-amber-400/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Master UX Design?</h3>
              <p className="text-slate-300 mb-6">
                Join our 12-week intensive program and build your professional UX portfolio
              </p>
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); window.location.href = '/#contact'; }}
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2025 Top Freshers Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UXDesign;


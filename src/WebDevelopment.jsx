
import React from 'react';

const WebDevelopment = () => {
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
                Web Development
              </span>
              <br />
              <span className="text-white">Fellowship</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Master the complete web development stack from front-end to back-end
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Front End Development */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <div className="text-4xl mb-4 text-amber-400">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Front End Development</h3>
              <p className="text-slate-300 leading-relaxed">
                Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.
              </p>
              <div className="mt-4">
                <span className="text-amber-400 font-semibold">Technologies:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Bootstrap'].map(tech => (
                    <span key={tech} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Back End Development */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <div className="text-4xl mb-4 text-amber-400">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Back End Development</h3>
              <p className="text-slate-300 leading-relaxed">
                Build the core computational logic of a website or web application. This includes interaction with a database or third-party integrations, and ensuring data integrity.
              </p>
              <div className="mt-4">
                <span className="text-amber-400 font-semibold">Technologies:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Node.js', 'Python', 'Django', 'Express', 'MongoDB', 'PostgreSQL'].map(tech => (
                    <span key={tech} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Development Tools */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <div className="text-4xl mb-4 text-amber-400">🛠️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Development Tools</h3>
              <p className="text-slate-300 leading-relaxed">
                Additional applications or software that developers and designers can use to increase productivity or functionality of websites.
              </p>
              <div className="mt-4">
                <span className="text-amber-400 font-semibold">Tools:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['VS Code', 'Git', 'Docker', 'Webpack', 'Postman', 'Figma'].map(tool => (
                    <span key={tool} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm text-slate-300">{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* UX Processes */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <div className="text-4xl mb-4 text-amber-400">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">UX Processes</h3>
              <p className="text-slate-300 leading-relaxed">
                The key components of User Experience Design that allow designers to understand their users, create efficient flows, and optimize for the best user experience possible.
              </p>
              <div className="mt-4">
                <span className="text-amber-400 font-semibold">Processes:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'User Journey', 'A/B Testing'].map(process => (
                    <span key={process} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm text-slate-300">{process}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Concept Design */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl lg:col-span-2">
              <div className="text-4xl mb-4 text-amber-400">💡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Concept Design</h3>
              <p className="text-slate-300 leading-relaxed">
                Miscellaneous tools or concepts a developer or designer should understand to create comprehensive web solutions.
              </p>
              <div className="mt-4">
                <span className="text-amber-400 font-semibold">Concepts:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Responsive Design', 'API Integration', 'Security Best Practices', 'Performance Optimization', 'SEO', 'Accessibility'].map(concept => (
                    <span key={concept} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm text-slate-300">{concept}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-400/10 to-amber-500/10 backdrop-blur-sm border border-amber-400/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Web Development Journey?</h3>
              <p className="text-slate-300 mb-6">
                Join our 11-week intensive program and become a full-stack web developer
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

export default WebDevelopment;

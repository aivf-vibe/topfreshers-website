



import React from 'react';

const Algorithms = () => {
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
                Algorithms & Data
              </span>
              <br />
              <span className="text-white">Structures</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Master essential frameworks for solving complex coding challenges
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Course Overview</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Algorithms and Data Structures are the essential frameworks for solving almost any coding challenges. To choose the right approach to a particular problem and forge an effective solution, one needs to understand the relative strengths and weaknesses of each of these tools & techniques.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              In this course, students will examine, create, compare and test the major types of algorithms and data structures. We'll cover how to optimize the code they've already mastered and how to create more advanced tools as necessary. Learn to think like a computer scientist, and take an engineering approach to solving complex problems.
            </p>
            <p className="text-slate-300 leading-relaxed">
              This course is programming language-agnostic, the developmental assignments & activities can be in any language, such as Java or C or Python (as per their choice).
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Course Content */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Course Content</h3>
              <div className="space-y-3">
                {['Number base systems', 'Recursions', 'Sorting algorithms and Big O analysis', 'Arrays and dynamic arrays', 'Lists, stacks and queues', 'Hash tables and binary trees', 'Build data structures from scratch'].map(item => (
                  <div key={item} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Approach */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Learning Approach</h3>
              <div className="space-y-3">
                {['Hands-on learning', 'Language-agnostic approach', 'Real-world problem solving', 'Performance optimization', 'Code optimization techniques', 'Engineering mindset'].map(item => (
                  <div key={item} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Supported Languages</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {['Java', 'C', 'Python'].map(lang => (
                  <div key={lang} className="bg-slate-700/30 p-6 rounded-lg text-center">
                    <div className="text-3xl mb-2">{lang === 'Java' ? '☕' : lang === 'C' ? '⚡' : '🐍'}</div>
                    <span className="text-slate-300 font-semibold">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-400/10 to-amber-500/10 backdrop-blur-sm border border-amber-400/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Every learner has a unique learning need and style!</h3>
              <p className="text-slate-300 mb-6">
                Our entire program has been developed with YOUR students in mind. Start your algorithm mastery journey today.
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

export default Algorithms;




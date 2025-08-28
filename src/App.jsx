



import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Software Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Thank you for your interest! We will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', program: 'Software Development', message: '' });
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const stats = [
    { number: "5000+", label: "Students Trained", icon: "👨‍🎓" },
    { number: "95%", label: "Placement Rate", icon: "🎯" },
    { number: "₹35 LPA", label: "Average CTC", icon: "💰" },
    { number: "50+", label: "Hiring Partners", icon: "🏢" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-400/10 to-amber-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x * 0.05}px`,
            bottom: `${mousePosition.y * 0.05}px`,
            transform: `translateY(${-scrollY * 0.2}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Top Freshers
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'home' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Home</button>
              <button onClick={() => scrollToSection('meet')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'meet' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Meet</button>
              <button onClick={() => scrollToSection('programs')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'programs' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Programs</button>
              <button onClick={() => scrollToSection('success')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'success' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Success</button>
              <button onClick={() => scrollToSection('contact')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'contact' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Contact</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-amber-400 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Home</button>
                <button onClick={() => { scrollToSection('meet'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'meet' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Meet</button>
                <button onClick={() => { scrollToSection('programs'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'programs' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Programs</button>
                <button onClick={() => { scrollToSection('success'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'success' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Success</button>
                <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'contact' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Welcome to</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Top Freshers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your career with industry-leading training programs designed to make you job-ready
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('programs')}
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                Explore Programs
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-amber-400/50 text-amber-400 px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-amber-400">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Section */}
      <section id="meet" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">About</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Top Freshers
                </span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Top Freshers Technologies is a leading training institute in India, dedicated to bridging the gap between academic learning and industry requirements. We specialize in providing comprehensive technical training programs that prepare students for successful careers in the IT industry.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Our mission is to empower the next generation of tech professionals with cutting-edge skills, practical experience, and industry insights. We believe in transforming fresh graduates into industry-ready professionals through intensive, hands-on training programs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-amber-400 mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-semibold">Industry-Ready Curriculum</h4>
                    <p className="text-slate-400">Designed in partnership with top IT companies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-400 mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-semibold">Expert Faculty</h4>
                    <p className="text-slate-400">Learn from industry veterans with 15+ years experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-400 mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-semibold">Guaranteed Placement</h4>
                    <p className="text-slate-400">95% placement success rate with dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                  To become India's most trusted partner in technical education, creating a bridge between academic knowledge and industry demands. We envision a future where every student has access to world-class technical training that leads to meaningful careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Our</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive training programs designed to make you industry-ready
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Web Development Fellowship */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-4xl mb-4 text-amber-400">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Development Fellowship</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Learn how to code and design web and mobile responsive applications professionally in one immersive, project-based course. Students must complete 9-week in-person training which is followed by a 2-week apprenticeship.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-semibold">Duration: 11 weeks</span>
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* UX Design */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-4xl mb-4 text-amber-400">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">UX Design</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                During this 12-week, hands on learning experience, students are brought through User Interface & User Experience Design industry best practices from the ground up. Through 4 hands-on projects (1 with an outside client!), students will learn Information Architecture, Interaction Design, Interface Design, and Usability Testing.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-semibold">Duration: 12 weeks</span>
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Algorithms and Data Structures */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-4xl mb-4 text-amber-400">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Algorithms and Data Structures</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Algorithms and Data Structures are the essential frameworks for solving almost any coding challenges. This course covers major types of algorithms and data structures using Java, C, or Python. Learn to think like a computer scientist and take an engineering approach to solving complex problems.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-semibold">Languages: Java/C/Python</span>
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Campus to Career */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-4xl mb-4 text-amber-400">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Campus to Career – Employability Training</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                A comprehensive 150-hour program designed to bridge the gap between campus education and industry requirements. Includes soft skills, technical interview preparation, and real-world project experience.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-semibold">Duration: 150 hours</span>
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Success</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Hear from our successful alumni who transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", role: "Software Engineer at Google", salary: "₹45 LPA", image: "👩‍💻" },
              { name: "Rahul Kumar", role: "UX Designer at Microsoft", salary: "₹38 LPA", image: "👨‍🎨" },
              { name: "Anita Patel", role: "Data Scientist at Amazon", salary: "₹42 LPA", image: "👩‍🔬" }
            ].map((story, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
                <div className="text-6xl mb-4">{story.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{story.name}</h3>
                <p className="text-amber-400 mb-2">{story.role}</p>
                <p className="text-slate-400">{story.salary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Get in</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to start your journey? Contact us today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-amber-400 mr-3">📧</div>
                  <span className="text-slate-300">info@topfreshers.com</span>
                </div>
                <div className="flex items-center">
                  <div className="text-amber-400 mr-3">📱</div>
                  <span className="text-slate-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <div className="text-amber-400 mr-3">📍</div>
                  <span className="text-slate-300">Bangalore, India</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Program</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white"
                >
                  <option>Web Development Fellowship</option>
                  <option>UX Design</option>
                  <option>Algorithms & Data Structures</option>
                  <option>Campus to Career</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && (
                <div className={`text-center p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Top Freshers
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Transforming careers through industry-leading technical education
            </p>
            <p className="text-slate-500">
              © 2025 Top Freshers Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;




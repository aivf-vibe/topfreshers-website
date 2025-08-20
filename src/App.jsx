
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Software Development',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'programs', 'success', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitMessage('Thank you! We\'ll get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'Software Development',
      message: ''
    })
    setIsSubmitting(false)
    
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  const testimonials = [
    { name: "Ankit Sharma", role: "Software Engineer", company: "Google", salary: "₹45 LPA", image: "👨‍💻", story: "TopFreshers helped me crack Google! The structured approach and mock interviews were game-changing.", delay: 0 },
    { name: "Priya Patel", role: "Data Scientist", company: "Microsoft", salary: "₹38 LPA", image: "👩‍🔬", story: "The data science program was exceptional. I went from zero to hero in just 6 months!", delay: 100 },
    { name: "Rahul Kumar", role: "QA Engineer", company: "Amazon", salary: "₹28 LPA", image: "👨‍🔧", story: "The QA program gave me practical skills that directly translated to my role at Amazon.", delay: 200 },
    { name: "Sneha Reddy", role: "Full-Stack Developer", company: "Meta", salary: "₹42 LPA", image: "👩‍💻", story: "The full-stack curriculum is industry-relevant. I felt confident in every interview round.", delay: 300 },
    { name: "Vikram Singh", role: "ML Engineer", company: "Netflix", salary: "₹50 LPA", image: "🤖", story: "The ML specialization was intense but worth it. Landed my dream job at Netflix!", delay: 400 },
    { name: "Neha Gupta", role: "SDET", company: "Apple", salary: "₹35 LPA", image: "🧪", story: "From manual tester to SDET at Apple - TopFreshers made it possible!", delay: 500 }
  ]

  const stats = [
    { number: "1000+", label: "Students Placed", icon: "🎓" },
    { number: "95%", label: "Placement Rate", icon: "📈" },
    { number: "₹35 LPA", label: "Average CTC", icon: "💰" },
    { number: "50+", label: "Hiring Partners", icon: "🏢" }
  ]

  const features = [
    { icon: "🎯", title: "Personalized Learning", desc: "Customized learning paths based on your goals and current skill level", color: "from-blue-500 to-cyan-500" },
    { icon: "👨‍💻", title: "Expert Mentors", desc: "Learn from ex-FAANG engineers with 10+ years of industry experience", color: "from-purple-500 to-pink-500" },
    { icon: "📊", title: "Real Projects", desc: "Work on industry-level projects that showcase your skills to employers", color: "from-green-500 to-emerald-500" },
    { icon: "🎪", title: "Mock Interviews", desc: "Practice with real interview questions from top tech companies", color: "from-orange-500 to-red-500" },
    { icon: "💼", title: "Job Placement", desc: "Dedicated placement support with 95% success rate in top companies", color: "from-indigo-500 to-purple-500" },
    { icon: "🌟", title: "24/7 Support", desc: "Round-the-clock assistance from mentors and peer community", color: "from-pink-500 to-rose-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TopFreshers
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === 'home' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-slate-700 hover:text-blue-600'}`}>Home</button>
                <button onClick={() => scrollToSection('features')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === 'features' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-slate-700 hover:text-blue-600'}`}>Features</button>
                <button onClick={() => scrollToSection('programs')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === 'programs' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-slate-700 hover:text-blue-600'}`}>Programs</button>
                <button onClick={() => scrollToSection('success')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === 'success' ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-slate-700 hover:text-blue-600'}`}>Success Stories</button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-blue-600 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}>Home</button>
                <button onClick={() => scrollToSection('features')} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'features' ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}>Features</button>
                <button onClick={() => scrollToSection('programs')} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'programs' ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}>Programs</button>
                <button onClick={() => scrollToSection('success')} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'success' ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}>Success Stories</button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Master Technical
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Interviews</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-slide-up">
              Join TopFreshers and transform your career with our cutting-edge training programs. 
              From DSA to system design, we've got you covered.
            </p>
            
            {/* Interactive Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${600 + index * 100}ms` }}>
                  <div className="text-4xl mb-2 animate-bounce-slow" style={{ animationDelay: `${index * 200}ms` }}>{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button onClick={() => scrollToSection('programs')} className="bg-gradient-to-r from-yellow-400 to-pink-400 text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <span className="flex items-center">
                  Start Learning Now
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 group">
                <span className="flex items-center">
                  Watch Demo
                  <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <button onClick={() => scrollToSection('features')} className="text-blue-200 hover:text-white transition-colors">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="text-sm mt-2 block">Explore Features</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Choose Us?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We provide everything you need to succeed in technical interviews and land your dream job
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Path</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Select from our industry-leading programs designed for maximum impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Software Development */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                    💻
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Software Development</h3>
                  <p className="text-slate-600 mb-6">Master full-stack development with React, Node.js, and cloud technologies</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Duration</span>
                      <span className="font-semibold">6 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Average CTC</span>
                      <span className="font-semibold text-green-600">₹35 LPA</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Placement Rate</span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                  </div>
                  <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* Data Science */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                    📊
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Science</h3>
                  <p className="text-slate-600 mb-6">Learn Python, ML, AI, and data engineering with real-world projects</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Duration</span>
                      <span className="font-semibold">6 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Average CTC</span>
                      <span className="font-semibold text-green-600">₹40 LPA</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Placement Rate</span>
                      <span className="font-semibold text-green-600">92%</span>
                    </div>
                  </div>
                  <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* QA Engineering */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                    🧪
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">QA Engineering</h3>
                  <p className="text-slate-600 mb-6">Master manual and automation testing with Selenium, Cypress, and more</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Duration</span>
                      <span className="font-semibold">4 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Average CTC</span>
                      <span className="font-semibold text-green-600">₹28 LPA</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Placement Rate</span>
                      <span className="font-semibold text-green-600">90%</span>
                    </div>
                  </div>
                  <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join 1000+ students who transformed their careers with TopFreshers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((story, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white mr-4">
                      {story.image}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{story.name}</h4>
                      <p className="text-slate-600">{story.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {story.company}
                    </span>
                    <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold ml-2">
                      {story.salary}
                    </span>
                  </div>
                  <p className="text-slate-700 italic">"{story.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transform</span> Your Career?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join thousands of successful students who started their journey with us
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div className="text-slate-600">hello@topfreshers.com</div>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      📱
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Phone</div>
                      <div className="text-slate-600">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Location</div>
                      <div className="text-slate-600">Bangalore, India</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                      placeholder="Enter your name" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                      placeholder="Enter your email" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                      placeholder="Enter your phone" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Interested Program</label>
                    <select 
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option>Software Development</option>
                      <option>Data Science</option>
                      <option>QA Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                      placeholder="Tell us about your goals..."
                    />
                  </div>
                  
                  {submitMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
                      {submitMessage}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Get Free Consultation"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                TopFreshers
              </div>
              <p className="text-slate-400 mb-4">
                Empowering freshers to crack technical interviews and build successful careers in top tech companies.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-white">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="text-white">t</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">QA Engineering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interview Prep</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 TopFreshers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

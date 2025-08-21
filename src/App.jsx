


import { useState, useEffect, useRef } from 'react'
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { name: "Ankit Sharma", role: "Software Engineer", company: "Google", salary: "₹45 LPA", image: "👨‍💻", story: "TopFreshers helped me crack Google! The structured approach and mock interviews were game-changing." },
    { name: "Priya Patel", role: "Data Scientist", company: "Microsoft", salary: "₹38 LPA", image: "👩‍🔬", story: "The data science program was exceptional. I went from zero to hero in just 6 months!" },
    { name: "Rahul Kumar", role: "QA Engineer", company: "Amazon", salary: "₹28 LPA", image: "👨‍🔧", story: "The QA program gave me practical skills that directly translated to my role at Amazon." },
    { name: "Sneha Reddy", role: "Full-Stack Developer", company: "Meta", salary: "₹42 LPA", image: "👩‍💻", story: "The full-stack curriculum is industry-relevant. I felt confident in every interview round." },
    { name: "Vikram Singh", role: "ML Engineer", company: "Netflix", salary: "₹50 LPA", image: "🤖", story: "The ML specialization was intense but worth it. Landed my dream job at Netflix!" },
    { name: "Neha Gupta", role: "SDET", company: "Apple", salary: "₹35 LPA", image: "🧪", story: "From manual tester to SDET at Apple - TopFreshers made it possible!" }
  ]

  const stats = [
    { number: "1000+", label: "Students Placed", icon: "🎓" },
    { number: "95%", label: "Placement Rate", icon: "📈" },
    { number: "₹35 LPA", label: "Average CTC", icon: "💰" },
    { number: "50+", label: "Hiring Partners", icon: "🏢" }
  ]

  const features = [
    { icon: "🎯", title: "Personalized Learning", desc: "Customized learning paths based on your goals and current skill level", delay: 0 },
    { icon: "👨‍💻", title: "Expert Mentors", desc: "Learn from ex-FAANG engineers with 10+ years of industry experience", delay: 100 },
    { icon: "📊", title: "Real Projects", desc: "Work on industry-level projects that showcase your skills to employers", delay: 200 },
    { icon: "🎪", title: "Mock Interviews", desc: "Practice with real interview questions from top tech companies", delay: 300 },
    { icon: "💼", title: "Job Placement", desc: "Dedicated placement support with 95% success rate in top companies", delay: 400 },
    { icon: "🌟", title: "24/7 Support", desc: "Round-the-clock assistance from mentors and peer community", delay: 500 }
  ]

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
          className="absolute w-64 h-64 bg-gradient-to-r from-amber-500/5 to-amber-600/5 rounded-full blur-2xl"
          style={{
            right: `${mousePosition.x * 0.03}px`,
            bottom: `${mousePosition.y * 0.03}px`,
            transform: `translateY(${scrollY * -0.15}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                TopFreshers
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'home' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Home</button>
                <button onClick={() => scrollToSection('meet')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'meet' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Meet</button>
                <button onClick={() => scrollToSection('features')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'features' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Features</button>
                <button onClick={() => scrollToSection('programs')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'programs' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Programs</button>
                <button onClick={() => scrollToSection('success')} className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-amber-400 ${activeSection === 'success' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300'}`}>Success</button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-amber-400 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'home' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Home</button>
                <button onClick={() => scrollToSection('meet')} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'meet' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Meet</button>
                <button onClick={() => scrollToSection('features')} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'features' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Features</button>
                <button onClick={() => scrollToSection('programs')} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'programs' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Programs</button>
                <button onClick={() => scrollToSection('success')} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === 'success' ? 'text-amber-400 bg-slate-700/50' : 'text-slate-300 hover:bg-slate-700/50'}`}>Success</button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-amber-500/5" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Master
              </span>
              <br />
              <span className="text-white">
                Technical
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Interviews
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform your career with our elite training programs. 
              From DSA to system design, we craft excellence.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-12">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl mb-2 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('programs')} 
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
              </button>
              <button className="border border-amber-400/50 text-amber-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Parallax Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-amber-500 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </section>

      {/* Meet Section - After Home */}
      <section id="meet" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Meet</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Top Freshers
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transforming India's education landscape through innovative learning solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">The Education Revolution</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                The education scenario in India has been a great success story with progressive steps taken by the government greatly helped by many private sector initiatives. Institutions have been established across the country with an aim to make education accessible and inclusive. A great many success stories are a testament to this growth.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                But the high growth has also given rise to challenges that need urgent attention. Maintaining quality, given the sheer numbers in India is a huge task that is testing even the most versatile institutions. Employability is another area of concern where interventions are required to bridge the industry-academia gap.
              </p>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-amber-400 mb-3">Our Vision</h4>
                <p className="text-slate-300">
                  Top Freshers Technologies Pvt Ltd., aims to address these areas and provide learning solutions to institutions that will help them overcome these challenges.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
                <div className="text-4xl mb-4 text-amber-400">🎯</div>
                <h4 className="text-2xl font-bold text-white mb-3">Innovative Learning Models</h4>
                <p className="text-slate-400">
                  We propose to design learning programs and deliver them through innovative models to help institutions and students gain access to an eco-system of educational resources.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
                <div className="text-4xl mb-4 text-amber-400">🌐</div>
                <h4 className="text-2xl font-bold text-white mb-3">Digital Education Focus</h4>
                <p className="text-slate-400">
                  We are specifically looking at digital education, employability programs and vocational education in designing these learning solutions.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
                <div className="text-4xl mb-4 text-amber-400">🚀</div>
                <h4 className="text-2xl font-bold text-white mb-3">Mission Statement</h4>
                <p className="text-slate-400">
                  Create a sustainable industry-ready talent pipeline by scaling quality capacity. Enhance employability at all levels, leveraging technology and our experience in large scale skill development, in a sustainable manner.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">1000+</div>
              <div className="text-slate-300">Institutions Partnered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">50K+</div>
              <div className="text-slate-300">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">95%</div>
              <div className="text-slate-300">Placement Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - New Comprehensive Content */}
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
              Industry-focused training programs designed to make you job-ready
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
                  Read More
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
                  Read More
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
                  Read More
                </button>
              </div>
            </div>

            {/* Campus to Career */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
              <div className="text-4xl mb-4 text-amber-400">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Campus to Career – Employability Training</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                An employability enhancement program designed in conjunction with some of the top IT companies in India. The program aims to advance students in the areas of analytical skills, business communication and soft skills. The training program consists of a blended delivery model comprising 150 hours - 50 hours contact session & 100 hours online component.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-amber-400 font-semibold">Duration: 150 hours</span>
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-400/10 to-amber-500/10 backdrop-blur-sm border border-amber-400/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
              <p className="text-slate-300 mb-6">
                Choose from our comprehensive programs and transform your career with industry-relevant skills
              </p>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Motion */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Excellence
              </span>
              <br />
              <span className="text-white">Redefined</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Crafted for those who demand nothing but the best
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl mb-4 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section with Elegance */}
      <section id="programs" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Choose Your</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Path
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Curated programs for the discerning professional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Software Development", icon: "💻", duration: "6 months", ctc: "₹35 LPA", rate: "95%", color: "from-amber-400 to-amber-500" },
              { title: "Data Science", icon: "📊", duration: "6 months", ctc: "₹40 LPA", rate: "92%", color: "from-amber-400 to-amber-500" },
              { title: "QA Engineering", icon: "🧪", duration: "4 months", ctc: "₹28 LPA", rate: "90%", color: "from-amber-400 to-amber-500" }
            ].map((program, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center text-3xl text-slate-900 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                    <div className="space-y-3 text-slate-400">
                      <div className="flex justify-between">
                        <span>Duration</span>
                        <span className="text-amber-400">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average CTC</span>
                        <span className="text-amber-400">{program.ctc}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Placement Rate</span>
                        <span className="text-amber-400">{program.rate}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => scrollToSection('contact')} 
                      className="w-full mt-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories with Sophistication */}
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
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Where ambition meets achievement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((story, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-2xl text-slate-900 mr-4`}>
                      {story.image}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{story.name}</h4>
                      <p className="text-slate-400">{story.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {story.company}
                    </span>
                    <span className="inline-block bg-slate-700 text-amber-400 px-3 py-1 rounded-full text-sm font-semibold ml-2">
                      {story.salary}
                    </span>
                  </div>
                  <p className="text-slate-400 italic">"{story.story}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Elegance */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Begin Your</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Excellence awaits those who dare
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Connect With Us</h3>
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg flex items-center justify-center text-slate-900 mr-4 group-hover:scale-110 transition-transform">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-slate-400">hello@topfreshers.com</div>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg flex items-center justify-center text-slate-900 mr-4 group-hover:scale-110 transition-transform">
                      📱
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-slate-400">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg flex items-center justify-center text-slate-900 mr-4 group-hover:scale-110 transition-transform">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold text-white">Location</div>
                      <div className="text-slate-400">Bangalore, India</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors" 
                      placeholder="Enter your name" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors" 
                      placeholder="Enter your email" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors" 
                      placeholder="Enter your phone" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Interested Program</label>
                    <select 
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                    >
                      <option>Software Development</option>
                      <option>Data Science</option>
                      <option>QA Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message (Optional)</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors" 
                      placeholder="Tell us about your goals..."
                    />
                  </div>
                  
                  {submitMessage && (
                    <div className="bg-amber-400/10 border border-amber-400/30 text-amber-400 px-4 py-3 rounded-xl">
                      {submitMessage}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent mb-4">
                TopFreshers
              </div>
              <p className="text-slate-400 mb-4">
                Crafting excellence in technical education for the discerning professional.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
                  <span className="text-slate-400 hover:text-slate-900">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
                  <span className="text-slate-400 hover:text-slate-900">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
                  <span className="text-slate-400 hover:text-slate-900">t</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Programs</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">QA Engineering</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Interview Prep</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 TopFreshers. Crafted with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App



import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Shield, Smartphone, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "StimaSense",
      description: "Real-time electricity tracking for Kenyan households - stay informed on power status, outages, and patterns with a clean, responsive interface.",
      tech: ["React", "Node.js", "MongoDB", "Real-time APIs"],
      github: "https://github.com/Themazecrawler",
      live: "#",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "AI Rapid Response",
      description: "An AI-powered emergency response and incident reporting app - built to analyze, route, and respond to crises fast when every second counts.",
      tech: ["AI/ML", "React Native", "Python", "Emergency APIs"],
      github: "https://github.com/Themazecrawler",
      live: "#",
      image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "Bloom",
      description: "A dating app built by and for Black users centered on connection, safety, and real representation in love and community.",
      tech: ["React Native", "Firebase", "Node.js", "Socket.io"],
      github: "https://github.com/Themazecrawler",
      live: "#",
      image: "https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Fullstack Development",
      description: "Building end-to-end web applications with modern frameworks and best practices.",
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Creating native and cross-platform mobile applications for iOS and Android.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Implementing security measures, conducting audits, and protecting digital assets.",
      technologies: ["Penetration Testing", "SIEM", "Vulnerability Assessment", "Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Lisa Amimo
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-purple-600 font-semibold'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-6xl font-bold mx-auto shadow-2xl">
                LA
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-teal-500 bg-clip-text text-transparent">
                Lisa Amimo
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Computer Science Graduate & Fullstack Developer from Kenya, specializing in 
              <span className="text-purple-600 font-semibold"> mobile apps</span>, 
              <span className="text-pink-600 font-semibold"> web development</span>, and 
              <span className="text-teal-600 font-semibold"> cybersecurity</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/Themazecrawler" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors duration-200 group"
              >
                <Github className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lisa-amimo-7a9518225/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors duration-200 group"
              >
                <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
              </a>
              <a 
                href="mailto:amimolisa23@gmail.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors duration-200 group"
              >
                <Mail className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate computer science graduate from Kenya with a love for creating 
                digital solutions that make a difference. My journey in tech has been driven by 
                curiosity and a desire to build applications that not only function beautifully 
                but also solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                During my internship, I gained valuable experience in IT support, data management, 
                and auditing, which gave me a solid foundation in understanding how technology 
                impacts business operations. This experience, combined with my academic background, 
                has shaped my approach to development—always considering security, performance, 
                and user experience.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Currently, I'm building exciting personal and client-facing applications while 
                actively seeking remote opportunities in tech. I believe in continuous learning 
                and staying updated with the latest industry trends and technologies.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  Remote Ready
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Based in Kenya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Computer Science Graduate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Internship Experience in IT</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="text-gray-700">Available for Remote Work</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Currently</h4>
                <p className="text-gray-600">
                  Building applications and seeking remote opportunities in fullstack development, 
                  mobile apps, and cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What I Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I specialize in creating comprehensive digital solutions across multiple platforms and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {skill.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{skill.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{skill.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of applications I've built, demonstrating my technical skills and design sensibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com/Themazecrawler"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, or just chat about tech!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:amimmolisa23@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">amimmolisa23@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+254111508242"
                    className="flex items-center space-x-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">+254 111 508 242</p>
                    </div>
                  </a>

                  <button className="flex items-center space-x-4 p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors duration-200 group w-full">
                    <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">Download CV</p>
                      <p className="text-gray-600">Get my latest resume</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Currently Available</h3>
                <p className="mb-6 opacity-90">
                  I'm actively seeking remote opportunities in fullstack development, 
                  mobile app development, and cybersecurity roles. Let's discuss how 
                  I can contribute to your team!
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Themazecrawler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/lisa-amimo-7a9518225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Lisa Amimo
            </div>
            <p className="text-gray-400 mb-6">
              Computer Science Graduate • Fullstack Developer • Cybersecurity Enthusiast
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/Themazecrawler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lisa-amimo-7a9518225/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:amimmolisa23@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Lisa Amimo. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
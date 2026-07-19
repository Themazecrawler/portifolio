import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants/site';
import { scrollToSection } from '../../utils/scroll';

export function Hero() {
  return (
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
            Computer Science Graduate &amp; Fullstack Developer from Kenya, specializing in
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
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors duration-200 group"
            >
              <Github className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors duration-200 group"
            >
              <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition-colors duration-200 group"
            >
              <Mail className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

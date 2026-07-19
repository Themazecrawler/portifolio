import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants/site';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Lisa Amimo
          </div>
          <p className="text-gray-400 mb-6">
            Computer Science Graduate &bull; Fullstack Developer &bull; Cybersecurity Enthusiast
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lisa Amimo. Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

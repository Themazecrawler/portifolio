import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../constants/site';
import { MagicBentoContainer, MagicCard } from '../reactbits/MagicBento';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#EC4899]">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-[#EC4899] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or just chat about tech!
          </p>
        </div>

        <MagicBentoContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8 flex flex-col">
            <MagicCard className="p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <a
                  href={SOCIAL_LINKS.email}
                  className="relative z-10 flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 group" style={{ backgroundColor: 'rgba(236,72,153,0.08)' }}
                >
                  <div className="w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">Email</p>
                    <p className="text-gray-400">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.phone}
                  className="relative z-10 flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 group" style={{ backgroundColor: 'rgba(236,72,153,0.08)' }}
                >
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">Phone</p>
                    <p className="text-gray-400">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <button className="relative z-10 flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 group w-full" style={{ backgroundColor: 'rgba(236,72,153,0.08)' }}>
                  <div className="w-12 h-12 bg-[#EC4899] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-100">Download CV</p>
                    <p className="text-gray-400">Get my latest resume</p>
                  </div>
                </button>
              </div>
            </MagicCard>

            <MagicCard className="p-8 flex-grow" enableStars={false}>
              <h3 className="text-2xl font-bold mb-4 text-[#EC4899]">Currently Available</h3>
              <p className="mb-6 opacity-90 text-gray-300">
                I'm actively seeking remote opportunities in fullstack development,
                mobile app development, and cybersecurity roles. Let's discuss how
                I can contribute to your team!
              </p>
              <div className="relative z-10 flex space-x-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors duration-200 text-white"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors duration-200 text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </MagicCard>
          </div>

          <MagicCard className="p-8">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Send a Message</h3>

            <form className="relative z-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#EC4899] text-white py-3 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </MagicCard>
        </MagicBentoContainer>
      </div>
    </section>
  );
}

import { useState, type FormEvent } from 'react';
import { DownloadSimple, GithubLogo, LinkedinLogo, EnvelopeSimple, Phone } from '@phosphor-icons/react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../constants/site';
import { MagicBentoContainer, MagicCard } from '../reactbits/MagicBento';
import { PixelScene } from '../reactbits/PixelScene';

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!name || !email || !message) return;

    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href =
      `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Opening your email app with the message ready to send...');
  };

  return (
    <section id="contact" className="pt-24 pb-[400px] relative overflow-hidden">
      <PixelScene className="z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4 text-text">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-text-muted">
              I&apos;m always excited to discuss new opportunities, collaborate on projects, or just chat about tech!
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-chunky border-2 border-pop bg-[rgba(var(--color-pop-rgb),0.12)] self-start">
            <span className="w-2 h-2 rounded-full bg-pop animate-pulse"></span>
            <span className="font-pixel text-xs text-pop">AVAILABLE FOR WORK</span>
          </div>
        </div>

        <MagicBentoContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-8 flex flex-col">
            <MagicCard className="p-8">
              <h3 className="text-2xl font-bold text-text mb-6">Get In Touch</h3>

              <div className="space-y-4">
                <a
                  href={SOCIAL_LINKS.email}
                  className="relative z-10 flex items-center space-x-4 p-4 rounded-chunky border-2 border-border hover:border-accent transition-colors duration-200 group bg-surface-raised"
                >
                  <div className="w-11 h-11 bg-accent rounded-chunky border-2 border-ink flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <EnvelopeSimple className="w-5 h-5 text-ink" weight="bold" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">Email</p>
                    <p className="text-text-muted text-sm">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.phone}
                  className="relative z-10 flex items-center space-x-4 p-4 rounded-chunky border-2 border-border hover:border-accent transition-colors duration-200 group bg-surface-raised"
                >
                  <div className="w-11 h-11 bg-accent rounded-chunky border-2 border-ink flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <Phone className="w-5 h-5 text-ink" weight="bold" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">Phone</p>
                    <p className="text-text-muted text-sm">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href="/resume.pdf"
                  download="Lisa-Amimo-Resume.pdf"
                  className="relative z-10 flex items-center space-x-4 p-4 rounded-chunky border-2 border-border hover:border-pop transition-colors duration-200 group w-full bg-surface-raised"
                >
                  <div className="w-11 h-11 bg-pop rounded-chunky border-2 border-ink flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <DownloadSimple className="w-5 h-5 text-ink" weight="bold" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-text">Download CV</p>
                    <p className="text-text-muted text-sm">Get my latest resume</p>
                  </div>
                </a>
              </div>
            </MagicCard>

            <MagicCard className="p-8 flex-grow" enableStars={false}>
              <h3 className="text-2xl font-bold mb-4 text-accent">Currently Available</h3>
              <p className="mb-6 text-text-muted leading-relaxed">
                I&apos;m actively seeking remote opportunities in fullstack development,
                mobile app development, and cybersecurity roles. Let&apos;s discuss how
                I can contribute to your team!
              </p>
              <div className="relative z-10 flex space-x-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-raised border-2 border-border rounded-chunky hover:border-accent transition-colors duration-200 text-text"
                >
                  <GithubLogo className="w-5 h-5" weight="bold" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-raised border-2 border-border rounded-chunky hover:border-accent transition-colors duration-200 text-text"
                >
                  <LinkedinLogo className="w-5 h-5" weight="bold" />
                </a>
              </div>
            </MagicCard>
          </div>

          <MagicCard className="p-8">
            <h3 className="text-2xl font-bold text-text mb-6">Send a Message</h3>

            <form className="relative z-10 space-y-5" onSubmit={handleSubmit} onInput={() => setStatus(null)}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text-muted mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-surface-raised border-2 border-border text-text placeholder-text-faint rounded-input focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text-muted mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-surface-raised border-2 border-border text-text placeholder-text-faint rounded-input focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-surface-raised border-2 border-border text-text placeholder-text-faint rounded-input focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-ink py-3 rounded-chunky border-2 border-ink shadow-hard press-active font-bold"
              >
                Send Message
              </button>

              {status && (
                <p className="text-sm text-pop text-center" role="status">
                  {status}
                </p>
              )}
            </form>
          </MagicCard>
        </MagicBentoContainer>
      </div>
    </section>
  );
}

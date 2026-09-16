import { ArrowDown } from '@phosphor-icons/react';
import DotField from '../reactbits/DotField';
import ProfileCard from '../reactbits/ProfileCard';
import { scrollToSection } from '../../utils/scroll';
import catAvatar from '../../assets/cat.png';
import codeIcon from '../../assets/codeIcon.png';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 lg:px-12 pt-20 relative overflow-hidden"
    >
      {/* Background dot-matrix field, restricted to the Hero section ONLY */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} className="z-0">
        <DotField
          dotRadius={2}
          dotSpacing={16}
          dotShape="square"
          cursorRadius={420}
          cursorForce={0.1}
          bulgeOnly
          bulgeStrength={55}
          glowRadius={130}
          sparkle
          waveAmplitude={0}
          gradientFrom="rgba(var(--color-accent-rgb), 0.5)"
          gradientTo="rgba(var(--color-pop-rgb), 0.25)"
          glowColor="var(--color-accent-deep)"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <p className="font-pixel text-pop text-sm mb-4 tracking-wide">
            HI THERE, I&apos;M LISA
          </p>

          <h1 className="font-syne text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] text-text">
            Hello,
          </h1>

          <p className="font-inter text-lg md:text-xl text-text-muted max-w-xl leading-relaxed mb-8">
            I&apos;m <span className="font-semibold text-text">Lisa Amimo</span>, a software
            developer specializing in mobile apps, frontend and web development.
          </p>

          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 bg-accent text-ink font-bold px-7 py-4 rounded-chunky border-2 border-ink shadow-hard press-active"
          >
            See my work
            <ArrowDown className="w-5 h-5" weight="bold" />
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ProfileCard
            avatarUrl={catAvatar}
            iconUrl={codeIcon}
            name="Lisa Amimo"
            title="Software Developer"
            handle="lisa.amimo"
            status="Available for work"
            contactText="Contact Me"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            behindGlowEnabled={true}
          />
        </div>
      </div>
    </section>
  );
}

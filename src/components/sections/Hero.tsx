import DotField from '../reactbits/DotField';
import ProfileCard from '../reactbits/ProfileCard';
import catAvatar from '../../assets/cat.png';
import codeIcon from '../../assets/codeIcon.png';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 lg:px-12 pt-20 relative overflow-hidden"
    >
      {/* Background Interactive Dot Field restricted to the Hero section ONLY */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} className="z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          bulgeStrength={67}
          glowRadius={160}
          sparkle
          waveAmplitude={0}
          gradientFrom="#ffcae4"
          gradientTo="#EC4899"
          glowColor="#371124"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-gray-100">
            Hello,
          </h1>

          <p className="font-inter text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl leading-relaxed">
            I'm <span className="font-semibold" style={{ color: '#EC4899' }}>Lisa Amimo</span>, a software
            developer specializing in mobile apps, frontend and web development.
          </p>
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

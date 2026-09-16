import SplitText from '../reactbits/SplitText';
import Grainient from '../reactbits/Grainient';

export function About() {
  return (
    <section id="about" className="py-24 w-full flex flex-col items-end relative overflow-hidden bg-bg">
      {/* Dithered retro-gradient backdrop */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Grainient
          color1={'#ffcae4'}
          color2="var(--color-accent)"
          color3="#3d0e26"
          timeSpeed={0.12}
          warpStrength={1.1}
          warpFrequency={3.5}
          warpAmplitude={45}
          blendSoftness={0.12}
          grainAmount={0.04}
          contrast={1.15}
          ditherLevels={5}
          ditherScale={3}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg pointer-events-none"></div>
      </div>

      <div className="w-full pr-6 lg:pr-12 text-right relative z-10">
        <p className="font-pixel text-pop text-sm mb-4 tracking-wide">ABOUT</p>
        <SplitText
          text="About Me"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-right text-text max-w-2xl ml-auto leading-tight"
          tag="h2"
          splitType="words"
          textAlign="right"
          delay={30}
          duration={0.8}
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          once={false}
        />
        <div className="max-w-xl ml-auto">
          <SplitText
            text="I'm a passionate computer science graduate from Kenya with a love for creating digital solutions that make a difference. My journey in tech has been driven by curiosity and a desire to build applications that not only function beautifully but also solve real-world problems."
            className="font-inter text-lg md:text-xl text-text-muted leading-relaxed text-right"
            tag="p"
            splitType="lines"
            textAlign="right"
            delay={40}
            duration={1}
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            once={false}
          />
        </div>
      </div>
    </section>
  );
}

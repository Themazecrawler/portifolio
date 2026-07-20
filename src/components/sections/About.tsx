import SplitText from '../reactbits/SplitText';
import DotField from '../reactbits/DotField';

export function About() {
  return (
    <section id="about" className="py-20 w-full flex flex-col items-end relative overflow-hidden bg-black">
      {/* Dot Field Background */}
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={400}
          cursorForce={0.2}
          bulgeOnly={true}
          bulgeStrength={80}
          glowRadius={250}
          sparkle={true}
          waveAmplitude={0}
          gradientFrom="rgba(236, 72, 153, 0.8)" /* Bright pink */
          gradientTo="rgba(190, 24, 93, 0.2)" /* Darker pink */
          glowColor="rgba(236, 72, 153, 0.15)"
        />
        {/* Gradient overlay to smoothly fade out the dots towards the bottom if needed, or just let them exist everywhere */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none"></div>
      </div>

      <div className="w-full pr-6 lg:pr-12 text-right relative z-10">
        <SplitText
          text="About Me"
          className="text-4xl md:text-5xl font-bold mb-6 text-right text-gray-100"
          tag="h2"
          splitType="words"
          textAlign="right"
          delay={30}
          duration={0.8}
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          once={false}
        />
        <div className="max-w-2xl ml-auto">
          <SplitText
            text="I'm a passionate developer with a love for creating digital solutions that make a difference. My journey in tech has been driven by a desire to build beautiful and functional applications that solve real-world problems."
            className="font-inter text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed text-right"
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


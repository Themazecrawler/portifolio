import { EXPERIENCES } from '../../constants/site';
import Grainient from '../reactbits/Grainient';

export function Experience() {
  return (
    <section id="experience" className="pt-24 pb-0 relative bg-bg overflow-hidden">
      {/* Dithered retro-gradient backdrop */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Grainient
          color1="var(--color-pop-light)"
          color2="var(--color-accent)"
          color3="#4c0519"
          timeSpeed={0.15}
          warpStrength={1.2}
          warpFrequency={4.0}
          warpAmplitude={60.0}
          blendSoftness={0.1}
          grainAmount={0.04}
          contrast={1.2}
          ditherLevels={5}
          ditherScale={3}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-bg/50 to-bg"></div>
      </div>

      {/* Seamless blend from the Projects staircase transition above */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-accent-dark/60 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-20">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4 text-text">
            Where I&apos;ve worked
          </h2>
          <p className="text-lg text-text-muted">
            The jobs, gigs, and internships that got me here, roughly in reverse order.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-[2px] bg-border"></div>

            {EXPERIENCES.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative mb-12 md:mb-8 flex flex-col md:flex-row ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-start md:items-center`}
                >
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="absolute left-[15px] md:left-1/2 w-5 h-5 bg-accent border-2 border-ink rounded-chunky md:-translate-x-1/2 z-10"></div>
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                    <div className="p-6 rounded-card bg-surface border-2 border-border">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-text">{item.role}</h3>
                        <span className="px-3 py-1 rounded-chunky text-xs font-bold bg-[rgba(var(--color-pop-rgb),0.15)] text-pop border border-pop/40">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-accent mb-3">
                        {item.organization}
                      </p>
                      <p className="text-text-muted leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-muted text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

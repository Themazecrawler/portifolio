import { EXPERIENCES } from '../../constants/site';
import Grainient from '../reactbits/Grainient';

export function Experience() {
  return (
    <section id="experience" className="pt-20 pb-0 relative bg-black overflow-hidden">
      {/* Grainient Background */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Grainient
          color1="#f9a8d4" // light pink
          color2="#EC4899" // main pink
          color3="#4c0519" // very dark pink/red
          timeSpeed={0.15}
          warpStrength={1.2}
          warpFrequency={4.0}
          warpAmplitude={60.0}
          blendSoftness={0.1}
          grainAmount={0.05}
          contrast={1.2}
        />
        {/* Subtle dark gradient overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>
      </div>

      {/* Seamless transition mask bridging Projects (#fbcfe8) and Experience */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#fbcfe8] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#EC4899]">
            Experience
          </h2>
          <div className="w-24 h-1 bg-[#EC4899] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
            My professional journey and hands-on experience across IT and software development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-[1px]" style={{ background: 'linear-gradient(to bottom, #EC4899, #be185d)' }}></div>

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
                  <div className="absolute left-[16px] md:left-1/2 w-4 h-4 bg-black border-4 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_15px_#EC4899]" style={{ borderColor: '#EC4899' }}></div>
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                    {/* Removed the background card styling here, so the text floats directly over the background */}
                    <div className="py-6 px-2 drop-shadow-md">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-gray-100">{item.role}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm" style={{ backgroundColor: 'rgba(236,72,153,0.15)', color: '#EC4899' }}>
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-pink-500 mb-3 drop-shadow-sm">
                        {item.organization}
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#EC4899] rounded-full mt-2 flex-shrink-0 shadow-[0_0_5px_#EC4899]"></div>
                            <span className="text-gray-300 text-sm">{highlight}</span>
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

import { EXPERIENCES } from '../../constants/site';

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and hands-on experience across IT and software development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-teal-200 md:-translate-x-1/2"></div>

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
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full md:-translate-x-1/2 z-10"></div>
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                    <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{item.role}</h3>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-pink-600 mb-3">
                        {item.organization}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
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

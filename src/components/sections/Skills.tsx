import { SKILLS } from '../../constants/site';

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What I Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in creating comprehensive digital solutions across multiple platforms and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">{skill.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{skill.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

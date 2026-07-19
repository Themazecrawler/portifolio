export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate computer science graduate from Kenya with a love for creating
              digital solutions that make a difference. My journey in tech has been driven by
              curiosity and a desire to build applications that not only function beautifully
              but also solve real-world problems.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              During my internship, I gained valuable experience in IT support, data management,
              and auditing, which gave me a solid foundation in understanding how technology
              impacts business operations. This experience, combined with my academic background,
              has shaped my approach to development; always considering security, performance,
              and user experience.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Currently, I'm building exciting personal and client-facing applications while
              actively seeking remote opportunities in tech. I believe in continuous learning
              and staying updated with the latest industry trends and technologies.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                Continuous Learner
              </span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                Remote Ready
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Based in Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-700">Computer Science Graduate</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">Internship Experience in IT</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-700">Available for Remote Work</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">Currently</h4>
              <p className="text-gray-600">
                Building applications and seeking remote opportunities in fullstack development,
                mobile apps, and cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

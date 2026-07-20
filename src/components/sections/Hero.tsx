export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 lg:px-12 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-left">
          <h1 className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Hello,
          </h1>

          <p className="font-inter text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-3xl leading-relaxed">
            I'm <span className="font-semibold text-gray-900">Lisa Amimo</span>, a software
            developer specializing in mobile apps, frontend and web development.
          </p>
        </div>
      </div>
    </section>
  );
}

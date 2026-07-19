import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

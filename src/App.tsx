import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  ScrollPath,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main>
        <Hero />
        <ScrollPath>
          <About />
          <Skills />
        </ScrollPath>
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

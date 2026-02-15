import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="bg-dark text-text-primary min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

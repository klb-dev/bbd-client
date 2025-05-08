import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer  from './components/Footer';
import TechCarousel from './components/TechCarousel';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechCarousel />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;


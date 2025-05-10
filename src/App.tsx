import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer  from './components/Footer';
import Loading from './components/ui/Loading';

const TechCarousel = lazy(() => import('./components/TechCarousel'));
const Testimonials = lazy(() => import('./components/Testimonials'));

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Suspense fallback={<Loading />}>
        <TechCarousel />
      </Suspense>
      <Projects />
      <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense>
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;


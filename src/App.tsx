import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer  from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;


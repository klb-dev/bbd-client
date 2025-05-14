import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer  from './components/Footer';
import Loading from './components/ui/Loading';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const TechCarousel = lazy(() => import('./components/TechCarousel'));
const Testimonials = lazy(() => import('./components/Testimonials'));



function App() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      <Route 
        path="/"
        element = {
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
        }
      />
      <Route 
        path="/admin"
        element = {
          <AdminLogin />
        }
      />
      <Route 
        path="/admin-dashboard"
        element = {
          <AdminDashboard />
        }
      />
    </Routes>
    </>
  );
}


export default App;


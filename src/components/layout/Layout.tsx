import type { ReactNode } from 'react';
import { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy'; 
import { motion } from 'framer-motion';



type LayoutProps = {
  children: ReactNode;
};

  const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeID = useScrollSpy(['hero', 'about', 'projects', 'contact'], 100);

  return (
    <div className="min-h-[calc(100vh-4rem)] overflow-x-hidden text-gray-800 bg-slate-100 dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <header className="sticky top-0 bg-white dark:bg-slate-800 shadow-md z-50">
        <nav className="mx-auto flex items-center justify-between p-4 bg-slate-100">
          <img className="w-15" src="/src/assets/images/BBD-Logo.png" alt='Blue Byrd Development Logo' />
          {/* desktop nav */}
          <ul className="hidden md:flex gap-6 text-sm">
            {[
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`hover:text-cyan-500 ${
                    activeID === id ? 'text-cyan-700 font-bold' : ''
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* hamburger button */}
          <button
            className={`md:hidden focus:outline-none z-50 transition-transform duration-200 ${
              menuOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100'
            }`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-cyan-700 rounded"></span>
              <span className="block w-6 h-0.5 bg-cyan-700 rounded"></span>
              <span className="block w-6 h-0.5 bg-cyan-700 rounded"></span>
            </div>
          </button>
        
        </nav>
        {/* mobile nav */}
        {/* Dark background overlay behind mobile nav */}
  {menuOpen && (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm z-30"
      onClick={() => setMenuOpen(false)}
    />
  )}

  {/* Slide-in mobile nav panel */}
  <div
    className={`fixed top-0 right-0 h-full w-1/2 bg-white dark:bg-slate-800 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
      menuOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <div className="relative flex flex-col items-center justify-start pt-24 gap-6 text-center text-2xl font-semibold">
      <button
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        className="absolute top-4 right-4 text-cyan-700 hover:text-cyan-500 text-4xl font-bold"
      >
        ×
      </button>

      {/* Animated menu items */}
      {['about', 'projects', 'contact'].map((id, i) => (
        <motion.a
          key={id}
          href={`#${id}`}
          onClick={() => setMenuOpen(false)}
          className="hover:text-cyan-500"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.4, ease: 'easeOut' }}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </motion.a>
      ))}
    </div>
  </div>

      </header>
      <main>{children}</main>
    </div>
    
  );
};

export default Layout;


import Sidebar from './Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close sidebar when resizing to desktop (optional, keeps UI clean)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen text-gray-100 selection:bg-emerald-500/30">
      {/* Mobile header with hamburger */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black/80 backdrop-blur-md md:hidden border-b border-emerald-900/20">
        <h1 className="text-xl font-bold text-emerald-500">BARAKAHX</h1>
        <button onClick={toggleMenu} className="text-white p-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar component – gets open/close props for mobile */}
      <Sidebar isMobileOpen={isMobileMenuOpen} onMobileClose={closeMenu} />

      {/* Overlay (only visible on mobile when sidebar is open) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Main content – margin left only on desktop */}
      <main className="pt-16 md:pt-0 md:ml-64 p-4 md:p-8 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
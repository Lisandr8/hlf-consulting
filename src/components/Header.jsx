import { useState, useEffect } from 'react';
import { EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll en el body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'la firma', href: '/#la-firma' },
    { name: 'áreas', href: '/#areas' },
    { name: 'equipo', href: '/#equipo' },
    { name: 'publicaciones', href: '/publicaciones' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 border-b uppercase tracking-wider flex justify-between items-center py-4 px-5 md:py-5 md:px-10 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-light border-medium shadow-sm' : 'bg-transparent border-transparent'}`}>
        <Link to="/" id="logo-title" className="z-50 block group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <h1 className={`uppercase text-lg md:text-2xl transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-dark' : 'text-light'}`}>nimbra <span className={`text-gold-light font-bold ${isScrolled || isMobileMenuOpen ? 'text-gold' : 'text-gold-light'}`}> law</span></h1>
          <p className="text-xs md:text-xs text-gold-light">consultoría estratégica</p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 xl:gap-10 text-xs">
          {navLinks.map((item) => (
            item.href.startsWith('/#') ? (
              <a 
                key={item.name} 
                className={`transition-all duration-300 hover:underline underline-offset-4 ${isScrolled || isMobileMenuOpen ? 'text-dark hover:text-gold' : 'text-gold-light hover:text-light'}`} 
                href={item.href}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name} 
                className={`transition-all duration-300 hover:underline underline-offset-4 ${isScrolled || isMobileMenuOpen ? 'text-dark hover:text-gold' : 'text-gold-light hover:text-light'}`} 
                to={item.href}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop Button & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <a href="/#contacto" className={`hidden md:flex items-center gap-2 uppercase tracking-wider text-xs px-4 py-2 rounded transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-dark text-light hover:bg-gold' : 'bg-light text-dark hover:bg-gold-light hover:text-light'}`}>
            contactar
            <EnvelopeIcon className="w-4 h-4" />
          </a>
          
          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 transition-colors duration-300 text-dark" />
            ) : (
              <Bars3Icon className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-dark' : 'text-light'}`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-light z-40 flex flex-col justify-center items-center gap-8 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        <nav className="flex flex-col items-center gap-8 text-sm uppercase tracking-widest mt-16">
          {navLinks.map((item) => (
            item.href.startsWith('/#') ? (
              <a 
                key={item.name} 
                className="text-dark hover:text-gold transition-colors duration-300 cursor-pointer" 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name} 
                className="text-dark hover:text-gold transition-colors duration-300 cursor-pointer" 
                to={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        <a href="/#contacto" onClick={() => setIsMobileMenuOpen(false)} className="md:hidden mt-4 flex items-center gap-2 uppercase tracking-wider text-xs px-6 py-3 rounded bg-dark text-light hover:bg-gold transition-colors duration-300 cursor-pointer">
          contactar
          <EnvelopeIcon className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}

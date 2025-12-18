import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, memo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from 'figma:asset/6d55a5488f8774977653c9fa1179a4f1d0fe492a.png';

export const Header = memo(function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [marcasOpen, setMarcasOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const [mobileMarcasOpen, setMobileMarcasOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Timers para delay en cerrar dropdowns
  const [serviciosTimer, setServiciosTimer] = useState<NodeJS.Timeout | null>(null);
  const [marcasTimer, setMarcasTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync active section with URL hash
  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.slice(1) || 'home';
      // Extract base section for service pages
      if (hash.startsWith('servicios/')) {
        setActiveSection('servicios');
      } else if (hash.startsWith('marcas-partners/')) {
        setActiveSection('marcas-partners');
      } else {
        setActiveSection(hash);
      }
    };
    
    window.addEventListener('hashchange', updateActiveSection);
    updateActiveSection(); // Initial sync
    
    return () => window.removeEventListener('hashchange', updateActiveSection);
  }, []);
  
  // Limpiar timers al desmontar
  useEffect(() => {
    return () => {
      if (serviciosTimer) clearTimeout(serviciosTimer);
      if (marcasTimer) clearTimeout(marcasTimer);
    };
  }, [serviciosTimer, marcasTimer]);
  
  // Funciones mejoradas para manejar hover con delay
  const handleServiciosEnter = () => {
    if (serviciosTimer) clearTimeout(serviciosTimer);
    setServiciosOpen(true);
  };
  
  const handleServiciosLeave = () => {
    const timer = setTimeout(() => {
      setServiciosOpen(false);
    }, 300); // 300ms delay antes de cerrar
    setServiciosTimer(timer);
  };
  
  const handleMarcasEnter = () => {
    if (marcasTimer) clearTimeout(marcasTimer);
    setMarcasOpen(true);
  };
  
  const handleMarcasLeave = () => {
    const timer = setTimeout(() => {
      setMarcasOpen(false);
    }, 300); // 300ms delay antes de cerrar
    setMarcasTimer(timer);
  };

  const navItems = [
    { id: 'home', label: 'INICIO' },
    { id: 'nosotros', label: 'QUIÉNES SOMOS' },
    { id: 'servicios', label: 'SERVICIOS', hasDropdown: true },
    { id: 'industrias', label: 'INDUSTRIAS' },
    { id: 'marcas-partners', label: 'MARCAS & PARTNERS', hasDropdown: true },
    { id: 'financiacion', label: 'FINANCIACIÓN' },
    { id: 'reforestar', label: 'REFORESTAR' }
  ];

  const serviciosSubmenu = [
    { label: 'Infraestructura IT & Data Center', slug: 'servicios/infraestructura-it-data-center' },
    { label: 'Redes & Conectividad', slug: 'servicios/redes-conectividad' },
    { label: 'Team Collaboration', slug: 'servicios/team-collaboration' },
    { label: 'Videoseguridad & Analítica', slug: 'servicios/videoseguridad-analitica' },
    { label: 'Energía & Continuidad', slug: 'servicios/energia-continuidad' },
    { label: 'Microinformática', slug: 'servicios/microinformatica' },
    { label: 'Cableado estructurado & Obras tecnológicas', slug: 'servicios/cableado-estructurado-obras-tecnologicas' }
  ];

  const marcasSubmenu = [
    { label: 'Lenovo', slug: 'marcas-partners/lenovo' },
    { label: 'Cisco', slug: 'marcas-partners/cisco' },
    { label: 'AXIS', slug: 'marcas-partners/axis' },
    { label: 'APC', slug: 'marcas-partners/apc' },
    { label: 'Eaton', slug: 'marcas-partners/eaton' },
    { label: 'Jabra', slug: 'marcas-partners/jabra' },
    { label: 'Zebra', slug: 'marcas-partners/zebra' },
    { label: 'Logitech', slug: 'marcas-partners/logitech' },
    { label: 'Samsung', slug: 'marcas-partners/samsung' },
    { label: 'Huawei', slug: 'marcas-partners/huawei' },
    { label: 'HPE', slug: 'marcas-partners/hpe' },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    setServiciosOpen(false);
    setMarcasOpen(false);
    
    // Update URL hash for routing
    window.location.hash = sectionId;
  };

  const handleServiceClick = (slug: string) => {
    setActiveSection('servicios');
    setMobileMenuOpen(false);
    setServiciosOpen(false);
    setMobileServiciosOpen(false);
    window.location.hash = slug;
  };

  const handleMarcasClick = (slug: string) => {
    setActiveSection('marcas-partners');
    setMobileMenuOpen(false);
    setMarcasOpen(false);
    setMobileMarcasOpen(false);
    window.location.hash = slug;
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#E94E1B] focus:text-white focus:rounded-lg focus:shadow-lg"
        style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 600 }}
      >
        Saltar al contenido principal
      </a>
      
      <motion.header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 bg-[#1a1618] text-white"
        style={{
          boxShadow: isScrolled 
            ? '0 4px 20px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)' 
            : '0 2px 8px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex-shrink-0 group relative z-10"
            aria-label="Trendit - Inicio"
          >
            <img 
              src={logo} 
              alt="Trendit" 
              width="120"
              height="32"
              fetchPriority="high"
              decoding="async"
              className="h-7 sm:h-8 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-8">
            {navItems.map((item) => (
              <div 
                key={item.id} 
                className="relative"
                onMouseEnter={() => {
                  if (item.id === 'servicios') handleServiciosEnter();
                  if (item.id === 'marcas-partners') handleMarcasEnter();
                }}
                onMouseLeave={() => {
                  if (item.id === 'servicios') handleServiciosLeave();
                  if (item.id === 'marcas-partners') handleMarcasLeave();
                }}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-200 group flex items-center gap-1 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`size-3 transition-transform duration-200 ${
                      (item.id === 'servicios' && serviciosOpen) || (item.id === 'marcas-partners' && marcasOpen) 
                        ? 'rotate-180' 
                        : ''
                    }`} />
                  )}
                  
                  {/* Underline indicator */}
                  <span 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#E94E1B] transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'opacity-100 scale-x-100' 
                        : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                    style={{
                      boxShadow: activeSection === item.id ? '0 0 8px rgba(233, 78, 27, 0.6)' : 'none'
                    }}
                  />
                </button>

                {/* Dropdown menu for SERVICIOS */}
                {item.id === 'servicios' && serviciosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-[320px] bg-[#1a1618]/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 py-2 overflow-hidden"
                  >
                    {serviciosSubmenu.map((service, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleServiceClick(service.slug)}
                        className="w-full text-left px-5 py-3 text-xs text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-b-0 group"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 500
                        }}
                      >
                        <span className="relative">
                          {service.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E94E1B] group-hover:w-full transition-all duration-300" />
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Dropdown menu for MARCAS & PARTNERS */}
                {item.id === 'marcas-partners' && marcasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-[280px] bg-[#1a1618]/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 py-2 overflow-hidden"
                  >
                    {marcasSubmenu.map((marca, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleMarcasClick(marca.slug)}
                        className="w-full text-left px-5 py-3 text-xs text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-b-0 group"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 500
                        }}
                      >
                        <span className="relative">
                          {marca.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E94E1B] group-hover:w-full transition-all duration-300" />
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contactanos')}
              className="relative px-6 py-2.5 bg-[#E94E1B] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#D43E10] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">Contáctanos</span>
              
              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors relative z-10"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          style={{ marginTop: '64px' }}
        />
      )}

      {/* Mobile Menu Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-[#1a1618] z-40 lg:hidden overflow-y-auto shadow-2xl"
      >
        <nav className="p-6 space-y-2">
          {navItems.map((item, index) => (
            <div key={item.id}>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  if (item.hasDropdown) {
                    if (item.id === 'servicios') {
                      setMobileServiciosOpen(!mobileServiciosOpen);
                    } else if (item.id === 'marcas-partners') {
                      setMobileMarcasOpen(!mobileMarcasOpen);
                    }
                  } else {
                    handleNavClick(item.id);
                  }
                }}
                className={`flex items-center justify-between w-full text-left px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#E94E1B] text-white shadow-lg'
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className={`size-4 transition-transform duration-200 ${mobileServiciosOpen ? 'rotate-180' : ''}`} />
                )}
              </motion.button>

              {/* Mobile submenu for SERVICIOS */}
              {item.hasDropdown && mobileServiciosOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-4 mt-2 space-y-1 overflow-hidden"
                >
                  {serviciosSubmenu.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleServiceClick(service.slug)}
                      className="block w-full text-left px-4 py-3 rounded-lg text-xs text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      {service.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Mobile submenu for MARCAS & PARTNERS */}
              {item.hasDropdown && mobileMarcasOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-4 mt-2 space-y-1 overflow-hidden"
                >
                  {marcasSubmenu.map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleMarcasClick(service.slug)}
                      className="block w-full text-left px-4 py-3 rounded-lg text-xs text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      {service.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.05 + 0.1 }}
            className="pt-6"
          >
            <button
              onClick={() => handleNavClick('contactanos')}
              className="w-full px-6 py-4 bg-[#E94E1B] text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-[#D43E10] transition-all duration-300 shadow-lg active:scale-95"
            >
              Contáctanos
            </button>
          </motion.div>
        </nav>
      </motion.div>

      {/* Spacer to prevent content jump */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
});
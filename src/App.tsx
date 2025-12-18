import { useState, useEffect, lazy, Suspense } from 'react';
import { Header } from './components/trendit/Header';
import { Hero } from './components/trendit/Hero';
import { Footer } from './components/trendit/Footer';
import { SEOHead } from './components/trendit/SEOHead';
import { LazySection } from './components/trendit/LazySection';

// CRITICAL: Hero + Header loaded immediately (no lazy) for LCP optimization

// Below-the-fold: lazy load with code splitting
const Stats = lazy(() => import('./components/trendit/Stats').then(m => ({ default: m.Stats })));
const ServiceExplorer = lazy(() => import('./components/trendit/ServiceExplorer').then(m => ({ default: m.ServiceExplorer })));
const Industries = lazy(() => import('./components/trendit/Industries').then(m => ({ default: m.Industries })));
const WhyTrendit = lazy(() => import('./components/trendit/WhyTrendit').then(m => ({ default: m.WhyTrendit })));
const FinanciacionHome = lazy(() => import('./components/trendit/FinanciacionHome').then(m => ({ default: m.FinanciacionHome })));
const Reforestar = lazy(() => import('./components/trendit/Reforestar').then(m => ({ default: m.Reforestar })));
const CTAFinal = lazy(() => import('./components/trendit/CTAFinal').then(m => ({ default: m.CTAFinal })));

// Pages: lazy load
const Nosotros = lazy(() => import('./components/trendit/Nosotros').then(m => ({ default: m.Nosotros })));
const IndustriasPage = lazy(() => import('./components/trendit/Industrias2').then(m => ({ default: m.IndustriasPage })));
const ServiciosPage = lazy(() => import('./components/trendit/Servicios').then(m => ({ default: m.ServiciosPage })));
const MarcasPartnersPage = lazy(() => import('./components/trendit/MarcasPartners').then(m => ({ default: m.MarcasPartnersPage })));
const ReforestarPage = lazy(() => import('./components/trendit/ReforestarPage').then(m => ({ default: m.ReforestarPage })));
const Financiacion = lazy(() => import('./components/trendit/Financiacion').then(m => ({ default: m.Financiacion })));
const Contactanos = lazy(() => import('./components/trendit/Contactanos').then(m => ({ default: m.Contactanos })));
const CableadoEstructurado = lazy(() => import('./components/trendit/CableadoEstructurado').then(m => ({ default: m.CableadoEstructurado })));
const Microinformatica = lazy(() => import('./components/trendit/Microinformatica').then(m => ({ default: m.Microinformatica })));
const InfraestructuraIT = lazy(() => import('./components/trendit/InfraestructuraIT').then(m => ({ default: m.InfraestructuraIT })));
const TeamCollaboration = lazy(() => import('./components/trendit/TeamCollaboration').then(m => ({ default: m.TeamCollaboration })));
const VideoseguridadAnalitica = lazy(() => import('./components/trendit/VideoseguridadAnalitica').then(m => ({ default: m.VideoseguridadAnalitica })));
const RedesConectividad = lazy(() => import('./components/trendit/RedesConectividad').then(m => ({ default: m.RedesConectividad })));
const EnergiaContinuidad = lazy(() => import('./components/trendit/EnergiaContinuidad').then(m => ({ default: m.EnergiaContinuidad })));
const TerminosCondiciones = lazy(() => import('./components/trendit/TerminosCondiciones').then(m => ({ default: m.TerminosCondiciones })));
const Privacidad = lazy(() => import('./components/trendit/Privacidad').then(m => ({ default: m.Privacidad })));
const TrabajaConNosotros = lazy(() => import('./components/trendit/TrabajaConNosotros').then(m => ({ default: m.TrabajaConNosotros })));
const SoporteTecnico = lazy(() => import('./components/trendit/SoporteTecnico').then(m => ({ default: m.SoporteTecnico })));
const Lenovo = lazy(() => import('./components/trendit/Lenovo').then(m => ({ default: m.Lenovo })));
const Cisco = lazy(() => import('./components/trendit/Cisco').then(m => ({ default: m.Cisco })));
const Axis = lazy(() => import('./components/trendit/Axis').then(m => ({ default: m.Axis })));
const APC = lazy(() => import('./components/trendit/APC').then(m => ({ default: m.APC })));
const Eaton = lazy(() => import('./components/trendit/Eaton').then(m => ({ default: m.Eaton })));
const Jabra = lazy(() => import('./components/trendit/Jabra').then(m => ({ default: m.Jabra })));
const Zebra = lazy(() => import('./components/trendit/Zebra').then(m => ({ default: m.Zebra })));
const Logitech = lazy(() => import('./components/trendit/Logitech').then(m => ({ default: m.Logitech })));
const Samsung = lazy(() => import('./components/trendit/Samsung').then(m => ({ default: m.Samsung })));
const Huawei = lazy(() => import('./components/trendit/Huawei').then(m => ({ default: m.Huawei })));
const HPE = lazy(() => import('./components/trendit/HPE').then(m => ({ default: m.HPE })));

type Page = 
  | 'home'
  | 'nosotros'
  | 'servicios'
  | 'industrias'
  | 'marcas-partners'
  | 'reforestar'
  | 'financiacion'
  | 'contactanos'
  | 'terminos-y-condiciones'
  | 'privacidad'
  | 'trabaja-con-nosotros'
  | 'soporte-tecnico'
  | 'servicios/cableado-estructurado-obras-tecnologicas'
  | 'servicios/microinformatica'
  | 'servicios/infraestructura-it-data-center'
  | 'servicios/team-collaboration'
  | 'servicios/videoseguridad-analitica'
  | 'servicios/redes-conectividad'
  | 'servicios/energia-continuidad'
  | 'marcas-partners/lenovo'
  | 'marcas-partners/cisco'
  | 'marcas-partners/axis'
  | 'marcas-partners/apc'
  | 'marcas-partners/eaton'
  | 'marcas-partners/jabra'
  | 'marcas-partners/zebra'
  | 'marcas-partners/logitech'
  | 'marcas-partners/samsung'
  | 'marcas-partners/huawei'
  | 'marcas-partners/hpe';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Listen to URL hash changes for simple routing
  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.slice(1) || 'home';
      
      // Parse hash and potential anchor (format: industrias?section=industria-manufactura)
      const [page, anchorPart] = fullHash.split('?section=');
      setCurrentPage(page);
      
      // Scroll to top initially
      window.scrollTo({ top: 0, behavior: 'auto' });
      
      // If there's an anchor specified, scroll to it after page loads
      if (anchorPart) {
        setTimeout(() => {
          const targetElement = document.getElementById(anchorPart);
          if (targetElement) {
            const yOffset = -120; // Offset for fixed header
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 300); // Wait for page to render
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Lightweight fallback for Suspense (non-blocking)
  const SuspenseFallback = () => (
    <div className="min-h-[50vh]" aria-label="Cargando contenido" />
  );

  return (
    <div className="min-h-screen bg-white">
      {/* SEO: Meta tags + Structured Data */}
      <SEOHead />
      
      {/* CRITICAL: Header always loaded (no lazy) */}
      <Header />
      
      <main id="main-content">
        {currentPage === 'nosotros' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Nosotros />
          </Suspense>
        ) : currentPage === 'servicios' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <ServiciosPage />
          </Suspense>
        ) : currentPage === 'industrias' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <IndustriasPage />
          </Suspense>
        ) : currentPage === 'marcas-partners' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <MarcasPartnersPage />
          </Suspense>
        ) : currentPage === 'reforestar' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <ReforestarPage />
          </Suspense>
        ) : currentPage === 'financiacion' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Financiacion />
          </Suspense>
        ) : currentPage === 'contactanos' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Contactanos />
          </Suspense>
        ) : currentPage === 'terminos-y-condiciones' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <TerminosCondiciones />
          </Suspense>
        ) : currentPage === 'privacidad' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Privacidad />
          </Suspense>
        ) : currentPage === 'trabaja-con-nosotros' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <TrabajaConNosotros />
          </Suspense>
        ) : currentPage === 'soporte-tecnico' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <SoporteTecnico />
          </Suspense>
        ) : currentPage === 'servicios/cableado-estructurado-obras-tecnologicas' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <CableadoEstructurado />
          </Suspense>
        ) : currentPage === 'servicios/microinformatica' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Microinformatica />
          </Suspense>
        ) : currentPage === 'servicios/infraestructura-it-data-center' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <InfraestructuraIT />
          </Suspense>
        ) : currentPage === 'servicios/team-collaboration' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <TeamCollaboration />
          </Suspense>
        ) : currentPage === 'servicios/videoseguridad-analitica' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <VideoseguridadAnalitica />
          </Suspense>
        ) : currentPage === 'servicios/redes-conectividad' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <RedesConectividad />
          </Suspense>
        ) : currentPage === 'servicios/energia-continuidad' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <EnergiaContinuidad />
          </Suspense>
        ) : currentPage === 'marcas-partners/lenovo' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Lenovo />
          </Suspense>
        ) : currentPage === 'marcas-partners/cisco' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Cisco />
          </Suspense>
        ) : currentPage === 'marcas-partners/axis' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Axis />
          </Suspense>
        ) : currentPage === 'marcas-partners/apc' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <APC />
          </Suspense>
        ) : currentPage === 'marcas-partners/eaton' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Eaton />
          </Suspense>
        ) : currentPage === 'marcas-partners/jabra' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Jabra />
          </Suspense>
        ) : currentPage === 'marcas-partners/zebra' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Zebra />
          </Suspense>
        ) : currentPage === 'marcas-partners/logitech' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Logitech />
          </Suspense>
        ) : currentPage === 'marcas-partners/samsung' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Samsung />
          </Suspense>
        ) : currentPage === 'marcas-partners/huawei' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <Huawei />
          </Suspense>
        ) : currentPage === 'marcas-partners/hpe' ? (
          <Suspense fallback={<SuspenseFallback />}>
            <HPE />
          </Suspense>
        ) : currentPage.startsWith('servicios/') ? (
          <Suspense fallback={<SuspenseFallback />}>
            <ServiciosPage />
          </Suspense>
        ) : (
          <>
            {/* CRITICAL: Hero loaded immediately for LCP optimization */}
            <Hero />
            
            {/* Below-the-fold sections: lazy load with IntersectionObserver */}
            <LazySection>
              <Suspense fallback={<SuspenseFallback />}>
                <Stats />
              </Suspense>
            </LazySection>
            
            <LazySection>
              <Suspense fallback={<SuspenseFallback />}>
                <ServiceExplorer />
              </Suspense>
            </LazySection>
            
            <LazySection>
              <Suspense fallback={<SuspenseFallback />}>
                <Industries />
              </Suspense>
            </LazySection>
            
            <LazySection>
              <Suspense fallback={<SuspenseFallback />}>
                <WhyTrendit />
              </Suspense>
            </LazySection>
            
            <LazySection>
              <Suspense fallback={<SuspenseFallback />}>
                <FinanciacionHome />
              </Suspense>
            </LazySection>
            
            <LazySection>
              <Suspense fallback={<SuspenseFallback />}>
                <Reforestar />
              </Suspense>
            </LazySection>
            
            <LazySection>
              <Suspense fallback={<SuspenseFallback />}>
                <CTAFinal />
              </Suspense>
            </LazySection>
          </>
        )}
      </main>
      
      {/* Footer: can be deferred slightly */}
      <Footer />
    </div>
  );
}
import { Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { memo } from 'react';
import logo from 'figma:asset/6d55a5488f8774977653c9fa1179a4f1d0fe492a.png';

export const Footer = memo(function Footer() {
  const navigation = {
    servicios: [
      { name: 'Infraestructura IT', href: '#servicios/infraestructura-it-data-center' },
      { name: 'Redes & Conectividad', href: '#servicios/redes-conectividad' },
      { name: 'Team Collaboration', href: '#servicios/team-collaboration' },
      { name: 'Videoseguridad', href: '#servicios/videoseguridad-analitica' },
      { name: 'Energía', href: '#servicios/energia-continuidad' },
      { name: 'Cableado Estructurado', href: '#servicios/cableado-estructurado-obras-tecnologicas' },
      { name: 'Microinformática', href: '#servicios/microinformatica' },
    ],
    industrias: [
      { name: 'Manufactura', href: '#industrias?section=industria-manufactura' },
      { name: 'Salud', href: '#industrias?section=industria-salud' },
      { name: 'Educación', href: '#industrias?section=industria-educacion' },
      { name: 'Finanzas', href: '#industrias?section=industria-finanzas' },
      { name: 'Gobierno', href: '#industrias?section=industria-gobierno' },
      { name: 'Retail & Comercio', href: '#industrias?section=industria-retail-comercio' },
      { name: 'Logística y Transporte', href: '#industrias?section=industria-manufactura' },
      { name: 'Telecomunicaciones', href: '#industrias?section=industria-telecom' },
      { name: 'Oil & Gas', href: '#industrias?section=industria-oil-gas' },
    ],
    cultura: [
      { name: 'Nosotros', href: '#nosotros' },
      { name: 'Reforestar', href: '#reforestar' },
      { name: 'Trabaja con nosotros', href: '#trabaja-con-nosotros' },
    ],
    soporte: [
      { name: 'Contáctanos', href: '#contactanos' },
      { name: 'Soporte técnico', href: '#soporte-tecnico' },
    ],
  };

  return (
    <footer className="bg-[#1a1a1a] text-white" role="contentinfo">
      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-12">

          {/* Brand column - Left side */}
          <div className="lg:col-span-4 xl:col-span-3">
            {/* Logo */}
            <img
              src={logo}
              alt="Trendit"
              width="180"
              height="48"
              loading="lazy"
              decoding="async"
              className="h-10 md:h-12 mb-6 object-contain"
              style={{ maxWidth: '180px' }}
            />

            {/* Claim */}
            <p
              className="text-white/70 mb-6 md:mb-8 leading-[1.6] max-w-sm text-[14px] md:text-[15px]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Tecnología sustentable para empresas que transforman el futuro.
            </p>

            {/* Contact info */}
            <div className="space-y-3.5 mb-6 md:mb-8">
              <div className="flex items-start gap-3 text-[13px] md:text-[14px] text-white/60">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Av. Rafael Núñez 3594, Córdoba, Argentina
                </span>
              </div>

              <a
                href="tel:+5493516013543"
                className="flex items-center gap-3 text-[13px] md:text-[14px] text-white/60 hover:text-white transition-colors group"
              >
                <Phone className="size-4 flex-shrink-0 group-hover:text-[#E94E1B] transition-colors" />
                <span
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  +54 9 3516 01-3543
                </span>
              </a>

              <a
                href="mailto:info@trendit.com.ar"
                className="flex items-center gap-3 text-[13px] md:text-[14px] text-white/60 hover:text-white transition-colors group"
              >
                <Mail className="size-4 flex-shrink-0 group-hover:text-[#E94E1B] transition-colors" />
                <span
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  info@trendit.com.ar
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <SocialLink icon={<Linkedin className="size-4" />} href="https://www.linkedin.com/company/trendit-com-ar" aria-label="LinkedIn" />
              <SocialLink icon={<Instagram className="size-4" />} href="https://www.instagram.com/trendit.com.ar?igsh=MTBsMGhocDlyaDd1Yg==" aria-label="Instagram" />
              <SocialLink icon={<Youtube className="size-4" />} href="https://www.youtube.com/@trenditargentina1302/videos" aria-label="YouTube" />
            </div>
          </div>

          {/* Navigation columns - Right side */}
          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">

            {/* Servicios */}
            <div>
              <h2
                className="text-[13px] md:text-[14px] uppercase tracking-wider mb-4 md:mb-5 text-white"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Servicios
              </h2>
              <ul className="space-y-2.5 md:space-y-3">
                {navigation.servicios.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[13px] md:text-[14px] text-white/60 hover:text-[#E94E1B] transition-colors inline-block"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industrias */}
            <div>
              <h2
                className="text-[13px] md:text-[14px] uppercase tracking-wider mb-4 md:mb-5 text-white"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Industrias
              </h2>
              <ul className="space-y-2.5 md:space-y-3">
                {navigation.industrias.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[13px] md:text-[14px] text-white/60 hover:text-[#E94E1B] transition-colors inline-block"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cultura Trendit */}
            <div>
              <h2
                className="text-[13px] md:text-[14px] uppercase tracking-wider mb-4 md:mb-5 text-white"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Cultura Trendit
              </h2>
              <ul className="space-y-2.5 md:space-y-3">
                {navigation.cultura.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[13px] md:text-[14px] text-white/60 hover:text-[#E94E1B] transition-colors inline-block"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soporte */}
            <div>
              <h2
                className="text-[13px] md:text-[14px] uppercase tracking-wider mb-4 md:mb-5 text-white"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Soporte
              </h2>
              <ul className="space-y-2.5 md:space-y-3">
                {navigation.soporte.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[13px] md:text-[14px] text-white/60 hover:text-[#E94E1B] transition-colors inline-block"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - Legal */}
      <div className="border-t border-white/10 bg-[#141414]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-5 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">

            {/* Copyright and credits */}
            <p
              className="text-[12px] md:text-[13px] text-white/50 text-center md:text-left"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              © 2025 Trendit. Todos los derechos reservados. Desarrollado por{' '}
              <a
                href="https://www.axonqbit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E94E1B] hover:text-[#D43E10] transition-colors font-medium underline decoration-[#E94E1B]/30 hover:decoration-[#D43E10]/50"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                AxonQbit
              </a>
              .
            </p>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-[12px] md:text-[13px]">
              <a
                href="#privacidad"
                className="text-white/50 hover:text-white transition-colors"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Privacidad
              </a>
              <a
                href="#terminos-y-condiciones"
                className="text-white/50 hover:text-white transition-colors"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Términos y condiciones
              </a>
              <a
                href="#cookies"
                className="text-white/50 hover:text-white transition-colors"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

function SocialLink({ icon, href, 'aria-label': ariaLabel }: { icon: React.ReactNode; href: string; 'aria-label': string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="bg-white/5 hover:bg-[#E94E1B] w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 group"
    >
      <span className="text-white/70 group-hover:text-white transition-colors">
        {icon}
      </span>
    </a>
  );
}
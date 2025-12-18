import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  ChevronRight,
  Wifi,
  Shield,
  Cloud,
  Network,
  Eye,
  Zap,
  Building2,
  GraduationCap,
  Hospital,
  Factory,
  ShoppingCart,
  Landmark,
  CheckCircle2,
  MessageCircle,
  Home,
  Server,
  Lock,
  Radio,
  Route,
  Activity,
  Boxes
} from 'lucide-react';
import { Button } from '../ui/button';

export function Cisco() {
  const whatsappNumber = '5493516013543';
  const whatsappMessageBase = encodeURIComponent(
    'Hola, quiero información sobre soluciones Cisco con Trendit (Networking, Seguridad y Meraki). Mi empresa es: _____. Necesito: _____.'
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <Breadcrumb />
      <Hero scrollToSection={scrollToSection} whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessageBase} />
      <SolucionesSelector scrollToSection={scrollToSection} />
      <Networking whatsappNumber={whatsappNumber} />
      <WiFi whatsappNumber={whatsappNumber} />
      <SDWAN whatsappNumber={whatsappNumber} />
      <Ciberseguridad whatsappNumber={whatsappNumber} />
      <Observabilidad whatsappNumber={whatsappNumber} />
      <Meraki whatsappNumber={whatsappNumber} />
      <MetodoTrendit />
      <IndustriasSection />
      <CTAFinal whatsappNumber={whatsappNumber} />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="bg-white border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center gap-2 text-[13px] text-neutral-500">
          <a href="#home" className="hover:text-[#E94E1B] transition-colors flex items-center gap-2">
            <Home className="size-4" />
            Inicio
          </a>
          <ChevronRight className="size-4" />
          <a href="#marcas-partners" className="hover:text-[#E94E1B] transition-colors">
            Marcas & Partners
          </a>
          <ChevronRight className="size-4" />
          <span className="text-[#282327]">Cisco</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ scrollToSection, whatsappNumber, whatsappMessage }: any) {
  const jumpLinks = [
    { label: 'Networking', id: 'networking', icon: <Network className="size-5" /> },
    { label: 'Seguridad', id: 'ciberseguridad', icon: <Shield className="size-5" /> },
    { label: 'Cisco Meraki', id: 'meraki', icon: <Cloud className="size-5" /> },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Background elements - Same as Home */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>

      {/* Static glow - Same as Home */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E94E1B] rounded-full blur-[120px] opacity-20" />

      <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Columna izquierda */}
          <div>
            {/* Eyebrow */}
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full mb-4 md:mb-6">
              <span className="text-xs sm:text-sm tracking-wide">
                Marca & Partner
              </span>
            </div>

            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-white mb-4 md:mb-6">
              Cisco, redes y ciberseguridad para operar sin fricción.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-[1.6] max-w-2xl">
              Diseñamos e integramos soluciones Cisco para campus, sucursales, industria y nube: conectividad, seguridad y visibilidad end-to-end.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-8 md:mb-10">
              {[
                'Networking: switching, Wi-Fi, SD-WAN',
                'Seguridad: Zero Trust, acceso, XDR',
                'Meraki: gestión cloud para redes distribuidas'
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 md:size-6 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white/80">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-6 md:px-8 group shadow-lg shadow-[#E94E1B]/20 w-full sm:w-auto"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="mr-2 size-5" />
                Hablar por WhatsApp
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm w-full sm:w-auto transition-all duration-300"
                onClick={() => scrollToSection('cta-final')}
              >
                Solicitar asesoramiento
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-white/50">
              Respuesta en horario laboral. Urgencias: dejar mensaje y te contactamos.
            </p>
          </div>

          {/* Columna derecha - Jump links */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6">
            <h3 className="text-[17px] font-semibold text-white mb-4">
              Acceso rápido
            </h3>
            
            <div className="space-y-2">
              {jumpLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-4 py-4 rounded-xl text-[15px] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-3 group"
                >
                  <div className="size-10 rounded-lg bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] group-hover:bg-[#E94E1B] group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="flex-1">{link.label}</span>
                  <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolucionesSelector({ scrollToSection }: any) {
  const soluciones = [
    { id: 'networking', label: 'Networking (Campus & Data Center)', icon: <Server className="size-8" /> },
    { id: 'wifi', label: 'Wi-Fi & Acceso', icon: <Wifi className="size-8" /> },
    { id: 'sdwan', label: 'WAN / SD-WAN', icon: <Route className="size-8" /> },
    { id: 'ciberseguridad', label: 'Ciberseguridad (Zero Trust)', icon: <Lock className="size-8" /> },
    { id: 'observabilidad', label: 'Observabilidad', icon: <Eye className="size-8" /> },
    { id: 'meraki', label: 'Cisco Meraki (Cloud Managed)', icon: <Cloud className="size-8" /> },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-6 leading-[1.2]">
            ¿Qué solución Cisco estás evaluando?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soluciones.map((sol, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => scrollToSection(sol.id)}
              className="text-left bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-[#E94E1B] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5 group-hover:bg-[#E94E1B] group-hover:text-white transition-colors">
                {sol.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#282327] leading-tight">
                {sol.label}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Networking({ whatsappNumber }: any) {
  const integracion = [
    'Arquitectura de switching acceso/distribución/core',
    'Segmentación (VLANs), QoS y redundancia',
    'Backbone fibra, SFPs/transceivers y enlaces críticos',
    'Orden en rack, etiquetado y documentación',
    'Puesta en marcha y pruebas de conectividad'
  ];

  const idealPara = ['Plantas', 'Campus', 'Sucursales', 'Data Center'];

  return (
    <section id="networking" className="py-20 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-5 leading-[1.2]">
            Networking Cisco: performance, segmentación y crecimiento
          </h2>
          
          <p className="text-[18px] text-neutral-700 mb-8 leading-[1.7]">
            <strong>Qué resuelve:</strong> Capacidad y confiabilidad para redes que escalan con seguridad.
          </p>

          <div className="mb-8">
            <h3 className="text-[20px] font-semibold text-[#282327] mb-4">
              Qué integra Trendit
            </h3>
            <ul className="space-y-3">
              {integracion.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-[16px] font-semibold text-[#282327] mb-3">
              Ideal para:
            </h4>
            <div className="flex flex-wrap gap-3">
              {idealPara.map((chip, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-[#E94E1B]/10 border border-[#E94E1B]/20 rounded-full text-[14px] text-[#E94E1B] font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
              onClick={() => {
                const msg = encodeURIComponent('Hola, quiero información sobre Networking Cisco con Trendit. Mi empresa es: _____.');
                window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
              }}
            >
              <MessageCircle className="mr-2 size-5" />
              Hablar por WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('cta-final');
                if (element) {
                  const yOffset = -100;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Pedir propuesta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WiFi({ whatsappNumber }: any) {
  const integracion = [
    'Site survey y diseño de celdas',
    'Wi-Fi para oficinas, depósitos, retail y campus',
    'Redes de invitados y segmentación',
    'Políticas de acceso y hardening'
  ];

  const idealPara = ['Retail', 'Educación', 'Salud', 'Oficinas'];

  return (
    <section id="wifi" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-5 leading-[1.2]">
            Wi-Fi corporativo y acceso seguro
          </h2>
          
          <p className="text-[18px] text-neutral-700 mb-8 leading-[1.7]">
            <strong>Qué resuelve:</strong> Cobertura y roaming estable para alta densidad de usuarios y dispositivos.
          </p>

          <div className="mb-8">
            <h3 className="text-[20px] font-semibold text-[#282327] mb-4">
              Qué integra Trendit
            </h3>
            <ul className="space-y-3">
              {integracion.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-[16px] font-semibold text-[#282327] mb-3">
              Ideal para:
            </h4>
            <div className="flex flex-wrap gap-3">
              {idealPara.map((chip, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-[#E94E1B]/10 border border-[#E94E1B]/20 rounded-full text-[14px] text-[#E94E1B] font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
              onClick={() => {
                const msg = encodeURIComponent('Hola, quiero información sobre Wi-Fi Cisco con Trendit. Mi empresa es: _____.');
                window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
              }}
            >
              <MessageCircle className="mr-2 size-5" />
              Hablar por WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('cta-final');
                if (element) {
                  const yOffset = -100;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Pedir propuesta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SDWAN({ whatsappNumber }: any) {
  const integracion = [
    'Diseño de interconexión sedes–planta–nube',
    'Priorización de tráfico y políticas',
    'Backups de conectividad y continuidad'
  ];

  const idealPara = ['Empresas multi-sede', 'Logística', 'Finanzas'];

  return (
    <section id="sdwan" className="py-20 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-5 leading-[1.2]">
            WAN / SD-WAN: conectividad entre sedes con control
          </h2>
          
          <p className="text-[18px] text-neutral-700 mb-8 leading-[1.7]">
            <strong>Qué resuelve:</strong> Mejor experiencia de aplicaciones y gestión centralizada.
          </p>

          <div className="mb-8">
            <h3 className="text-[20px] font-semibold text-[#282327] mb-4">
              Qué integra Trendit
            </h3>
            <ul className="space-y-3">
              {integracion.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-[16px] font-semibold text-[#282327] mb-3">
              Ideal para:
            </h4>
            <div className="flex flex-wrap gap-3">
              {idealPara.map((chip, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-[#E94E1B]/10 border border-[#E94E1B]/20 rounded-full text-[14px] text-[#E94E1B] font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
              onClick={() => {
                const msg = encodeURIComponent('Hola, quiero información sobre SD-WAN Cisco con Trendit. Mi empresa es: _____.');
                window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
              }}
            >
              <MessageCircle className="mr-2 size-5" />
              Hablar por WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('cta-final');
                if (element) {
                  const yOffset = -100;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Pedir propuesta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Ciberseguridad({ whatsappNumber }: any) {
  const integracion = [
    'MFA y verificación de identidad (ej. Cisco Duo)',
    'Seguridad DNS/web cloud (ej. Umbrella)',
    'Firewall y control perimetral',
    'Control de acceso a la red (NAC)',
    'Detección y respuesta (XDR)'
  ];

  const idealPara = ['Finanzas', 'Gobierno', 'Industria', 'Salud'];

  return (
    <section id="ciberseguridad" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-5 leading-[1.2]">
            Seguridad Cisco: Zero Trust desde el usuario hasta la nube
          </h2>
          
          <p className="text-[18px] text-neutral-700 mb-8 leading-[1.7]">
            <strong>Qué resuelve:</strong> Reducir superficie de ataque y responder más rápido.
          </p>

          <div className="mb-8">
            <h3 className="text-[20px] font-semibold text-[#282327] mb-4">
              Qué integra Trendit
            </h3>
            <ul className="space-y-3">
              {integracion.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-[16px] font-semibold text-[#282327] mb-3">
              Ideal para:
            </h4>
            <div className="flex flex-wrap gap-3">
              {idealPara.map((chip, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-[#E94E1B]/10 border border-[#E94E1B]/20 rounded-full text-[14px] text-[#E94E1B] font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
              onClick={() => {
                const msg = encodeURIComponent('Hola, quiero información sobre Ciberseguridad Cisco con Trendit. Mi empresa es: _____.');
                window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
              }}
            >
              <MessageCircle className="mr-2 size-5" />
              Hablar por WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('cta-final');
                if (element) {
                  const yOffset = -100;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Pedir propuesta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Observabilidad({ whatsappNumber }: any) {
  const integracion = [
    'Monitoreo de red y aplicaciones',
    'Alertas y tableros operativos',
    'Recomendaciones de mejora y capacity planning'
  ];

  const idealPara = ['Operaciones críticas', 'IT Managers', 'NOC'];

  return (
    <section id="observabilidad" className="py-20 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-5 leading-[1.2]">
            Observabilidad: ver lo que pasa antes de que impacte
          </h2>
          
          <p className="text-[18px] text-neutral-700 mb-8 leading-[1.7]">
            <strong>Qué resuelve:</strong> Visibilidad de experiencia y performance para anticipar incidentes.
          </p>

          <div className="mb-8">
            <h3 className="text-[20px] font-semibold text-[#282327] mb-4">
              Qué integra Trendit
            </h3>
            <ul className="space-y-3">
              {integracion.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-[16px] font-semibold text-[#282327] mb-3">
              Ideal para:
            </h4>
            <div className="flex flex-wrap gap-3">
              {idealPara.map((chip, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-[#E94E1B]/10 border border-[#E94E1B]/20 rounded-full text-[14px] text-[#E94E1B] font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
              onClick={() => {
                const msg = encodeURIComponent('Hola, quiero información sobre Observabilidad Cisco con Trendit. Mi empresa es: _____.');
                window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
              }}
            >
              <MessageCircle className="mr-2 size-5" />
              Hablar por WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('cta-final');
                if (element) {
                  const yOffset = -100;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Pedir propuesta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Meraki({ whatsappNumber }: any) {
  const integracion = [
    'Wi-Fi administrado en la nube',
    'Switching',
    'Security & SD-WAN',
    'Cámaras inteligentes',
    'Sensores (ambiente / operación)',
    'MDM para dispositivos (Systems Manager)'
  ];

  const idealPara = ['Retail', 'Franquicias', 'Educación', 'Sucursales'];

  return (
    <section id="meraki" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-5 leading-[1.2]">
            Cisco Meraki: redes distribuidas, gestión cloud
          </h2>
          
          <p className="text-[18px] text-neutral-700 mb-8 leading-[1.7]">
            <strong>Qué resuelve:</strong> Administración simple y rápida de redes multi-sitio.
          </p>

          <div className="mb-8">
            <h3 className="text-[20px] font-semibold text-[#282327] mb-4">
              Qué integra Trendit
            </h3>
            <ul className="space-y-3">
              {integracion.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-[16px] font-semibold text-[#282327] mb-3">
              Ideal para:
            </h4>
            <div className="flex flex-wrap gap-3">
              {idealPara.map((chip, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-[#E94E1B]/10 border border-[#E94E1B]/20 rounded-full text-[14px] text-[#E94E1B] font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
              onClick={() => {
                const msg = encodeURIComponent('Hola, quiero información sobre Cisco Meraki con Trendit. Mi empresa es: _____.');
                window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
              }}
            >
              <MessageCircle className="mr-2 size-5" />
              Hablar por WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('cta-final');
                if (element) {
                  const yOffset = -100;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Pedir propuesta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetodoTrendit() {
  const pasos = [
    { num: '01', title: 'Contacto y relevamiento', description: 'Entendemos tu operación y necesidades' },
    { num: '02', title: 'Diseño de arquitectura', description: 'TCO y escalabilidad' },
    { num: '03', title: 'Implementación y documentación', description: 'Deploy ordenado y profesional' },
    { num: '04', title: 'Seguridad, pruebas y puesta en marcha', description: 'Validación completa' },
    { num: '05', title: 'Soporte, mantenimiento y optimización', description: 'Continuidad operativa' },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-neutral-900 text-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] lg:text-[42px] mb-4 leading-[1.2]">
            Cómo trabajamos con Cisco (método Trendit)
          </h2>
          <p className="text-[16px] text-neutral-300 max-w-[700px] mx-auto">
            Buenas prácticas de gestión (PMI cuando aplica) + foco en continuidad operativa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {pasos.map((paso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                <div className="text-[32px] font-bold text-[#E94E1B] mb-4">
                  {paso.num}
                </div>
                <h3 className="text-[16px] font-semibold mb-2 leading-tight">
                  {paso.title}
                </h3>
                <p className="text-[14px] text-neutral-400 leading-[1.6]">
                  {paso.description}
                </p>
              </div>
              
              {/* Conector (solo desktop) */}
              {idx < pasos.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#E94E1B]/30 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriasSection() {
  const industrias = [
    {
      icon: <GraduationCap className="size-10" />,
      title: 'Educación',
      description: 'Wi-Fi campus, aulas híbridas, seguridad'
    },
    {
      icon: <Hospital className="size-10" />,
      title: 'Salud',
      description: 'Segmentación, redundancia, acceso seguro'
    },
    {
      icon: <ShoppingCart className="size-10" />,
      title: 'Retail',
      description: 'Multi-sitio, Meraki, analítica de red'
    },
    {
      icon: <Factory className="size-10" />,
      title: 'Manufactura',
      description: 'OT/IT, robustez, enlaces críticos'
    },
    {
      icon: <Landmark className="size-10" />,
      title: 'Finanzas',
      description: 'Zero Trust, monitoreo, continuidad'
    },
    {
      icon: <Building2 className="size-10" />,
      title: 'Gobierno',
      description: 'Seguridad, trazabilidad, operación'
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-4 leading-[1.2]">
            Beneficios por industria
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industrias.map((industria, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5">
                {industria.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-[#282327] mb-3">
                {industria.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.6]">
                {industria.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal({ whatsappNumber }: any) {
  const [formData, setFormData] = useState({
    solucionesSeleccionadas: [] as string[],
    otraSolucion: '',
    razonSocial: '',
    cuit: '',
    nombreApellido: '',
    cargo: '',
    email: '',
    telefono: '',
    provincia: '',
    mensaje: '',
    aceptaTerminos: false
  });

  const soluciones = [
    'Networking',
    'Wi-Fi',
    'SD-WAN',
    'Seguridad',
    'Observabilidad',
    'Meraki',
    'Otro'
  ];

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSolucion = (solucion: string) => {
    const current = formData.solucionesSeleccionadas;
    if (current.includes(solucion)) {
      updateField('solucionesSeleccionadas', current.filter(s => s !== solucion));
    } else {
      updateField('solucionesSeleccionadas', [...current, solucion]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Consulta enviada. Te contactaremos pronto con tu propuesta Cisco.');
    console.log('Datos enviados:', formData);
  };

  const handleWhatsApp = () => {
    let msg = 'Hola, quiero información sobre soluciones Cisco con Trendit.';
    if (formData.solucionesSeleccionadas.length > 0) {
      msg += ` Interés: ${formData.solucionesSeleccionadas.join(', ')}.`;
    }
    msg += ' Mi empresa es: _____.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="cta-final" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.2]">
            Solicitá asesoramiento Cisco
          </h2>
          <p className="text-[18px] text-neutral-700 leading-[1.7]">
            Contanos qué querés lograr y te respondemos con una propuesta.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl border border-neutral-200 p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Selector de soluciones */}
            <div>
              <h3 className="text-[18px] font-semibold text-[#282327] mb-4">
                Seleccioná al menos una solución *
              </h3>
              <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-3">
                {soluciones.map((sol, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSolucion(sol)}
                    className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-all border-2 ${
                      formData.solucionesSeleccionadas.includes(sol)
                        ? 'bg-[#E94E1B] text-white border-[#E94E1B]'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {sol}
                  </button>
                ))}
              </div>

              {formData.solucionesSeleccionadas.includes('Otro') && (
                <input
                  type="text"
                  value={formData.otraSolucion}
                  onChange={(e) => updateField('otraSolucion', e.target.value)}
                  placeholder="Especificar..."
                  className="w-full mt-3 px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              )}
            </div>

            {/* Datos de contacto */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Razón social *
                </label>
                <input
                  type="text"
                  required
                  value={formData.razonSocial}
                  onChange={(e) => updateField('razonSocial', e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  CUIT *
                </label>
                <input
                  type="text"
                  required
                  value={formData.cuit}
                  onChange={(e) => updateField('cuit', e.target.value)}
                  placeholder="XX-XXXXXXXX-X"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Nombre y apellido *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombreApellido}
                  onChange={(e) => updateField('nombreApellido', e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Cargo
                </label>
                <input
                  type="text"
                  value={formData.cargo}
                  onChange={(e) => updateField('cargo', e.target.value)}
                  placeholder="Ej: Responsable IT"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => updateField('telefono', e.target.value)}
                  placeholder="+54 9 351 XXX XXXX"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-2">
                Provincia / Ciudad *
              </label>
              <input
                type="text"
                required
                value={formData.provincia}
                onChange={(e) => updateField('provincia', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-2">
                Mensaje *
              </label>
              <textarea
                required
                value={formData.mensaje}
                onChange={(e) => updateField('mensaje', e.target.value)}
                rows={4}
                placeholder="Ej.: 3 sedes + 1 planta, necesitamos Wi-Fi y segmentación con seguridad…"
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none resize-none"
              />
            </div>

            {/* Términos */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terminos"
                required
                checked={formData.aceptaTerminos}
                onChange={(e) => updateField('aceptaTerminos', e.target.checked)}
                className="mt-1 w-4 h-4 text-[#E94E1B] rounded focus:ring-[#E94E1B]"
              />
              <label htmlFor="terminos" className="text-[14px] text-neutral-700 leading-[1.6]">
                Acepto la{' '}
                <a href="#privacidad" className="text-[#E94E1B] hover:underline">
                  política de privacidad
                </a>
                {' '}y el tratamiento de datos.
              </label>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="submit"
                size="lg"
                className="flex-1 bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
                disabled={!formData.aceptaTerminos || formData.solucionesSeleccionadas.length === 0}
              >
                Enviar consulta
                <ArrowRight className="ml-2 size-5" />
              </Button>
              
              <Button 
                type="button"
                size="lg"
                variant="outline"
                className="flex-1 border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B] hover:text-white"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 size-5" />
                Hablar por WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

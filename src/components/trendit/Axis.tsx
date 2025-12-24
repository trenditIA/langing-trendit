import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Video,
  Brain,
  Shield,
  Radio,
  Volume2,
  DoorOpen,
  Lock,
  Monitor,
  Building2,
  Factory,
  Plane,
  Mountain,
  Truck,
  AlertTriangle,
  Eye,
  Zap,
  CheckCircle2,
  MessageCircle,
  X,
  Home,
  Boxes,
  Activity,
  Users,
  FileText,
  Award
} from 'lucide-react';
import { Button } from '../ui/button';
import { AlertModal } from './AlertModal';

export function Axis() {
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);
  const whatsappNumber = '5493516013543';
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero información sobre soluciones AXIS con Trendit. Mi industria es: _____. Necesito: _____.'
  );

  // Map de IDs a índices de tabs
  const industryIdToTab: { [key: string]: number } = {
    'smart-cities': 0,
    'manufactura': 1,
    'oil-gas': 2,
    'mineria': 3,
    'aeropuertos': 4,
    'soc': 5,
    'edificios': 6
  };

  const scrollToSection = (sectionId: string) => {
    // Si es un ID de industria, también actualiza el tab
    if (industryIdToTab[sectionId] !== undefined) {
      setActiveIndustryTab(industryIdToTab[sectionId]);
      // Primero actualiza el tab, luego hace scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white">
      <Breadcrumb />
      <Hero scrollToSection={scrollToSection} whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} />
      <QueHaceAxis />
      <ExplorarIndustrias scrollToSection={scrollToSection} />
      <BloquesIndustria selectedTab={activeIndustryTab} setSelectedTab={setActiveIndustryTab} />
      <AutomatizacionIA />
      <Ciberseguridad />
      <SoftwareGestion />
      <IntegracionTrendit />
      <CTAWizard whatsappNumber={whatsappNumber} />
      <FAQ />
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
          <span className="text-[#282327]">AXIS</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ scrollToSection, whatsappNumber, whatsappMessage }: any) {
  const trustChips = [
    { label: 'Analíticas IA', tooltip: 'Detección y clasificación inteligente' },
    { label: 'Perímetro', tooltip: 'Protección de zonas críticas' },
    { label: 'Radar', tooltip: 'Detección sin falsas alarmas' },
    { label: 'Audio en red', tooltip: 'Comunicación y disuasión' },
    { label: 'Intercom', tooltip: 'Control bidireccional' },
    { label: 'Control de acceso', tooltip: 'Gestión unificada' },
    { label: 'Software/VMS', tooltip: 'Gestión centralizada' },
    { label: 'Ciberseguridad', tooltip: 'Protección extremo a extremo' }
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
        <div className="max-w-[980px] mx-auto text-center">
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-white mb-4 md:mb-6">
            AXIS + Trendit: videoseguridad inteligente, automatización e IA para entornos críticos
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-[1.6] mx-auto">
            Integramos soluciones AXIS de punta a punta: diseño, ingeniería, instalación, analíticas, gestión centralizada y soporte. Implementamos IA para detección de incidentes, automatización de respuestas y evidencia confiable en entornos críticos. <strong className="text-white">Trendit cuenta con técnicos certificados por Axis</strong> para proyectos de alta exigencia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 justify-center">
            <Button
              size="lg"
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-6 md:px-8 group shadow-lg shadow-[#E94E1B]/20 w-full sm:w-auto"
              onClick={() => scrollToSection('cta-wizard')}
            >
              Iniciar consulta guiada
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm w-full sm:w-auto transition-all duration-300"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="mr-2 size-5" />
              Hablar por WhatsApp
            </Button>
          </div>

          <button
            onClick={() => scrollToSection('explorar-industrias')}
            className="text-sm md:text-base text-white/70 hover:text-white underline underline-offset-4 mb-8 md:mb-10 transition-colors"
          >
            Explorar por industria →
          </button>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-3 mb-4 justify-center">
            {trustChips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-help"
                title={chip.tooltip}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-white/50">
            Del video a la acción: detección de incidentes, reglas automáticas y evidencia confiable.
          </p>
        </div>
      </div>
    </section>
  );
}

function QueHaceAxis() {
  const cards = [
    {
      icon: <Video className="size-10" />,
      title: 'Cámaras de red',
      description: 'Imágenes confiables para monitoreo, evidencia y operación 24/7.'
    },
    {
      icon: <Brain className="size-10" />,
      title: 'Analíticas con IA',
      description: 'Detecta, clasifica, rastrea y cuenta objetos relevantes para actuar a tiempo.'
    },
    {
      icon: <Shield className="size-10" />,
      title: 'Perímetro inteligente',
      description: 'Detección y clasificación para zonas restringidas, incluso en entornos difíciles.'
    },
    {
      icon: <Radio className="size-10" />,
      title: 'Radar',
      description: 'Detección robusta para reducir falsas alarmas y complementar cámaras.'
    },
    {
      icon: <Volume2 className="size-10" />,
      title: 'Audio en red',
      description: 'Mensajes, alertas, disuasión y comunicación en tiempo real.'
    },
    {
      icon: <DoorOpen className="size-10" />,
      title: 'Intercom IP',
      description: 'Comunicación bidireccional + control remoto para accesos y puntos críticos.'
    },
    {
      icon: <Lock className="size-10" />,
      title: 'Control de acceso',
      description: 'Gestión de puertas y visitantes con administración unificada.'
    },
    {
      icon: <Monitor className="size-10" />,
      title: 'Software & Gestión',
      description: 'VMS/gestión de video y acceso para control operativo y respuesta ante incidentes.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-6 leading-[1.15]">
            Un ecosistema abierto para seguridad, operaciones y safety
          </h2>
          <p className="text-[18px] text-neutral-700 max-w-[800px] mx-auto leading-[1.7]">
            AXIS combina dispositivos IP, analíticas en el edge y software de gestión para transformar eventos en decisiones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:border-[#DC291E]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-16 rounded-xl bg-[#DC291E]/5 group-hover:bg-[#DC291E]/10 flex items-center justify-center text-[#DC291E] mb-5 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#282327] mb-3 leading-tight">
                {card.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.6]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExplorarIndustrias({ scrollToSection }: any) {
  const industrias = [
    { id: 'smart-cities', icon: <Building2 className="size-8" />, name: 'Smart Cities', tag: 'Seguridad pública, movilidad y analítica para planificar y responder mejor.' },
    { id: 'manufactura', icon: <Factory className="size-8" />, name: 'Manufactura e Industrial', tag: 'Visibilidad operativa, control de procesos y seguridad del personal en planta.' },
    { id: 'oil-gas', icon: <Truck className="size-8" />, name: 'Oil & Gas', tag: 'Protección de activos, perímetros y safety en toda la cadena operativa.' },
    { id: 'mineria', icon: <Mountain className="size-8" />, name: 'Minería', tag: 'Sitios remotos, polvo y vibración: seguridad y operación 24/7.' },
    { id: 'aeropuertos', icon: <Plane className="size-8" />, name: 'Aeropuertos', tag: 'Aforo, zonas restringidas y eficiencia en terminales y accesos.' },
    { id: 'soc', icon: <Monitor className="size-8" />, name: 'Centros de seguridad / SOC', tag: 'Gestión centralizada multi-sitio, evidencia y respuesta rápida.' },
    { id: 'edificios', icon: <Building2 className="size-8" />, name: 'Edificios críticos', tag: 'Altos estándares: accesos, video, analíticas y auditoría.' }
  ];

  return (
    <section id="explorar-industrias" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Soluciones para industrias donde no hay margen de error
          </h2>
          <p className="text-[16px] text-neutral-600 max-w-[900px] mx-auto">
            Casos de uso reales en seguridad, operación y cumplimiento: monitoreo, analítica, automatización y gestión multi-sitio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industrias.map((industria, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border-2 border-neutral-200 hover:border-[#DC291E]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="size-16 rounded-xl bg-[#DC291E]/5 group-hover:bg-[#DC291E]/10 flex items-center justify-center text-[#DC291E] mb-5 transition-colors">
                {industria.icon}
              </div>
              <h3 className="text-[20px] font-semibold text-[#282327] mb-3">
                {industria.name}
              </h3>
              <p className="text-[15px] text-neutral-600 mb-6 leading-[1.6]">
                {industria.tag}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => scrollToSection(industria.id)}
                  className="flex-1 text-[14px] font-medium text-[#DC291E] hover:text-[#DC291E]/80 transition-colors"
                >
                  Ver casos →
                </button>
                <button
                  onClick={() => scrollToSection('cta-wizard')}
                  className="px-4 py-2 bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white text-[14px] font-medium rounded-lg transition-colors"
                >
                  Consulta
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BloquesIndustria({ selectedTab, setSelectedTab }: any) {
  const industrias = [
    {
      id: 'smart-cities',
      name: 'Smart Cities',
      resuelve: ['Seguridad pública y prevención', 'Movilidad urbana y eventos', 'Datos para planificación'],
      casos: ['Detección de incidentes y alertas', 'Conteo/flujo de personas y vehículos', 'Gestión de tráfico y respuesta temprana'],
      arquitectura: 'Cámaras + analíticas → centro de monitoreo → reglas/alertas → evidencias/reportes',
      trendit: ['Ingeniería + red + instalación + configuración + operación/soporte']
    },
    {
      id: 'manufactura',
      name: 'Industrial / Manufactura',
      resuelve: ['Transparencia operativa y control visual', 'Prevención de incidentes y safety', 'Mejora continua del proceso'],
      casos: ['Detección de eventos (ingresos, zonas restringidas, permanencia, conteos, desvíos)', 'Automatización por reglas: alertas, sirenas, audio, escalamiento al SOC', 'Auditoría visual y evidencia ante incidentes'],
      arquitectura: 'Sensores visuales + analíticas edge → VMS/gestión → flujos de notificación → integración con sistemas del cliente',
      trendit: ['Relevamiento, diseño, obra/cableado, puesta a punto, hardening, mantenimiento']
    },
    {
      id: 'oil-gas',
      name: 'Oil & Gas',
      resuelve: ['Seguridad de upstream/midstream/downstream', 'Perímetros, plantas, ductos y refinerías', 'Safety del personal'],
      casos: ['Perímetro inteligente (humano/vehículo) + verificación visual', 'Monitoreo remoto de áreas críticas', 'Operación continua con foco en seguridad y eficiencia'],
      arquitectura: 'Equipamiento certificado en zonas peligrosas (ATEX si aplica)',
      trendit: ['Arquitectura, comunicaciones, almacenamiento, operación y soporte']
    },
    {
      id: 'mineria',
      name: 'Minería',
      resuelve: ['Seguridad en sitios remotos', 'Operación sin downtime', 'Prevención y evidencia'],
      casos: ['Intrusión y protección perimetral', 'Seguridad operativa en condiciones extremas', 'Integración con sistemas existentes'],
      arquitectura: 'Equipamiento ruguerizado + conectividad robusta',
      trendit: ['Diseño robusto + instalación + operación centralizada']
    },
    {
      id: 'aeropuertos',
      name: 'Aeropuertos',
      resuelve: ['Zonas restringidas y perímetros', 'Flujo de pasajeros y colas', 'Eficiencia operativa en terminal'],
      casos: ['Monitoreo de aglomeraciones y gestión de colas', 'Control de accesos y puntos críticos', 'Alertas y respuesta ante incidentes'],
      arquitectura: 'Multi-cámara + analíticas + gestión centralizada',
      trendit: ['Multi-sitio + SOC + operación 24/7 (según necesidad)']
    },
    {
      id: 'soc',
      name: 'SOC / Centros de Seguridad',
      resuelve: ['Unificación de eventos', 'Procedimientos y auditoría', 'Respuesta rápida'],
      casos: ['Alarmas verificadas por video/analítica', 'Tableros operativos (incidentes, tiempos de respuesta)', 'Integraciones con control de acceso y terceros'],
      arquitectura: 'VMS central + integraciones + dashboards',
      trendit: ['Arquitectura + despliegue + capacitación + soporte']
    },
    {
      id: 'edificios',
      name: 'Edificios Críticos',
      resuelve: ['Control de accesos, video y evidencia', 'Estándares altos y cumplimiento'],
      casos: ['Intercom + acceso + video unificado', 'Analíticas para incidentes y eventos'],
      arquitectura: 'Sistema unificado + hardening',
      trendit: ['Instalación + hardening + mantenimiento']
    }
  ];

  const current = industrias[selectedTab];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-4">
          {industrias.map((ind, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTab(idx)}
              className={`px-6 py-3 rounded-xl text-[14px] font-medium whitespace-nowrap transition-all ${selectedTab === idx
                ? 'bg-[#DC291E] text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-3xl p-10"
            id={current.id}
          >
            <h3 className="text-[32px] font-semibold text-[#282327] mb-8">
              {current.name}
            </h3>

            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-4">
                    Qué resolvemos
                  </h4>
                  <ul className="space-y-2">
                    {current.resuelve.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-[#DC291E] flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-4">
                    Casos de uso (IA + automatización)
                  </h4>
                  <ul className="space-y-2">
                    {current.casos.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-4">
                    Arquitectura típica
                  </h4>
                  <p className="text-[15px] text-neutral-700 leading-[1.7]">
                    {current.arquitectura}
                  </p>
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-4">
                    Qué integra Trendit
                  </h4>
                  <ul className="space-y-2">
                    {current.trendit.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Award className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  size="lg"
                  className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white w-full sm:w-auto"
                  onClick={() => {
                    const element = document.getElementById('cta-wizard');
                    if (element) {
                      const yOffset = -100;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  Cotizar este escenario
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function AutomatizacionIA() {
  const [selectedCaso, setSelectedCaso] = useState(0);

  const casos = [
    {
      nombre: 'Intrusión perimetral',
      detecta: 'Persona o vehículo cruza línea virtual en perímetro',
      dispara: 'Alerta + grabación + audio disuasivo + notificación al SOC',
      integra: 'VMS + sistema de alarmas + audio network'
    },
    {
      nombre: 'Permanencia en zona restringida',
      detecta: 'Persona permanece más de X segundos en zona prohibida',
      dispara: 'Alerta prioritaria + sirena local + escalamiento',
      integra: 'Analíticas edge + VMS + sistema de respuesta'
    },
    {
      nombre: 'Conteo/aforo y alertas',
      detecta: 'Número de personas supera límite configurado',
      dispara: 'Alerta operativa + bloqueo de acceso + reporte',
      integra: 'Analíticas de conteo + control de acceso + dashboards'
    },
    {
      nombre: 'Cola / congestión operativa',
      detecta: 'Acumulación de personas en punto crítico',
      dispara: 'Notificación a supervisor + reasignación de recursos',
      integra: 'Analíticas de colas + sistema de gestión operativa'
    }
  ];

  const current = casos[selectedCaso];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] lg:text-[48px] mb-6 leading-[1.15]">
            De monitorear a anticipar: IA aplicada a incidentes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Eye className="size-12" />, title: 'Detectar', desc: 'Reconocer eventos relevantes y reducir ruido.' },
            { icon: <Zap className="size-12" />, title: 'Programar', desc: 'Reglas por horarios/zonas: alertas, escalamiento y acciones.' },
            { icon: <Activity className="size-12" />, title: 'Responder', desc: 'Evidencia y trazabilidad para actuar rápido y auditar.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="size-24 mx-auto rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#DC291E] mb-6">
                {item.icon}
              </div>
              <h3 className="text-[24px] font-semibold mb-3">{item.title}</h3>
              <p className="text-[16px] text-neutral-300 leading-[1.6]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mini demo */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10">
          <h3 className="text-[24px] font-semibold mb-6">
            Selector de caso
          </h3>

          <div className="flex flex-wrap gap-3 mb-8">
            {casos.map((caso, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCaso(idx)}
                className={`px-6 py-3 rounded-xl text-[14px] font-medium transition-all ${selectedCaso === idx
                  ? 'bg-[#DC291E] text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                {caso.nombre}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCaso}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-6"
            >
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-[16px] font-semibold mb-3 text-[#DC291E]">Qué detecta</h4>
                <p className="text-[15px] text-neutral-300">{current.detecta}</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-[16px] font-semibold mb-3 text-[#E94E1B]">Qué dispara</h4>
                <p className="text-[15px] text-neutral-300">{current.dispara}</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-[16px] font-semibold mb-3 text-white">Qué integra</h4>
                <p className="text-[15px] text-neutral-300">{current.integra}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Ciberseguridad() {
  const bullets = [
    'Identidad del dispositivo y base de confianza',
    'Arranque seguro y firmware firmado',
    'Protección de evidencias (integridad)'
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="size-20 mx-auto rounded-full bg-[#DC291E]/5 flex items-center justify-center text-[#DC291E] mb-6">
            <Shield className="size-10" />
          </div>

          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-6 leading-[1.15]">
            Seguridad desde el hardware hasta la operación
          </h2>

          <ul className="space-y-4 mb-8 text-left max-w-[600px] mx-auto">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="size-6 text-[#DC291E] flex-shrink-0 mt-0.5" />
                <span className="text-[17px] text-neutral-700">{bullet}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="outline"
            className="border-[#DC291E] text-[#DC291E] hover:bg-[#DC291E] hover:text-white"
            onClick={() => {
              const element = document.getElementById('cta-wizard');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Solicitar diseño con hardening
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function SoftwareGestion() {
  const cards = [
    'VMS / gestión de video y acceso',
    'Operación multi-sitio',
    'Integración con audio, intercom, control de acceso y analíticas'
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-4 leading-[1.15]">
            Gestión centralizada para operar y resolver incidentes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-2xl p-8 hover:border-[#DC291E]/30 hover:shadow-lg transition-all"
            >
              <Monitor className="size-12 text-[#DC291E] mb-4" />
              <p className="text-[16px] font-medium text-[#282327]">{card}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[15px] text-neutral-600 italic">
          Diseñamos la arquitectura para tu operación: on-prem, híbrida o escalable.
        </p>
      </div>
    </section>
  );
}

function IntegracionTrendit() {
  const pasos = [
    { num: '01', title: 'Relevamiento & objetivos' },
    { num: '02', title: 'Ingeniería de cobertura + red + energía' },
    { num: '03', title: 'Diseño de arquitectura (video + analíticas + acceso)' },
    { num: '04', title: 'Obra e instalación (incluye cableado certificado si aplica)' },
    { num: '05', title: 'Configuración, hardening, pruebas' },
    { num: '06', title: 'Puesta en marcha + capacitación' },
    { num: '07', title: 'Soporte, mantenimiento y escalado' }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] lg:text-[48px] mb-4 leading-[1.15]">
            De la ingeniería al soporte: implementación end-to-end
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pasos.map((paso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="text-[40px] font-bold text-[#DC291E] mb-4">
                {paso.num}
              </div>
              <p className="text-[15px] leading-[1.5]">
                {paso.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAWizard({ whatsappNumber }: any) {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <>
      <section id="cta-wizard" className="py-32 px-6 lg:px-12 bg-gradient-to-br from-[#DC291E]/5 to-white">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] lg:text-[52px] text-[#282327] mb-6 leading-[1.1]">
              Armemos tu solución AXIS en 2 minutos
            </h2>
            <p className="text-[18px] text-neutral-700 mb-10 leading-[1.7]">
              Elegí tu industria, objetivos y escala. Te devolvemos un diseño preliminar y una propuesta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-10 text-[16px]"
                onClick={() => setShowWizard(true)}
              >
                Iniciar consulta guiada
                <ArrowRight className="ml-2 size-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#DC291E] text-[#DC291E] hover:bg-[#DC291E] hover:text-white px-10 text-[16px]"
                onClick={() => {
                  const msg = encodeURIComponent('Hola, quiero una propuesta AXIS con Trendit. Mi industria es: _____. Necesito: _____.');
                  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                WhatsApp +54 9 3516 01-3543
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {showWizard && <Wizard onClose={() => setShowWizard(false)} whatsappNumber={whatsappNumber} />}
    </>
  );
}

function Wizard({ onClose, whatsappNumber }: any) {
  const [step, setStep] = useState(1);
  const [alertModal, setAlertModal] = useState<{
    isOpen: boolean;
    type: 'success' | 'error' | 'warning';
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });
  const [formData, setFormData] = useState({
    industria: '',
    objetivo: '',
    casosUso: [] as string[],
    sitios: '',
    dispositivos: '',
    retencion: '',
    condiciones: [] as string[],
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    ciudad: '',
    detalle: ''
  });

  const totalSteps = 6;

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: 'casosUso' | 'condiciones', value: string) => {
    const current = formData[field];
    if (current.includes(value)) {
      updateField(field, current.filter(v => v !== value));
    } else {
      updateField(field, [...current, value]);
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.industria !== '';
    if (step === 2) return formData.objetivo !== '';
    if (step === 3) return formData.casosUso.length > 0;
    if (step === 4) return formData.sitios !== '' && formData.dispositivos !== '' && formData.retencion !== '';
    if (step === 5) return formData.condiciones.length > 0;
    if (step === 6) return formData.nombre && formData.empresa && formData.email && formData.telefono && formData.ciudad;
    return true;
  };

  const handleSubmit = () => {
    setAlertModal({
      isOpen: true,
      type: 'success',
      title: '¡Listo!',
      message: 'Un especialista de Trendit te contactará. Si preferís respuesta inmediata, escribinos por WhatsApp.'
    });
  };

  const handleCloseAlert = () => {
    setAlertModal({ ...alertModal, isOpen: false });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl max-w-[900px] w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="px-8 py-6 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <h3 className="text-[24px] font-semibold text-[#282327]">
              Consulta guiada AXIS
            </h3>
            <p className="text-[14px] text-neutral-600">
              Paso {step} de {totalSteps}
            </p>
          </div>
          <button
            onClick={onClose}
            className="size-10 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-neutral-100">
          <div
            className="h-full bg-[#DC291E] transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <WizardStep key="step1" title="¿Cuál es tu industria?">
                <div className="grid md:grid-cols-2 gap-4">
                  {['Smart Cities', 'Industrial', 'Oil & Gas', 'Minería', 'Aeropuertos', 'SOC', 'Edificios críticos'].map(ind => (
                    <button
                      key={ind}
                      onClick={() => updateField('industria', ind)}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${formData.industria === ind
                        ? 'border-[#DC291E] bg-[#DC291E]/5'
                        : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                    >
                      <span className="text-[16px] font-medium text-[#282327]">{ind}</span>
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 2 && (
              <WizardStep key="step2" title="¿Cuál es tu objetivo principal?">
                <div className="flex flex-wrap gap-3">
                  {['Seguridad física', 'Eficiencia operativa', 'Safety', 'Cumplimiento & auditoría', 'Mixto'].map(obj => (
                    <button
                      key={obj}
                      onClick={() => updateField('objetivo', obj)}
                      className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.objetivo === obj
                        ? 'border-[#DC291E] bg-[#DC291E] text-white'
                        : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                    >
                      {obj}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 3 && (
              <WizardStep key="step3" title="¿Qué casos de uso necesitás? (seleccioná varios)">
                <div className="flex flex-wrap gap-3">
                  {['Perímetro', 'Intrusión', 'Permanencia (loitering)', 'Conteo & aforo', 'Colas', 'Audio disuasivo', 'Intercom', 'Control de acceso', 'Analíticas IA'].map(caso => (
                    <button
                      key={caso}
                      onClick={() => toggleArrayField('casosUso', caso)}
                      className={`px-5 py-3 rounded-xl border-2 transition-all ${formData.casosUso.includes(caso)
                        ? 'border-[#DC291E] bg-[#DC291E] text-white'
                        : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                    >
                      {caso}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 4 && (
              <WizardStep key="step4" title="¿Cuál es la escala del proyecto?">
                <div className="space-y-6">
                  <div>
                    <label className="block text-[14px] font-medium text-[#282327] mb-3">
                      Sitios
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['1', '2–5', '6–20', '20+'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => updateField('sitios', opt)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.sitios === opt
                            ? 'border-[#DC291E] bg-[#DC291E] text-white'
                            : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#282327] mb-3">
                      Dispositivos
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['1–8', '9–32', '33–100', '100+'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => updateField('dispositivos', opt)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.dispositivos === opt
                            ? 'border-[#DC291E] bg-[#DC291E] text-white'
                            : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#282327] mb-3">
                      Retención de grabación (días)
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['7', '15', '30', '60', 'Definir'].map(opt => (
                        <button
                          key={opt}
                          onClick={() => updateField('retencion', opt)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.retencion === opt
                            ? 'border-[#DC291E] bg-[#DC291E] text-white'
                            : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </WizardStep>
            )}

            {step === 5 && (
              <WizardStep key="step5" title="¿Condiciones del entorno? (seleccioná todas las que apliquen)">
                <div className="flex flex-wrap gap-3">
                  {['Exterior', 'Baja luz', 'Polvo', 'Vibración', 'Clima extremo', 'Conectividad limitada', 'Zona peligrosa (ATEX)', 'Otro'].map(cond => (
                    <button
                      key={cond}
                      onClick={() => toggleArrayField('condiciones', cond)}
                      className={`px-5 py-3 rounded-xl border-2 transition-all ${formData.condiciones.includes(cond)
                        ? 'border-[#DC291E] bg-[#DC291E] text-white'
                        : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                    >
                      {cond}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 6 && (
              <WizardStep key="step6" title="Datos de contacto">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nombre y apellido *"
                      value={formData.nombre}
                      onChange={(e) => updateField('nombre', e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#DC291E] focus:border-transparent outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Empresa *"
                      value={formData.empresa}
                      onChange={(e) => updateField('empresa', e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#DC291E] focus:border-transparent outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Cargo"
                    value={formData.cargo}
                    onChange={(e) => updateField('cargo', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#DC291E] focus:border-transparent outline-none"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#DC291E] focus:border-transparent outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono *"
                      value={formData.telefono}
                      onChange={(e) => updateField('telefono', e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#DC291E] focus:border-transparent outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Ciudad *"
                    value={formData.ciudad}
                    onChange={(e) => updateField('ciudad', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#DC291E] focus:border-transparent outline-none"
                  />

                  <textarea
                    placeholder="Detalle del proyecto"
                    value={formData.detalle}
                    onChange={(e) => updateField('detalle', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#DC291E] focus:border-transparent outline-none resize-none"
                  />
                </div>
              </WizardStep>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-neutral-200 flex items-center justify-between">
          <button
            onClick={() => setStep(s => Math.max(1, s - 1))}
            disabled={step === 1}
            className="px-6 py-3 text-[14px] font-medium text-neutral-700 hover:text-[#282327] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Atrás
          </button>

          {step < totalSteps ? (
            <Button
              onClick={() => setStep(s => s + 1)}
              disabled={!canProceed()}
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white disabled:opacity-30"
            >
              Siguiente
              <ArrowRight className="ml-2 size-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white disabled:opacity-30"
            >
              Enviar consulta
              <CheckCircle2 className="ml-2 size-4" />
            </Button>
          )}
        </div>
      </motion.div>

      {/* Alert Modal */}
      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={handleCloseAlert}
        type={alertModal.type}
        title={alertModal.title}
        message={alertModal.message}
      />
    </div>
  );
}

function WizardStep({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-[28px] font-semibold text-[#282327] mb-8">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Se puede integrar con infraestructura existente?',
      a: 'Sí, AXIS trabaja con protocolos abiertos (ONVIF) y se integra con VMS de terceros, sistemas de control de acceso, alarmas y plataformas empresariales.'
    },
    {
      q: '¿On-prem, híbrido o nube?',
      a: 'Diseñamos según tu operación: servidores locales para máxima privacidad, híbrido para escalabilidad o gestión cloud para multi-sitio con menor infraestructura local.'
    },
    {
      q: '¿Qué necesita mi red (PoE, ancho de banda, storage)?',
      a: 'Hacemos ingeniería de capacidad: PoE+ o PoE++ según cámaras, ancho de banda por resolución/fps y storage según retención. Te entregamos un diseño completo.'
    },
    {
      q: '¿Cómo se reduce la falsa alarma?',
      a: 'Con analíticas IA que clasifican objetos (persona/vehículo/animal), radar para confirmación y reglas inteligentes por zona/horario.'
    },
    {
      q: '¿Cómo se gestiona ciberseguridad y actualizaciones?',
      a: 'Dispositivos con firmware firmado, gestión centralizada de actualizaciones, hardening de configuración y trazabilidad de eventos.'
    },
    {
      q: 'Trendit realiza instalación, obra y soporte?',
      a: 'Sí. Desde relevamiento, diseño, obra/cableado, puesta en marcha hasta mantenimiento preventivo y soporte técnico.'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-12 text-center">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <span className="text-[17px] font-semibold text-[#282327] pr-8">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`size-5 text-neutral-400 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-[15px] text-neutral-700 leading-[1.7]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
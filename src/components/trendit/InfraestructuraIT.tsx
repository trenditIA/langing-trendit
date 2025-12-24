import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Server,
  Cloud,
  Cpu,
  Shield,
  Database,
  Network,
  Zap,
  HardDrive,
  Activity,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Clock,
  TrendingUp,
  Lock,
  BarChart3
} from 'lucide-react';

export function InfraestructuraIT() {
  return (
    <div className="bg-white">
      <HeroInfraestructura />
      <Contexto />
      <CuadroComparativo />
      <QueResuelve />
      <EdgePlanta />
      <AIReady />
      <StorageBackup />
      <RedesSeguridad />
      <EnergiaContinuidad />
      <ComoTrabajamos />
      <CTAFinal />
    </div>
  );
}

// ==================== HERO ====================
function HeroInfraestructura() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const secciones = [
    {
      id: 'hibrida',
      icon: <Cloud className="size-5" />,
      label: 'Estrategia híbrida'
    },
    {
      id: 'datacenter',
      icon: <Server className="size-5" />,
      label: 'Data Center'
    },
    {
      id: 'edge',
      icon: <Activity className="size-5" />,
      label: 'Edge / Planta'
    },
    {
      id: 'ai',
      icon: <Cpu className="size-5" />,
      label: 'AI Ready'
    },
    {
      id: 'storage',
      icon: <Database className="size-5" />,
      label: 'Storage & Backup'
    },
    {
      id: 'redes',
      icon: <Network className="size-5" />,
      label: 'Redes & Seguridad'
    },
    {
      id: 'energia',
      icon: <Zap className="size-5" />,
      label: 'Energía & Continuidad'
    },
    {
      id: 'metodo',
      icon: <BarChart3 className="size-5" />,
      label: 'Cómo trabajamos'
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveButton(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%20Trendit%2C%20quiero%20asesoramiento%20en%20Infraestructura%20IT%20y%20Data%20Center%20(servidores%2C%20storage%2C%20virtualizaci%C3%B3n%20o%20AI).%20%C2%BFPodemos%20coordinar%20una%20llamada%3F', '_blank');
  };

  return (
    <section
      className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 80px)',
        background: 'linear-gradient(135deg, #1a1618 0%, #282327 100%)'
      }}
    >
      {/* Subtle orange glow */}
      <div
        className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
        style={{ background: '#E94E1B' }}
      />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[58%_42%] gap-8 md:gap-10 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[640px]"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-5 sm:mb-6 lg:mb-7"
              style={{
                background: 'rgba(233, 78, 27, 0.1)',
                border: '1px solid rgba(233, 78, 27, 0.2)'
              }}
            >
              <div className="size-2 rounded-full bg-[#E94E1B] flex-shrink-0" />
              <span
                className="text-[11px] sm:text-[12px] lg:text-[13px] uppercase tracking-wide text-[#E94E1B]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Infraestructura IT & Data Center
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-[32px] sm:text-[36px] md:text-[46px] lg:text-[52px] leading-[1.1] mb-4 sm:mb-5 lg:mb-6 text-white"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              Plataformas híbridas listas para operar y escalar
            </h1>

            {/* Subtitle */}
            <p
              className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] mb-4 sm:mb-5 text-neutral-300"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Diseñamos e integramos infraestructura híbrida (nube + on-prem + edge) para lograr continuidad operativa, seguridad y performance, con visión de futuro e IA.
            </p>

            {/* Microcopy */}
            <p
              className="text-[13px] sm:text-[14px] lg:text-[15px] mb-6 sm:mb-7 lg:mb-8 text-neutral-400"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              La infraestructura dejó de ser soporte: hoy es ventaja competitiva.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#metodo"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('metodo');
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                <span className="text-[14px] lg:text-[15px]">Solicitar diagnóstico</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent text-white rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                <MessageCircle className="size-4" />
                <span className="text-[14px] lg:text-[15px]">Hablar por WhatsApp</span>
              </button>
            </div>

            {/* Trust microcopy */}
            <div className="flex items-center gap-2 text-neutral-400">
              <Clock className="size-4" />
              <span
                className="text-[13px]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Respuesta en menos de 24 h hábiles
              </span>
            </div>
          </motion.div>

          {/* Right Column - Selector Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div
              className="p-6 lg:p-8 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
            >
              <h3
                className="text-[18px] lg:text-[20px] mb-5 text-white"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Explorar temas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {secciones.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`group relative p-4 rounded-xl transition-all duration-300 text-left ${activeButton === sec.id ? 'ring-2 ring-[#E94E1B]' : ''
                      }`}
                    style={{
                      background: activeButton === sec.id
                        ? 'rgba(233, 78, 27, 0.1)'
                        : 'rgba(255, 255, 255, 0.05)',
                      border: activeButton === sec.id
                        ? '1px solid rgba(233, 78, 27, 0.3)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: activeButton === sec.id
                        ? '0 0 20px rgba(233, 78, 27, 0.2)'
                        : 'none'
                    }}
                  >
                    <div
                      className={`size-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${activeButton === sec.id ? 'bg-[#E94E1B] text-white' : 'bg-white/10 text-neutral-300 group-hover:bg-white/15'
                        }`}
                    >
                      {sec.icon}
                    </div>
                    <h4
                      className={`text-[13px] lg:text-[14px] leading-tight ${activeButton === sec.id ? 'text-white' : 'text-neutral-200'
                        }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {sec.label}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ==================== CONTEXTO ====================
function Contexto() {
  const cards = [
    {
      number: '01',
      title: 'Más cómputo, más datos, más red',
      text: 'IA, automatización y analítica elevan la demanda exponencialmente.'
    },
    {
      number: '02',
      title: 'Costos y gobernanza importan',
      text: 'Cloud sin control puede ser más caro que on-prem bien dimensionado.'
    },
    {
      number: '03',
      title: 'Híbrido: cloud + on-prem + edge',
      text: 'La respuesta ya no es "solo cloud": es decidir bien dónde corre cada carga.'
    }
  ];

  return (
    <section id="hibrida" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Por qué infraestructura volvió a ser estratégica
          </h2>
          <p
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-600 max-w-[800px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            IA, automatización y datos elevan la demanda de cómputo, red y almacenamiento. La respuesta ya no es "solo cloud": es decidir bien dónde corre cada carga.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-6 lg:p-8 bg-white rounded-2xl border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="size-16 rounded-xl flex items-center justify-center mb-5 text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                <span
                  className="text-[24px]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 700
                  }}
                >
                  {card.number}
                </span>
              </div>
              <h3
                className="text-[18px] lg:text-[20px] mb-3 text-[#282327] leading-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-[14px] lg:text-[15px] text-neutral-600 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CUADRO COMPARATIVO ====================
function CuadroComparativo() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const data = [
    {
      id: 'cloud',
      title: 'Cloud (AWS / Azure / IBM Cloud, etc.)',
      bullets: [
        'Escala rápido y habilita servicios gestionados',
        'Ideal para picos y entornos dinámicos',
        'Requiere arquitectura y control de costos'
      ]
    },
    {
      id: 'onprem',
      title: 'On-prem / Data Center propio',
      bullets: [
        'Performance estable y control',
        'Ideal para cargas estables, datos sensibles o licencias existentes',
        'Inversión eficiente si se dimensiona y opera bien'
      ]
    },
    {
      id: 'edge',
      title: 'Edge / Planta / Sucursal',
      bullets: [
        'Procesa cerca del dato (baja latencia)',
        'Ideal para operación, IoT, video analítica, continuidad local',
        'Reduce dependencia de conectividad'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            ¿Dónde conviene ejecutar cada carga?
          </h2>
          <p
            className="text-[16px] md:text-[17px] text-neutral-600 max-w-[800px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            No existe una única respuesta. La clave es elegir por costo, latencia, continuidad, conectividad y criticidad.
          </p>
        </motion.div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {data.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-6 lg:p-7 bg-neutral-50 rounded-2xl border border-neutral-200"
            >
              <h3
                className="text-[18px] lg:text-[19px] mb-4 text-[#282327] leading-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <div className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                    <span
                      className="text-[14px] lg:text-[15px] text-neutral-600 leading-relaxed"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {data.map((item) => (
            <div key={item.id} className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setExpandedRow(expandedRow === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span
                  className="text-[15px] text-[#282327] pr-4 leading-tight"
                  style={{ fontFamily: 'Campton', fontWeight: 600 }}
                >
                  {item.title}
                </span>
                {expandedRow === item.id ? (
                  <ChevronUp className="size-5 text-[#E94E1B] flex-shrink-0" />
                ) : (
                  <ChevronDown className="size-5 text-neutral-400 flex-shrink-0" />
                )}
              </button>

              {expandedRow === item.id && (
                <div className="px-5 pb-5 space-y-2.5">
                  {item.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span
                        className="text-[14px] text-neutral-700 leading-relaxed"
                        style={{ fontFamily: 'Campton', fontWeight: 400 }}
                      >
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== QUÉ RESUELVE ====================
function QueResuelve() {
  const items = [
    { icon: <Cloud className="size-5" />, text: 'Arquitectura híbrida: nube + on-prem + edge' },
    { icon: <Server className="size-5" />, text: 'Servidores y plataformas de cómputo' },
    { icon: <Database className="size-5" />, text: 'Storage, backup y protección de datos' },
    { icon: <Network className="size-5" />, text: 'Redes de data center y conectividad' },
    { icon: <Shield className="size-5" />, text: 'Seguridad de infraestructura' },
    { icon: <Zap className="size-5" />, text: 'Energía y continuidad operativa' }
  ];

  return (
    <section id="datacenter" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Del diseño a la operación: infraestructura que funciona en el mundo real
          </h2>
          <p
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-600 max-w-[860px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Trendit integra infraestructura de punta a punta: arquitectura, selección tecnológica, implementación y soporte. El objetivo no es "instalar": es sostener operación, seguridad y evolución.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-5 lg:p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-md transition-all duration-300"
            >
              <div
                className="size-10 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                {item.icon}
              </div>
              <span
                className="text-[14px] lg:text-[15px] text-neutral-700 leading-relaxed pt-1"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== EDGE / PLANTA ====================
function EdgePlanta() {
  const cards = [
    {
      icon: <Activity className="size-6" />,
      title: 'Analítica y procesamiento local',
      text: 'Decisiones en tiempo real sin depender de conectividad externa.'
    },
    {
      icon: <Shield className="size-6" />,
      title: 'Video y seguridad en tiempo real',
      text: 'Analítica de video, detección de eventos y continuidad operativa.'
    },
    {
      icon: <Cloud className="size-6" />,
      title: 'Integración con entornos híbridos',
      text: 'Edge conectado con cloud y data center cuando es necesario.'
    }
  ];

  return (
    <section id="edge" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Edge computing: cuando la latencia y la continuidad mandan
          </h2>
          <p
            className="text-[16px] md:text-[17px] text-neutral-600 max-w-[860px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Hay procesos que necesitan correr cerca del dato: plantas, sucursales, operaciones críticas o entornos con conectividad limitada. Diseñamos edge para que la operación siga incluso cuando el contexto no ayuda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-6 lg:p-7 bg-neutral-50 rounded-2xl border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="size-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                {card.icon}
              </div>
              <h3
                className="text-[18px] lg:text-[19px] mb-3 text-[#282327] leading-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-[14px] lg:text-[15px] text-neutral-600 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== AI READY ====================
function AIReady() {
  const bloques = [
    {
      icon: <Cpu className="size-6" />,
      title: 'CPU optimizada (Intel / AMD)',
      text: 'Virtualización y cargas mixtas con estabilidad y escalabilidad.'
    },
    {
      icon: <Server className="size-6" />,
      title: 'GPU para IA (NVIDIA)',
      text: 'Aceleración para inferencia, analítica y cargas intensivas.'
    },
    {
      icon: <Cloud className="size-6" />,
      title: 'Arquitecturas híbridas',
      text: 'Distribución inteligente entre cloud/on-prem/edge.'
    }
  ];

  const fabricantes = ['Lenovo', 'Dell', 'HPE', 'IBM'];

  return (
    <section id="ai" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            AI Ready: cómputo para analítica e inferencia
          </h2>
          <p
            className="text-[16px] md:text-[17px] text-neutral-600 max-w-[800px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La IA exige plataforma: CPU, GPU, red, storage y energía alineados. Trendit diseña entornos listos para cargas de datos e inferencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {bloques.map((bloque, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-6 lg:p-7 bg-white rounded-2xl border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="size-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                {bloque.icon}
              </div>
              <h3
                className="text-[18px] lg:text-[19px] mb-3 text-[#282327] leading-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {bloque.title}
              </h3>
              <p
                className="text-[14px] lg:text-[15px] text-neutral-600 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {bloque.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fabricantes mini-grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h4
            className="text-[16px] mb-4 text-[#282327]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600
            }}
          >
            Fabricantes
          </h4>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {fabricantes.map((fab) => (
              <div
                key={fab}
                className="px-5 py-2.5 bg-white rounded-full border border-neutral-200 text-[14px] text-neutral-700"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                {fab}
              </div>
            ))}
          </div>
          <p
            className="text-[13px] text-neutral-500"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Seleccionamos por alcance, tiempos y requisitos del proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== STORAGE & BACKUP ====================
function StorageBackup() {
  const items = [
    'Storage para virtualización y datos',
    'Diseño por criticidad y performance',
    'Backup y recuperación con RPO/RTO definidos',
    'Retención y orden operativo'
  ];

  return (
    <section id="storage" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Storage y protección de datos: capacidad con estrategia
          </h2>
          <p
            className="text-[16px] md:text-[17px] text-neutral-600 max-w-[800px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            El storage no es solo terabytes. Es performance, resiliencia y continuidad. Diseñamos esquemas con foco en crecimiento y TCO.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-50 rounded-2xl p-8 lg:p-10 border border-neutral-200"
        >
          <ul className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <HardDrive className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                <span
                  className="text-[15px] lg:text-[16px] text-neutral-700 leading-relaxed"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== REDES & SEGURIDAD ====================
function RedesSeguridad() {
  const cards = [
    {
      icon: <Network className="size-6" />,
      title: 'Switching / uplinks / redundancia',
      text: 'Conectividad robusta y escalable para el data center.'
    },
    {
      icon: <Lock className="size-6" />,
      title: 'Segmentación y buenas prácticas de seguridad',
      text: 'Diseño por capas, aislamiento de tráfico y control de acceso.'
    },
    {
      icon: <Activity className="size-6" />,
      title: 'Observabilidad y orden operativo',
      text: 'Monitoreo, alertas y documentación para operación diaria.'
    }
  ];

  return (
    <section id="redes" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Red y seguridad: la columna vertebral del Data Center
          </h2>
          <p
            className="text-[16px] md:text-[17px] text-neutral-600 max-w-[860px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Diseñamos redes preparadas para crecimiento, segmentación y operación segura, con una base que soporte nuevas cargas (incluida IA).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-6 lg:p-7 bg-white rounded-2xl border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="size-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                {card.icon}
              </div>
              <h3
                className="text-[18px] lg:text-[19px] mb-3 text-[#282327] leading-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-[14px] lg:text-[15px] text-neutral-600 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== ENERGÍA & CONTINUIDAD ====================
function EnergiaContinuidad() {
  const items = [
    'UPS, autonomía y mantenimiento',
    'Orden eléctrico y documentación',
    'Recomendaciones térmicas / sala (según sitio)'
  ];

  return (
    <section id="energia" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Continuidad operativa: energía, autonomía y orden
          </h2>
          <p
            className="text-[16px] md:text-[17px] text-neutral-600 max-w-[800px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La disponibilidad depende tanto del cómputo como de la energía. Diseñamos continuidad para minimizar paradas evitables.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-50 rounded-2xl p-8 lg:p-10 border border-neutral-200"
        >
          <ul className="space-y-4">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <Zap className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                <span
                  className="text-[15px] lg:text-[16px] text-neutral-700 leading-relaxed"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== CÓMO TRABAJAMOS ====================
function ComoTrabajamos() {
  const steps = [
    {
      number: '01',
      title: 'Relevamiento y diagnóstico',
      text: 'Identificamos cargas, criticidad, conectividad y restricciones del entorno.'
    },
    {
      number: '02',
      title: 'Diseño y propuesta (arquitectura + alcance)',
      text: 'Definimos arquitectura híbrida, tecnología, tiempos e inversión clara.'
    },
    {
      number: '03',
      title: 'Implementación y puesta en marcha',
      text: 'Desplegamos con método, documentación y pruebas de continuidad.'
    },
    {
      number: '04',
      title: 'Soporte y mejora continua',
      text: 'Acompañamos operación, monitoreo y evolución del entorno.'
    }
  ];

  return (
    <section id="metodo" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Método, trazabilidad y claridad en cada etapa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[16px] md:text-[17px] text-neutral-600 text-center max-w-[800px] mx-auto mb-12 lg:mb-16 leading-relaxed"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400
          }}
        >
          Aplicamos gestión formal (PMI) y enfoques ágiles según el proyecto: alcance, tiempos, riesgos y entregables claros. Menos sorpresas, más control.
        </motion.p>

        <div className="relative">
          {/* Timeline line (desktop) */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-0.5 bg-neutral-200" />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Number badge */}
                <div
                  className="size-24 mx-auto mb-5 rounded-full flex items-center justify-center text-white relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                    boxShadow: '0 6px 20px rgba(233, 78, 27, 0.3)'
                  }}
                >
                  <span
                    className="text-[28px]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 700
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-[18px] lg:text-[19px] mb-3 text-[#282327] text-center leading-tight"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[14px] lg:text-[15px] text-neutral-600 text-center leading-relaxed"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CTA FINAL ====================
function CTAFinal() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%20Trendit%2C%20quiero%20asesoramiento%20en%20Infraestructura%20IT%20y%20Data%20Center%20(servidores%2C%20storage%2C%20virtualizaci%C3%B3n%20o%20AI).%20%C2%BFPodemos%20coordinar%20una%20llamada%3F', '_blank');
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            ¿Se evalúa una renovación o un nuevo Data Center?
          </h2>
          <p
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-600 mb-10 leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Trendit ayuda a definir una arquitectura híbrida realista, dimensionar inversión y ejecutar el despliegue con orden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="#contactanos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              <span className="text-[15px] lg:text-[16px]">Solicitar diagnóstico</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#282327] rounded-full border-2 border-neutral-300 hover:border-[#E94E1B] transition-all duration-300"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              <MessageCircle className="size-4" />
              <span className="text-[15px] lg:text-[16px]">Hablar por WhatsApp</span>
            </button>
          </div>

          <p
            className="text-[13px] text-neutral-500"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La recomendación depende de cargas, criticidad, conectividad y restricciones del entorno.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
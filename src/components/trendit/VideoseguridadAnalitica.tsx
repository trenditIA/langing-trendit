import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Video, 
  Shield,
  Eye,
  AlertTriangle,
  Search,
  Cloud,
  Server,
  Cpu,
  Camera,
  Car,
  Users,
  TrendingUp,
  Factory,
  Package,
  ShoppingCart,
  Heart,
  GraduationCap,
  Zap,
  Building2,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Activity,
  Thermometer,
  ChevronRight,
  X,
  FileText,
  Clipboard
} from 'lucide-react';
import { ConsultaGuiadaModal } from './ConsultaGuiadaModal';

export function VideoseguridadAnalitica() {
  return (
    <div className="bg-white">
      <HeroVideoseguridad />
      <QueCambio />
      <CapacidadesClave />
      <SolucionesPorIndustria />
      <Marcas />
      <ComoTrabaja />
      <CTAFinal />
    </div>
  );
}

// ==================== HERO ====================
function HeroVideoseguridad() {
  // WhatsApp pre-mensaje específico para Videoseguridad
  const handleWhatsApp = () => {
    const message = `Hola Trendit 👋
Consulta por *SERVICIO: Videoseguridad & Analítica*.

📍 Sitio/ciudad:
🏢 Tipo de operación: (Industria / Retail / Oficina / Depósito / Obra / Público)
🎯 Objetivo: (Perímetro / Control acceso / Conteo / Seguridad / Compliance / Monitoreo)
👁️ Cantidad estimada de cámaras:
🧠 Analítica requerida: (Detección / Intrusión / Conteo / LPR / Facial / Objetos / Búsqueda por metadata)
🖥️ ¿Monitoreo/SOC?: (Sí/No)
🌐 Arquitectura: (Edge / On-prem / Cloud / No sé)
⏱️ Urgencia: (Alta/Media/Baja)

¿Me ayudan con un diagnóstico y propuesta inicial?`;
    window.open(`https://wa.me/5493516714007?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToIndustrias = () => {
    const element = document.getElementById('soluciones-industria');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Cámaras IP & perímetro', id: 'capacidades-clave' },
    { label: 'Analítica IA & búsquedas', id: 'capacidades-clave' },
    { label: 'Monitoreo / SOC', id: 'como-trabaja' },
    { label: 'Arquitecturas (Edge / On-prem / Cloud)', id: 'marcas' },
    { label: 'CTA: Solicitar diagnóstico', id: 'cta-final' }
  ];

  return (
    <section 
      className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 px-6 lg:px-12 overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 80px)',
        background: 'linear-gradient(135deg, #1a1618 0%, #282327 100%)'
      }}
    >
      {/* Subtle gradient overlay */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
        style={{ background: '#E94E1B' }}
      />

      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-[58%_42%] gap-10 lg:gap-16 items-start">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[640px]"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 lg:mb-7"
              style={{
                background: 'rgba(233, 78, 27, 0.1)',
                border: '1px solid rgba(233, 78, 27, 0.2)'
              }}
            >
              <div className="size-2 rounded-full bg-[#E94E1B]" />
              <span 
                className="text-[12px] lg:text-[13px] uppercase tracking-wide text-[#E94E1B]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Servicios · Videoseguridad & Analítica
              </span>
            </div>

            {/* H1 */}
            <h1 
              className="text-[36px] md:text-[46px] lg:text-[52px] leading-[1.1] mb-5 lg:mb-6 text-white"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              Videoseguridad que no solo graba: interpreta
            </h1>

            {/* Subtitle */}
            <p 
              className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] mb-6 text-neutral-300"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Integramos cámaras IP, analítica de video y operación de monitoreo para transformar imágenes en decisiones: menos falsas alarmas, más control y evidencia accionable.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-7 lg:mb-8">
              {[
                'Detección inteligente y alertas relevantes',
                'Búsqueda rápida por eventos y metadata',
                'Arquitecturas escalables: on-premise, edge y/o cloud'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span 
                    className="text-[15px] lg:text-[16px] text-neutral-300"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="#cta-final"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                <span className="text-[14px] lg:text-[15px]">Solicitar diagnóstico rápido</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent text-white rounded-full border-2 border-white/20 hover:border-[#E94E1B] transition-all duration-300"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                <MessageCircle className="size-4" />
                <span className="text-[14px] lg:text-[15px]">Hablar por WhatsApp</span>
              </button>
            </div>

            {/* Microcopy */}
            <p 
              className="text-[13px] text-neutral-400 mb-5"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Te respondemos con próximos pasos y arquitectura sugerida.
            </p>

            {/* Link to industries */}
            <button
              onClick={scrollToIndustrias}
              className="text-[14px] text-neutral-400 hover:text-[#E94E1B] transition-colors underline"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              Ver soluciones por industria →
            </button>
          </motion.div>

          {/* Right Column - Panel Navegación Rápida (estilo Lenovo) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div 
              className="p-6 rounded-2xl backdrop-blur-sm sticky top-28"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <h3 
                className="text-[17px] text-white mb-4"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Navegación rápida
              </h3>
              
              <div className="space-y-2 mb-6">
                {navItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-[14px] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-between group"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {item.label}
                    <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>

              {/* Mini pipeline (Captura → Análisis → Alerta) */}
              <div 
                className="pt-4 mt-4"
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center justify-between px-2">
                  <div className="text-center">
                    <div 
                      className="size-10 rounded-full mx-auto mb-1.5 flex items-center justify-center"
                      style={{
                        background: 'rgba(233, 78, 27, 0.15)',
                        border: '1px solid rgba(233, 78, 27, 0.3)'
                      }}
                    >
                      <Eye className="size-4 text-[#E94E1B]" />
                    </div>
                    <span className="text-[10px] text-neutral-400" style={{ fontFamily: 'Campton', fontWeight: 500 }}>
                      Captura
                    </span>
                  </div>

                  <ArrowRight className="size-4 text-neutral-600" />

                  <div className="text-center">
                    <div 
                      className="size-10 rounded-full mx-auto mb-1.5 flex items-center justify-center"
                      style={{
                        background: 'rgba(233, 78, 27, 0.15)',
                        border: '1px solid rgba(233, 78, 27, 0.3)'
                      }}
                    >
                      <Cpu className="size-4 text-[#E94E1B]" />
                    </div>
                    <span className="text-[10px] text-neutral-400" style={{ fontFamily: 'Campton', fontWeight: 500 }}>
                      Análisis
                    </span>
                  </div>

                  <ArrowRight className="size-4 text-neutral-600" />

                  <div className="text-center">
                    <div 
                      className="size-10 rounded-full mx-auto mb-1.5 flex items-center justify-center"
                      style={{
                        background: 'rgba(233, 78, 27, 0.15)',
                        border: '1px solid rgba(233, 78, 27, 0.3)'
                      }}
                    >
                      <AlertTriangle className="size-4 text-[#E94E1B]" />
                    </div>
                    <span className="text-[10px] text-neutral-400" style={{ fontFamily: 'Campton', fontWeight: 500 }}>
                      Alerta
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ==================== QUÉ CAMBIÓ ====================
function QueCambio() {
  const cards = [
    {
      icon: <Shield className="size-6" />,
      title: 'Menos falsas alarmas',
      text: 'Analítica enfocada en eventos reales.'
    },
    {
      icon: <Search className="size-6" />,
      title: 'Más velocidad operativa',
      text: 'Búsqueda por eventos para auditoría e incidentes.'
    },
    {
      icon: <Server className="size-6" />,
      title: 'Analítica en el borde (edge)',
      text: 'Procesamiento local para optimizar red y retención.'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
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
            La era de "solo grabar" quedó atrás
          </h2>
          <p 
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-600 max-w-[860px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Hoy el valor está en detectar eventos con precisión, reducir ruido operativo y convertir el monitoreo en eficiencia, seguridad y cumplimiento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
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
                className="text-[18px] lg:text-[19px] mb-2 text-[#282327]"
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

// ==================== CAPACIDADES CLAVE ====================
function CapacidadesClave() {
  const [selectedCapacity, setSelectedCapacity] = useState('perimetro');

  const capacidades = [
    { id: 'perimetro', icon: <Shield className="size-5" />, label: 'Perímetro inteligente' },
    { id: 'persona-vehiculo', icon: <Users className="size-5" />, label: 'Persona / vehículo' },
    { id: 'conteo', icon: <TrendingUp className="size-5" />, label: 'Conteo y ocupación' },
    { id: 'lpr', icon: <Car className="size-5" />, label: 'LPR / patentes' },
    { id: 'termico', icon: <Thermometer className="size-5" />, label: 'Térmico / anomalías' },
    { id: 'avanzada', icon: <Cpu className="size-5" />, label: 'Analítica avanzada' }
  ];

  const contenido: { [key: string]: any } = {
    'perimetro': {
      titulo: 'Perímetro inteligente',
      descripcion: 'Detección por zonas, cruces y merodeo para alertas accionables.',
      tags: ['Industria', 'Logística', 'Energía'],
      bullets: ['Diseño de cobertura', 'Reglas y calibración', 'Operación y respuesta']
    },
    'persona-vehiculo': {
      titulo: 'Persona / vehículo',
      descripcion: 'Clasificación de objetivos para reducir falsas alarmas y acelerar respuesta.',
      tags: ['Retail', 'Campus', 'Plantas'],
      bullets: ['Configuración de eventos', 'VMS/NVR', 'Monitoreo y mantenimiento']
    },
    'conteo': {
      titulo: 'Conteo y ocupación',
      descripcion: 'Métricas de flujo y ocupación para operación, seguridad y planificación.',
      tags: ['Retail', 'Educación', 'Servicios'],
      bullets: ['Definición de KPIs', 'Tableros/reportes', 'Optimización continua']
    },
    'lpr': {
      titulo: 'LPR / patentes',
      descripcion: 'Registro de accesos y automatización en ingresos, playas y perímetros.',
      tags: ['Logística', 'Industria', 'Sector público'],
      bullets: ['Cámaras + analítica', 'Integración con accesos', 'Evidencia y auditoría']
    },
    'termico': {
      titulo: 'Térmico / anomalías',
      descripcion: 'Detección de variaciones térmicas o escenarios de riesgo específicos.',
      tags: ['Energía', 'Industria', 'Entornos críticos'],
      bullets: ['Relevamiento de casos', 'Configuración de umbrales', 'Protocolos de acción']
    },
    'avanzada': {
      titulo: 'Analítica avanzada (cuando aplica)',
      descripcion: 'Analítica en servidor o cloud para escenarios de escala o modelos avanzados.',
      tags: ['Ciudades', 'Grandes sitios', 'Operación 24/7'],
      bullets: ['Arquitectura híbrida', 'Cómputo/almacenamiento', 'Integración y soporte']
    }
  };

  const current = contenido[selectedCapacity];

  return (
    <section id="capacidades-clave" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-4 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Capacidades clave (seleccionables)
          </h2>
          <p 
            className="text-[15px] lg:text-[16px] text-neutral-600"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Elegir capacidades primero ayuda a definir cámaras, software, red y almacenamiento después.
          </p>
        </motion.div>

        {/* Chips selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 lg:mb-12">
          {capacidades.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setSelectedCapacity(cap.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ${
                selectedCapacity === cap.id
                  ? 'bg-[#E94E1B] text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '14px'
              }}
            >
              {cap.icon}
              <span>{cap.label}</span>
            </button>
          ))}
        </div>

        {/* Content card */}
        <motion.div
          key={selectedCapacity}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-[900px] mx-auto p-8 lg:p-10 bg-neutral-50 rounded-2xl border border-neutral-200"
        >
          <h3 
            className="text-[24px] lg:text-[28px] mb-4 text-[#282327]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            {current.titulo}
          </h3>
          <p 
            className="text-[16px] lg:text-[17px] text-neutral-600 mb-6 leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            {current.descripcion}
          </p>

          <div className="mb-6">
            <h4 
              className="text-[14px] uppercase tracking-wide text-neutral-500 mb-3"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              Dónde aplica
            </h4>
            <div className="flex flex-wrap gap-2">
              {current.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white rounded-full border border-neutral-200 text-[13px] text-neutral-700"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 500
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 
              className="text-[14px] uppercase tracking-wide text-neutral-500 mb-3"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              Qué integra Trendit
            </h4>
            <ul className="space-y-2.5">
              {current.bullets.map((bullet: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span 
                    className="text-[15px] text-neutral-700 leading-relaxed"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== SOLUCIONES POR INDUSTRIA ====================
function SolucionesPorIndustria() {
  const [selectedIndustry, setSelectedIndustry] = useState('industria');

  const industrias = [
    { id: 'industria', icon: <Factory className="size-5" />, label: 'Industria & Manufactura' },
    { id: 'logistica', icon: <Package className="size-5" />, label: 'Logística & Depósitos' },
    { id: 'retail', icon: <ShoppingCart className="size-5" />, label: 'Retail & Sucursales' },
    { id: 'salud', icon: <Heart className="size-5" />, label: 'Salud' },
    { id: 'educacion', icon: <GraduationCap className="size-5" />, label: 'Educación' },
    { id: 'energia', icon: <Zap className="size-5" />, label: 'Oil & Gas / Energía' },
    { id: 'publico', icon: <Building2 className="size-5" />, label: 'Sector público / Ciudades' }
  ];

  const contenidoIndustria: { [key: string]: any } = {
    'industria': {
      desafio: 'Perímetro, operación continua y auditoría de incidentes.',
      monitorea: ['Accesos y zonas críticas', 'Áreas de proceso y seguridad operativa'],
      analitica: ['Perímetro inteligente', 'Persona/vehículo + búsqueda por eventos'],
      integra: 'Proyecto de punta a punta',
      bullets: ['Red + almacenamiento', 'Puesta a punto y mantenimiento']
    },
    'logistica': {
      desafio: 'Trazabilidad visual y control en accesos y playas de carga.',
      monitorea: ['Ingresos/egresos', 'Muelles y circulación interna'],
      analitica: ['LPR / patentes', 'Zonas + eventos accionables'],
      integra: 'Integración para operación',
      bullets: ['Segmentación de red PoE', 'Retención y auditoría']
    },
    'retail': {
      desafio: 'Prevención de pérdidas y control operativo multipunto.',
      monitorea: ['Cajas/tesorería', 'Salas y accesos'],
      analitica: ['Conteo/ocupación', 'Eventos + revisión rápida'],
      integra: 'Estándares por sucursal',
      bullets: ['Plantillas de instalación', 'Soporte y monitoreo']
    },
    'salud': {
      desafio: 'Zonas sensibles, accesos y respuesta coordinada.',
      monitorea: ['Ingresos', 'Áreas críticas y circulación'],
      analitica: ['Perímetro y eventos', 'Búsqueda por incidentes'],
      integra: 'Diseño por áreas',
      bullets: ['Políticas y operación', 'Mantenimiento']
    },
    'educacion': {
      desafio: 'Perímetros amplios y escenarios cambiantes en campus.',
      monitorea: ['Entradas y patios', 'Pasillos y áreas comunes'],
      analitica: ['Perímetro inteligente', 'Persona/vehículo'],
      integra: 'Cobertura y estandarización',
      bullets: ['Optimización de red', 'Soporte y evolución']
    },
    'energia': {
      desafio: 'Sitios remotos, condiciones adversas y operación 24/7.',
      monitorea: ['Perímetro', 'Zonas de riesgo'],
      analitica: ['Perímetro + eventos', 'Térmico/anomalías (según caso)'],
      integra: 'Arquitectura robusta',
      bullets: ['Red/energía/retención', 'Mantenimiento planificado']
    },
    'publico': {
      desafio: 'Escala, centros de monitoreo y evidencia.',
      monitorea: ['Puntos críticos', 'Flujos y accesos'],
      analitica: ['Clasificación de objetivos', 'Operación por eventos'],
      integra: 'Integración con operación',
      bullets: ['Estandarización', 'Soporte y mejora continua']
    }
  };

  const current = contenidoIndustria[selectedIndustry];

  return (
    <section id="soluciones-industria" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-4 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Soluciones por industria
          </h2>
          <p 
            className="text-[15px] lg:text-[16px] text-neutral-600"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Casos típicos, desafíos y arquitectura recomendada.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Menu lateral (desktop) / Tabs horizontal (mobile) */}
          <div className="lg:block hidden">
            <div className="sticky top-24 space-y-2">
              {industrias.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 text-left ${
                    selectedIndustry === ind.id
                      ? 'bg-[#E94E1B] text-white shadow-md'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  {ind.icon}
                  <span>{ind.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile tabs */}
          <div className="lg:hidden mb-6 overflow-x-auto -mx-6 px-6">
            <div className="flex gap-3 pb-2" style={{ minWidth: 'max-content' }}>
              {industrias.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedIndustry === ind.id
                      ? 'bg-[#E94E1B] text-white shadow-md'
                      : 'bg-white text-neutral-700'
                  }`}
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  {ind.icon}
                  <span>{ind.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content card */}
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 lg:p-10 bg-white rounded-2xl border border-neutral-200"
          >
            <div className="mb-6">
              <h4 
                className="text-[14px] uppercase tracking-wide text-[#E94E1B] mb-2"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Desafío
              </h4>
              <p 
                className="text-[16px] text-neutral-700 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {current.desafio}
              </p>
            </div>

            <div className="mb-6">
              <h4 
                className="text-[14px] uppercase tracking-wide text-[#E94E1B] mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Qué se monitorea
              </h4>
              <ul className="space-y-2">
                {current.monitorea.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                    <span 
                      className="text-[15px] text-neutral-700 leading-relaxed"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 
                className="text-[14px] uppercase tracking-wide text-[#E94E1B] mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Analítica útil
              </h4>
              <ul className="space-y-2">
                {current.analitica.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                    <span 
                      className="text-[15px] text-neutral-700 leading-relaxed"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 
                className="text-[14px] uppercase tracking-wide text-[#E94E1B] mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Trendit integra
              </h4>
              <p 
                className="text-[15px] text-neutral-700 mb-3 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                {current.integra}
              </p>
              <ul className="space-y-2">
                {current.bullets.map((bullet: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-1" />
                    <span 
                      className="text-[14px] text-neutral-600 leading-relaxed"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== MARCAS ====================
function Marcas() {
  const [selectedBrand, setSelectedBrand] = useState('axis');

  const marcas = [
    { id: 'axis', label: 'Axis' },
    { id: 'hikvision', label: 'Hikvision' },
    { id: 'dahua', label: 'Dahua' },
    { id: 'ubiquiti', label: 'Ubiquiti' }
  ];

  const contenidoMarca: { [key: string]: any } = {
    'axis': {
      ideal: 'Operaciones que priorizan calidad, analítica en borde y estabilidad.',
      fortalezas: ['Analítica edge', 'Ecosistema profesional', 'Integración flexible'],
      escenarios: ['Industria', 'Campus', 'Sitios críticos'],
      trendit: 'Diseño, integración, puesta a punto y soporte.'
    },
    'hikvision': {
      ideal: 'Proyectos de escala con foco en deep learning y reducción de falsas alarmas.',
      fortalezas: ['Clasificación de objetivos', 'Portafolio amplio', 'Analítica por escenarios'],
      escenarios: ['Logística', 'Retail', 'Perímetros'],
      trendit: 'Arquitectura, reglas, operación y mantenimiento.'
    },
    'dahua': {
      ideal: 'Escenarios AIoT y verticales, incluyendo opciones térmicas según el caso.',
      fortalezas: ['Líneas AI', 'Opciones térmicas', 'Soluciones por proyecto'],
      escenarios: ['Energía', 'Industria', 'Sitios extensos'],
      trendit: 'Implementación end-to-end y mantenimiento planificado.'
    },
    'ubiquiti': {
      ideal: 'Stack unificado y administración simple en entornos determinados.',
      fortalezas: ['Interfaz unificada', 'Funciones AI', 'Ecosistema integrado'],
      escenarios: ['Sucursales', 'Proyectos compactos', 'Operación centralizada'],
      trendit: 'Diseño, instalación y administración alineada al caso.'
    }
  };

  const current = contenidoMarca[selectedBrand];

  return (
    <section id="marcas" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
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
            Marcas líderes, seleccionadas por criterio técnico
          </h2>
          <p 
            className="text-[16px] md:text-[17px] text-neutral-600 max-w-[860px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La marca adecuada depende del escenario, la criticidad, el entorno, la analítica requerida, la integración y el costo total de operación.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {marcas.map((marca) => (
            <button
              key={marca.id}
              onClick={() => setSelectedBrand(marca.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedBrand === marca.id
                  ? 'bg-[#E94E1B] text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              {marca.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <motion.div
          key={selectedBrand}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 lg:p-10 bg-neutral-50 rounded-2xl border border-neutral-200"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 
                className="text-[14px] uppercase tracking-wide text-[#E94E1B] mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Ideal para
              </h4>
              <p 
                className="text-[16px] text-neutral-700 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {current.ideal}
              </p>
            </div>

            <div>
              <h4 
                className="text-[14px] uppercase tracking-wide text-[#E94E1B] mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Fortalezas
              </h4>
              <ul className="space-y-2">
                {current.fortalezas.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-1" />
                    <span 
                      className="text-[15px] text-neutral-700 leading-relaxed"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 
                className="text-[14px] uppercase tracking-wide text-[#E94E1B] mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Escenarios típicos
              </h4>
              <div className="flex flex-wrap gap-2">
                {current.escenarios.map((esc: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white rounded-full border border-neutral-200 text-[13px] text-neutral-700"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {esc}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 
                className="text-[14px] uppercase tracking-wide text-[#E94E1B] mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Cómo integra Trendit
              </h4>
              <p 
                className="text-[15px] text-neutral-700 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {current.trendit}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== CÓMO TRABAJA ====================
function ComoTrabaja() {
  const pasos = [
    'Relevamiento y objetivos (sitio, operación, riesgos)',
    'Diseño de arquitectura (cobertura, iluminación, red PoE)',
    'Dimensionamiento de retención y almacenamiento',
    'Implementación y puesta en marcha',
    'Calibración de analítica y reglas operativas',
    'Capacitación de operación y escalamiento',
    'Mantenimiento preventivo/correctivo + mejora continua'
  ];

  return (
    <section id="como-trabaja" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-12 lg:mb-16 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Método, obra e integración (de punta a punta)
        </motion.h2>

        <div className="space-y-4">
          {pasos.map((paso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-5 lg:p-6 bg-white rounded-xl border border-neutral-200"
            >
              <div 
                className="size-10 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                <span 
                  className="text-[16px]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 700
                  }}
                >
                  {idx + 1}
                </span>
              </div>
              <p 
                className="text-[15px] lg:text-[16px] text-neutral-700 leading-relaxed pt-1.5"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {paso}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CTA FINAL ====================
function CTAFinal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = `Hola Trendit 👋
Consulta por *SERVICIO: Videoseguridad & Analítica*.

📍 Sitio/ciudad:
🏢 Tipo de operación: (Industria / Retail / Oficina / Depósito / Obra / Público)
🎯 Objetivo: (Perímetro / Control acceso / Conteo / Seguridad / Compliance / Monitoreo)
👁️ Cantidad estimada de cámaras:
🧠 Analítica requerida: (Detección / Intrusión / Conteo / LPR / Facial / Objetos / Búsqueda por metadata)
🖥️ ¿Monitoreo/SOC?: (Sí/No)
🌐 Arquitectura: (Edge / On-prem / Cloud / No sé)
⏱️ Urgencia: (Alta/Media/Baja)

¿Me ayudan con un diagnóstico y propuesta inicial?`;
    window.open(`https://wa.me/5493516714007?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="cta-final" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-10 bg-white rounded-2xl border border-neutral-200 text-center"
          style={{
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
          }}
        >
          <h2 
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            ¿Necesitás un diagnóstico o un proyecto nuevo?
          </h2>
          <p 
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-600 mb-10 leading-relaxed max-w-[760px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            En una primera reunión definimos cobertura, retención y el nivel de analítica necesario. Te proponemos arquitectura y próximos pasos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              Iniciar consulta guiada
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-50 text-[#282327] rounded-full border-2 border-neutral-200 hover:border-[#E94E1B] transition-all duration-300 hover:bg-white"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </button>
          </div>

          <p 
            className="text-[13px] text-neutral-500"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Respondemos con próximos pasos y arquitectura sugerida.
          </p>
        </motion.div>
      </div>

      <ConsultaGuiadaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
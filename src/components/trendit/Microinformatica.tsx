import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, 
  Monitor, 
  Cpu, 
  Keyboard, 
  Zap,
  Printer,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check,
  Shield,
  Clock,
  TrendingDown,
  Users,
  Briefcase,
  MessageCircle
} from 'lucide-react';

export function Microinformatica() {
  return (
    <div className="bg-white">
      <HeroMicroinformatica />
      <QueResuelve />
      <ComoTrabajamos />
      <ConfiguracionesPorRol />
      <VisionTCO />
      <TablaComparativa />
      <Garantias />
      <MarcasLineas />
      <ImpresionCaptura />
      <CTAWizard />
    </div>
  );
}

// ==================== HERO ====================
function HeroMicroinformatica() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const categorias = [
    {
      id: 'notebooks',
      icon: <Laptop className="size-5" />,
      label: 'Notebooks corporativas',
      descripcion: 'Movilidad, seguridad y videollamadas sin fricción.'
    },
    {
      id: 'pc-mini',
      icon: <Cpu className="size-5" />,
      label: 'PC escritorio & Mini PC',
      descripcion: 'Estandarización, rendimiento estable y bajo costo operativo.'
    },
    {
      id: 'aio',
      icon: <Monitor className="size-5" />,
      label: 'All-in-One (AIO)',
      descripcion: 'Puestos limpios, simples de gestionar y con buena integración.'
    },
    {
      id: 'workstations',
      icon: <Cpu className="size-5" />,
      label: 'Workstations',
      descripcion: 'CAD, data, diseño, ingeniería y cargas intensivas.'
    },
    {
      id: 'monitores',
      icon: <Monitor className="size-5" />,
      label: 'Monitores & Docking',
      descripcion: 'Ergonomía, productividad y setups de múltiples pantallas.'
    },
    {
      id: 'perifericos',
      icon: <Keyboard className="size-5" />,
      label: 'Periféricos & ergonomía',
      descripcion: 'Teclados, mouse, headsets y confort para jornadas largas.'
    },
    {
      id: 'captura',
      icon: <Printer className="size-5" />,
      label: 'Impresión & captura de datos',
      descripcion: 'Impresión térmica, lectores 1D/2D y movilidad.'
    },
    {
      id: 'energia',
      icon: <Zap className="size-5" />,
      label: 'Accesorios & energía',
      descripcion: 'Cargadores, estaciones, continuidad del puesto.'
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
    window.open('https://wa.me/5493516714007?text=Hola%2C%20necesito%20asesoría%20en%20microinformática', '_blank');
  };

  return (
    <section 
      className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 px-6 lg:px-12 overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 80px)',
        background: 'linear-gradient(135deg, #1a1618 0%, #282327 100%)'
      }}
    >
      {/* Subtle orange glow */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
        style={{ background: '#E94E1B' }}
      />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[58%_42%] gap-10 lg:gap-16 items-center">
          
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
                Microinformática & Puestos de trabajo
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
              Equipos corporativos diseñados para cómo trabaja tu organización
            </h1>

            {/* Subtitle */}
            <p 
              className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] mb-6 text-neutral-300"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Definimos notebooks, PCs, workstations y periféricos por perfil de usuario, con foco en TCO, garantía y continuidad operativa.
            </p>

            {/* Microcopy */}
            <p 
              className="text-[14px] lg:text-[15px] mb-7 lg:mb-8 text-neutral-400"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              Selecciona lo que necesitas y construimos un estándar por rol.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="#wizard"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('wizard');
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                <span className="text-[14px] lg:text-[15px]">Solicitar asesoría</span>
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
                ¿Qué necesitas?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categorias.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(cat.id)}
                    className={`group relative p-4 rounded-xl transition-all duration-300 text-left ${
                      activeButton === cat.id ? 'ring-2 ring-[#E94E1B]' : ''
                    }`}
                    style={{
                      background: activeButton === cat.id 
                        ? 'rgba(233, 78, 27, 0.1)' 
                        : 'rgba(255, 255, 255, 0.05)',
                      border: activeButton === cat.id 
                        ? '1px solid rgba(233, 78, 27, 0.3)' 
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: activeButton === cat.id 
                        ? '0 0 20px rgba(233, 78, 27, 0.2)' 
                        : 'none'
                    }}
                  >
                    <div 
                      className={`size-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                        activeButton === cat.id ? 'bg-[#E94E1B] text-white' : 'bg-white/10 text-neutral-300 group-hover:bg-white/15'
                      }`}
                    >
                      {cat.icon}
                    </div>
                    <h4 
                      className={`text-[13px] lg:text-[14px] mb-1 leading-tight ${
                        activeButton === cat.id ? 'text-white' : 'text-neutral-200'
                      }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {cat.label}
                    </h4>
                    <p 
                      className={`text-[11px] lg:text-[12px] leading-snug hidden lg:block ${
                        activeButton === cat.id ? 'text-neutral-300' : 'text-neutral-400'
                      }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {cat.descripcion}
                    </p>
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

// ==================== QUÉ RESUELVE ====================
function QueResuelve() {
  const cards = [
    {
      icon: <CheckCircle2 className="size-6" />,
      title: 'Estandarización por rol',
      text: 'Definimos configuraciones óptimas según el perfil de cada usuario.'
    },
    {
      icon: <Shield className="size-6" />,
      title: 'Menos incidentes',
      text: 'Equipos corporativos confiables reducen fallas y tiempo de soporte.'
    },
    {
      icon: <Clock className="size-6" />,
      title: 'Renovación planificada',
      text: 'Proyectamos el ciclo de vida del parque sin urgencias operativas.'
    },
    {
      icon: <TrendingDown className="size-6" />,
      title: 'Visión TCO',
      text: 'Calculamos el costo total de propiedad más allá del precio de compra.'
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
            Microinformática no es comprar equipos. Es diseñar puestos de trabajo.
          </h2>
          <p 
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-600 max-w-[860px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La tecnología que usa tu equipo todos los días puede acelerar la operación o frenarla. Cuando el parque está bien dimensionado y estandarizado, reduces incidentes, mejoras productividad y planificas la renovación sin urgencias.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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

// ==================== CÓMO TRABAJAMOS ====================
function ComoTrabajamos() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico del parque actual',
      text: 'Relevamos equipos, antigüedad, incidencias y perfiles de uso reales.'
    },
    {
      number: '02',
      title: 'Perfilado por roles',
      text: 'Definimos configuraciones según carga de trabajo, movilidad y criticidad.'
    },
    {
      number: '03',
      title: 'Estandarización + alternativas',
      text: 'Proponemos equipos primarios y alternativas, con análisis TCO por escenario.'
    },
    {
      number: '04',
      title: 'Implementación + continuidad',
      text: 'Instalamos, configuramos y acompañamos la gestión del ciclo de vida.'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
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
          Así trabajamos tu parque de microinformática
        </motion.h2>

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
                  className="text-[18px] lg:text-[19px] mb-3 text-[#282327] text-center"
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

// ==================== CONFIGURACIONES POR ROL ====================
function ConfiguracionesPorRol() {
  const roles = [
    {
      icon: <Briefcase className="size-6" />,
      title: 'Dirección & C-Level',
      bullets: ['Notebooks premium, ultraportables', 'Videoconferencia HD integrada', 'Seguridad reforzada y gestión remota']
    },
    {
      icon: <Users className="size-6" />,
      title: 'Administración & Backoffice',
      bullets: ['PCs o AIOs estandarizados', 'Monitores ergonómicos duales', 'Enfoque en confiabilidad y soporte']
    },
    {
      icon: <Laptop className="size-6" />,
      title: 'Ventas & equipos móviles',
      bullets: ['Notebooks livianas con autonomía', 'LTE/5G integrado (según modelo)', 'Respaldo cloud y seguridad en tránsito']
    },
    {
      icon: <Cpu className="size-6" />,
      title: 'Ingeniería, data & diseño',
      bullets: ['Workstations o notebooks de alto rendimiento', 'RAM y GPU dimensionadas', 'Garantía extendida y soporte prioritario']
    },
    {
      icon: <Shield className="size-6" />,
      title: 'Operación, logística & campo',
      bullets: ['Equipos ruguerizados o semi-ruguerizados', 'Tablets industriales o notebooks reforzadas', 'Integración con lectores y periféricos móviles']
    }
  ];

  return (
    <section id="notebooks" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-12 lg:mb-14 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Configuraciones por rol
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {roles.map((role, idx) => (
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
                {role.icon}
              </div>
              <h3 
                className="text-[18px] lg:text-[19px] mb-4 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {role.title}
              </h3>
              <ul className="space-y-2.5">
                {role.bullets.map((bullet, bIdx) => (
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
      </div>
    </section>
  );
}

// ==================== VISIÓN TCO ====================
function VisionTCO() {
  const items = [
    'Horas improductivas por fallas o lentitud.',
    'Equipos fuera de garantía o con soporte inadecuado.',
    'Tiempo de IT resolviendo incidencias repetitivas.',
    'Renovaciones urgentes por obsolescencia no planificada.',
    'Pérdida de rendimiento en roles críticos.'
  ];

  return (
    <section id="pc-mini" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-8 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Reducimos costos ocultos con visión TCO
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-50 rounded-2xl p-8 lg:p-10 border border-neutral-200 mb-8"
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
                <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="p-6 lg:p-8 rounded-2xl text-center"
          style={{
            background: 'rgba(233, 78, 27, 0.05)',
            border: '1px solid rgba(233, 78, 27, 0.2)'
          }}
        >
          <p 
            className="text-[16px] lg:text-[18px] text-[#282327]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600
            }}
          >
            Estandarizar por rol suele costar menos que resolver incidencias todos los meses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== TABLA COMPARATIVA ====================
function TablaComparativa() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const data = [
    {
      id: 'durabilidad',
      label: 'Durabilidad',
      consumo: 'Limitada, orientada a 2-3 años',
      corporativo: 'Alta, diseño para 4-5 años o más',
      entusiasta: 'Variable, según componentes'
    },
    {
      id: 'gestion',
      label: 'Gestión',
      consumo: 'Mínima o nula',
      corporativo: 'Remota, escalable, integrada',
      entusiasta: 'Manual por usuario'
    },
    {
      id: 'soporte',
      label: 'Soporte',
      consumo: 'Garantía básica de retail',
      corporativo: 'On-site, NBD, extensiones',
      entusiasta: 'Por componente'
    },
    {
      id: 'ciclo',
      label: 'Ciclo de vida',
      consumo: 'Corto, sin planificación',
      corporativo: 'Largo, con proyección TCO',
      entusiasta: 'Flexible, alto rendimiento puntual'
    },
    {
      id: 'mejor',
      label: 'Mejor para',
      consumo: 'Uso personal, bajo volumen',
      corporativo: 'Organizaciones, estandarización',
      entusiasta: 'Profesionales independientes, gaming'
    }
  ];

  return (
    <section id="aio" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-10 lg:mb-12 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          ¿Consumo, corporativo o entusiasta? Depende del uso.
        </motion.h2>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-md">
            <thead>
              <tr style={{ background: '#282327' }}>
                <th className="text-left p-5 text-white text-[15px]" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                  Característica
                </th>
                <th className="text-left p-5 text-white text-[15px]" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                  Consumo
                </th>
                <th className="text-left p-5 text-white text-[15px]" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                  Corporativo
                </th>
                <th className="text-left p-5 text-white text-[15px]" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                  Entusiasta (alto rendimiento)
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={row.id} className={idx % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                  <td className="p-5 text-[14px] text-[#282327]" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                    {row.label}
                  </td>
                  <td className="p-5 text-[14px] text-neutral-600" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {row.consumo}
                  </td>
                  <td className="p-5 text-[14px] text-neutral-600" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {row.corporativo}
                  </td>
                  <td className="p-5 text-[14px] text-neutral-600" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {row.entusiasta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-3">
          {data.map((row) => (
            <div key={row.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setExpandedRow(expandedRow === row.id ? null : row.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span 
                  className="text-[15px] text-[#282327]"
                  style={{ fontFamily: 'Campton', fontWeight: 600 }}
                >
                  {row.label}
                </span>
                {expandedRow === row.id ? (
                  <ChevronUp className="size-5 text-[#E94E1B]" />
                ) : (
                  <ChevronDown className="size-5 text-neutral-400" />
                )}
              </button>
              
              {expandedRow === row.id && (
                <div className="px-5 pb-5 space-y-3 border-t border-neutral-100 pt-4">
                  <div>
                    <div className="text-[12px] uppercase tracking-wide text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                      Consumo
                    </div>
                    <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                      {row.consumo}
                    </div>
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-wide text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                      Corporativo
                    </div>
                    <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                      {row.corporativo}
                    </div>
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-wide text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                      Entusiasta
                    </div>
                    <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                      {row.entusiasta}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== GARANTÍAS ====================
function Garantias() {
  const garantias = [
    {
      icon: <Shield className="size-6" />,
      title: '3 años con opción on-site',
      subtitle: '(según modelo)'
    },
    {
      icon: <CheckCircle2 className="size-6" />,
      title: 'Cobertura por daños accidentales (ADP)',
      subtitle: 'cuando aplica'
    },
    {
      icon: <Clock className="size-6" />,
      title: 'Extensiones, NBD y packs',
      subtitle: 'para puestos críticos'
    },
    {
      icon: <Users className="size-6" />,
      title: 'Gestión centralizada',
      subtitle: 'de garantías y RMA'
    }
  ];

  return (
    <section id="workstations" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-10 lg:mb-12 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Garantía y servicios: la diferencia entre 'funciona' y 'continúa funcionando'
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-8">
          {garantias.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 lg:p-7 bg-neutral-50 rounded-2xl border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="size-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                {item.icon}
              </div>
              <h3 
                className="text-[16px] lg:text-[17px] mb-1 text-[#282327] leading-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {item.title}
              </h3>
              <p 
                className="text-[13px] lg:text-[14px] text-neutral-500"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p 
            className="text-[13px] text-neutral-500"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La cobertura depende del modelo, línea y disponibilidad del fabricante.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== MARCAS Y LÍNEAS ====================
function MarcasLineas() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['Lenovo']);
  const [showOtrosInput, setShowOtrosInput] = useState(false);

  const brands = ['Lenovo', 'Dell', 'HP', 'ASUS', 'Acer', 'Microsoft', 'Apple', 'Samsung', 'Otros'];

  const brandInfo: { [key: string]: { recomendado: string; fortalezas: string[]; lineas: string[] } } = {
    'Lenovo': {
      recomendado: 'Empresas de todos los tamaños, especialmente corporativos',
      fortalezas: ['Durabilidad probada', 'Excelente soporte empresarial', 'Amplia gama de workstations'],
      lineas: ['ThinkPad (notebooks)', 'ThinkCentre (desktops)', 'ThinkStation (workstations)']
    },
    'Dell': {
      recomendado: 'Corporativos con foco en gestión remota',
      fortalezas: ['Opciones de configuración flexibles', 'Soporte NBD y ProSupport', 'Línea Precision para ingeniería'],
      lineas: ['Latitude (notebooks)', 'OptiPlex (desktops)', 'Precision (workstations)']
    },
    'HP': {
      recomendado: 'Empresas establecidas con parques grandes',
      fortalezas: ['Amplia disponibilidad', 'Gestión con HP Wolf Security', 'Diseño ergonómico'],
      lineas: ['EliteBook (notebooks)', 'EliteDesk (desktops)', 'Z by HP (workstations)']
    },
    'ASUS': {
      recomendado: 'Pymes y roles técnicos/creativos',
      fortalezas: ['Relación precio/rendimiento', 'Innovación en displays', 'Línea ProArt para diseño'],
      lineas: ['ExpertBook (notebooks)', 'ProArt (workstations)', 'Mini PC corporativos']
    }
  };

  const toggleBrand = (brand: string) => {
    if (brand === 'Otros') {
      setShowOtrosInput(!showOtrosInput);
      if (selectedBrands.includes('Otros')) {
        setSelectedBrands(selectedBrands.filter(b => b !== 'Otros'));
      } else {
        setSelectedBrands([...selectedBrands, 'Otros']);
      }
    } else {
      if (selectedBrands.includes(brand)) {
        setSelectedBrands(selectedBrands.filter(b => b !== brand));
      } else {
        setSelectedBrands([...selectedBrands, brand]);
      }
    }
  };

  const currentBrandInfo = brandInfo[selectedBrands.find(b => b !== 'Otros') || 'Lenovo'];

  return (
    <section id="monitores" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-10 lg:mb-12 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Marcas y líneas corporativas con las que trabajamos
        </motion.h2>

        {/* Chips */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => toggleBrand(brand)}
              className={`px-5 py-3 rounded-full transition-all duration-300 ${
                selectedBrands.includes(brand)
                  ? 'bg-[#E94E1B] text-white shadow-lg'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#E94E1B]'
              }`}
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '14px'
              }}
            >
              {brand}
            </button>
          ))}
        </div>

        {showOtrosInput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="max-w-md mx-auto mb-10"
          >
            <input
              type="text"
              placeholder="Especificar marca..."
              className="w-full px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: '14px'
              }}
            />
          </motion.div>
        )}

        {/* Info Panel */}
        {currentBrandInfo && (
          <motion.div
            key={selectedBrands[0]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 lg:p-10 border border-neutral-200 shadow-md"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 
                  className="text-[16px] mb-3 text-[#E94E1B] uppercase tracking-wide"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Recomendado para
                </h3>
                <p 
                  className="text-[15px] text-neutral-700 leading-relaxed"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {currentBrandInfo.recomendado}
                </p>
              </div>

              <div>
                <h3 
                  className="text-[16px] mb-3 text-[#E94E1B] uppercase tracking-wide"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Fortalezas
                </h3>
                <ul className="space-y-2">
                  {currentBrandInfo.fortalezas.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="size-4 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                      <span 
                        className="text-[14px] text-neutral-700"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 400
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 
                  className="text-[16px] mb-3 text-[#E94E1B] uppercase tracking-wide"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Líneas sugeridas
                </h3>
                <ul className="space-y-2">
                  {currentBrandInfo.lineas.map((l, idx) => (
                    <li 
                      key={idx}
                      className="text-[14px] text-neutral-700"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      • {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ==================== IMPRESIÓN & CAPTURA ====================
function ImpresionCaptura() {
  const features = [
    'Impresoras térmicas para etiquetas, logística y puntos de despacho.',
    'Lectores 1D/2D para inventario, trazabilidad y control.',
    'Integración con procesos y operación (según proyecto).'
  ];

  return (
    <section id="captura" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-6 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Impresión y captura de datos para operación y logística
          </h2>
          <p 
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-600 leading-relaxed max-w-[860px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            En entornos operativos, la microinformática también incluye impresión térmica, lectores 1D/2D y dispositivos móviles que conectan la operación con tus sistemas y aceleran el flujo de trabajo.
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
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <Printer className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                <span 
                  className="text-[15px] lg:text-[16px] text-neutral-700 leading-relaxed"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== CTA WIZARD ====================
function CTAWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    necesidades: [] as { categoria: string; cantidad: string; prioridad: string }[],
    marcas: [] as string[],
    otraMarca: '',
    razonSocial: '',
    cuit: '',
    nombreApellido: '',
    email: '',
    telefono: '',
    provincia: '',
    cargo: '',
    direccion: '',
    comentarios: '',
    aceptacion: false
  });

  const categorias = [
    'Notebooks corporativas',
    'PC escritorio & Mini PC',
    'All-in-One (AIO)',
    'Workstations',
    'Monitores & Docking',
    'Periféricos & ergonomía',
    'Impresión & captura de datos',
    'Accesorios & energía'
  ];

  const marcas = ['Lenovo', 'Dell', 'HP', 'ASUS', 'Acer', 'Microsoft', 'Apple', 'Samsung', 'Otros'];

  const nextStep = () => {
    if (step === 1 && formData.necesidades.length === 0) {
      alert('Selecciona al menos una necesidad');
      return;
    }
    if (step === 2 && formData.marcas.length === 0) {
      alert('Selecciona al menos una marca');
      return;
    }
    if (step === 3) {
      if (!formData.razonSocial || !formData.cuit || !formData.nombreApellido || !formData.email || !formData.telefono || !formData.provincia) {
        alert('Completa todos los campos obligatorios');
        return;
      }
      if (!formData.aceptacion) {
        alert('Debes aceptar los términos y condiciones');
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const addNecesidad = (categoria: string) => {
    if (!formData.necesidades.find(n => n.categoria === categoria)) {
      setFormData({
        ...formData,
        necesidades: [...formData.necesidades, { categoria, cantidad: '', prioridad: '' }]
      });
    } else {
      setFormData({
        ...formData,
        necesidades: formData.necesidades.filter(n => n.categoria !== categoria)
      });
    }
  };

  const toggleMarca = (marca: string) => {
    if (formData.marcas.includes(marca)) {
      setFormData({ ...formData, marcas: formData.marcas.filter(m => m !== marca) });
    } else {
      setFormData({ ...formData, marcas: [...formData.marcas, marca] });
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('¡Solicitud enviada! Un especialista de Trendit se pondrá en contacto en menos de 24 h hábiles.');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%2C%20necesito%20información%20sobre%20microinformática', '_blank');
  };

  return (
    <section id="wizard" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[900px] mx-auto">
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
            Cuéntanos qué necesitas y diseñamos tu estándar
          </h2>
          <p 
            className="text-[16px] md:text-[17px] text-neutral-600 leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Selecciona categorías, define cantidades estimadas y marcas de interés. Te respondemos con una propuesta por etapas.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div 
                  className={`size-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step >= s ? 'bg-[#E94E1B] text-white' : 'bg-neutral-200 text-neutral-500'
                  }`}
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div 
                    className={`flex-1 h-1 mx-2 rounded ${
                      step > s ? 'bg-[#E94E1B]' : 'bg-neutral-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[13px] text-neutral-600" style={{ fontFamily: 'Campton', fontWeight: 500 }}>
            <span>Necesidad</span>
            <span>Marcas</span>
            <span>Contacto</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-neutral-200 shadow-md mb-8">
          {step === 1 && (
            <div>
              <h3 
                className="text-[22px] mb-6 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Selecciona tu necesidad
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => addNecesidad(cat)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 ${
                      formData.necesidades.find(n => n.categoria === cat)
                        ? 'bg-[#E94E1B] text-white shadow-lg'
                        : 'bg-neutral-50 text-neutral-700 border border-neutral-200 hover:border-[#E94E1B]'
                    }`}
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500,
                      fontSize: '14px'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 
                className="text-[22px] mb-2 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Marcas de interés
              </h3>
              <p className="text-[14px] text-neutral-600 mb-6" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                Selecciona al menos 1 marca
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {marcas.map((marca) => (
                  <button
                    key={marca}
                    onClick={() => toggleMarca(marca)}
                    className={`px-5 py-3 rounded-full transition-all duration-300 ${
                      formData.marcas.includes(marca)
                        ? 'bg-[#E94E1B] text-white shadow-lg'
                        : 'bg-neutral-50 text-neutral-700 border border-neutral-200 hover:border-[#E94E1B]'
                    }`}
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '14px'
                    }}
                  >
                    {marca}
                  </button>
                ))}
              </div>
              {formData.marcas.includes('Otros') && (
                <input
                  type="text"
                  placeholder="Especificar marca..."
                  value={formData.otraMarca}
                  onChange={(e) => setFormData({ ...formData, otraMarca: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: '14px'
                  }}
                />
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 
                className="text-[22px] mb-6 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Datos de contacto
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Razón social *"
                  value={formData.razonSocial}
                  onChange={(e) => setFormData({ ...formData, razonSocial: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="text"
                  placeholder="CUIT *"
                  value={formData.cuit}
                  onChange={(e) => setFormData({ ...formData, cuit: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="text"
                  placeholder="Nombre y apellido *"
                  value={formData.nombreApellido}
                  onChange={(e) => setFormData({ ...formData, nombreApellido: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="tel"
                  placeholder="Teléfono *"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="text"
                  placeholder="Provincia/Ciudad *"
                  value={formData.provincia}
                  onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="text"
                  placeholder="Cargo (opcional)"
                  value={formData.cargo}
                  onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="text"
                  placeholder="Dirección (opcional)"
                  value={formData.direccion}
                  onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
              </div>
              <textarea
                placeholder="Comentarios (opcional)"
                value={formData.comentarios}
                onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                rows={4}
                className="w-full mt-4 px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all resize-none"
                style={{ fontFamily: 'Campton', fontSize: '14px' }}
              />
              
              <div className="flex items-start gap-3 mt-6">
                <input
                  type="checkbox"
                  id="aceptacion"
                  checked={formData.aceptacion}
                  onChange={(e) => setFormData({ ...formData, aceptacion: e.target.checked })}
                  className="mt-1"
                />
                <label htmlFor="aceptacion" className="text-[13px] text-neutral-600" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                  Acepto los términos y condiciones y autorizo el contacto comercial
                </label>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="text-center mb-8">
                <div className="size-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="size-10 text-green-600" />
                </div>
                <h3 
                  className="text-[24px] mb-3 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 700
                  }}
                >
                  ¡Solicitud lista para enviar!
                </h3>
                <p 
                  className="text-[15px] text-neutral-600"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Revisa tu información antes de enviar
                </p>
              </div>

              <div className="space-y-4 bg-neutral-50 rounded-xl p-6">
                <div>
                  <div className="text-[13px] text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                    Necesidades seleccionadas:
                  </div>
                  <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {formData.necesidades.map(n => n.categoria).join(', ')}
                  </div>
                </div>
                <div>
                  <div className="text-[13px] text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                    Marcas:
                  </div>
                  <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {formData.marcas.join(', ')} {formData.otraMarca && `(${formData.otraMarca})`}
                  </div>
                </div>
                <div>
                  <div className="text-[13px] text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                    Contacto:
                  </div>
                  <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {formData.nombreApellido} - {formData.email} - {formData.telefono}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={handleSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  <span className="text-[15px]">Enviar solicitud</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent text-[#282327] rounded-full border-2 border-neutral-300 hover:border-[#E94E1B] transition-all duration-300"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  <MessageCircle className="size-4" />
                  <span className="text-[15px]">Hablar por WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-[13px] text-neutral-500 mt-6" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                Un especialista de Trendit se pondrá en contacto en menos de 24 h hábiles.
              </p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="flex gap-4">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-7 py-4 bg-transparent text-neutral-700 rounded-full border-2 border-neutral-300 hover:border-neutral-400 transition-all duration-300"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                Volver
              </button>
            )}
            <button
              onClick={nextStep}
              className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <span>Siguiente</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

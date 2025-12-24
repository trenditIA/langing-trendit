import { motion, useScroll, useTransform } from 'motion/react';
import {
  DollarSign,
  TrendingUp,
  Handshake,
  Clock,
  FileText,
  Wallet,
  Users,
  Network,
  Server,
  Monitor,
  Camera,
  Video,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building2,
  CreditCard,
  BadgePercent,
  Award,
  Zap
} from 'lucide-react';
import { useState, useRef } from 'react';
import { WizardFinanciacion } from './WizardFinanciacion';

export function Financiacion() {
  const [activeSection, setActiveSection] = useState('beneficios');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset para que el título no quede tapado
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'leasing', label: 'Leasing' },
    { id: 'financiacion-directa', label: 'Financiación directa' },
    { id: 'equipos', label: 'Equipos' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'formulario-solicitud', label: 'Formulario' }
  ];

  return (
    <div className="bg-white">
      {/* Sticky Sub-Nav */}
      <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 py-3 min-w-max lg:justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-sm ${activeSection === item.id
                  ? 'bg-[#E94E1B] text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <HeroFinanciacion />
      <PorQueFinanciar setActiveSection={setActiveSection} />
      <ModalidadesLeasing setActiveSection={setActiveSection} />
      <FinanciacionPropia setActiveSection={setActiveSection} />
      <QueSeFinancia setActiveSection={setActiveSection} />
      <ComoFunciona setActiveSection={setActiveSection} />
      <WizardFinanciacion />
    </div>
  );
}

function HeroFinanciacion() {
  const scrollToForm = () => {
    const element = document.getElementById('formulario-solicitud');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={ref}
      className="pt-24 pb-16 px-6 lg:px-12"
      style={{ background: '#F8F0E7' }}
    >
      <div className="max-w-[1020px] mx-auto">
        <motion.div
          style={{ scale, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#2A2430] via-[#3A2F3E] to-[#2A2430] rounded-[32px] overflow-hidden relative"
          style={{
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.2), 0 10px 30px rgba(233, 78, 27, 0.1)'
          }}
        >
          {/* Animated blobs background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-[#E94E1B]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 100, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-[#E94E1B]/15 rounded-full blur-3xl"
            />

            {/* Additional glow around CTA area */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#E94E1B]/10 rounded-full blur-2xl"
            />
          </div>

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E94E1B]/6 to-transparent opacity-40" />

          {/* Content */}
          <div className="relative z-10 px-8 lg:px-20 py-14 lg:py-20 text-center">
            {/* Chip/Label - replaces icon */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-7"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(233, 78, 27, 0.2)'
                }}
              >
                <CreditCard className="size-4 text-[#E94E1B]" />
                <span
                  className="text-[12px] tracking-[0.08em] uppercase"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Soluciones de financiación
                </span>
              </div>
            </motion.div>

            {/* H1 - improved readability */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[36px] md:text-[44px] lg:text-[50px] leading-[1.2] mb-6 tracking-tight px-4"
              style={{
                color: '#ffffff',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700,
                maxWidth: '750px',
                margin: '0 auto 24px'
              }}
            >
              Financiá tu infraestructura tecnológica con Trendit
            </motion.h1>

            {/* Subtitle - narrower for better reading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[16px] md:text-[17px] leading-[1.7] mb-5 mx-auto px-4"
              style={{
                color: 'rgba(255, 255, 255, 0.88)',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
                maxWidth: '650px'
              }}
            >
              Leasing operativo, leasing financiero y financiación propia en pesos o dólares, pensados para que tu empresa incorpore tecnología hoy y la pague con el retorno que genera mañana.
            </motion.p>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[15px] md:text-[16px] leading-[1.75] mb-9 mx-auto px-4"
              style={{
                color: 'rgba(255, 255, 255, 0.72)',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
                maxWidth: '600px'
              }}
            >
              Preservá tu capital de trabajo, evitá demoras en tus proyectos y unificá en un solo partner la tecnología, la integración y la financiación.
            </motion.p>

            {/* CTAs - aligned in row, centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5 px-4"
            >
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 flex items-center justify-center gap-2 group"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  boxShadow: '0 8px 24px rgba(233, 78, 27, 0.35), 0 2px 8px rgba(233, 78, 27, 0.2)'
                }}
              >
                Solicitar financiación
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-[#E94E1B]/60 rounded-xl hover:border-[#E94E1B] hover:bg-[#E94E1B]/10 transition-all duration-300"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '16px'
                }}
              >
                Hablar con un especialista
              </button>
            </motion.div>

            {/* Micro-text with subtle icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center gap-2 px-4"
            >
              <Clock className="size-3.5 text-white/50" strokeWidth={2.5} />
              <p
                className="text-[13px]"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Respuesta en menos de 24 hs hábiles
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PorQueFinanciar({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const ref = useRef(null);

  const beneficios = [
    {
      icon: <Wallet className="size-7" />,
      title: 'Cuidás el capital de trabajo',
      description: 'Transformás grandes inversiones en cuotas predecibles.'
    },
    {
      icon: <DollarSign className="size-7" />,
      title: 'Pagos en pesos o dólares',
      description: 'Alternativas en ambas monedas según el perfil de tu empresa.'
    },
    {
      icon: <Handshake className="size-7" />,
      title: 'Tecnología + financiación',
      description: 'Simplificás proveedores, contratos y soporte en un solo equipo.'
    },
    {
      icon: <Users className="size-7" />,
      title: 'Acompañamiento consultivo',
      description: 'Te ayudamos a definir el mix de productos, plazos y modalidad más conveniente.'
    }
  ];

  return (
    <section
      id="beneficios"
      ref={ref}
      className="py-20 px-6 lg:px-12 bg-white relative"
    >
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-[900px] mx-auto"
        >
          <h2
            className="text-[36px] lg:text-[42px] text-[#282327] mb-5 leading-[1.2] tracking-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            ¿Por qué financiar tu tecnología con Trendit?
          </h2>
          <p
            className="text-[16px] text-neutral-600 leading-[1.7]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            En Trendit trabajamos todos los días con proyectos de infraestructura IT, centros de datos, videoseguridad y colaboración. Sabemos qué tecnología necesita tu negocio y también cómo hacerla viable desde el punto de vista financiero. Por eso integramos soluciones de leasing y financiación propia para que el presupuesto no frene la evolución de tu infraestructura.
          </p>
        </motion.div>

        {/* Grid 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {beneficios.map((beneficio, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border border-neutral-200 rounded-2xl p-7 hover:shadow-xl hover:border-[#E94E1B]/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className="size-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(233, 78, 27, 0.08)' }}
              >
                <div style={{ color: '#E94E1B' }}>
                  {beneficio.icon}
                </div>
              </div>
              <h3
                className="text-[17px] mb-3 leading-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  color: '#282327'
                }}
              >
                {beneficio.title}
              </h3>
              <p
                className="text-[15px] leading-[1.7]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400,
                  color: '#6B6B6B'
                }}
              >
                {beneficio.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModalidadesLeasing({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const ref = useRef(null);

  return (
    <section
      id="leasing"
      ref={ref}
      className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-[36px] lg:text-[42px] text-[#282327] mb-4 leading-[1.2] tracking-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Modalidades de leasing para tu proyecto
          </h2>
          <p
            className="text-[15px] text-neutral-600 leading-[1.7] max-w-[680px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Trabajamos con dos esquemas principales, que pueden estructurarse en pesos o dólares según el tipo de proyecto.
          </p>
        </motion.div>

        {/* Comparative Cards - side by side */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Leasing Operativo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#E94E1B]/30 transition-all duration-300"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 border-b border-neutral-200">
              <div className="flex items-start justify-between mb-2">
                <h3
                  className="text-[20px]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#282327'
                  }}
                >
                  Leasing operativo
                </h3>
                <span
                  className="px-3 py-1 bg-[#E94E1B]/10 text-[#E94E1B] rounded-full text-xs"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Mayor flexibilidad
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div>
                <p
                  className="text-[14px] mb-2 uppercase tracking-wide"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#E94E1B'
                  }}
                >
                  ¿En qué consiste?
                </p>
                <p
                  className="text-[15px] text-neutral-700 leading-[1.75]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  La empresa utiliza los equipos durante un período acordado, pagando un canon periódico. Al finalizar, puede renovar la tecnología o devolver los equipos; el riesgo de obsolescencia lo asume principalmente el arrendador.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

              <div>
                <p
                  className="text-[14px] mb-2 uppercase tracking-wide"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#E94E1B'
                  }}
                >
                  ¿Para quién es ideal?
                </p>
                <p
                  className="text-[15px] text-neutral-700 leading-[1.75]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Organizaciones que quieren estar siempre actualizadas sin comprometerse a comprar los equipos al final del contrato.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

              <div>
                <p
                  className="text-[14px] mb-2 uppercase tracking-wide"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#E94E1B'
                  }}
                >
                  Plazos orientativos*
                </p>
                <p
                  className="text-[15px] text-neutral-700 leading-[1.75]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  12 a 48 meses (según proyecto y moneda).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Leasing Financiero */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-neutral-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#E94E1B]/30 transition-all duration-300"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 border-b border-neutral-200">
              <div className="flex items-start justify-between mb-2">
                <h3
                  className="text-[20px]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#282327'
                  }}
                >
                  Leasing financiero
                </h3>
                <span
                  className="px-3 py-1 bg-[#E94E1B]/10 text-[#E94E1B] rounded-full text-xs"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Mayor plazo
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div>
                <p
                  className="text-[14px] mb-2 uppercase tracking-wide"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#E94E1B'
                  }}
                >
                  ¿En qué consiste?
                </p>
                <p
                  className="text-[15px] text-neutral-700 leading-[1.75]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Financiación de largo plazo donde las cuotas amortizan casi todo el valor del bien y suele existir una opción de compra al final del contrato.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

              <div>
                <p
                  className="text-[14px] mb-2 uppercase tracking-wide"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#E94E1B'
                  }}
                >
                  ¿Para quién es ideal?
                </p>
                <p
                  className="text-[15px] text-neutral-700 leading-[1.75]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Empresas que quieren financiar la inversión y quedarse con los activos en su patrimonio al final del período.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

              <div>
                <p
                  className="text-[14px] mb-2 uppercase tracking-wide"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#E94E1B'
                  }}
                >
                  Plazos orientativos*
                </p>
                <p
                  className="text-[15px] text-neutral-700 leading-[1.75]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  24 a 60 meses (según análisis crediticio).
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[13px] text-neutral-500 italic text-center mt-6"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400
          }}
        >
          *Plazos referenciales. Cada operación se define según análisis crediticio, tipo de equipamiento y moneda elegida.
        </motion.p>
      </div>
    </section>
  );
}

function FinanciacionPropia({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const ref = useRef(null);

  return (
    <section
      id="financiacion-directa"
      ref={ref}
      className="py-20 px-6 lg:px-12 bg-white"
    >
      <div className="max-w-[880px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start gap-5 mb-7">
            <div
              className="size-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(233, 78, 27, 0.1)' }}
            >
              <CreditCard className="size-7 text-[#E94E1B]" />
            </div>
            <div>
              <h2
                className="text-[32px] lg:text-[36px] leading-[1.2] tracking-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700,
                  color: '#282327'
                }}
              >
                Financiación directa con Trendit
              </h2>
            </div>
          </div>

          <p
            className="text-[16px] text-neutral-600 leading-[1.75] mb-7"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Además del leasing, Trendit ofrece planes de financiación propios mediante e-checks, sujetos a análisis crediticio y a la evaluación de riesgo de cada proyecto.
          </p>

          <div className="space-y-4 mb-7">
            {[
              {
                title: 'e-checks en pesos',
                description: 'cuotas fijas en moneda local para proyectos medianos y grandes.'
              },
              {
                title: 'Plazos flexibles',
                description: 'cantidad de meses definida en función del importe, tipo de equipamiento e historial crediticio.'
              },
              {
                title: 'Combinable con servicios',
                description: 'podés financiar productos y también la integración, el cableado y la configuración.'
              },
              {
                title: 'Aprobación ágil',
                description: 'proceso simplificado para no demorar la implementación tecnológica.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <div
                  className="size-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(233, 78, 27, 0.15)' }}
                >
                  <CheckCircle2 className="size-4 text-[#E94E1B]" />
                </div>
                <p
                  className="text-[15px] text-neutral-700 leading-[1.75]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: '#282327'
                    }}
                  >
                    {item.title}:
                  </span>{' '}
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div
            className="bg-neutral-50 border-t-2 border-neutral-200 rounded-xl p-4"
          >
            <p
              className="text-[13px] text-neutral-600 leading-[1.65]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Todas las operaciones están sujetas a verificación comercial, aprobación crediticia y firma de la documentación correspondiente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QueSeFinancia({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const ref = useRef(null);

  const equipos = [
    {
      icon: <Network className="size-8" />,
      title: 'Redes y conectividad',
      description: 'Switches, routers, Wi-Fi, firewalls y cableado estructurado.'
    },
    {
      icon: <Server className="size-8" />,
      title: 'Data Center y servidores',
      description: 'Servidores físicos, storage, UPS y respaldo de energía.'
    },
    {
      icon: <Monitor className="size-8" />,
      title: 'Puestos de trabajo',
      description: 'Notebooks, PCs de escritorio, monitores y periféricos.'
    },
    {
      icon: <Camera className="size-8" />,
      title: 'Videoseguridad y control',
      description: 'Cámaras, NVR/DVR y soluciones de análisis de video.'
    },
    {
      icon: <Video className="size-8" />,
      title: 'Colaboración y comunicaciones',
      description: 'Sistemas de videoconferencia, audio profesional y salas.'
    },
    {
      icon: <Wrench className="size-8" />,
      title: 'Servicios de integración',
      description: 'Diseño de arquitectura, instalación, migraciones y documentación.'
    }
  ];

  return (
    <section
      id="equipos"
      ref={ref}
      className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-3"
        >
          {/* Mini label */}
          <span
            className="inline-block px-4 py-1.5 bg-[#E94E1B]/10 text-[#E94E1B] rounded-full text-xs mb-6"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            COBERTURA DE PRODUCTOS
          </span>

          <h2
            className="text-[36px] lg:text-[42px] text-[#282327] mb-4 leading-[1.2] tracking-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Equipos y servicios que podés financiar
          </h2>
          <p
            className="text-[15px] text-neutral-600 leading-[1.7] max-w-[680px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Las soluciones de leasing y financiación aplican a la mayoría de los proyectos de infraestructura y modernización tecnológica que implementa Trendit.
          </p>
        </motion.div>

        {/* Grid 3x2 - unified height */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {equipos.map((equipo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#E94E1B]/40 transition-all duration-300 flex flex-col h-full"
            >
              <div
                className="size-14 rounded-xl flex items-center justify-center mb-5 mx-auto"
                style={{ backgroundColor: 'rgba(233, 78, 27, 0.1)' }}
              >
                <div style={{ color: '#E94E1B' }}>
                  {equipo.icon}
                </div>
              </div>
              <h3
                className="text-[17px] mb-3 leading-tight text-center"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  color: '#282327'
                }}
              >
                {equipo.title}
              </h3>
              <p
                className="text-[14px] leading-[1.7] text-center flex-grow"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400,
                  color: '#6B6B6B'
                }}
              >
                {equipo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const ref = useRef(null);

  const pasos = [
    {
      number: '1',
      title: 'Definición del proyecto',
      description: 'Junto al equipo técnico y comercial definimos el alcance, productos y servicios a financiar.'
    },
    {
      number: '2',
      title: 'Solicitud de financiación',
      description: 'Completás el formulario con tus datos fiscales, monto estimado y modalidad preferida.'
    },
    {
      number: '3',
      title: 'Análisis y propuesta',
      description: 'Realizamos la evaluación crediticia y presentamos una propuesta con moneda, plazo, cuotas y condiciones.'
    },
    {
      number: '4',
      title: 'Aprobación y documentación',
      description: 'Al aceptar la propuesta, se gestionan contratos de leasing o acuerdos de financiación y garantías.'
    },
    {
      number: '5',
      title: 'Entrega e implementación',
      description: 'Coordinamos entrega de equipamiento, instalación e integración con tus sistemas.'
    },
    {
      number: '6',
      title: 'Seguimiento y renovación',
      description: 'Monitoreamos el estado del equipamiento y planificamos la renovación tecnológica cuando corresponda.'
    }
  ];

  return (
    <section
      id="proceso"
      ref={ref}
      className="py-20 px-6 lg:px-12 bg-white"
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[36px] lg:text-[42px] text-[#282327] mb-4 leading-[1.2] tracking-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Cómo funciona la financiación
          </h2>
        </motion.div>

        {/* Timeline - centered vertical */}
        <div className="max-w-[800px] mx-auto relative">
          {/* Vertical line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E94E1B]/20 via-[#E94E1B]/40 to-[#E94E1B]/20 -translate-x-1/2" />

          <div className="space-y-6 lg:space-y-8">
            {pasos.map((paso, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="flex items-start gap-6 lg:gap-8">
                  {/* Number Circle - centered on line */}
                  <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-10">
                    <div
                      className="size-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        backgroundColor: '#E94E1B',
                        color: '#ffffff',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 700,
                        fontSize: '18px',
                        boxShadow: '0 4px 15px rgba(233, 78, 27, 0.3)'
                      }}
                    >
                      {paso.number}
                    </div>
                  </div>

                  {/* Content Card - alternating sides on desktop */}
                  <div className={`flex-1 lg:w-[calc(50%-40px)] ${idx % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                    <div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#E94E1B]/30 transition-all duration-300">
                      <h3
                        className="text-[18px] mb-2 leading-tight"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 600,
                          color: '#282327'
                        }}
                      >
                        {paso.title}
                      </h3>
                      <p
                        className="text-[15px] leading-[1.75]"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 400,
                          color: '#6B6B6B'
                        }}
                      >
                        {paso.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

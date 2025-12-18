import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Sparkles, 
  Award, 
  TrendingUp, 
  Handshake,
  ChevronDown,
  MapPin,
  DollarSign,
  Route,
  Layers,
  Cloud,
  Shield,
  Cpu,
  FileCheck,
  Boxes,
  Users,
  Headphones,
  BarChart3,
  Activity,
  Eye,
  Sprout,
  TreeDeciduous,
  Target,
  Calendar,
  TrendingUpDown,
  Heart,
  CheckCircle2,
  Clock,
  DollarSign as CostIcon,
  ClipboardCheck,
  TrendingUp as TrendIcon
} from 'lucide-react';

export function WhyTrendit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'contexto',
      number: '1',
      shortTitle: 'Partimos de tu contexto',
      stepTag: '1 · PARTIMOS DE TU CONTEXTO',
      cardTitle: 'Hablamos el lenguaje de tu negocio',
      paragraphs: [
        'Combinamos la mirada de IT, Operaciones y Finanzas para entender cómo ganás dinero, dónde se frena tu operación y qué riesgos enfrentás.',
        'Mapeamos CAPEX, OPEX, plazos reales y restricciones del equipo (importaciones, inflación, logística). No partimos de un catálogo: partimos de vos.',
        'A partir de ese diagnóstico, priorizamos quick wins y armamos una hoja de ruta tecnológica aterrizada, realista y orientada a resultados de negocio.'
      ],
      keyPhrases: [
        { start: 'Mapeamos CAPEX, OPEX, plazos reales y restricciones del equipo (importaciones, inflación, logística).', end: '' }
      ],
      highlights: [
        { icon: <MapPin className="size-3.5" />, label: 'Mapa de negocio' },
        { icon: <DollarSign className="size-3.5" />, label: 'CAPEX & OPEX' },
        { icon: <Route className="size-3.5" />, label: 'Roadmap tecnológico' }
      ],
      icon: <MessageSquare className="size-8" />,
      color: '#E94E1B'
    },
    {
      id: 'tecnologia',
      number: '2',
      shortTitle: 'Tecnología que marca la diferencia',
      stepTag: '2 · TECNOLOGÍA QUE MARCA LA DIFERENCIA',
      cardTitle: 'Elegimos la tecnología pensando en tu futuro',
      paragraphs: [
        'Diseñamos arquitecturas con líderes globales: Lenovo, HPE, Microsoft, Cisco, Axis, Logitech, APC y otros partners estratégicos que dominamos en proyectos reales.',
        'No empujamos marcas: elegimos las piezas que mejor encajan con tu industria, tu presupuesto, tu equipo y tu visión de crecimiento.',
        'Dejamos tu infraestructura lista para escalar, segura, flexible y preparada para soportar proyectos de analítica, datos e inteligencia artificial del futuro.'
      ],
      keyPhrases: [
        { start: 'No empujamos marcas:', end: ' elegimos las piezas que mejor encajan con tu industria, tu presupuesto, tu equipo y tu visión de crecimiento.' }
      ],
      highlights: [
        { icon: <Layers className="size-3.5" />, label: 'Arquitecturas escalables' },
        { icon: <Cloud className="size-3.5" />, label: 'Data Center & Cloud' },
        { icon: <Shield className="size-3.5" />, label: 'Redes seguras' },
        { icon: <Cpu className="size-3.5" />, label: 'Preparado para IA' }
      ],
      icon: <Sparkles className="size-8" />,
      color: '#E94E1B'
    },
    {
      id: 'iso9001',
      number: '3',
      shortTitle: 'Ejecución certificada y medible',
      stepTag: '3 · EJECUCIÓN CERTIFICADA Y MEDIBLE',
      cardTitle: 'Ejecutamos con método, medimos con datos',
      paragraphs: [
        'Contamos con un sistema de gestión de calidad basado en norma ISO 9001 que ordena cómo planificamos, ejecutamos y mejoramos los proyectos, desde el relevamiento hasta el soporte post-implementación.',
        'Combinamos buenas prácticas de PMI con metodologías ágiles: definimos alcance, tiempos, costos y riesgos, y los bajamos a un plan de trabajo con hitos claros, responsables y tableros de seguimiento.',
        'Diseñamos escenarios, priorizamos quick wins y mantenemos conversaciones transparentes para que sepas siempre cómo avanza el proyecto y qué impacto tiene en tu operación.'
      ],
      kpiBadges: [
        { icon: <Target className="size-3.5" />, label: 'Alcance claro' },
        { icon: <Clock className="size-3.5" />, label: 'Tiempos realistas' },
        { icon: <CostIcon className="size-3.5" />, label: 'Costos controlados' }
      ],
      highlights: [
        { icon: <Award className="size-3.5" />, label: 'ISO 9001 & procesos auditados' },
        { icon: <ClipboardCheck className="size-3.5" />, label: 'PMI & ágiles' },
        { icon: <FileCheck className="size-3.5" />, label: 'Pruebas y documentación' },
        { icon: <Headphones className="size-3.5" />, label: 'Soporte post-implementación' }
      ],
      icon: <ClipboardCheck className="size-8" />,
      color: '#E94E1B',
      hasPattern: true
    },
    {
      id: 'impacto',
      number: '4',
      shortTitle: 'Impacto que trasciende',
      stepTag: '4 · IMPACTO QUE TRASCIENDE EL PROYECTO',
      cardTitle: 'Del proyecto al resultado de negocio',
      paragraphs: [
        'En cada proyecto definimos junto con vos qué objetivos y KPIs tienen sentido para tu realidad: disponibilidad, performance, seguridad, experiencia del usuario u otros indicadores que sean relevantes para tu operación. Cuando la solución lo permite, integramos herramientas de monitoreo y analítica para que tengas mayor visibilidad y puedas tomar mejores decisiones basadas en datos.',
        'También buscamos reducir complejidad y esfuerzos operativos: aprovechamos al máximo la infraestructura existente, ordenamos la red y estandarizamos la operación. Así los proyectos no solo funcionan, sino que hacen más simple el día a día del área de IT y ayudan a cuidar los costos del negocio.'
      ],
      highlights: [
        { icon: <Target className="size-3.5" />, label: 'KPIs definidos junto al cliente' },
        { icon: <Activity className="size-3.5" />, label: 'Monitoreo y analítica cuando aplica' },
        { icon: <Layers className="size-3.5" />, label: 'Optimización de infraestructura' },
        { icon: <Eye className="size-3.5" />, label: 'Mayor visibilidad para decidir mejor' }
      ],
      icon: <TrendingUp className="size-8" />,
      color: '#16a34a'
    },
    {
      id: 'b4b',
      number: '5',
      shortTitle: 'Enfoque B4B + Reforestar',
      stepTag: '5 · ENFOQUE B4B + TRIPLE IMPACTO',
      cardTitle: 'Socios estratégicos, no solo proveedores',
      paragraphs: [
        'Business for Business: entendemos tus números, tu CAPEX, tu OPEX y diseñamos soluciones pensando en retorno de inversión, continuidad operativa y crecimiento sostenible.',
        'Construimos relaciones de largo plazo: te acompañamos en la planificación de roadmaps, en la renovación de tecnologías críticas y en la apertura de nuevos proyectos sobre la base instalada.',
        'Con Reforestar, cada proyecto suma árboles nativos en Córdoba, reduce la huella de carbono de tu organización y genera impacto social positivo en viveros y comunidades locales.'
      ],
      highlights: [
        { icon: <Target className="size-3.5" />, label: 'Visión B4B' },
        { icon: <Calendar className="size-3.5" />, label: 'Relación de largo plazo' },
        { icon: <TrendingUp className="size-3.5" />, label: 'Retorno de inversión medible' },
        { icon: <Sprout className="size-3.5" />, label: 'Programa Reforestar' },
        { icon: <Heart className="size-3.5" />, label: 'Impacto ambiental & social' }
      ],
      icon: <Handshake className="size-8" />,
      color: '#E94E1B'
    },
  ];

  return (
    <section 
      ref={ref} 
      className="py-12 lg:py-16 px-6 lg:px-12 bg-white relative"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.025) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20 max-w-[800px] mx-auto"
        >
          <h1 
            className="text-[40px] lg:text-[48px] text-[#282327] mb-8 leading-[1.1]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            ¿Por qué Trendit?
          </h1>
          <p 
            className="text-base lg:text-lg text-neutral-600 leading-[1.7] mb-5 px-4 mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400,
              maxWidth: '800px'
            }}
          >
            En Trendit trabajamos como aliado estratégico, no solo como proveedor. Entendemos tu contexto, diseñamos una arquitectura que pueda crecer con tu negocio y la implementamos con equipos certificados.
          </p>
          <p 
            className="text-base lg:text-lg text-neutral-600 leading-[1.7] mb-10 px-4 mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400,
              maxWidth: '800px'
            }}
          >
            Te acompañamos durante todo el ciclo de vida de la infraestructura, para que la tecnología sea un soporte confiable para tus operaciones y tus personas.
          </p>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col items-center gap-3 text-neutral-400 mt-8"
          >
            <span 
              className="text-xs uppercase tracking-wider text-center px-4"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              Seguí bajando para conocer cómo trabajamos en cada etapa
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="size-6 text-[#E94E1B]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop: Timeline + Cards Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-12 relative">
            {/* Vertical divider line */}
            <div className="absolute left-[18%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />

            {/* Left: Sticky Timeline */}
            <div className="col-span-2">
              <div className="sticky top-24">
                <div className="space-y-0">
                  {steps.map((step, index) => (
                    <TimelineStep
                      key={step.id}
                      step={step}
                      index={index}
                      isActive={activeStep === index}
                      isLast={index === steps.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Story Cards */}
            <div className="col-span-10">
              <div className="space-y-24">
                {steps.map((step, index) => (
                  <StoryCard
                    key={step.id}
                    step={step}
                    index={index}
                    onInView={() => setActiveStep(index)}
                  />
                ))}
              </div>

              {/* Final CTA */}
              <FinalCTA />
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal chips + stacked cards */}
        <div className="lg:hidden">
          {/* Progress chips - horizontal scroll */}
          <div className="sticky top-4 z-20 mb-12 -mx-6 px-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-3 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 min-w-max">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => {
                      const element = document.getElementById(`card-${step.id}`);
                      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${
                      activeStep === index
                        ? step.id === 'impacto' 
                          ? 'bg-green-600 text-white shadow-md'
                          : 'bg-[#E94E1B] text-white shadow-md'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <span className={`flex items-center justify-center size-6 rounded-full text-xs font-bold ${
                      activeStep === index
                        ? 'bg-white text-[#E94E1B]'
                        : 'bg-white text-neutral-400'
                    }`}>
                      {step.number}
                    </span>
                    <span className="text-sm font-medium">{step.shortTitle}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Story Cards */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <StoryCard
                key={step.id}
                step={step}
                index={index}
                onInView={() => setActiveStep(index)}
              />
            ))}
          </div>

          {/* Final CTA */}
          <FinalCTA />
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ 
  step, 
  index,
  isActive,
  isLast
}: { 
  step: any;
  index: number;
  isActive: boolean;
  isLast: boolean;
}) {
  return (
    <div className="relative flex items-start gap-4 pb-12">
      {/* Vertical connector line */}
      {!isLast && (
        <div 
          className="absolute left-6 top-14 w-0.5 h-full transition-all duration-500"
          style={{
            backgroundColor: isActive ? step.color : '#e5e7eb',
            opacity: isActive ? 0.4 : 0.2
          }}
        />
      )}

      {/* Circle + content */}
      <div className="flex items-start gap-4 relative z-10">
        {/* Number Circle */}
        <motion.div
          className="flex items-center justify-center size-12 rounded-full font-bold text-lg flex-shrink-0 transition-all duration-300"
          style={{
            backgroundColor: isActive ? step.color : '#ffffff',
            color: isActive ? '#ffffff' : '#9ca3af',
            border: isActive ? 'none' : '2px solid #e5e7eb',
            boxShadow: isActive ? `0 4px 16px ${step.color}40` : 'none',
            transform: isActive ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          {step.number}
        </motion.div>

        {/* Title */}
        <div className="pt-2.5 flex-1">
          <p 
            className="text-sm leading-tight font-medium transition-all duration-300"
            style={{
              color: isActive ? '#282327' : '#9ca3af',
              fontWeight: isActive ? 600 : 500
            }}
          >
            {step.shortTitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function StoryCard({ 
  step, 
  index,
  onInView 
}: { 
  step: any; 
  index: number;
  onInView: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-30% 0px -30% 0px"
  });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return (
    <motion.div
      id={`card-${step.id}`}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="min-h-[70vh] lg:min-h-[65vh] flex items-center scroll-mt-20"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div 
        className="bg-white rounded-[28px] border border-neutral-200 shadow-lg p-6 lg:p-10 w-full max-w-[1120px] mx-auto relative overflow-hidden group hover:shadow-xl hover:border-neutral-300 transition-all duration-500"
        style={{
          borderRadius: step.id === 'iso9001' ? '32px' : '28px',
          boxShadow: step.id === 'iso9001' 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)'
        }}
      >
        {/* Subtle Gantt-style pattern for step 3 */}
        {step.hasPattern && (
          <div 
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 0%, transparent 48%, #E5E7EB 48%, #E5E7EB 52%, transparent 52%, transparent 100%),
                linear-gradient(0deg, transparent 0%, transparent 90%, #E5E7EB 90%, #E5E7EB 100%)
              `,
              backgroundSize: '80px 40px'
            }}
          />
        )}

        {/* Giant watermark number */}
        <motion.div 
          className="absolute bottom-4 right-6 text-[180px] lg:text-[240px] font-bold leading-none pointer-events-none select-none"
          style={{ 
            color: step.color,
            opacity: 0.035
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.035 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {step.number}
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          {/* Step Tag */}
          <motion.p 
            className="text-xs uppercase tracking-[0.15em] font-bold mb-6"
            style={{ color: step.color }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {step.stepTag}
          </motion.p>

          {/* Icon + Title Row */}
          <div className="flex items-start gap-6 mb-8">
            {/* Icon */}
            <motion.div
              className="size-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
              style={{
                backgroundColor: `${step.color}15`,
                color: step.color
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {step.icon}
            </motion.div>

            {/* Card Title */}
            <div className="flex-1">
              <h2 
                className="text-[32px] lg:text-[38px] font-semibold text-[#282327] leading-[1.15]"
                style={{
                  letterSpacing: step.id === 'iso9001' ? '-0.01em' : '0'
                }}
              >
                {step.cardTitle}
              </h2>
            </div>
          </div>

          {/* Paragraphs with enhanced first phrase */}
          <div className="space-y-5 mb-10">
            {step.paragraphs.map((paragraph: string, idx: number) => {
              // Split first sentence for bold effect
              const sentences = paragraph.split('. ');
              const firstSentence = sentences[0] + (sentences.length > 1 ? '.' : '');
              const restOfParagraph = sentences.length > 1 ? sentences.slice(1).join('. ') : '';
              
              return (
                <motion.p
                  key={idx}
                  className="text-[17px] text-neutral-600 leading-[1.75]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <span className="font-medium text-neutral-700">{firstSentence}</span>
                  {restOfParagraph && <span> {restOfParagraph}</span>}
                </motion.p>
              );
            })}
          </div>

          {/* KPI Badges - BEFORE Highlights (only for step 3) */}
          {step.kpiBadges && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex flex-wrap gap-3">
                {step.kpiBadges.map((badge: any, idx: number) => (
                  <motion.div
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F6F6F6] border border-neutral-200 rounded-xl text-sm font-medium text-neutral-700 cursor-default"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.65 + idx * 0.08 }}
                  >
                    <span style={{ color: step.color }}>
                      {badge.icon}
                    </span>
                    <span>{badge.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Highlights / Bullets */}
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-neutral-400 font-semibold mb-4">
              Highlights
            </p>
            <div className="flex flex-wrap gap-2.5">
              {step.highlights.map((highlight: any, idx: number) => (
                <motion.span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:border-[#E94E1B]/30 hover:bg-neutral-100 hover:shadow-sm transition-all duration-200 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                >
                  <span style={{ color: step.color }}>
                    {highlight.icon}
                  </span>
                  <span>{highlight.label}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FinalCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-24 text-center max-w-3xl mx-auto"
    >
      <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-3xl p-10 lg:p-12 shadow-lg">
        <p className="text-2xl lg:text-3xl text-[#282327] font-semibold mb-6 leading-[1.3]">
          ¿Querés que este viaje sea el próximo proyecto de tu empresa?
        </p>
        <p className="text-base text-neutral-600 mb-8 leading-relaxed">
          Conversemos sobre tu realidad, tus desafíos y cómo podemos construir juntos una solución tecnológica que genere impacto real.
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 text-base font-semibold shadow-lg hover:shadow-xl group"
        >
          Hablemos de tu proyecto
          <ChevronDown className="size-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
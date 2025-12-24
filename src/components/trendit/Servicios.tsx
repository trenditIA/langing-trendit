import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Server,
  Network,
  Video,
  Users,
  Zap,
  Laptop,
  Wrench,
  MessageCircle,
  CheckCircle2,
  Database,
  Wifi,
  Shield,
  Camera,
  Power,
  Monitor,
  FileText,
  Phone,
  Target,
  DollarSign,
  Clock,
  ListChecks,
  TrendingUp,
  Cable,
  Cloud
} from 'lucide-react';
import { Button } from '../ui/button';
import { AgendarReunionModal } from './AgendarReunionModal';

export function ServiciosPage() {
  const serviciosRef = React.useRef<HTMLDivElement>(null);
  const [targetService, setTargetService] = React.useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Check for target service from sessionStorage on mount
  React.useEffect(() => {
    const storedService = sessionStorage.getItem('targetService');
    if (storedService !== null) {
      const serviceIndex = parseInt(storedService, 10);
      setTargetService(serviceIndex);
      sessionStorage.removeItem('targetService'); // Clean up after reading

      // Scroll to services section after a short delay
      setTimeout(() => {
        serviciosRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const scrollToService = (index: number) => {
    setTargetService(index);
    serviciosRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Small delay to ensure scroll completes before selecting
    setTimeout(() => {
      setTargetService(null);
    }, 1000);
  };

  return (
    <div className="bg-white">
      <HeroServicios onServiceClick={scrollToService} onOpenModal={() => setIsModalOpen(true)} />
      <IntroServicios />
      <MetodoTrabajo />
      <ExploradorServicios ref={serviciosRef} initialService={targetService} />
      <CTAFinalServicios onOpenModal={() => setIsModalOpen(true)} />
      <AgendarReunionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function HeroServicios({ onServiceClick, onOpenModal }: { onServiceClick: (index: number) => void; onOpenModal: () => void }) {
  const [hoveredService, setHoveredService] = React.useState<number | null>(null);

  const services = [
    {
      icon: <Server className="size-7" />,
      label: 'Infraestructura IT & Data Center',
      id: 0
    },
    {
      icon: <Wifi className="size-7" />,
      label: 'Redes & Conectividad',
      id: 1
    },
    {
      icon: <Users className="size-7" />,
      label: 'Team Collaboration',
      id: 2
    },
    {
      icon: <Camera className="size-7" />,
      label: 'Videoseguridad & Analítica',
      id: 3
    },
    {
      icon: <Zap className="size-7" />,
      label: 'Energía & Continuidad',
      id: 4
    },
    {
      icon: <Laptop className="size-7" />,
      label: 'Microinformática',
      id: 5
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007', '_blank');
  };

  const handleMeeting = () => {
    //DO NOTHING
  };

  return (
    <section
      className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-12"
      style={{
        minHeight: 'calc(100vh - 80px)',
        background: '#F5F5F7'
      }}
    >
      <div className="max-w-[1400px] mx-auto h-full flex items-center">
        <div className="grid lg:grid-cols-[48%_52%] gap-12 lg:gap-16 w-full items-center">

          {/* Left column - Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[560px]"
          >
            {/* Main heading */}
            <h1
              className="text-[36px] sm:text-[42px] md:text-[54px] lg:text-[62px] leading-[1.08] mb-5 sm:mb-6 lg:mb-7 tracking-tight"
              style={{
                color: '#141414',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              Una experiencia 360° en tecnología
            </h1>

            {/* Subtitle */}
            <p
              className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[1.65] mb-5 sm:mb-6 lg:mb-7"
              style={{
                color: '#4A4A4A',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              Integramos infraestructura, redes, videoseguridad, colaboración y energía en un solo ecosistema IT, para que la experiencia de tus usuarios sea simple y tu operación gane continuidad y performance.
            </p>

            {/* Supporting text */}
            <p
              className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] mb-7 sm:mb-8 lg:mb-10"
              style={{
                color: '#6B6B6B',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Elegí un módulo de servicio para ver todo lo que podemos hacer en cada área.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={onOpenModal}
                className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-7 h-[54px] transition-all duration-300 w-full sm:w-auto"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  boxShadow: '0 4px 14px rgba(233, 78, 27, 0.25), 0 2px 6px rgba(233, 78, 27, 0.15)'
                }}
              >
                Agendar una reunión con Trendit
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsApp}
                className="bg-white border-[1.5px] border-[#D1D1D6] text-[#141414] hover:bg-neutral-50 hover:border-[#B8B8BD] px-7 h-[54px] transition-all duration-300 w-full sm:w-auto"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <MessageCircle className="size-5" style={{ marginRight: '10px' }} />
                Escribirnos por WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right column - Service Cards Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full"
          >
            {/* Desktop & Tablet: 2x3 grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-7 max-w-[600px] mx-auto">
              {services.map((service, idx) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.08, duration: 0.5, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => onServiceClick(idx)}
                  className="group relative w-full"
                >
                  <div
                    className="flex flex-col items-center justify-center gap-4 p-6 lg:p-7 transition-all duration-300 cursor-pointer"
                    style={{
                      background: hoveredService === idx ? '#FFF7F3' : '#FFFFFF',
                      border: hoveredService === idx ? '1.5px solid #E94E1B' : '1px solid #E3E3E3',
                      borderRadius: '14px',
                      minHeight: '150px',
                      boxShadow: hoveredService === idx
                        ? '0 4px 16px rgba(233, 78, 27, 0.12), 0 1px 4px rgba(0, 0, 0, 0.04)'
                        : '0 1px 3px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="size-12 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: hoveredService === idx ? '#E94E1B' : '#F5F5F7',
                        color: hoveredService === idx ? '#FFFFFF' : '#E94E1B'
                      }}
                    >
                      {React.cloneElement(service.icon, { className: 'size-6' })}
                    </div>

                    {/* Label */}
                    <span
                      className="text-[13px] text-center leading-tight px-2 transition-colors duration-300"
                      style={{
                        color: '#141414',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {service.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile: 1 column x 6 rows */}
            <div className="md:hidden flex flex-col gap-4">
              {services.map((service, idx) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
                  onClick={() => onServiceClick(idx)}
                  className="w-full"
                >
                  <div
                    className="flex items-center gap-4 p-5 transition-all duration-300 cursor-pointer active:scale-98"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E3E3E3',
                      borderRadius: '12px',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="size-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: '#F5F5F7',
                        color: '#E94E1B'
                      }}
                    >
                      {React.cloneElement(service.icon, { className: 'size-5' })}
                    </div>

                    {/* Label */}
                    <span
                      className="text-[14px] text-left leading-tight flex-1"
                      style={{
                        color: '#141414',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {service.label}
                    </span>

                    {/* Arrow indicator */}
                    <ArrowRight
                      className="size-4 flex-shrink-0 opacity-40"
                      style={{ color: '#6B6B6B' }}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function IntroServicios() {
  const steps = [
    {
      icon: <Target className="size-7" />,
      number: '1',
      title: 'Entendemos el contexto y las prioridades',
      description: 'Analizamos tus sitios, procesos críticos, riesgos y presupuesto. Mapeamos qué es realmente imprescindible que funcione 24/7 y qué puede ir por etapas, para que la arquitectura acompañe la estrategia del negocio.'
    },
    {
      icon: <Network className="size-7" />,
      number: '2',
      title: 'Diseñamos y ejecutamos la arquitectura',
      description: 'Definimos la arquitectura de red, cómputo, energía, videoseguridad y colaboración. Gestionamos los proyectos con buenas prácticas (PMI) y metodologías ágiles cuando el contexto lo requiere, cuidando plazos, costos y calidad de cada entrega.'
    },
    {
      icon: <TrendingUp className="size-7" />,
      number: '3',
      title: 'Medimos, cuidamos y evolucionamos la solución',
      description: 'Acompañamos la operación con soporte, monitoreo y ajustes. Tomamos decisiones pensando en el TCO (Total Cost of Ownership): priorizamos tecnologías que reduzcan incidentes, consumo y esfuerzo operativo a lo largo del tiempo, no solo el costo inicial.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-sm font-bold text-[#E94E1B] mb-4 uppercase tracking-wide">
            Cómo te acompañamos
          </div>

          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-8 leading-[1.15] tracking-tight">
            Un socio de infraestructura que piensa como tu negocio
          </h2>

          <div className="max-w-[800px] mx-auto">
            <p className="text-[17px] text-neutral-600 leading-[1.7]">
              En Trendit trabajamos como socio B4B especializado en infraestructura IT. Estamos comprometidos con el éxito de tus operaciones. Por eso, durante estos 10 años fuimos ampliando nuestro ecosistema de servicios y conocimientos paso a paso, sumando equipos, certificaciones y experiencias reales en proyectos. No fue algo de un día para el otro: lo construimos junto a nuestros clientes, elevando el nivel en cada nueva implementación.
            </p>
          </div>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <div
                className="bg-white rounded-[20px] p-8 h-full flex flex-col"
                style={{
                  border: '1px solid #E8D8C8',
                  boxShadow: '0 4px 16px rgba(40, 35, 39, 0.06), 0 1px 4px rgba(40, 35, 39, 0.04)'
                }}
              >
                {/* Icon container */}
                <div
                  className="size-14 rounded-full flex items-center justify-center text-white mb-5"
                  style={{
                    background: '#F2692F'
                  }}
                >
                  {step.icon}
                </div>

                {/* Title with number */}
                <h3 className="text-[18px] font-semibold text-[#282327] mb-3 leading-tight">
                  {step.number}. {step.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-neutral-600 leading-[1.7]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetodoTrabajo() {
  const steps = [
    {
      icon: <Target className="size-7" />,
      title: 'Alcance claro',
      description: 'Qué se va a hacer, qué no y con qué criterios de aceptación.'
    },
    {
      icon: <DollarSign className="size-7" />,
      title: 'Costos transparentes',
      description: 'Inversiones, licencias, servicios y mantenimiento visibles de punta a punta.'
    },
    {
      icon: <Clock className="size-7" />,
      title: 'Tiempos definidos',
      description: 'Hitos, cronograma y ventanas de implementación coordinadas con tu operación.'
    },
    {
      icon: <ListChecks className="size-7" />,
      title: 'Metodología adecuada',
      description: 'Uso de marcos PMI y/o ágiles para coordinar equipos, proveedores y áreas internas.'
    },
    {
      icon: <TrendingUp className="size-7" />,
      title: 'TCO y continuidad',
      description: 'Elegimos productos y arquitecturas que optimicen el costo total de propiedad y la vida útil de la solución.'
    }
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="text-sm font-bold text-[#E94E1B] mb-3 uppercase tracking-wide">
            Método de trabajo
          </div>
          <h2 className="text-[44px] text-[#282327] mb-8 leading-[1.15] tracking-tight">
            Cómo trabajamos tus proyectos
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[350px_1fr] gap-12">
          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[16px] text-neutral-600 leading-[1.7]"
          >
            <p>
              En todo proyecto —desde un nuevo data center hasta una red WiFi de campus o un despliegue de videoseguridad— mantenemos un mismo enfoque: claridad, orden y continuidad operativa.
            </p>
          </motion.div>

          {/* Timeline - Desktop horizontal */}
          <div className="hidden lg:block">
            <div className="flex gap-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`
                    flex-1 p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                    ${activeStep === idx
                      ? 'bg-[#E94E1B] border-[#E94E1B] text-white shadow-lg'
                      : 'bg-white border-neutral-200 text-neutral-700 hover:border-[#E94E1B]/40'
                    }
                  `}
                >
                  <div className={`size-12 rounded-xl flex items-center justify-center mb-4 mx-auto ${activeStep === idx ? 'bg-white/20 text-white' : 'bg-[#E94E1B]/10 text-[#E94E1B]'}`}>
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-[15px] mb-2 text-center leading-tight">
                    {step.title}
                  </h3>
                  <p className={`text-[13px] leading-[1.6] text-center transition-opacity ${activeStep === idx ? 'opacity-100' : 'opacity-0'}`}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Accordion - Mobile */}
          <div className="block lg:hidden space-y-3">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <button
                  onClick={() => setActiveStep(activeStep === idx ? -1 : idx)}
                  className="w-full text-left"
                >
                  <div className={`
                    p-5 rounded-2xl border-2 transition-all duration-300
                    ${activeStep === idx
                      ? 'bg-[#E94E1B] border-[#E94E1B] text-white'
                      : 'bg-white border-neutral-200 text-neutral-700'
                    }
                  `}>
                    <div className="flex items-center gap-4">
                      <div className={`size-10 rounded-xl flex items-center justify-center flex-shrink-0 ${activeStep === idx ? 'bg-white/20 text-white' : 'bg-[#E94E1B]/10 text-[#E94E1B]'}`}>
                        {step.icon}
                      </div>
                      <h3 className="font-semibold text-[15px] leading-tight flex-1">
                        {step.title}
                      </h3>
                    </div>
                    {activeStep === idx && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[14px] leading-[1.6] mt-3 pl-14"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ExploradorServicios = React.forwardRef<HTMLDivElement, { initialService: number | null }>(
  ({ initialService }, ref) => {
    const [selectedService, setSelectedService] = React.useState(0);

    // Update selected service when initialService changes
    React.useEffect(() => {
      if (initialService !== null) {
        setSelectedService(initialService);
      }
    }, [initialService]);

    const servicios = [
      {
        icon: <Server className="size-12" />,
        name: 'Infraestructura IT & Data Center',
        description: 'Preparamos tu base tecnológica para soportar aplicaciones críticas, crecimiento de datos y nuevos servicios, cuidando rendimiento y TCO.',
        bullets: [
          'Diseño de arquitectura de cómputo y almacenamiento alineada a tu carga y a tus aplicaciones.',
          'Servidores, cabinas de storage, hiperconvergencia y virtualización.',
          'Continuidad operativa, respaldos, planes de contingencia y recuperación ante desastres.',
          'Proyectos gestionados con enfoque PMI (alcance–costo–tiempo) y criterios de calidad definidos.'
        ],
        footer: 'Ideal para organizaciones que necesitan performance, seguridad y alta disponibilidad con una inversión alineada a su realidad de negocio.',
        technologies: ['Servidores', 'Storage', 'Virtualización', 'Hiperconvergencia', 'Backup', 'DR']
      },
      {
        icon: <Wifi className="size-12" />,
        name: 'Redes & Conectividad',
        description: 'Construimos redes seguras, escalables y bien documentadas, pensadas para crecer sin perder visibilidad ni control.',
        bullets: [
          'Switching de acceso, distribución y núcleo.',
          'Redes WiFi corporativas de alta densidad para oficinas, plantas y campus.',
          'Fibra óptica y cableado estructurado certificados.',
          'Segmentación, QoS, seguridad perimetral y monitoreo de la red.'
        ],
        footer: 'Pensado para plantas industriales, oficinas, retail y sedes distribuidas que necesitan estabilidad y rendimiento constante.',
        technologies: ['Switching', 'WiFi corporativo', 'Fibra óptica', 'Segmentación', 'QoS', 'Monitoreo']
      },
      {
        icon: <Users className="size-12" />,
        name: 'Team Collaboration',
        description: 'Hacemos que tus equipos se vean, se escuchen y trabajen mejor, estén donde estén.',
        bullets: [
          'Plataformas de colaboración y comunicaciones unificadas.',
          'Salas de reunión equipadas con cámaras, micrófonos y paneles interactivos.',
          'Soluciones para trabajo híbrido: oficinas, home office y movilidad.',
          'Integración con herramientas como Teams, Zoom y otros entornos corporativos.'
        ],
        footer: 'Para organizaciones que quieren reducir fricción en las reuniones, acelerar decisiones y mejorar la experiencia del colaborador.',
        technologies: ['Salas de reunión', 'UC', 'Video conferencia', 'Trabajo híbrido', 'Teams', 'Zoom']
      },
      {
        icon: <Camera className="size-12" />,
        name: 'Videoseguridad & Analítica',
        description: 'Transformamos la videoseguridad en una fuente de información para decisiones de seguridad y operación.',
        bullets: [
          'Sistemas de cámaras IP y grabación en red.',
          'Analítica de video para conteo de personas, detección de eventos y monitoreo inteligente.',
          'Integración con control de accesos y otros sistemas de seguridad física.',
          'Soluciones para entornos industriales, retail, campus y sector público.'
        ],
        footer: 'Ayudamos a proteger personas, activos e instalaciones con datos en tiempo real.',
        technologies: ['Cámaras IP', 'Analítica de video', 'VMS', 'Control de acceso', 'IoT', 'Seguridad física']
      },
      {
        icon: <Zap className="size-12" />,
        name: 'Energía & Continuidad',
        description: 'Diseñamos cadenas de energía que sostienen tu operación incluso cuando todo lo demás falla.',
        bullets: [
          'UPS, sistemas de respaldo, tableros y distribución eléctrica para data centers y salas técnicas.',
          'Soluciones de refrigeración y climatización para infraestructura crítica.',
          'Monitoreo de parámetros eléctricos y condiciones ambientales.',
          'Planes de continuidad para minimizar cortes y tiempos fuera de servicio.'
        ],
        footer: 'Enfocado en empresas que no pueden detener sus operaciones por fallas de energía o clima.',
        technologies: ['UPS', 'Climatización', 'Distribución eléctrica', 'Monitoreo', 'Tableros', 'Generadores']
      },
      {
        icon: <Laptop className="size-12" />,
        name: 'Microinformática',
        description: 'Equipamos a tus usuarios finales con dispositivos confiables y fáciles de administrar.',
        bullets: [
          'Notebooks, desktops, workstations y thin clients corporativos.',
          'Equipos reforzados y tablets rugerizadas para campo, planta o entornos exigentes.',
          'Gestión de stock, imágenes estándar y políticas de renovación de parque.',
          'Servicios de configuración, enrolamiento y soporte para tu mesa de ayuda.'
        ],
        footer: 'Perfecto para organizaciones que necesitan estandarizar su parque de equipos y reducir costos de soporte.',
        technologies: ['Notebooks', 'Desktops', 'Tablets rugerizadas', 'Thin clients', 'Workstations', 'Gestión de parque']
      },
      {
        icon: <Cable className="size-12" />,
        name: 'Cableado estructurado & Obras tecnológicas',
        description: 'Diseñamos e implementamos redes físicas de datos, voz y video — en cobre y fibra óptica — incluyendo la obra tecnológica y civil necesaria para dejar cada punto listo para operar.',
        bullets: [
          'Relevamiento de planos y diseño de la red física para oficinas, plantas, depósitos y campus.',
          'Tendido y canalización de cableado UTP y fibra óptica, racks, patch panels y salas de comunicaciones.',
          'Fusión, medición y certificación de enlaces utilizando tecnología Fluke para garantizar desempeño y garantía de fabricante.',
          'Documentación "as built", etiquetado y esquema de puertos para facilitar futuras expansiones y mantenimiento.'
        ],
        footer: 'Fundamental para proyectos de construcción, ampliación o renovación de infraestructura física de red.',
        technologies: ['UTP Cat6 / Cat6A', 'Fibra óptica', 'Racks & patch panels', 'Canalización & obra civil', 'Certificación Fluke']
      },
      {
        icon: <Cloud className="size-12" />,
        name: 'Software & Soluciones Cloud',
        description: 'Acompañamos a tu organización en la seleccin, licenciamiento e implementación de plataformas de software y servicios en la nube, alineados a seguridad, costos y productividad.',
        bullets: [
          'Licenciamiento, despliegue y soporte de suites de productividad y colaboración empresarial (por ejemplo, Microsoft 365).',
          'Diseño e implementación de cargas en nubes públicas y privadas alineadas a las políticas de seguridad y cumplimiento de la organización.',
          'Servicios de backup, continuidad operativa y recuperación ante desastres basados en la nube.',
          'Monitoreo, optimización de consumo y gobierno de servicios cloud para controlar costos y performance.'
        ],
        footer: 'Para empresas que buscan aprovechar la nube de forma estratégica, sin perder control sobre costos y seguridad.',
        technologies: ['Productividad & colaboración', 'Nube pública / privada', 'Backup cloud', 'DRaaS', 'Gestión de licencias']
      }
    ];

    const currentService = servicios[selectedService];

    return (
      <section className="py-24 px-6 lg:px-12 bg-neutral-50" ref={ref}>
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="text-sm font-bold text-[#E94E1B] mb-3 uppercase tracking-wide">
              Servicios y soluciones
            </div>
            <h2 className="text-[44px] text-[#282327] mb-6 leading-[1.15] tracking-tight">
              Elegí un módulo para ver el detalle completo
            </h2>
          </motion.div>

          {/* Desktop: Nav oscuro izquierda + Card derecha */}
          <div className="hidden lg:grid lg:grid-cols-[340px_1fr] gap-8">
            {/* Nav vertical - light panel con tarjetas suaves */}
            <div
              className="rounded-[28px] p-5"
              style={{
                background: '#FFF5ED',
                boxShadow: '0 4px 24px rgba(40, 35, 39, 0.06), 0 1px 4px rgba(40, 35, 39, 0.04)',
                border: '1px solid #E8D8C8',
                height: 'fit-content'
              }}
            >
              <div className="space-y-3">
                {servicios.map((servicio, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedService(idx)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="w-full group"
                  >
                    <motion.div
                      className="flex items-center gap-3 px-4 py-3.5 rounded-[18px] transition-all duration-300 text-left"
                      style={{
                        background: selectedService === idx ? '#F56E2A' : '#FFF9F4',
                        boxShadow: selectedService === idx
                          ? '0 4px 16px rgba(245, 110, 42, 0.25), 0 1px 4px rgba(245, 110, 42, 0.15)'
                          : '0 1px 3px rgba(40, 35, 39, 0.04)',
                        border: selectedService === idx
                          ? '1px solid rgba(245, 110, 42, 0.3)'
                          : '1px solid #E8D8C8',
                        borderLeft: selectedService === idx
                          ? '3px solid #E94E1B'
                          : '3px solid #F6A46A'
                      }}
                      whileHover={{
                        scale: selectedService === idx ? 1 : 1.01,
                        boxShadow: selectedService === idx
                          ? '0 4px 16px rgba(245, 110, 42, 0.25), 0 1px 4px rgba(245, 110, 42, 0.15)'
                          : '0 2px 8px rgba(40, 35, 39, 0.08)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className="size-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: selectedService === idx ? 'rgba(255, 255, 255, 0.25)' : '#F56E2A',
                          color: 'white'
                        }}
                      >
                        {React.cloneElement(servicio.icon, { className: 'size-5' })}
                      </div>
                      <span
                        className="text-[13px] font-bold leading-tight"
                        style={{
                          color: selectedService === idx ? 'white' : '#2A2A2A'
                        }}
                      >
                        {servicio.name}
                      </span>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Card de detalle - fondo blanco limpio */}
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white border border-neutral-200 rounded-[32px] p-10 shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-8 pb-8 border-b border-neutral-200">
                <div
                  className="size-20 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                    boxShadow: '0 8px 20px rgba(233, 78, 27, 0.25)'
                  }}
                >
                  {currentService.icon}
                </div>
                <div>
                  <h3 className="text-[28px] font-semibold text-[#282327] mb-3 leading-tight">
                    {currentService.name}
                  </h3>
                  <p className="text-[16px] text-neutral-600 leading-relaxed">
                    {currentService.description}
                  </p>
                </div>
              </div>

              {/* Bullets */}
              <div className="mb-8">
                <div className="space-y-4">
                  {currentService.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                      <p className="text-[15px] text-neutral-700 leading-[1.7]">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-[13px] font-bold text-neutral-500 uppercase tracking-wide mb-3">
                  Tecnologías típicas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full text-[13px] font-medium text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-neutral-200">
                <p className="text-[13px] text-neutral-600 italic leading-[1.7]">
                  {currentService.footer}
                </p>

                {/* Botón "Ver detalle completo" para todos los servicios con páginas */}
                {(selectedService === 0 || selectedService === 1 || selectedService === 2 || selectedService === 3 || selectedService === 4 || selectedService === 5 || selectedService === 6) && (
                  <motion.a
                    href={
                      selectedService === 0 ? '#servicios/infraestructura-it-data-center' :
                        selectedService === 1 ? '#servicios/redes-conectividad' :
                          selectedService === 2 ? '#servicios/team-collaboration' :
                            selectedService === 3 ? '#servicios/videoseguridad-analitica' :
                              selectedService === 4 ? '#servicios/energia-continuidad' :
                                selectedService === 5 ? '#servicios/microinformatica' :
                                  '#servicios/cableado-estructurado-obras-tecnologicas'
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 mt-6 w-full px-6 py-3 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 shadow-md hover:shadow-lg group"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '14px'
                    }}
                  >
                    Ver detalle completo
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Mobile: Chips horizontales + Card abajo */}
          <div className="block lg:hidden">
            <div className="flex gap-3 mb-8 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
              {servicios.map((servicio, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedService(idx)}
                  className="flex-shrink-0"
                >
                  <div
                    className={`
                      px-4 py-3 rounded-[18px] transition-all duration-300 min-w-[160px]
                    `}
                    style={{
                      background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                      boxShadow: selectedService === idx
                        ? '0 8px 24px rgba(233, 78, 27, 0.4), inset 0 2px 6px rgba(255, 255, 255, 0.25)'
                        : '0 4px 16px rgba(233, 78, 27, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                      opacity: selectedService === idx ? 1 : 0.85,
                      border: selectedService === idx ? '2px solid rgba(255, 255, 255, 0.3)' : 'none'
                    }}
                  >
                    <div
                      className="size-8 rounded-xl flex items-center justify-center mb-2 mx-auto text-white"
                      style={{
                        background: 'rgba(255, 255, 255, 0.18)'
                      }}
                    >
                      {React.cloneElement(servicio.icon, { className: 'size-5' })}
                    </div>
                    <span className="text-[12px] font-bold block text-center leading-tight text-white">
                      {servicio.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-lg"
            >
              <div className="text-center mb-6 pb-6 border-b border-neutral-200">
                <div
                  className="size-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                    boxShadow: '0 6px 16px rgba(233, 78, 27, 0.25)'
                  }}
                >
                  {React.cloneElement(currentService.icon, { className: 'size-10' })}
                </div>
                <h3 className="text-[22px] font-semibold text-[#282327] mb-3 leading-tight">
                  {currentService.name}
                </h3>
                <p className="text-[14px] text-neutral-600 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              <div className="mb-6 space-y-3">
                {currentService.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <p className="text-[13px] text-neutral-700 leading-[1.7]">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-[13px] font-bold text-neutral-500 uppercase tracking-wide mb-3">
                  Tecnologías típicas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full text-[11px] font-medium text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-neutral-200">
                <p className="text-[13px] text-neutral-600 italic leading-[1.7]">
                  {currentService.footer}
                </p>

                {/* Botón "Ver detalle completo" para todos los servicios con páginas */}
                {(selectedService === 0 || selectedService === 1 || selectedService === 2 || selectedService === 3 || selectedService === 4 || selectedService === 5 || selectedService === 6) && (
                  <motion.a
                    href={
                      selectedService === 0 ? '#servicios/infraestructura-it-data-center' :
                        selectedService === 1 ? '#servicios/redes-conectividad' :
                          selectedService === 2 ? '#servicios/team-collaboration' :
                            selectedService === 3 ? '#servicios/videoseguridad-analitica' :
                              selectedService === 4 ? '#servicios/energia-continuidad' :
                                selectedService === 5 ? '#servicios/microinformatica' :
                                  '#servicios/cableado-estructurado-obras-tecnologicas'
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 mt-6 w-full px-6 py-3 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 shadow-md hover:shadow-lg group"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '14px'
                    }}
                  >
                    Ver detalle completo
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    );
  }
);

function CTAFinalServicios({ onOpenModal }: { onOpenModal: () => void }) {
  const handleWhatsApp = () => {
    const message = "Hola Trendit 👋 Quiero consultar por servicios. ¿Podemos coordinar una reunión? (Página: Servicios)";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-[1140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[32px] md:rounded-[40px] overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1a1618 0%, #242127 50%, #1e1b20 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* Animated gradient blob */}
          <motion.div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-20"
            style={{
              background: 'radial-gradient(circle, #E94E1B 0%, #F56E2A 50%, transparent 100%)'
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[100px] opacity-15"
            style={{
              background: 'radial-gradient(circle, #E94E1B 0%, #F56E2A 50%, transparent 100%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">

            {/* Heading */}
            <h2
              className="text-[28px] sm:text-[32px] md:text-[42px] lg:text-[48px] text-white mb-4 md:mb-5 lg:mb-6 leading-[1.1] tracking-tight text-center max-w-[800px] mx-auto"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              ¿Planificando una nueva etapa en tu infraestructura?
            </h2>

            {/* Subtitle */}
            <p
              className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] text-white/75 mb-8 md:mb-10 lg:mb-12 leading-[1.6] text-center max-w-[680px] mx-auto"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Ya sea que estés abriendo una nueva sede, modernizando tu data center o mejorando la colaboración de tu equipo, podemos ayudarte a bajar el proyecto a tierra.
            </p>

            {/* CTA Actions - Simplified 2 buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[600px] mx-auto">

              {/* Primary CTA Button - Agendar Reunión */}
              <Button
                size="lg"
                onClick={onOpenModal}
                className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-8 md:px-10 h-[54px] md:h-[58px] w-full sm:w-auto sm:flex-1 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                style={{
                  borderRadius: '14px',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  boxShadow: '0 12px 32px rgba(233, 78, 27, 0.35), 0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                Agendar reunión
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Secondary CTA Button - WhatsApp */}
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsApp}
                className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 md:px-10 h-[54px] md:h-[58px] w-full sm:w-auto sm:flex-1 transition-all duration-300 group backdrop-blur-sm"
                style={{
                  borderRadius: '14px',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <MessageCircle className="mr-2 size-5 group-hover:scale-110 transition-transform" />
                Escribir por WhatsApp
              </Button>
            </div>

            {/* Helper text */}
            <p
              className="text-center text-white/50 text-[13px] sm:text-[14px] mt-6"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Respuesta en horario laboral • Sin compromiso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
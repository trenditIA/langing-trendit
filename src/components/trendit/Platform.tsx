import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { 
  Server, 
  Network, 
  Video, 
  Zap, 
  Users, 
  Wrench, 
  ArrowRight,
  Search,
  Pencil,
  Rocket,
  Settings,
  ChevronDown,
  Monitor,
  Cable,
  Cloud,
  Package
} from 'lucide-react';

export function Platform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      title: 'Entendemos tu realidad',
      description: 'Analizamos tu entorno, riesgos y objetivos de negocio para definir el punto de partida correcto.',
      icon: <Search className="size-6" />,
    },
    {
      title: 'Diseñamos la arquitectura ideal',
      description: 'Combinamos data center, redes, colaboración, videoseguridad y energía en una solución a tu medida.',
      icon: <Pencil className="size-6" />,
    },
    {
      title: 'Implementamos sin frenar tu operación',
      description: 'Planificamos el despliegue, coordinamos equipos y ejecutamos con procesos certificados.',
      icon: <Rocket className="size-6" />,
    },
    {
      title: 'Mejoramos y volvemos a empezar',
      description: 'Monitoreamos, damos soporte y proponemos mejoras continuas para que tu infraestructura siempre responda.',
      icon: <Settings className="size-6" />,
    },
  ];

  const services = [
    {
      id: 'infraestructura',
      title: 'Infraestructura IT & Data Center',
      tagline: 'Centros de datos on-premise, híbridos y edge.',
      summary: 'Diseñamos y operamos centros de datos on-premise, híbridos y edge preparados para crecer.',
      icon: <Server className="size-6" />,
      isCore: true,
      features: [
        {
          title: 'Arquitecturas de servidores',
          description: 'Plataformas de servidores, storage, virtualización y backup para cargas de misión crítica.'
        },
        {
          title: 'Modernización de data centers',
          description: 'Proyectos de consolidación, migración y modernización de data centers existentes.'
        },
        {
          title: 'Alta disponibilidad',
          description: 'Diseño de alta disponibilidad, monitoreo y continuidad operativa extremo a extremo.'
        }
      ],
      brands: ['Lenovo', 'Dell', 'HPE', 'IBM', 'Microsoft', 'VMware']
    },
    {
      id: 'redes',
      title: 'Redes & Conectividad',
      tagline: 'Switching, routing, SD-WAN y Wi-Fi enterprise.',
      summary: 'Conectamos sedes, plantas y usuarios con redes seguras, escalables y fáciles de administrar.',
      icon: <Network className="size-6" />,
      isCore: false,
      features: [
        {
          title: 'Switching y routing',
          description: 'Switching, routing y SD-WAN enterprise para entornos críticos.'
        },
        {
          title: 'Seguridad de red',
          description: 'Segmentación, políticas de seguridad y control de tráfico para proteger tu infraestructura.'
        },
        {
          title: 'Diseño de redes',
          description: 'Diseño de redes para oficinas, plantas industriales y campus con cobertura robusta.'
        }
      ],
      brands: ['Cisco', 'HPE Aruba', 'Ubiquiti', 'TP-Link Omada', 'Mikrotik']
    },
    {
      id: 'collaboration',
      title: 'Team Collaboration',
      tagline: 'Espacios de trabajo híbridos y videocolaboración.',
      summary: 'Creamos espacios de trabajo híbridos donde audio, video y contenido fluyen sin fricción.',
      icon: <Users className="size-6" />,
      isCore: false,
      features: [
        {
          title: 'Salas de videoconferencia',
          description: 'Salas inteligentes para Teams, Zoom y otras plataformas de colaboración.'
        },
        {
          title: 'Equipamiento certificado',
          description: 'Cámaras, micrófonos, barras de video y periféricos certificados para experiencias profesionales.'
        },
        {
          title: 'Comunicación unificada',
          description: 'Integración con telefonía, calendarios y herramientas de colaboración en una misma experiencia.'
        }
      ],
      brands: ['Logitech', 'Jabra', 'Poly/HP', 'Microsoft', 'Lenovo']
    },
    {
      id: 'videoseguridad',
      title: 'Videoseguridad & Analítica',
      tagline: 'Cámaras IP, analítica de video e integración.',
      summary: 'Protegemos personas y activos con videovigilancia IP e inteligencia de video.',
      icon: <Video className="size-6" />,
      isCore: false,
      features: [
        {
          title: 'Cámaras IP y grabación',
          description: 'Cámaras IP, NVR y almacenamiento seguro para evidencia crítica.'
        },
        {
          title: 'Analítica con IA',
          description: 'Analítica de video con IA para seguridad, gestión de procesos y experiencia de cliente.'
        },
        {
          title: 'Integración de sistemas',
          description: 'Integración con control de accesos, alarmas y plataformas de monitoreo centralizado.'
        }
      ],
      brands: ['Axis', 'Hikvision', 'Dahua', 'Hanwha', 'Milestone']
    },
    {
      id: 'energia',
      title: 'Energía & Continuidad',
      tagline: 'Soluciones de energía para continuidad operativa.',
      summary: 'Diseñamos soluciones de energía que mantienen tu infraestructura en marcha, siempre.',
      icon: <Zap className="size-6" />,
      isCore: false,
      features: [
        {
          title: 'UPS y generación',
          description: 'Sistemas de UPS, generación y distribución eléctrica para cargas críticas de IT.'
        },
        {
          title: 'Gestión inteligente de energía',
          description: 'Tableros, bypass, monitoreo y gestión inteligente de energía.'
        },
        {
          title: 'Continuidad operativa',
          description: 'Proyectos de continuidad operativa para data centers y entornos industriales.'
        }
      ],
      brands: ['APC', 'Eaton', 'Vertiv', 'Schneider Electric']
    },
    {
      id: 'microinformatica',
      title: 'Microinformática & End User Computing',
      tagline: 'Dispositivos y servicios para usuarios finales.',
      summary: 'Equipos y servicios para que tus usuarios trabajen mejor desde cualquier lugar.',
      icon: <Monitor className="size-6" />,
      isCore: false,
      features: [
        {
          title: 'Equipos de usuario final',
          description: 'PCs, notebooks, thin clients y periféricos corporativos.'
        },
        {
          title: 'Gestión y soporte',
          description: 'Instalación, configuración, seguridad y soporte remoto.'
        },
        {
          title: 'Ciclo de vida del puesto',
          description: 'Renovación tecnológica, reciclaje responsable y gestión de garantías.'
        }
      ],
      brands: ['Lenovo', 'Dell', 'HP', 'Microsoft']
    },
    {
      id: 'cableado',
      title: 'Cableado estructurado & Obras tecnológicas',
      tagline: 'Redes físicas, fibra óptica y obra civil asociada.',
      summary: 'Infraestructura física certificada en cobre, fibra óptica y obras civiles asociadas.',
      icon: <Cable className="size-6" />,
      isCore: false,
      features: [
        {
          title: 'Redes físicas y fibra óptica',
          description: 'Diseño e instalación de cableado estructurado, fibra óptica y canalizaciones.'
        },
        {
          title: 'Certificación y mediciones',
          description: 'Certificación de datos con tecnología Fluke, uso de OTDR y herramientas de medición avanzadas.'
        },
        {
          title: 'Obras y seguridad',
          description: 'Obras civiles asociadas, vehículos propios y ejecución alineada a normas de seguridad e higiene.'
        }
      ],
      brands: ['Furukawa']
    },
    {
      id: 'software',
      title: 'Software & Soluciones Cloud',
      tagline: 'Software, licenciamiento y servicios en la nube.',
      summary: 'Software de negocio y servicios cloud con licenciamiento claro y soporte cercano.',
      icon: <Cloud className="size-6" />,
      isCore: false,
      features: [
        {
          title: 'Licenciamiento y suscripciones',
          description: 'Gestión de licencias Microsoft 365, Azure y otras plataformas SaaS.'
        },
        {
          title: 'Soluciones en la nube',
          description: 'Implementación de servicios en Azure, AWS y nubes híbridas.'
        },
        {
          title: 'Gestión y optimización',
          description: 'Administración, mejora de costos y optimización del uso de la nube.'
        }
      ],
      brands: ['Microsoft', 'Azure', 'AWS']
    },
    {
      id: 'profesionales',
      title: 'Servicios Profesionales',
      tagline: 'Consultoría, implementación y soporte especializado.',
      summary: 'Consultoría, implementación y soporte especializado para proyectos de infraestructura.',
      icon: <Wrench className="size-6" />,
      isCore: false,
      features: [
        {
          title: 'Consultoría y diseño',
          description: 'Evaluación de arquitectura, roadmaps tecnológicos y mejores prácticas.'
        },
        {
          title: 'Implementación y project management',
          description: 'Gestión integral de proyectos de infraestructura, desde el kickoff hasta el go-live.'
        },
        {
          title: 'Soporte y servicios gestionados',
          description: 'Soporte especializado, monitoreo y servicios gestionados a medida.'
        }
      ],
      brands: ['Servicios Trendit', 'Partners estratégicos']
    },
  ];

  const [activeService, setActiveService] = useState('infraestructura');

  return (
    <section ref={ref} id="platform" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-4xl"
        >
          <h2 className="text-[40px] text-[#282327] mb-5">
            Trendit: tu aliado estratégico en infraestructura IT.
          </h2>
          <p className="text-lg text-neutral-600 leading-[1.5]">
            Te acompañamos en todo el ciclo de vida de tu infraestructura: entendemos tu realidad, 
            diseñamos la mejor solución, la implementamos sin frenar tu operación y la mejoramos de forma continua. 
            No vendemos cajas: nos involucramos en tus decisiones de negocio.
          </p>
        </motion.div>

        {/* BLOQUE A - Steps / Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          {/* Section label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="size-2 bg-[#E94E1B] rounded-full" />
            <span className="text-sm text-[#E94E1B] tracking-wide uppercase">
              Cómo te acompañamos, paso a paso
            </span>
          </div>

          {/* Timeline container with soft background */}
          <div className="bg-gradient-to-br from-neutral-50 to-orange-50/30 rounded-3xl p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
              {/* Connector line - desktop only, positioned at the circle level */}
              <div className="hidden lg:block absolute h-[2px] bg-gradient-to-r from-[#E94E1B] via-[#E94E1B]/60 to-neutral-300 rounded-full" style={{ top: '28px', left: '8%', right: '8%' }} />
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <StepCard {...step} number={index + 1} isFirst={index === 0} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BLOQUE B - Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Section title */}
          <div className="mb-10">
            <h2 className="text-[40px] text-[#282327]">
              Áreas de servicio
            </h2>
          </div>

          {/* Two-column layout: left menu + right detail card */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT COLUMN - Vertical service menu (Desktop) */}
            <div className="hidden lg:block lg:w-[32%]">
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`
                      w-full flex items-start gap-4 p-5 transition-all duration-300 text-left border-b border-neutral-100 last:border-b-0 relative
                      ${activeService === service.id 
                        ? 'bg-[#E94E1B] text-white shadow-lg' 
                        : 'bg-white text-[#282327] hover:bg-orange-50/50'
                      }
                    `}
                  >
                    {/* Active indicator - left border */}
                    {activeService === service.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d04419]" />
                    )}
                    
                    {/* Icon */}
                    <div className={`
                      size-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all
                      ${activeService === service.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-neutral-100 text-[#E94E1B]'
                      }
                    `}>
                      {service.icon}
                    </div>
                    
                    {/* Text */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h4 className={`text-sm mb-1 leading-tight ${activeService === service.id ? 'text-white' : 'text-[#282327]'}`}>
                        {service.title}
                      </h4>
                      <p className={`text-xs leading-snug ${activeService === service.id ? 'text-white/85' : 'text-neutral-500'}`}>
                        {service.tagline}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* MOBILE/TABLET - Horizontal scrolling menu */}
            <div className="lg:hidden mb-6">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`
                      flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-300
                      ${activeService === service.id 
                        ? 'bg-[#E94E1B] text-white shadow-md' 
                        : 'bg-white border border-neutral-200 text-neutral-700'
                      }
                    `}
                  >
                    <span className={activeService === service.id ? 'text-white' : 'text-[#E94E1B]'}>
                      {service.icon}
                    </span>
                    <span className="text-sm">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN - Detail card */}
            <div className="flex-1 lg:w-[68%]">
              <ServiceDetailCardTwoColumn 
                service={services.find(s => s.id === activeService)!}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ 
  title, 
  description, 
  icon,
  number,
  isFirst = false
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  number: number;
  isFirst?: boolean;
}) {
  return (
    <div className={`
      bg-white border rounded-xl p-5 hover:border-[#E94E1B] transition-all duration-300 h-full flex flex-col relative z-10
      ${isFirst 
        ? 'border-[#E94E1B]/70 shadow-lg shadow-[#E94E1B]/15 bg-gradient-to-br from-orange-50/40 to-white' 
        : 'border-neutral-300 shadow-sm hover:shadow-md'
      }
    `}>
      {/* Step number badge - larger, centered at top */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#E94E1B] text-white size-14 rounded-full flex items-center justify-center shadow-lg border-[5px] border-white z-20">
        <span className="text-xl">{number}</span>
      </div>
      
      {/* Tighter spacing */}
      <div className="mt-8 mb-3 text-[#E94E1B] flex justify-center">
        {icon}
      </div>
      
      <h3 className="text-[17px] text-[#282327] mb-2 text-center leading-tight">
        {title}
      </h3>
      
      <p className="text-sm text-neutral-600 leading-[1.35] text-center">
        {description}
      </p>
    </div>
  );
}

function ServiceDetailCardTwoColumn({ 
  service
}: { 
  service: {
    title: string; 
    tagline: string;
    summary: string;
    icon: React.ReactNode;
    isCore?: boolean;
    features: { title: string, description: string }[];
    brands: string[];
  };
}) {
  return (
    <div className={`
      bg-white rounded-2xl shadow-lg border transition-all duration-300
      ${service.isCore ? 'border-[#E94E1B]/40 shadow-[#E94E1B]/10' : 'border-neutral-200'}
    `}>
      {/* Header row: icon + title + CORE tag */}
      <div className="px-8 pt-8 pb-6 border-b border-neutral-100">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            {/* Icon */}
            <div className={`
              size-14 rounded-lg flex items-center justify-center flex-shrink-0
              ${service.isCore 
                ? 'bg-[#E94E1B] text-white shadow-md' 
                : 'bg-neutral-100 text-[#E94E1B]'
              }
            `}>
              {service.icon}
            </div>
            
            {/* Title */}
            <div className="flex-1">
              <h3 className="text-2xl text-[#282327] leading-tight">
                {service.title}
              </h3>
            </div>
          </div>
          
          {/* CORE tag */}
          {service.isCore && (
            <div className="bg-[#E94E1B] text-white px-3 py-1.5 rounded-full text-xs tracking-wide flex-shrink-0">
              CORE
            </div>
          )}
        </div>
      </div>
      
      {/* Short description - max 70% width */}
      <div className="px-8 pt-6 pb-6">
        <p className="text-base text-neutral-600 leading-relaxed max-w-[70%]">
          {service.summary}
        </p>
      </div>
      
      {/* Feature grid - 3 columns */}
      <div className="px-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              {/* Small icon */}
              <div className="size-9 rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 border border-[#E94E1B]/20 flex items-center justify-center mb-3">
                <Package className="size-4 text-[#E94E1B]" />
              </div>
              
              {/* Title + description */}
              <h5 className="text-sm text-[#282327] mb-1.5 leading-tight">
                {feature.title}
              </h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Marcas aliadas - subtle background strip */}
      <div className="px-8 py-5 bg-neutral-50 border-t border-neutral-100">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <span className="text-xs uppercase tracking-wider text-neutral-500 block mb-3">
              Marcas aliadas
            </span>
            <div className="flex flex-wrap gap-2">
              {service.brands.map((brand, index) => (
                <div 
                  key={index} 
                  className="px-3 py-1.5 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 hover:border-[#E94E1B]/40 hover:shadow-sm transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA row */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a 
              href="#" 
              className="inline-flex items-center text-sm text-[#E94E1B] hover:text-[#E94E1B]/80 transition-colors group/link whitespace-nowrap"
            >
              Ver más
              <ArrowRight className="ml-1 size-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
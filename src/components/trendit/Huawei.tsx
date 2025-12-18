import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  CheckCircle2,
  Network,
  Wifi,
  Radio,
  Cable,
  Video,
  HardDrive,
  Package,
  Building2,
  GraduationCap,
  Factory,
  ShoppingBag,
  MessageCircle,
  ChevronRight,
  Shield,
  Zap,
  Users,
  Eye,
  Settings,
  TrendingUp,
  Lock,
  Globe,
  Server,
  Award,
  Clock,
  Boxes,
  ChevronDown
} from 'lucide-react';
import { Button } from '../ui/button';
import { AgendarReunionHuaweiModal } from './AgendarReunionHuaweiModal';

export function Huawei() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [initialArea, setInitialArea] = React.useState<string>('');

  const handleOpenModal = (area?: string) => {
    if (area) {
      setInitialArea(area);
    }
    setIsModalOpen(true);
  };

  const handleWhatsApp = () => {
    const message = "Hola Trendit, quiero asesoramiento sobre Huawei.\nÁrea: [área de interés]\nEmpresa: [nombre empresa]\nSedes: [cantidad]\nObjetivo: [contexto]\n¿Podemos agendar una reunión?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <HuaweiHero 
        onOpenModal={handleOpenModal} 
        onWhatsApp={handleWhatsApp}
        scrollToSection={scrollToSection}
      />
      <QueResolvemos />
      <Soluciones onOpenModal={handleOpenModal} />
      <Verticales />
      <ComoTrabajamos />
      <FAQ />
      <CTAFinal onOpenModal={handleOpenModal} onWhatsApp={handleWhatsApp} />
      
      <AgendarReunionHuaweiModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        initialArea={initialArea}
      />
    </div>
  );
}

interface HuaweiHeroProps {
  onOpenModal: () => void;
  onWhatsApp: () => void;
  scrollToSection: (id: string) => void;
}

function HuaweiHero({ onOpenModal, onWhatsApp, scrollToSection }: HuaweiHeroProps) {
  const navPills = [
    { label: 'Qué resolvemos', id: 'que-resolvemos' },
    { label: 'Soluciones', id: 'soluciones' },
    { label: 'Verticales', id: 'verticales' },
    { label: 'Cómo trabajamos', id: 'como-trabajamos' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Agendar / Cotizar', id: 'cta' },
  ];

  const chips = [
    'Enterprise Network',
    'Wi-Fi & Campus',
    'Wireless Industrial',
    'Optical Network',
    'Collaboration',
    'Storage',
    'eKit',
    'Retail',
    'Educación',
    'Industria'
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>

      {/* Static glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E94E1B] rounded-full blur-[140px] opacity-20" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#E94E1B] rounded-full blur-[140px] opacity-15" />

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.65fr] gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Columna izquierda - Contenido */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-6 text-[13px]">
              <a 
                href="#home" 
                className="text-neutral-400 hover:text-white transition-colors"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                Inicio
              </a>
              <ChevronRight className="size-3.5 text-neutral-500" />
              <a 
                href="#marcas-partners" 
                className="text-neutral-400 hover:text-white transition-colors"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                Marcas & Partners
              </a>
              <ChevronRight className="size-3.5 text-neutral-500" />
              <span 
                className="text-white"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
              >
                Huawei
              </span>
            </nav>

            {/* H1 */}
            <h1 
              className="text-[40px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[58px] leading-[1.08] mb-6 tracking-tight text-white max-w-[900px]"
              style={{
                fontFamily: 'Campton, sans-serif',
                fontWeight: 700
              }}
            >
              Huawei en Trendit: redes, conectividad, fibra óptica, colaboración y storage para organizaciones
            </h1>

            {/* Subtitle */}
            <p 
              className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.65] mb-8 text-neutral-300 max-w-[680px]"
              style={{
                fontFamily: 'Campton, sans-serif',
                fontWeight: 400
              }}
            >
              Infraestructura enterprise para multi-sede, operación crítica y crecimiento escalable. Diseño, implementación y soporte B4B.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg"
                onClick={onOpenModal}
                className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-8 h-[56px] shadow-lg shadow-[#E94E1B]/30 group transition-all duration-300 w-full sm:w-auto"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                Agendar reunión
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={onWhatsApp}
                className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm w-full sm:w-auto transition-all duration-300 h-[56px]"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                Escribinos por WhatsApp
              </Button>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 lg:gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {chips.map((chip, idx) => (
                <span 
                  key={idx}
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300 whitespace-nowrap"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Columna derecha - Navegación rápida */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6">
            <h3 
              className="text-[17px] text-white mb-4"
              style={{
                fontFamily: 'Campton, sans-serif',
                fontWeight: 600
              }}
            >
              Navegación rápida
            </h3>
            
            <div className="space-y-2">
              {navPills.map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(pill.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-[14px] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-between group"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {pill.label}
                  <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
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

function QueResolvemos() {
  const puntos = [
    {
      icon: <Network className="size-6" />,
      title: 'Conectividad segura multi-sede',
      desc: 'Campus, sucursales, depósitos y plantas con networking enterprise'
    },
    {
      icon: <Zap className="size-6" />,
      title: 'Rendimiento y disponibilidad',
      desc: 'Infraestructura crítica para operaciones 24/7 sin interrupciones'
    },
    {
      icon: <Eye className="size-6" />,
      title: 'Observabilidad centralizada',
      desc: 'Gestión unificada y visibilidad completa de tu infraestructura IT'
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: 'Escalabilidad sin rediseño',
      desc: 'Arquitectura que crece con tu organización de forma orgánica'
    }
  ];

  return (
    <section id="que-resolvemos" className="py-16 md:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#282327] mb-4">
            Qué resolvemos con Huawei
          </h2>
          <p className="text-neutral-600 max-w-[720px] mx-auto">
            Infraestructura de red, conectividad y almacenamiento diseñada para organizaciones que operan en múltiples sedes y requieren disponibilidad crítica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {puntos.map((punto, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 hover:shadow-lg hover:shadow-[#E94E1B]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E94E1B]/10 text-[#E94E1B] flex items-center justify-center mb-4">
                {punto.icon}
              </div>
              <h3 className="text-[#282327] mb-2 text-[17px]">
                {punto.title}
              </h3>
              <p className="text-neutral-600 text-[15px]">
                {punto.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SolucionesProps {
  onOpenModal: (area: string) => void;
}

function Soluciones({ onOpenModal }: SolucionesProps) {
  const soluciones = [
    {
      icon: <Network className="size-10" />,
      title: 'Enterprise Network',
      subtitle: 'Campus & Branch',
      desc: 'Switching, routing y seguridad para conectividad de campus y sucursales enterprise.',
      ideal: 'Organizaciones multi-sede, campus corporativos, plantas industriales',
      bullets: [
        'Switches y routers de alto rendimiento',
        'Segmentación y políticas de seguridad',
        'Redundancia y alta disponibilidad',
        'Gestión centralizada multi-sitio',
        'Integración con SD-WAN'
      ],
      area: 'Enterprise Network'
    },
    {
      icon: <Wifi className="size-10" />,
      title: 'Wi-Fi & Campus',
      subtitle: 'Conectividad inalámbrica',
      desc: 'Wi-Fi corporativo de alta capacidad con cobertura, roaming y seguridad enterprise.',
      ideal: 'Oficinas, campus, espacios de alta densidad, educación',
      bullets: [
        'APs de última generación (Wi-Fi 6/6E)',
        'Cobertura uniforme y roaming seamless',
        'Gestión de capacidad y QoS',
        'Autenticación 802.1X y políticas',
        'Observabilidad y troubleshooting'
      ],
      area: 'Wi-Fi & Campus'
    },
    {
      icon: <Radio className="size-10" />,
      title: 'Wireless Industrial',
      subtitle: 'Conectividad crítica',
      desc: 'Conectividad wireless para entornos industriales: planta, minería, energía, logística.',
      ideal: 'Operaciones críticas, plantas, almacenes automatizados, minería',
      bullets: [
        'Equipos ruggedizados para ambientes extremos',
        'Baja latencia y alta disponibilidad',
        'Seguridad industrial (OT)',
        'Integración con sistemas SCADA/MES',
        'Soporta protocolos industriales'
      ],
      area: 'Wireless Industrial'
    },
    {
      icon: <Cable className="size-10" />,
      title: 'Optical Network',
      subtitle: 'Backbone de fibra',
      desc: 'Backbone óptico de fibra para campus, enlaces y conectividad de alta capacidad.',
      ideal: 'Campus extensos, enlaces entre edificios, data centers',
      bullets: [
        'Switches y routers ópticos',
        'Enlaces de fibra de alta capacidad',
        'Redundancia y protección de enlaces',
        'Baja latencia y gran ancho de banda',
        'Escalabilidad para crecimiento'
      ],
      area: 'Optical Network'
    },
    {
      icon: <Video className="size-10" />,
      title: 'Enterprise Collaboration',
      subtitle: 'Modern workplace',
      desc: 'Salas de reunión, colaboración y comunicación unificada para organizaciones modernas.',
      ideal: 'Corporativos, sedes con salas de reunión, trabajo híbrido',
      bullets: [
        'Video conferencia de calidad enterprise',
        'Salas equipadas y plug & play',
        'Integración con plataformas cloud',
        'Gestión centralizada de dispositivos',
        'Experiencia de usuario premium'
      ],
      area: 'Enterprise Collaboration'
    },
    {
      icon: <HardDrive className="size-10" />,
      title: 'Storage',
      subtitle: 'Almacenamiento enterprise',
      desc: 'Almacenamiento para workloads críticos, protección de datos y crecimiento orgánico.',
      ideal: 'Data centers, virtualization, bases de datos, backup',
      bullets: [
        'Storage all-flash y híbrido',
        'Alto rendimiento y baja latencia',
        'Protección de datos y snapshots',
        'Escalabilidad sin interrupciones',
        'Integración con VMware, Hyper-V'
      ],
      area: 'Storage'
    },
    {
      icon: <Package className="size-10" />,
      title: 'Huawei eKit',
      subtitle: 'Despliegue ágil SMB',
      desc: 'Oferta estandarizada para organizaciones que necesitan rapidez, costo controlado y estandarización.',
      ideal: 'PyMEs en crecimiento, sucursales nuevas, proyectos rápidos',
      bullets: [
        'Kits predefinidos por escenario',
        'Despliegue rápido (días, no meses)',
        'Costo controlado y predecible',
        'Configuración base lista para producción',
        'Escalable a soluciones enterprise'
      ],
      area: 'Huawei eKit'
    }
  ];

  return (
    <section id="soluciones" className="py-16 md:py-20 lg:py-24 bg-neutral-50 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#282327] mb-4">
            Soluciones Huawei que integramos
          </h2>
          <p className="text-neutral-600 max-w-[720px] mx-auto">
            Portfolio completo de infraestructura de red, conectividad y almacenamiento con foco en enterprise y operación crítica.
          </p>
        </motion.div>

        <div className="space-y-6">
          {soluciones.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 hover:border-[#E94E1B]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-[#E94E1B]/10 text-[#E94E1B] flex items-center justify-center">
                    {sol.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-[#282327] text-[22px] mb-1">
                        {sol.title}
                      </h3>
                      <p className="text-[#E94E1B] text-[15px]">
                        {sol.subtitle}
                      </p>
                    </div>
                    <Button
                      onClick={() => onOpenModal(sol.area)}
                      className="bg-[#E94E1B] hover:bg-[#d94419] text-white whitespace-nowrap"
                      style={{
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Agendar reunión
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                  
                  <p className="text-neutral-700 mb-4">
                    {sol.desc}
                  </p>
                  
                  <div className="bg-neutral-50 rounded-xl p-4 mb-4">
                    <p className="text-[14px] text-neutral-600">
                      <span className="text-[#E94E1B]">Ideal para:</span> {sol.ideal}
                    </p>
                  </div>
                  
                  <ul className="grid md:grid-cols-2 gap-2">
                    {sol.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-2 text-[14px] text-neutral-600">
                        <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Verticales() {
  const casos = [
    {
      icon: <Building2 className="size-8" />,
      title: 'Corporativo & Oficinas',
      desc: 'Conectividad multi-sede, Wi-Fi de alta capacidad, colaboración modern workplace y seguridad enterprise.'
    },
    {
      icon: <Factory className="size-8" />,
      title: 'Industria & Manufactura',
      desc: 'Networking industrial ruggedizado, conectividad OT, wireless para planta y backbone óptico de alta disponibilidad.'
    },
    {
      icon: <GraduationCap className="size-8" />,
      title: 'Educación',
      desc: 'Wi-Fi de alta densidad para campus, gestión centralizada multi-edificio y colaboración en aulas equipadas.'
    },
    {
      icon: <ShoppingBag className="size-8" />,
      title: 'Retail & Logística',
      desc: 'Conectividad multi-sucursal, wireless para almacenes automatizados y seguridad para operaciones críticas.'
    }
  ];

  return (
    <section id="verticales" className="py-16 md:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#282327] mb-4">
            Casos de uso por industria
          </h2>
          <p className="text-neutral-600 max-w-[720px] mx-auto">
            Aplicamos Huawei en sectores con alta exigencia de conectividad, disponibilidad y escalabilidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {casos.map((caso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E94E1B]/10 text-[#E94E1B] flex items-center justify-center mb-4">
                {caso.icon}
              </div>
              <h3 className="text-[#282327] mb-2 text-[19px]">
                {caso.title}
              </h3>
              <p className="text-neutral-600 text-[15px]">
                {caso.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoTrabajamos() {
  const pasos = [
    {
      num: '01',
      title: 'Diagnóstico y relevamiento',
      desc: 'Entendemos tu infraestructura actual, sedes, crecimiento previsto y puntos críticos.'
    },
    {
      num: '02',
      title: 'Diseño y arquitectura',
      desc: 'Diseñamos la solución técnica optimizada para tu operación y escalabilidad futura.'
    },
    {
      num: '03',
      title: 'Implementación certificada',
      desc: 'Despliegue por equipo Trendit certificado, con pruebas y documentación completa.'
    },
    {
      num: '04',
      title: 'Soporte y evolución',
      desc: 'Soporte técnico, mantenimiento preventivo y acompañamiento en la evolución de tu infraestructura.'
    }
  ];

  return (
    <section id="como-trabajamos" className="py-16 md:py-20 lg:py-24 bg-neutral-50 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#282327] mb-4">
            Cómo implementa Trendit
          </h2>
          <p className="text-neutral-600 max-w-[720px] mx-auto">
            Metodología probada en proyectos enterprise multi-sede con enfoque en disponibilidad y transferencia de conocimiento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((paso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-[80px] leading-none text-[#E94E1B]/10 mb-4">
                {paso.num}
              </div>
              <h3 className="text-[#282327] mb-2 text-[17px]">
                {paso.title}
              </h3>
              <p className="text-neutral-600 text-[15px]">
                {paso.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      q: '¿Cuál es el tiempo de entrega para un proyecto Huawei?',
      a: 'Depende del alcance: eKit se puede desplegar en días; proyectos enterprise multi-sede requieren 4-8 semanas entre diseño, procurement e implementación. Te damos timeline preciso en el kickoff.'
    },
    {
      q: '¿Ofrecen soporte post-implementación?',
      a: 'Sí. Ofrecemos contratos de soporte preventivo y correctivo, monitoreo remoto y gestión proactiva de tu infraestructura Huawei con SLAs ajustados a tu operación.'
    },
    {
      q: '¿Puedo integrar Huawei con mi infraestructura existente?',
      a: 'Absolutamente. Diseñamos la integración con tu red actual (Cisco, HPE, otros vendors). Huawei es multivendor-friendly y soporta estándares abiertos.'
    },
    {
      q: '¿Qué diferencia a Trendit en proyectos Huawei?',
      a: 'Equipo certificado, experiencia en proyectos multi-sede complejos, metodología de implementación probada y acompañamiento post-go-live. Enfoque B4B real.'
    },
    {
      q: '¿Ofrecen financiación para proyectos grandes?',
      a: 'Sí. Trabajamos con líneas de financiamiento específicas para proyectos de infraestructura IT. Consultanos por tu caso.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[#282327] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-neutral-600 max-w-[720px] mx-auto">
            Respuestas rápidas sobre proyectos Huawei con Trendit.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <span className="text-[#282327] pr-4">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`size-5 text-[#E94E1B] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-5 text-neutral-600 text-[15px] border-t border-neutral-100 pt-4">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CTAFinalProps {
  onOpenModal: () => void;
  onWhatsApp: () => void;
}

function CTAFinal({ onOpenModal, onWhatsApp }: CTAFinalProps) {
  return (
    <section id="cta" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E94E1B] rounded-full blur-[160px] opacity-20" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-white mb-4">
            ¿Alineamos tu infraestructura Huawei a tu operación?
          </h2>
          <p className="text-neutral-300 text-[17px] max-w-[680px] mx-auto mb-10">
            Diseño + implementación + soporte, con enfoque B4B.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={onOpenModal}
              className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-8 h-[56px] shadow-lg shadow-[#E94E1B]/30 group transition-all duration-300"
              style={{
                borderRadius: '12px',
                fontFamily: 'Campton, sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              Agendar reunión
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={onWhatsApp}
              className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all duration-300 h-[56px]"
              style={{
                borderRadius: '12px',
                fontFamily: 'Campton, sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <MessageCircle className="mr-2 size-5" />
              WhatsApp directo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

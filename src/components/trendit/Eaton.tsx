import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Zap,
  Shield,
  TrendingUp,
  DollarSign,
  Building2,
  Server,
  Factory,
  Hospital,
  ShoppingCart,
  Landmark,
  Droplet,
  MessageCircle,
  X,
  Home,
  CheckCircle2,
  Clock,
  Cpu,
  HardDrive,
  Award,
  Eye,
  Settings,
  Box,
  Battery
} from 'lucide-react';
import { Button } from '../ui/button';

export function Eaton() {
  const whatsappNumber = '5493516013543';
  const whatsappMessage = encodeURIComponent(
    'Hola Trendit, necesito información sobre soluciones Eaton. Mi escenario es: _____. Requiero: _____.'
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
      <Hero scrollToSection={scrollToSection} whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} />
      <QueResolvemos />
      <FamiliasEaton scrollToSection={scrollToSection} />
      <SoftwareMonitoreo />
      <ServiciosTrendit />
      <CasosUsoIndustria />
      <FAQ />
      <CTAWizard whatsappNumber={whatsappNumber} />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="bg-white border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4">
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
          <span className="text-[#282327]">Eaton</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ scrollToSection, whatsappNumber, whatsappMessage }: any) {
  const [selectedTab, setSelectedTab] = useState(0);

  const badges = [
    'Integración end-to-end',
    'Soporte y mantenimiento',
    'Arquitecturas para IT + OT',
    'Respuesta rápida por WhatsApp'
  ];

  const tabs = [
    { id: 0, label: 'Oficina & Telecom' },
    { id: 1, label: 'Sala de servidores / Rack' },
    { id: 2, label: 'Data Center (Trifásico)' },
    { id: 3, label: 'Edificios & Facilities' },
    { id: 4, label: 'Industria & OT' },
    { id: 5, label: 'Automatización (Riel DIN)' }
  ];

  const recommendations = [
    {
      title: 'Si tu escenario es Oficina & Telecom…',
      description: 'Protegé redes, telecom y equipamiento sensible con doble conversión online y una solución costo/beneficio sólida.',
      products: ['Eaton 9E (1–20 kVA)', 'Eaton 9PX (1–22 kVA)']
    },
    {
      title: 'Si tu escenario es Sala de servidores / Rack…',
      description: 'Más potencia real, gestión y eficiencia para racks y micro data centers.',
      products: ['Eaton 9PX', 'Eaton 9SX (15–20 kVA)']
    },
    {
      title: 'Si tu escenario es Data Center (Trifásico)…',
      description: 'Escalabilidad modular y eficiencia para crecer con tu demanda, sin comprometer continuidad.',
      products: ['Eaton 93PM G2 (50–360 kVA)', 'Eaton 91PS/93PS (8–40 kW)']
    },
    {
      title: 'Si tu escenario es Edificios & Facilities…',
      description: 'Menor TCO y huella compacta para instalaciones técnicas y edificios con alta exigencia.',
      products: ['Eaton 93E', 'Eaton 9PX']
    },
    {
      title: 'Si tu escenario es Industria & OT…',
      description: 'Respaldo robusto para ambientes industriales, voltajes exigentes y continuidad operativa.',
      products: ['Eaton 9PHD Industrial', 'Eaton 93E']
    },
    {
      title: 'Si tu escenario es Automatización (Riel DIN)…',
      description: 'Energía confiable para tableros eléctricos, IIoT y líneas automatizadas, con formato compacto y resistente.',
      products: ['Eaton DIN Rail UPS (500–850 VA)']
    }
  ];

  const currentRec = recommendations[selectedTab];

  return (
    <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Background elements - Same as Home */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>

      {/* Static glow - Same as Home */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E94E1B] rounded-full blur-[120px] opacity-20" />

      <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        <div className="max-w-[1200px]">
          <div>
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-white mb-4 md:mb-6">
              Eaton en Trendit: energía segura para operación crítica
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-[1.6] max-w-2xl">
              Diseñamos, dimensionamos e integramos UPS y energía de respaldo Eaton para proteger salas de TI, data centers, operaciones industriales y automatización. Implementación de punta a punta por técnicos Trendit.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
              {badges.map((badge, idx) => (
                <span 
                  key={idx}
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-12">
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-6 md:px-8 group shadow-lg shadow-[#E94E1B]/20 w-full sm:w-auto"
                onClick={() => scrollToSection('cta-wizard')}
              >
                Dimensionar y Cotizar
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

            {/* Selector de necesidad */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                Selector de necesidad
              </h3>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      selectedTab === tab.id
                        ? 'bg-[#E94E1B] text-white shadow-lg'
                        : 'bg-white/10 text-white/70 hover:bg-white/15 border border-white/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recomendación dinámica */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                  Recomendación inmediata
                </h4>
                <p className="text-[#E94E1B] font-medium mb-4 text-sm md:text-base">
                  {currentRec.title}
                </p>
                <p className="text-sm md:text-base text-white/70 mb-6 leading-relaxed">
                  {currentRec.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {currentRec.products.map((product, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection('familias-eaton')}
                      className="px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#E94E1B]/50 rounded-lg text-xs sm:text-sm text-white transition-all duration-300 flex items-center gap-2"
                    >
                      {product}
                      <ChevronRight className="size-4" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function QueResolvemos() {
  const items = [
    {
      num: '01',
      icon: <CheckCircle2 className="size-10" />,
      title: 'Continuidad operativa',
      description: 'Reducimos el riesgo de paradas por cortes, microcortes y variaciones eléctricas.'
    },
    {
      num: '02',
      icon: <Shield className="size-10" />,
      title: 'Protección de infraestructura crítica',
      description: 'Respaldo para servidores, storage, networking, CCTV, control de accesos, OT y automatización.'
    },
    {
      num: '03',
      icon: <DollarSign className="size-10" />,
      title: 'Eficiencia y TCO',
      description: 'Optimizamos consumo, espacio y mantenimiento para bajar el costo total de propiedad.'
    },
    {
      num: '04',
      icon: <TrendingUp className="size-10" />,
      title: 'Escalabilidad',
      description: 'Diseños que crecen por etapas: hoy lo necesario, mañana lo que demanda tu operación.'
    }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            ¿Qué resolvemos con Eaton?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute top-6 right-6 text-[64px] font-bold text-neutral-100 leading-none">
                {item.num}
              </div>
              
              <div className="relative z-10">
                <div className="size-16 rounded-xl bg-[#E94E1B]/5 group-hover:bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#282327] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] text-neutral-600 leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FamiliasEaton({ scrollToSection }: any) {
  const [activeFamily, setActiveFamily] = useState('9e');

  const families = [
    { id: '9e', label: '9E' },
    { id: '9px', label: '9PX' },
    { id: '9sx', label: '9SX' },
    { id: '93e', label: '93E' },
    { id: '91ps-93ps', label: '91PS/93PS' },
    { id: '93pm', label: '93PM G2' },
    { id: '9phd', label: '9PHD Industrial' },
    { id: 'dinrail', label: 'DIN Rail' }
  ];

  const familyData: Record<string, any> = {
    '9e': {
      headline: '9E: online doble conversión, compacto y robusto',
      description: 'Protección de energía online a precio accesible, ideal para aplicaciones industriales, médicas, TI y telecom.',
      specs: ['1–20 kVA', 'Topología: online', 'Formato: torre'],
      useCases: ['Telecom/Networking', 'Salas técnicas', 'Equipos críticos pequeños/medianos'],
      badge: null
    },
    '9px': {
      headline: '9PX: eficiencia energética para infraestructura y salas de TI',
      description: 'Diseñado para infraestructura, salas de TI y data centers pequeños/medianos. Doble conversión con foco en eficiencia.',
      specs: ['1–22 kVA', 'Online', 'Rack/Torre'],
      useCases: ['Salas de TI', 'Server rooms', 'Micro data centers'],
      badge: 'Opción batería ion-litio'
    },
    '9sx': {
      headline: '9SX: potencia y flexibilidad de entrada/salida',
      description: 'Configuraciones monofásicas/trifásicas según escenario, pensada para entornos exigentes.',
      specs: ['15–20 kVA', 'Online doble conversión', 'Rack/Torre'],
      useCases: ['Infraestructura IT', 'Entornos críticos', 'Flexibilidad de configuración'],
      badge: null,
      bullets: ['ABM® para extender vida de baterías', 'Panel táctil color con rotación automática']
    },
    '93e': {
      headline: '93E: protección simple y eficaz para TI y eléctrica',
      description: 'Menor TCO por eficiencia energética, alta confiabilidad y huella compacta. Ideal para edificios comerciales, instalaciones técnicas y data centers pequeños/medianos.',
      specs: ['TCO optimizado', 'Huella compacta', 'Alta eficiencia'],
      useCases: ['Edificios comerciales', 'Data centers pequeños', 'Instalaciones técnicas'],
      badge: null
    },
    '91ps-93ps': {
      headline: '91PS / 93PS: máxima disponibilidad, misión crítica',
      description: 'Rendimiento, escalabilidad, resiliencia y eficiencia para continuidad rentable.',
      specs: ['8–15 kW (91PS)', '8–20 kW (93PS)', 'Frames: 15/20 kW y 30/40 kW'],
      useCases: ['Misión crítica', 'Alta disponibilidad', 'Data centers'],
      badge: null,
      table: [
        { label: 'Rango de potencia', value: '8–15 kW (91PS) / 8–20 kW (93PS)' },
        { label: 'Opciones por frame', value: '15/20 kW y 30/40 kW' },
        { label: 'Entrada/salida', value: '3:1 (91PS) / 3:3 (93PS)' }
      ]
    },
    '93pm': {
      headline: '93PM G2: modular, escalable y eficiente',
      description: 'UPS trifásico con diseño flexible y modular para crecer con tu demanda.',
      specs: ['50–360 kVA', 'Eficiencia hasta 97% (online)', 'Hot-swap modular'],
      useCases: ['Data centers', 'Escalabilidad modular', 'Alta eficiencia'],
      badge: 'Baterías: VRLA / ion-litio / supercapacitor'
    },
    '9phd': {
      headline: '9PHD Industrial: UPS moderno para dominio industrial',
      description: 'Solución confiable y eficiente, modular y basada en IGBT, configurable para diversas aplicaciones industriales.',
      specs: ['80–200 kW', 'Voltajes hasta 690 V', 'IP23/IP33/IP54'],
      useCases: ['Industria', 'Ambientes exigentes', 'Voltajes especiales'],
      badge: null
    },
    'dinrail': {
      headline: 'DIN Rail: respaldo para automatización e IIoT',
      description: 'UPS industrial para gabinetes eléctricos: robusto, compacto, con opciones AC y DC, pensado para plantas, almacenes y fabricación automatizada.',
      specs: ['500–850 VA', 'Montaje en riel DIN', 'Hasta 50°C'],
      useCases: ['Automatización', 'Tableros eléctricos', 'IIoT'],
      badge: null,
      bullets: ['LEDs para monitoreo visual', 'Tiempo de funcionamiento para sostener operación o shutdown seguro']
    }
  };

  const current = familyData[activeFamily];

  return (
    <section id="familias-eaton" className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Familias Eaton
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
            Catálogo curado por Trendit para cada necesidad
          </p>
        </motion.div>

        {/* Subnav sticky */}
        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-y border-neutral-200 -mx-4 sm:-mx-6 lg:-mx-12 px-4 sm:px-6 lg:px-12 py-4 mb-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {families.map((family) => (
              <button
                key={family.id}
                onClick={() => setActiveFamily(family.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeFamily === family.id
                    ? 'bg-[#E94E1B] text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {family.label}
              </button>
            ))}
          </div>
        </div>

        {/* Family detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFamily}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-2 border-neutral-200 rounded-2xl md:rounded-3xl p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-[2fr_1fr] gap-10 mb-10">
              {/* Overview */}
              <div>
                <h3 className="text-[28px] md:text-[32px] font-semibold text-[#282327] mb-4">
                  {current.headline}
                </h3>
                
                {current.badge && (
                  <span className="inline-block px-4 py-2 bg-[#E94E1B]/10 border border-[#E94E1B]/20 text-[#E94E1B] rounded-full text-sm font-medium mb-6">
                    {current.badge}
                  </span>
                )}
                
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-8">
                  {current.description}
                </p>

                {current.bullets && (
                  <ul className="space-y-3 mb-6">
                    {current.bullets.map((bullet: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-neutral-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {current.table && (
                  <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                    <h4 className="text-sm font-semibold text-[#282327] mb-4 uppercase tracking-wide">
                      Especificaciones
                    </h4>
                    <div className="space-y-3">
                      {current.table.map((row: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-start text-sm">
                          <span className="text-neutral-600 font-medium">{row.label}:</span>
                          <span className="text-neutral-800 text-right ml-4">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Specs rápidas */}
              <div>
                <h4 className="text-sm font-semibold text-[#282327] mb-4 uppercase tracking-wide">
                  Specs rápidas
                </h4>
                <div className="space-y-3 mb-8">
                  {current.specs.map((spec: string, idx: number) => (
                    <div key={idx} className="px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-700">
                      {spec}
                    </div>
                  ))}
                </div>

                <h4 className="text-sm font-semibold text-[#282327] mb-4 uppercase tracking-wide">
                  Casos de uso
                </h4>
                <div className="space-y-2">
                  {current.useCases.map((useCase: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-neutral-200">
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
                onClick={() => scrollToSection('cta-wizard')}
              >
                Cotizar {families.find(f => f.id === activeFamily)?.label}
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SoftwareMonitoreo() {
  const features = [
    {
      icon: <Eye className="size-8" />,
      title: 'Monitoreo & alertas',
      description: 'Visibilidad en tiempo real del estado del UPS'
    },
    {
      icon: <Settings className="size-8" />,
      title: 'Integración con infraestructura (NOC/IT)',
      description: 'Conectividad con sistemas existentes'
    },
    {
      icon: <Clock className="size-8" />,
      title: 'Mantenimiento preventivo',
      description: 'Predicción de fallos y salud de baterías'
    }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-6 leading-[1.15]">
              Software & monitoreo
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Monitoreo, alertas y operación proactiva: integramos la gestión energética para que tu UPS no sea una caja negra. Visibilidad, salud de baterías y eventos para decisiones rápidas.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl hover:border-[#E94E1B]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="size-12 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#282327] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiciosTrendit() {
  const steps = [
    { num: '01', title: 'Relevamiento (IT + OT)' },
    { num: '02', title: 'Dimensionamiento (kW/kVA, autonomía, crecimiento)' },
    { num: '03', title: 'Ingeniería y propuesta (BOM + arquitectura)' },
    { num: '04', title: 'Implementación (instalación, bypass, puesta en marcha)' },
    { num: '05', title: 'Pruebas y capacitación' },
    { num: '06', title: 'Soporte y mantenimiento' }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] mb-6 leading-[1.15]">
            Servicios Trendit con Eaton
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Acompañamiento de punta a punta para continuidad operativa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-[40px] font-bold text-[#E94E1B] mb-4">
                {step.num}
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                {step.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#E94E1B]/10 border border-[#E94E1B]/20 rounded-2xl p-8 text-center">
          <Award className="size-12 text-[#E94E1B] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3">
            Partner B2B
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Acompañamiento de punta a punta para continuidad operativa.
          </p>
        </div>
      </div>
    </section>
  );
}

function CasosUsoIndustria() {
  const industries = [
    { icon: <Server className="size-8" />, name: 'Data Centers & Colocation' },
    { icon: <Landmark className="size-8" />, name: 'Banca & Fintech' },
    { icon: <ShoppingCart className="size-8" />, name: 'Retail & Distribución' },
    { icon: <Hospital className="size-8" />, name: 'Salud' },
    { icon: <Factory className="size-8" />, name: 'Manufactura / Plantas' },
    { icon: <Droplet className="size-8" />, name: 'Minería & Oil & Gas' }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Casos de uso por industria
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
            Arquitecturas de respaldo adaptadas a criticidad, entorno y normas de operación
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/5 group-hover:bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5 transition-colors">
                {industry.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#282327]">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Cómo elijo kVA vs kW?',
      a: 'kVA es potencia aparente, kW es potencia real. El factor de potencia de tu carga define la relación. Te ayudamos a dimensionar correctamente según tus equipos.'
    },
    {
      q: '¿Qué autonomía necesito (minutos)?',
      a: 'Depende de tu criticidad: 5-10 min para shutdown ordenado, 15-30 min para esperar que vuelva la energía, o más si tenés generador de backup.'
    },
    {
      q: '¿Monofásico o trifásico?',
      a: 'Monofásico para cargas pequeñas (oficina, rack pequeño). Trifásico para data centers, salas técnicas grandes e industria. Depende de tu instalación eléctrica y potencia.'
    },
    {
      q: '¿Qué es doble conversión online?',
      a: 'Topología que convierte AC a DC y nuevamente a AC, filtrando cualquier anomalía eléctrica. Es la protección más robusta para equipos críticos.'
    },
    {
      q: '¿Cuándo conviene un UPS modular?',
      a: 'Cuando necesitás escalabilidad, redundancia N+1 o superior, y flexibilidad para crecer sin cambiar toda la infraestructura (ej: data centers).'
    },
    {
      q: '¿Qué datos necesito para cotizar rápido?',
      a: 'Potencia total (kW/kVA), cantidad de equipos, autonomía deseada, tipo de instalación (rack/torre), monofásico/trifásico, y criticidad de tu operación.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-[32px] sm:text-[36px] lg:text-[42px] text-[#282327] mb-12 text-center">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-neutral-200 hover:border-neutral-300 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <span className="text-base md:text-lg font-semibold text-[#282327] pr-8">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`size-5 text-neutral-400 flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
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
                    <div className="px-6 md:px-8 pb-6 text-sm md:text-base text-neutral-700 leading-relaxed">
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

function CTAWizard({ whatsappNumber }: any) {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <>
      <section id="cta-wizard" className="py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#E94E1B]/5 to-white">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] text-[#282327] mb-6 leading-[1.1]">
              Asistente de dimensionamiento y cotización
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 mb-10 leading-relaxed">
              Completá 5 pasos y recibí una propuesta técnica-comercial adaptada a tu escenario
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-10 text-base md:text-lg"
                onClick={() => setShowWizard(true)}
              >
                Iniciar asistente
                <ArrowRight className="ml-2 size-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B] hover:text-white px-10 text-base md:text-lg transition-all"
                onClick={() => {
                  const msg = encodeURIComponent('Hola Trendit, necesito dimensionar una solución Eaton. Mi escenario: _____. Criticidad: _____.');
                  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                Resolver por WhatsApp
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 mt-6">
              Respondemos en horario comercial. Si tu operación es crítica, marcá "urgente" en el mensaje.
            </p>
          </motion.div>
        </div>
      </section>

      {showWizard && <Wizard onClose={() => setShowWizard(false)} whatsappNumber={whatsappNumber} />}
    </>
  );
}

function Wizard({ onClose, whatsappNumber }: any) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    escenario: '',
    potencia: '',
    equipos: '',
    crecimiento: '',
    voltaje: '',
    autonomia: '',
    bateria: '',
    servicios: [] as string[],
    empresa: '',
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    mensaje: ''
  });

  const totalSteps = 5;

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleServicio = (value: string) => {
    const current = formData.servicios;
    if (current.includes(value)) {
      updateField('servicios', current.filter(v => v !== value));
    } else {
      updateField('servicios', [...current, value]);
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.escenario !== '';
    if (step === 2) return formData.potencia !== '';
    if (step === 3) return formData.voltaje !== '' && formData.autonomia !== '';
    if (step === 4) return true;
    if (step === 5) return formData.empresa && formData.nombre && formData.email && formData.telefono;
    return true;
  };

  const handleSubmit = () => {
    alert('¡Consulta enviada! Un especialista Trendit te contactará en breve.');
    console.log('Wizard data:', formData);
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
        <div className="px-6 md:px-8 py-6 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#282327]">
              Asistente de dimensionamiento
            </h3>
            <p className="text-sm md:text-base text-neutral-600">
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
            className="h-full bg-[#E94E1B] transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <WizardStep key="step1" title="Tu escenario">
                <div className="grid md:grid-cols-2 gap-4">
                  {['Oficina/Telecom', 'Rack/Server room', 'Data Center', 'Edificio', 'Industria/OT', 'Automatización (DIN)'].map(esc => (
                    <button
                      key={esc}
                      onClick={() => updateField('escenario', esc)}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        formData.escenario === esc
                          ? 'border-[#E94E1B] bg-[#E94E1B]/5'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-base md:text-lg font-medium text-[#282327]">{esc}</span>
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 2 && (
              <WizardStep key="step2" title="Potencia y equipos">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      kW estimados (o VA)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 10 kW"
                      value={formData.potencia}
                      onChange={(e) => updateField('potencia', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      Cantidad de racks/equipos
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 3 racks"
                      value={formData.equipos}
                      onChange={(e) => updateField('equipos', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      Crecimiento esperado (%)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 30%"
                      value={formData.crecimiento}
                      onChange={(e) => updateField('crecimiento', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </WizardStep>
            )}

            {step === 3 && (
              <WizardStep key="step3" title="Energía & autonomía">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      Tipo de voltaje
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Monofásico', 'Trifásico', 'No sé'].map(v => (
                        <button
                          key={v}
                          onClick={() => updateField('voltaje', v)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${
                            formData.voltaje === v
                              ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                              : 'border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      Autonomía deseada (minutos)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 15 minutos"
                      value={formData.autonomia}
                      onChange={(e) => updateField('autonomia', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      Tipo de batería preferida
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['VRLA', 'Ion-litio', 'No sé'].map(b => (
                        <button
                          key={b}
                          onClick={() => updateField('bateria', b)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${
                            formData.bateria === b
                              ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                              : 'border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </WizardStep>
            )}

            {step === 4 && (
              <WizardStep key="step4" title="Servicios (seleccioná varios)">
                <div className="flex flex-wrap gap-3">
                  {['Instalación', 'Puesta en marcha', 'Mantenimiento', 'Monitoreo', 'Relevamiento on-site'].map(serv => (
                    <button
                      key={serv}
                      onClick={() => toggleServicio(serv)}
                      className={`px-5 py-3 rounded-xl border-2 transition-all ${
                        formData.servicios.includes(serv)
                          ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {serv}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 5 && (
              <WizardStep key="step5" title="Datos de contacto">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Empresa *"
                      value={formData.empresa}
                      onChange={(e) => updateField('empresa', e.target.value)}
                      className="px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Nombre *"
                      value={formData.nombre}
                      onChange={(e) => updateField('nombre', e.target.value)}
                      className="px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono *"
                      value={formData.telefono}
                      onChange={(e) => updateField('telefono', e.target.value)}
                      className="px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Ciudad"
                    value={formData.ciudad}
                    onChange={(e) => updateField('ciudad', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                  />
                  
                  <textarea
                    placeholder="Contanos tu problema / criticidad / plazos"
                    value={formData.mensaje}
                    onChange={(e) => updateField('mensaje', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none resize-none"
                  />
                </div>
              </WizardStep>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 md:px-8 py-6 border-t border-neutral-200 flex items-center justify-between">
          <button
            onClick={() => setStep(s => Math.max(1, s - 1))}
            disabled={step === 1}
            className="px-6 py-3 text-sm md:text-base font-medium text-neutral-700 hover:text-[#282327] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-8">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

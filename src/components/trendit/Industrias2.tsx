import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Factory,
  ShoppingCart,
  Hospital,
  Building2,
  TrendingUp,
  Database,
  Shield,
  Network,
  Cpu,
  Zap,
  TreeDeciduous,
  Leaf,
  Users,
  BarChart3,
  Lock,
  MapPin,
  Boxes,
  Store,
  GraduationCap,
  Landmark,
  Wheat,
  MessageCircle,
  CheckCircle2,
  Activity,
  Eye,
  Wifi,
  Video,
  Radio
} from 'lucide-react';
import { Button } from '../ui/button';

export function IndustriasPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroIndustrias />
      
      {/* Context: Por qué la infraestructura define */}
      <InfraestructuraDefine />
      
      {/* La realidad argentina */}
      <RealidadArgentina />
      
      {/* Cómo Trendit acompaña */}
      <ComoAcompanamos />
      
      {/* Grid de industrias */}
      <GridIndustrias />
      
      {/* Sostenibilidad y Reforestar */}
      <SostenibilidadIndustrias />
      
      {/* CTA Final */}
      <CTAFinalIndustrias />
    </div>
  );
}

function HeroIndustrias() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  const scrollToIndustrias = () => {
    const element = document.getElementById('grid-industrias');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // WhatsApp handler para el botón secundario del Hero
  const handleWhatsAppHero = () => {
    const message = `Hola Trendit 👋
Vengo desde la sección *Industrias* del sitio.

• Industria / Sector:
• Tamaño / Sedes:
• Qué querés mejorar (red, data center, seguridad, colaboración, energía, etc.):
• Urgencia / Plazo:
• Ciudad:`;
    window.open(`https://wa.me/5493516714007?text=${encodeURIComponent(message)}`, '_blank');
  };

  const insightCards = [
    {
      icon: Database,
      title: '175 ZB de datos para 2025',
      description: 'IDC estima que el datasphere mundial llegará a unos 175 zettabytes en 2025, impulsado por IoT y sistemas industriales conectados.',
      source: 'Fuente: IDC – Data Age 2025'
    },
    {
      icon: Factory,
      title: 'La industria 4.0 ya muestra resultados',
      description: 'Estudios de BCG y del Global Lighthouse Network muestran que las plantas que escalan iniciativas 4.0 logran mejoras relevantes en productividad, calidad y tiempos de ciclo frente a sus pares.',
      source: 'Fuente: BCG y Global Lighthouse Network'
    },
    {
      icon: Cpu,
      title: 'Edge + nube, el motor del tiempo real',
      description: 'La computación en el borde, combinada con la nube, permite procesar datos cerca de la operación, habilita mantenimiento predictivo y decisiones en tiempo real en manufactura y logística.',
      source: 'Fuente: Informes sobre Edge Computing para Industria 4.0'
    }
  ];

  return (
    <section 
      className="relative pt-32 pb-24 px-6 lg:px-12 overflow-hidden min-h-[90vh] flex items-center"
      style={{ background: '#F8F0E7' }}
    >
      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-[46%_54%] gap-12 lg:gap-16 items-start">
          
          {/* Left column - Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[560px]"
          >
            {/* H1 Title */}
            <h1 
              className="text-[44px] md:text-[56px] lg:text-[64px] leading-[1.08] mb-7 tracking-tight"
              style={{
                color: '#282327',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              Industrias que se preparan para el próximo cambio de reglas
            </h1>

            {/* Descriptive paragraph */}
            <p 
              className="text-[17px] md:text-[18px] lg:text-[19px] leading-[1.7] mb-10"
              style={{
                color: '#4A4A4A',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.01em'
              }}
            >
              La economía, la regulación y los mercados cambian continuamente. La IA, la automatización y los centros de datos de alto consumo presionan cada vez más a la infraestructura. Diseñamos arquitecturas tecnológicas que preparan a tu organización para competir, crecer y exportar, incluso cuando las reglas cambian.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToIndustrias}
                className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-7 h-[54px] transition-all duration-300 w-full sm:w-auto"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  boxShadow: '0 4px 14px rgba(233, 78, 27, 0.25), 0 2px 6px rgba(233, 78, 27, 0.15)'
                }}
              >
                Ver industrias que acompañamos
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handleWhatsAppHero}
                className="bg-white border-[1.5px] border-[#D1D1D6] text-[#282327] hover:bg-neutral-50 hover:border-[#B8B8BD] px-7 h-[54px] transition-all duration-300 w-full sm:w-auto"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                Escribinos
              </Button>
            </div>
          </motion.div>

          {/* Right column - 3 Insight Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full"
          >
            {/* Desktop & Tablet: 1 column x 3 rows */}
            <div className="hidden md:flex md:flex-col gap-5 lg:gap-6">
              {insightCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.15, duration: 0.6, ease: "easeOut" }}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group cursor-default"
                  >
                    <div
                      className="p-6 lg:p-7 transition-all duration-300"
                      style={{
                        background: hoveredCard === idx ? '#FFFFFF' : '#FEFBF8',
                        border: hoveredCard === idx ? '1.5px solid #E94E1B' : '1px solid #E8E0D6',
                        borderRadius: '16px',
                        boxShadow: hoveredCard === idx 
                          ? '0 8px 24px rgba(233, 78, 27, 0.15), 0 2px 8px rgba(0, 0, 0, 0.06)'
                          : '0 2px 8px rgba(0, 0, 0, 0.04)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div 
                          className="size-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                          style={{
                            background: hoveredCard === idx ? '#E94E1B' : '#FFF7F3',
                            color: hoveredCard === idx ? '#FFFFFF' : '#E94E1B'
                          }}
                        >
                          <IconComponent className="size-6" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          {/* Title with highlighted numbers */}
                          <h3 
                            className="text-[17px] lg:text-[18px] leading-tight mb-3"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 700,
                              color: '#282327'
                            }}
                            dangerouslySetInnerHTML={{
                              __html: card.title.replace(
                                /(175 ZB|industria 4\.0|Edge \+ nube)/gi, 
                                '<span style="color: #E94E1B;">$1</span>'
                              )
                            }}
                          />
                          
                          {/* Description */}
                          <p 
                            className="text-[14px] lg:text-[15px] leading-[1.65] mb-3"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 400,
                              color: '#4A4A4A'
                            }}
                          >
                            {card.description}
                          </p>

                          {/* Source caption */}
                          <p 
                            className="text-[11px] lg:text-[12px] leading-tight"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 500,
                              color: '#9B9B9B',
                              letterSpacing: '0.02em'
                            }}
                          >
                            {card.source}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile: 1 column stack */}
            <div className="md:hidden flex flex-col gap-4">
              {insightCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                    className="w-full"
                  >
                    <div
                      className="p-5 transition-all duration-300"
                      style={{
                        background: '#FEFBF8',
                        border: '1px solid #E8E0D6',
                        borderRadius: '14px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                      }}
                    >
                      <div className="flex items-start gap-3.5">
                        {/* Icon */}
                        <div 
                          className="size-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: '#FFF7F3',
                            color: '#E94E1B'
                          }}
                        >
                          <IconComponent className="size-5" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          {/* Title */}
                          <h3 
                            className="text-[15px] leading-tight mb-2.5"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 700,
                              color: '#282327'
                            }}
                            dangerouslySetInnerHTML={{
                              __html: card.title.replace(
                                /(175 ZB|industria 4\.0|Edge \+ nube)/gi, 
                                '<span style="color: #E94E1B;">$1</span>'
                              )
                            }}
                          />
                          
                          {/* Description */}
                          <p 
                            className="text-[13px] leading-[1.6] mb-2.5"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 400,
                              color: '#4A4A4A'
                            }}
                          >
                            {card.description}
                          </p>

                          {/* Source */}
                          <p 
                            className="text-[11px] leading-tight"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 500,
                              color: '#9B9B9B'
                            }}
                          >
                            {card.source}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function InfraestructuraDefine() {
  const stats = [
    {
      icon: <Cpu className="size-8" />,
      title: 'Workloads de IA en crecimiento',
      text: 'Modelos de IA, analítica avanzada y automatización que exigen más cómputo, más almacenamiento y redes de baja latencia.'
    },
    {
      icon: <Network className="size-8" />,
      title: 'Datos en el edge',
      text: 'Dispositivos, cámaras y sensores generando información fuera del data center. Necesidad de procesar cerca de donde ocurren las cosas.'
    },
    {
      icon: <Shield className="size-8" />,
      title: 'Seguridad y cumplimiento críticos',
      text: 'Más superficie de ataque, más regulaciones y estándares que obligan a proteger datos, identidades y operaciones 24/7.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="text-sm font-semibold text-[#E94E1B] mb-3 uppercase tracking-wide">
            Contexto global
          </div>
          <h2 className="text-[44px] text-[#282327] mb-8 leading-[1.15] tracking-tight">
            Más datos, más IA, más presión sobre tu infraestructura
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5 text-[17px] text-neutral-600 leading-[1.7]"
          >
            <p>
              La IA, la automatización y los modelos avanzados de datos están separando a las empresas que lideran de las que solo sobreviven.
            </p>
            <p>
              El tráfico de datos crece de forma exponencial y cada vez más información se genera en el borde: plantas, sucursales, cámaras, sensores y dispositivos IoT. Al mismo tiempo, la demanda de cómputo para IA y analítica presiona a la industria de semiconductores y a los centros de datos de todo el mundo, elevando costos y tiempos de entrega.
            </p>
            <p>
              En este contexto, las arquitecturas que combinan nube, data centers on-premise y edge computing se vuelven clave para sostener la operación y seguir innovando.
            </p>
          </motion.div>

          {/* Right column - Stat cards */}
          <div className="space-y-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
                className="bg-white border border-neutral-200 rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg hover:border-[#E94E1B]/20 transition-all duration-300"
              >
                <div className="size-14 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#282327] mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-[15px] text-neutral-600 leading-[1.6]">
                    {stat.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RealidadArgentina() {
  const badges = [
    'Acceso planificado a tecnología crítica en momentos de alta demanda',
    'Arquitecturas optimizadas para TCO y preparados para nuevas olas de IA',
    'Menos riesgo de paradas por falta de equipamiento o componentes clave'
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-[40px] p-12 lg:p-16 border border-neutral-200"
        >
          <div 
            className="text-sm mb-3 uppercase tracking-wide text-center"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600,
              color: '#E94E1B'
            }}
          >
            Contexto de la industria tecnológica
          </div>
          
          <h2 
            className="text-[40px] lg:text-[44px] mb-8 leading-[1.15] tracking-tight text-center"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700,
              color: '#282327'
            }}
          >
            La IA está reescribiendo las reglas de los semiconductores
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-center mb-10">
            <p 
              className="text-[17px] leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
                color: '#4A4A4A'
              }}
            >
              El boom de los centros de datos de IA —impulsado por actores como OpenAI, Microsoft Azure, Google y Tesla— está disparando la demanda de GPU, memorias y redes. Analistas proyectan que el mercado de procesadores y aceleradores de IA más que duplicará su tamaño en los próximos años, empujando una nueva ola de inversión en infraestructura.
            </p>
            <p 
              className="text-[17px] leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
                color: '#4A4A4A'
              }}
            >
              Fabricantes como Micron están reorientando sus líneas hacia productos corporativos para data centers de alto rendimiento, dejando atrás parte del portafolio de consumo. Esto mantiene la innovación, pero también trae ciclos de escasez, plazos de entrega largos y mayor volatilidad de precios en servidores, almacenamiento y redes.
            </p>
            <p 
              className="text-[17px] leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
                color: '#4A4A4A'
              }}
            >
              En este contexto, contar con un partner como Trendit marca la diferencia: anticipamos la demanda, trabajamos con múltiples fabricantes y diseñamos arquitecturas que reducen el riesgo de quedarte sin tecnología crítica justo cuando tu negocio más la necesita.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.4, ease: "easeOut" }}
                className="bg-white border-2 border-[#E94E1B]/20 rounded-full px-6 py-3 flex items-center gap-2 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200"
              >
                <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0" />
                <span 
                  className="text-[15px]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#282327'
                  }}
                >
                  {badge}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ComoAcompanamos() {
  const capabilities = [
    {
      icon: <Network className="size-10" />,
      title: 'Infraestructura preparada para crecer',
      text: 'Redes cableadas y WiFi de alta disponibilidad, fibra óptica, switching y data centers listos para soportar más usuarios, más dispositivos y más datos.'
    },
    {
      icon: <BarChart3 className="size-10" />,
      title: 'Datos, analítica e IA',
      text: 'Arquitecturas que acercan el procesamiento donde ocurren las cosas: edge computing, integración con nube y plataformas listas para proyectos de analítica e inteligencia artificial.'
    },
    {
      icon: <Shield className="size-10" />,
      title: 'Seguridad y continuidad operativa',
      text: 'Soluciones de seguridad, videoseguridad, energía y respaldo que cuidan tus activos, tus personas y tus datos, con foco en regulaciones y cumplimiento.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-[#E94E1B] mb-3 uppercase tracking-wide">
            Qué aporta Trendit
          </div>
          <h2 className="text-[44px] text-[#282327] mb-6 leading-[1.15] tracking-tight">
            De la conectividad al dato accionable
          </h2>
          <p className="text-[17px] text-neutral-600 leading-[1.7] max-w-3xl mx-auto">
            Diseñamos arquitecturas que combinan data centers on-premise, nube y edge, según la realidad de cada industria. Trabajamos con fabricantes líderes en switching, WiFi, seguridad, videoseguridad, energía y microinformática para sostener operaciones de misión crítica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-neutral-200/50 hover:border-[#E94E1B]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="size-16 rounded-2xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-6">
                {cap.icon}
              </div>
              <h3 className="text-[19px] font-semibold text-[#282327] mb-3 leading-tight">
                {cap.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.65]">
                {cap.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GridIndustrias() {
  const industrias = [
    {
      id: 'industria-manufactura',
      icon: <Factory className="size-10" />,
      name: 'Manufactura & Logística',
      description: 'La industria está en plena transición a plantas conectadas, automatización, robots y trazabilidad en tiempo real. Cada minuto de parada impacta directo en la rentabilidad. Trendit diseña redes industriales robustas, edge computing y videoseguridad para que tu operación produzca más, con menos errores y mejor control.',
      benefits: [
        'Redes industriales, WiFi robusto y edge computing para plantas, depósitos y centros de distribución.',
        'Integración de sensores, PLC, cámaras y sistemas de picking para automatizar y trazar cada movimiento.',
        'Videoseguridad y analítica de video para procesos, seguridad e higiene.'
      ]
    },
    {
      id: 'industria-retail-comercio',
      icon: <ShoppingCart className="size-10" />,
      name: 'Retail, supermercados & centros comerciales',
      description: 'El retail compite entre tiendas físicas, e-commerce y marketplaces. La experiencia de compra, el stock en tiempo real y la seguridad de los datos definen quién se queda con el ticket. Trendit prepara tu infraestructura para omnicanalidad: WiFi de alta densidad, switching preparado para IA, cartelería digital y tiendas siempre conectadas.',
      benefits: [
        'Infraestructura para tiendas físicas, cajas, POS, e-commerce y modelos omnicanales.',
        'WiFi de alta densidad y switching preparado para POS, self-checkout y cartelería digital.',
        'Cámaras con analítica para mermas, flujos de personas, seguridad y prevención de pérdidas.'
      ]
    },
    {
      id: 'industria-salud',
      icon: <Hospital className="size-10" />,
      name: 'Salud',
      description: 'Hospitales y clínicas dependen de historias clínicas electrónicas, imágenes de alta resolución, telemedicina y dispositivos conectados. Cualquier caída impacta en la atención del paciente. Con Trendit combinás centros de datos seguros, redes segmentadas y continuidad operativa pensada para cargas críticas de salud.',
      benefits: [
        'Redes, centros de datos y seguridad para hospitales, clínicas y laboratorios.',
        'Soporte para historias clínicas electrónicas, imágenes médicas y telemedicina.',
        'Segmentación y protección de datos sensibles de pacientes, con foco en cumplimiento y trazabilidad.'
      ]
    },
    {
      id: 'industria-educacion',
      icon: <GraduationCap className="size-10" />,
      name: 'Educación & Campus',
      description: 'Las instituciones educativas viven entre clases presenciales, híbridas y contenidos digitales en alta demanda. Estudiantes y docentes esperan conectividad estable en todo el campus. Trendit construye redes académicas seguras y escalables, listas para laboratorios virtuales, plataformas educativas y videocolaboración.',
      benefits: [
        'Conectividad para campus, aulas híbridas y experiencias de aprendizaje digitales.',
        'WiFi seguro de alta disponibilidad para estudiantes, docentes y dispositivos institucionales.',
        'Aulas híbridas, laboratorios virtuales y plataformas educativas protegidas y monitoreadas.'
      ]
    },
    {
      id: 'industria-finanzas',
      icon: <Landmark className="size-10" />,
      name: 'Finanzas & Seguros',
      description: 'Bancos, fintechs y aseguradoras operan con alta regulación, sucursales distribuidas y canales 7x24. Necesitan redes seguras, baja latencia y continuidad sin excusas. Trendit diseña arquitecturas resilientes para core bancario, canales digitales y oficinas, integrando seguridad, respaldo y monitoreo.',
      benefits: [
        'Infraestructura de baja latencia y alta disponibilidad para servicios financieros.',
        'Redes seguras para sucursales, contact centers y equipos remotos.',
        'Seguridad, respaldo y continuidad operativa alineados a normativas y auditorías.'
      ]
    },
    {
      id: 'industria-gobierno',
      icon: <Building2 className="size-10" />,
      name: 'Sector público & ciudades',
      description: 'Organismos públicos y gobiernos locales deben digitalizar servicios, integrar sistemas históricos y sumar cámaras, sensores y datos de la ciudad, todo con presupuestos ajustados. Con Trendit modernizás tu infraestructura paso a paso.',
      benefits: [
        'Conectividad y seguridad para organismos públicos y ciudades que digitalizan servicios.',
        'Redes confiables, WiFi público y videoseguridad urbana con analítica.',
        'Infraestructura para portales de servicios, datos abiertos y gestión operativa en tiempo real.'
      ]
    },
    {
      id: 'industria-agro',
      icon: <Wheat className="size-10" />,
      name: 'Agro & agronegocios',
      description: 'El agro suma maquinaria conectada, sensores de campo, silos inteligentes y trazabilidad de la producción. Las decisiones ya no se toman solo a ojo, sino con datos. Trendit lleva la conectividad y el cómputo al campo.',
      benefits: [
        'Soluciones para campos, acopios, agroindustrias y plantas de energía.',
        'Conectividad en zonas rurales, enlaces inalámbricos, fibra y monitoreo de activos críticos.',
        'Videoseguridad y monitoreo remoto de silos, equipos, perímetros y operaciones.'
      ]
    },
    {
      id: 'industria-telecom',
      icon: <Radio className="size-10" />,
      name: 'Telecomunicaciones',
      description: 'Las operadoras de telecomunicaciones enfrentan demandas de conectividad exponenciales: 5G, fibra óptica, edge computing y servicios gestionados. Trendit diseña infraestructura carrier-grade para data centers de operadoras, nodos de acceso y backhaul, con disponibilidad, redundancia y monitoreo 24/7.',
      benefits: [
        'Infraestructura para operadoras, ISPs y carriers: data centers, nodos de acceso y backbone.',
        'Redes de transporte de alta capacidad, DWDM, MPLS y segmentación para servicios empresariales.',
        'Monitoreo, automatización y NOC para garantizar SLA y continuidad operativa.'
      ]
    },
    {
      id: 'industria-oil-gas',
      icon: <Zap className="size-10" />,
      name: 'Oil & Gas, energía e industrias de riesgo',
      description: 'Refinerías, gasoductos, plantas petroquímicas y utilities operan en entornos de alto riesgo, con normativas estrictas y procesos que no pueden detenerse. Trendit integra redes industriales seguras, videoseguridad y dispositivos intrínsecamente seguros para tus equipos de campo.',
      benefits: [
        'Redes industriales y comunicaciones robustas para campos, refinerías, ductos y plantas de proceso.',
        'Cámaras, analítica de video y control de acceso para seguridad operativa y cumplimiento normativo.',
        'Endpoints rugerizados y tablets anti-explosivas integradas con tus sistemas de operación.'
      ]
    }
  ];

  return (
    <section id="grid-industrias" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header con label y microcopy guía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold text-neutral-400 mb-4 uppercase tracking-[0.2em]">
            INDUSTRIAS
          </div>
          <p className="text-sm text-neutral-500 mb-8 max-w-2xl mx-auto">
            Explorá cómo preparamos la infraestructura de cada sector para el próximo cambio de reglas.
          </p>
          
          <h2 className="text-[44px] text-[#282327] mb-6 leading-[1.15] tracking-tight">
            Soluciones específicas para cada industria
          </h2>
          <p className="text-[17px] text-neutral-600 leading-[1.7] max-w-3xl mx-auto">
            Adaptamos la infraestructura a la realidad de tu sector, tomando en cuenta regulaciones, cargas de trabajo y madurez digital.
          </p>
        </motion.div>

        {/* Grid de industrias - 2 filas x 4 columnas en desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industrias.map((industria, idx) => (
            <motion.div
              key={idx}
              id={industria.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4, ease: "easeOut" }}
              className="group bg-white border border-neutral-200 rounded-3xl p-8 hover:shadow-2xl hover:shadow-neutral-300/30 hover:border-t-4 hover:border-t-[#E94E1B] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              {/* Icon con micro-animation */}
              <motion.div 
                className="size-16 rounded-2xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5 group-hover:bg-[#E94E1B]/15 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {industria.icon}
              </motion.div>
              
              {/* Título */}
              <h3 className="text-[17px] font-semibold text-[#282327] mb-3 leading-tight">
                {industria.name}
              </h3>
              
              {/* Descripción corta - párrafo contextual */}
              <p className="text-[14px] text-neutral-600 leading-[1.6] mb-5 group-hover:text-neutral-700 transition-colors">
                {industria.description}
              </p>

              {/* Benefits - se muestran siempre pero con más énfasis on hover */}
              <div className="space-y-2.5 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                {industria.benefits.map((benefit, bidx) => (
                  <div key={bidx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <p className="text-[13px] text-neutral-600 leading-[1.6]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SostenibilidadIndustrias() {
  const impactos = [
    {
      icon: <Zap className="size-8" />,
      text: 'Arquitecturas más eficientes'
    },
    {
      icon: <TreeDeciduous className="size-8" />,
      text: 'Proyectos que suman árboles nativos'
    },
    {
      icon: <Leaf className="size-8" />,
      text: 'Educación ambiental junto a empresas y comunidades'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-green-50 via-green-50/50 to-white relative overflow-hidden">
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-green-500 rounded-full blur-[140px] opacity-[0.12]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="text-sm font-semibold text-green-700 mb-3 uppercase tracking-wide">
            Triple impacto
          </div>
          <h2 className="text-[44px] text-[#282327] mb-6 leading-[1.15] tracking-tight">
            Competitividad sí, pero no a cualquier costo
          </h2>
          <p className="text-[17px] text-neutral-700 leading-[1.7] max-w-3xl mx-auto">
            El crecimiento del tráfico de datos y de los centros de datos aumenta el consumo de energía y la huella ambiental. Por eso diseñamos arquitecturas eficientes y complementamos los proyectos con Reforestar, nuestro programa de triple impacto, para que la transformación digital también deje una huella positiva en el entorno.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {impactos.map((impacto, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.4, ease: "easeOut" }}
              className="bg-white border border-green-200 rounded-2xl p-8 text-center hover:shadow-lg hover:border-green-400 transition-all duration-300"
            >
              <div className="size-14 rounded-xl bg-green-600/10 flex items-center justify-center text-green-600 mx-auto mb-4">
                {impacto.icon}
              </div>
              <p className="text-[15px] font-semibold text-[#282327] leading-[1.6]">
                {impacto.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            Conocé más sobre Reforestar
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function CTAFinalIndustrias() {
  // WhatsApp handler para el botón del CTA final
  const handleWhatsAppCTA = () => {
    const message = `Hola Trendit 👋
Quiero agendar una conversación. Vengo desde *Industrias*.

• Industria / Sector:
• Tema principal:
• Disponibilidad horaria:
• Ciudad:`;
    window.open(`https://wa.me/5493516714007?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#1a1618] rounded-[40px] p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-[#E94E1B]/10 via-transparent to-transparent opacity-30" />
          
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-[#E94E1B] rounded-full blur-[120px] opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-[40px] lg:text-[48px] text-white mb-6 leading-[1.1] tracking-tight">
              ¿Preparamos tu industria para el próximo salto?
            </h2>
            
            <p className="text-[19px] text-white/80 mb-10 leading-[1.6]">
              Contanos en qué punto está tu infraestructura y diseñamos juntos una hoja de ruta tecnológica alineada a tu negocio y a tu sector.
            </p>
            
            <Button 
              size="lg"
              onClick={handleWhatsAppCTA}
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-10 group shadow-lg shadow-[#E94E1B]/30"
            >
              Agendar una conversación
              <MessageCircle className="ml-2 size-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
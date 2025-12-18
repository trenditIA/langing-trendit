import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  Factory,
  Building2,
  Heart,
  GraduationCap,
  Landmark,
  ShoppingCart,
  Truck,
  Radio,
  Fuel,
  Cpu,
  Database,
  Cloud,
  Zap,
  Gauge,
  Network,
  Server,
  Shield,
  Wrench,
  CheckCircle2,
  TrendingUp,
  Phone,
  MessageCircle,
  Clock,
  Target,
  Users,
  Hospital,
  Wheat,
  BarChart3,
  TreeDeciduous,
  Leaf
} from 'lucide-react';
import { Button } from '../ui/button';

export function IndustriasPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroIndustrias />
      
      {/* Context: Por qué la infraestructura define */}
      <InfraestructuraDefine />
      
      {/* Casos de uso transversales */}
      <CasosUsoTransversales />
      
      {/* Cómo acompañamos */}
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
      icon: Cloud,
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
                className="bg-white border-[1.5px] border-[#D1D1D6] text-[#282327] hover:bg-neutral-50 hover:border-[#B8B8BD] px-7 h-[54px] transition-all duration-300 w-full sm:w-auto"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                Hablemos de tu contexto
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
      icon: <Database className="size-8" />,
      title: 'Dato
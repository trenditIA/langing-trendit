import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Headphones,
  Video,
  Mic,
  Users,
  Home as HomeIcon,
  Building2,
  Phone,
  Briefcase,
  MessageCircle,
  X,
  CheckCircle2,
  Settings,
  Shield,
  Monitor,
  Camera,
  Volume2,
  Zap,
  Award,
  Box,
  Radio,
  Globe,
  Wifi
} from 'lucide-react';
import { Button } from '../ui/button';

export function Jabra() {
  const whatsappNumber = '5493516013543';
  const whatsappMessage = encodeURIComponent(
    'Hola Trendit, necesito información sobre soluciones Jabra para trabajo híbrido. Mi escenario: _____.'
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
      <ExplorarEscenario scrollToSection={scrollToSection} />
      <Headsets scrollToSection={scrollToSection} />
      <Speakerphones />
      <VideoConferencing scrollToSection={scrollToSection} />
      <RoomConfigurator scrollToSection={scrollToSection} />
      <SoftwareGestion />
      <Accesorios />
      <TrenditIntegra />
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
            <HomeIcon className="size-4" />
            Inicio
          </a>
          <ChevronRight className="size-4" />
          <a href="#marcas-partners" className="hover:text-[#E94E1B] transition-colors">
            Marcas & Partners
          </a>
          <ChevronRight className="size-4" />
          <span className="text-[#282327]">Jabra</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ scrollToSection, whatsappNumber, whatsappMessage }: any) {
  const [selectedTab, setSelectedTab] = useState(0);

  const chips = [
    'Headsets',
    'Speakerphones',
    'Video Conferencing',
    'Gestión & Software',
    'Accesorios',
    'Teams/Zoom/Meet'
  ];

  const tabs = [
    { id: 0, label: 'Trabajo remoto' },
    { id: 1, label: 'Oficina híbrida' },
    { id: 2, label: 'Contact Center' },
    { id: 3, label: 'Salas de reunión' },
    { id: 4, label: 'Huddle / salas pequeñas' },
    { id: 5, label: 'Equipos ejecutivos' }
  ];

  const recommendations = [
    {
      title: 'Para Trabajo remoto te recomendamos…',
      products: [
        { tag: 'Headsets Evolve2', desc: 'Concentración y claridad para trabajo desde casa' },
        { tag: 'PanaCast 20', desc: 'Cámara personal 4K con IA integrada' }
      ]
    },
    {
      title: 'Para Oficina híbrida te recomendamos…',
      products: [
        { tag: 'Headsets Evolve2', desc: 'Audio profesional con ANC para open office' },
        { tag: 'Speak Series', desc: 'Speakerphones para colaboración flexible' }
      ]
    },
    {
      title: 'Para Contact Center te recomendamos…',
      products: [
        { tag: 'Engage Series', desc: 'Headsets profesionales para alta densidad de llamadas' },
        { tag: 'Jabra Xpress', desc: 'Gestión centralizada de flota' }
      ]
    },
    {
      title: 'Para Salas de reunión te recomendamos…',
      products: [
        { tag: 'PanaCast 50', desc: 'Video panorámico 180° con audio inteligente' },
        { tag: 'Room System', desc: 'Solución completa Teams/Zoom Rooms' }
      ]
    },
    {
      title: 'Para Huddle / salas pequeñas te recomendamos…',
      products: [
        { tag: 'Speak2', desc: 'Speakerphone portátil con audio premium' },
        { tag: 'PanaCast 20', desc: 'Cámara personal para salas ad-hoc' }
      ]
    },
    {
      title: 'Para Equipos ejecutivos te recomendamos…',
      products: [
        { tag: 'Evolve2 premium', desc: 'Audio de alta fidelidad con máxima concentración' },
        { tag: 'PanaCast 20', desc: 'Presencia profesional en cada reunión' }
      ]
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
              Jabra en Trendit: colaboración profesional para trabajo híbrido
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-[1.6] max-w-2xl">
              Equipá a tu equipo con audio y video de nivel enterprise: headsets, speakerphones y soluciones de videoconferencia Jabra. En Trendit te asesoramos, integramos, desplegamos y damos soporte end-to-end.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
              {chips.map((chip, idx) => (
                <span 
                  key={idx}
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-6 md:px-8 group shadow-lg shadow-[#E94E1B]/20 w-full sm:w-auto"
                onClick={() => scrollToSection('cta-wizard')}
              >
                Armar mi solución
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

            <button
              onClick={() => scrollToSection('explorar-escenario')}
              className="text-sm md:text-base text-white/70 hover:text-white underline underline-offset-4 mb-8 md:mb-10 transition-colors"
            >
              Explorar por escenario →
            </button>

            {/* Selector asistido */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                Selector por necesidad
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

            {/* Recomendación rápida */}
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
                  Recomendación rápida
                </h4>
                <p className="text-[#E94E1B] font-medium mb-6 text-sm md:text-base">
                  {currentRec.title}
                </p>
                
                <div className="space-y-4">
                  {currentRec.products.map((product, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection('headsets')}
                      className="w-full group p-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#E94E1B]/50 rounded-xl transition-all duration-300 text-left flex items-start gap-4"
                    >
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white mb-1">{product.tag}</div>
                        <div className="text-xs text-white/60">{product.desc}</div>
                      </div>
                      <ChevronRight className="size-5 text-white/40 group-hover:text-[#E94E1B] group-hover:translate-x-1 transition-all flex-shrink-0" />
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

function ExplorarEscenario({ scrollToSection }: any) {
  const escenarios = [
    {
      icon: <Globe className="size-8" />,
      title: 'Work from anywhere',
      desc: 'Audio y video para rendimiento desde cualquier lugar'
    },
    {
      icon: <Building2 className="size-8" />,
      title: 'Open office (ruido)',
      desc: 'Concentración máxima con ANC y busylight'
    },
    {
      icon: <Phone className="size-8" />,
      title: 'Contact Center',
      desc: 'Headsets profesionales para alta densidad de llamadas'
    },
    {
      icon: <Briefcase className="size-8" />,
      title: 'BYOD & Hot-desking',
      desc: 'Flexibilidad plug-and-play para espacios compartidos'
    },
    {
      icon: <Users className="size-8" />,
      title: 'Salas pequeñas',
      desc: 'Huddle rooms con audio y video inteligente'
    },
    {
      icon: <Monitor className="size-8" />,
      title: 'Salas medianas',
      desc: 'Videoconferencia panorámica para reuniones inclusivas'
    }
  ];

  return (
    <section id="explorar-escenario" className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Elegí tu escenario y llegá al kit ideal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {escenarios.map((esc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/5 group-hover:bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5 transition-colors">
                {esc.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#282327] mb-3 leading-tight">
                {esc.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {esc.desc}
              </p>
              <Button 
                size="sm"
                variant="outline"
                className="border-2 border-neutral-300 text-[#282327] hover:border-[#E94E1B] hover:text-[#E94E1B] group-hover:bg-[#E94E1B] group-hover:text-white group-hover:border-[#E94E1B] transition-all"
                onClick={() => scrollToSection('cta-wizard')}
              >
                Consultar
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Headsets({ scrollToSection }: any) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'anc', label: 'Con ANC' },
    { id: 'focus', label: 'Máxima concentración' },
    { id: 'calls', label: 'Llamadas intensivas' },
    { id: 'wireless', label: 'Wireless' },
    { id: 'wired', label: 'Wired' },
    { id: 'teams', label: 'Certificación Teams/UC' },
    { id: 'busylight', label: 'Con busylight' }
  ];

  const families = [
    {
      title: 'Evolve2 Series',
      subtitle: 'Oficina híbrida',
      description: 'Diseñados para productividad y foco: ideales para open office y trabajo flexible.',
      badge: null,
      cta: 'Pedir recomendación Evolve2'
    },
    {
      title: 'Engage Series',
      subtitle: 'Alta densidad y llamadas exigentes',
      description: 'Rendimiento pensado para comunicaciones intensivas y operación profesional.',
      badge: 'Contact Center',
      cta: 'Pedir recomendación Engage'
    },
    {
      title: 'Biz Series',
      subtitle: 'Operación / atención al cliente',
      description: 'Soluciones confiables para centros de contacto y uso intensivo.',
      badge: null,
      cta: 'Pedir recomendación Biz'
    }
  ];

  return (
    <section id="headsets" className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Headsets profesionales para oficina y llamadas
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
            Comodidad, concentración y claridad de voz para jornadas completas.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#E94E1B] text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Familias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {families.map((family, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              {family.badge && (
                <span className="inline-block px-3 py-1 bg-[#E94E1B]/10 border border-[#E94E1B]/20 text-[#E94E1B] rounded-full text-xs font-medium mb-4">
                  {family.badge}
                </span>
              )}
              
              <h3 className="text-xl font-semibold text-[#282327] mb-2">
                {family.title}
              </h3>
              <p className="text-sm text-[#E94E1B] font-medium mb-4">
                {family.subtitle}
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                {family.description}
              </p>
              
              <Button 
                size="sm"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white w-full"
                onClick={() => scrollToSection('cta-wizard')}
              >
                {family.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Badge informativo */}
        <div className="bg-[#E94E1B]/5 border border-[#E94E1B]/20 rounded-2xl p-6 text-center">
          <Award className="size-8 text-[#E94E1B] mx-auto mb-3" />
          <p className="text-sm md:text-base text-neutral-700 max-w-2xl mx-auto">
            <strong className="text-[#282327]">Trendit define el modelo ideal</strong> según ruido, uso diario, plataforma y cantidad de usuarios.
          </p>
        </div>
      </div>
    </section>
  );
}

function Speakerphones() {
  const products = [
    {
      title: 'Speak2',
      subtitle: 'Nueva generación',
      description: 'Pensado para el trabajo híbrido: mayor claridad, mejor experiencia en salas y desde casa.'
    },
    {
      title: 'Speak 750',
      subtitle: 'Premium portátil',
      description: 'Conectividad simple por USB/Bluetooth y audio inmersivo para llamadas y música.'
    }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Speakerphones para reuniones híbridas: Speak Series
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
            Audio profesional plug-and-play para que todos se escuchen claro, en cualquier lugar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] mb-5">
                <Mic className="size-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#282327] mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-[#E94E1B] font-medium mb-4">
                {product.subtitle}
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B] hover:text-white transition-all"
          >
            Comparar Speak según tamaño de sala
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function VideoConferencing({ scrollToSection }: any) {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Video conferencing Jabra: personal y salas
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
            Desde tu escritorio hasta salas completas: presencia, encuadre y audio para reuniones inclusivas.
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="size-20 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
                <Camera className="size-10" />
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-medium mb-3">
                  Personal
                </span>
                <h3 className="text-2xl font-semibold text-[#282327] mb-3">
                  PanaCast 20
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-6">
                  Cámara personal con IA integrada para una imagen nítida en 4K, pensada para trabajo profesional desde cualquier lugar.
                </p>
                <Button 
                  size="sm"
                  className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
                  onClick={() => scrollToSection('cta-wizard')}
                >
                  Quiero cámara personal
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Salas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="size-20 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
                <Video className="size-10" />
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-medium mb-3">
                  Salas
                </span>
                <h3 className="text-2xl font-semibold text-[#282327] mb-3">
                  PanaCast 50 / Video Bar / Room System
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-4">
                  Solución para salas con cobertura panorámica y experiencias inteligentes para reuniones inclusivas.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Teams Rooms', 'Zoom Rooms', 'Gestión remota'].map((badge, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-[#E94E1B]/10 border border-[#E94E1B]/20 text-[#E94E1B] rounded-full text-xs font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <Button 
                  size="sm"
                  className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
                  onClick={() => scrollToSection('room-configurator')}
                >
                  Diseñar sala con Jabra
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RoomConfigurator({ scrollToSection }: any) {
  const [config, setConfig] = useState({
    size: 'personal',
    platform: 'teams',
    mode: 'byod',
    participants: '2-4'
  });

  const updateConfig = (field: string, value: string) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  const getRecommendation = () => {
    if (config.size === 'personal') {
      return {
        title: 'Kit Personal Profesional',
        includes: ['PanaCast 20 (cámara 4K)', 'Evolve2 65 (headset)', 'Speak2 40 (portátil)'],
        why: 'Máxima flexibilidad para trabajo desde cualquier lugar'
      };
    } else if (config.size === 'huddle') {
      return {
        title: 'Kit Huddle Room',
        includes: ['Speak2 75 + PanaCast 20', 'Certificación Teams/Zoom', 'Plug & play'],
        why: 'Reuniones ad-hoc sin fricción técnica'
      };
    } else if (config.size === 'small') {
      return {
        title: 'Sala Pequeña (4-6 personas)',
        includes: ['PanaCast 50 (video bar)', 'Audio inteligente 180°', 'Gestión remota'],
        why: 'Cobertura panorámica con calidad broadcast'
      };
    } else {
      return {
        title: 'Sala Mediana (8-12 personas)',
        includes: ['PanaCast 50 + Room System', 'Touchscreen controller', 'IA de encuadre'],
        why: 'Experiencia inmersiva para reuniones grandes'
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <section id="room-configurator" className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Configurá tu kit en 30 segundos
          </h2>
        </motion.div>

        <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-3xl p-8 md:p-12">
          <div className="space-y-8">
            {/* Tamaño de sala */}
            <div>
              <label className="block text-sm font-semibold text-[#282327] mb-4 uppercase tracking-wide">
                Tamaño de sala
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'personal', label: 'Personal' },
                  { value: 'huddle', label: 'Huddle' },
                  { value: 'small', label: 'Pequeña' },
                  { value: 'medium', label: 'Mediana' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => updateConfig('size', option.value)}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                      config.size === option.value
                        ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Plataforma */}
            <div>
              <label className="block text-sm font-semibold text-[#282327] mb-4 uppercase tracking-wide">
                Plataforma
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'teams', label: 'Microsoft Teams' },
                  { value: 'zoom', label: 'Zoom' },
                  { value: 'meet', label: 'Google Meet' },
                  { value: 'mixed', label: 'Mixta' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => updateConfig('platform', option.value)}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                      config.platform === option.value
                        ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Modo */}
            <div>
              <label className="block text-sm font-semibold text-[#282327] mb-4 uppercase tracking-wide">
                Modo
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'byod', label: 'BYOD' },
                  { value: 'room', label: 'Room System' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => updateConfig('mode', option.value)}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                      config.mode === option.value
                        ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Participantes */}
            <div>
              <label className="block text-sm font-semibold text-[#282327] mb-4 uppercase tracking-wide">
                Participantes promedio
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '2-4', label: '2–4' },
                  { value: '5-8', label: '5–8' },
                  { value: '9-12', label: '9–12' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => updateConfig('participants', option.value)}
                    className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                      config.participants === option.value
                        ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Resultado */}
          <AnimatePresence mode="wait">
            <motion.div
              key={JSON.stringify(config)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-10 pt-8 border-t-2 border-neutral-200"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#282327] mb-6">
                Kit recomendado: {recommendation.title}
              </h3>
              
              <div className="mb-6">
                <p className="text-sm font-semibold text-neutral-700 mb-3 uppercase tracking-wide">
                  Qué incluye:
                </p>
                <ul className="space-y-2">
                  {recommendation.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#E94E1B]/5 border border-[#E94E1B]/20 rounded-xl p-4 mb-6">
                <p className="text-sm text-neutral-700">
                  <strong className="text-[#282327]">Por qué:</strong> {recommendation.why}
                </p>
              </div>

              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white w-full md:w-auto"
                onClick={() => scrollToSection('cta-wizard')}
              >
                Cotizar este kit
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SoftwareGestion() {
  const tools = [
    {
      icon: <Settings className="size-8" />,
      title: 'Jabra Direct',
      subtitle: 'Usuario / personalización',
      description: 'Ajustes y personalización del dispositivo para una experiencia consistente.'
    },
    {
      icon: <Shield className="size-8" />,
      title: 'Jabra Xpress',
      subtitle: 'IT / gestión y analítica',
      description: 'Gestión centralizada y herramientas de administración para entornos corporativos.'
    },
    {
      icon: <Zap className="size-8" />,
      title: 'Jabra+',
      subtitle: 'Plataforma unificada',
      description: 'Gestión de dispositivos de audio personal y soluciones de salas desde un solo lugar.'
    }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Gestión y adopción: dispositivos siempre listos
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
            Te ayudamos a estandarizar, actualizar y administrar la flota de dispositivos para reducir downtime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] mb-5">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#282327] mb-2">
                {tool.title}
              </h3>
              <p className="text-sm text-[#E94E1B] font-medium mb-3">
                {tool.subtitle}
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B] hover:text-white transition-all"
          >
            Quiero despliegue y gestión para mi equipo
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function Accesorios() {
  const categories = [
    { icon: <Wifi className="size-6" />, name: 'Cables & adaptadores' },
    { icon: <Zap className="size-6" />, name: 'Charging stands' },
    { icon: <Box className="size-6" />, name: 'Repuestos' },
    { icon: <Radio className="size-6" />, name: 'Estuches' },
    { icon: <Camera className="size-6" />, name: 'Accesorios de cámara' }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Accesorios oficiales para una experiencia completa
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
            Cables, cargadores, repuestos, estuches y accesorios para audio y video.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:border-[#E94E1B]/30 rounded-xl p-6 transition-all duration-300 hover:shadow-md text-center"
            >
              <div className="size-12 rounded-lg bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] mx-auto mb-3">
                {cat.icon}
              </div>
              <p className="text-xs md:text-sm text-neutral-700 font-medium">
                {cat.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-neutral-300 text-[#282327] hover:border-[#E94E1B] hover:text-[#E94E1B] transition-all"
          >
            Consultar accesorios
          </Button>
        </div>
      </div>
    </section>
  );
}

function TrenditIntegra() {
  const servicios = [
    { num: '01', title: 'Relevamiento & consultoria' },
    { num: '02', title: 'Diseño de solución' },
    { num: '03', title: 'Implementación & rollout' },
    { num: '04', title: 'Adopción & capacitación' },
    { num: '05', title: 'Gestión de dispositivos' },
    { num: '06', title: 'Soporte continuo' }
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
            Trendit integra Jabra de punta a punta
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            No vendemos cajas: implementamos ecosistemas de colaboración que funcionan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-[40px] font-bold text-[#E94E1B] mb-4">
                {servicio.num}
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                {servicio.title}
              </p>
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
      q: '¿Qué certificaciones tienen los headsets Jabra?',
      a: 'Jabra cuenta con certificaciones oficiales para Microsoft Teams, Zoom, Google Meet y otras plataformas UC. Esto garantiza compatibilidad nativa, funciones avanzadas y experiencia optimizada.'
    },
    {
      q: '¿Cómo elijo entre wireless y wired?',
      a: 'Wireless ofrece movilidad y flexibilidad, ideal para trabajo híbrido. Wired es más económico y no requiere carga, perfecto para uso fijo en contact centers o escritorios dedicados.'
    },
    {
      q: '¿Qué es ANC (Active Noise Cancellation)?',
      a: 'Tecnología que bloquea ruido externo (tráfico, conversaciones, ventiladores) para máxima concentración. Ideal para open offices, home office ruidoso o entornos con alta densidad de personas.'
    },
    {
      q: '¿Puedo usar Jabra con mi plataforma actual?',
      a: 'Sí. Jabra funciona con cualquier plataforma (Teams, Zoom, Meet, Webex, etc.) y con equipos BYOD o escritorios corporativos. Te ayudamos a elegir el modelo certificado para tu stack.'
    },
    {
      q: '¿Cómo se gestiona una flota de 50+ dispositivos?',
      a: 'Con Jabra Xpress podés actualizar firmware, configurar políticas, monitorear uso y recibir alertas desde un panel centralizado. Trendit te ayuda con el despliegue y la administración.'
    },
    {
      q: '¿Qué garantía y soporte ofrece Jabra?',
      a: 'Garantía de 2 años en headsets y cámaras, con opciones de extensión. Trendit brinda soporte técnico local, repuestos y gestión de RMA para minimizar downtime.'
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
              Armá tu solución Jabra en minutos
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 mb-10 leading-relaxed">
              Respondé 5 preguntas y recibí una propuesta técnica-comercial adaptada a tu equipo
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-10 text-base md:text-lg"
                onClick={() => setShowWizard(true)}
              >
                Iniciar consulta guiada
                <ArrowRight className="ml-2 size-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B] hover:text-white px-10 text-base md:text-lg transition-all"
                onClick={() => {
                  const msg = encodeURIComponent('Hola Trendit, necesito armar mi solución Jabra. Mi escenario: _____. Cantidad de usuarios: _____.');
                  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                Resolver por WhatsApp
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 mt-6">
              Respondemos en horario comercial. Para urgencias, indicalo en el mensaje.
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
    categoria: [] as string[],
    usuarios: '',
    plataforma: '',
    gestion: '',
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

  const toggleCategoria = (value: string) => {
    const current = formData.categoria;
    if (current.includes(value)) {
      updateField('categoria', current.filter(v => v !== value));
    } else {
      updateField('categoria', [...current, value]);
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.escenario !== '';
    if (step === 2) return formData.categoria.length > 0;
    if (step === 3) return formData.usuarios !== '' && formData.plataforma !== '';
    if (step === 4) return true;
    if (step === 5) return formData.empresa && formData.nombre && formData.email && formData.telefono;
    return true;
  };

  const handleSubmit = () => {
    alert('¡Consulta enviada! Un especialista Trendit te contactará en breve para diseñar tu solución Jabra.');
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
              Consulta guiada Jabra
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
                  {[
                    'Trabajo remoto',
                    'Oficina híbrida',
                    'Contact Center',
                    'Salas de reunión',
                    'Huddle / salas pequeñas',
                    'Equipos ejecutivos'
                  ].map(esc => (
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
              <WizardStep key="step2" title="Categoría de productos (seleccioná varios)">
                <div className="flex flex-wrap gap-4">
                  {['Headsets', 'Speakerphones', 'Video personal', 'Video salas', 'Accesorios'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => toggleCategoria(cat)}
                      className={`px-6 py-4 rounded-xl border-2 transition-all ${
                        formData.categoria.includes(cat)
                          ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 3 && (
              <WizardStep key="step3" title="Usuarios y plataforma">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      Cantidad de usuarios
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 25 usuarios"
                      value={formData.usuarios}
                      onChange={(e) => updateField('usuarios', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      Plataforma principal
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Microsoft Teams', 'Zoom', 'Google Meet', 'Mixta'].map(plat => (
                        <button
                          key={plat}
                          onClick={() => updateField('plataforma', plat)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${
                            formData.plataforma === plat
                              ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                              : 'border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          {plat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </WizardStep>
            )}

            {step === 4 && (
              <WizardStep key="step4" title="Gestión de dispositivos">
                <div className="space-y-4">
                  {[
                    { value: 'si', label: 'Sí, necesito gestión centralizada' },
                    { value: 'nose', label: 'No sé, quiero que me asesoren' },
                    { value: 'no', label: 'No, solo equipamiento' }
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => updateField('gestion', opt.value)}
                      className={`w-full p-5 rounded-xl border-2 text-left transition-all ${
                        formData.gestion === opt.value
                          ? 'border-[#E94E1B] bg-[#E94E1B]/5'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-base font-medium text-[#282327]">{opt.label}</span>
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
                    placeholder="Contanos más sobre tu necesidad o plazos"
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Video,
  Headphones,
  Camera,
  Monitor,
  Keyboard,
  Mouse,
  Settings,
  Home as HomeIcon,
  MessageCircle,
  X,
  CheckCircle2,
  Users,
  Zap,
  Eye,
  TrendingUp,
  Shield,
  Layers,
  Award,
  Presentation,
  Laptop,
  Briefcase,
  Building2,
  GraduationCap,
  Wifi,
  Clock,
  Layout
} from 'lucide-react';
import { Button } from '../ui/button';

export function Logitech() {
  const whatsappNumber = '5493516013543';
  const whatsappMessage = encodeURIComponent(
    'Hola Trendit, necesito información sobre soluciones Logitech para colaboración híbrida. Mi necesidad: _____.'
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
      <QueResuelveLogitech />
      <ExploraPorNecesidad scrollToSection={scrollToSection} />
      <MeetingRooms scrollToSection={scrollToSection} />
      <WorkDesks scrollToSection={scrollToSection} />
      <SoftwareServices />
      <RoomConfigurator scrollToSection={scrollToSection} />
      <ServiciosTrendit />
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
          <span className="text-[#282327]">Logitech</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ scrollToSection, whatsappNumber, whatsappMessage }: any) {
  const [selectedTab, setSelectedTab] = useState(0);

  const chips = [
    'Meeting Rooms',
    'Work Desks',
    'Video Conferencing',
    'Headsets',
    'Webcams',
    'Docking',
    'Gestión & Servicios'
  ];

  const tabs = [
    { id: 0, label: 'Meeting Rooms' },
    { id: 1, label: 'Work Desks' },
    { id: 2, label: 'Espacios flexibles / Hot-desking' }
  ];

  const recommendations = [
    {
      title: 'Para Meeting Rooms te recomendamos…',
      desc: 'Video bars todo-en-uno + accesorios + gestión remota',
      products: [
        { name: 'Rally Bar + Sight', desc: 'Doble perspectiva para salas completas' },
        { name: 'Scribe', desc: 'Pizarra con IA para sesiones inclusivas' },
        { name: 'Tap Scheduler', desc: 'Reserva de salas inteligente' }
      ]
    },
    {
      title: 'Para Work Desks te recomendamos…',
      desc: 'Webcam 4K + headset profesional + docking con controles de reunión',
      products: [
        { name: 'MX Brio 705 for Business', desc: 'Webcam 4K premium para profesionales' },
        { name: 'Zone (headsets)', desc: 'Audio profesional con ANC' },
        { name: 'Logi Dock', desc: 'Dock todo-en-uno con controles' }
      ]
    },
    {
      title: 'Para Hot-desking te recomendamos…',
      desc: 'Reserva de escritorios + conexión de un cable + administración',
      products: [
        { name: 'Logi Dock Flex', desc: 'Dock administrado para espacios flexibles' },
        { name: 'Logi Tune', desc: 'Reserva y mapas de escritorios' },
        { name: 'Sync', desc: 'Gestión remota centralizada' }
      ]
    }
  ];

  const currentRec = recommendations[selectedTab];

  return (
    <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>

      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E94E1B] rounded-full blur-[120px] opacity-20" />

      <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        <div className="max-w-[1200px]">
          <div>
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-white mb-4 md:mb-6">
              Logitech en Trendit: colaboración híbrida, de escritorio a sala
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-[1.6] max-w-2xl">
              Implementamos ecosistemas Logitech para trabajo moderno: Meeting Rooms, Work Desks y movilidad. Video, audio y gestión centralizada para que cada reunión funcione — y TI tenga control.
            </p>

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

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-6 md:px-8 group shadow-lg shadow-[#E94E1B]/20 w-full sm:w-auto"
                onClick={() => scrollToSection('cta-wizard')}
              >
                Configurar mi solución
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
              onClick={() => scrollToSection('explorar-necesidad')}
              className="text-sm md:text-base text-white/70 hover:text-white underline underline-offset-4 mb-8 md:mb-10 transition-colors"
            >
              Explorar por producto →
            </button>

            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                Selector de escenario
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
                <p className="text-[#E94E1B] font-medium mb-4 text-sm md:text-base">
                  {currentRec.title}
                </p>
                <p className="text-sm text-white/70 mb-6">
                  {currentRec.desc}
                </p>
                
                <div className="space-y-3">
                  {currentRec.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 hover:border-[#E94E1B]/50 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white mb-1">{product.name}</p>
                          <p className="text-xs text-white/60">{product.desc}</p>
                        </div>
                        <ChevronRight className="size-5 text-white/40 flex-shrink-0" />
                      </div>
                    </div>
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

function QueResuelveLogitech() {
  const items = [
    {
      icon: <Zap className="size-10" />,
      title: 'Reuniones simples',
      description: 'Inicio rápido, audio/video nítidos y experiencia consistente.'
    },
    {
      icon: <TrendingUp className="size-10" />,
      title: 'Productividad en escritorio',
      description: 'Periféricos que ordenan el espacio y mejoran foco y comunicación.'
    },
    {
      icon: <Eye className="size-10" />,
      title: 'Gestión para TI',
      description: 'Visibilidad, actualizaciones y soporte para salas y dispositivos.'
    },
    {
      icon: <Layers className="size-10" />,
      title: 'Escalabilidad',
      description: 'De 1 sala a múltiples sedes, sin complejidad operativa.'
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
            La nueva lógica del trabajo, con experiencia enterprise
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
              className="group bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/5 group-hover:bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#282327] mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.6]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploraPorNecesidad({ scrollToSection }: any) {
  const necesidades = [
    {
      icon: <Users className="size-8" />,
      title: 'Sala tradicional',
      dolor: 'Audio pobre, video pixelado, experiencia inconsistente',
      soluciones: ['Rally Bar', 'Gestión Sync']
    },
    {
      icon: <Presentation className="size-8" />,
      title: 'Sala mediana/grande',
      dolor: 'Difícil ver a todos, puntos ciegos, setup complejo',
      soluciones: ['Rally Bar + Sight', 'Tap Scheduler']
    },
    {
      icon: <Building2 className="size-8" />,
      title: 'Huddle room',
      dolor: 'Espacios pequeños sin tecnología, equipos traen su setup',
      soluciones: ['Rally Bar Mini', 'Plug & play']
    },
    {
      icon: <GraduationCap className="size-8" />,
      title: 'Aula / capacitación',
      dolor: 'Participantes remotos no ven pizarra ni oyen bien',
      soluciones: ['Scribe', 'Rally Bar']
    },
    {
      icon: <Briefcase className="size-8" />,
      title: 'Escritorio ejecutivo',
      dolor: 'Imagen poco profesional, muchos cables, distracciones',
      soluciones: ['MX Brio 4K', 'Zone headset']
    },
    {
      icon: <Wifi className="size-8" />,
      title: 'Equipos distribuidos / home office',
      dolor: 'TI sin visibilidad, soporte reactivo, experiencia fragmentada',
      soluciones: ['Logi Tune', 'Sync']
    }
  ];

  return (
    <section id="explorar-necesidad" className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Elegí tu escenario y te llevamos al kit ideal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {necesidades.map((nec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-14 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] mb-4">
                {nec.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#282327] mb-3">
                {nec.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                  Dolor típico
                </p>
                <p className="text-sm text-neutral-700">{nec.dolor}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {nec.soluciones.map((sol, i) => (
                  <span key={i} className="px-3 py-1 bg-[#E94E1B]/10 border border-[#E94E1B]/20 text-[#E94E1B] rounded-full text-xs font-medium">
                    {sol}
                  </span>
                ))}
              </div>

              <Button
                size="sm"
                variant="outline"
                className="w-full border-2 border-neutral-300 hover:border-[#E94E1B] hover:text-[#E94E1B]"
                onClick={() => scrollToSection('cta-wizard')}
              >
                Consultar
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetingRooms({ scrollToSection }: any) {
  const [activeSection, setActiveSection] = useState('video-bars');

  const sections = [
    { id: 'video-bars', label: 'Video Bars' },
    { id: 'camaras', label: 'Cámaras & complementos' },
    { id: 'programacion', label: 'Programación de salas' },
    { id: 'pizarras', label: 'Pizarras' },
    { id: 'accesorios', label: 'Accesorios' }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Meeting Rooms: salas listas para videocolaboración
          </h2>
        </motion.div>

        {/* Subnav sticky */}
        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-y border-neutral-200 -mx-4 sm:-mx-6 lg:-mx-12 px-4 sm:px-6 lg:px-12 py-4 mb-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-[#E94E1B] text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeSection === 'video-bars' && <VideoBarsSection scrollToSection={scrollToSection} />}
            {activeSection === 'camaras' && <CamarasSection scrollToSection={scrollToSection} />}
            {activeSection === 'programacion' && <ProgramacionSection scrollToSection={scrollToSection} />}
            {activeSection === 'pizarras' && <PizarrasSection scrollToSection={scrollToSection} />}
            {activeSection === 'accesorios' && <AccesoriosSection />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function VideoBarsSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Video bars todo-en-uno con IA integrada
      </h3>
      
      <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 mb-6 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-6">
          <div className="size-16 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
            <Video className="size-8" />
          </div>
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-[#E94E1B]/10 border border-[#E94E1B]/20 text-[#E94E1B] rounded-full text-xs font-medium mb-3">
              Destacado
            </span>
            <h4 className="text-xl font-semibold text-[#282327] mb-3">
              Rally Bar
            </h4>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-6">
              Barra de video todo-en-uno con IA integrada, óptica avanzada y audio potente para salas de reunión de medianas a grandes. Experiencia premium con gestión centralizada.
            </p>
            <Button 
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
              onClick={() => scrollToSection('room-configurator')}
            >
              Diseñar mi sala
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-[#282327] mb-4">
          Mejor perspectiva
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 transition-all">
            <Camera className="size-8 text-[#E94E1B] mb-3" />
            <h5 className="text-base font-semibold text-[#282327] mb-2">
              Sight (cámara de mesa)
            </h5>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Combiná una barra al frente con una cámara en la mesa para mostrar el mejor ángulo durante las interacciones en sala.
            </p>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 transition-all">
            <Monitor className="size-8 text-[#E94E1B] mb-3" />
            <h5 className="text-base font-semibold text-[#282327] mb-2">
              Tap / Controladores
            </h5>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Experiencia consistente para entrar a reuniones y administrar sala con un toque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CamarasSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Cámaras y complementos
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Soluciones complementarias para capturar diferentes perspectivas y mejorar la experiencia de reunión.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 transition-all">
          <Camera className="size-10 text-[#E94E1B] mb-4" />
          <h4 className="text-lg font-semibold text-[#282327] mb-3">
            Sight
          </h4>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            Cámara de mesa compacta que ofrece una segunda perspectiva de la sala, ideal para capturar interacciones en la mesa o pizarra.
          </p>
          <Button 
            size="sm"
            variant="outline"
            className="border-2 border-neutral-300 hover:border-[#E94E1B] hover:text-[#E94E1B]"
            onClick={() => scrollToSection('cta-wizard')}
          >
            Consultar
          </Button>
        </div>

        <div className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 transition-all">
          <Layout className="size-10 text-[#E94E1B] mb-4" />
          <h4 className="text-lg font-semibold text-[#282327] mb-3">
            Tap
          </h4>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            Controlador táctil para gestionar reuniones, calendario y funciones de sala con interfaz intuitiva.
          </p>
          <Button 
            size="sm"
            variant="outline"
            className="border-2 border-neutral-300 hover:border-[#E94E1B] hover:text-[#E94E1B]"
            onClick={() => scrollToSection('cta-wizard')}
          >
            Consultar
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProgramacionSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Disponibilidad al instante
      </h3>
      
      <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-6">
          <div className="size-16 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
            <Clock className="size-8" />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-[#282327] mb-3">
              Tap Scheduler
            </h4>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-6">
              Panel de programación que muestra detalles de disponibilidad y permite reservar salas ad hoc o futuras para encontrar el espacio correcto. Integración con calendarios corporativos.
            </p>
            <Button 
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
              onClick={() => scrollToSection('cta-wizard')}
            >
              Implementar Tap Scheduler
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PizarrasSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Sesiones de ideas inclusivas
      </h3>
      
      <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-6">
          <div className="size-16 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
            <Presentation className="size-8" />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-[#282327] mb-3">
              Scribe
            </h4>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-6">
              Cámara para pizarra con IA que transmite el contenido con nitidez para participantes remotos y en sala. Captura automática de contenido y colaboración inclusiva sin importar la ubicación.
            </p>
            <Button 
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
              onClick={() => scrollToSection('cta-wizard')}
            >
              Implementar Scribe
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccesoriosSection() {
  const accesorios = [
    { name: 'Cables', icon: <Wifi className="size-6" /> },
    { name: 'Micrófonos', icon: <Settings className="size-6" /> },
    { name: 'Montajes', icon: <Layout className="size-6" /> },
    { name: 'Repuestos', icon: <Shield className="size-6" /> }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Accesorios que dan flexibilidad
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Cables, micrófonos, opciones de montaje y repuestos para adaptar cada instalación a tus necesidades específicas.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {accesorios.map((acc, idx) => (
          <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-6 text-center hover:border-[#E94E1B]/30 transition-all">
            <div className="size-12 rounded-lg bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] mx-auto mb-3">
              {acc.icon}
            </div>
            <p className="text-sm font-medium text-neutral-700">{acc.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkDesks({ scrollToSection }: any) {
  const [activeSection, setActiveSection] = useState('webcams');

  const sections = [
    { id: 'webcams', label: 'Webcams' },
    { id: 'headsets', label: 'Headsets' },
    { id: 'keyboards', label: 'Keyboards & Mice' },
    { id: 'docking', label: 'Docking' }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Work Desks: audio, video y periféricos para productividad
          </h2>
        </motion.div>

        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-y border-neutral-200 -mx-4 sm:-mx-6 lg:-mx-12 px-4 sm:px-6 lg:px-12 py-4 mb-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-[#E94E1B] text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeSection === 'webcams' && <WebcamsSection scrollToSection={scrollToSection} />}
            {activeSection === 'headsets' && <HeadsetsSection scrollToSection={scrollToSection} />}
            {activeSection === 'keyboards' && <KeyboardsSection scrollToSection={scrollToSection} />}
            {activeSection === 'docking' && <DockingSection scrollToSection={scrollToSection} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function WebcamsSection({ scrollToSection }: any) {
  const webcams = [
    {
      name: 'MX Brio 705 for Business',
      subtitle: '4K',
      desc: 'Video 4K superior con estética premium, pensada para profesionales y ejecutivos.',
      badge: 'Premium'
    },
    {
      name: 'Brio 505',
      subtitle: 'Plug & play',
      desc: 'Compatible con plataformas de videoconferencia y certificada para Teams, Meet y Zoom.',
      badge: null
    },
    {
      name: 'Brio 105',
      subtitle: 'Valor & despliegue fácil',
      desc: '1080p, fácil de implementar y usar, con obturador de privacidad integrado.',
      badge: null
    }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Webcams para uso profesional
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Desde ejecutivos hasta equipos completos, encuentra la webcam ideal según el rol y necesidad.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {webcams.map((webcam, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
            {webcam.badge && (
              <span className="inline-block px-3 py-1 bg-[#E94E1B]/10 border border-[#E94E1B]/20 text-[#E94E1B] rounded-full text-xs font-medium mb-3">
                {webcam.badge}
              </span>
            )}
            <Camera className="size-10 text-[#E94E1B] mb-4" />
            <h4 className="text-lg font-semibold text-[#282327] mb-2">
              {webcam.name}
            </h4>
            <p className="text-sm text-[#E94E1B] font-medium mb-3">
              {webcam.subtitle}
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {webcam.desc}
            </p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Recomendar webcam según rol
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function HeadsetsSection({ scrollToSection }: any) {
  const headsets = [
    {
      name: 'Zone Wireless 2',
      desc: 'Certificado para Teams como micrófono premium para Open Office, con certificaciones para Zoom y Google Meet (según configuración).',
      badge: 'Certificado Teams'
    },
    {
      name: 'Zone Vibe Wireless',
      desc: 'Diseño liviano para comodidad todo el día, con micrófonos con cancelación de ruido.',
      badge: 'Ligero y cómodo'
    }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Headsets profesionales para foco y llamadas
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Audio profesional con ANC para entornos de oficina abierta y trabajo híbrido.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {headsets.map((headset, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
            <span className="inline-block px-3 py-1 bg-[#E94E1B]/10 border border-[#E94E1B]/20 text-[#E94E1B] rounded-full text-xs font-medium mb-4">
              {headset.badge}
            </span>
            <Headphones className="size-10 text-[#E94E1B] mb-4" />
            <h4 className="text-lg font-semibold text-[#282327] mb-3">
              {headset.name}
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {headset.desc}
            </p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Elegir headset por nivel de ruido
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function KeyboardsSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Teclados y mouse para empresa
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Ergonomía y productividad para jornadas completas.
      </p>

      <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 mb-6 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-6">
          <div className="size-16 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
            <Keyboard className="size-8" />
          </div>
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-[#E94E1B]/10 border border-[#E94E1B]/20 text-[#E94E1B] rounded-full text-xs font-medium mb-3">
              Destacado
            </span>
            <h4 className="text-xl font-semibold text-[#282327] mb-3">
              Serie Ergo (ERGO K860 for Business)
            </h4>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-4">
              Ergonomía basada en ciencia para escritura más relajada y cómoda por horas. Reduce tensión en muñecas y mejora postura.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {['Productividad (combos)', 'Silent (ambientes compartidos)', 'Bolt / seguridad y despliegue'].map((item, idx) => (
          <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-5 text-center hover:border-[#E94E1B]/30 transition-all">
            <Mouse className="size-8 text-[#E94E1B] mx-auto mb-3" />
            <p className="text-sm font-medium text-neutral-700">{item}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Armar set por rol (Admin / Dev / Ejecutivo)
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function DockingSection({ scrollToSection }: any) {
  const docks = [
    {
      name: 'Logi Dock',
      desc: 'Estación base y manos libres todo-en-uno con controles de reunión de un toque; conecta periféricos y ordena el escritorio.',
      badge: 'Todo-en-uno'
    },
    {
      name: 'Logi Dock Flex',
      desc: 'Dock administrado para reserva de escritorios y gestión simple por TI. Ideal para espacios flexibles y hot-desking.',
      badge: 'Hot-desking'
    }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Docking + controles de reunión
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Simplifica tu escritorio con docks inteligentes que integran audio, video y controles.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {docks.map((dock, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
            <span className="inline-block px-3 py-1 bg-[#E94E1B]/10 border border-[#E94E1B]/20 text-[#E94E1B] rounded-full text-xs font-medium mb-4">
              {dock.badge}
            </span>
            <Laptop className="size-10 text-[#E94E1B] mb-4" />
            <h4 className="text-lg font-semibold text-[#282327] mb-3">
              {dock.name}
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {dock.desc}
            </p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Diseñar escritorio flexible
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function SoftwareServices() {
  const services = [
    {
      icon: <Settings className="size-8" />,
      title: 'Logitech Sync',
      desc: 'Configura, administra y actualiza dispositivos de forma remota; diagnóstico a distancia para salas y escritorios.'
    },
    {
      icon: <Users className="size-8" />,
      title: 'Logi Tune',
      desc: 'Personalizá dispositivos, reservá escritorios y conectate con compañeros; integración con Sync para control a escala.'
    },
    {
      icon: <Award className="size-8" />,
      title: 'Planes de servicio (Essential / Select)',
      desc: 'Reduce el esfuerzo de TI con herramientas, soporte y sustituciones rápidas; centraliza administración y maximiza la inversión.'
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
            Software y servicios: control, visibilidad y continuidad
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#282327] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {service.desc}
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
            Quiero gestión centralizada
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function RoomConfigurator({ scrollToSection }: any) {
  const [config, setConfig] = useState({
    size: 'huddle',
    platform: 'teams',
    mode: 'appliance',
    needs: [] as string[]
  });

  const updateConfig = (field: string, value: any) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  const toggleNeed = (need: string) => {
    const current = config.needs;
    if (current.includes(need)) {
      updateConfig('needs', current.filter(n => n !== need));
    } else {
      updateConfig('needs', [...current, need]);
    }
  };

  const getRecommendation = () => {
    if (config.size === 'huddle') {
      return {
        title: 'Kit Huddle Room',
        includes: ['Rally Bar Mini', 'Tap (controlador)', 'Cable kit'],
        why: 'Plug & play para espacios pequeños con experiencia premium'
      };
    } else if (config.size === 'small') {
      return {
        title: 'Kit Sala Pequeña',
        includes: ['Rally Bar', 'Tap Scheduler', 'Sight (opcional)'],
        why: 'Todo-en-uno con gestión y doble perspectiva'
      };
    } else if (config.size === 'medium') {
      return {
        title: 'Kit Sala Mediana',
        includes: ['Rally Bar', 'Sight', 'Scribe (si hay pizarra)', 'Tap Scheduler'],
        why: 'Cobertura completa con IA y colaboración inclusiva'
      };
    } else {
      return {
        title: 'Kit Sala Grande',
        includes: ['Rally Bar', 'Sight', 'Micrófonos adicionales', 'Tap Scheduler', 'Sync'],
        why: 'Máxima cobertura con gestión enterprise'
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <section id="room-configurator" className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Configurá tu sala en 45 segundos
          </h2>
        </motion.div>

        <div className="bg-white border-2 border-neutral-200 rounded-3xl p-8 md:p-12">
          <div className="space-y-8">
            {/* Tamaño de sala */}
            <div>
              <label className="block text-sm font-semibold text-[#282327] mb-4 uppercase tracking-wide">
                Tamaño de sala
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'huddle', label: 'Huddle' },
                  { value: 'small', label: 'Pequeña' },
                  { value: 'medium', label: 'Mediana' },
                  { value: 'large', label: 'Grande' }
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
                  { value: 'teams', label: 'Teams' },
                  { value: 'zoom', label: 'Zoom' },
                  { value: 'meet', label: 'Meet' },
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
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'appliance', label: 'Appliance' },
                  { value: 'usb', label: 'USB' },
                  { value: 'byod', label: 'BYOD' }
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

            {/* Necesidades */}
            <div>
              <label className="block text-sm font-semibold text-[#282327] mb-4 uppercase tracking-wide">
                Necesidades (seleccioná varios)
              </label>
              <div className="flex flex-wrap gap-3">
                {['Pizarra', 'Programación', 'Micrófonos extra', 'Gestión remota'].map(need => (
                  <button
                    key={need}
                    onClick={() => toggleNeed(need)}
                    className={`px-4 py-2.5 rounded-xl border-2 font-medium transition-all ${
                      config.needs.includes(need)
                        ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    {need}
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
                  <strong className="text-[#282327]">Por qué funciona:</strong> {recommendation.why}
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

function ServiciosTrendit() {
  const servicios = [
    { num: '01', title: 'Relevamiento (salas, acústica, red, UX de reunión)' },
    { num: '02', title: 'Diseño de arquitectura (kit por sala / por rol)' },
    { num: '03', title: 'Instalación y montaje (cableado, posicionamiento, pruebas)' },
    { num: '04', title: 'Puesta en marcha (plataforma, rooms, políticas TI)' },
    { num: '05', title: 'Capacitación y adopción' },
    { num: '06', title: 'Soporte + gestión continua (Sync / planes)' }
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
            Trendit integra Logitech de punta a punta
          </h2>
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
      q: '¿Qué kit conviene según tamaño de sala?',
      a: 'Huddle: Rally Bar Mini. Pequeña/Mediana: Rally Bar. Grande: Rally Bar + Sight + micrófonos adicionales. El tamaño, acústica y plataforma definen la configuración óptima.'
    },
    {
      q: '¿Appliance, USB o BYOD: cuál elegir?',
      a: 'Appliance (Teams/Zoom Rooms) para salas dedicadas con mejor gestión. USB para BYOD o laptops personales. BYOD para máxima flexibilidad pero menor control IT. Trendit te ayuda a evaluar según tu modelo de trabajo.'
    },
    {
      q: '¿Cómo se gestiona una flota de salas y escritorios?',
      a: 'Con Logitech Sync: actualizaciones remotas, diagnóstico, estadísticas de uso y alertas. Logi Tune para escritorios personales con reserva de espacios. Centralizado, escalable y con visibilidad total para IT.'
    },
    {
      q: '¿Qué webcam conviene para ejecutivos vs uso general?',
      a: 'Ejecutivos: MX Brio 705 (4K, estética premium). Uso general: Brio 505 (Full HD certificada). Despliegue masivo: Brio 105 (1080p, plug & play). La diferencia está en calidad de imagen, diseño y funciones avanzadas.'
    },
    {
      q: '¿Qué headset conviene para open office?',
      a: 'Zone Wireless 2 con ANC para bloquear ruido ambiental. Zone Vibe para uso liviano y cómodo. Ambos certificados para plataformas UC (Teams/Zoom/Meet) y diseñados para jornadas completas.'
    },
    {
      q: '¿Qué datos necesitan para cotizar rápido?',
      a: 'Tamaño de sala(s), plataforma (Teams/Zoom/Meet), cantidad de usuarios, necesidades especiales (pizarra, programación, hot-desking) y si ya tenés infraestructura (red, pantallas). Con eso armamos el kit ideal.'
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
              Armemos tu solución Logitech
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 mb-10 leading-relaxed">
              Completá el asistente y te enviamos recomendación + propuesta. Si preferís, resolvemos por WhatsApp.
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
                  const msg = encodeURIComponent('Hola Trendit, necesito armar mi solución Logitech. Mi necesidad: _____.');
                  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                Resolver por WhatsApp
              </Button>
            </div>
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
    objetivo: '',
    escenario: '',
    plataforma: '',
    salas: '',
    usuarios: '',
    sedes: '',
    extras: [] as string[],
    empresa: '',
    nombre: '',
    cargo: '',
    email: '',
    telefono: '',
    ciudad: '',
    mensaje: ''
  });

  const totalSteps = 6;

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleExtra = (value: string) => {
    const current = formData.extras;
    if (current.includes(value)) {
      updateField('extras', current.filter(v => v !== value));
    } else {
      updateField('extras', [...current, value]);
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.objetivo !== '';
    if (step === 2) return formData.escenario !== '';
    if (step === 3) return formData.plataforma !== '';
    if (step === 4) return formData.salas || formData.usuarios;
    if (step === 5) return true;
    if (step === 6) return formData.empresa && formData.nombre && formData.email && formData.telefono;
    return true;
  };

  const handleSubmit = () => {
    alert('¡Consulta enviada! Un especialista Trendit te contactará en breve con tu solución Logitech.');
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
        <div className="px-6 md:px-8 py-6 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#282327]">
              Asistente Logitech
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

        <div className="h-2 bg-neutral-100">
          <div 
            className="h-full bg-[#E94E1B] transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <WizardStep key="step1" title="¿Qué querés resolver?">
                <div className="grid md:grid-cols-2 gap-4">
                  {['Meeting Rooms', 'Work Desks', 'Hot-desking', 'Mixto'].map(obj => (
                    <button
                      key={obj}
                      onClick={() => updateField('objetivo', obj)}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        formData.objetivo === obj
                          ? 'border-[#E94E1B] bg-[#E94E1B]/5'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-base md:text-lg font-medium text-[#282327]">{obj}</span>
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 2 && (
              <WizardStep key="step2" title="Escenario">
                <div className="grid md:grid-cols-2 gap-4">
                  {['Huddle', 'Sala pequeña', 'Sala mediana', 'Sala grande', 'Escritorio', 'Multi-sede'].map(esc => (
                    <button
                      key={esc}
                      onClick={() => updateField('escenario', esc)}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        formData.escenario === esc
                          ? 'border-[#E94E1B] bg-[#E94E1B]/5'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-base font-medium text-[#282327]">{esc}</span>
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 3 && (
              <WizardStep key="step3" title="Plataforma">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Teams', 'Zoom', 'Meet', 'Mixta'].map(plat => (
                    <button
                      key={plat}
                      onClick={() => updateField('plataforma', plat)}
                      className={`px-6 py-4 rounded-xl border-2 transition-all ${
                        formData.plataforma === plat
                          ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {plat}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 4 && (
              <WizardStep key="step4" title="Cantidad">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      # Salas
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 5 salas"
                      value={formData.salas}
                      onChange={(e) => updateField('salas', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      # Usuarios
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 50 usuarios"
                      value={formData.usuarios}
                      onChange={(e) => updateField('usuarios', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      # Sedes
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 3 sedes"
                      value={formData.sedes}
                      onChange={(e) => updateField('sedes', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </WizardStep>
            )}

            {step === 5 && (
              <WizardStep key="step5" title="Extras (seleccioná varios)">
                <div className="flex flex-wrap gap-3">
                  {['Tap Scheduler', 'Scribe', 'Sight', 'Sync', 'Servicios (Essential/Select)'].map(extra => (
                    <button
                      key={extra}
                      onClick={() => toggleExtra(extra)}
                      className={`px-5 py-3 rounded-xl border-2 transition-all ${
                        formData.extras.includes(extra)
                          ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {extra}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 6 && (
              <WizardStep key="step6" title="Contacto">
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
                  
                  <input
                    type="text"
                    placeholder="Cargo"
                    value={formData.cargo}
                    onChange={(e) => updateField('cargo', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                  />
                  
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
                    placeholder="Contanos más sobre tu necesidad"
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

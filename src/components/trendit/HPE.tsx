import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  CheckCircle2,
  Network,
  Wifi,
  Shield,
  Server,
  Database,
  Cpu,
  Cloud,
  Zap,
  Settings,
  Users,
  Building2,
  Lock,
  TrendingUp,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  Globe,
  Eye,
  Award,
  HelpCircle,
  Package,
  Boxes,
  MonitorSmartphone,
  Laptop,
  Rocket
} from 'lucide-react';
import { Button } from '../ui/button';
import { AgendarReunionMarcasModal } from './AgendarReunionMarcasModal';
import { AgendarReunionArubaModal } from './AgendarReunionArubaModal';
import { AgendarReunionGreenLakeModal } from './AgendarReunionGreenLakeModal';

export function HPE() {
  const [isGeneralModalOpen, setIsGeneralModalOpen] = React.useState(false);
  const [isArubaModalOpen, setIsArubaModalOpen] = React.useState(false);
  const [isGreenLakeModalOpen, setIsGreenLakeModalOpen] = React.useState(false);
  const [initialArea, setInitialArea] = React.useState<string>('');

  const handleOpenGeneralModal = (area?: string) => {
    if (area) {
      setInitialArea(area);
    }
    setIsGeneralModalOpen(true);
  };

  const handleOpenArubaModal = () => {
    setIsArubaModalOpen(true);
  };

  const handleOpenGreenLakeModal = () => {
    setIsGreenLakeModalOpen(true);
  };

  const handleWhatsApp = (message?: string) => {
    const defaultMessage = "Hola Trendit, quiero asesoramiento sobre HPE (Aruba / GreenLake / ProLiant / Storage). Mi empresa es ____ y necesito ____.";
    const encodedMessage = encodeURIComponent(message || defaultMessage);
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
      <HPEHero 
        onOpenModal={handleOpenGeneralModal} 
        onWhatsApp={handleWhatsApp}
        scrollToSection={scrollToSection}
      />
      <QueResolvemos />
      <NetworkingAruba onOpenArubaModal={handleOpenArubaModal} onWhatsApp={handleWhatsApp} />
      <GreenLake onOpenGreenLakeModal={handleOpenGreenLakeModal} />
      <ComputeDataCenter onOpenModal={handleOpenGeneralModal} />
      <Storage onOpenModal={handleOpenGeneralModal} />
      <ServiciosTrendit />
      <Microinformatica onOpenModal={handleOpenGeneralModal} />
      <FAQ />
      <CTAFinal onOpenModal={handleOpenGeneralModal} onWhatsApp={handleWhatsApp} />
      
      <AgendarReunionMarcasModal 
        isOpen={isGeneralModalOpen} 
        onClose={() => setIsGeneralModalOpen(false)}
        initialArea={initialArea}
      />
      <AgendarReunionArubaModal 
        isOpen={isArubaModalOpen} 
        onClose={() => setIsArubaModalOpen(false)}
      />
      <AgendarReunionGreenLakeModal 
        isOpen={isGreenLakeModalOpen} 
        onClose={() => setIsGreenLakeModalOpen(false)}
      />
    </div>
  );
}

interface HPEHeroProps {
  onOpenModal: () => void;
  onWhatsApp: (message?: string) => void;
  scrollToSection: (id: string) => void;
}

function HPEHero({ onOpenModal, onWhatsApp, scrollToSection }: HPEHeroProps) {
  const navPills = [
    { label: 'Qué resolvemos', id: 'que-resolvemos' },
    { label: 'Aruba Networking', id: 'networking-aruba' },
    { label: 'Access Points', id: 'networking-aruba' },
    { label: 'Switching', id: 'networking-aruba' },
    { label: 'Wi-Fi Campus', id: 'networking-aruba' },
    { label: 'Instant On (SMB)', id: 'networking-aruba' },
    { label: 'GreenLake', id: 'greenlake' },
    { label: 'Servidores ProLiant', id: 'compute-ai' },
    { label: 'Storage Alletra', id: 'storage' },
    { label: 'Data Center para IA', id: 'compute-ai' },
    { label: 'HPC/Cray', id: 'compute-ai' },
    { label: 'Servicios', id: 'servicios' },
  ];

  const chips = [
    'Aruba Networking',
    'Access Points',
    'Switching',
    'Wi-Fi Campus',
    'Instant On (SMB)',
    'GreenLake',
    'Servidores ProLiant',
    'Storage Alletra',
    'Data Center para IA',
    'HPC/Cray',
    'Servicios'
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
                href="/" 
                className="text-neutral-400 hover:text-white transition-colors"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                Inicio
              </a>
              <ChevronRight className="size-3.5 text-neutral-500" />
              <a 
                href="/marcas-partners" 
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
                HPE
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
              HPE en Trendit: Aruba Networking, GreenLake y data centers para IA
            </h1>

            {/* Subtitle */}
            <p 
              className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.65] mb-8 text-neutral-300 max-w-[680px]"
              style={{
                fontFamily: 'Campton, sans-serif',
                fontWeight: 400
              }}
            >
              Diseñamos e integramos infraestructura HPE para campus, sucursales y data centers: conectividad segura, Wi-Fi de alta densidad, cómputo y storage con consumo flexible.
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
                onClick={() => onWhatsApp('Hola Trendit, quiero asesoramiento sobre HPE (Aruba/GreenLake/ProLiant/Alletra). ¿Podemos coordinar una reunión?')}
                className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm w-full sm:w-auto transition-all duration-300 h-[56px]"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                Hablar por WhatsApp
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
  const items = [
    {
      icon: Network,
      title: 'Redes Aruba seguras y escalables',
      description: 'Campus, sucursales y depósitos con segmentación, rendimiento y crecimiento planificado.'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi de alta densidad',
      description: 'Cobertura estable, roaming inteligente y experiencia consistente para miles de dispositivos.'
    },
    {
      icon: Settings,
      title: 'Switching + acceso optimizado',
      description: 'Backbone y acceso con diseño profesional para operar sin cuellos de botella.'
    },
    {
      icon: Cloud,
      title: 'GreenLake: consumo flexible',
      description: 'Modelo as-a-service para modernizar por etapas, con escalabilidad y control.'
    },
    {
      icon: Server,
      title: 'Compute ProLiant listo para IA',
      description: 'Virtualización y cargas críticas con soporte enterprise y roadmap de crecimiento.'
    },
    {
      icon: Database,
      title: 'Storage Alletra + continuidad',
      description: 'Rendimiento y resiliencia para datos, backup y aplicaciones esenciales.'
    },
  ];

  return (
    <section id="que-resolvemos" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="mb-4 text-neutral-900"
            style={{ fontFamily: 'Campton, sans-serif' }}
          >
            Qué resolvemos con HPE
          </h2>
          <p 
            className="text-neutral-600 text-[17px] md:text-[18px] max-w-3xl mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Redes Aruba seguras, cómputo y storage para cargas críticas, y evolución gradual con GreenLake (consumo flexible).
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-[#E94E1B]/30 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="size-14 rounded-xl bg-gradient-to-br from-[#E94E1B] to-[#d44317] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <item.icon className="size-7 text-white" />
              </div>
              <h3 
                className="mb-3 text-neutral-900 text-center"
                style={{ fontFamily: 'Campton, sans-serif' }}
              >
                {item.title}
              </h3>
              <p 
                className="text-neutral-600 text-[15px] leading-relaxed text-center"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface NetworkingArubaProps {
  onOpenArubaModal: () => void;
  onWhatsApp: (message?: string) => void;
}

function NetworkingAruba({ onOpenArubaModal, onWhatsApp }: NetworkingArubaProps) {
  const cards = [
    {
      icon: Wifi,
      title: 'Wi-Fi Corporativo (Access Points)',
      description: 'Cobertura profesional, alta densidad, roaming estable, seguridad y segmentación avanzada para campus y operación distribuida.',
      cta: 'Diseñar red Wi-Fi'
    },
    {
      icon: Network,
      title: 'Switching & Campus',
      description: 'Backbone de red, segmentación, rendimiento garantizado y operación estable para infraestructuras críticas.',
      cta: 'Consultar switching'
    },
    {
      icon: Settings,
      title: 'Gestión y configuración simple',
      description: 'Estandarización, plantillas, monitoreo centralizado y buenas prácticas de despliegue para operación eficiente.',
      cta: 'Explorar gestión'
    },
    {
      icon: Zap,
      title: 'Aruba Instant On (SMB)',
      description: 'Implementación ágil, costo eficiente y administración simple para sucursales y pequeñas oficinas.',
      cta: 'Ver Instant On'
    },
  ];

  return (
    <section id="networking-aruba" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E94E1B] rounded-full blur-[180px] opacity-10" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="mb-4 text-white"
            style={{ fontFamily: 'Campton, sans-serif' }}
          >
            Networking con HPE Aruba
          </h2>
          <p 
            className="text-neutral-300 text-[17px] md:text-[18px] max-w-3xl mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Soluciones de red profesionales para campus, sucursales y operación distribuida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#E94E1B]/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="size-14 rounded-xl bg-gradient-to-br from-[#E94E1B] to-[#d44317] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="size-7 text-white" />
              </div>
              <h3 
                className="mb-3 text-white"
                style={{ fontFamily: 'Campton, sans-serif' }}
              >
                {card.title}
              </h3>
              <p 
                className="text-neutral-300 text-[15px] mb-6"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                {card.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={onOpenArubaModal}
                  className="bg-[#E94E1B] hover:bg-[#d44317] text-white text-[14px] px-5 py-2 rounded-lg transition-all duration-300"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
                >
                  {card.cta}
                </Button>
                <Button
                  onClick={() => onWhatsApp('Hola Trendit, necesito asesoramiento sobre Aruba Networking.')}
                  variant="outline"
                  className="bg-transparent border border-white/20 text-white hover:bg-white/10 text-[14px] px-5 py-2 rounded-lg transition-all duration-300"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
                >
                  <MessageCircle className="mr-2 size-4" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface GreenLakeProps {
  onOpenGreenLakeModal: () => void;
}

function GreenLake({ onOpenGreenLakeModal }: GreenLakeProps) {
  const steps = [
    {
      number: '01',
      title: 'Consumo flexible',
      description: 'Paga por lo que usas, sin grandes inversiones iniciales'
    },
    {
      number: '02',
      title: 'Control centralizado',
      description: 'Gestión unificada de toda tu infraestructura híbrida'
    },
    {
      number: '03',
      title: 'Escalabilidad inmediata',
      description: 'Crece según demanda sin fricción operativa'
    },
  ];

  return (
    <section id="greenlake" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Content */}
          <div>
            <h2 
              className="mb-5 text-neutral-900"
              style={{ fontFamily: 'Campton, sans-serif' }}
            >
              HPE GreenLake explicado simple
            </h2>
            <p 
              className="text-neutral-700 text-[17px] md:text-[18px] mb-8 leading-relaxed"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            >
              Consumo flexible + control + gestión, para infraestructura híbrida sin comprometer performance ni compliance.
            </p>

            <div className="space-y-6 mb-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <span 
                      className="text-white"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 
                      className="mb-1 text-neutral-900"
                      style={{ fontFamily: 'Campton, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-neutral-600 text-[15px]"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={onOpenGreenLakeModal}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 rounded-xl shadow-lg shadow-emerald-900/20 transition-all duration-300 group"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
            >
              Explorar GreenLake (asistente)
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-neutral-200">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Cloud className="size-7 text-white" />
                  </div>
                  <div>
                    <div className="text-[13px] text-neutral-500 mb-1" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}>
                      Modelo de consumo
                    </div>
                    <div className="text-neutral-900" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
                      As-a-Service
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Server, label: 'Compute' },
                    { icon: Database, label: 'Storage' },
                    { icon: Network, label: 'Networking' },
                    { icon: Shield, label: 'Security' },
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-4 text-center border border-neutral-200"
                    >
                      <item.icon className="size-6 text-emerald-600 mx-auto mb-2" />
                      <div 
                        className="text-neutral-700 text-[13px]"
                        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="size-5 text-emerald-600" />
                    <span 
                      className="text-emerald-900"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                    >
                      Gestión centralizada
                    </span>
                  </div>
                  <p 
                    className="text-emerald-800 text-[13px]"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                  >
                    Control total desde consola única
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ComputeDataCenterProps {
  onOpenModal: (area?: string) => void;
}

function ComputeDataCenter({ onOpenModal }: ComputeDataCenterProps) {
  const cards = [
    {
      icon: Server,
      title: 'HPE ProLiant Compute',
      description: 'Servidores enterprise para virtualización, aplicaciones críticas y cargas de trabajo intensivas con máxima confiabilidad.',
      area: 'Servidores ProLiant'
    },
    {
      icon: Cpu,
      title: 'Data Center para IA',
      description: 'Preparación de infraestructura: energía, cooling, red de alto rendimiento y escalabilidad para escenarios de inteligencia artificial.',
      area: 'Data Center IA'
    },
    {
      icon: Rocket,
      title: 'HPC / Cray',
      description: 'Alto rendimiento para escenarios extremos: simulación, investigación científica y cómputo masivo paralelo.',
      area: 'HPC/Cray'
    },
  ];

  return (
    <section id="compute-ai" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="mb-4 text-neutral-900"
            style={{ fontFamily: 'Campton, sans-serif' }}
          >
            Compute y Data Center para IA
          </h2>
          <p 
            className="text-neutral-600 text-[17px] md:text-[18px] max-w-3xl mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Infraestructura de cómputo para cargas críticas, virtualización y preparación para inteligencia artificial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 border border-neutral-200 hover:border-[#E94E1B]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="size-14 rounded-xl bg-gradient-to-br from-[#E94E1B] to-[#d44317] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="size-7 text-white" />
              </div>
              <h3 
                className="mb-3 text-neutral-900"
                style={{ fontFamily: 'Campton, sans-serif' }}
              >
                {card.title}
              </h3>
              <p 
                className="text-neutral-600 text-[15px] mb-6"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                {card.description}
              </p>
              
              <Button
                onClick={() => onOpenModal(card.area)}
                className="w-full bg-[#E94E1B] hover:bg-[#d44317] text-white text-[14px] px-5 py-2 rounded-lg transition-all duration-300"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
              >
                Agendar reunión
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface StorageProps {
  onOpenModal: (area?: string) => void;
}

function Storage({ onOpenModal }: StorageProps) {
  const features = [
    {
      icon: Database,
      title: 'Storage enterprise y crecimiento',
      description: 'Capacidad escalable para datos críticos'
    },
    {
      icon: Zap,
      title: 'Performance y disponibilidad',
      description: 'Acceso rápido y operación continua'
    },
    {
      icon: Shield,
      title: 'Escalabilidad y protección',
      description: 'Expansión sin interrupciones + backup'
    },
  ];

  return (
    <section id="storage" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="mb-4 text-neutral-900"
            style={{ fontFamily: 'Campton, sans-serif' }}
          >
            Storage (HPE Alletra + expansión)
          </h2>
          <p 
            className="text-neutral-600 text-[17px] md:text-[18px] max-w-3xl mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Almacenamiento enterprise con performance, disponibilidad y escalabilidad para operación crítica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-[#E94E1B]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="size-12 rounded-xl bg-gradient-to-br from-[#E94E1B] to-[#d44317] flex items-center justify-center mb-4">
                <feature.icon className="size-6 text-white" />
              </div>
              <h3 
                className="mb-2 text-neutral-900"
                style={{ fontFamily: 'Campton, sans-serif' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-neutral-600 text-[15px]"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => onOpenModal('Storage')}
            className="bg-[#E94E1B] hover:bg-[#d44317] text-white px-8 py-6 rounded-xl shadow-lg shadow-orange-900/20 transition-all duration-300 group"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
          >
            Cotizar storage
            <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiciosTrendit() {
  const servicios = [
    {
      icon: Settings,
      title: 'Diseño e implementación',
      description: 'Arquitectura, despliegue y puesta en marcha con buenas prácticas'
    },
    {
      icon: Award,
      title: 'Documentación y continuidad',
      description: 'Transferencia de conocimiento y soporte operativo'
    },
    {
      icon: Boxes,
      title: 'Integración con stack existente',
      description: 'Compatibilidad y convivencia con infraestructura actual'
    },
  ];

  return (
    <section id="servicios" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="mb-4 text-neutral-900"
            style={{ fontFamily: 'Campton, sans-serif' }}
          >
            Servicios Trendit para soluciones HPE
          </h2>
          <p 
            className="text-neutral-600 text-[17px] md:text-[18px] max-w-3xl mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Implementamos, sostenemos y hacemos crecer tu infraestructura HPE
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((servicio, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="size-14 rounded-xl bg-neutral-900 flex items-center justify-center mb-5">
                <servicio.icon className="size-7 text-[#E94E1B]" />
              </div>
              <h3 
                className="mb-3 text-neutral-900"
                style={{ fontFamily: 'Campton, sans-serif' }}
              >
                {servicio.title}
              </h3>
              <p 
                className="text-neutral-600 text-[15px]"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                {servicio.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface MicroinformaticaProps {
  onOpenModal: (area?: string) => void;
}

function Microinformatica({ onOpenModal }: MicroinformaticaProps) {
  const [activeSegment, setActiveSegment] = React.useState<'oficina' | 'corporativo' | 'creadores'>('oficina');

  const segments = {
    oficina: {
      id: 'oficina',
      label: 'Oficina / End-User',
      icon: Users,
      paraquien: 'Usuarios de oficina, roles administrativos, ventas y operación estándar que necesitan equipamiento confiable sin complejidad.',
      lineas: [
        { name: 'HP ProBook', desc: 'Equilibrio costo/beneficio para equipos de oficina' },
        { name: 'HP EliteBook', desc: 'Mejor construcción, seguridad y movilidad para roles críticos' },
        { name: 'HP Pavilion/Envy', desc: 'Consumo liviano cuando no se requiere gestión corporativa' }
      ],
      beneficios: [
        'Puesto de trabajo estandarizable, fácil de renovar y desplegar',
        'Opciones de docking, pantallas y periféricos para productividad',
        'Escalabilidad por áreas (administración, ventas, operación)'
      ]
    },
    corporativo: {
      id: 'corporativo',
      label: 'Corporativo administrado (IT)',
      icon: Building2,
      paraquien: 'Flotas empresariales con gestión centralizada, políticas de seguridad y despliegue masivo multi-sede.',
      lineas: [
        { name: 'HP EliteBook', desc: 'Principal para flotas con foco en seguridad y administración' },
        { name: 'HP ProBook', desc: 'Despliegues masivos por volumen con control y consistencia' },
        { name: 'HP Dragonfly', desc: 'Movilidad premium para ejecutivos (si aplica)' }
      ],
      beneficios: [
        'Gestión centralizada (políticas, configuración, inventario)',
        'Seguridad para entornos corporativos (acceso, cifrado, hardening)',
        'Experiencia consistente multi-sede (usuarios + TI)'
      ]
    },
    creadores: {
      id: 'creadores',
      label: 'Creadores / Alto rendimiento',
      icon: Laptop,
      paraquien: 'Diseñadores, ingenieros, analistas y creadores que requieren performance sostenida para cargas exigentes.',
      lineas: [
        { name: 'HP ZBook', desc: 'Workstation móvil para diseño, ingeniería, render y CAD' },
        { name: 'HP OMEN', desc: 'Performance alta para simulación, creación y escenarios exigentes' },
        { name: 'HP Victus', desc: 'Alto rendimiento con mejor costo (gaming/creación entry)' },
        { name: 'HP Envy/Spectre', desc: 'Creators livianos con estética premium' }
      ],
      beneficios: [
        'Rendimiento sostenido, mejores gráficos y expansión según perfil',
        'Ideal para edición, modelado, analítica y workloads exigentes',
        'Configuraciones escalables según software (RAM/SSD/GPU)'
      ]
    }
  };

  const prioridades = ['Seguridad', 'Gestión', 'Movilidad', 'Rendimiento', 'Creatividad'];

  const comparacion = [
    { linea: 'ProBook', movilidad: 2, seguridad: 2, gestion: 3, rendimiento: 2, graficos: 1 },
    { linea: 'EliteBook', movilidad: 3, seguridad: 3, gestion: 3, rendimiento: 2, graficos: 2 },
    { linea: 'Dragonfly', movilidad: 3, seguridad: 3, gestion: 3, rendimiento: 2, graficos: 2 },
    { linea: 'ZBook', movilidad: 2, seguridad: 3, gestion: 2, rendimiento: 3, graficos: 3 },
    { linea: 'OMEN', movilidad: 2, seguridad: 2, gestion: 1, rendimiento: 3, graficos: 3 },
    { linea: 'Victus', movilidad: 2, seguridad: 2, gestion: 1, rendimiento: 3, graficos: 3 }
  ];

  const currentSegment = segments[activeSegment];
  const IconComponent = currentSegment.icon;

  const handleWhatsApp = () => {
    const segmentLabels = {
      oficina: 'Oficina/End-User',
      corporativo: 'Corporativo',
      creadores: 'Creadores'
    };
    const message = `Hola Trendit, quiero asesoramiento de Microinformática (HPE/HP). Segmento: ${segmentLabels[activeSegment]}. Cantidad aprox de equipos: __. Uso principal: __. Ciudad: __.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="microinformatica" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 
            className="mb-4 text-neutral-900"
            style={{ fontFamily: 'Campton, sans-serif' }}
          >
            Microinformática por segmento
          </h2>
          <p 
            className="text-neutral-600 text-[17px] md:text-[18px] max-w-3xl mx-auto mb-6"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Elegí el tipo de usuario y te recomendamos la línea HP adecuada + el enfoque de despliegue.
          </p>
          
          {/* Chips de prioridades */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {prioridades.map((prioridad, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-white/60 border border-neutral-200 rounded-full text-[13px] text-neutral-700"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
              >
                {prioridad}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs/Selector de segmento */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {Object.values(segments).map((segment) => {
            const SegmentIcon = segment.icon;
            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(segment.id as any)}
                className={`flex-shrink-0 px-6 py-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 min-w-[200px] sm:min-w-[240px] ${
                  activeSegment === segment.id
                    ? 'bg-[#E94E1B] border-[#E94E1B] text-white shadow-lg shadow-[#E94E1B]/30'
                    : 'bg-white border-neutral-200 text-neutral-700 hover:border-[#E94E1B]/30 hover:bg-neutral-50'
                }`}
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                <SegmentIcon className="size-5 flex-shrink-0" />
                <span className="text-[14px] sm:text-[15px] whitespace-nowrap">{segment.label}</span>
              </button>
            );
          })}
        </div>

        {/* Contenido del segmento seleccionado */}
        <motion.div
          key={activeSegment}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-neutral-200 shadow-lg mb-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Columna izquierda */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-xl bg-gradient-to-br from-[#E94E1B] to-[#d44317] flex items-center justify-center">
                  <IconComponent className="size-6 text-white" />
                </div>
                <h3 
                  className="text-neutral-900"
                  style={{ fontFamily: 'Campton, sans-serif' }}
                >
                  {currentSegment.label}
                </h3>
              </div>

              <div className="mb-8">
                <div 
                  className="text-[13px] uppercase tracking-wide text-[#E94E1B] mb-2"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
                >
                  Para quién es
                </div>
                <p 
                  className="text-neutral-700 text-[15px] leading-relaxed"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                >
                  {currentSegment.paraquien}
                </p>
              </div>

              <div>
                <div 
                  className="text-[13px] uppercase tracking-wide text-[#E94E1B] mb-4"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
                >
                  Qué gana tu organización
                </div>
                <ul className="space-y-3">
                  {currentSegment.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                      <span 
                        className="text-neutral-700 text-[15px]"
                        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                      >
                        {beneficio}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Columna derecha - Líneas recomendadas */}
            <div>
              <div 
                className="text-[13px] uppercase tracking-wide text-[#E94E1B] mb-4"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
              >
                Líneas HP recomendadas
              </div>
              <div className="space-y-3">
                {currentSegment.lineas.map((linea, idx) => (
                  <div 
                    key={idx}
                    className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-4 border border-neutral-200 hover:border-[#E94E1B]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div 
                      className="text-neutral-900 mb-1"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                    >
                      {linea.name}
                    </div>
                    <div 
                      className="text-neutral-600 text-[14px]"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                    >
                      {linea.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparación rápida (Desktop) */}
        <div className="hidden lg:block mb-10">
          <div className="text-center mb-6">
            <h3 
              className="mb-2 text-neutral-900"
              style={{ fontFamily: 'Campton, sans-serif' }}
            >
              Comparación rápida
            </h3>
            <p 
              className="text-neutral-600 text-[15px]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            >
              Indicadores por línea (●●● alto / ●● medio / ● básico)
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100">
                    <th className="px-6 py-4 text-left text-[13px] text-neutral-700 uppercase tracking-wide" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}>
                      Línea
                    </th>
                    <th className="px-6 py-4 text-center text-[13px] text-neutral-700 uppercase tracking-wide" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}>
                      Movilidad
                    </th>
                    <th className="px-6 py-4 text-center text-[13px] text-neutral-700 uppercase tracking-wide" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}>
                      Seguridad
                    </th>
                    <th className="px-6 py-4 text-center text-[13px] text-neutral-700 uppercase tracking-wide" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}>
                      Gestión IT
                    </th>
                    <th className="px-6 py-4 text-center text-[13px] text-neutral-700 uppercase tracking-wide" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}>
                      Rendimiento
                    </th>
                    <th className="px-6 py-4 text-center text-[13px] text-neutral-700 uppercase tracking-wide" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}>
                      Gráficos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparacion.map((item, idx) => (
                    <tr key={idx} className="border-t border-neutral-200 hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-neutral-900" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
                        {item.linea}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivel nivel={item.movilidad} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivel nivel={item.seguridad} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivel nivel={item.gestion} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivel nivel={item.rendimiento} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivel nivel={item.graficos} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Comparación rápida (Mobile - Acordeón) */}
        <div className="block lg:hidden mb-10">
          <div className="text-center mb-6">
            <h3 
              className="mb-2 text-neutral-900"
              style={{ fontFamily: 'Campton, sans-serif' }}
            >
              Comparación rápida
            </h3>
          </div>

          <div className="space-y-3">
            {comparacion.map((item, idx) => (
              <details key={idx} className="bg-white rounded-xl border border-neutral-200 overflow-hidden group">
                <summary className="px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-neutral-50 transition-colors">
                  <span className="text-neutral-900" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
                    {item.linea}
                  </span>
                  <ChevronDown className="size-5 text-neutral-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Movilidad</span>
                    <IndicadorNivel nivel={item.movilidad} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Seguridad</span>
                    <IndicadorNivel nivel={item.seguridad} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Gestión IT</span>
                    <IndicadorNivel nivel={item.gestion} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Rendimiento</span>
                    <IndicadorNivel nivel={item.rendimiento} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Gráficos</span>
                    <IndicadorNivel nivel={item.graficos} />
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Final de la sección */}
        <div className="bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E94E1B] rounded-full blur-[120px] opacity-20" />
          
          <div className="relative z-10 text-center">
            <h3 
              className="mb-4 text-white"
              style={{ fontFamily: 'Campton, sans-serif' }}
            >
              ¿Necesitás una recomendación personalizada?
            </h3>
            <p 
              className="text-neutral-300 text-[15px] md:text-[16px] mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            >
              Te asesoramos en 2 minutos sobre la línea HP ideal para tu operación
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onOpenModal('Microinformática')}
                className="bg-[#E94E1B] hover:bg-[#d44317] text-white px-8 py-6 rounded-xl transition-all duration-300 group shadow-lg shadow-[#E94E1B]/30"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                Quiero una recomendación (2 min)
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 rounded-xl transition-all duration-300 backdrop-blur-sm"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                <MessageCircle className="mr-2 size-4" />
                Escribir por WhatsApp
              </Button>
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

// Componente auxiliar para indicadores de nivel
function IndicadorNivel({ nivel }: { nivel: number }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          className={`size-2 rounded-full ${
            dot <= nivel ? 'bg-[#E94E1B]' : 'bg-neutral-300'
          }`}
        />
      ))}
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: '¿Qué diferencia hay entre Aruba y otras soluciones de red?',
      answer: 'Aruba ofrece gestión centralizada, segmentación avanzada, observabilidad completa y escalabilidad probada en entornos enterprise con miles de usuarios simultáneos.'
    },
    {
      question: '¿Cómo funciona el modelo GreenLake?',
      answer: 'GreenLake es un modelo de consumo flexible (as-a-Service) donde pagas por uso real, con gestión centralizada y escalabilidad inmediata sin grandes inversiones iniciales.'
    },
    {
      question: '¿HPE ProLiant es adecuado para virtualización y cargas críticas?',
      answer: 'Sí, los servidores ProLiant están diseñados específicamente para virtualización empresarial, bases de datos críticas y aplicaciones de alto rendimiento con máxima confiabilidad.'
    },
    {
      question: '¿Trendit puede implementar infraestructura HPE en múltiples sedes?',
      answer: 'Sí, diseñamos, implementamos y damos soporte a infraestructuras HPE en operación distribuida (campus, sucursales, data centers) con estandarización y gestión centralizada.'
    },
    {
      question: '¿Qué incluye el servicio de soporte de Trendit para HPE?',
      answer: 'Incluye diseño, implementación, documentación, transferencia de conocimiento, soporte técnico continuo e integración con tu stack existente.'
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="mb-4 text-neutral-900"
            style={{ fontFamily: 'Campton, sans-serif' }}
          >
            Preguntas frecuentes
          </h2>
          <p 
            className="text-neutral-600 text-[17px] md:text-[18px] max-w-3xl mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Respondemos las consultas más comunes sobre soluciones HPE
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl border border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
              >
                <span 
                  className="text-neutral-900 pr-4"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`size-5 text-[#E94E1B] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-5">
                  <p 
                    className="text-neutral-600 text-[15px]"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                  >
                    {faq.answer}
                  </p>
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
  onWhatsApp: (message?: string) => void;
}

function CTAFinal({ onOpenModal, onWhatsApp }: CTAFinalProps) {
  return (
    <section id="cta" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E94E1B] rounded-full blur-[200px] opacity-20" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 
            className="mb-6 text-white"
            style={{ fontFamily: 'Campton, sans-serif' }}
          >
            ¿Armamos tu próxima etapa con HPE?
          </h2>
          <p 
            className="text-neutral-300 text-[17px] md:text-[18px] mb-10"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Hablemos de networking, compute, storage y modelos flexibles para tu infraestructura
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onOpenModal}
              className="bg-[#E94E1B] hover:bg-[#d44317] text-white px-8 py-6 rounded-xl transition-all duration-300 group shadow-lg shadow-orange-900/20"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
            >
              Agendar reunión
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => onWhatsApp('Hola Trendit, necesito asesoramiento sobre HPE.')}
              variant="outline"
              className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 rounded-xl transition-all duration-300 group backdrop-blur-sm"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
            >
              <MessageCircle className="mr-2 size-4" />
              WhatsApp directo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
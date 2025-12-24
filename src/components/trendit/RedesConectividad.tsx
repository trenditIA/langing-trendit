import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Network,
  Wifi,
  Globe,
  Shield,
  Cable,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Zap,
  TrendingUp,
  Activity,
  Server,
  Radio,
  Lock,
  Eye,
  FileText,
  Layers,
  Target,
  Settings,
  Users,
  Building2,
  ShoppingCart,
  GraduationCap,
  Heart,
  Factory,
  Briefcase,
  X
} from 'lucide-react';

export function RedesConectividad() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState('');

  const openContactModal = (solutionName: string) => {
    setSelectedSolution(solutionName);
    setShowContactModal(true);
  };

  return (
    <div className="bg-white">
      <HeroRedes />
      <ContextoRedes />
      <SolucionesRedes onOpenContact={openContactModal} />
      <MarcasEscenario />
      <ComoTrabajamosRedes />
      <CTAFinalRedes />

      {/* Modal de Contacto Rápido */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        selectedSolution={selectedSolution}
      />
    </div>
  );
}

// ==================== HERO ====================
function HeroRedes() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%2C%20necesito%20información%20sobre%20Redes%20y%20Conectividad', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navChips = [
    { label: 'Switching', id: 'switching' },
    { label: 'Wi-Fi corporativo', id: 'wifi' },
    { label: 'WAN / SD-WAN', id: 'wan' },
    { label: 'Seguridad de red', id: 'seguridad' },
    { label: 'Fibra & óptica', id: 'fibra' },
    { label: 'Certificación', id: 'certificacion' },
    { label: 'Proceso', id: 'proceso' },
    { label: 'CTA', id: 'cta-final' }
  ];

  return (
    <section
      className="relative pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-6 lg:px-12 overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 80px)',
        background: 'linear-gradient(135deg, #F8F8F8 0%, #EDEDED 100%)'
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
        style={{ background: '#E94E1B' }}
      />

      {/* Subtle background pattern on the right side */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23282327' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-[1120px] mx-auto">
        {/* Single Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[720px]"
        >
          {/* H1 */}
          <h1
            className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] leading-[1.1] mb-5 lg:mb-6 text-[#282327]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Redes que sostienen la operación. Y la escalan.
          </h1>

          {/* Subtitle */}
          <p
            className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.65] mb-7 text-neutral-600"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La conectividad ya no es solo Internet: es video, colaboración, IoT, analítica y automatización. Trendit diseña e integra redes cableadas y Wi-Fi con seguridad, orden y capacidad de crecimiento.
          </p>

          {/* Bullets */}
          <ul className="space-y-3.5 mb-8 lg:mb-9">
            {[
              'Switching, routing, Wi-Fi corporativo y seguridad perimetral',
              'Fibra óptica, racks, SFPs y conectividad de campus',
              'Diagnóstico y certificación de cableado para PoE y performance'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                <span
                  className="text-[15px] lg:text-[16px] text-neutral-700 leading-[1.6]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-7">
            <a
              href="#contactanos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <span>Solicitar diagnóstico de red</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#282327] rounded-full border-2 border-neutral-200 hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-md"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <MessageCircle className="size-4" />
              <span>Hablar por WhatsApp</span>
            </button>
          </div>

          {/* Microcopy */}
          <p
            className="text-[13px] text-neutral-500 mb-8"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Relevamiento inicial según zona/proyecto. Respuesta en horario laboral.
          </p>

          {/* Navigation chips */}
          <div className="relative">
            {/* Desktop/Tablet: Flex wrap (máx 2 filas) */}
            <div className="hidden md:flex flex-wrap gap-2 max-w-[720px]">
              {navChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(chip.id)}
                  className="px-4 py-2 bg-white rounded-full border border-neutral-200 hover:border-[#E94E1B] hover:bg-[#FFF5F0] transition-all duration-300 whitespace-nowrap"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: '#4A4A4A'
                  }}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Mobile: Carrusel horizontal sin barra visible */}
            <div className="md:hidden relative">
              {/* Fade gradient izquierda */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10 pointer-events-none" />
              {/* Fade gradient derecha */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F8F8F8] to-transparent z-10 pointer-events-none" />

              <div
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {navChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(chip.id)}
                    className="px-4 py-2 bg-white rounded-full border border-neutral-200 hover:border-[#E94E1B] hover:bg-[#FFF5F0] transition-all duration-300 whitespace-nowrap flex-shrink-0"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500,
                      fontSize: '13px',
                      color: '#4A4A4A'
                    }}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== MODAL DE CONTACTO ====================
function ContactModal({ isOpen, onClose, selectedSolution }: { isOpen: boolean; onClose: () => void; selectedSolution: string }) {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleWhatsApp = () => {
    const message = `Hola, necesito información sobre ${selectedSolution} en Redes & Conectividad`;
    window.open(`https://wa.me/5493516714007?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-[500px] w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h3
                  className="text-[20px] text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 700
                  }}
                >
                  Contacto rápido
                </h3>
                <button
                  onClick={onClose}
                  className="size-8 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
                >
                  <X className="size-5 text-neutral-500" />
                </button>
              </div>

              {/* Content */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Área seleccionada (visual) */}
                <div className="p-3 bg-[#FFF5F0] rounded-xl border border-[#E94E1B]/20">
                  <p
                    className="text-[13px] text-neutral-500 mb-1"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Área seleccionada
                  </p>
                  <p
                    className="text-[15px] text-[#E94E1B]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {selectedSolution}
                  </p>
                </div>

                {/* Nombre y apellido */}
                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Nombre y apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>

                {/* Mensaje opcional */}
                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Mensaje (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent resize-none"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>

                {/* Botones */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 shadow-md hover:shadow-lg group"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '15px'
                    }}
                  >
                    Enviar
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#1fb855] transition-all duration-300 shadow-md hover:shadow-lg"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '15px'
                    }}
                  >
                    <MessageCircle className="size-4" />
                    Abrir WhatsApp
                  </button>
                </div>

                {/* Nota legal */}
                <p
                  className="text-[12px] text-neutral-500 text-center leading-relaxed"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Al enviar aceptás nuestra política de privacidad.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ==================== CONTEXTO ====================
function ContextoRedes() {
  const cards = [
    {
      icon: <Zap className="size-6" />,
      title: 'IA y automatización empujan el tráfico',
      text: 'Más video, más analítica, más sistemas conectados.'
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: 'Más velocidad en backbone y fibra',
      text: 'Menos cuellos de botella, más capacidad de crecimiento.'
    },
    {
      icon: <Activity className="size-6" />,
      title: 'Switches con más capacidad real',
      text: 'Uplinks, PoE y performance sostenida.'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            La nueva demanda: más datos, más velocidad, más consistencia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-7 lg:p-8 bg-neutral-50 rounded-2xl border border-neutral-200 hover:shadow-lg transition-all duration-300"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div
                className="size-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                {card.icon}
              </div>
              <h3
                className="text-[18px] lg:text-[19px] mb-2 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-[14px] lg:text-[15px] text-neutral-600 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[16px] lg:text-[17px] text-neutral-600 max-w-[740px] mx-auto leading-relaxed"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400
          }}
        >
          Cuando la red se queda corta, la tecnología 'de arriba' también se queda corta.
        </motion.p>
      </div>
    </section>
  );
}

// ==================== SOLUCIONES ====================
function SolucionesRedes({ onOpenContact }: { onOpenContact: (solutionName: string) => void }) {
  const [selectedSolution, setSelectedSolution] = useState('switching');

  const handleWhatsApp = () => {
    const message = `Hola, necesito información sobre ${contenido[selectedSolution].titulo} en Redes & Conectividad`;
    window.open(`https://wa.me/5493516714007?text=${encodeURIComponent(message)}`, '_blank');
  };

  const soluciones = [
    { id: 'switching', icon: <Network className="size-5" />, label: 'Switching & Core' },
    { id: 'wifi', icon: <Wifi className="size-5" />, label: 'Wi-Fi corporativo' },
    { id: 'wan', icon: <Globe className="size-5" />, label: 'WAN / SD-WAN' },
    { id: 'seguridad', icon: <Shield className="size-5" />, label: 'Seguridad de red' },
    { id: 'fibra', icon: <Cable className="size-5" />, label: 'Fibra & Óptica' },
    { id: 'certificacion', icon: <CheckCircle className="size-5" />, label: 'Certificación de cableado' }
  ];

  const contenido: { [key: string]: any } = {
    'switching': {
      titulo: 'Switching & Core',
      resuelve: 'Capacidad, segmentación y redundancia para redes que crecen sin rehacer todo.',
      incluye: [
        'Switches de acceso/distribución/core según arquitectura',
        'VLANs, QoS y redundancia',
        'PoE/PoE+ para cámaras, APs y telefonía',
        'Orden en rack, rotulado y documentación'
      ],
      idealPara: ['Industria', 'Campus', 'Sucursales'],
      entregables: ['Diagrama', 'Documentación', 'Plan de implementación']
    },
    'wifi': {
      titulo: 'Wi-Fi corporativo',
      resuelve: 'Cobertura y capacidad real para usuarios, invitados y dispositivos críticos.',
      incluye: [
        'Site survey / planning (según proyecto)',
        'Roaming, segmentación y portal invitados',
        'Gestión centralizada y políticas',
        'Optimización por densidad y rendimiento'
      ],
      idealPara: ['Educación', 'Oficinas', 'Retail', 'Salud'],
      entregables: ['Configuración', 'Documentación', 'Plan de optimización']
    },
    'wan': {
      titulo: 'WAN / SD-WAN',
      resuelve: 'Conectividad entre sedes con control, prioridad de tráfico y continuidad.',
      incluye: [
        'VPNs, priorización de tráfico y failover',
        'Diseño de enlaces primario/backup',
        'Visibilidad centralizada (según plataforma)'
      ],
      idealPara: ['Multisede', 'Retail', 'Servicios'],
      entregables: ['Diseño', 'Plan de despliegue', 'Documentación']
    },
    'seguridad': {
      titulo: 'Seguridad de red',
      resuelve: 'Reducción de riesgos con seguridad en capas y segmentación interna.',
      incluye: [
        'Firewall / NGFW (según caso)',
        'Segmentación, políticas y hardening',
        'Buenas prácticas de acceso y operación'
      ],
      idealPara: ['Finanzas', 'Industria', 'Sector público', 'Salud'],
      entregables: ['Reglas base', 'Documentación', 'Checklist de seguridad']
    },
    'fibra': {
      titulo: 'Fibra & Óptica',
      resuelve: 'Backbone estable y escalable para tráfico intenso y crecimiento.',
      incluye: [
        'Diseño de troncales y uplinks',
        'SFP/SFP+, patching, orden y rotulado',
        'Integración con switching y racks'
      ],
      idealPara: ['Campus', 'Planta', 'Data center'],
      entregables: ['Diagrama', 'Inventario óptico', 'Documentación']
    },
    'certificacion': {
      titulo: 'Certificación de cableado',
      resuelve: 'Validación de la base física para performance y PoE estable.',
      incluye: [
        'Certificación por enlace y reporte trazable',
        'Detección de fallas intermitentes',
        'Soporte para upgrades de velocidad y PoE'
      ],
      idealPara: ['Videoseguridad', 'Wi-Fi', 'Oficinas', 'Industria'],
      entregables: ['Reporte', 'Mapa/rotulado', 'Recomendaciones']
    }
  };

  const current = contenido[selectedSolution];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-14"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-4 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Soluciones por área
          </h2>
        </motion.div>

        <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Menu lateral (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-2">
              {soluciones.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => setSelectedSolution(sol.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 text-left ${selectedSolution === sol.id
                    ? 'bg-[#E94E1B] text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
                    }`}
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  {sol.icon}
                  <span>{sol.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tabs horizontal (mobile) */}
          <div className="lg:hidden mb-6 overflow-x-auto -mx-6 px-6">
            <div className="flex gap-3 pb-2" style={{ minWidth: 'max-content' }}>
              {soluciones.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => setSelectedSolution(sol.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${selectedSolution === sol.id
                    ? 'bg-[#E94E1B] text-white shadow-md'
                    : 'bg-white text-neutral-700 border border-neutral-200'
                    }`}
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  {sol.icon}
                  <span>{sol.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content card */}
          <motion.div
            key={selectedSolution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 lg:p-10 bg-white rounded-2xl border border-neutral-200"
            style={{
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
            }}
          >
            <h3
              className="text-[26px] lg:text-[30px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              {current.titulo}
            </h3>

            <div className="mb-6 p-4 bg-[#FFF5F0] rounded-xl border border-[#E94E1B]/20">
              <p
                className="text-[16px] lg:text-[17px] text-[#282327] leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                <span className="text-[#E94E1B] text-[14px] uppercase tracking-wide block mb-2" style={{ fontWeight: 600 }}>
                  Qué resuelve
                </span>
                {current.resuelve}
              </p>
            </div>

            <div className="mb-6">
              <h4
                className="text-[14px] uppercase tracking-wide text-[#E94E1B] mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Incluye
              </h4>
              <ul className="space-y-2.5">
                {current.incluye.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <span
                      className="text-[15px] text-neutral-700 leading-relaxed"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4
                className="text-[14px] uppercase tracking-wide text-neutral-500 mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Ideal para
              </h4>
              <div className="flex flex-wrap gap-2">
                {current.idealPara.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-neutral-50 rounded-full border border-neutral-200 text-[13px] text-neutral-700"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4
                className="text-[14px] uppercase tracking-wide text-neutral-500 mb-3"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Entregables
              </h4>
              <div className="flex flex-wrap gap-2">
                {current.entregables.map((item: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#E94E1B]/10 rounded-full border border-[#E94E1B]/30 text-[13px] text-[#E94E1B]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                onClick={() => onOpenContact(current.titulo)}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 shadow-md hover:shadow-lg group"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                Hablar con un especialista
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-neutral-200 text-neutral-700 rounded-xl hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </button>
              </div>

              <p
                className="text-[12px] text-neutral-500 text-center leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Respuesta en horario laboral.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== MARCAS SEGÚN ESCENARIO ====================
function MarcasEscenario() {
  const [selectedTab, setSelectedTab] = useState('enterprise');

  const tabs = [
    { id: 'enterprise', label: 'Enterprise / misión crítica' },
    { id: 'escalable', label: 'Escalable / costo-beneficio' },
    { id: 'agil', label: 'Implementación ágil / gestión centralizada' }
  ];

  const contenidoMarcas: { [key: string]: any } = {
    'enterprise': {
      descripcion: 'Ideal para operaciones que priorizan estabilidad, soporte premium y ecosistemas maduros.',
      marcas: ['Cisco', 'HPE Aruba', 'Fortinet', 'Huawei (según caso)', 'APC/Eaton (energía)', 'CommScope/Furukawa (capa física)']
    },
    'escalable': {
      descripcion: 'Para proyectos que buscan balance entre capacidad, costo y escalabilidad a mediano plazo.',
      marcas: ['MikroTik', 'Omada (TP-Link)', 'Ubiquiti', 'Furukawa', 'CommScope', 'APC/Eaton']
    },
    'agil': {
      descripcion: 'Soluciones centralizadas con despliegue rápido y administración unificada.',
      marcas: ['Ubiquiti UniFi', 'Omada SDN', 'Aruba Central (si aplica)', 'MikroTik Cloud', 'TP-Link Omada']
    }
  };

  const current = contenidoMarcas[selectedTab];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-4 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Ecosistema multimarca, recomendado por escenario
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedTab === tab.id
                ? 'bg-[#E94E1B] text-white shadow-lg'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '14px'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 lg:p-10 bg-neutral-50 rounded-2xl border border-neutral-200"
          style={{
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)'
          }}
        >
          <p
            className="text-[16px] lg:text-[17px] text-neutral-600 mb-6 leading-relaxed text-center"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            {current.descripcion}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {current.marcas.map((marca: string, idx: number) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl border border-neutral-200 text-center"
              >
                <span
                  className="text-[14px] text-neutral-700"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  {marca}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[15px] text-neutral-500 mt-8 italic max-w-[700px] mx-auto leading-relaxed"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400
          }}
        >
          La marca no define el éxito: lo define el diseño, la implementación y la operación. Trendit acompaña el ciclo completo.
        </motion.p>
      </div>
    </section>
  );
}

// ==================== CÓMO TRABAJAMOS ====================
function ComoTrabajamosRedes() {
  const pasos = [
    { icon: <Eye className="size-6" />, title: 'Relevamiento', text: 'Análisis de sitio, necesidades y restricciones' },
    { icon: <FileText className="size-6" />, title: 'Diagnóstico y diseño', text: 'Propuesta técnica y arquitectura recomendada' },
    { icon: <Layers className="size-6" />, title: 'Propuesta por etapas', text: 'Alcance, costos y cronograma por fase' },
    { icon: <Settings className="size-6" />, title: 'Implementación controlada', text: 'Ejecución coordinada con mínima disrupción' },
    { icon: <CheckCircle className="size-6" />, title: 'Documentación y handover', text: 'Entrega de diagramas, configs y capacitación' },
    { icon: <Activity className="size-6" />, title: 'Soporte y evolución', text: 'Acompañamiento post-implementación y mejora continua' }
  ];

  return (
    <section id="proceso" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-12 lg:mb-16 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Método claro. Entregables claros.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pasos.map((paso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 lg:p-7 bg-white rounded-2xl border border-neutral-200"
              style={{
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex items-start gap-4 mb-3">
                <div
                  className="size-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                    boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                  }}
                >
                  {paso.icon}
                </div>
                <div>
                  <h3
                    className="text-[18px] mb-2 text-[#282327]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {paso.title}
                  </h3>
                  <p
                    className="text-[14px] text-neutral-600 leading-relaxed"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {paso.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CTA FINAL ====================
function CTAFinalRedes() {
  const [formData, setFormData] = useState({
    organizacion: '',
    ciudad: '',
    provincia: '',
    necesidades: [] as string[],
    email: '',
    telefono: '',
    comentario: ''
  });

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%2C%20necesito%20atención%20rápida%20sobre%20Redes%20y%20Conectividad', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const necesidadesOptions = [
    'Switching',
    'Wi-Fi',
    'WAN/SD-WAN',
    'Seguridad',
    'Fibra',
    'Certificación'
  ];

  const toggleNecesidad = (necesidad: string) => {
    setFormData(prev => ({
      ...prev,
      necesidades: prev.necesidades.includes(necesidad)
        ? prev.necesidades.filter(n => n !== necesidad)
        : [...prev.necesidades, necesidad]
    }));
  };

  return (
    <section id="cta-final" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-4 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Solicitar diagnóstico de red
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Card principal - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 bg-neutral-50 rounded-2xl border border-neutral-200"
            style={{
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Organización */}
              <div>
                <label
                  className="block text-[14px] text-neutral-700 mb-2"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Organización / Razón social *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organizacion}
                  onChange={(e) => setFormData({ ...formData, organizacion: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400,
                    fontSize: '15px'
                  }}
                />
              </div>

              {/* Ciudad + Provincia */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ciudad}
                    onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Provincia *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.provincia}
                    onChange={(e) => setFormData({ ...formData, provincia: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>
              </div>

              {/* Qué necesita */}
              <div>
                <label
                  className="block text-[14px] text-neutral-700 mb-3"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Qué necesita (puede seleccionar varios) *
                </label>
                <div className="flex flex-wrap gap-2">
                  {necesidadesOptions.map((necesidad) => (
                    <button
                      key={necesidad}
                      type="button"
                      onClick={() => toggleNecesidad(necesidad)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${formData.necesidades.includes(necesidad)
                        ? 'bg-[#E94E1B] text-white border-2 border-[#E94E1B]'
                        : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-neutral-300'
                        }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '13px'
                      }}
                    >
                      {necesidad}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email + Teléfono */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>
              </div>

              {/* Comentario */}
              <div>
                <label
                  className="block text-[14px] text-neutral-700 mb-2"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Comentario (opcional)
                </label>
                <textarea
                  rows={3}
                  value={formData.comentario}
                  onChange={(e) => setFormData({ ...formData, comentario: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent resize-none"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400,
                    fontSize: '15px'
                  }}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 shadow-lg hover:shadow-xl group"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '16px'
                }}
              >
                Enviar solicitud
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Card secundaria - WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 bg-gradient-to-br from-[#282327] to-[#1a1618] rounded-2xl text-white flex flex-col justify-between"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
            }}
          >
            <div>
              <h3
                className="text-[24px] lg:text-[28px] mb-4"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700
                }}
              >
                Atención rápida
              </h3>
              <p
                className="text-[15px] lg:text-[16px] text-white/80 mb-8 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Para consultas urgentes o coordinación inmediata.
              </p>
            </div>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#1fb855] transition-all duration-300 shadow-lg hover:shadow-xl group"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '16px'
              }}
            >
              <MessageCircle className="size-5" />
              <span>Hablar por WhatsApp</span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

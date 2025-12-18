import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  CheckCircle2,
  Monitor,
  Grid3x3,
  Smartphone,
  Building2,
  GraduationCap,
  Heart,
  ShoppingBag,
  Package,
  Landmark,
  MessageCircle,
  ChevronRight,
  Shield,
  Settings,
  Eye,
  Lock,
  Zap,
  Users,
  Sparkles
} from 'lucide-react';
import { Button } from '../ui/button';
import { CotizacionSamsungModal } from './CotizacionSamsungModal';
import { SamsungHero } from './SamsungHero';

export function Samsung() {
  const [isCotizacionOpen, setIsCotizacionOpen] = React.useState(false);
  const [initialProduct, setInitialProduct] = React.useState<string>('');

  const handleOpenCotizacion = (product?: string) => {
    if (product) {
      setInitialProduct(product);
    }
    setIsCotizacionOpen(true);
  };

  const handleWhatsApp = () => {
    const message = "Hola Trendit, estoy viendo la página de Samsung (Marcas & Partners). Me interesa: {Cartelería Digital / Video Wall / The Wall / Knox}. ¿Podemos coordinar una cotización y próximos pasos?";
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
      <SamsungHero 
        onOpenCotizacion={handleOpenCotizacion} 
        onWhatsApp={handleWhatsApp}
        scrollToSection={scrollToSection}
      />
      <SelectorSoluciones onOpenCotizacion={handleOpenCotizacion} />
      <CarteleriaDigital onOpenCotizacion={handleOpenCotizacion} />
      <VideoWall onOpenCotizacion={handleOpenCotizacion} />
      <SamsungKnox onOpenCotizacion={handleOpenCotizacion} />
      <CasosUso />
      <PorQueTrenditSamsung />
      <CTAFinal onOpenCotizacion={handleOpenCotizacion} onWhatsApp={handleWhatsApp} />
      
      <CotizacionSamsungModal 
        isOpen={isCotizacionOpen} 
        onClose={() => setIsCotizacionOpen(false)}
        initialProduct={initialProduct}
      />
    </div>
  );
}

function SelectorSoluciones({ onOpenCotizacion }: { onOpenCotizacion: (product: string) => void }) {
  const soluciones = [
    {
      icon: <Monitor className="size-10" />,
      title: 'Cartelería Digital',
      subtitle: 'Smart Signage',
      bullets: [
        'Gestión centralizada multi-sede',
        'Programación por horarios y zonas',
        'Monitoreo remoto en tiempo real'
      ],
      product: 'Cartelería Digital'
    },
    {
      icon: <Grid3x3 className="size-10" />,
      title: 'Video Wall + LED',
      subtitle: 'The Wall',
      bullets: [
        'Impacto visual premium',
        'Escalabilidad modular',
        'Instalación simplificada'
      ],
      product: 'Video Wall'
    },
    {
      icon: <Smartphone className="size-10" />,
      title: 'Movilidad Segura',
      subtitle: 'Knox / Knox Manage',
      bullets: [
        'Administración remota',
        'Políticas de seguridad',
        'Modo kiosco y control total'
      ],
      product: 'Knox'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div 
            className="text-[13px] mb-3 uppercase tracking-wide text-[#E94E1B]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
          >
            Soluciones Samsung
          </div>
          <h2 
            className="text-[40px] lg:text-[44px] mb-6 leading-[1.15] tracking-tight text-[#282327]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
          >
            Elegí la solución para tu operación
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {soluciones.map((solucion, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-neutral-200/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="size-16 rounded-2xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-6 group-hover:bg-[#E94E1B] group-hover:text-white transition-all duration-300">
                {solucion.icon}
              </div>

              <h3 
                className="text-[22px] mb-2 text-[#282327]"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                {solucion.title}
              </h3>

              <p 
                className="text-[14px] text-[#E94E1B] mb-5"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                {solucion.subtitle}
              </p>

              <div className="space-y-3 mb-6">
                {solucion.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <span 
                      className="text-[14px] text-neutral-700 leading-relaxed"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                    >
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                onClick={() => onOpenCotizacion(solucion.product)}
                className="w-full justify-between hover:bg-neutral-50 group/btn"
              >
                <span style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>
                  Solicitar asesoramiento
                </span>
                <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarteleriaDigital({ onOpenCotizacion }: { onOpenCotizacion: (product: string) => void }) {
  const pasos = [
    {
      numero: '01',
      title: 'Diseñás contenidos',
      description: 'Plantillas, piezas gráficas y videos para tu comunicación'
    },
    {
      numero: '02',
      title: 'Programás por horarios',
      description: 'Definís qué se ve, cuándo y dónde (tiendas, zonas, pantallas)'
    },
    {
      numero: '03',
      title: 'Publicás simultáneamente',
      description: 'Un solo clic y todas las sedes actualizan en tiempo real'
    },
    {
      numero: '04',
      title: 'Monitoreás resultados',
      description: 'Estado de pantallas, horarios efectivos y reportes'
    }
  ];

  const integraciones = [
    {
      icon: <Eye className="size-6" />,
      title: 'Relevamiento + dimensionamiento'
    },
    {
      icon: <Settings className="size-6" />,
      title: 'Instalación / montaje / obra'
    },
    {
      icon: <Zap className="size-6" />,
      title: 'Red / conectividad / players'
    },
    {
      icon: <Users className="size-6" />,
      title: 'Configuración + capacitación'
    },
    {
      icon: <Shield className="size-6" />,
      title: 'Soporte y mantenimiento'
    }
  ];

  return (
    <section id="carteleria-digital" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[40px] lg:text-[44px] mb-6 leading-[1.15] tracking-tight text-[#282327]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
          >
            Cartelería digital que se gestiona desde un solo lugar
          </h2>
          <p 
            className="text-[17px] text-neutral-600 leading-[1.7] max-w-[800px] mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Creá, programá, publicá y monitoreá contenidos en todas tus sedes desde una plataforma centralizada. Control remoto total para operaciones multi-sede y multi-país.
          </p>
        </motion.div>

        {/* Timeline de pasos */}
        <div className="mb-20">
          <h3 
            className="text-[15px] mb-8 uppercase tracking-wide text-[#E94E1B] text-center"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
          >
            Cómo funciona en 4 pasos
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((paso, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300">
                  <div 
                    className="text-[48px] mb-3 opacity-20"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700, color: '#E94E1B' }}
                  >
                    {paso.numero}
                  </div>
                  <h4 
                    className="text-[17px] mb-2 text-[#282327]"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                  >
                    {paso.title}
                  </h4>
                  <p 
                    className="text-[14px] text-neutral-600 leading-relaxed"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                  >
                    {paso.description}
                  </p>
                </div>

                {idx < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-neutral-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Qué integra Trendit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#282327] to-[#1a1618] rounded-3xl p-10 lg:p-12 text-white"
        >
          <h3 
            className="text-[28px] mb-8 text-center"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
          >
            Qué integra Trendit
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {integraciones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-center"
              >
                <div className="size-12 rounded-full bg-[#E94E1B]/20 flex items-center justify-center text-[#E94E1B] mx-auto mb-4">
                  {item.icon}
                </div>
                <p 
                  className="text-[13px] text-white/90 leading-tight"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
                >
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => onOpenCotizacion('Cartelería Digital')}
              className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-8"
            >
              Quiero implementar cartelería digital
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VideoWall({ onOpenCotizacion }: { onOpenCotizacion: (product: string) => void }) {
  return (
    <section id="video-wall" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[40px] lg:text-[44px] mb-6 leading-[1.15] tracking-tight text-[#282327]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
          >
            Impacto visual para salas, retail y experiencias
          </h2>
          <p 
            className="text-[17px] text-neutral-600 leading-[1.7] max-w-[800px] mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Video walls con continuidad visual perfecta, escalables y con contenido sincronizado. Calidad premium para espacios que exigen presencia.
          </p>
        </motion.div>

        {/* The Wall destacado */}
        <motion.div
          id="the-wall"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 md:p-10 lg:p-12 mb-12 relative overflow-hidden"
        >
          {/* Static glow - muy sutil */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E94E1B] rounded-full blur-[140px] opacity-10" />

          <div className="relative z-10">
            <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8 lg:gap-10 items-start">
              {/* Columna izquierda - Contenido */}
              <div>
                <div 
                  className="inline-block px-4 py-1.5 bg-[#E94E1B]/20 border border-[#E94E1B]/30 rounded-full mb-6"
                >
                  <span 
                    className="text-[12px] text-[#E94E1B] uppercase tracking-wide"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
                  >
                    Premium
                  </span>
                </div>

                <h3 
                  className="text-[28px] sm:text-[32px] lg:text-[36px] mb-3 text-white leading-tight"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
                >
                  The Wall All-in-One (Micro LED)
                </h3>

                <p 
                  className="text-[15px] md:text-[16px] text-white/70 mb-6 leading-relaxed max-w-[600px]"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                >
                  Pantalla premium modular con instalación simplificada y presencia de alto impacto.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <p 
                      className="text-[14px] md:text-[15px] text-white/80 leading-relaxed"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                    >
                      Micro LED: brillo, contraste y uniformidad superiores para espacios exigentes.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <p 
                      className="text-[14px] md:text-[15px] text-white/80 leading-relaxed"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                    >
                      All-in-One: implementación más rápida (control, montaje y puesta en marcha simplificados).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <p 
                      className="text-[14px] md:text-[15px] text-white/80 leading-relaxed"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                    >
                      Escala corporativa: lobbies, auditorios, retail flagship, salas de control y experiencias inmersivas.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <p 
                      className="text-[14px] md:text-[15px] text-white/80 leading-relaxed"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                    >
                      Gestión de contenido: integración con plataformas de señalización y operación multi-sede.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => onOpenCotizacion('LED The Wall')}
                  size="lg"
                  className="bg-[#E94E1B] hover:bg-[#d94419] text-white shadow-lg shadow-[#E94E1B]/30 group w-full sm:w-auto"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 600,
                    borderRadius: '12px'
                  }}
                >
                  Quiero cotizar The Wall
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Columna derecha - Specs cards livianas (sin imagen) */}
              <div className="space-y-3">
                {/* Mini card 1 */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-[#E94E1B]/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="size-5 text-[#E94E1B]" />
                    </div>
                    <div>
                      <h4 
                        className="text-[14px] text-white mb-0.5"
                        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                      >
                        Micro LED
                      </h4>
                      <p 
                        className="text-[12px] text-white/60"
                        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                      >
                        Calidad superior sin bezels
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini card 2 */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="size-5 text-white/80" />
                    </div>
                    <div>
                      <h4 
                        className="text-[14px] text-white mb-0.5"
                        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                      >
                        All-in-One
                      </h4>
                      <p 
                        className="text-[12px] text-white/60"
                        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                      >
                        Implementación rápida
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini card 3 */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Grid3x3 className="size-5 text-white/80" />
                    </div>
                    <div>
                      <h4 
                        className="text-[14px] text-white mb-0.5"
                        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                      >
                        Operación multi-sede
                      </h4>
                      <p 
                        className="text-[12px] text-white/60"
                        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                      >
                        Gestión centralizada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini galería */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Retail', icon: ShoppingBag },
            { title: 'Lobby Corporativo', icon: Building2 },
            { title: 'Control Room', icon: Monitor }
          ].map((caso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-xl flex items-center justify-center mb-5">
                <caso.icon className="size-12 text-neutral-400" />
              </div>
              <h4 
                className="text-[16px] text-[#282327] text-center"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                {caso.title}
              </h4>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            onClick={() => onOpenCotizacion('Video Wall')}
            className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-8"
          >
            Quiero implementar Video Wall
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function SamsungKnox({ onOpenCotizacion }: { onOpenCotizacion: (product: string) => void }) {
  const beneficios = [
    {
      icon: <Settings className="size-8" />,
      title: 'Administración remota',
      description: 'Configuración, actualización y control de dispositivos sin estar en el lugar'
    },
    {
      icon: <Lock className="size-8" />,
      title: 'Modo kiosco / uso dedicado',
      description: 'Limita dispositivos a apps específicas para operación controlada'
    },
    {
      icon: <Shield className="size-8" />,
      title: 'Políticas y cumplimiento',
      description: 'Define reglas de seguridad, acceso y uso para toda la flota'
    },
    {
      icon: <Eye className="size-8" />,
      title: 'Visibilidad y control del parque',
      description: 'Dashboard centralizado con estado, ubicación y alertas en tiempo real'
    }
  ];

  return (
    <section id="samsung-knox" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-[40px] lg:text-[44px] mb-6 leading-[1.15] tracking-tight text-[#282327]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
          >
            Seguridad y administración de dispositivos en escala
          </h2>
          <p 
            className="text-[17px] text-neutral-600 leading-[1.7] max-w-[800px] mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Samsung Knox y Knox Manage permiten gestión centralizada, políticas de seguridad, control remoto y modo kiosco para flotas corporativas en retail, logística, salud y más.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {beneficios.map((beneficio, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-neutral-200/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="size-16 rounded-2xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-6">
                {beneficio.icon}
              </div>
              <h3 
                className="text-[20px] mb-3 text-[#282327]"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                {beneficio.title}
              </h3>
              <p 
                className="text-[15px] text-neutral-600 leading-relaxed"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                {beneficio.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => onOpenCotizacion('Knox')}
            className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-8"
          >
            Quiero implementar Knox
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function CasosUso() {
  const casos = [
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Promos dinámicas + dispositivos para staff'
    },
    {
      icon: GraduationCap,
      title: 'Educación',
      description: 'Aulas digitales y señalización'
    },
    {
      icon: Heart,
      title: 'Salud',
      description: 'Comunicación paciente + gestión segura'
    },
    {
      icon: Building2,
      title: 'Corporativo / Salas',
      description: 'Video walls + cartelería interna'
    },
    {
      icon: Package,
      title: 'Logística / Depósito',
      description: 'Dispositivos rugerizados + control'
    },
    {
      icon: Landmark,
      title: 'Sector Público',
      description: 'Señalización + seguridad de datos'
    }
  ];

  return (
    <section id="casos-uso" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div 
            className="text-[13px] mb-3 uppercase tracking-wide text-[#E94E1B]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
          >
            Industrias
          </div>
          <h2 
            className="text-[40px] lg:text-[44px] mb-6 leading-[1.15] tracking-tight text-[#282327]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
          >
            Casos de uso por industria
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {casos.map((caso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300 group"
            >
              <div className="size-14 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5 group-hover:bg-[#E94E1B] group-hover:text-white transition-all duration-300">
                <caso.icon className="size-7" />
              </div>
              <h3 
                className="text-[18px] mb-2 text-[#282327]"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                {caso.title}
              </h3>
              <p 
                className="text-[14px] text-neutral-600 leading-relaxed"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                {caso.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PorQueTrenditSamsung() {
  const garantias = [
    'Integración end-to-end: hardware + software + implementación',
    'Diseño orientado a continuidad operativa',
    'Documentación completa y soporte técnico',
    'Escalabilidad multi-sede y multi-país',
    'Experiencia en proyectos críticos B4B'
  ];

  return (
    <section id="por-que-trendit" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-[40px] lg:text-[44px] mb-8 leading-[1.15] tracking-tight text-[#282327]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
          >
            Por qué Trendit + Samsung
          </h2>
        </motion.div>

        <div className="space-y-4">
          {garantias.map((garantia, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-start gap-4 bg-gradient-to-r from-neutral-50 to-white border border-neutral-200 rounded-xl p-6 hover:shadow-md hover:border-[#E94E1B]/30 transition-all duration-200"
            >
              <div className="size-10 rounded-full bg-[#E94E1B]/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="size-5 text-[#E94E1B]" />
              </div>
              <p 
                className="text-[16px] text-[#282327] leading-relaxed pt-1.5"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
              >
                {garantia}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal({ onOpenCotizacion, onWhatsApp }: { onOpenCotizacion: () => void; onWhatsApp: () => void }) {
  return (
    <section id="cta-final" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#1a1618] rounded-[40px] p-12 lg:p-16 text-center relative overflow-hidden"
        >
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
            <h2 
              className="text-[40px] lg:text-[48px] text-white mb-6 leading-[1.1] tracking-tight"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
            >
              ¿Armamos tu solución Samsung?
            </h2>
            
            <p 
              className="text-[19px] text-white/80 mb-10 leading-[1.6]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            >
              Te ayudamos a diseñar, implementar y operar la solución ideal para tu industria, con soporte end-to-end.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={onOpenCotizacion}
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-10 group shadow-lg shadow-[#E94E1B]/30"
                style={{
                  fontFamily: 'Campton, sans-serif',
                  fontWeight: 600
                }}
              >
                Agendar una reunión
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={onWhatsApp}
                className="bg-white hover:bg-neutral-50 text-[#2B2B2B] border border-neutral-200 shadow-sm px-10 group"
                style={{
                  fontFamily: 'Campton, sans-serif',
                  fontWeight: 600
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                Escribir por WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
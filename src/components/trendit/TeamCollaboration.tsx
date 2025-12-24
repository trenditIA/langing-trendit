import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Video,
  Users,
  Monitor,
  Headphones,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Building2,
  GraduationCap,
  Presentation,
  Heart,
  User,
  Settings,
  Camera,
  Mic,
  Wifi,
  Shield,
  BarChart3
} from 'lucide-react';
import { AlertModal } from './AlertModal';

export function TeamCollaboration() {
  return (
    <div className="bg-white">
      <HeroTeamCollab />
      <SelectorSecciones />
      <BandaContexto />
      <QueResolvemos />
      <ArquitecturasSalas />
      <MarcasIntegramos />
      <ComoImplementamos />
      <CTAWizard />
    </div>
  );
}

// ==================== HERO ====================
function HeroTeamCollab() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%20Trendit%2C%20quiero%20informaci%C3%B3n%20sobre%20Team%20Collaboration%20(salas%20de%20reuni%C3%B3n%2C%20videoconferencia%2C%20audio%2C%20soluciones%20h%C3%ADbridas).%20%C2%BFQu%C3%A9%20me%20recomiendan%3F', '_blank');
  };

  const scrollToWizard = () => {
    const element = document.getElementById('wizard-collaboration');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24 px-6 lg:px-12"
      style={{
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)'
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, #E94E1B 0%, transparent 60%)'
        }}
      />

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-[40px] md:text-[52px] lg:text-[58px] leading-[1.1] mb-6 lg:mb-7 text-[#282327]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Team Collaboration que se siente natural
          </h1>

          <p
            className="text-[17px] md:text-[19px] lg:text-[21px] leading-[1.5] mb-5 text-neutral-600 max-w-[860px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Diseñamos e integramos salas, aulas y espacios híbridos donde audio, video y colaboración funcionan como una sola experiencia: clara, segura y lista para escalar.
          </p>

          <p
            className="text-[15px] lg:text-[16px] mb-8 lg:mb-10 text-neutral-500"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 500
            }}
          >
            De una sala chica a un auditorio. Con gestión, adopción y soporte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={scrollToWizard}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#D43E10] group"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              <span className="text-[15px] lg:text-[16px]">Diseñar un espacio</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#282327] rounded-full border-2 border-neutral-200 hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-md"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              <MessageCircle className="size-4" />
              <span className="text-[15px] lg:text-[16px]">Hablar con un especialista</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== SELECTOR SECCIONES ====================
function SelectorSecciones() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const secciones = [
    { id: 'salas-hibridas', icon: <Video className="size-5" />, label: 'Salas híbridas' },
    { id: 'aulas', icon: <GraduationCap className="size-5" />, label: 'Aulas y capacitación' },
    { id: 'auditorios', icon: <Presentation className="size-5" />, label: 'Auditorios y eventos' },
    { id: 'telemedicina', icon: <Heart className="size-5" />, label: 'Telemedicina / Salud' },
    { id: 'trabajo-individual', icon: <User className="size-5" />, label: 'Trabajo individual' },
    { id: 'gestion', icon: <Settings className="size-5" />, label: 'Gestión y adopción' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-14 px-6 lg:px-12 bg-white sticky top-20 z-30 border-b border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {secciones.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`p-4 rounded-xl transition-all duration-300 text-center group ${activeSection === sec.id
                ? 'bg-neutral-100 ring-1 ring-[#E94E1B]/30'
                : 'bg-neutral-50 hover:bg-neutral-100'
                }`}
              style={{
                boxShadow: activeSection === sec.id
                  ? '0 2px 8px rgba(233, 78, 27, 0.08)'
                  : '0 1px 3px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div
                className={`size-10 mx-auto rounded-lg flex items-center justify-center mb-2 transition-all ${activeSection === sec.id
                  ? 'bg-[#E94E1B] text-white'
                  : 'bg-white text-neutral-600 group-hover:bg-neutral-200'
                  }`}
              >
                {sec.icon}
              </div>
              <span
                className={`text-[13px] leading-tight ${activeSection === sec.id ? 'text-[#282327]' : 'text-neutral-600'
                  }`}
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {sec.label}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto -mx-6 px-6">
          <div className="flex gap-3 pb-2" style={{ minWidth: 'max-content' }}>
            {secciones.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${activeSection === sec.id
                  ? 'bg-[#E94E1B] text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700'
                  }`}
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '14px'
                }}
              >
                <span className="size-5">{sec.icon}</span>
                <span>{sec.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== BANDA DE CONTEXTO ====================
function BandaContexto() {
  const stats = [
    {
      title: 'Interrupciones cada ~2 minutos',
      text: 'La colaboración digital aceleró, pero también fragmentó el foco.',
      source: 'Fuente: Microsoft Work Trend Index (resumen en medios).'
    },
    {
      title: 'Trabajo híbrido como norma',
      text: 'La ejecución depende de espacios listos para colaborar, no solo de apps.',
      source: 'Fuente: Cisco Hybrid Work Study.'
    },
    {
      title: '~49% ve herramientas/procesos consistentes',
      text: 'Si la experiencia no es pareja, la adopción cae.',
      source: 'Fuente: Cisco Hybrid Work Study.'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 lg:p-7 bg-white rounded-2xl border border-neutral-200"
            >
              <h3
                className="text-[18px] lg:text-[20px] mb-3 text-[#282327] leading-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {stat.title}
              </h3>
              <p
                className="text-[14px] lg:text-[15px] text-neutral-600 mb-3 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {stat.text}
              </p>
              <p
                className="text-[12px] text-neutral-400 italic"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {stat.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== QUÉ RESOLVEMOS ====================
function QueResolvemos() {
  const pilares = [
    {
      icon: <Building2 className="size-6" />,
      title: 'Espacios',
      text: 'Salas, aulas y auditorios diseñados para que la tecnología se integre sin fricción.'
    },
    {
      icon: <Monitor className="size-6" />,
      title: 'Plataformas',
      text: 'Integración con Teams, Webex, Zoom y gestión centralizada de dispositivos.'
    },
    {
      icon: <Users className="size-6" />,
      title: 'Personas',
      text: 'Adopción real: capacitación, soporte y acompañamiento para que el equipo use lo que instalamos.'
    }
  ];

  return (
    <section id="salas-hibridas" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-12 lg:mb-14 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Qué resolvemos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pilares.map((pilar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-6 lg:p-8 bg-neutral-50 rounded-2xl border border-neutral-200 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="size-14 rounded-xl flex items-center justify-center mb-5 text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                {pilar.icon}
              </div>
              <h3
                className="text-[20px] lg:text-[22px] mb-3 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {pilar.title}
              </h3>
              <p
                className="text-[15px] lg:text-[16px] text-neutral-600 leading-relaxed"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                {pilar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== ARQUITECTURAS POR TIPO DE SALA ====================
function ArquitecturasSalas() {
  const salas = [
    {
      id: 'aulas',
      title: 'Sala chica',
      subtitle: '2-4 personas',
      componentes: [
        { icon: <Camera className="size-4" />, text: 'Cámara all-in-one o soundbar' },
        { icon: <Monitor className="size-4" />, text: 'Pantalla táctil o monitor compartido' },
        { icon: <Mic className="size-4" />, text: 'Audio integrado o speakerphone' },
        { icon: <Wifi className="size-4" />, text: 'Conectividad cableada/wireless' }
      ]
    },
    {
      id: 'auditorios',
      title: 'Sala mediana',
      subtitle: '6-10 personas',
      componentes: [
        { icon: <Camera className="size-4" />, text: 'Cámara PTZ con auto-framing' },
        { icon: <Monitor className="size-4" />, text: 'Pantalla grande o dual screen' },
        { icon: <Mic className="size-4" />, text: 'Micrófonos de techo o mesa' },
        { icon: <Settings className="size-4" />, text: 'Panel de control táctil' }
      ]
    },
    {
      id: 'telemedicina',
      title: 'Sala grande',
      subtitle: '12-20 personas',
      componentes: [
        { icon: <Camera className="size-4" />, text: 'Cámaras múltiples con tracking' },
        { icon: <Monitor className="size-4" />, text: 'Displays duales o videowall' },
        { icon: <Mic className="size-4" />, text: 'Array de micrófonos de techo' },
        { icon: <Shield className="size-4" />, text: 'Gestión centralizada' }
      ]
    },
    {
      id: 'trabajo-individual',
      title: 'Auditorio',
      subtitle: '+50 personas',
      componentes: [
        { icon: <Presentation className="size-4" />, text: 'Sistema de audio reforzado' },
        { icon: <Monitor className="size-4" />, text: 'Proyección o LED wall' },
        { icon: <Camera className="size-4" />, text: 'Cámaras broadcast + tracking' },
        { icon: <Settings className="size-4" />, text: 'Control y producción AV' }
      ]
    },
    {
      id: 'gestion',
      title: 'Aula híbrida',
      subtitle: 'Educación + remoto',
      componentes: [
        { icon: <GraduationCap className="size-4" />, text: 'Cámara docente + panorámica' },
        { icon: <Monitor className="size-4" />, text: 'Pantallas para presencial + streaming' },
        { icon: <Mic className="size-4" />, text: 'Audio para instructor y sala' },
        { icon: <BarChart3 className="size-4" />, text: 'Grabación y gestión de contenido' }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-12 lg:mb-14 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Arquitecturas por tipo de sala
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {salas.map((sala, idx) => (
            <motion.div
              key={sala.id}
              id={sala.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 lg:p-7 bg-white rounded-2xl border border-neutral-200 hover:shadow-md transition-all duration-300"
            >
              <h3
                className="text-[20px] lg:text-[22px] mb-1 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {sala.title}
              </h3>
              <p
                className="text-[13px] text-neutral-500 mb-5"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                {sala.subtitle}
              </p>
              <ul className="space-y-3">
                {sala.componentes.map((comp, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5">
                    <div className="size-7 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0 text-neutral-600">
                      {comp.icon}
                    </div>
                    <span
                      className="text-[14px] text-neutral-700 leading-relaxed pt-0.5"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {comp.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== MARCAS QUE INTEGRAMOS ====================
function MarcasIntegramos() {
  const marcas = ['Microsoft', 'Logitech', 'Jabra', 'Cisco', 'Lenovo', 'Samsung', 'Huawei'];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[40px] lg:text-[44px] mb-6 text-[#282327] text-center leading-tight"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Marcas que integramos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[16px] md:text-[17px] text-neutral-600 text-center max-w-[800px] mx-auto mb-10 lg:mb-12 leading-relaxed"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400
          }}
        >
          Integramos tecnologías probadas en campo y compatibles entre sí. Priorizamos estabilidad, administración y adopción; cuando aplica, usamos componentes certificados (ej.: Teams Rooms).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4"
        >
          {marcas.map((marca, idx) => (
            <div
              key={idx}
              className="px-6 py-3 bg-neutral-50 rounded-full border border-neutral-200 hover:border-neutral-300 transition-all duration-300"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              {marca}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ==================== CÓMO IMPLEMENTAMOS ====================
function ComoImplementamos() {
  const pasos = [
    {
      number: '01',
      title: 'Relevamiento',
      text: 'Identificamos espacios, usos, plataformas y restricciones del entorno.'
    },
    {
      number: '02',
      title: 'Diseño',
      text: 'Proponemos arquitectura, componentes, alcance e inversión clara.'
    },
    {
      number: '03',
      title: 'Piloto',
      text: 'Validamos en una sala representativa antes de escalar.'
    },
    {
      number: '04',
      title: 'Implementación',
      text: 'Instalamos, configuramos y probamos con método y documentación.'
    },
    {
      number: '05',
      title: 'Adopción',
      text: 'Capacitamos equipos y facilitamos la curva de adopción.'
    },
    {
      number: '06',
      title: 'Soporte y mejora continua',
      text: 'Acompañamos operación, monitoreo y evolución del entorno.'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
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
          Cómo lo implementa Trendit
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pasos.map((paso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="p-6 lg:p-7 bg-white rounded-2xl border border-neutral-200 h-full">
                <div
                  className="size-14 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                    boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                  }}
                >
                  <span
                    className="text-[22px]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 700
                    }}
                  >
                    {paso.number}
                  </span>
                </div>
                <h3
                  className="text-[18px] lg:text-[20px] mb-3 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  {paso.title}
                </h3>
                <p
                  className="text-[14px] lg:text-[15px] text-neutral-600 leading-relaxed"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {paso.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CTA WIZARD ====================
function CTAWizard() {
  const [step, setStep] = useState(1);
  const [alertModal, setAlertModal] = useState<{
    isOpen: boolean;
    type: 'success' | 'error' | 'warning';
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });
  const [formData, setFormData] = useState({
    tipoEspacio: '',
    plataforma: '',
    tamanoSala: '',
    marcasPreferidas: [] as string[],
    otraMarca: '',
    razonSocial: '',
    cuit: '',
    email: '',
    telefono: '',
    ubicacion: ''
  });

  const tiposEspacio = [
    { id: 'sala-chica', label: 'Sala chica', icon: <Users className="size-5" /> },
    { id: 'sala-mediana', label: 'Sala mediana', icon: <Video className="size-5" /> },
    { id: 'sala-grande', label: 'Sala grande', icon: <Monitor className="size-5" /> },
    { id: 'auditorio', label: 'Auditorio', icon: <Presentation className="size-5" /> },
    { id: 'aula', label: 'Aula híbrida', icon: <GraduationCap className="size-5" /> },
    { id: 'telemedicina', label: 'Telemedicina', icon: <Heart className="size-5" /> }
  ];

  const plataformas = ['Microsoft Teams', 'Cisco Webex', 'Zoom', 'Google Meet', 'Otra'];
  const marcas = ['Microsoft', 'Logitech', 'Jabra', 'Cisco', 'Lenovo', 'Samsung', 'Otros'];

  const nextStep = () => {
    if (step === 1 && !formData.tipoEspacio) {
      setAlertModal({
        isOpen: true,
        type: 'error',
        title: 'Campo requerido',
        message: 'Selecciona un tipo de espacio para continuar.'
      });
      return;
    }
    if (step === 2) {
      if (!formData.plataforma || formData.marcasPreferidas.length === 0) {
        setAlertModal({
          isOpen: true,
          type: 'error',
          title: 'Campos incompletos',
          message: 'Completa todos los campos obligatorios para continuar.'
        });
        return;
      }
      if (formData.marcasPreferidas.includes('Otros') && !formData.otraMarca) {
        setAlertModal({
          isOpen: true,
          type: 'error',
          title: 'Información requerida',
          message: 'Especifica la marca en el campo "Otros".'
        });
        return;
      }
    }
    if (step === 3) {
      if (!formData.razonSocial || !formData.cuit || !formData.email || !formData.telefono || !formData.ubicacion) {
        setAlertModal({
          isOpen: true,
          type: 'error',
          title: 'Campos incompletos',
          message: 'Completa todos los campos obligatorios para continuar.'
        });
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const toggleMarca = (marca: string) => {
    if (formData.marcasPreferidas.includes(marca)) {
      setFormData({ ...formData, marcasPreferidas: formData.marcasPreferidas.filter(m => m !== marca) });
    } else {
      setFormData({ ...formData, marcasPreferidas: [...formData.marcasPreferidas, marca] });
    }
  };

  const handleSubmit = () => {
    setAlertModal({
      isOpen: true,
      type: 'success',
      title: '¡Solicitud enviada!',
      message: 'Un especialista de Trendit se pondrá en contacto pronto.'
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%20Trendit%2C%20quiero%20informaci%C3%B3n%20sobre%20Team%20Collaboration%20(salas%20de%20reuni%C3%B3n%2C%20videoconferencia%2C%20audio%2C%20soluciones%20h%C3%ADbridas).%20%C2%BFQu%C3%A9%20me%20recomiendan%3F', '_blank');
  };

  return (
    <section id="wizard-collaboration" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Diseñar un espacio
          </h2>
          <p
            className="text-[16px] md:text-[17px] text-neutral-600 leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Completa estos pasos y te contactamos con una propuesta a medida
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`size-10 rounded-full flex items-center justify-center transition-all duration-300 ${step >= s ? 'bg-[#E94E1B] text-white' : 'bg-neutral-200 text-neutral-500'
                    }`}
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded ${step > s ? 'bg-[#E94E1B]' : 'bg-neutral-200'
                      }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[13px] text-neutral-600" style={{ fontFamily: 'Campton', fontWeight: 500 }}>
            <span>Tipo de espacio</span>
            <span>Plataforma y marcas</span>
            <span>Datos de contacto</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-neutral-50 rounded-2xl p-8 lg:p-10 border border-neutral-200 mb-8">
          {step === 1 && (
            <div>
              <h3
                className="text-[22px] mb-6 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Tipo de espacio
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tiposEspacio.map((tipo) => (
                  <button
                    key={tipo.id}
                    onClick={() => setFormData({ ...formData, tipoEspacio: tipo.id })}
                    className={`p-5 rounded-xl text-left transition-all duration-300 ${formData.tipoEspacio === tipo.id
                      ? 'bg-[#E94E1B] text-white shadow-lg ring-2 ring-[#E94E1B]'
                      : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#E94E1B]'
                      }`}
                  >
                    <div className={`size-10 rounded-lg flex items-center justify-center mb-3 ${formData.tipoEspacio === tipo.id ? 'bg-white/20' : 'bg-neutral-100'
                      }`}>
                      {tipo.icon}
                    </div>
                    <span
                      className="text-[15px]"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {tipo.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3
                className="text-[22px] mb-2 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Plataforma y marcas
              </h3>
              <p className="text-[14px] text-neutral-600 mb-6" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                Selecciona al menos 1 marca preferida
              </p>

              <div className="mb-6">
                <label className="block text-[14px] text-neutral-700 mb-3" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                  Plataforma principal *
                </label>
                <select
                  value={formData.plataforma}
                  onChange={(e) => setFormData({ ...formData, plataforma: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                >
                  <option value="">Seleccionar...</option>
                  {plataformas.map((plat) => (
                    <option key={plat} value={plat}>{plat}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-[14px] text-neutral-700 mb-3" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                  Tamaño de sala
                </label>
                <input
                  type="text"
                  placeholder="Ej: 6-10 personas"
                  value={formData.tamanoSala}
                  onChange={(e) => setFormData({ ...formData, tamanoSala: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
              </div>

              <div>
                <label className="block text-[14px] text-neutral-700 mb-3" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                  Marcas preferidas *
                </label>
                <div className="flex flex-wrap gap-3 mb-4">
                  {marcas.map((marca) => (
                    <button
                      key={marca}
                      onClick={() => toggleMarca(marca)}
                      className={`px-5 py-2.5 rounded-full transition-all duration-300 ${formData.marcasPreferidas.includes(marca)
                        ? 'bg-[#E94E1B] text-white shadow-md'
                        : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#E94E1B]'
                        }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                    >
                      {marca}
                    </button>
                  ))}
                </div>
                {formData.marcasPreferidas.includes('Otros') && (
                  <input
                    type="text"
                    placeholder="Especificar marca *"
                    value={formData.otraMarca}
                    onChange={(e) => setFormData({ ...formData, otraMarca: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                    style={{ fontFamily: 'Campton', fontSize: '14px' }}
                  />
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3
                className="text-[22px] mb-6 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Datos de contacto
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Razón social *"
                  value={formData.razonSocial}
                  onChange={(e) => setFormData({ ...formData, razonSocial: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="text"
                  placeholder="CUIT *"
                  value={formData.cuit}
                  onChange={(e) => setFormData({ ...formData, cuit: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
                <input
                  type="tel"
                  placeholder="Teléfono *"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                  style={{ fontFamily: 'Campton', fontSize: '14px' }}
                />
              </div>
              <input
                type="text"
                placeholder="Provincia/Ciudad *"
                value={formData.ubicacion}
                onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                className="w-full mt-4 px-5 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                style={{ fontFamily: 'Campton', fontSize: '14px' }}
              />
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="text-center mb-8">
                <div className="size-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="size-10 text-green-600" />
                </div>
                <h3
                  className="text-[24px] mb-3 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 700
                  }}
                >
                  Tu pedido
                </h3>
                <p
                  className="text-[15px] text-neutral-600"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Revisa la información antes de enviar
                </p>
              </div>

              <div className="space-y-4 bg-white rounded-xl p-6">
                <div>
                  <div className="text-[13px] text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                    Tipo de espacio:
                  </div>
                  <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {tiposEspacio.find(t => t.id === formData.tipoEspacio)?.label}
                  </div>
                </div>
                <div>
                  <div className="text-[13px] text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                    Plataforma:
                  </div>
                  <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {formData.plataforma}
                  </div>
                </div>
                <div>
                  <div className="text-[13px] text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                    Marcas:
                  </div>
                  <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {formData.marcasPreferidas.join(', ')} {formData.otraMarca && `(${formData.otraMarca})`}
                  </div>
                </div>
                <div>
                  <div className="text-[13px] text-neutral-500 mb-1" style={{ fontFamily: 'Campton', fontWeight: 600 }}>
                    Contacto:
                  </div>
                  <div className="text-[14px] text-neutral-700" style={{ fontFamily: 'Campton', fontWeight: 400 }}>
                    {formData.razonSocial} - {formData.email} - {formData.telefono}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={handleSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  <span className="text-[15px]">Enviar solicitud</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent text-[#282327] rounded-full border-2 border-neutral-300 hover:border-[#E94E1B] transition-all duration-300"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  <MessageCircle className="size-4" />
                  <span className="text-[15px]">Contactar por WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="flex gap-4">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-7 py-4 bg-white text-neutral-700 rounded-full border-2 border-neutral-200 hover:border-neutral-300 transition-all duration-300"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                Volver
              </button>
            )}
            <button
              onClick={nextStep}
              className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#D43E10] group"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <span>Siguiente</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>

      {/* Alert Modal */}
      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={() => setAlertModal({ ...alertModal, isOpen: false })}
        type={alertModal.type}
        title={alertModal.title}
        message={alertModal.message}
      />
    </section>
  );
}
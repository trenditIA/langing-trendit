import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap,
  Battery,
  Shield,
  Activity,
  Server,
  Network,
  Camera,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Eye,
  FileText,
  Layers,
  Settings,
  Thermometer,
  AlertTriangle,
  Power,
  Monitor,
  Target,
  Clock,
  ListChecks
} from 'lucide-react';

export function EnergiaContinuidad() {
  return (
    <div className="bg-white">
      <HeroEnergia />
      <ContextoEnergia />
      <QueIncluye />
      <MarcasPrincipales />
      <VRLAvsLitio />
      <Termografia />
      <ComoTrabajamosEnergia />
      <CTAFinalEnergia />
    </div>
  );
}

// ==================== HERO ====================
function HeroEnergia() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%2C%20necesito%20información%20sobre%20Energía%20y%20Continuidad', '_blank');
  };

  return (
    <section 
      className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 px-6 lg:px-12 overflow-hidden"
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

      <div className="max-w-[980px] mx-auto">
        <div className="flex flex-col items-center">
          
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[900px]"
          >
            {/* H1 */}
            <h1 
              className="text-[38px] md:text-[48px] lg:text-[54px] leading-[1.1] mb-5 lg:mb-6 text-[#282327] text-center"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              Energía y continuidad para operaciones que no se detienen
            </h1>

            {/* Subtitle */}
            <p 
              className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] mb-6 text-neutral-600 text-center"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Desde UPS (SAI), baterías y distribución eléctrica hasta monitoreo y termografía. Trendit diseña e integra soluciones para proteger infraestructura crítica: data center, redes, videoseguridad, producción y puestos de trabajo.
            </p>

            {/* Bullets - centered container, left-aligned text */}
            <ul className="space-y-3 mb-7 lg:mb-8 max-w-[680px] mx-auto">
              {[
                'Protección ante microcortes, variaciones de tensión y eventos eléctricos',
                'Autonomía y respaldo: VRLA o litio según TCO y criticidad',
                'Prevención de fallas con inspección térmica en tableros y puntos críticos'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                  <span 
                    className="text-[15px] lg:text-[16px] text-neutral-700"
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

            {/* CTAs - centered */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
              <a
                href="#cta-final"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-[#D43E10] group"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <span>Dimensionar UPS</span>
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

            {/* Microcopy - centered */}
            <p 
              className="text-[13px] text-neutral-500 text-center"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Respuesta en horario laboral. Relevamiento según sitio y criticidad.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function DiagramNode({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className="size-14 rounded-xl flex items-center justify-center bg-white border border-neutral-200 text-neutral-700"
        style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)' }}
      >
        {icon}
      </div>
      <span 
        className="text-[12px] text-neutral-600"
        style={{
          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 500
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ==================== CONTEXTO ====================
function ContextoEnergia() {
  const cards = [
    {
      icon: <Activity className="size-6" />,
      title: 'Continuidad operativa',
      text: 'Mantener servicios críticos activos durante eventos eléctricos.'
    },
    {
      icon: <Shield className="size-6" />,
      title: 'Protección de activos',
      text: 'Reducir estrés eléctrico y fallas en equipos sensibles.'
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: 'TCO bajo control',
      text: 'Menos incidentes, menos urgencias, más vida útil.'
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
          className="text-center mb-10 lg:mb-12"
        >
          <h2 
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Cuando la energía falla, la tecnología también
          </h2>
          <p 
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-600 max-w-[920px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La transformación digital incrementa la dependencia de infraestructura: redes, storage, cámaras, control de accesos, servidores, Wi-Fi y comunicaciones. En ese contexto, una mala calidad de energía o un corte inesperado puede generar reinicios, degradación de performance y paradas operativas. La continuidad no es "comprar una UPS": es diseñar una arquitectura eléctrica segura, medible y mantenible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
      </div>
    </section>
  );
}

// ==================== QUÉ INCLUYE ====================
function QueIncluye() {
  const bloques = [
    {
      icon: <Zap className="size-6" />,
      title: 'UPS / SAI (monofásicas y trifásicas)',
      items: [
        'Line-interactive u online doble conversión según criticidad',
        'Formatos rack / torre / modular según sitio',
        'Escalabilidad y redundancia según arquitectura'
      ]
    },
    {
      icon: <Battery className="size-6" />,
      title: 'Baterías y autonomía',
      items: [
        'VRLA o litio según TCO y operación',
        'Packs externos y recambios planificados',
        'Estrategia de reemplazo para continuidad sostenible'
      ]
    },
    {
      icon: <Power className="size-6" />,
      title: 'Distribución y orden eléctrico',
      items: [
        'PDUs, protecciones y distribución en rack',
        'Orden, rotulado y documentación en sitio',
        'Tableros y canalizaciones según alcance del proyecto'
      ]
    },
    {
      icon: <Monitor className="size-6" />,
      title: 'Monitoreo y gestión',
      items: [
        'Alertas, eventos y capacidad',
        'Estado de baterías y salud del sistema',
        'Visibilidad operativa para mantenimiento preventivo'
      ]
    },
    {
      icon: <Thermometer className="size-6" />,
      title: 'Termografía y prevención',
      items: [
        'Inspección térmica en tableros, UPS y conexiones',
        'Detección temprana de puntos calientes y anomalías',
        'Soporte para planes de mantenimiento preventivo'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
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
            Soluciones de punta a punta
          </h2>
          <p 
            className="text-[15px] lg:text-[16px] text-neutral-600"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Se selecciona la tecnología según criticidad, autonomía requerida, tipo de carga (TI/industrial), crecimiento y mantenimiento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {bloques.map((bloque, idx) => (
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
              <div 
                className="size-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                {bloque.icon}
              </div>
              <h3 
                className="text-[17px] lg:text-[18px] mb-3 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                {bloque.title}
              </h3>
              <ul className="space-y-2">
                {bloque.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <div className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                    <span 
                      className="text-[14px] text-neutral-600 leading-relaxed"
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
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[13px] text-neutral-500 italic"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400
          }}
        >
          Instalaciones y mediciones por personal habilitado y según normativa local.
        </motion.p>
      </div>
    </section>
  );
}

// ==================== MARCAS PRINCIPALES ====================
function MarcasPrincipales() {
  const [selectedTab, setSelectedTab] = useState('apc');

  const tabs = [
    { id: 'apc', label: 'APC (Schneider Electric)' },
    { id: 'eaton', label: 'Eaton' }
  ];

  const contenido: { [key: string]: any } = {
    'apc': {
      titulo: 'Arquitecturas escalables para entornos críticos',
      texto: 'Ideal para proyectos con necesidad de crecimiento, redundancia y estandarización. Enfoque en continuidad, orden eléctrico y gestión según plataforma.'
    },
    'eaton': {
      titulo: 'Eficiencia y flexibilidad orientadas a TCO',
      texto: 'Opciones sólidas para cargas críticas y expansión planificada. Enfoque en eficiencia y alternativas de baterías según operación y ciclo de vida.'
    }
  };

  const current = contenido[selectedTab];

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
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Dos marcas líderes, un criterio: confiabilidad
          </h2>
          <p 
            className="text-[16px] md:text-[17px] text-neutral-600 max-w-[820px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Trendit trabaja con un enfoque multimarca, pero estandariza gran parte de los proyectos de continuidad sobre Eaton y APC por disponibilidad, trayectoria, escalabilidad y opciones corporativas.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedTab === tab.id
                  ? 'bg-[#E94E1B] text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
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
          className="p-8 lg:p-10 bg-neutral-50 rounded-2xl border border-neutral-200 text-center"
          style={{
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h3 
            className="text-[22px] lg:text-[26px] mb-4 text-[#282327]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            {current.titulo}
          </h3>
          <p 
            className="text-[16px] lg:text-[17px] text-neutral-600 leading-relaxed max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            {current.texto}
          </p>
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

// ==================== VRLA VS LITIO ====================
function VRLAvsLitio() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
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
            Baterías: el corazón del respaldo
          </h2>
          <p 
            className="text-[15px] lg:text-[16px] text-neutral-600"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La decisión impacta mantenimiento, reemplazos, espacio y costos a lo largo de los años.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* VRLA Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 bg-white rounded-2xl border border-neutral-200"
            style={{
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="size-12 rounded-xl flex items-center justify-center text-white"
                style={{
                  background: 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)',
                  boxShadow: '0 4px 12px rgba(107, 114, 128, 0.25)'
                }}
              >
                <Battery className="size-6" />
              </div>
              <h3 
                className="text-[22px] lg:text-[24px] text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700
                }}
              >
                VRLA (plomo-ácido)
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                'Menor costo inicial',
                'Reemplazos más frecuentes en el ciclo de vida',
                'Mayor peso/espacio por autonomía comparable'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-neutral-500 flex-shrink-0 mt-1" />
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
          </motion.div>

          {/* Litio Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 bg-white rounded-2xl border-2 border-[#E94E1B]"
            style={{
              boxShadow: '0 8px 24px rgba(233, 78, 27, 0.15)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="size-12 rounded-xl flex items-center justify-center text-white"
                style={{
                  background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                }}
              >
                <Battery className="size-6" />
              </div>
              <h3 
                className="text-[22px] lg:text-[24px] text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700
                }}
              >
                Litio
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                'Mayor vida útil y más ciclos',
                'Menor peso/huella',
                'Potencial mejor TCO según operación'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-1" />
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
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[16px] lg:text-[17px] text-neutral-600 leading-relaxed"
          style={{
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400
          }}
        >
          Trendit dimensiona autonomía y estrategia de recambio para que la continuidad sea sostenible.
        </motion.p>
      </div>
    </section>
  );
}

// ==================== TERMOGRAFÍA ====================
function Termografia() {
  const bullets = [
    'Puntos calientes en borneras y conexiones',
    'Desbalances de carga y sobrecargas',
    'Prevención de cortes inesperados y degradación'
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-5 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Ver el riesgo antes de que sea un incidente
          </h2>
          <p 
            className="text-[16px] md:text-[17px] text-neutral-600 max-w-[780px] mx-auto leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            La termografía infrarroja permite identificar sobrecalentamientos y anomalías que suelen anticipar fallas. Es una herramienta clave para inspecciones periódicas en tableros, UPS y puntos críticos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-10 bg-neutral-50 rounded-2xl border border-neutral-200"
          style={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="size-14 rounded-xl flex items-center justify-center text-white"
              style={{
                background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
              }}
            >
              <Thermometer className="size-7" />
            </div>
            <h3 
              className="text-[20px] lg:text-[22px] text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              Inspección térmica preventiva
            </h3>
          </div>
          
          <ul className="space-y-3">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                <span 
                  className="text-[15px] lg:text-[16px] text-neutral-700 leading-relaxed"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== CÓMO TRABAJAMOS ====================
function ComoTrabajamosEnergia() {
  const pasos = [
    { icon: <Eye className="size-6" />, title: 'Relevamiento del sitio y criticidad' },
    { icon: <Target className="size-6" />, title: 'Dimensionamiento (carga, autonomía, crecimiento)' },
    { icon: <FileText className="size-6" />, title: 'Propuesta por etapas (alcance, tiempos, costos)' },
    { icon: <Settings className="size-6" />, title: 'Implementación y orden en sitio' },
    { icon: <CheckCircle2 className="size-6" />, title: 'Pruebas, puesta en marcha y documentación' },
    { icon: <Activity className="size-6" />, title: 'Mantenimiento planificado y mejora continua' }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-neutral-50">
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
              <div className="flex items-start gap-4">
                <div 
                  className="size-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                    boxShadow: '0 4px 12px rgba(233, 78, 27, 0.25)'
                  }}
                >
                  {paso.icon}
                </div>
                <div className="pt-1">
                  <div 
                    className="text-[13px] text-[#E94E1B] mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 700
                    }}
                  >
                    Paso {idx + 1}
                  </div>
                  <h3 
                    className="text-[16px] lg:text-[17px] text-[#282327] leading-tight"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    {paso.title}
                  </h3>
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
function CTAFinalEnergia() {
  const [formData, setFormData] = useState({
    organizacion: '',
    cuit: '',
    email: '',
    telefono: '',
    ciudad: '',
    provincia: '',
    tipoOperacion: [] as string[],
    necesidades: [] as string[],
    autonomia: ''
  });

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%2C%20necesito%20atención%20rápida%20sobre%20Energía%20y%20Continuidad', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const tipoOperacionOptions = ['Data center', 'Industria', 'Oficinas', 'Retail', 'Salud', 'Educación'];
  const necesidadesOptions = ['UPS', 'Baterías', 'PDU', 'Monitoreo', 'Termografía', 'Proyecto completo'];
  const autonomiaOptions = [
    '5–10 min',
    '10–20 min',
    '20–40 min',
    'No lo sé, necesito asesoramiento'
  ];

  const toggleSelection = (field: 'tipoOperacion' | 'necesidades', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  return (
    <section id="cta-final" className="py-16 md:py-20 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 
            className="text-[32px] md:text-[40px] lg:text-[44px] mb-4 text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Solicitar una propuesta de continuidad
          </h2>
          <p 
            className="text-[15px] lg:text-[16px] text-neutral-600"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Completar en 60 segundos para recibir una recomendación inicial y el próximo paso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Card formulario */}
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

              {/* CUIT */}
              <div>
                <label 
                  className="block text-[14px] text-neutral-700 mb-2"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  CUIT *
                </label>
                <input
                  type="text"
                  required
                  value={formData.cuit}
                  onChange={(e) => setFormData({ ...formData, cuit: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400,
                    fontSize: '15px'
                  }}
                />
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

              {/* Tipo de operación */}
              <div>
                <label 
                  className="block text-[14px] text-neutral-700 mb-3"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Tipo de operación *
                </label>
                <div className="flex flex-wrap gap-2">
                  {tipoOperacionOptions.map((tipo) => (
                    <button
                      key={tipo}
                      type="button"
                      onClick={() => toggleSelection('tipoOperacion', tipo)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        formData.tipoOperacion.includes(tipo)
                          ? 'bg-[#E94E1B] text-white border-2 border-[#E94E1B]'
                          : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-neutral-300'
                      }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '13px'
                      }}
                    >
                      {tipo}
                    </button>
                  ))}
                </div>
              </div>

              {/* Qué se necesita */}
              <div>
                <label 
                  className="block text-[14px] text-neutral-700 mb-3"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Qué se necesita *
                </label>
                <div className="flex flex-wrap gap-2">
                  {necesidadesOptions.map((necesidad) => (
                    <button
                      key={necesidad}
                      type="button"
                      onClick={() => toggleSelection('necesidades', necesidad)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        formData.necesidades.includes(necesidad)
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

              {/* Autonomía objetivo */}
              <div>
                <label 
                  className="block text-[14px] text-neutral-700 mb-2"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Autonomía objetivo *
                </label>
                <select
                  required
                  value={formData.autonomia}
                  onChange={(e) => setFormData({ ...formData, autonomia: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400,
                    fontSize: '15px'
                  }}
                >
                  <option value="">Seleccionar...</option>
                  {autonomiaOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
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
                Quiero una propuesta
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Card WhatsApp */}
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
              <span>WhatsApp – consulta rápida</span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
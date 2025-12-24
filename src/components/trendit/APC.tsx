import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Zap,
  Shield,
  Activity,
  TrendingUp,
  Building2,
  Server,
  Network,
  ShoppingCart,
  Hospital,
  Factory,
  GraduationCap,
  Landmark,
  Box,
  Boxes,
  Radio,
  Eye,
  Battery,
  Thermometer,
  Lock,
  MessageCircle,
  X,
  Home,
  CheckCircle2,
  AlertTriangle,
  Cloud,
  BarChart3,
  HardDrive,
  Cpu,
  Award
} from 'lucide-react';
import { Button } from '../ui/button';
import { AlertModal } from './AlertModal';

export function APC() {
  const [activeEscenarioTab, setActiveEscenarioTab] = useState(0);
  const whatsappNumber = '5493516013543';
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero información sobre soluciones APC con Trendit. Mi escenario es: _____. Necesito: _____.'
  );

  // Map de IDs a índices de tabs
  const escenarioIdToTab: { [key: string]: number } = {
    'oficinas': 0,
    'redes': 1,
    'sala-tecnica': 2,
    'datacenter': 3,
    'retail': 4,
    'industria': 5
  };

  const scrollToSection = (sectionId: string) => {
    // Si es un ID de escenario, también actualiza el tab
    if (escenarioIdToTab[sectionId] !== undefined) {
      setActiveEscenarioTab(escenarioIdToTab[sectionId]);
      // Primero actualiza el tab, luego hace scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white">
      <Breadcrumb />
      <Hero scrollToSection={scrollToSection} whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} />
      <QueResuelveAPC />
      <ExplorarNecesidad scrollToSection={scrollToSection} />
      <ArquitecturasRecomendadas selectedTab={activeEscenarioTab} setSelectedTab={setActiveEscenarioTab} />
      <FamiliasProductos />
      <SoftwareMonitoreo />
      <SolucionesIndustria />
      <ServiciosTrendit />
      <CalculadoraRapida scrollToSection={scrollToSection} />
      <CTAWizard whatsappNumber={whatsappNumber} />
      <FAQ />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="bg-white border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
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
          <span className="text-[#282327]">APC</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ scrollToSection, whatsappNumber, whatsappMessage }: any) {
  const trustChips = [
    { label: 'UPS', tooltip: 'Respaldo de energía' },
    { label: 'Racks', tooltip: 'Infraestructura organizada' },
    { label: 'PDUs', tooltip: 'Distribución eléctrica' },
    { label: 'Micro Data Centers', tooltip: 'Soluciones completas' },
    { label: 'Monitoreo', tooltip: 'Visibilidad 24/7' },
    { label: 'Servicios', tooltip: 'End-to-end' },
    { label: 'Edge & Sucursales', tooltip: 'Multi-sitio' },
    { label: 'Data Center', tooltip: 'Alta disponibilidad' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Background elements - Same as Home */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>

      {/* Static glow - Same as Home */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E94E1B] rounded-full blur-[120px] opacity-20" />

      <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        <div className="max-w-[1100px]">
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-white mb-4 md:mb-6">
            APC + Trendit: continuidad operativa y energía crítica para tu negocio
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-[1.6] max-w-2xl">
            Diseñamos e integramos soluciones APC para proteger infraestructura IT, redes y operaciones: UPS, distribución eléctrica, racks y monitoreo inteligente. Del relevamiento al soporte.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
            <Button
              size="lg"
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-6 md:px-8 group shadow-lg shadow-[#E94E1B]/20 w-full sm:w-auto"
              onClick={() => scrollToSection('cta-wizard')}
            >
              Iniciar consulta guiada
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
            Explorar soluciones →
          </button>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-3 mb-4">
            {trustChips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-help"
                title={chip.tooltip}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-white/50">
            Arquitecturas on-prem e híbridas, escalables por sitio o multi-sede.
          </p>
        </div>
      </div>
    </section>
  );
}

function QueResuelveAPC() {
  const cards = [
    {
      icon: <CheckCircle2 className="size-10" />,
      title: 'Disponibilidad',
      description: 'Respaldo de energía para mantener servicios críticos operativos.'
    },
    {
      icon: <Shield className="size-10" />,
      title: 'Protección',
      description: 'Mitigación de picos, variaciones y cortes que dañan equipos y datos.'
    },
    {
      icon: <Activity className="size-10" />,
      title: 'Gestión',
      description: 'Visibilidad y alertas para operar con control (local o remoto).'
    },
    {
      icon: <TrendingUp className="size-10" />,
      title: 'Escalabilidad',
      description: 'Desde una oficina y sucursal, hasta micro data centers y entornos complejos.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-6 leading-[1.15]">
            Cuando la energía falla, el negocio no puede parar
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:border-[#00BE00]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-16 rounded-xl bg-[#00BE00]/5 group-hover:bg-[#00BE00]/10 flex items-center justify-center text-[#00BE00] mb-5 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-[#282327] mb-3 leading-tight">
                {card.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.6]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExplorarNecesidad({ scrollToSection }: any) {
  const escenarios = [
    { id: 'oficinas', icon: <Building2 className="size-8" />, name: 'Oficinas & Puestos críticos', tag: 'Protegé PCs, redes y servidores pequeños.' },
    { id: 'redes', icon: <Network className="size-8" />, name: 'Redes & Telecom', tag: 'Continuidad para switches, routers, Wi-Fi y edge.' },
    { id: 'sala-tecnica', icon: <Server className="size-8" />, name: 'Salas técnicas / Micro Data Center', tag: 'Solución integrada: energía, refrigeración, seguridad y monitoreo.' },
    { id: 'datacenter', icon: <HardDrive className="size-8" />, name: 'Data Center', tag: 'Disponibilidad, distribución, monitoreo y planificación.' },
    { id: 'retail', icon: <ShoppingCart className="size-8" />, name: 'Retail & Sucursales', tag: 'Estandarización multi-sitio y soporte.' },
    { id: 'industria', icon: <Factory className="size-8" />, name: 'Industria / Operación', tag: 'Respaldo y protección para sistemas críticos y continuidad de procesos.' }
  ];

  return (
    <section id="explorar-necesidad" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Elegí tu escenario y te mostramos la arquitectura
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {escenarios.map((escenario, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white border-2 border-neutral-200 hover:border-[#00BE00]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="size-16 rounded-xl bg-[#00BE00]/5 group-hover:bg-[#00BE00]/10 flex items-center justify-center text-[#00BE00] mb-5 transition-colors">
                {escenario.icon}
              </div>
              <h3 className="text-[20px] font-semibold text-[#282327] mb-3">
                {escenario.name}
              </h3>
              <p className="text-[15px] text-neutral-600 mb-6 leading-[1.6]">
                {escenario.tag}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => scrollToSection(escenario.id)}
                  className="flex-1 text-[14px] font-medium text-[#00BE00] hover:text-[#00BE00]/80 transition-colors"
                >
                  Ver recomendación →
                </button>
                <button
                  onClick={() => scrollToSection('cta-wizard')}
                  className="px-4 py-2 bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white text-[14px] font-medium rounded-lg transition-colors"
                >
                  Consultar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArquitecturasRecomendadas({ selectedTab, setSelectedTab }: any) {
  const escenarios = [
    {
      id: 'oficinas',
      name: 'Oficinas & Puestos críticos',
      problema: 'Cortes, picos y fallas que afectan PCs, redes y productividad',
      solucion: ['UPS Back-UPS o Smart-UPS según carga', 'Protección de switchs y routers', 'Autonomía para apagado ordenado'],
      arquitectura: 'UPS de torre/rack → Equipos críticos → Monitoreo básico (SmartConnect si aplica)',
      beneficios: ['Continuidad en cortes breves', 'Protección de datos y equipos', 'Apagado seguro']
    },
    {
      id: 'redes',
      name: 'Redes & Telecom',
      problema: 'Switches, routers, Wi-Fi y equipamiento edge sin respaldo',
      solucion: ['UPS para rack 19"', 'PDUs para distribución ordenada', 'Monitoreo remoto'],
      arquitectura: 'UPS Smart-UPS/Easy UPS → PDU → Equipamiento de red → Alertas',
      beneficios: ['Red operativa 24/7', 'Orden en rack', 'Gestión centralizada']
    },
    {
      id: 'sala-tecnica',
      name: 'Salas técnicas / Micro Data Center',
      problema: 'Necesidad de solución integral: energía + refrigeración + seguridad + monitoreo',
      solucion: ['Micro Data Center APC NetShelter', 'UPS integrado', 'Refrigeración in-row o lateral', 'Control de acceso y sensores'],
      arquitectura: 'Micro DC → UPS + Cooling + PDU + Monitoreo → Equipment',
      beneficios: ['Solución llave en mano', 'Diseño estandarizado', 'Escalabilidad modular']
    },
    {
      id: 'datacenter',
      name: 'Data Center',
      problema: 'Alta disponibilidad, redundancia, monitoreo avanzado y planificación de capacidad',
      solucion: ['UPS trifásicos redundantes (N+1)', 'Distribución con PDUs inteligentes', 'DCIM (EcoStruxure IT)', 'Mantenimiento preventivo'],
      arquitectura: 'Tier III/IV → UPS redundante → Distribución por filas → DCIM + Capacity Planning',
      beneficios: ['SLAs exigentes', 'Visibilidad total', 'Escalado controlado']
    },
    {
      id: 'retail',
      name: 'Retail & Sucursales',
      problema: 'Multi-sitio con necesidad de estandarización y soporte remoto',
      solucion: ['UPS para POS, routers y cámaras', 'Gestión centralizada multi-sucursal', 'Soporte técnico Trendit'],
      arquitectura: 'Cada sucursal: UPS → POS/Red/Cámaras → Cloud (EcoStruxure IT) → Dashboard central',
      beneficios: ['Control multi-sede', 'Rollout estandarizado', 'Soporte proactivo']
    },
    {
      id: 'industria',
      name: 'Industria / Operación',
      problema: 'Protección de sistemas críticos (PLCs, SCADA, redes OT) sin detener producción',
      solucion: ['UPS industrial', 'Diseño según perfil de carga', 'Plan de contingencia operativa'],
      arquitectura: 'UPS robusto → PLCs/SCADA → Red OT → Monitoreo continuo',
      beneficios: ['Cero downtime no planificado', 'Seguridad operativa', 'Auditoría y cumplimiento']
    }
  ];

  const current = escenarios[selectedTab];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Arquitecturas recomendadas por escenario
          </h2>
          <p className="text-[16px] text-neutral-600 max-w-[800px] mx-auto">
            Soluciones APC dimensionadas para tu necesidad específica
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-4">
          {escenarios.map((esc, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTab(idx)}
              className={`px-6 py-3 rounded-xl text-[14px] font-medium whitespace-nowrap transition-all ${selectedTab === idx
                ? 'bg-[#00BE00] text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
            >
              {esc.name}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-3xl p-10"
            id={current.id}
          >
            <h3 className="text-[32px] font-semibold text-[#282327] mb-8">
              {current.name}
            </h3>

            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-4 flex items-center gap-2">
                    <AlertTriangle className="size-5 text-[#E94E1B]" />
                    Problema a resolver
                  </h4>
                  <p className="text-[15px] text-neutral-700 leading-[1.7]">
                    {current.problema}
                  </p>
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-4">
                    Qué incluye la solución
                  </h4>
                  <ul className="space-y-2">
                    {current.solucion.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-[#00BE00] flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-4">
                    Arquitectura típica
                  </h4>
                  <p className="text-[15px] text-neutral-700 leading-[1.7]">
                    {current.arquitectura}
                  </p>
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-4">
                    Beneficios clave
                  </h4>
                  <ul className="space-y-2">
                    {current.beneficios.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Award className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  size="lg"
                  className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white w-full sm:w-auto"
                  onClick={() => {
                    const element = document.getElementById('cta-wizard');
                    if (element) {
                      const yOffset = -100;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  Cotizar este escenario
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FamiliasProductos() {
  const familias = [
    {
      icon: <Battery className="size-10" />,
      title: 'UPS (Back-UPS / Smart-UPS / Easy UPS / Trifásicos)',
      description: 'Respaldo y protección para cargas críticas.',
      aplicaciones: 'Oficinas, salas técnicas, data centers'
    },
    {
      icon: <Zap className="size-10" />,
      title: 'Distribución eléctrica (PDUs / accesorios)',
      description: 'Orden, seguridad y eficiencia en racks.',
      aplicaciones: 'Racks, gabinetes, salas técnicas'
    },
    {
      icon: <Box className="size-10" />,
      title: 'Racks & accesorios',
      description: 'Estandarización de salas técnicas y data centers.',
      aplicaciones: 'Networking, servidores, telecoms'
    },
    {
      icon: <Boxes className="size-10" />,
      title: 'Micro Data Centers',
      description: 'Racks completos con potencia, refrigeración, seguridad y monitoreo.',
      aplicaciones: 'Edge, sucursales, salas compactas'
    },
    {
      icon: <Eye className="size-10" />,
      title: 'Monitoreo & DCIM',
      description: 'Visibilidad y control para infraestructura IT.',
      aplicaciones: 'Operación local y multi-sitio'
    },
    {
      icon: <Battery className="size-10" />,
      title: 'Baterías & autonomía',
      description: 'Dimensionamiento y crecimiento por demanda.',
      aplicaciones: 'UPS, expansión, reemplazo'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Componentes que integran una solución completa
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {familias.map((familia, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:border-[#00BE00]/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="size-16 rounded-xl bg-[#00BE00]/5 group-hover:bg-[#00BE00]/10 flex items-center justify-center text-[#00BE00] mb-5 transition-colors">
                {familia.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#282327] mb-3 leading-tight">
                {familia.title}
              </h3>
              <p className="text-[15px] text-neutral-700 mb-4 leading-[1.6]">
                {familia.description}
              </p>
              <p className="text-[13px] text-neutral-500">
                <span className="font-medium">Aplicaciones:</span> {familia.aplicaciones}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftwareMonitoreo() {
  const [tipoSitio, setTipoSitio] = useState<'single' | 'multi'>('single');

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Monitoreo moderno: del dispositivo al multi-sitio
          </h2>
          <p className="text-[18px] text-neutral-700 max-w-[700px] mx-auto leading-[1.7]">
            Centralizá alertas, estado y tendencias para operar sin sorpresas.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-neutral-100 rounded-xl p-1">
            <button
              onClick={() => setTipoSitio('single')}
              className={`px-6 py-3 rounded-lg text-[14px] font-medium transition-all ${tipoSitio === 'single'
                ? 'bg-white text-[#282327] shadow-sm'
                : 'text-neutral-600 hover:text-[#282327]'
                }`}
            >
              1 sitio
            </button>
            <button
              onClick={() => setTipoSitio('multi')}
              className={`px-6 py-3 rounded-lg text-[14px] font-medium transition-all ${tipoSitio === 'multi'
                ? 'bg-white text-[#282327] shadow-sm'
                : 'text-neutral-600 hover:text-[#282327]'
                }`}
            >
              Multi-sitio
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tipoSitio}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {tipoSitio === 'single' ? (
              <>
                <div className="bg-white border border-neutral-200 rounded-2xl p-8">
                  <Cloud className="size-12 text-[#00BE00] mb-4" />
                  <h3 className="text-[22px] font-semibold text-[#282327] mb-4">
                    SmartConnect (UPS conectado)
                  </h3>
                  <p className="text-[15px] text-neutral-700 leading-[1.7] mb-6">
                    Monitoreo remoto, notificaciones y actualizaciones de firmware en un click.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#00BE00] flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-neutral-600">Alertas en tiempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#00BE00] flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-neutral-600">Dashboard web/móvil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#00BE00] flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-neutral-600">Setup en minutos</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-neutral-100 to-white border border-neutral-200 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Server className="size-20 text-neutral-300 mx-auto mb-4" />
                    <p className="text-[14px] text-neutral-500">Diagrama: 1 UPS → SmartConnect → Alertas</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white border border-neutral-200 rounded-2xl p-8">
                  <BarChart3 className="size-12 text-[#00BE00] mb-4" />
                  <h3 className="text-[22px] font-semibold text-[#282327] mb-4">
                    EcoStruxure™ IT (DCIM en la nube, multi-sitio)
                  </h3>
                  <p className="text-[15px] text-neutral-700 leading-[1.7] mb-6">
                    Monitoreo, gestión y planificación para infraestructuras IT híbridas y complejas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#00BE00] flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-neutral-600">Vista unificada multi-sitio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#00BE00] flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-neutral-600">Capacity planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-[#00BE00] flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-neutral-600">Reportes y tendencias</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-neutral-100 to-white border border-neutral-200 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Cloud className="size-20 text-neutral-300 mx-auto mb-4" />
                    <p className="text-[14px] text-neutral-500">Diagrama: Multiple UPS → Cloud → Dashboard central</p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-[#00BE00] text-[#00BE00] hover:bg-[#00BE00] hover:text-white"
            onClick={() => {
              const element = document.getElementById('cta-wizard');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Quiero monitoreo remoto
          </Button>
        </div>
      </div>
    </section>
  );
}

function SolucionesIndustria() {
  const [selectedTab, setSelectedTab] = useState(0);

  const industrias = [
    {
      name: 'Retail',
      riesgo: 'Pérdida de ventas, colas paradas, no hay backup de transacciones.',
      protegemos: ['POS', 'Routers/switches', 'Servidores locales', 'Cámaras y seguridad'],
      arquitectura: 'UPS + PDU + Monitoreo remoto multi-sucursal'
    },
    {
      name: 'Salud',
      riesgo: 'Equipamiento médico crítico, historia clínica digital, sistemas de turnos.',
      protegemos: ['Servidores HCE', 'Redes', 'Equipamiento de diagnóstico', 'Comunicaciones'],
      arquitectura: 'UPS médico-grade + redundancia + monitoreo 24/7'
    },
    {
      name: 'Industria',
      riesgo: 'Detención de línea, pérdida de producto, seguridad operativa.',
      protegemos: ['PLCs y control', 'Servidores SCADA', 'Redes OT', 'Estaciones de operación'],
      arquitectura: 'UPS industrial + distribución robusta + plan de contingencia'
    },
    {
      name: 'Educación',
      riesgo: 'Aulas digitales, plataformas LMS, conectividad campus.',
      protegemos: ['Servidores educativos', 'Wi-Fi campus', 'Laboratorios', 'Administración'],
      arquitectura: 'UPS escalable + racks + monitoreo centralizado'
    },
    {
      name: 'Banca',
      riesgo: 'Transacciones, core bancario, canales digitales.',
      protegemos: ['Servidores core', 'ATMs', 'Sucursales', 'Seguridad perimetral'],
      arquitectura: 'Alta disponibilidad + redundancia N+1 + DCIM'
    },
    {
      name: 'Data Centers',
      riesgo: 'Downtime catastrófico, SLAs incumplidos, pérdida de reputación.',
      protegemos: ['Infraestructura completa', 'Refrigeración', 'Distribución', 'Monitoreo'],
      arquitectura: 'Tier III/IV + redundancia + monitoreo avanzado + capacity planning'
    }
  ];

  const current = industrias[selectedTab];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Soluciones para industrias que exigen continuidad
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-4">
          {industrias.map((ind, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTab(idx)}
              className={`px-6 py-3 rounded-xl text-[14px] font-medium whitespace-nowrap transition-all ${selectedTab === idx
                ? 'bg-[#00BE00] text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-3xl p-10"
          >
            <h3 className="text-[32px] font-semibold text-[#282327] mb-8">
              {current.name}
            </h3>

            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-3 flex items-center gap-2">
                    <AlertTriangle className="size-5 text-[#E94E1B]" />
                    Riesgo típico
                  </h4>
                  <p className="text-[15px] text-neutral-700 leading-[1.7]">
                    {current.riesgo}
                  </p>
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-[#282327] mb-3 flex items-center gap-2">
                    <Shield className="size-5 text-[#00BE00]" />
                    Qué protegemos
                  </h4>
                  <ul className="space-y-2">
                    {current.protegemos.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-[#00BE00] flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold text-[#282327] mb-3 flex items-center gap-2">
                  <Cpu className="size-5 text-[#E94E1B]" />
                  Arquitectura sugerida
                </h4>
                <p className="text-[15px] text-neutral-700 leading-[1.7] mb-8">
                  {current.arquitectura}
                </p>

                <Button
                  size="lg"
                  className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white w-full sm:w-auto"
                  onClick={() => {
                    const element = document.getElementById('cta-wizard');
                    if (element) {
                      const yOffset = -100;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  Cotizar este escenario
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ServiciosTrendit() {
  const pasos = [
    { num: '01', title: 'Relevamiento (carga, criticidad, autonomía, sitio)' },
    { num: '02', title: 'Ingeniería y dimensionamiento (kVA, autonomía, crecimiento)' },
    { num: '03', title: 'Diseño de arquitectura (UPS + distribución + rack + monitoreo)' },
    { num: '04', title: 'Instalación y puesta en marcha' },
    { num: '05', title: 'Pruebas, documentación y handover' },
    { num: '06', title: 'Monitoreo, mantenimiento y soporte' },
    { num: '07', title: 'Escalado multi-sede' }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] lg:text-[48px] mb-4 leading-[1.15]">
            Integramos APC de punta a punta
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00BE00]/10 border border-[#00BE00]/20 rounded-full text-[13px] text-[#00BE00] mb-8">
            <Award className="size-4" />
            Alineado a prácticas de ciclo de vida Schneider
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {pasos.map((paso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="text-[40px] font-bold text-[#00BE00] mb-4">
                {paso.num}
              </div>
              <p className="text-[15px] leading-[1.5]">
                {paso.title}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[15px] text-neutral-300 max-w-[700px] mx-auto">
          Servicios Schneider: Consultoría, modernización y soporte técnico según mejores prácticas del fabricante.
        </p>
      </div>
    </section>
  );
}

function CalculadoraRapida({ scrollToSection }: any) {
  const [formData, setFormData] = useState({
    tipoCarga: '',
    potencia: '',
    autonomia: '',
    cantidad: ''
  });

  const [resultado, setResultado] = useState<string | null>(null);

  const calcular = () => {
    if (formData.tipoCarga && formData.potencia && formData.autonomia) {
      setResultado('UPS recomendado: Smart-UPS 1500VA / Autonomía: 15-30min / Incluir: Monitoreo SmartConnect');
    }
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Estimá tu necesidad en 60 segundos
          </h2>
        </motion.div>

        <div className="bg-white border border-neutral-200 rounded-3xl p-10">
          <div className="space-y-6">
            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-3">
                Tipo de carga
              </label>
              <div className="flex flex-wrap gap-3">
                {['Networking', 'Servidores', 'Puestos', 'Mixto'].map(tipo => (
                  <button
                    key={tipo}
                    onClick={() => setFormData({ ...formData, tipoCarga: tipo })}
                    className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.tipoCarga === tipo
                      ? 'border-[#00BE00] bg-[#00BE00] text-white'
                      : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                  >
                    {tipo}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-3">
                Potencia estimada
              </label>
              <div className="flex flex-wrap gap-3">
                {['<500W', '500–1500W', '1.5–5kW', '+5kW'].map(pot => (
                  <button
                    key={pot}
                    onClick={() => setFormData({ ...formData, potencia: pot })}
                    className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.potencia === pot
                      ? 'border-[#00BE00] bg-[#00BE00] text-white'
                      : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                  >
                    {pot}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-3">
                Autonomía deseada
              </label>
              <div className="flex flex-wrap gap-3">
                {['5–10 min', '15–30 min', '45–60 min', '+60 min'].map(aut => (
                  <button
                    key={aut}
                    onClick={() => setFormData({ ...formData, autonomia: aut })}
                    className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.autonomia === aut
                      ? 'border-[#00BE00] bg-[#00BE00] text-white'
                      : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                  >
                    {aut}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-2">
                Cantidad de equipos/sitios
              </label>
              <input
                type="number"
                placeholder="Ej: 10"
                value={formData.cantidad}
                onChange={(e) => setFormData({ ...formData, cantidad: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00BE00] focus:border-transparent outline-none"
              />
            </div>

            <Button
              size="lg"
              onClick={calcular}
              className="bg-[#00BE00] hover:bg-[#00BE00]/90 text-white w-full"
              disabled={!formData.tipoCarga || !formData.potencia || !formData.autonomia}
            >
              Calcular recomendación
            </Button>
          </div>

          {resultado && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-[#00BE00]/5 border border-[#00BE00]/20 rounded-2xl"
            >
              <h4 className="text-[16px] font-semibold text-[#282327] mb-3">
                Recomendación orientativa
              </h4>
              <p className="text-[15px] text-neutral-700 mb-4">
                {resultado}
              </p>
              <Button
                variant="outline"
                className="border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B] hover:text-white"
                onClick={() => scrollToSection('cta-wizard')}
              >
                Convertir en propuesta
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <p className="text-[13px] text-neutral-500 mt-4 italic">
                Estimación inicial. Confirmamos dimensionamiento con relevamiento.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function CTAWizard({ whatsappNumber }: any) {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <>
      <section id="cta-wizard" className="py-32 px-6 lg:px-12 bg-gradient-to-br from-[#00BE00]/5 to-white">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[44px] lg:text-[52px] text-[#282327] mb-6 leading-[1.1]">
              Pedí tu propuesta APC con arquitectura recomendada
            </h2>
            <p className="text-[18px] text-neutral-700 mb-10 leading-[1.7]">
              Completá el paso a paso y te devolvemos una propuesta con dimensionamiento y opciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-10 text-[16px]"
                onClick={() => setShowWizard(true)}
              >
                Iniciar consulta guiada
                <ArrowRight className="ml-2 size-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#00BE00] text-[#00BE00] hover:bg-[#00BE00] hover:text-white px-10 text-[16px]"
                onClick={() => {
                  const msg = encodeURIComponent('Hola, quiero una propuesta APC con Trendit. Mi escenario es: _____. Necesito: _____.');
                  window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                WhatsApp
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
    escenario: '',
    objetivo: '',
    potencia: '',
    autonomia: '',
    fase: '',
    infraestructura: [] as string[],
    sitios: '',
    sla: '',
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    ciudad: '',
    detalle: ''
  });

  const totalSteps = 6;

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleInfra = (value: string) => {
    const current = formData.infraestructura;
    if (current.includes(value)) {
      updateField('infraestructura', current.filter(v => v !== value));
    } else {
      updateField('infraestructura', [...current, value]);
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.escenario !== '';
    if (step === 2) return formData.objetivo !== '';
    if (step === 3) return formData.potencia !== '' && formData.autonomia !== '';
    if (step === 4) return formData.infraestructura.length > 0;
    if (step === 5) return formData.sitios !== '' && formData.sla !== '';
    if (step === 6) return formData.nombre && formData.empresa && formData.email && formData.telefono && formData.ciudad;
    return true;
  };

  const handleSubmit = () => {
    setAlertModal({
      isOpen: true,
      type: 'success',
      title: '¡Listo!',
      message: 'Un especialista Trendit te contactará. Si querés respuesta inmediata, escribinos por WhatsApp.'
    });
  };

  const handleCloseAlert = () => {
    setAlertModal({ ...alertModal, isOpen: false });
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
        <div className="px-8 py-6 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <h3 className="text-[24px] font-semibold text-[#282327]">
              Consulta guiada APC
            </h3>
            <p className="text-[14px] text-neutral-600">
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
            className="h-full bg-[#00BE00] transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <WizardStep key="step1" title="¿Cuál es tu escenario?">
                <div className="grid md:grid-cols-2 gap-4">
                  {['Oficina', 'Networking', 'Sala técnica', 'Micro DC', 'Data Center', 'Multi-sede'].map(esc => (
                    <button
                      key={esc}
                      onClick={() => updateField('escenario', esc)}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${formData.escenario === esc
                        ? 'border-[#00BE00] bg-[#00BE00]/5'
                        : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                    >
                      <span className="text-[16px] font-medium text-[#282327]">{esc}</span>
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 2 && (
              <WizardStep key="step2" title="¿Cuál es tu objetivo principal?">
                <div className="flex flex-wrap gap-3">
                  {['Continuidad', 'Protección', 'Monitoreo', 'Estandarización', 'Mixto'].map(obj => (
                    <button
                      key={obj}
                      onClick={() => updateField('objetivo', obj)}
                      className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.objetivo === obj
                        ? 'border-[#00BE00] bg-[#00BE00] text-white'
                        : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                    >
                      {obj}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 3 && (
              <WizardStep key="step3" title="Carga y autonomía">
                <div className="space-y-6">
                  <div>
                    <label className="block text-[14px] font-medium text-[#282327] mb-3">
                      Rango de potencia
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['<500W', '500–1500W', '1.5–5kW', '+5kW'].map(pot => (
                        <button
                          key={pot}
                          onClick={() => updateField('potencia', pot)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.potencia === pot
                            ? 'border-[#00BE00] bg-[#00BE00] text-white'
                            : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                          {pot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#282327] mb-3">
                      Autonomía deseada
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['5–10 min', '15–30 min', '45–60 min', '+60 min'].map(aut => (
                        <button
                          key={aut}
                          onClick={() => updateField('autonomia', aut)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.autonomia === aut
                            ? 'border-[#00BE00] bg-[#00BE00] text-white'
                            : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                          {aut}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#282327] mb-3">
                      Fase (si aplica)
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Monofásica', 'Trifásica', 'No sé'].map(fase => (
                        <button
                          key={fase}
                          onClick={() => updateField('fase', fase)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.fase === fase
                            ? 'border-[#00BE00] bg-[#00BE00] text-white'
                            : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                          {fase}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </WizardStep>
            )}

            {step === 4 && (
              <WizardStep key="step4" title="Infraestructura necesaria (seleccioná varias)">
                <div className="flex flex-wrap gap-3">
                  {['Rack', 'PDU', 'Baterías', 'Monitoreo remoto', 'Enfriamiento', 'Seguridad física'].map(infra => (
                    <button
                      key={infra}
                      onClick={() => toggleInfra(infra)}
                      className={`px-5 py-3 rounded-xl border-2 transition-all ${formData.infraestructura.includes(infra)
                        ? 'border-[#00BE00] bg-[#00BE00] text-white'
                        : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                    >
                      {infra}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 5 && (
              <WizardStep key="step5" title="Operación">
                <div className="space-y-6">
                  <div>
                    <label className="block text-[14px] font-medium text-[#282327] mb-3">
                      Cantidad de sitios
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['1 sitio', '2–5', '6–20', '20+'].map(sitio => (
                        <button
                          key={sitio}
                          onClick={() => updateField('sitios', sitio)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.sitios === sitio
                            ? 'border-[#00BE00] bg-[#00BE00] text-white'
                            : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                          {sitio}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#282327] mb-3">
                      SLA deseado
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Básico', 'Extendido'].map(sla => (
                        <button
                          key={sla}
                          onClick={() => updateField('sla', sla)}
                          className={`px-6 py-3 rounded-xl border-2 transition-all ${formData.sla === sla
                            ? 'border-[#00BE00] bg-[#00BE00] text-white'
                            : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                        >
                          {sla}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </WizardStep>
            )}

            {step === 6 && (
              <WizardStep key="step6" title="Datos de contacto">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nombre y apellido *"
                      value={formData.nombre}
                      onChange={(e) => updateField('nombre', e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00BE00] focus:border-transparent outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Empresa *"
                      value={formData.empresa}
                      onChange={(e) => updateField('empresa', e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00BE00] focus:border-transparent outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Cargo"
                    value={formData.cargo}
                    onChange={(e) => updateField('cargo', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00BE00] focus:border-transparent outline-none"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00BE00] focus:border-transparent outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono *"
                      value={formData.telefono}
                      onChange={(e) => updateField('telefono', e.target.value)}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00BE00] focus:border-transparent outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Ciudad *"
                    value={formData.ciudad}
                    onChange={(e) => updateField('ciudad', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00BE00] focus:border-transparent outline-none"
                  />

                  <textarea
                    placeholder="Detalle del proyecto"
                    value={formData.detalle}
                    onChange={(e) => updateField('detalle', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#00BE00] focus:border-transparent outline-none resize-none"
                  />
                </div>
              </WizardStep>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-neutral-200 flex items-center justify-between">
          <button
            onClick={() => setStep(s => Math.max(1, s - 1))}
            disabled={step === 1}
            className="px-6 py-3 text-[14px] font-medium text-neutral-700 hover:text-[#282327] disabled:opacity-30 disabled:cursor-not-allowed"
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

      {/* Alert Modal */}
      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={handleCloseAlert}
        type={alertModal.type}
        title={alertModal.title}
        message={alertModal.message}
      />
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
      <h3 className="text-[28px] font-semibold text-[#282327] mb-8">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Cómo se calcula el UPS ideal?',
      a: 'Relevamos la carga total en VA/W, el factor de potencia, la criticidad de los sistemas y la autonomía deseada. Con eso dimensionamos el UPS correcto y las baterías necesarias.'
    },
    {
      q: '¿Qué autonomía conviene?',
      a: 'Depende del tiempo de respaldo necesario: 5-15 min para apagado ordenado, 30-60 min para esperar que vuelva la energía, o más si se combina con generador.'
    },
    {
      q: '¿Puedo monitorear remoto y recibir alertas?',
      a: 'Sí, con SmartConnect (1 sitio) o EcoStruxure IT (multi-sitio). Recibís alertas por email/SMS y podés ver el estado en tiempo real desde web o app.'
    },
    {
      q: '¿Qué necesito para un micro data center?',
      a: 'Rack + UPS + PDU + refrigeración (si aplica) + monitoreo + control de acceso. APC tiene soluciones todo-en-uno escalables.'
    },
    {
      q: '¿Cómo escalar a múltiples sucursales?',
      a: 'Con estandarización de modelos y monitoreo centralizado (EcoStruxure IT). Instalamos, configuramos y damos soporte multi-sitio.'
    },
    {
      q: '¿Trendit instala y da soporte?',
      a: 'Sí. Hacemos relevamiento, ingeniería, instalación, puesta en marcha, documentación y mantenimiento. Servicios end-to-end.'
    },
    {
      q: '¿On-prem o nube para monitoreo?',
      a: 'Depende de tu operación: on-prem si querés control total local, nube si necesitás multi-sitio o no querés servidores adicionales.'
    },
    {
      q: '¿Qué diferencia hay entre escenarios (oficina vs data center)?',
      a: 'La criticidad, la redundancia, la escalabilidad y el nivel de monitoreo. En data centers se requiere alta disponibilidad, redundancia N+1 y DCIM avanzado.'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-12 text-center">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <span className="text-[17px] font-semibold text-[#282327] pr-8">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`size-5 text-neutral-400 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''
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
                    <div className="px-8 pb-6 text-[15px] text-neutral-700 leading-[1.7]">
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

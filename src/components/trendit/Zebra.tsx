import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Smartphone,
  Barcode,
  Printer,
  Radio,
  Camera,
  Monitor,
  Thermometer,
  MapPin,
  Box,
  Settings,
  Home as HomeIcon,
  MessageCircle,
  X,
  CheckCircle2,
  Zap,
  Eye,
  Package,
  TrendingUp,
  ShoppingCart,
  Truck,
  Factory,
  Hospital,
  Building2,
  Users,
  Briefcase,
  Award,
  ClipboardCheck,
  Shield,
  Target,
  Layers
} from 'lucide-react';
import { Button } from '../ui/button';

export function Zebra() {
  const whatsappNumber = '5493516013543';
  const whatsappMessage = encodeURIComponent(
    'Hola Trendit, necesito información sobre soluciones Zebra para digitalizar mi operación. Mi industria: _____. Mi necesidad: _____.'
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
      <QueHaceZebra />
      <ExploraPorIndustria scrollToSection={scrollToSection} />
      <MapaSoluciones />
      <CatalogoCurado scrollToSection={scrollToSection} />
      <ServiciosTrendit />
      <ChecklistCotizar />
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
          <span className="text-[#282327]">Zebra</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ scrollToSection, whatsappNumber, whatsappMessage }: any) {
  const [selectedTab, setSelectedTab] = useState(0);

  const chips = [
    'Captura de datos',
    'Trazabilidad',
    'Inventario',
    'Picking',
    'Etiquetado',
    'RFID',
    'Automatización',
    'Gestión de dispositivos'
  ];

  const tabs = [
    { id: 0, label: 'Computadoras móviles' },
    { id: 1, label: 'Escáneres' },
    { id: 2, label: 'Impresoras' },
    { id: 3, label: 'RFID' },
    { id: 4, label: 'Visión fija & escaneo industrial' },
    { id: 5, label: 'Tablets rugerizadas' },
    { id: 6, label: 'Kioscos interactivos' },
    { id: 7, label: 'Sensores ambientales' },
    { id: 8, label: 'Localización (RTLS)' },
    { id: 9, label: 'Insumos (labels/ribbons)' },
    { id: 10, label: 'Software (Zebra DNA)' }
  ];

  const recommendations = [
    {
      title: 'Si buscás Computadoras móviles, empezá por esto',
      desc: 'Productividad en terreno y depósitos: captura rápida y confiable.',
      applies: 'Depósitos, retail, logística, última milla'
    },
    {
      title: 'Si buscás Escáneres, empezá por esto',
      desc: 'Menos errores, más velocidad en POS, depósitos y planta.',
      applies: 'POS, recepción, picking, control de calidad'
    },
    {
      title: 'Si buscás Impresoras, empezá por esto',
      desc: 'Etiquetas/recibos/RFID en el punto de trabajo.',
      applies: 'Etiquetado, trazabilidad, cadena de frío'
    },
    {
      title: 'Si buscás RFID, empezá por esto',
      desc: 'Visibilidad y trazabilidad sin fricción, con menos errores.',
      applies: 'Inventario, activos, retail, logística'
    },
    {
      title: 'Si buscás Visión fija, empezá por esto',
      desc: 'Track & trace automático + automatización industrial.',
      applies: 'Manufactura, logística, clasificación'
    },
    {
      title: 'Si buscás Tablets rugerizadas, empezá por esto',
      desc: 'Dispositivos robustos para inspección, mantenimiento y campo.',
      applies: 'Field operations, mantenimiento, inspecciones'
    },
    {
      title: 'Si buscás Kioscos, empezá por esto',
      desc: 'Autoservicio y señalización con control para retail y servicios.',
      applies: 'Retail, hospitality, sector público'
    },
    {
      title: 'Si buscás Sensores ambientales, empezá por esto',
      desc: 'Monitoreo de temperatura y condiciones en cadena de frío.',
      applies: 'Alimentos, farmacia, salud, logística refrigerada'
    },
    {
      title: 'Si buscás Localización, empezá por esto',
      desc: 'Seguimiento en tiempo real de activos y equipos.',
      applies: 'Hospitales, manufactura, depósitos, campus'
    },
    {
      title: 'Si buscás Insumos, empezá por esto',
      desc: 'Consumibles alineados a tu industria y volumen.',
      applies: 'Continuidad de impresión y calidad constante'
    },
    {
      title: 'Si buscás Software, empezá por esto',
      desc: 'Gestión, despliegue y performance de toda la flota.',
      applies: 'IT, operaciones, multi-sitio'
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
              Zebra en Trendit: digitalizá y automatizá tu operación de punta a punta
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-[1.6] max-w-2xl">
              Equipamos equipos de primera línea con captura de datos y trazabilidad en tiempo real: computadoras móviles, escáneres, impresoras, RFID, visión fija, kioscos, sensores, localización y software Zebra. En Trendit diseñamos, integramos y damos soporte end-to-end.
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
                Armar mi solución Zebra
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
              onClick={() => scrollToSection('explorar-industria')}
              className="text-sm md:text-base text-white/70 hover:text-white underline underline-offset-4 mb-8 md:mb-10 transition-colors"
            >
              Explorar por industria →
            </button>

            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                Selector de tecnología
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
                className="bg-white/[0.03] backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-8"
              >
                <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                  Recomendación rápida
                </h4>
                <p className="text-[#E94E1B] font-medium mb-4 text-sm md:text-base">
                  {currentRec.title}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-white/60 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-white/90 mb-1"><strong>Qué resuelve:</strong></p>
                      <p className="text-sm text-white/70">{currentRec.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-white/60 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-white/90 mb-1"><strong>Dónde aplica:</strong></p>
                      <p className="text-sm text-white/70">{currentRec.applies}</p>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-[#E94E1B] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E94E1B] focus-visible:ring-offset-0"
                  onClick={() => scrollToSection('catalogo-curado')}
                >
                  Ver soluciones
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function QueHaceZebra() {
  const items = [
    {
      icon: <Eye className="size-10" />,
      title: 'Capturar',
      description: 'Datos confiables en el punto de trabajo: códigos, RFID, visión y sensores.'
    },
    {
      icon: <Target className="size-10" />,
      title: 'Identificar',
      description: 'Etiquetas, tags y marcación para trazabilidad total de ítems y activos.'
    },
    {
      icon: <TrendingUp className="size-10" />,
      title: 'Optimizar',
      description: 'Menos errores, más velocidad: productividad en primera línea.'
    },
    {
      icon: <Settings className="size-10" />,
      title: 'Gestionar',
      description: 'Software para desplegar, administrar y monitorear dispositivos y flotas.'
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
            La base de operaciones inteligentes
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

function ExploraPorIndustria({ scrollToSection }: any) {
  const whatsappNumber = '5493516013543';
  
  const createWhatsAppMessage = (ind: any) => {
    const tecnologias = ind.techs.join(', ');
    const message = `Hola Trendit, quiero consultar por una solución Zebra para ${ind.title}.
Dolor típico: ${ind.dolor}.
Qué digitalizamos: ${ind.digitalizamos}.
Tecnologías: ${tecnologias}.
¿Me recomiendan arquitectura y opciones?`;
    return encodeURIComponent(message);
  };

  const industrias = [
    {
      icon: <ShoppingCart className="size-8" />,
      title: 'Retail & Resellers',
      dolor: 'Inventario inexacto, experiencia de compra lenta',
      digitalizamos: 'POS, inventario móvil, etiquetado, autoservicio',
      techs: ['Mobile', 'Scanners', 'Printers', 'RFID', 'Kioscos']
    },
    {
      icon: <Package className="size-8" />,
      title: 'Warehousing & Distribution',
      dolor: 'Errores de picking, baja visibilidad de stock',
      digitalizamos: 'Recepción, picking, despacho, inventario cíclico',
      techs: ['Mobile', 'Scanners', 'Printers', 'RFID', 'Visión fija']
    },
    {
      icon: <Truck className="size-8" />,
      title: 'Transporte & Logística',
      dolor: 'Falta de tracking, documentación manual',
      digitalizamos: 'Última milla, cross-docking, trazabilidad',
      techs: ['Mobile', 'Printers', 'RFID', 'Localización']
    },
    {
      icon: <Factory className="size-8" />,
      title: 'Manufactura',
      dolor: 'Trazabilidad incompleta, procesos manuales',
      digitalizamos: 'WIP, trazabilidad de lotes, control de calidad',
      techs: ['Mobile', 'Visión fija', 'Printers', 'RFID']
    },
    {
      icon: <Hospital className="size-8" />,
      title: 'Salud',
      dolor: 'Identificación de pacientes, trazabilidad de activos',
      digitalizamos: 'Admisión, medicación, activos, cadena de frío',
      techs: ['Mobile', 'Printers', 'RFID', 'Sensores', 'Localización']
    },
    {
      icon: <Building2 className="size-8" />,
      title: 'Sector público / Gobierno',
      dolor: 'Procesos lentos, falta de digitalización',
      digitalizamos: 'Identificación, trámites, activos, inventario',
      techs: ['Mobile', 'Printers', 'Kioscos', 'RFID']
    },
    {
      icon: <Users className="size-8" />,
      title: 'Hospitality / Servicios',
      dolor: 'Check-in lento, experiencia fragmentada',
      digitalizamos: 'Autoservicio, ordenes, inventario, señalización',
      techs: ['Kioscos', 'Mobile', 'Printers']
    },
    {
      icon: <Briefcase className="size-8" />,
      title: 'Field operations',
      dolor: 'Reporte manual, falta de datos en tiempo real',
      digitalizamos: 'Inspección, mantenimiento, lectura de medidores',
      techs: ['Mobile', 'Tablets', 'Printers']
    }
  ];

  return (
    <section id="explorar-industria" className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Soluciones Zebra por industria
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industrias.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-14 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] mb-4">
                {ind.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#282327] mb-4">
                {ind.title}
              </h3>
              
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                    Dolor típico
                  </p>
                  <p className="text-sm text-neutral-700">{ind.dolor}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">
                    Qué digitalizamos
                  </p>
                  <p className="text-sm text-neutral-700">{ind.digitalizamos}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                  Tecnologías
                </p>
                <div className="flex flex-wrap gap-2">
                  {ind.techs.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                size="sm"
                variant="outline"
                className="w-full mt-4 border-2 border-neutral-300 hover:border-[#E94E1B] hover:text-[#E94E1B] transition-colors"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${createWhatsAppMessage(ind)}`, '_blank')}
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

function MapaSoluciones() {
  const etapas = [
    {
      title: 'Captura',
      items: ['Computadoras móviles', 'Escáneres', 'RFID', 'Visión fija', 'Sensores']
    },
    {
      title: 'Trazabilidad',
      items: ['Impresión de etiquetas/recibos/RFID', 'Localización (RTLS)', 'Eventos']
    },
    {
      title: 'Acción',
      items: ['Automatización de flujos', 'Dashboards', 'Integración con ERP/WMS/OMS/CRM']
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
            De la captura al control: un ecosistema integrado
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {etapas.map((etapa, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-6">
                <div className="size-12 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] text-xl font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#282327] mb-4">
                  {etapa.title}
                </h3>
                <ul className="space-y-2">
                  {etapa.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {idx < etapas.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#E94E1B]/20" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="bg-[#E94E1B]/5 border border-[#E94E1B]/20 rounded-2xl p-6 md:p-8 text-center">
          <Layers className="size-10 text-[#E94E1B] mx-auto mb-4" />
          <p className="text-sm md:text-base text-neutral-700 max-w-3xl mx-auto">
            <strong className="text-[#282327]">Trendit integra hardware + software + conectividad</strong> para que el dato se convierta en decisiones y operación sin fricción.
          </p>
        </div>
      </div>
    </section>
  );
}

function CatalogoCurado({ scrollToSection }: any) {
  const [activeSection, setActiveSection] = useState('mobile');

  const sections = [
    { id: 'mobile', label: 'Mobile', icon: <Smartphone className="size-4" /> },
    { id: 'scanners', label: 'Scanners', icon: <Barcode className="size-4" /> },
    { id: 'printers', label: 'Printers', icon: <Printer className="size-4" /> },
    { id: 'rfid', label: 'RFID', icon: <Radio className="size-4" /> },
    { id: 'vision', label: 'Visión fija', icon: <Camera className="size-4" /> },
    { id: 'kioscos', label: 'Kioscos', icon: <Monitor className="size-4" /> },
    { id: 'sensores', label: 'Sensores', icon: <Thermometer className="size-4" /> },
    { id: 'localizacion', label: 'Localización', icon: <MapPin className="size-4" /> },
    { id: 'insumos', label: 'Insumos', icon: <Box className="size-4" /> },
    { id: 'software', label: 'Software', icon: <Settings className="size-4" /> }
  ];

  return (
    <section id="catalogo-curado" className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Elegí la tecnología (y la adaptamos a tu operación)
          </h2>
        </motion.div>

        {/* Subnav sticky */}
        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-y border-neutral-200 -mx-4 sm:-mx-6 lg:-mx-12 px-4 sm:px-6 lg:px-12 py-4 mb-12">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeSection === section.id
                    ? 'bg-[#E94E1B] text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {section.icon}
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
            {activeSection === 'mobile' && <MobileSection scrollToSection={scrollToSection} />}
            {activeSection === 'scanners' && <ScannersSection scrollToSection={scrollToSection} />}
            {activeSection === 'printers' && <PrintersSection scrollToSection={scrollToSection} />}
            {activeSection === 'rfid' && <RFIDSection scrollToSection={scrollToSection} />}
            {activeSection === 'vision' && <VisionSection scrollToSection={scrollToSection} />}
            {activeSection === 'kioscos' && <KioscosSection scrollToSection={scrollToSection} />}
            {activeSection === 'sensores' && <SensoresSection scrollToSection={scrollToSection} />}
            {activeSection === 'localizacion' && <LocalizacionSection scrollToSection={scrollToSection} />}
            {activeSection === 'insumos' && <InsumosSection scrollToSection={scrollToSection} />}
            {activeSection === 'software' && <SoftwareSection scrollToSection={scrollToSection} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function MobileSection({ scrollToSection }: any) {
  const products = [
    { title: 'Handheld', subtitle: 'Depósito / retail / última milla' },
    { title: 'Wearables', subtitle: 'Manos libres para picking' },
    { title: 'Vehicle-mounted', subtitle: 'Montacargas / logística' },
    { title: 'Tablets rugerizadas', subtitle: 'Inspección, mantenimiento, campo' }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Computadoras móviles: productividad en primera línea
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Dispositivos pensados para turnos completos y entornos reales: depósitos, tiendas, campo o planta.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((prod, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
            <div className="size-12 rounded-xl bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] mb-4">
              <Smartphone className="size-6" />
            </div>
            <h4 className="text-lg font-semibold text-[#282327] mb-2">{prod.title}</h4>
            <p className="text-sm text-neutral-600">{prod.subtitle}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Recomendar modelo según entorno
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function ScannersSection({ scrollToSection }: any) {
  const products = [
    'POS & retail',
    'Mano uso general',
    'Ultra-rugerizados (industrial)',
    'Fijos / manos libres'
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Escáneres: captura rápida, menos errores
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Desde POS hasta depósitos y ambientes demandantes: 1D/2D, cableados o inalámbricos.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {products.map((prod, idx) => (
          <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-4 text-center hover:border-[#E94E1B]/30 transition-all">
            <Barcode className="size-8 text-[#E94E1B] mx-auto mb-2" />
            <p className="text-sm font-medium text-neutral-700">{prod}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Definir tipo de lectura y distancia
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function PrintersSection({ scrollToSection }: any) {
  const products = [
    { title: 'Escritorio', subtitle: 'Etiquetado diario' },
    { title: 'Móviles', subtitle: 'En el acto' },
    { title: 'Industriales', subtitle: '24/7, entornos exigentes' },
    { title: 'Motores de impresión', subtitle: 'Integración en líneas' }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Impresoras: etiquetas, recibos y RFID donde ocurre el trabajo
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Impresión de escritorio, móvil e industrial para identificación y trazabilidad.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((prod, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-6 transition-all duration-300">
            <Printer className="size-8 text-[#E94E1B] mb-3" />
            <h4 className="text-base font-semibold text-[#282327] mb-1">{prod.title}</h4>
            <p className="text-sm text-neutral-600">{prod.subtitle}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Calcular volumen y consumibles
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function RFIDSection({ scrollToSection }: any) {
  const products = [
    'Lectores RFID fijos',
    'Lectores RFID de mano',
    'Impresoras RFID (print & encode)',
    'Antenas y accesorios'
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        RFID: visibilidad y trazabilidad con menos fricción
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Automatizá la captura, reducí errores y obtené información oportuna sobre activos, ítems y procesos.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {products.map((prod, idx) => (
          <div key={idx} className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl p-5 hover:border-[#E94E1B]/30 transition-all">
            <Radio className="size-7 text-[#E94E1B] mb-2" />
            <p className="text-sm font-medium text-neutral-700">{prod}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Evaluar caso RFID (inventario, activos, prendas, pallets)
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function VisionSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Visión fija: track & trace automático + automatización
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Escaneo fijo industrial y visión para seguimiento y trazabilidad en logística y manufactura.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {['Escáneres fijos industriales', 'Sensores y cámaras inteligentes', 'Soluciones de visión (inspección / verificación)'].map((item, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 transition-all">
            <Camera className="size-8 text-[#E94E1B] mb-3" />
            <p className="text-sm font-medium text-neutral-700">{item}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Relevar línea / punto de lectura
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function KioscosSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Kioscos: autoservicio y señalización con control
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Puntos de autoservicio para consultar stock, precios, turnos, check-in o información, con despliegue flexible.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {['Kioscos de pasillo (in-aisle)', 'Kioscos full-feature (autoservicio)', 'Microkioscos / mostrador'].map((item, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 transition-all">
            <Monitor className="size-8 text-[#E94E1B] mb-3" />
            <p className="text-sm font-medium text-neutral-700">{item}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Definir flujo de usuario (UX)
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function SensoresSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Sensores ambientales: monitoreo de condiciones críticas
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Monitoreo de temperatura y condiciones para productos sensibles: visibilidad, alertas y trazabilidad.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {['Loggers / sensores', 'Puentes / conectividad', 'Alertas y reportes'].map((item, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 transition-all">
            <Thermometer className="size-8 text-[#E94E1B] mb-3" />
            <p className="text-sm font-medium text-neutral-700">{item}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Relevar cadena de frío
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function LocalizacionSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Localización: seguimiento en tiempo real (RTLS)
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Tracking en tiempo real para optimizar activos críticos, flujos y eficiencia operativa.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {['Asset tracking', 'Tracking de personal/equipos', 'Optimización de procesos'].map((item, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 transition-all">
            <MapPin className="size-8 text-[#E94E1B] mb-3" />
            <p className="text-sm font-medium text-neutral-700">{item}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Definir cobertura y precisión
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function InsumosSection({ scrollToSection }: any) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Insumos: etiquetas, ribbons y consumibles
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Consumibles alineados a tu industria y volumen: continuidad de impresión y calidad constante.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {['Etiquetas', 'Ribbons', 'Tags'].map((item, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-[#E94E1B]/30 transition-all text-center">
            <Box className="size-10 text-[#E94E1B] mx-auto mb-3" />
            <p className="text-base font-semibold text-neutral-700">{item}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Recomendar consumibles
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function SoftwareSection({ scrollToSection }: any) {
  const software = [
    {
      title: 'Zebra DNA',
      subtitle: 'Para dispositivos',
      desc: 'Gestión centralizada de computadoras móviles y escáneres'
    },
    {
      title: 'Software para impresoras',
      subtitle: 'Integrar, administrar y monitorear',
      desc: 'Control de flota de impresión y visibilidad de consumibles'
    },
    {
      title: 'Suite de software Zebra',
      subtitle: 'Datos, procesos y workforce',
      desc: 'Herramientas para optimizar procesos y productividad de equipos'
    }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold text-[#282327] mb-4">
        Software Zebra: gestión, despliegue y performance
      </h3>
      <p className="text-base md:text-lg text-neutral-700 mb-8">
        Suite para administrar dispositivos, mejorar experiencia y operar durante todo el ciclo de vida del equipo.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {software.map((soft, idx) => (
          <div key={idx} className="bg-white border-2 border-neutral-200 hover:border-[#E94E1B]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
            <Settings className="size-8 text-[#E94E1B] mb-4" />
            <h4 className="text-lg font-semibold text-[#282327] mb-2">{soft.title}</h4>
            <p className="text-sm text-[#E94E1B] font-medium mb-3">{soft.subtitle}</p>
            <p className="text-sm text-neutral-600">{soft.desc}</p>
          </div>
        ))}
      </div>

      <Button 
        className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
        onClick={() => scrollToSection('cta-wizard')}
      >
        Quiero gestión centralizada
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </div>
  );
}

function ServiciosTrendit() {
  const servicios = [
    { num: '01', title: 'Descubrimiento (industria, proceso, puntos de captura)' },
    { num: '02', title: 'Arquitectura (hardware + software + conectividad)' },
    { num: '03', title: 'Piloto (prueba controlada)' },
    { num: '04', title: 'Despliegue (multi-sitio si aplica)' },
    { num: '05', title: 'Integración (ERP/WMS/OMS, APIs, etiquetado)' },
    { num: '06', title: 'Operación (soporte, mantenimiento, continuidad)' }
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
            Trendit integra Zebra de punta a punta
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        <div className="bg-[#E94E1B]/10 border border-[#E94E1B]/20 rounded-2xl p-8 text-center">
          <Award className="size-12 text-[#E94E1B] mx-auto mb-4" />
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            <strong>Diseño + implementación + soporte:</strong> un solo partner para todo el ecosistema.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChecklistCotizar() {
  const items = [
    { icon: <Target className="size-6" />, text: 'Industria y proceso (recepción, picking, despacho, POS, trazabilidad)' },
    { icon: <Users className="size-6" />, text: 'Cantidad de usuarios / turnos' },
    { icon: <Shield className="size-6" />, text: 'Entorno (polvo, frío, exterior, guantes, caídas)' },
    { icon: <Barcode className="size-6" />, text: 'Distancia de lectura / tipo de códigos' },
    { icon: <Printer className="size-6" />, text: 'Volumen de impresión (etiquetas/día)' },
    { icon: <Radio className="size-6" />, text: 'RFID: tipo de ítem (pallet, prenda, activo) y puntos de lectura' },
    { icon: <Settings className="size-6" />, text: 'Integración (sistema actual y necesidades)' }
  ];

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#282327] mb-4 leading-[1.15]">
            Qué necesitamos para recomendar el equipo correcto
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-4 p-5 bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-xl hover:border-[#E94E1B]/30 transition-all"
            >
              <div className="size-12 rounded-lg bg-[#E94E1B]/5 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
                {item.icon}
              </div>
              <p className="text-sm md:text-base text-neutral-700 leading-relaxed pt-1">
                {item.text}
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
      q: '¿Cuándo conviene RFID vs código de barras?',
      a: 'RFID permite lectura masiva sin línea de vista (ideal para inventario rápido, trazabilidad de activos o retail). Código de barras es más económico para lectura unitaria precisa. Trendit te ayuda a evaluar ROI según tu caso.'
    },
    {
      q: '¿Qué impresora necesito: escritorio, móvil o industrial?',
      a: 'Escritorio para etiquetado diario bajo techo (<100 etiquetas/día). Móvil para imprimir en el punto de trabajo. Industrial para 24/7 o alta exigencia (temperatura, polvo, volumen). Evaluamos volumen, entorno y criticidad.'
    },
    {
      q: '¿Qué datos definen el handheld ideal?',
      a: 'Entorno (interior/exterior, caídas, polvo, frío), tipo de lectura (1D/2D, distancia), duración del turno, integración con WMS/ERP y cantidad de usuarios. Trendit dimensiona batería, resistencia y conectividad.'
    },
    {
      q: '¿Cómo se integra con WMS/ERP?',
      a: 'Via APIs estándar, middlewares o conectores nativos (SAP, Oracle, Microsoft, etc.). Trendit diseña la arquitectura, desarrolla integraciones custom si es necesario y gestiona pruebas end-to-end.'
    },
    {
      q: '¿Qué consumibles necesito para etiquetas durables?',
      a: 'Depende del entorno: papel térmico directo (interior), sintéticos (humedad/químicos), o RFID encodeable. Ribbon cera/resina según exposición. Trendit recomienda según industria y condiciones.'
    },
    {
      q: '¿Trendit hace piloto e implementación multi-sitio?',
      a: 'Sí. Hacemos pruebas controladas, definimos rollout por etapas, gestionamos logística de dispositivos, capacitación y soporte en cada sitio. Escalado gradual con aprendizaje continuo.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
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
              Armemos tu solución Zebra
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 mb-10 leading-relaxed">
              Completá el asistente y te devolvemos recomendación + propuesta. Si querés respuesta inmediata, WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-10 text-base md:text-lg"
                onClick={() => setShowWizard(true)}
              >
                Iniciar asistente Zebra
                <ArrowRight className="ml-2 size-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B] hover:text-white px-10 text-base md:text-lg transition-all"
                onClick={() => {
                  const msg = encodeURIComponent('Hola Trendit, necesito armar mi solución Zebra. Mi industria: _____. Mi necesidad: _____.');
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
    industria: '',
    objetivo: [] as string[],
    tecnologia: '',
    entorno: [] as string[],
    usuarios: '',
    sitios: '',
    etiquetasDia: '',
    integracion: [] as string[],
    empresa: '',
    nombre: '',
    cargo: '',
    email: '',
    telefono: '',
    ciudad: '',
    mensaje: ''
  });

  const totalSteps = 7;

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArray = (field: string, value: string) => {
    const current = formData[field as keyof typeof formData] as string[];
    if (current.includes(value)) {
      updateField(field, current.filter(v => v !== value));
    } else {
      updateField(field, [...current, value]);
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.industria !== '';
    if (step === 2) return formData.objetivo.length > 0;
    if (step === 3) return formData.tecnologia !== '';
    if (step === 4) return formData.entorno.length > 0;
    if (step === 5) return formData.usuarios !== '';
    if (step === 6) return formData.integracion.length > 0;
    if (step === 7) return formData.empresa && formData.nombre && formData.email && formData.telefono;
    return true;
  };

  const handleSubmit = () => {
    alert('¡Consulta enviada! Un especialista Trendit te contactará en breve con tu solución Zebra.');
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
              Asistente Zebra
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
              <WizardStep key="step1" title="Industria">
                <div className="grid md:grid-cols-2 gap-4">
                  {['Retail', 'Logística', 'Manufactura', 'Salud', 'Gobierno', 'Otro'].map(ind => (
                    <button
                      key={ind}
                      onClick={() => updateField('industria', ind)}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        formData.industria === ind
                          ? 'border-[#E94E1B] bg-[#E94E1B]/5'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-base md:text-lg font-medium text-[#282327]">{ind}</span>
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 2 && (
              <WizardStep key="step2" title="Objetivo (seleccioná varios)">
                <div className="flex flex-wrap gap-3">
                  {['Inventario', 'Picking', 'Etiquetado', 'Trazabilidad', 'Control de temperatura', 'Automatización', 'Autoservicio'].map(obj => (
                    <button
                      key={obj}
                      onClick={() => toggleArray('objetivo', obj)}
                      className={`px-5 py-3 rounded-xl border-2 transition-all ${
                        formData.objetivo.includes(obj)
                          ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
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
              <WizardStep key="step3" title="Tecnología">
                <div className="grid md:grid-cols-2 gap-4">
                  {['Mobile', 'Scanners', 'Printers', 'RFID', 'Visión fija', 'Localización', 'Sensores', 'Mixto'].map(tec => (
                    <button
                      key={tec}
                      onClick={() => updateField('tecnologia', tec)}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        formData.tecnologia === tec
                          ? 'border-[#E94E1B] bg-[#E94E1B]/5'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <span className="text-base font-medium text-[#282327]">{tec}</span>
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 4 && (
              <WizardStep key="step4" title="Entorno (seleccioná varios)">
                <div className="flex flex-wrap gap-3">
                  {['Interior', 'Exterior', 'Frío', 'Polvo', 'Alta exigencia', 'Manos libres'].map(ent => (
                    <button
                      key={ent}
                      onClick={() => toggleArray('entorno', ent)}
                      className={`px-5 py-3 rounded-xl border-2 transition-all ${
                        formData.entorno.includes(ent)
                          ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {ent}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 5 && (
              <WizardStep key="step5" title="Volumen">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      # Usuarios
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
                      # Sitios / Sucursales
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 5 sucursales"
                      value={formData.sitios}
                      onChange={(e) => updateField('sitios', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#282327] mb-3">
                      Etiquetas / día (si aplica)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 500 etiquetas/día"
                      value={formData.etiquetasDia}
                      onChange={(e) => updateField('etiquetasDia', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </WizardStep>
            )}

            {step === 6 && (
              <WizardStep key="step6" title="Integración (seleccioná varios)">
                <div className="flex flex-wrap gap-3">
                  {['ERP', 'WMS', 'OMS', 'POS', 'API / Custom', 'No sé'].map(int => (
                    <button
                      key={int}
                      onClick={() => toggleArray('integracion', int)}
                      className={`px-5 py-3 rounded-xl border-2 transition-all ${
                        formData.integracion.includes(int)
                          ? 'border-[#E94E1B] bg-[#E94E1B] text-white'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {int}
                    </button>
                  ))}
                </div>
              </WizardStep>
            )}

            {step === 7 && (
              <WizardStep key="step7" title="Contacto">
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
                    placeholder="Contanos tu caso y plazos"
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

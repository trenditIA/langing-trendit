import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Laptop,
  Monitor,
  Server,
  Database,
  Shield,
  Leaf,
  Building2,
  GraduationCap,
  Hospital,
  Factory,
  ShoppingCart,
  Landmark,
  CheckCircle2,
  TrendingUp,
  Users,
  Cpu,
  HardDrive,
  Boxes,
  MessageCircle,
  Home,
  Award,
  Clock,
  Zap
} from 'lucide-react';
import { Button } from '../ui/button';
import { AlertModal } from './AlertModal';

export function Lenovo() {
  const whatsappNumber = '5493516714007';
  const whatsappMessageAsesoramiento = encodeURIComponent(
    'Hola, quiero asesoramiento sobre soluciones Lenovo para mi empresa. Me interesa: (Microinformática / Data Center / Soluciones). Mi nombre es ___, empresa ___, ciudad ___.'
  );
  const whatsappMessagePropuesta = encodeURIComponent(
    'Hola, quiero solicitar una propuesta Lenovo. Área: ___. Empresa: ___. Ciudad: ___. Email: ___. Teléfono: ___.'
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
      <Hero scrollToSection={scrollToSection} whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessageAsesoramiento} />
      <PorQueLenovo />
      <Microinformatica />
      <ServiciosGarantias />
      <Infraestructura />
      <SolucionesIndustria />
      <Sustentabilidad />
      <CTAFinal whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessagePropuesta} />
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
          <span className="text-[#282327]">Lenovo</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ scrollToSection, whatsappNumber, whatsappMessage }: any) {
  const navPills = [
    { label: 'Microinformática', id: 'microinformatica' },
    { label: 'Infraestructura & Data Center', id: 'datacenter' },
    { label: 'Soluciones', id: 'soluciones' },
    { label: 'Servicios & Garantías', id: 'servicios-garantias' },
    { label: 'Sustentabilidad', id: 'sustentabilidad' },
    { label: 'Solicitar cotización', id: 'solicitar-cotizacion' },
  ];

  const confianzaPills = [
    'Implementación e integración',
    'Estándares corporativos',
    'Soporte y mantenimiento',
    'Proyectos para organizaciones'
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
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Columna izquierda */}
          <div>
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-white mb-4 md:mb-6">
              Lenovo para empresas,<br />integrado por Trendit
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-4 md:mb-5 leading-[1.6] max-w-2xl">
              Equipamiento corporativo, infraestructura y servicios para que tu operación sea más estable, segura y eficiente.
            </p>

            <p className="text-sm sm:text-base text-white/60 mb-8 md:mb-10 leading-[1.7] max-w-2xl">
              Te ayudamos a elegir la línea correcta, configurar, cotizar, implementar y sostener la tecnología en el tiempo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
              <Button
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-6 md:px-8 group shadow-lg shadow-[#E94E1B]/20 w-full sm:w-auto"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="mr-2 size-5" />
                Hablar por WhatsApp
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm w-full sm:w-auto transition-all duration-300"
                onClick={() => scrollToSection('solicitar-cotizacion')}
              >
                Solicitar cotización Lenovo
              </Button>
            </div>

            {/* Chips de confianza */}
            <div className="flex flex-wrap gap-3">
              {confianzaPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Columna derecha - Navegación rápida */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6">
            <h3 className="text-[17px] font-semibold text-white mb-4">
              Navegación rápida
            </h3>

            <div className="space-y-2">
              {navPills.map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(pill.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-[14px] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-between group"
                >
                  {pill.label}
                  <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQueLenovo() {
  const razones = [
    {
      icon: <Boxes className="size-8" />,
      title: 'Portafolio completo',
      description: 'Desde puestos de trabajo hasta infraestructura.'
    },
    {
      icon: <Award className="size-8" />,
      title: 'Líneas empresariales',
      description: 'Pensadas para uso intensivo y administración.'
    },
    {
      icon: <Shield className="size-8" />,
      title: 'Servicios y garantías escalables',
      description: 'Según criticidad y operación.'
    },
    {
      icon: <Leaf className="size-8" />,
      title: 'Sustentabilidad medible',
      description: 'Opciones para gestionar huella de carbono.'
    }
  ];

  return (
    <section id="por-que-lenovo" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-6 leading-[1.2]">
            Elegir Lenovo es elegir continuidad
          </h2>
          <p className="text-[18px] text-neutral-700 max-w-[800px] mx-auto leading-[1.7]">
            Cuando la tecnología es parte de tu operación, lo que importa no es solo comprar equipos: importa la vida útil, el soporte, la gestión, la seguridad y el costo total a lo largo del tiempo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {razones.map((razon, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300"
            >
              <div className="size-14 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5">
                {razon.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-[#282327] mb-3 leading-tight">
                {razon.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.6]">
                {razon.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Microinformatica() {
  const [activeSegment, setActiveSegment] = React.useState<'oficina' | 'corporativo' | 'creadores'>('oficina');

  const segments = {
    oficina: {
      id: 'oficina',
      label: 'Oficina / End-User',
      icon: Users,
      paraquien: 'Usuarios administrativos, ventas, operación estándar, educación y uso general corporativo.',
      lineas: [
        { name: 'ThinkBook', desc: 'Equilibrio costo/beneficio para empresas (SMB)' },
        { name: 'ThinkPad E / L', desc: 'Empresa estándar con enfoque en durabilidad' },
        { name: 'IdeaPad', desc: 'Uso general cuando no se requiere administración IT avanzada' },
        { name: 'All-in-One IdeaCentre', desc: 'Puestos fijos con estética limpia' }
      ],
      beneficios: [
        'Equipos confiables y fáciles de estandarizar',
        'Buena movilidad y autonomía para trabajo diario',
        'Renovación simple por lotes y perfiles'
      ]
    },
    corporativo: {
      id: 'corporativo',
      label: 'Corporativo administrado (IT)',
      icon: Building2,
      paraquien: 'Áreas IT, operaciones críticas, usuarios con políticas de seguridad y despliegue masivo.',
      lineas: [
        { name: 'ThinkPad T Series', desc: 'Estándar corporativo (balance movilidad/robustez)' },
        { name: 'ThinkPad X Series / X1', desc: 'Premium ejecutivo + portabilidad' },
        { name: 'ThinkCentre M Series', desc: 'Desktops corporativos para despliegues masivos' },
        { name: 'ThinkVision (monitores)', desc: 'Estandarización del puesto de trabajo' }
      ],
      beneficios: [
        'Estandarización, seguridad y soporte corporativo',
        'Gestión y mantenimiento simplificados para IT',
        'Flotas multi-sede y perfiles por rol'
      ]
    },
    creadores: {
      id: 'creadores',
      label: 'Creadores / Alto rendimiento',
      icon: Laptop,
      paraquien: 'Diseño, arquitectura, ingeniería, marketing, edición, desarrollo, render y simulación.',
      lineas: [
        { name: 'ThinkStation P Series', desc: 'Workstations profesionales (misión crítica)' },
        { name: 'ThinkPad P Series', desc: 'Workstation móvil (performance + movilidad)' },
        { name: 'Legion', desc: 'Alto rendimiento para creación y workloads pesados' },
        { name: 'Monitores ThinkVision', desc: 'Alta resolución y precisión visual para creativos' }
      ],
      beneficios: [
        'Mayor performance CPU/GPU para cargas profesionales',
        'Estabilidad para software exigente (CAD / render / data)',
        'Experiencia premium para equipos creativos'
      ]
    }
  };

  const comparacion = [
    { linea: 'ThinkBook', movilidad: 2, robustez: 2, seguridad: 2, gestion: 2, rendimiento: 2, graficos: 1 },
    { linea: 'ThinkPad E/L', movilidad: 2, robustez: 3, seguridad: 2, gestion: 3, rendimiento: 2, graficos: 1 },
    { linea: 'ThinkPad T', movilidad: 3, robustez: 3, seguridad: 3, gestion: 3, rendimiento: 2, graficos: 2 },
    { linea: 'ThinkPad X/X1', movilidad: 3, robustez: 3, seguridad: 3, gestion: 3, rendimiento: 2, graficos: 2 },
    { linea: 'ThinkPad P / ThinkStation P', movilidad: 2, robustez: 3, seguridad: 3, gestion: 3, rendimiento: 3, graficos: 3 },
    { linea: 'Legion', movilidad: 2, robustez: 2, seguridad: 2, gestion: 1, rendimiento: 3, graficos: 3 }
  ];

  const currentSegment = segments[activeSegment];
  const IconComponent = currentSegment.icon;

  const handleWhatsApp = () => {
    const segmentLabels = {
      oficina: 'Oficina/End-User',
      corporativo: 'Corporativo',
      creadores: 'Creadores'
    };
    const message = `Hola Trendit 👋 Quiero asesoramiento Lenovo (Microinformática). Segmento: ${segmentLabels[activeSegment]}. Cantidad estimada: __. Empresa: __. ¿Agendamos una reunión?`;
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
            Microinformática por segmento (Lenovo)
          </h2>
          <p
            className="text-neutral-600 text-[17px] md:text-[18px] max-w-3xl mx-auto"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          >
            Te ayudamos a elegir la línea Lenovo correcta según rol, nivel de gestión IT y performance.
          </p>
        </div>

        {/* Tabs/Selector de segmento */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {Object.values(segments).map((segment) => {
            const SegmentIcon = segment.icon;
            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(segment.id as any)}
                className={`flex-shrink-0 px-6 py-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 min-w-[200px] sm:min-w-[240px] ${activeSegment === segment.id
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
                Líneas Lenovo recomendadas
              </div>
              <div className="space-y-3">
                {currentSegment.lineas.map((linea, idx) => (
                  <button
                    key={idx}
                    onClick={handleWhatsApp}
                    className="w-full text-left bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-4 border border-neutral-200 hover:border-[#E94E1B]/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div
                      className="text-neutral-900 mb-1 group-hover:text-[#E94E1B] transition-colors"
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
                  </button>
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
                      Robustez
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
                        <IndicadorNivelLenovo nivel={item.movilidad} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivelLenovo nivel={item.robustez} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivelLenovo nivel={item.seguridad} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivelLenovo nivel={item.gestion} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivelLenovo nivel={item.rendimiento} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <IndicadorNivelLenovo nivel={item.graficos} />
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
                    <IndicadorNivelLenovo nivel={item.movilidad} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Robustez</span>
                    <IndicadorNivelLenovo nivel={item.robustez} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Seguridad</span>
                    <IndicadorNivelLenovo nivel={item.seguridad} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Gestión IT</span>
                    <IndicadorNivelLenovo nivel={item.gestion} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Rendimiento</span>
                    <IndicadorNivelLenovo nivel={item.rendimiento} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}>Gráficos</span>
                    <IndicadorNivelLenovo nivel={item.graficos} />
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
              ¿Necesitás asesoramiento sobre Lenovo?
            </h3>
            <p
              className="text-neutral-300 text-[15px] md:text-[16px] mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            >
              Te ayudamos a elegir la línea ideal para tu operación
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsApp}
                className="bg-[#E94E1B] hover:bg-[#d44317] text-white px-8 py-6 rounded-xl transition-all duration-300 group shadow-lg shadow-[#E94E1B]/30"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                <MessageCircle className="mr-2 size-4" />
                Escribir por WhatsApp
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
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
function IndicadorNivelLenovo({ nivel }: { nivel: number }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          className={`size-2 rounded-full ${dot <= nivel ? 'bg-[#E94E1B]' : 'bg-neutral-300'
            }`}
        />
      ))}
    </div>
  );
}

function ServiciosGarantias() {
  const servicios = [
    {
      title: 'Soporte avanzado (para usuarios críticos)',
      description: 'Next Business Day, onsite, acceso directo a ingenieros especializados.'
    },
    {
      title: 'Protección ante incidentes',
      description: 'Cobertura contra daños accidentales, líquidos, caídas y robos.'
    },
    {
      title: 'Extensiones y modalidad onsite',
      description: 'Ampliá la cobertura estándar a 3, 4 o 5 años con atención en sitio.'
    }
  ];

  return (
    <section id="servicios-garantias" className="py-20 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-6 leading-[1.2]">
            Servicios que cambian la ecuación<br />(y protegen tu inversión)
          </h2>
          <p className="text-[18px] text-neutral-700 max-w-[800px] mx-auto leading-[1.7]">
            El diferencial en entornos corporativos muchas veces no está en el modelo: está en el servicio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {servicios.map((servicio, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300"
            >
              <div className="size-12 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5">
                <Shield className="size-6" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#282327] mb-3 leading-tight">
                {servicio.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.7]">
                {servicio.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-[13px] text-neutral-500 text-center italic">
          Los niveles de servicio dependen del modelo/serie y del plan seleccionado.
        </p>
      </div>
    </section>
  );
}

function Infraestructura() {
  const soluciones = [
    {
      icon: <Server className="size-10" />,
      title: 'Servidores para virtualización y aplicaciones',
      description: 'Plataformas ThinkSystem/ThinkEdge optimizadas para VMware, Hyper-V, KVM y aplicaciones críticas.'
    },
    {
      icon: <HardDrive className="size-10" />,
      title: 'Storage para rendimiento y capacidad',
      description: 'Desde arrays all-flash hasta híbridos para backup, archiving y cargas mixtas.'
    },
    {
      icon: <Zap className="size-10" />,
      title: 'Edge para plantas y sucursales',
      description: 'Equipos compactos, ruguerizados y optimizados para ambientes industriales remotos.'
    },
    {
      icon: <Cpu className="size-10" />,
      title: 'Infra para IA (CPU/GPU) y proyectos intensivos',
      description: 'Servidores con GPU NVIDIA para machine learning, rendering y análisis masivo de datos.'
    }
  ];

  const queEntregamos = [
    'Relevamiento y dimensionamiento',
    'Recomendación por TCO',
    'Arquitectura (on-prem / híbrida)',
    'Implementación, puesta en marcha y documentación',
    'Mantenimiento y evolución'
  ];

  return (
    <section id="datacenter" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-6 leading-[1.2]">
            Infraestructura Lenovo: cuando la nube no alcanza (o no conviene)
          </h2>
          <p className="text-[18px] text-neutral-700 max-w-[850px] mx-auto leading-[1.7]">
            Hay escenarios donde conviene (o es necesario) combinar cloud, edge y on-prem: latencia, costos recurrentes, conectividad, datos sensibles, Edge e IA local.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {soluciones.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5">
                {sol.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-[#282327] mb-3 leading-tight">
                {sol.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.7]">
                {sol.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 text-white rounded-3xl p-10"
        >
          <h3 className="text-[24px] font-semibold mb-6">Qué entregamos</h3>
          <ul className="space-y-3">
            {queEntregamos.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="size-6 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                <span className="text-[16px]">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function SolucionesIndustria() {
  const industrias = [
    {
      icon: <GraduationCap className="size-10" />,
      title: 'Educación',
      bullets: [
        'Aulas híbridas, laboratorios virtuales, plataformas LMS.',
        'Gestión centralizada de dispositivos estudiantiles.'
      ]
    },
    {
      icon: <Hospital className="size-10" />,
      title: 'Salud',
      bullets: [
        'Estaciones de trabajo médico, visualización PACS, historia clínica digital.',
        'Cumplimiento de normativas de datos sensibles.'
      ]
    },
    {
      icon: <Factory className="size-10" />,
      title: 'Manufactura',
      bullets: [
        'Edge computing para plantas, MES y trazabilidad.',
        'Equipos ruguerizados para entornos industriales.'
      ]
    },
    {
      icon: <ShoppingCart className="size-10" />,
      title: 'Retail',
      bullets: [
        'POS, kioscos, cartelería digital, WiFi para clientes.',
        'Backend para omnicanalidad y analítica de ventas.'
      ]
    },
    {
      icon: <Landmark className="size-10" />,
      title: 'Finanzas',
      bullets: [
        'Alta disponibilidad para core bancario y canales digitales.',
        'Seguridad y cumplimiento regulatorio.'
      ]
    },
    {
      icon: <Building2 className="size-10" />,
      title: 'Gobierno',
      bullets: [
        'Digitalización de servicios, datos abiertos, e-government.',
        'Infraestructura resiliente para servicios públicos críticos.'
      ]
    }
  ];

  return (
    <section id="soluciones" className="py-20 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-6 leading-[1.2]">
            Soluciones Lenovo integradas para tu industria
          </h2>
          <p className="text-[18px] text-neutral-700 max-w-[850px] mx-auto leading-[1.7]">
            No se trata de componentes. Se trata de resultados: disponibilidad, productividad, colaboración, seguridad, monitoreo y escalabilidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industrias.map((industria, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300"
            >
              <div className="size-16 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-5">
                {industria.icon}
              </div>
              <h3 className="text-[19px] font-semibold text-[#282327] mb-4">
                {industria.title}
              </h3>
              <ul className="space-y-2">
                {industria.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] text-neutral-600 leading-[1.6]">{bullet}</span>
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

function Sustentabilidad() {
  const bullets = [
    'Tecnología con criterio de ciclo de vida',
    'Renovación planificada (menos descarte)',
    'Opciones de compensación / huella'
  ];

  return (
    <section id="sustentabilidad" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-green-50 to-white border-t border-neutral-100">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="size-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
            <Leaf className="size-10" />
          </div>

          <h2 className="text-[36px] lg:text-[42px] text-[#282327] mb-6 leading-[1.2]">
            Sustentabilidad con impacto medible
          </h2>
          <p className="text-[18px] text-neutral-700 leading-[1.7] mb-8">
            Podés incorporar servicios para compensar emisiones asociadas a dispositivos y alinear tu infraestructura con objetivos ambientales de tu organización.
          </p>

          <ul className="space-y-4 text-left max-w-[600px] mx-auto">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-[17px] text-[#282327]">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function CTAFinal({ whatsappNumber, whatsappMessage }: any) {
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
    nombre: '',
    empresa: '',
    cuit: '',
    ciudad: '',
    email: '',
    telefono: '',
    necesidad: '',
    lineaPreferida: '',
    otraLinea: '',
    aceptaTerminos: false
  });

  const [areaSeleccionada, setAreaSeleccionada] = useState('');

  const areas = [
    'Microinformática',
    'Data Center',
    'Soluciones por industria',
    'Garantías/soporte',
    'Sustentabilidad'
  ];

  const lineas = [
    'ThinkPad',
    'ThinkCentre',
    'ThinkStation',
    'ThinkSystem',
    'ThinkEdge',
    'Otra'
  ];

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertModal({
      isOpen: true,
      type: 'success',
      title: '¡Solicitud enviada!',
      message: 'Te contactaremos pronto con tu propuesta Lenovo.'
    });
  };

  return (
    <section id="solicitar-cotizacion" className="py-24 px-6 lg:px-12 bg-neutral-900">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] lg:text-[48px] text-white mb-6 leading-[1.2]">
            Pedí tu propuesta Lenovo
          </h2>
          <p className="text-[18px] text-neutral-300 leading-[1.7]">
            Completá 30 segundos y un especialista te responde con una recomendación.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl p-10">
          {/* Selector de área */}
          <div className="mb-8">
            <h3 className="text-[18px] font-semibold text-[#282327] mb-4">
              Seleccioná el área de interés
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {areas.map((area, idx) => (
                <button
                  key={idx}
                  onClick={() => setAreaSeleccionada(area)}
                  className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-all border-2 ${areaSeleccionada === area
                    ? 'bg-[#E94E1B] text-white border-[#E94E1B]'
                    : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Nombre y apellido *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => updateField('nombre', e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Empresa / Razón social *
                </label>
                <input
                  type="text"
                  required
                  value={formData.empresa}
                  onChange={(e) => updateField('empresa', e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  CUIT
                </label>
                <input
                  type="text"
                  value={formData.cuit}
                  onChange={(e) => updateField('cuit', e.target.value)}
                  placeholder="XX-XXXXXXXX-X"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Ciudad / Provincia *
                </label>
                <input
                  type="text"
                  required
                  value={formData.ciudad}
                  onChange={(e) => updateField('ciudad', e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#282327] mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => updateField('telefono', e.target.value)}
                  placeholder="+54 9 351 XXX XXXX"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-2">
                ¿Qué necesitás? *
              </label>
              <textarea
                required
                value={formData.necesidad}
                onChange={(e) => updateField('necesidad', e.target.value)}
                rows={4}
                placeholder="Describí brevemente tu necesidad..."
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none resize-none"
              />
            </div>

            {/* Línea preferida */}
            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-3">
                Línea preferida (opcional)
              </label>
              <div className="flex flex-wrap gap-3">
                {lineas.map((linea, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => updateField('lineaPreferida', linea)}
                    className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all border ${formData.lineaPreferida === linea
                      ? 'bg-[#E94E1B] text-white border-[#E94E1B]'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                      }`}
                  >
                    {linea}
                  </button>
                ))}
              </div>

              {formData.lineaPreferida === 'Otra' && (
                <input
                  type="text"
                  value={formData.otraLinea}
                  onChange={(e) => updateField('otraLinea', e.target.value)}
                  placeholder="Especificá..."
                  className="w-full mt-3 px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
                />
              )}
            </div>

            {/* Términos */}
            <div className="flex items-start gap-3 pt-4">
              <input
                type="checkbox"
                id="terminos"
                required
                checked={formData.aceptaTerminos}
                onChange={(e) => updateField('aceptaTerminos', e.target.checked)}
                className="mt-1 w-4 h-4 text-[#E94E1B] rounded focus:ring-[#E94E1B]"
              />
              <label htmlFor="terminos" className="text-[14px] text-neutral-700 leading-[1.6]">
                Acepto los{' '}
                <a href="#terminos-y-condiciones" className="text-[#E94E1B] hover:underline">
                  términos y condiciones
                </a>
                {' '}y la{' '}
                <a href="#privacidad" className="text-[#E94E1B] hover:underline">
                  política de privacidad
                </a>
                .
              </label>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
                disabled={!formData.aceptaTerminos}
              >
                Enviar solicitud
                <ArrowRight className="ml-2 size-5" />
              </Button>

              <Button
                type="button"
                size="lg"
                variant="outline"
                className="flex-1 border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B] hover:text-white"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="mr-2 size-5" />
                Hablar por WhatsApp
              </Button>
            </div>

            <p className="text-[13px] text-neutral-500 text-center pt-2">
              Al enviar, recibirás tu número de ticket y próximos pasos por email/WhatsApp.
            </p>
          </form>
        </div>

        {/* Alert Modal */}
        <AlertModal
          isOpen={alertModal.isOpen}
          onClose={() => setAlertModal({ ...alertModal, isOpen: false })}
          type={alertModal.type}
          title={alertModal.title}
          message={alertModal.message}
        />
      </div>
    </section>
  );
}

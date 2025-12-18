import React, { memo } from 'react';
import { motion } from 'motion/react';
import { 
  Server,
  Wifi,
  Users,
  Camera,
  Zap,
  Laptop,
  Cable,
  Cloud,
  Wrench,
  ArrowRight
} from 'lucide-react';

export const ServiceExplorer = memo(function ServiceExplorer() {
  const [selectedService, setSelectedService] = React.useState(0);

  const servicios = [
    {
      icon: <Server className="size-6" />,
      name: 'Infraestructura IT & Data Center',
      slug: 'servicios/infraestructura-it-data-center',
      summary: 'Preparamos tu base tecnológica para soportar aplicaciones críticas, crecimiento de datos y nuevos servicios.',
      bullets: [
        'Diseño de arquitectura de cómputo y almacenamiento alineada a tu carga',
        'Servidores, storage, hiperconvergencia y virtualización',
        'Continuidad operativa, respaldos y recuperación ante desastres'
      ]
    },
    {
      icon: <Wifi className="size-6" />,
      name: 'Redes & Conectividad',
      slug: 'servicios/redes-conectividad',
      summary: 'Construimos redes seguras, escalables y bien documentadas para conectar sedes, plantas y usuarios.',
      bullets: [
        'Switching de acceso, distribución y núcleo enterprise',
        'Redes WiFi corporativas de alta densidad para oficinas y plantas',
        'Segmentación, QoS y seguridad perimetral'
      ]
    },
    {
      icon: <Users className="size-6" />,
      name: 'Team Collaboration',
      slug: 'servicios/team-collaboration',
      summary: 'Hacemos que tus equipos se vean, se escuchen y trabajen mejor, estén donde estén.',
      bullets: [
        'Plataformas de colaboración y comunicaciones unificadas',
        'Salas de reunión equipadas con cámaras y paneles interactivos',
        'Soluciones para trabajo híbrido: oficinas, home office y movilidad'
      ]
    },
    {
      icon: <Camera className="size-6" />,
      name: 'Videoseguridad & Analítica',
      slug: 'servicios/videoseguridad-analitica',
      summary: 'Transformamos la videoseguridad en una fuente de información para decisiones operativas.',
      bullets: [
        'Sistemas de cámaras IP y grabación en red',
        'Analítica de video para conteo de personas y detección de eventos',
        'Integración con control de accesos y seguridad física'
      ]
    },
    {
      icon: <Zap className="size-6" />,
      name: 'Energía & Continuidad',
      slug: 'servicios/energia-continuidad',
      summary: 'Diseñamos cadenas de energía que sostienen tu operación incluso cuando todo lo demás falla.',
      bullets: [
        'UPS, sistemas de respaldo y distribución eléctrica para data centers',
        'Soluciones de refrigeración y climatización para infraestructura crítica',
        'Monitoreo de parámetros eléctricos y condiciones ambientales'
      ]
    },
    {
      icon: <Laptop className="size-6" />,
      name: 'Microinformática',
      slug: 'servicios/microinformatica',
      summary: 'Equipamos a tus usuarios finales con dispositivos confiables y fáciles de administrar.',
      bullets: [
        'Notebooks, desktops, workstations y thin clients corporativos',
        'Equipos reforzados y tablets rugerizadas para campo o planta',
        'Gestión de stock, imágenes estándar y políticas de renovación'
      ]
    },
    {
      icon: <Cable className="size-6" />,
      name: 'Cableado estructurado & Obras tecnológicas',
      slug: 'servicios/cableado-estructurado-obras-tecnologicas',
      summary: 'Diseñamos e implementamos redes físicas de datos, voz y video en cobre y fibra óptica.',
      bullets: [
        'Relevamiento, diseño y tendido de cableado UTP y fibra óptica',
        'Fusión, medición y certificación Fluke para garantía del fabricante',
        'Documentación as built, etiquetado y esquema de puertos'
      ]
    },
    {
      icon: <Cloud className="size-6" />,
      name: 'Software & Soluciones Cloud',
      slug: 'servicios',
      summary: 'Acompañamos en la selección, licenciamiento e implementación de plataformas de software y nube.',
      bullets: [
        'Licenciamiento y despliegue de suites de productividad empresarial',
        'Diseño e implementación de cargas en nubes públicas y privadas',
        'Servicios de backup, continuidad operativa y recuperación basados en la nube'
      ]
    },
    {
      icon: <Wrench className="size-6" />,
      name: 'Servicios Profesionales',
      slug: 'servicios',
      summary: 'Acompañamos cada proyecto con servicios de análisis, diseño, implementación y soporte.',
      bullets: [
        'Consultoría tecnológica: análisis de entorno y diseño de arquitectura',
        'Implementación certificada con procesos PMI y estándares de calidad',
        'Soporte especializado, monitoreo y mejora continua'
      ]
    }
  ];

  const currentService = servicios[selectedService];

  const handleViewDetail = () => {
    // Navigate to the specific service page
    window.location.hash = currentService.slug;
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 lg:mb-10"
        >
          <h2 
            className="text-[32px] md:text-[40px] lg:text-[44px] text-[#282327] leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Áreas de servicio
          </h2>
        </motion.div>

        {/* Horizontal menu of service chips - Desktop: wraps in 2 rows */}
        <div className="hidden md:flex flex-wrap gap-2.5 lg:gap-3 mb-8 lg:mb-10">
          {servicios.map((servicio, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelectedService(idx)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="group"
            >
              <motion.div
                className="flex items-center gap-2.5 px-4 py-3 rounded-full transition-all duration-300"
                style={{
                  background: selectedService === idx ? '#E94E1B' : 'white',
                  boxShadow: selectedService === idx
                    ? '0 4px 16px rgba(233, 78, 27, 0.25), 0 2px 6px rgba(233, 78, 27, 0.15)'
                    : '0 1px 3px rgba(0, 0, 0, 0.08)',
                  border: selectedService === idx 
                    ? '1px solid rgba(233, 78, 27, 0.3)' 
                    : '1px solid #E5E5E5',
                }}
                whileHover={{ 
                  scale: selectedService === idx ? 1 : 1.02,
                  boxShadow: selectedService === idx
                    ? '0 4px 16px rgba(233, 78, 27, 0.25), 0 2px 6px rgba(233, 78, 27, 0.15)'
                    : '0 3px 8px rgba(0, 0, 0, 0.12)'
                }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Icon */}
                <div 
                  className="size-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: selectedService === idx 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'rgba(233, 78, 27, 0.1)',
                    color: selectedService === idx ? 'white' : '#E94E1B'
                  }}
                >
                  {servicio.icon}
                </div>
                
                {/* Service name */}
                <span 
                  className="text-[13px] lg:text-[14px] leading-tight whitespace-nowrap"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: selectedService === idx ? 'white' : '#282327'
                  }}
                >
                  {servicio.name}
                </span>
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* Mobile: Horizontal scrollable menu */}
        <div className="md:hidden mb-6 -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 pb-2 min-w-max">
            {servicios.map((servicio, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedService(idx)}
                className="flex-shrink-0"
              >
                <div
                  className="flex items-center gap-2 px-3 py-2.5 rounded-full transition-all duration-300"
                  style={{
                    background: selectedService === idx ? '#E94E1B' : 'white',
                    boxShadow: selectedService === idx
                      ? '0 3px 12px rgba(233, 78, 27, 0.25)'
                      : '0 1px 3px rgba(0, 0, 0, 0.08)',
                    border: selectedService === idx ? 'none' : '1px solid #E5E5E5'
                  }}
                >
                  <div 
                    className="size-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: selectedService === idx 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : 'rgba(233, 78, 27, 0.1)',
                      color: selectedService === idx ? 'white' : '#E94E1B'
                    }}
                  >
                    {React.cloneElement(servicio.icon, { className: 'size-4' })}
                  </div>
                  <span 
                    className="text-[12px] leading-tight whitespace-nowrap"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      color: selectedService === idx ? 'white' : '#282327'
                    }}
                  >
                    {servicio.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail card - single card for selected service */}
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
            {/* Left side: Icon + Content */}
            <div className="flex-1">
              <div className="flex items-start gap-4 md:gap-5 mb-5 md:mb-6">
                {/* Icon */}
                <div 
                  className="size-14 md:size-16 lg:size-18 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                    boxShadow: '0 6px 20px rgba(233, 78, 27, 0.3)'
                  }}
                >
                  {React.cloneElement(currentService.icon, { className: 'size-7 md:size-8 lg:size-9' })}
                </div>

                {/* Title and summary */}
                <div className="flex-1">
                  <h3 
                    className="text-[22px] md:text-[26px] lg:text-[28px] text-[#282327] mb-2 md:mb-3 leading-tight"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 700
                    }}
                  >
                    {currentService.name}
                  </h3>
                  <p 
                    className="text-[14px] md:text-[15px] lg:text-[16px] text-neutral-600 leading-relaxed"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {currentService.summary}
                  </p>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-3 md:space-y-3.5 ml-0 md:ml-[76px] lg:ml-[92px]">
                {currentService.bullets.map((bullet, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2.5 md:gap-3"
                  >
                    <div 
                      className="size-1.5 rounded-full flex-shrink-0 mt-2"
                      style={{
                        background: '#E94E1B'
                      }}
                    />
                    <p 
                      className="text-[13px] md:text-[14px] lg:text-[15px] text-neutral-700 leading-relaxed flex-1"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side: CTA button */}
            <div className="flex lg:flex-col justify-end lg:justify-start lg:pt-2">
              <motion.button
                onClick={handleViewDetail}
                className="group flex items-center gap-2 px-5 md:px-6 py-3 md:py-3.5 bg-[#E94E1B] text-white rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                <span className="text-[13px] md:text-[14px] whitespace-nowrap">
                  Ver detalle
                </span>
                <ArrowRight className="size-4 md:size-4.5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
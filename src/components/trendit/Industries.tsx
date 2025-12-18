import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Factory, 
  Heart, 
  GraduationCap, 
  Building2, 
  Landmark,
  ShoppingCart,
  Radio,
  Truck,
  Fuel,
  ArrowRight
} from 'lucide-react';

export function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    {
      id: 'manufactura',
      name: 'Manufactura',
      description: 'Infraestructura para plantas conectadas, automatizadas y seguras.',
      icon: <Factory className="size-8" />,
      tags: ['Planta conectada', 'Datos de producción', 'Trazabilidad'],
      route: 'industrias#manufactura'
    },
    {
      id: 'finanzas',
      name: 'Finanzas y Seguros',
      description: 'Redes y data centers resilientes para servicios financieros digitales.',
      icon: <Building2 className="size-8" />,
      tags: ['Continuidad', 'Ciberseguridad', 'Cumplimiento'],
      route: 'industrias#finanzas'
    },
    {
      id: 'salud',
      name: 'Salud',
      description: 'Conectividad segura para hospitales, clínicas y centros de diagnóstico.',
      icon: <Heart className="size-8" />,
      tags: ['Redes clínicas', 'Datos de pacientes', 'Telemedicina'],
      route: 'industrias#salud'
    },
    {
      id: 'educacion',
      name: 'Educación',
      description: 'Campus conectados, aulas híbridas y servicios digitales para estudiantes.',
      icon: <GraduationCap className="size-8" />,
      tags: ['Wi-Fi campus', 'Aulas híbridas', 'Colaboración'],
      route: 'industrias#educacion'
    },
    {
      id: 'gobierno',
      name: 'Gobierno',
      description: 'Infraestructura para servicios públicos, centros de datos y seguridad ciudadana.',
      icon: <Landmark className="size-8" />,
      tags: ['Data center', 'Redes seguras', 'Videoseguridad'],
      route: 'industrias#gobierno'
    },
    {
      id: 'retail',
      name: 'Retail y Comercio',
      description: 'Conectividad para tiendas, POS, depósitos y experiencia de cliente.',
      icon: <ShoppingCart className="size-8" />,
      tags: ['Red de tiendas', 'POS', 'Videoseguridad'],
      route: 'industrias#retail'
    },
    {
      id: 'logistica',
      name: 'Logística y Transporte',
      description: 'Redes para depósitos, trazabilidad y monitoreo de flotas.',
      icon: <Truck className="size-8" />,
      tags: ['Depósitos', 'Trazabilidad', 'Monitoreo'],
      route: 'industrias#logistica'
    },
    {
      id: 'telecomunicaciones',
      name: 'Telecomunicaciones',
      description: 'Infraestructura de red, energía y housing para operadores y carriers.',
      icon: <Radio className="size-8" />,
      tags: ['Backbone', 'Acceso', 'Energía'],
      route: 'industrias#telecomunicaciones'
    },
    {
      id: 'oilgas',
      name: 'Oil & Gas',
      description: 'Conectividad remota, monitoreo y seguridad para operaciones críticas.',
      icon: <Fuel className="size-8" />,
      tags: ['Conectividad remota', 'SCADA', 'Alta disponibilidad'],
      route: 'industrias#oilgas'
    }
  ];

  const handleIndustryClick = (route: string) => {
    // Navigate to the industry detail page
    window.location.hash = route;
  };

  return (
    <section ref={ref} id="industries" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 max-w-[800px] mx-auto"
        >
          <h2 
            className="text-[36px] md:text-[42px] lg:text-[48px] text-[#282327] mb-4 leading-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Industrias
          </h2>
          <p 
            className="text-[16px] md:text-[17px] lg:text-[18px] text-neutral-600 leading-relaxed"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Donde la tecnología de Trendit se vuelve valor para tu negocio.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: "easeOut" 
              }}
              className="group"
            >
              <button
                onClick={() => handleIndustryClick(industry.route)}
                className="w-full bg-white border border-neutral-200 rounded-3xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 text-left hover:border-[#E94E1B]/30 cursor-pointer"
              >
                {/* Icon */}
                <div 
                  className="size-16 md:size-18 lg:size-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(233, 78, 27, 0.1) 0%, rgba(233, 78, 27, 0.05) 100%)',
                    color: '#E94E1B'
                  }}
                >
                  {industry.icon}
                </div>

                {/* Title */}
                <h3 
                  className="text-[20px] md:text-[22px] lg:text-[24px] text-[#282327] mb-3 leading-tight"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 700
                  }}
                >
                  {industry.name}
                </h3>

                {/* Description */}
                <p 
                  className="text-[14px] md:text-[15px] text-neutral-600 leading-relaxed mb-5 line-clamp-2"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400,
                    minHeight: '2.8em'
                  }}
                >
                  {industry.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {industry.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full text-[12px] text-neutral-700 transition-colors duration-300 group-hover:border-[#E94E1B]/20 group-hover:bg-[#E94E1B]/5"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#E94E1B] transition-all duration-300 group-hover:gap-3">
                  <span 
                    className="text-[14px] md:text-[15px]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Ver soluciones
                  </span>
                  <ArrowRight className="size-4 md:size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

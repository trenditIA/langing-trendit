import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Cable, 
  CheckCircle2, 
  Network, 
  Zap, 
  Search, 
  FileCheck, 
  Shield, 
  Home,
  Building2,
  Factory,
  Database,
  GraduationCap,
  ChevronRight,
  Phone,
  MessageCircle,
  ClipboardCheck,
  Users,
  Settings,
  TrendingUp,
  Wrench,
  Eye,
  Grid,
  Radio,
  Construction
} from 'lucide-react';
import { useState } from 'react';
import { FloatingBreadcrumb } from './FloatingBreadcrumb';

export function CableadoEstructurado() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    razonSocial: '',
    cuit: '',
    nombreContacto: '',
    cargo: '',
    telefono: '',
    email: '',
    ubicacion: '',
    fabricantes: [] as string[],
    otrosFabricantes: '',
    detalleProyecto: ''
  });

  const fabricantes = [
    'HPE', 'Lenovo', 'Dell', 'Cisco', 'Apple', 
    'Samsung', 'Microsoft', 'Fortinet', 'Otros'
  ];

  const toggleFabricante = (fab: string) => {
    setFormData(prev => ({
      ...prev,
      fabricantes: prev.fabricantes.includes(fab)
        ? prev.fabricantes.filter(f => f !== fab)
        : [...prev.fabricantes, fab]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', { selectedProject, formData });
    // Aquí iría la lógica de envío
  };

  const proyectos = [
    {
      icon: <Search className="size-6" />,
      title: 'Diagnóstico de red y certificación de cableado',
      description: 'Evaluamos tu infraestructura actual y definimos un plan de mejora por etapas.'
    },
    {
      icon: <Network className="size-6" />,
      title: 'Nuevo cableado estructurado en oficinas o planta',
      description: 'Diseñamos e instalamos la red física para tu crecimiento.'
    },
    {
      icon: <Radio className="size-6" />,
      title: 'Backbone de fibra óptica entre edificios',
      description: 'Conectamos naves, edificios o campus con enlaces de alta capacidad.'
    },
    {
      icon: <Database className="size-6" />,
      title: 'Renovación de salas técnicas y tableros para IT',
      description: 'Ordenamos y actualizamos salas, tableros y distribución de energía para IT.'
    },
    {
      icon: <Construction className="size-6" />,
      title: 'Obra llave en mano (redes + energía + videoseguridad)',
      description: 'Asumimos todo el proyecto con un solo equipo responsable.'
    },
    {
      icon: <MessageCircle className="size-6" />,
      title: 'Otro tipo de proyecto (cuéntanos más)',
      description: 'Si lo que necesitas no encaja en estas categorías, lo diseñamos juntos.'
    }
  ];

  const scrollToExplore = () => {
    const element = document.getElementById('problema-oportunidad');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white">
      {/* 1. HERO DEL SERVICIO - Clean minimal style */}
      <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] pt-24 lg:pt-28 pb-20 lg:pb-24 px-6 lg:px-12 overflow-hidden min-h-[90vh] flex items-center">
        {/* Floating Breadcrumb */}
        <FloatingBreadcrumb 
          items={[
            { label: 'Inicio', href: '#home' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Cableado estructurado y obras tecnológicas' }
          ]}
        />
        {/* Subtle background glow - static */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#E94E1B]/10 via-[#E94E1B]/5 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#282327]/50" />

        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Textos y CTAs */}
            <div className="max-w-[600px]">
              <h1 
                className="text-[48px] lg:text-[56px] leading-[1.1] tracking-tight mb-6 text-white"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700
                }}
              >
                Cableado estructurado<br />
                y obras tecnológicas<br />
                para tu infraestructura crítica
              </h1>

              <p 
                className="text-[16px] lg:text-[18px] text-white/70 leading-[1.7] mb-8"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Diseñamos, instalamos y certificamos soluciones de cableado de datos, fibra óptica y energía, pensadas para que tu operación siga online y pueda crecer con seguridad.
              </p>

              {/* Bullets */}
              <div className="grid sm:grid-cols-1 gap-4 mb-10">
                {[
                  'Cableado de datos, fibra óptica y energía',
                  'Diagnóstico y certificación con tecnología Fluke',
                  'Proyectos llave en mano para entornos críticos'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="size-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20">
                      <CheckCircle2 className="size-5 text-white/80" />
                    </div>
                    <span 
                      className="text-[16px] text-white leading-relaxed"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs - same style as home hero */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white rounded-xl transition-all duration-300 shadow-lg shadow-[#E94E1B]/20 flex items-center justify-center gap-2 group"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '16px'
                  }}
                >
                  Hablar con un especialista
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.button
                  onClick={scrollToExplore}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm rounded-xl transition-all duration-300"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '16px'
                  }}
                >
                  Explorar este servicio
                </motion.button>
              </div>
            </div>

            {/* Botón de emergencia - Sin card wrapper */}
            <div className="flex flex-col justify-center items-center gap-6 lg:gap-8">
              {/* Chip superior - Soporte urgente */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E94E1B]/30 bg-[#E94E1B]/5">
                <div className="size-2 rounded-full bg-[#E94E1B]" />
                <span 
                  className="text-[12px] lg:text-[13px] uppercase tracking-wide text-white/80"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 500
                  }}
                >
                  Soporte urgente
                </span>
              </div>

              {/* Gran botón de emergencia - Claymorphism suave */}
              <a
                href="https://wa.me/5493516714007?text=Hola%2C%20tengo%20una%20emergencia%20de%20infraestructura%20o%20redes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto lg:min-w-[480px] lg:max-w-[560px] flex items-center justify-center px-10 py-12 lg:h-[140px] bg-[#E94E1B] hover:bg-[#E94E1B]/95 rounded-2xl lg:rounded-[28px] transition-all duration-300 cursor-pointer group"
                style={{
                  boxShadow: '0 10px 30px rgba(233, 78, 27, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                <span 
                  className="text-[20px] sm:text-[22px] lg:text-[24px] text-white text-center leading-tight"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Apriete en caso de emergencia
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOQUE "EL PROBLEMA Y LA OPORTUNIDAD" */}
      <section id="problema-oportunidad" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-50 rounded-3xl p-8 lg:p-12 border border-neutral-200"
          >
            <h2 
              className="text-[36px] lg:text-[42px] leading-[1.2] tracking-tight mb-10 text-center"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700,
                color: '#282327'
              }}
            >
              El cableado que nadie ve… hasta que se convierte en un problema
            </h2>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Columna izquierda - storytelling */}
              <div className="space-y-6">
                <p 
                  className="text-[16px] text-neutral-600 leading-[1.8]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  La mayoría de las organizaciones invierte mucho tiempo en elegir servidores, switches, cámaras, Wi-Fi o sistemas de colaboración. Pero todo eso depende de algo más básico: cómo están tendidos los cables que llevan datos y energía.
                </p>
                <p 
                  className="text-[16px] text-neutral-600 leading-[1.8]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Un patch panel mal organizado, fibras sin etiquetar o un tendido eléctrico improvisado pueden traducirse en caídas de servicios, cuellos de botella, riesgos de seguridad y costos que se multiplican cada vez que hay que tocar la red. Un diseño de cableado estructurado profesional es lo que permite que la infraestructura sea ordenada, escalable y fácil de mantener.
                </p>
                <p 
                  className="text-[16px] text-neutral-600 leading-[1.8]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  En Trendit llevamos más de 10 años entrando a plantas industriales, oficinas corporativas, depósitos y centros de datos donde "todo funciona… hasta que deja de funcionar". Nuestro trabajo es transformar ese caos en una infraestructura limpia, documentada y preparada para lo que viene.
                </p>
              </div>

              {/* Columna derecha - dolores típicos */}
              <div className="bg-white rounded-2xl p-8 border-2 border-[#E94E1B]/20 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#E94E1B]/20 to-[#E94E1B]/10">
                    <Eye className="size-5 text-[#E94E1B]" />
                  </div>
                  <h3 
                    className="text-[18px]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      color: '#282327'
                    }}
                  >
                    Síntomas que vemos todos los días
                  </h3>
                </div>

                <ul className="space-y-4">
                  {[
                    'Incidentes de red que reaparecen en distintos sectores.',
                    'Salas técnicas desordenadas, sin etiquetas ni documentación.',
                    'Cortes por obras internas o mudanzas mal planificadas.',
                    'Equipos nuevos que no rinden por limitaciones físicas viejas.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="size-2 rounded-full" style={{ backgroundColor: '#E94E1B' }} />
                      </div>
                      <span 
                        className="text-[15px] text-neutral-600 leading-[1.6]"
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. BLOQUE "QUÉ HACEMOS" - Fondo oscuro degradado */}
      <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
        </div>

        <div className="max-w-[1100px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-[36px] lg:text-[42px] leading-[1.2] tracking-tight mb-4 text-white"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              Qué hacemos en cableado estructurado y obras tecnológicas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: <Network className="size-6" />,
                title: 'Cableado estructurado de datos',
                description: 'Puntos de red, Wi-Fi, telefonía IP e IoT con diseño ordenado y escalable.'
              },
              {
                icon: <Radio className="size-6" />,
                title: 'Fibra óptica monomodo y multimodo',
                description: 'Backbone entre edificios, naves y salas técnicas con redundancia.'
              },
              {
                icon: <Search className="size-6" />,
                title: 'Diagnóstico y optimización de redes existentes',
                description: 'Relevamientos, mapas de cobertura y planes de mejora por fases.'
              },
              {
                icon: <FileCheck className="size-6" />,
                title: 'Certificación de cableado con tecnología Fluke',
                description: 'Pruebas y reportes que validan el rendimiento esperado de cada enlace.'
              },
              {
                icon: <Zap className="size-6" />,
                title: 'Cableado eléctrico y tableros para IT',
                description: 'Alimentación segura para racks, UPS, equipos críticos y salas técnicas.'
              },
              {
                icon: <Construction className="size-6" />,
                title: 'Obra civil asociada a la infraestructura tecnológica',
                description: 'Canalizaciones, bandejas y acondicionamiento de salas para IT y comunicaciones.'
              }
            ].map((servicio, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="size-14 rounded-xl flex items-center justify-center mb-5 bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-white/80">
                    {servicio.icon}
                  </div>
                </div>
                <h3 
                  className="text-[18px] mb-3 text-white"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  {servicio.title}
                </h3>
                <p 
                  className="text-[15px] text-white/70 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {servicio.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[15px] text-white/60 max-w-[700px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Podemos integrar estos servicios en proyectos llave en mano o intervenir por etapas según la madurez de tu infraestructura.
          </motion.p>
        </div>
      </section>

      {/* 4. BLOQUE "CÓMO TRABAJAMOS" - TIMELINE */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] lg:text-[42px] leading-[1.2] tracking-tight mb-16"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700,
              color: '#282327'
            }}
          >
            Cómo trabajamos, de la idea al último conector
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                icon: <Users className="size-5" />,
                title: 'Entendimiento del contexto',
                description: 'Reunimos a los stakeholders de negocio, IT y operación para entender el problema y el objetivo del proyecto.'
              },
              {
                icon: <Search className="size-5" />,
                title: 'Relevamiento técnico en sitio',
                description: 'Visitamos las instalaciones, medimos distancias y analizamos salas técnicas, canalizaciones y tableros.'
              },
              {
                icon: <Grid className="size-5" />,
                title: 'Diseño y arquitectura de la solución',
                description: 'Definimos planos, categorías de cableado, fibras, redundancias y caminos de expansión futura.'
              },
              {
                icon: <ClipboardCheck className="size-5" />,
                title: 'Planificación y cronograma de obra',
                description: 'Armamos un plan de trabajo con hitos claros, ventanas de cambio y coordinación con otros proveedores.'
              },
              {
                icon: <Settings className="size-5" />,
                title: 'Ejecución por equipos especializados',
                description: 'Equipos técnicos certificados ejecutan el tendido respetando normas, etiquetado y estándares de fabricante.'
              },
              {
                icon: <FileCheck className="size-5" />,
                title: 'Certificación, pruebas y documentación',
                description: 'Medimos y certificamos cada punto, generando reportes y documentación "as-built".'
              },
              {
                icon: <CheckCircle2 className="size-5" />,
                title: 'Entrega, capacitación y soporte post-obra',
                description: 'Entregamos toda la documentación y acompañamos futuras ampliaciones o migraciones.'
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="size-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#E94E1B]">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  {idx < 6 && (
                    <div 
                      className="w-0.5 h-16 mt-4"
                      style={{ backgroundColor: '#E94E1B', opacity: 0.3 }}
                    />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 
                    className="text-[18px] mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      color: '#282327'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-[15px] text-neutral-600 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[14px] text-neutral-500 mt-12 text-center max-w-[800px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Integramos prácticas de gestión de proyectos con la realidad de plantas, campus y edificios, para que el plan se pueda ejecutar en el mundo real.
          </motion.p>
        </div>
      </section>

      {/* 5. BLOQUE "POR QUÉ CERTIFICAR TU CABLEADO" - Fondo oscuro degradado */}
      <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
        </div>

        <div className="max-w-[1100px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 
              className="text-[36px] lg:text-[42px] leading-[1.2] tracking-tight mb-4 text-white"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              Por qué certificar tu cableado
            </h2>
            <p 
              className="text-[17px] text-white/70"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Certificar tu cableado es gestionar la base de tu operación con datos y garantías.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Columna izquierda - beneficios */}
            <div className="space-y-6">
              {[
                'Sabes que la red soporta las velocidades que tus sistemas necesitan, evitando problemas de rendimiento difíciles de diagnosticar.',
                'Reduces drásticamente el tiempo de troubleshooting: un punto certificado permite descartar enseguida que el problema esté en el cable.',
                'Proteges la inversión en electrónica de red y servidores: si la base física falla, el resto nunca puede demostrar su rendimiento real.',
                'Obtienes trazabilidad para auditorías, normas de calidad y compliance: documentación clara de cada enlace y su ubicación.',
                'Puedes planificar renovaciones con datos: la certificación muestra qué segmentos están al límite y dónde conviene invertir primero.'
              ].map((beneficio, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="size-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/10 backdrop-blur-sm border border-white/20">
                    <CheckCircle2 className="size-4 text-white/80" />
                  </div>
                  <p 
                    className="text-[15px] text-white/70 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {beneficio}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Columna derecha - card visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-10"
            >
              <div className="space-y-6">
                {[
                  { icon: <Shield className="size-5" />, text: 'Red certificada' },
                  { icon: <FileCheck className="size-5" />, text: 'Documentación actualizada' },
                  { icon: <TrendingUp className="size-5" />, text: 'Plan de renovación por etapas' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="size-12 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                      <div className="text-white/80">
                        {item.icon}
                      </div>
                    </div>
                    <span 
                      className="text-[16px] text-white"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. BLOQUE "OBRAS LLAVE EN MANO" */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-50 rounded-3xl p-8 lg:p-12 border border-neutral-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="size-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#E94E1B]/20 to-[#E94E1B]/10">
                <Construction className="size-7 text-[#E94E1B]" />
              </div>
              <h2 
                className="text-[32px] leading-[1.2] tracking-tight"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700,
                  color: '#282327'
                }}
              >
                Obras llave en mano: un solo responsable de principio a fin
              </h2>
            </div>

            <p 
              className="text-[16px] text-neutral-600 leading-[1.8] mb-8"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Si tu organización necesita resolver todo el proyecto con un único partner, podemos asumir la obra completa: diseño de red, energía y videoseguridad, coordinación con otros proveedores, suministro de materiales y dirección de obra hasta la puesta en marcha.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                'Diseño de red, energía y videoseguridad integrados.',
                'Coordinación con obra civil, HVAC y otros proveedores.',
                'Dirección de obra, puesta en marcha y documentación final.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="size-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-br from-[#E94E1B]/20 to-[#E94E1B]/10">
                    <CheckCircle2 className="size-4 text-[#E94E1B]" />
                  </div>
                  <p 
                    className="text-[14px] text-neutral-600 leading-[1.6]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. BLOQUE "EXPERIENCIA Y SECTORES" */}
      <section className="py-20 px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-[1100px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[36px] lg:text-[42px] leading-[1.2] tracking-tight mb-12"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700,
              color: '#282327'
            }}
          >
            Más de 10 años cableando organizaciones que no pueden detenerse
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Izquierda - sectores */}
            <div>
              <h3 
                className="text-[18px] mb-6"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  color: '#282327'
                }}
              >
                Sectores en los que trabajamos
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Factory className="size-4" />, text: 'Industria y logística' },
                  { icon: <Building2 className="size-4" />, text: 'Centros de distribución y depósitos' },
                  { icon: <Home className="size-4" />, text: 'Oficinas corporativas' },
                  { icon: <Database className="size-4" />, text: 'Centros de datos y salas técnicas' },
                  { icon: <GraduationCap className="size-4" />, text: 'Educación, salud y sector público' }
                ].map((sector, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-neutral-200"
                  >
                    <div className="text-[#E94E1B]">
                      {sector.icon}
                    </div>
                    <span 
                      className="text-[14px]"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500,
                        color: '#282327'
                      }}
                    >
                      {sector.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Derecha - texto de apoyo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p 
                className="text-[16px] text-neutral-600 leading-[1.8] mb-8"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Cada proyecto nos deja métricas de mejora: menos incidentes, menos tiempo de corte en migraciones, mejor cobertura y tiempos de respuesta más cortos cuando hay que ampliar. Esa experiencia se convierte en buenas prácticas que llevamos al siguiente cliente.
              </p>

              {/* Contador visual */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <div 
                    className="text-[36px] mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 700,
                      color: '#E94E1B'
                    }}
                  >
                    +10
                  </div>
                  <p 
                    className="text-[14px] text-neutral-600"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Años de experiencia
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <div 
                    className="text-[36px] mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 700,
                      color: '#E94E1B'
                    }}
                  >
                    +200
                  </div>
                  <p 
                    className="text-[14px] text-neutral-600"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Proyectos completados
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL - SELECTOR DE PROYECTOS - Fondo oscuro degradado */}
      <section id="contacto" className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
        </div>

        <div className="max-w-[1100px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-[36px] lg:text-[42px] leading-[1.2] tracking-tight mb-4 text-white"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              ¿Qué tipo de proyecto quieres impulsar?
            </h2>
          </motion.div>

          {/* Grid de cards seleccionables */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {proyectos.map((proyecto, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => setSelectedProject(idx)}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedProject === idx
                    ? 'border-[#E94E1B] bg-gradient-to-br from-[#E94E1B]/20 to-[#E94E1B]/10'
                    : 'border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      selectedProject === idx
                        ? 'bg-[#E94E1B]'
                        : 'bg-white/10 backdrop-blur-sm border border-white/20'
                    }`}
                  >
                    <div className="text-white/80">
                      {proyecto.icon}
                    </div>
                  </div>
                  <div>
                    <h3 
                      className="text-[16px] mb-2 text-white"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {proyecto.title}
                    </h3>
                    <p 
                      className="text-[14px] text-white/70 leading-[1.6]"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {proyecto.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Formulario (aparece cuando se selecciona un proyecto) */}
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12"
            >
              <h3 
                className="text-[24px] mb-8 text-center text-white"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Contanos más sobre tu proyecto
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-[14px] mb-2 text-white/80"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Razón social *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.razonSocial}
                      onChange={(e) => setFormData({ ...formData, razonSocial: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-[14px] mb-2 text-white/80"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      CUIT *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cuit}
                      onChange={(e) => setFormData({ ...formData, cuit: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-[14px] mb-2 text-white/80"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Nombre y cargo de la persona de contacto *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombreContacto}
                      onChange={(e) => setFormData({ ...formData, nombreContacto: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-[14px] mb-2 text-white/80"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Cargo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-[14px] mb-2 text-white/80"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-[14px] mb-2 text-white/80"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-[14px] mb-2 text-white/80"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Ubicación del proyecto (provincia / ciudad) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ubicacion}
                    onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-[14px] mb-3 text-white/80"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Fabricantes de interés
                  </label>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {fabricantes.map((fab) => (
                      <button
                        key={fab}
                        type="button"
                        onClick={() => toggleFabricante(fab)}
                        className={`px-4 py-2 rounded-xl border-2 transition-all duration-300 ${
                          formData.fabricantes.includes(fab)
                            ? 'border-[#E94E1B] bg-[#E94E1B]/20 text-white'
                            : 'border-white/20 bg-white/5 text-white/70 hover:border-white/40 hover:bg-white/10'
                        }`}
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 500,
                          fontSize: '14px'
                        }}
                      >
                        {fab}
                      </button>
                    ))}
                  </div>

                  {formData.fabricantes.includes('Otros') && (
                    <input
                      type="text"
                      placeholder="Escribí las marcas que te interesan"
                      value={formData.otrosFabricantes}
                      onChange={(e) => setFormData({ ...formData, otrosFabricantes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  )}
                </div>

                <div>
                  <label 
                    className="block text-[14px] mb-2 text-white/80"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Cuéntanos brevemente el proyecto y los plazos deseados
                  </label>
                  <textarea
                    rows={4}
                    value={formData.detalleProyecto}
                    onChange={(e) => setFormData({ ...formData, detalleProyecto: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 outline-none transition-all resize-none"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400,
                      fontSize: '15px'
                    }}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white rounded-xl transition-all duration-300 shadow-lg shadow-[#E94E1B]/20 flex items-center justify-center gap-2 group"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '16px'
                    }}
                  >
                    Enviar detalle del proyecto
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.a
                    href="https://wa.me/5493516714007"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '16px'
                    }}
                  >
                    <Phone className="size-5" />
                    Prefiero chatear por WhatsApp
                  </motion.a>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

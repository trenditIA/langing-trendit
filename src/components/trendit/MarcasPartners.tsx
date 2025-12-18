import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  Award,
  Shield,
  TrendingUp,
  Leaf,
  CheckCircle2,
  X,
  Users,
  Building2,
  Server,
  Network,
  Video,
  Zap,
  Laptop,
  TreeDeciduous,
  MessageCircle,
  Target,
  DollarSign,
  Lightbulb,
  Boxes,
  Globe,
  BarChart3
} from 'lucide-react';
import { Button } from '../ui/button';
import { AgendarReunionMarcasModal } from './AgendarReunionMarcasModal';

export function MarcasPartnersPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedAreaIndex, setSelectedAreaIndex] = React.useState(0);

  const handleOpenModal = (areaIndex?: number) => {
    if (areaIndex !== undefined) {
      setSelectedAreaIndex(areaIndex);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white">
      <HeroMarcas />
      <FilosofiaMarcas />
      <ComoElegimos />
      <TrianguloValor />
      <ExploradorMarcas onOpenModal={handleOpenModal} />
      <DiferenciaMarketplaces />
      <SostenibilidadMarcas />
      <CTAFinalMarcas onOpenModal={() => handleOpenModal()} />
      
      <AgendarReunionMarcasModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialAreaIndex={selectedAreaIndex}
      />
    </div>
  );
}

function HeroMarcas() {
  const scrollToExploradorMarcas = () => {
    const element = document.getElementById('explorador-marcas');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%20Trendit%2C%20quiero%20informaci%C3%B3n%20general%20sobre%20sus%20servicios%20y%20una%20reuni%C3%B3n.', '_blank');
  };

  return (
    <section 
      className="relative pt-32 pb-24 px-6 lg:px-12 overflow-hidden"
      style={{ background: '#F8F0E7' }}
    >
      <div className="max-w-[1100px] mx-auto relative z-10 text-center">
        
        {/* H1 Title */}
        <h1 
          className="text-[44px] md:text-[56px] lg:text-[64px] leading-[1.08] mb-6 tracking-tight max-w-[900px] mx-auto"
          style={{
            color: '#282327',
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 700
          }}
        >
          Marcas líderes, alianzas que marcan la diferencia
        </h1>

        {/* Subtítulo */}
        <p 
          className="text-[17px] md:text-[18px] lg:text-[19px] leading-[1.6] mb-5 max-w-[820px] mx-auto"
          style={{
            color: '#282327',
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 600,
            letterSpacing: '-0.01em'
          }}
        >
          Seleccionamos un ecosistema de fabricantes globales que comparten nuestra visión de calidad, innovación y triple impacto.
        </p>

        {/* Descriptive paragraph */}
        <p 
          className="text-[16px] md:text-[17px] leading-[1.7] mb-10 max-w-[780px] mx-auto"
          style={{
            color: '#4A4A4A',
            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}
        >
          Cada marca en Trendit es el resultado de años de pruebas en campo, certificaciones y proyectos reales, con un solo criterio: que la tecnología sume valor a tu negocio en alcance, tiempo y costo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={scrollToExploradorMarcas}
            className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-7 h-[54px] transition-all duration-300 w-full sm:w-auto"
            style={{
              borderRadius: '12px',
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              boxShadow: '0 4px 14px rgba(233, 78, 27, 0.25), 0 2px 6px rgba(233, 78, 27, 0.15)'
            }}
          >
            Explorar marcas por área de conocimiento
            <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={handleWhatsApp}
            className="bg-white border-[1.5px] border-[#D1D1D6] text-[#282327] hover:bg-neutral-50 hover:border-[#B8B8BD] px-7 h-[54px] transition-all duration-300 w-full sm:w-auto"
            style={{
              borderRadius: '12px',
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600,
              fontSize: '15px'
            }}
          >
            <MessageCircle className="mr-2 size-5" />
            Hablemos de tu stack tecnológico
          </Button>
        </div>

      </div>
    </section>
  );
}

function FilosofiaMarcas() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-sm font-bold text-[#E94E1B] mb-3 uppercase tracking-wide">
            Nuestra visión
          </div>
          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-8 leading-[1.15] tracking-tight">
            No vendemos logos: construimos ecosistemas tecnológicos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[17px] text-neutral-700 leading-[1.75] mb-12"
        >
          <p>
            En Trendit las marcas no son una lista de logos: son piezas de un ecosistema que tiene que funcionar como un todo. Combinamos fabricantes de data center, redes, video, colaboración, energía y dispositivos para armar arquitecturas coherentes, simples de operar y con buen TCO. No empujamos un fabricante porque sí: elegimos la tecnología que mejor resuelve tu problema, aunque implique mezclar distintos vendors. Nuestro rol es ser tu socio B4B: cuidamos tu operación, tus finanzas y tus planes de crecimiento, no solo el precio de la próxima compra.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-gradient-to-br from-[#E94E1B]/5 to-[#E94E1B]/10 border-l-4 border-[#E94E1B] rounded-2xl p-8 lg:p-10"
        >
          <p className="text-[22px] text-[#282327] leading-[1.5] italic font-light">
            "Las marcas son importantes. Lo que hacemos con ellas para tu negocio, todavía más."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ComoElegimos() {
  const criterios = [
    {
      icon: <Award className="size-8" />,
      title: 'Liderazgo tecnológico real',
      description: 'Roadmap claro, innovación sostenida y presencia global.'
    },
    {
      icon: <Shield className="size-8" />,
      title: 'Calidad y soporte comprobados',
      description: 'Equipos que resisten la operación diaria, con garantías y escalamiento técnico cuando hace falta.'
    },
    {
      icon: <Lightbulb className="size-8" />,
      title: 'Compromiso con la mejora continua',
      description: 'Programas de formación, laboratorios, PoC y acompañamiento en proyectos complejos.'
    },
    {
      icon: <DollarSign className="size-8" />,
      title: 'Visión de costos y TCO',
      description: 'No solo precio de compra: también mantenimiento, licencias, energía y vida útil.'
    },
    {
      icon: <TreeDeciduous className="size-8" />,
      title: 'Valores alineados y sostenibilidad',
      description: 'Fabricantes con iniciativas verdes y programas de responsabilidad social que se conectan con Reforestar.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[0.95fr_1.4fr] gap-12 lg:gap-16 items-start">
          
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            {/* Etiqueta superior */}
            <div 
              className="mb-4 uppercase tracking-wider"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700,
                fontSize: '13px',
                color: '#E94E1B',
                letterSpacing: '0.08em'
              }}
            >
              Cómo elegimos nuestros partners
            </div>
            
            {/* Título principal */}
            <h2 
              className="mb-6 leading-[1.15] tracking-tight"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 44px)',
                color: '#282327',
                maxWidth: '580px'
              }}
            >
              Elegimos marcas con las que también operaríamos nuestra propia empresa
            </h2>
            
            {/* Párrafo descriptivo */}
            <p 
              className="leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
                fontSize: '17px',
                color: '#4A4A4A',
                maxWidth: '540px'
              }}
            >
              Para entrar al ecosistema Trendit, un fabricante tiene que cumplir criterios técnicos, de soporte y de valores. No buscamos la moda del momento: buscamos socios de largo plazo.
            </p>
          </motion.div>

          {/* Right - Cards con criterios */}
          <div className="space-y-4">
            {criterios.map((criterio, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-neutral-200/60 hover:-translate-y-1 hover:border-[#E94E1B]/40 transition-all duration-300 cursor-pointer group min-h-[100px] flex items-start"
              >
                <div className="flex items-start gap-4 w-full">
                  {/* Icono */}
                  <div 
                    className="size-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(233, 78, 27, 0.08)',
                      color: '#E94E1B'
                    }}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {criterio.icon}
                    </div>
                  </div>
                  
                  {/* Contenido texto */}
                  <div className="flex-1 pt-1">
                    <h3 
                      className="mb-2 leading-tight"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#282327'
                      }}
                    >
                      {criterio.title}
                    </h3>
                    <p 
                      className="leading-[1.65]"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#6B6B6B'
                      }}
                    >
                      {criterio.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function TrianguloValor() {
  const vertices = [
    {
      icon: <Building2 className="size-10" />,
      title: 'Tu organización',
      description: 'Compartís tu contexto, restricciones, procesos críticos y planes de crecimiento. Nuestra prioridad es que la tecnología acompañe a tu negocio, y no al revés.'
    },
    {
      icon: <Award className="size-10" />,
      title: 'Marcas líderes',
      description: 'Aportan innovación, calidad y soporte global. Diseñamos junto a ellas arquitecturas validadas para tu industria.'
    },
    {
      icon: <Users className="size-10" />,
      title: 'Trendit, partner B4B',
      description: 'Integramos todo: definimos el mix de marcas, coordinamos entregas, implementamos, documentamos y escalamos el soporte cuando hace falta.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-bold text-[#E94E1B] mb-3 uppercase tracking-wide">
            Cómo trabajamos juntos
          </div>
          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-6 leading-[1.15] tracking-tight">
            Un triángulo de valor: tu organización, las marcas y Trendit
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {vertices.map((vertice, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-neutral-200/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="size-16 rounded-2xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-6 mx-auto">
                {vertice.icon}
              </div>
              <h3 className="text-[19px] font-semibold text-[#282327] mb-4 text-center leading-tight">
                {vertice.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.7] text-center">
                {vertice.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[15px] text-neutral-500 italic"
        >
          Las marcas aportan la tecnología. Trendit la convierte en soluciones de negocio para tu organización.
        </motion.p>
      </div>
    </section>
  );
}

function ExploradorMarcas({ onOpenModal }: { onOpenModal: (areaIndex: number) => void }) {
  const [selectedArea, setSelectedArea] = React.useState(0);

  // Map brand names to their page routes (only brands with existing pages)
  const brandPages: Record<string, string> = {
    'Lenovo': 'marcas-partners/lenovo',
    'Cisco': 'marcas-partners/cisco',
    'Axis': 'marcas-partners/axis',
    'APC': 'marcas-partners/apc',
    'Eaton': 'marcas-partners/eaton',
    'Jabra': 'marcas-partners/jabra',
    'Zebra': 'marcas-partners/zebra',
    'Logitech': 'marcas-partners/logitech',
    'Samsung': 'marcas-partners/samsung',
    'Huawei': 'marcas-partners/huawei',
    'HPE': 'marcas-partners/hpe',
    'HPE (Aruba)': 'marcas-partners/hpe',
    'Aruba': 'marcas-partners/hpe'
  };

  const handleBrandClick = (brand: string) => {
    const route = brandPages[brand];
    if (route) {
      window.location.hash = route;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const areas = [
    {
      icon: <Server className="size-12" />,
      name: 'Data Center & Cloud',
      description: 'Servidores, hiperconvergencia, almacenamiento y virtualización para data centers on-premise, cloud e híbridos, preparados para cargas críticas y proyectos de IA.',
      bullets: [
        'Continuidad operativa y alta performance para aplicaciones de negocio, analítica e IA.',
        'Arquitecturas híbridas on-premise + nube con escalabilidad, seguridad y cumplimiento normativo.',
        'Optimización del TCO de la infraestructura: energía, espacio, licencias y mantenimiento.'
      ],
      brands: ['Lenovo', 'Dell', 'HPE', 'IBM', 'Microsoft', 'Intel', 'AMD', 'Nvidia', 'Kingston', 'Seagate', 'QNAP', 'Huawei', 'APC', 'Eaton', 'Red Hat', 'Veeam']
    },
    {
      icon: <Network className="size-12" />,
      name: 'Networking & Seguridad',
      description: 'Switching, routing, Wi-Fi enterprise, SD-WAN y ciberseguridad para conectar sedes, usuarios y cosas con la menor latencia y el máximo control.',
      bullets: [
        'Redes cableadas e inalámbricas de alto rendimiento para oficinas, plantas e infraestructuras híbridas.',
        'Conectividad segura entre sedes, nubes y usuarios remotos (SD-WAN / VPN / SASE).',
        'Protección del perímetro y del acceso a la red con firewalls, segmentación y políticas de seguridad.'
      ],
      brands: ['Cisco', 'HPE (Aruba)', 'Mikrotik', 'Ubiquiti', 'Fortinet', 'Huawei', 'Intel']
    },
    {
      icon: <Users className="size-12" />,
      name: 'Team Collaboration & Workspace',
      description: 'Espacios de trabajo digitales para equipos híbridos: salas de reunión, telefonía, dispositivos personales y herramientas de colaboración.',
      bullets: [
        'Salas de reunión y huddle rooms con audio y video profesionales, listas para Teams, Zoom o Webex.',
        'Puestos de trabajo modernos para usuarios de negocio, ingeniería y creatividad.',
        'Experiencias de colaboración simples, con menos fricción y más productividad.'
      ],
      brands: ['Microsoft', 'Cisco', 'Jabra', 'Logitech', 'Trust', 'Lenovo', 'Dell', 'HP', 'Samsung', 'Apple', 'Acer', 'Asus', 'MSI', 'Huawei']
    },
    {
      icon: <Video className="size-12" />,
      name: 'Video, Analítica, IoT & Cartelería Digital',
      description: 'Video seguridad, analítica de video, sensores IoT y cartelería digital para entender lo que pasa en tu operación y comunicar mejor en tiempo real.',
      bullets: [
        'Video seguridad para plantas, depósitos, retail y espacios públicos con registro confiable de eventos.',
        'Analítica de video e IoT para entender flujos, alarmas, producción y comportamiento en tiempo real.',
        'Cartelería digital y pantallas profesionales para comunicación interna, retail y experiencia de cliente.'
      ],
      brands: ['Hikvision', 'Axis', 'Dahua', 'QNAP', 'Samsung (displays/cartelería digital)', 'Fluke']
    },
    {
      icon: <Zap className="size-12" />,
      name: 'Energía & Infraestructura Crítica',
      description: 'UPS, distribución eléctrica y monitoreo para que tu data center, salas técnicas y pisos críticos sigan funcionando aunque todo lo demás se detenga.',
      bullets: [
        'Protección eléctrica para data centers, racks y salas críticas con UPS y baterías dimensionadas a medida.',
        'Distribución de energía segura con PDUs, tableros y monitoreo centralizado.',
        'Planificación de capacidad y continuidad operativa para evitar paradas por fallas de energía.'
      ],
      brands: ['APC', 'Eaton', 'Fluke']
    },
    {
      icon: <Laptop className="size-12" />,
      name: 'Dispositivos, Impresión & Edge',
      description: 'Equipos de usuario final, dispositivos de borde e impresión para logística y operación, integrados con tu infraestructura y aplicaciones de negocio.',
      bullets: [
        'Notebooks, desktops, all-in-one y workstations para todos los perfiles de usuario.',
        'Dispositivos de borde, handhelds y terminales para depósitos, puntos de venta y operación en campo.',
        'Impresoras de etiquetas, código de barras y documentos para logística, retail y backoffice.'
      ],
      brands: ['Lenovo', 'Dell', 'HP', 'Apple', 'Samsung', 'Acer', 'Asus', 'MSI', 'Intel', 'AMD', 'Nvidia', 'Kingston', 'Seagate', 'Zebra', 'Brother', 'Huawei', 'Thermaltake']
    },
    {
      icon: <TreeDeciduous className="size-12" />,
      name: 'Sostenibilidad & Triple Impacto',
      description: 'Tecnología pensada para reducir consumo energético, huella de carbono y residuos, integrando soluciones con el programa Reforestar y políticas ESG.',
      bullets: [
        'Selección de equipos más eficientes (Energy Star, gestión inteligente de energía y ciclo de vida).',
        'Proyectos de renovación tecnológica con reutilización, reciclado y compensación de huella de carbono.',
        'Integración con iniciativas de triple impacto como Reforestar para vincular la inversión IT con objetivos ESG.'
      ],
      brands: ['Lenovo', 'HPE', 'Dell', 'Microsoft', 'Nvidia', 'Intel', 'AMD']
    }
  ];

  const currentArea = areas[selectedArea];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white" id="explorador-marcas">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-bold text-[#E94E1B] mb-3 uppercase tracking-wide">
            Marcas por área de conocimiento
          </div>
          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-6 leading-[1.15] tracking-tight">
            Explorá nuestro ecosistema de partners
          </h2>
        </motion.div>

        {/* Desktop: Nav lateral + Card */}
        <div className="hidden lg:grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Nav vertical */}
          <div className="space-y-2">
            {areas.map((area, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedArea(idx)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`
                  w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-300 flex items-center gap-3
                  ${selectedArea === idx 
                    ? 'bg-[#E94E1B] border-[#E94E1B] text-white shadow-lg shadow-[#E94E1B]/20' 
                    : 'bg-white border-neutral-200 text-neutral-700 hover:border-[#E94E1B]/40 hover:bg-neutral-50'
                  }
                `}
                whileHover={{ x: selectedArea === idx ? 0 : 4 }}
              >
                <div className={`size-9 flex-shrink-0 flex items-center justify-center ${selectedArea === idx ? 'text-white' : 'text-[#E94E1B]'}`}>
                  {React.cloneElement(area.icon, { className: 'size-6' })}
                </div>
                <span className="text-[14px] font-semibold leading-tight">
                  {area.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Card de detalle */}
          <motion.div
            key={selectedArea}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white border border-neutral-200 rounded-[32px] p-10 shadow-xl"
          >
            {/* Header */}
            <div className="flex items-start gap-5 mb-8 pb-8 border-b border-neutral-200">
              <div className="size-20 rounded-2xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] flex-shrink-0">
                {currentArea.icon}
              </div>
              <div>
                <h3 className="text-[28px] font-semibold text-[#282327] mb-3 leading-tight">
                  {currentArea.name}
                </h3>
                <p className="text-[16px] text-neutral-600 leading-relaxed">
                  {currentArea.description}
                </p>
              </div>
            </div>

            {/* Qué resolvemos */}
            <div className="mb-8">
              <h4 className="text-[15px] font-bold text-[#E94E1B] uppercase tracking-wide mb-4">
                Qué resolvemos
              </h4>
              <div className="space-y-4">
                {currentArea.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <p className="text-[15px] text-neutral-700 leading-[1.7]">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marcas partner */}
            <div>
              <h4 
                className="text-[15px] uppercase tracking-wide mb-4"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700,
                  color: '#E94E1B'
                }}
              >
                Partners en esta área
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentArea.brands.map((brand, idx) => {
                  const hasPage = brandPages[brand];
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`px-5 py-2.5 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-full transition-all duration-200 ${
                        hasPage 
                          ? 'cursor-pointer hover:border-[#E94E1B]/50 hover:shadow-md hover:scale-105 focus-within:outline focus-within:outline-2 focus-within:outline-[#E94E1B] focus-within:outline-offset-2' 
                          : ''
                      }`}
                      onClick={hasPage ? () => handleBrandClick(brand) : undefined}
                      tabIndex={hasPage ? 0 : undefined}
                      role={hasPage ? 'button' : undefined}
                      onKeyDown={hasPage ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleBrandClick(brand);
                        }
                      } : undefined}
                    >
                      <span 
                        className="text-[14px]"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 500,
                          color: '#282327'
                        }}
                      >
                        {brand}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Tabs horizontales + Card */}
        <div className="block lg:hidden">
          <div className="flex gap-3 mb-8 overflow-x-auto pb-4 scrollbar-hide">
            {areas.map((area, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedArea(idx)}
                className={`
                  flex-shrink-0 px-4 py-3 rounded-2xl border-2 transition-all duration-300 min-w-[200px]
                  ${selectedArea === idx 
                    ? 'bg-[#E94E1B] border-[#E94E1B] text-white shadow-lg' 
                    : 'bg-white border-neutral-200 text-neutral-700'
                  }
                `}
              >
                <div className={`size-8 rounded-xl flex items-center justify-center mb-2 mx-auto ${selectedArea === idx ? 'bg-white/20 text-white' : 'bg-[#E94E1B]/10 text-[#E94E1B]'}`}>
                  {React.cloneElement(area.icon, { className: 'size-5' })}
                </div>
                <span className="text-[13px] font-semibold block text-center leading-tight">
                  {area.name}
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={selectedArea}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl"
          >
            <div className="text-center mb-6 pb-6 border-b border-neutral-200">
              <div className="size-16 rounded-2xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mx-auto mb-3">
                {React.cloneElement(currentArea.icon, { className: 'size-10' })}
              </div>
              <h3 className="text-[22px] font-semibold text-[#282327] mb-3 leading-tight">
                {currentArea.name}
              </h3>
              <p className="text-[14px] text-neutral-600 leading-relaxed">
                {currentArea.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-[13px] font-bold text-[#E94E1B] uppercase tracking-wide mb-3">
                Qué resolvemos
              </h4>
              <div className="space-y-3">
                {currentArea.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-[#E94E1B] flex-shrink-0 mt-0.5" />
                    <p className="text-[13px] text-neutral-700 leading-[1.7]">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[13px] font-bold text-[#E94E1B] uppercase tracking-wide mb-3">
                Partners en esta área
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentArea.brands.map((brand, idx) => {
                  const hasPage = brandPages[brand];
                  
                  return (
                    <div
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-br from-neutral-100 to-neutral-50 border border-neutral-200 rounded-xl text-[12px] font-medium text-neutral-700 transition-all duration-200 ${
                        hasPage 
                          ? 'cursor-pointer active:scale-95 hover:border-[#E94E1B]/50 hover:shadow-sm' 
                          : ''
                      }`}
                      onClick={hasPage ? () => handleBrandClick(brand) : undefined}
                      role={hasPage ? 'button' : undefined}
                      tabIndex={hasPage ? 0 : undefined}
                      onKeyDown={hasPage ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleBrandClick(brand);
                        }
                      } : undefined}
                    >
                      {brand}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
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

function DiferenciaMarketplaces() {
  const marketplaces = [
    'Precio de lista sin contexto de arquitectura',
    'Productos aislados, sin diseño ni integración',
    'Soporte genérico, sin conocer tu operación'
  ];

  const trendit = [
    'Arquitecturas pensadas para tu industria y procesos',
    'Condiciones B4B: negociación directa con fabricantes, garantías y programas especiales',
    'Acompañamiento de punta a punta: diseño, implementación, documentación y soporte',
    'Visión de largo plazo: ciclos de renovación, TCO y escalabilidad planificados'
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-sm font-bold text-[#E94E1B] mb-3 uppercase tracking-wide">
            Más allá de los marketplaces
          </div>
          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-8 leading-[1.15] tracking-tight">
            Mucho más que lo que se ve en un marketplace
          </h2>
          <p className="text-[17px] text-neutral-600 leading-[1.7] max-w-3xl mx-auto">
            Sabemos que hoy podés comprar tecnología en canales como MercadoLibre, Amazon u otros marketplaces. Para compras puntuales sirven. Pero cuando se trata de infraestructura crítica, lo que necesitás no es un carrito: es un partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Marketplaces */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-neutral-200 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-400">
                <Boxes className="size-7" />
              </div>
              <h3 className="text-[20px] font-semibold text-neutral-600">
                Marketplaces
              </h3>
            </div>

            <div className="space-y-4">
              {marketplaces.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <X className="size-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                  <p className="text-[15px] text-neutral-600 leading-[1.7]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trendit + Partners */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#E94E1B]/5 to-[#E94E1B]/10 border-2 border-[#E94E1B]/30 rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-12 rounded-xl bg-[#E94E1B] flex items-center justify-center text-white">
                <Award className="size-7" />
              </div>
              <h3 className="text-[20px] font-semibold text-[#282327]">
                Trendit + Marcas partners
              </h3>
            </div>

            <div className="space-y-4">
              {trendit.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[15px] text-neutral-700 leading-[1.7]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SostenibilidadMarcas() {
  const impactos = [
    {
      icon: <Zap className="size-8" />,
      text: 'Eficiencia energética y arquitecturas más eficientes'
    },
    {
      icon: <TreeDeciduous className="size-8" />,
      text: 'Proyectos que suman árboles nativos junto a Reforestar'
    },
    {
      icon: <Leaf className="size-8" />,
      text: 'Educación ambiental y responsabilidad social compartida'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-green-50 via-green-50/50 to-white relative overflow-hidden">
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-green-500 rounded-full blur-[140px] opacity-[0.12]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-sm font-bold text-green-700 mb-3 uppercase tracking-wide">
            Triple impacto
          </div>
          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-8 leading-[1.15] tracking-tight">
            Tecnología que suma valor al negocio y al entorno
          </h2>
          <p className="text-[17px] text-neutral-700 leading-[1.7] max-w-3xl mx-auto">
            Elegimos trabajar con marcas que entienden que el futuro es digital, pero también responsable. Priorizamos fabricantes que invierten en eficiencia energética, diseño responsable de productos y programas verdes, y que se suman a nuestro programa Reforestar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {impactos.map((impacto, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.4 }}
              className="bg-white border border-green-200 rounded-2xl p-8 text-center hover:shadow-lg hover:border-green-400 transition-all duration-300"
            >
              <div className="size-14 rounded-xl bg-green-600/10 flex items-center justify-center text-green-600 mx-auto mb-4">
                {impacto.icon}
              </div>
              <p className="text-[15px] font-semibold text-[#282327] leading-[1.6]">
                {impacto.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            Conocé más sobre Reforestar
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function CTAFinalMarcas({ onOpenModal }: { onOpenModal: () => void }) {
  const handleWhatsApp = () => {
    const message = "Hola Trendit 👋 Quiero consultar por Marcas & Partners. ¿Me ayudan a definir el mejor stack de marcas por área?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#1a1618] rounded-[40px] p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Radial gradient overlay */}
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
            <h2 className="text-[40px] lg:text-[48px] text-white mb-6 leading-[1.1] tracking-tight">
              ¿Revisamos juntos tu stack de marcas y tecnologías?
            </h2>
            
            <p className="text-[19px] text-white/80 mb-10 leading-[1.6]">
              Te ayudamos a alinear tu ecosistema de fabricantes con la realidad de tu negocio, tus procesos críticos y tus objetivos de crecimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-10 group shadow-lg shadow-[#E94E1B]/30"
                onClick={onOpenModal}
              >
                Agendar una conversación
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white hover:bg-neutral-50 text-[#2B2B2B] border border-neutral-200 shadow-sm px-10 group"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 size-5" />
                Escribirnos por WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
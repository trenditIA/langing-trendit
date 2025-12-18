import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Server,
  Network,
  Target,
  Users,
  Shield,
  TrendingUp,
  CheckCircle2,
  TreeDeciduous,
  MessageCircle,
  Zap,
  Layers,
  FileText,
  Lightbulb,
  Heart,
  Sprout,
  GraduationCap,
  Award,
  Handshake,
  Factory,
  Building2,
  Briefcase
} from 'lucide-react';
import { Button } from '../ui/button';
import React from 'react';
import { AgendarReunionModal } from './AgendarReunionModal';

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'pilar-1', label: 'Pilar 1' },
  { id: 'pilar-2', label: 'Pilar 2' },
  { id: 'pilar-3', label: 'Pilar 3' },
  { id: 'metodo', label: 'Método' },
  { id: 'por-que-trendit', label: '¿Por qué Trendit?' },
  { id: 'cta', label: 'CTA' }
];

export function Nosotros() {
  const [activeSection, setActiveSection] = React.useState('hero');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      const current = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white relative">
      {/* Side Navigation - Desktop */}
      <div className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-3 transition-all duration-300"
            >
              <span
                className={`text-xs font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'opacity-100 text-[#E94E1B]'
                    : 'opacity-0 group-hover:opacity-100 text-neutral-600'
                }`}
              >
                {section.label}
              </span>
              <div
                className={`size-2.5 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-[#E94E1B] scale-125'
                    : 'bg-neutral-300 group-hover:bg-neutral-400'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation - Horizontal scroll chips */}
      <div className="xl:hidden sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-neutral-200 px-6 py-3 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-[#E94E1B] text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <HeroCentral scrollToSection={scrollToSection} onOpenModal={() => setIsModalOpen(true)} />
      <Pilar1Equipos />
      <Pilar2Proposito />
      <Pilar3ValoresB4B />
      <ComoTrabajamos />
      <PorQueElegirTrendit onOpenModal={() => setIsModalOpen(true)} />
      <CTAFinal onOpenModal={() => setIsModalOpen(true)} />
      
      <AgendarReunionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function HeroCentral({ scrollToSection, onOpenModal }: { scrollToSection: (id: string) => void, onOpenModal: () => void }) {
  const pillarCards = [
    {
      id: 'pilar-1',
      title: 'Equipos que aprenden y se mueven rápido',
      description: 'Capacitamos y certificamos a nuestro equipo de forma continua. Trabajamos en células ágiles y multidisciplinarias que se hacen cargo de principio a fin de cada proyecto.',
      icon: <Users className="size-7" />
    },
    {
      id: 'pilar-2',
      title: 'Tecnología con propósito e innovación',
      description: 'Diseñamos infraestructuras más eficientes y, con el programa Reforestar, sumamos impacto positivo plantando especies nativas y educando sobre tecnología sustentable.',
      icon: <Lightbulb className="size-7" />
    },
    {
      id: 'pilar-3',
      title: 'Cultura Trendit',
      description: 'Una forma de trabajar basada en confianza, transparencia y relaciones B4B de largo plazo. Combinamos tecnología, negocio y sostenibilidad para que cada proyecto deje resultados medibles y una huella positiva.',
      icon: <Handshake className="size-7" />
    }
  ];

  const handleWhatsApp = () => {
    const message = "Hola Trendit 👋 Vengo desde Quiénes Somos. Quisiera coordinar una reunión / consulta. Área: [Infraestructura IT / Redes / Videoseguridad / Energía / Team Collaboration / Microinformática]. Empresa: ____. Ciudad: ____. Gracias.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-24 px-4 sm:px-6"
      style={{
        background: 'linear-gradient(180deg, #FFF9F5 0%, #FFE8DB 50%, #FFF4EB 100%)'
      }}
    >
      {/* Subtle network pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, #E94E1B 1px, transparent 1px),
                         radial-gradient(circle at 80% 70%, #E94E1B 1px, transparent 1px),
                         radial-gradient(circle at 40% 80%, #E94E1B 1px, transparent 1px)`,
        backgroundSize: '100px 100px, 150px 150px, 120px 120px'
      }}/>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        {/* Text block - CENTERED */}
        <div className="max-w-[850px] mx-auto mb-20 text-center">
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs uppercase font-semibold tracking-wide"
            style={{
              color: '#E94E1B',
              background: 'rgba(255, 255, 255, 0.7)',
              boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.9), 0 4px 16px rgba(233, 78, 27, 0.12)'
            }}
          >
            Desde 2016
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[68px] leading-[1.08] text-[#282327] mb-8 tracking-tight"
            style={{ maxWidth: '70ch', margin: '0 auto 2rem' }}
          >
            Somos la tribu tecnológica<br />
            detrás de tu infraestructura
          </motion.h1>

          {/* Subheading paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-neutral-700 leading-[1.7] mb-10"
            style={{ maxWidth: '70ch', margin: '0 auto 2.5rem' }}
          >
            <p>
              Trabajamos en equipos pequeños que se meten en tu operación, escuchan a tu gente y hablan el lenguaje del negocio. Mezclamos ingeniería, proyectos y soporte para que tu infraestructura funcione todos los días y pueda incorporar nuevas tecnologías sin frenar la operación.
            </p>
            <p className="text-neutral-600">
              De la planta al data center y de la sala de reuniones al campus, acompañamos a organizaciones que no pueden darse el lujo de que la infraestructura falle.
            </p>
          </motion.div>

          {/* CTAs - CENTERED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
          >
            <Button 
              size="lg"
              onClick={onOpenModal}
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              style={{
                borderRadius: '12px',
                padding: '16px 32px',
                boxShadow: '0 8px 24px rgba(233, 78, 27, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
              }}
            >
              Agendá una reunión
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleWhatsApp}
              className="border-2 border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B]/5 px-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              style={{
                borderRadius: '12px',
                padding: '16px 32px',
                background: 'rgba(255, 255, 255, 0.6)'
              }}
            >
              <MessageCircle className="mr-2 size-5" />
              Escribinos por WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Section title for pillar cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-[14px] tracking-[0.15em] uppercase text-[#E94E1B] font-semibold">
            Nuestros tres pilares
          </h2>
        </motion.div>

        {/* Three pillar cards - claymorphism style - Horizontal on desktop */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
          {pillarCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.15 }}
              onClick={() => scrollToSection(card.id)}
              className="cursor-pointer group relative"
              style={{
                borderRadius: '28px',
                padding: '32px 28px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 250, 245, 0.85) 100%)',
                boxShadow: '0 8px 24px rgba(40, 35, 39, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(233, 78, 27, 0.18), inset 0 2px 4px rgba(255, 255, 255, 0.95), 0 0 0 2px rgba(233, 78, 27, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(40, 35, 39, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.9)';
              }}
            >
              {/* Icon circle */}
              <div 
                className="size-14 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
                  boxShadow: '0 4px 12px rgba(233, 78, 27, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.5)',
                  color: '#E94E1B'
                }}
              >
                {card.icon}
              </div>

              <h3 className="text-[18px] md:text-[19px] font-semibold text-[#282327] mb-3 leading-tight">
                {card.title}
              </h3>

              <p className="text-[14px] md:text-[15px] text-neutral-600 leading-[1.65]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollToSection('pilar-1')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">
          Seguí conociendo Trendit
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-neutral-400 group-hover:text-[#E94E1B] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Pilar1Equipos() {
  const miniCards = [
    {
      icon: <GraduationCap className="size-6" />,
      title: 'Capacitación y certificaciones',
      text: 'Programas de formación continua, certificaciones con marcas líderes y entrenamiento cruzado entre áreas para hablar el mismo idioma técnico.'
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: 'Mejora continua desde 2016',
      text: 'Documentamos lecciones aprendidas en cada proyecto y las usamos como insumo para el siguiente. Lo que aprendemos con un cliente, mejora la experiencia del que viene.'
    },
    {
      icon: <Zap className="size-6" />,
      title: 'Trabajo ágil y cercano',
      text: 'Equipos chicos, canales directos y decisiones rápidas. Nos sentamos con IT, operaciones y negocio para alinear prioridades y tiempos reales.'
    }
  ];

  return (
    <section 
      id="pilar-1"
      className="py-24 px-6 lg:px-12 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[11px] tracking-[0.15em] uppercase text-[#E94E1B] font-semibold mb-4">
              Pilar 1 · Equipos
            </div>
            
            <h2 className="text-[38px] lg:text-[44px] text-[#282327] mb-8 leading-[1.1] tracking-tight">
              Equipos multidisciplinarios que nunca dejan de aprender
            </h2>
            
            <div className="space-y-5 text-[16px] md:text-[17px] text-neutral-600 leading-[1.7]">
              <p>
                En Trendit el producto principal es nuestro equipo. Invertimos en capacitación, certificaciones con fabricantes y aprendizaje en cada proyecto. Trabajamos en células chicas donde conviven redes, data center, seguridad, energía y soporte, coordinadas por project managers que entienden el negocio del cliente.
              </p>
              <p>
                Así podemos movernos rápido, sin perder la prolijidad que requiere una infraestructura crítica.
              </p>
            </div>
          </motion.div>

          {/* Right - Mini cards */}
          <div className="space-y-5">
            {miniCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group"
                style={{
                  borderRadius: '20px',
                  padding: '24px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 250, 245, 0.7) 100%)',
                  boxShadow: '0 4px 16px rgba(40, 35, 39, 0.06), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(233, 78, 27, 0.08)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(233, 78, 27, 0.12), inset 0 2px 4px rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(40, 35, 39, 0.06), inset 0 2px 4px rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="size-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
                      boxShadow: '0 3px 10px rgba(233, 78, 27, 0.15)',
                      color: '#E94E1B'
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#282327] mb-2 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-neutral-600 leading-[1.6]">
                      {card.text}
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

function Pilar2Proposito() {
  const miniCards = [
    {
      icon: <Layers className="size-6" />,
      title: 'Innovación aplicada al negocio',
      text: 'Diseñamos arquitecturas modernas de red, cómputo y seguridad que bajan el TCO, mejoran la productividad y preparan a las organizaciones para la inteligencia artificial.'
    },
    {
      icon: <TreeDeciduous className="size-6" />,
      title: 'Programa Reforestar',
      text: 'Producimos especies nativas, plantamos junto a escuelas, ONGs, municipios y empresas, y vinculamos cada proyecto de infraestructura con una acción positiva en el entorno.'
    },
    {
      icon: <Target className="size-6" />,
      title: 'Misión y visión en acción',
      text: 'Nuestra misión es formar un equipo humano apasionado, creativo y emprendedor que lleve innovación tecnológica a los negocios. Nuestra visión: liderar soluciones que mejoren procesos, infraestructura y tecnología verde en la región.'
    }
  ];

  return (
    <section 
      id="pilar-2"
      className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[11px] tracking-[0.15em] uppercase text-[#E94E1B] font-semibold mb-4">
              Pilar 2 · Propósito e innovación
            </div>
            
            <h2 className="text-[38px] lg:text-[44px] text-[#282327] mb-8 leading-[1.1] tracking-tight">
              Innovar sin perder de vista el impacto
            </h2>
            
            <div className="space-y-5 text-[16px] md:text-[17px] text-neutral-600 leading-[1.7]">
              <p>
                El crecimiento del tráfico de datos, los centros de datos de IA y la fabricación de tecnología consumen cada vez más energía y recursos. Creemos que la infraestructura debe evolucionar hacia modelos más eficientes y responsables.
              </p>
              <p>
                Por eso combinamos innovación tecnológica con un compromiso concreto: Reforestar, nuestro programa de triple impacto con vivero propio de especies nativas en Córdoba.
              </p>
            </div>
          </motion.div>

          {/* Right - Mini cards */}
          <div className="space-y-5">
            {miniCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group"
                style={{
                  borderRadius: '20px',
                  padding: '24px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 250, 245, 0.7) 100%)',
                  boxShadow: '0 4px 16px rgba(40, 35, 39, 0.06), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(233, 78, 27, 0.08)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(233, 78, 27, 0.12), inset 0 2px 4px rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(40, 35, 39, 0.06), inset 0 2px 4px rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="size-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
                      boxShadow: '0 3px 10px rgba(233, 78, 27, 0.15)',
                      color: '#E94E1B'
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#282327] mb-2 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-neutral-600 leading-[1.6]">
                      {card.text}
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

function Pilar3ValoresB4B() {
  const valores = [
    {
      icon: <Heart className="size-6" />,
      title: 'Cercanía y transparencia',
      text: 'Hablamos claro de riesgos, plazos y presupuestos. Preferimos conversaciones honestas antes que promesas imposibles.'
    },
    {
      icon: <Shield className="size-6" />,
      title: 'Responsabilidad en lo crítico',
      text: 'Sabemos que lo que hacemos impacta en producción, servicios y personas. Tratamos tu infraestructura como si fuera propia.'
    },
    {
      icon: <TrendingUp className="size-6" />,
      title: 'Aprendizaje y mejora continua',
      text: 'Cada proyecto deja aprendizajes que documentamos y llevamos al siguiente. Iteramos procesos y estándares para no quedarnos quietos.'
    },
    {
      icon: <TreeDeciduous className="size-6" />,
      title: 'Impacto positivo y Reforestar',
      text: 'La sostenibilidad es parte de la cultura, no un extra. Con Reforestar vinculamos proyectos de infraestructura con especies nativas, educación ambiental y triple impacto.'
    }
  ];

  return (
    <section 
      id="pilar-3"
      className="py-24 px-6 lg:px-12 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <div className="text-[11px] tracking-[0.15em] uppercase text-[#E94E1B] font-semibold mb-4">
            Pilar 3 · Cultura Trendit
          </div>
          
          <h2 className="text-[38px] lg:text-[44px] text-[#282327] mb-8 leading-[1.1] tracking-tight">
            Nuestra cultura: B4B, valores y sostenibilidad en acción
          </h2>
          
          <div className="space-y-5 text-[16px] md:text-[17px] text-neutral-600 leading-[1.7]">
            <p>
              En Trendit no solo importa lo que hacemos, sino cómo lo hacemos. Construimos una cultura donde la relación B4B, los valores y la mirada sustentable se cruzan en cada decisión: desde la elección de fabricantes hasta la forma en que acompañamos a tus equipos.
            </p>
            <p>
              Buscamos relaciones de largo plazo, basadas en confianza, resultados y coherencia entre la tecnología que integramos y el impacto que generamos en el entorno.
            </p>
          </div>
        </motion.div>

        {/* 4 valores cards - 2x2 on tablet, 4 columns on desktop, vertical on mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((valor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group"
              style={{
                borderRadius: '24px',
                padding: '28px 24px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 250, 245, 0.8) 100%)',
                boxShadow: '0 6px 20px rgba(40, 35, 39, 0.07), inset 0 2px 4px rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(233, 78, 27, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(233, 78, 27, 0.14), inset 0 2px 4px rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(40, 35, 39, 0.07), inset 0 2px 4px rgba(255, 255, 255, 0.85)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="size-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
                  boxShadow: '0 3px 10px rgba(233, 78, 27, 0.2)',
                  color: '#E94E1B'
                }}
              >
                {valor.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-[#282327] mb-3 leading-tight">
                {valor.title}
              </h3>
              <p className="text-[13px] text-neutral-600 leading-[1.6]">
                {valor.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoTrabajamos() {
  const steps = [
    {
      number: 1,
      icon: <Target className="size-6" />,
      title: 'Diagnóstico en contexto',
      text: 'Empezamos entendiendo tu operación: procesos críticos, sitios, regulaciones, presupuestos y restricciones. No proponemos tecnología sin entender el negocio.'
    },
    {
      number: 2,
      icon: <FileText className="size-6" />,
      title: 'Arquitectura y roadmap',
      text: 'Definimos arquitecturas de red, cómputo, seguridad y energía, y las ordenamos en un roadmap por etapas que equilibra performance, resiliencia y costo total de propiedad.'
    },
    {
      number: 3,
      icon: <Zap className="size-6" />,
      title: 'Implementación y documentación',
      text: 'Coordinamos equipos, proveedores y plazos. Documentamos cada etapa para dejar un entorno ordenado, trazable y fácil de operar.'
    },
    {
      number: 4,
      icon: <TrendingUp className="size-6" />,
      title: 'Operación y evolución continua',
      text: 'Una vez en marcha, medimos, ajustamos y seguimos acompañando. Revisamos capacidad, performance, incidentes y nuevas necesidades para evolucionar la infraestructura en el tiempo.'
    }
  ];

  return (
    <section 
      id="metodo"
      className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white"
    >
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[38px] lg:text-[44px] text-[#282327] mb-6 leading-[1.1] tracking-tight">
            Cómo trabajamos cuando la infraestructura importa
          </h2>
        </motion.div>

        {/* 4 steps - horizontal on desktop, 2x2 on tablet, vertical on mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B]">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#E94E1B]">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-[16px] font-semibold text-[#282327] mb-3 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-[14px] text-neutral-600 leading-[1.6]">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PorQueElegirTrendit({ onOpenModal }: { onOpenModal: () => void }) {
  const reasons = [
    {
      icon: <Factory className="size-7" />,
      title: '10 años en industrias críticas',
      text: 'Más de 700 proyectos en manufactura, educación, salud, finanzas, retail, sector público y energía. Trabajamos donde la infraestructura no puede fallar.'
    },
    {
      icon: <Award className="size-7" />,
      title: 'Ecosistema de marcas líderes',
      text: 'Seleccionamos fabricantes con foco en innovación, calidad y soporte local, y los combinamos según tus objetivos de tiempo, alcance y presupuesto.'
    },
    {
      icon: <Briefcase className="size-7" />,
      title: 'Acompañamiento de punta a punta',
      text: 'Desde el assessment inicial hasta el soporte post-implementación, el mismo equipo te acompaña para evitar quiebres entre etapas y dejar todo documentado.'
    },
    {
      icon: <TreeDeciduous className="size-7" />,
      title: 'Tecnología con propósito',
      text: 'Con Reforestar vinculamos proyectos de infraestructura con especies nativas, educación ambiental y acciones de triple impacto en las comunidades donde operamos.'
    }
  ];

  const handleContactClick = () => {
    const message = "Hola Trendit 👋 Vengo desde Quiénes Somos. Quisiera coordinar una reunión / consulta. Área: [Infraestructura IT / Redes / Videoseguridad / Energía / Team Collaboration / Microinformática]. Empresa: ____. Ciudad: ____. Gracias.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
  };

  return (
    <section 
      id="por-que-trendit"
      className="py-24 px-4 sm:px-6 lg:px-12 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[12px] tracking-[0.12em] uppercase text-neutral-500 font-medium mb-3">
            10 años integrando infraestructura IT crítica en Argentina.
          </p>
          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] text-[#282327] mb-6 leading-[1.1] tracking-tight">
            ¿Por qué elegir Trendit?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group"
              style={{
                borderRadius: '28px',
                padding: '32px 26px',
                background: 'linear-gradient(135deg, #FFF7F0 0%, #FFFAF5 100%)',
                boxShadow: '0 8px 20px rgba(40, 35, 39, 0.08), inset 0 2px 6px rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(233, 78, 27, 0.08)',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(233, 78, 27, 0.14), inset 0 2px 8px rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(40, 35, 39, 0.08), inset 0 2px 6px rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="size-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
                  boxShadow: '0 4px 14px rgba(233, 78, 27, 0.22), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
                  color: '#E94E1B'
                }}
              >
                {reason.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-[#282327] mb-3 leading-tight">
                {reason.title}
              </h3>
              <p className="text-[14px] text-neutral-600 leading-[1.6]">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Button 
            size="lg"
            onClick={handleContactClick}
            className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            style={{
              borderRadius: '12px',
              padding: '16px 32px',
              boxShadow: '0 8px 24px rgba(233, 78, 27, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
            }}
          >
            Quiero hablar con Trendit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function CTAFinal({ onOpenModal }: { onOpenModal: () => void }) {
  const handleWhatsApp = () => {
    const message = "Hola Trendit 👋 Vengo desde Quiénes Somos. Quisiera coordinar una reunión / consulta. Área: [Infraestructura IT / Redes / Videoseguridad / Energía / Team Collaboration / Microinformática]. Empresa: ____. Ciudad: ____. Gracias.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
  };

  return (
    <section 
      id="cta"
      className="py-20 px-4 sm:px-6 lg:px-12"
      style={{
        background: 'linear-gradient(135deg, #FFE8DB 0%, #FFD4BA 50%, #FFE8DB 100%)'
      }}
    >
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] text-[#282327] mb-5 md:mb-6 leading-[1.15] tracking-tight">
            ¿Hablamos de la infraestructura que viene para tu organización?
          </h2>
          
          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-neutral-700 leading-[1.7] mb-8 md:mb-10 max-w-3xl mx-auto">
            Si estás planificando un proyecto de red, data center, videoseguridad, energía o colaboración, podemos ayudarte a diseñarlo, implementarlo y sostenerlo con una mirada B4B.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={onOpenModal}
              className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              style={{
                borderRadius: '12px',
                padding: '16px 32px',
                boxShadow: '0 8px 24px rgba(233, 78, 27, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
              }}
            >
              Agendá una reunión con nuestro equipo
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleWhatsApp}
              className="border-2 border-[#E94E1B] text-[#E94E1B] hover:bg-[#E94E1B]/10 px-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              style={{
                borderRadius: '12px',
                padding: '16px 32px',
                background: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              <MessageCircle className="mr-2 size-5" />
              Escribinos por WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
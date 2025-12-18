import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  Zap,
  Droplet,
  Cpu,
  Mountain,
  TreeDeciduous,
  Sprout,
  Users,
  GraduationCap,
  HandHeart,
  Building2,
  Leaf,
  Shield,
  TrendingUp,
  Target,
  FileText,
  Globe,
  BarChart3,
  CheckCircle2,
  Wind,
  MessageCircle
} from 'lucide-react';
import { Button } from '../ui/button';

export function ReforestarPage() {
  return (
    <div className="bg-white">
      <HeroReforestar />
      <DataChipsSection />
      <CaraOcultaNube />
      <MineralesCriticos />
      <QueEsReforestar />
      <EspeciesNativas />
      <ComoFunciona />
      <Colaboraciones />
      <CTAFinalReforestar />
    </div>
  );
}

function HeroReforestar() {
  return (
    <section className="relative bg-gradient-to-b from-white via-green-50/30 to-white pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiMxNmExMzQiLz48L2c+PC9zdmc+')] bg-repeat" />
      </div>
      
      {/* Subtle radial gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-500/8 via-green-500/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Centered content container */}
      <div className="max-w-[760px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.1] text-[#282327] mb-6 tracking-tight">
            Tecnología que reforesta el futuro
          </h1>

          <p className="text-[17px] md:text-[18px] text-neutral-700 mb-5 leading-[1.6] font-light">
            Mientras la IA y los centros de datos disparan el consumo de energía, agua y minerales, Reforestar transforma tus proyectos tecnológicos en bosques nativos que regeneran el entorno.
          </p>

          <p className="text-[16px] text-neutral-600 mb-9 leading-[1.7]">
            Reforestar es el programa de triple impacto creado por Trendit: un vivero de especies nativas, proyectos de reforestación y educación ambiental que conectan la infraestructura IT con el cuidado del territorio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 group shadow-lg shadow-green-600/20 w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/5493516714007?text=Hola%2C%20quiero%20sumar%20mi%20proyecto%20a%20Reforestar%20y%20conocer%20m%C3%A1s%20sobre%20el%20programa%20de%20triple%20impacto.', '_blank')}
            >
              Quiero sumar mi proyecto a Reforestar
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById('como-funciona');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Conocer cómo funciona
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DataChipsSection() {
  const chips = [
    {
      icon: <Zap className="size-6" />,
      title: 'Centros de datos',
      text: 'Consumen una porción creciente de la energía global.'
    },
    {
      icon: <Droplet className="size-6" />,
      title: 'IA y agua',
      text: 'Los modelos de IA requieren grandes volúmenes de agua para refrigeración.'
    },
    {
      icon: <Mountain className="size-6" />,
      title: 'Minerales críticos',
      text: 'Litio y tierras raras conectan la nube con los territorios.'
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {chips.map((chip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg hover:border-neutral-300 transition-all duration-300"
            >
              <div className="size-12 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-4">
                {chip.icon}
              </div>
              <h3 className="font-semibold text-[15px] text-[#282327] mb-2">
                {chip.title}
              </h3>
              <p className="text-[13px] text-neutral-600 leading-[1.6]">
                {chip.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaraOcultaNube() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm font-bold text-[#E94E1B] mb-3 uppercase tracking-wide">
              Impacto digital
            </div>
            <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-6 leading-[1.15] tracking-tight">
              La nube no es liviana: energía y agua para un mundo lleno de datos
            </h2>

            <div className="space-y-6 text-[17px] text-neutral-600 leading-[1.7]">
              <p>
                Cada consulta de IA, cada backup y cada cámara conectada termina en algún centro de datos. Hoy, los data centers y las redes de datos ya representan una parte significativa del consumo eléctrico mundial, y su demanda sigue creciendo a medida que las organizaciones digitalizan procesos y adoptan inteligencia artificial.
              </p>
              <p>
                La IA acelera todavía más esta curva: entrenar y operar modelos grandes requiere más cómputo, más refrigeración y, en muchos casos, más agua. Si no diseñamos infraestructuras eficientes, la huella de carbono y el estrés hídrico crecen más rápido que los beneficios del negocio.
              </p>
            </div>
          </motion.div>

          {/* Right - Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-neutral-100 to-white border border-neutral-200 rounded-3xl p-10 shadow-xl"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="size-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-600 flex-shrink-0">
                  <Zap className="size-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-[#282327] mb-2">
                    Energía creciente
                  </h3>
                  <p className="text-[14px] text-neutral-600 leading-[1.6]">
                    Los centros de datos consumen electricidad 24/7 para procesar, almacenar y refrigerar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Droplet className="size-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-[#282327] mb-2">
                    Agua en riesgo
                  </h3>
                  <p className="text-[14px] text-neutral-600 leading-[1.6]">
                    El enfriamiento de servidores puede requerir millones de litros por año.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200">
              <p className="text-[14px] text-neutral-500 italic text-center leading-[1.6]">
                "La transformación digital es necesaria. El desafío es hacerla responsable."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MineralesCriticos() {
  const impactos = [
    {
      title: 'Litio y agua en zonas frágiles',
      description: 'Buena parte del litio usado en baterías proviene de salares donde el agua es un recurso crítico. La extracción intensiva impacta en acuíferos y humedales, afectando a comunidades locales y a la fauna.'
    },
    {
      title: 'Tierras raras y suelos contaminados',
      description: 'El procesamiento de tierras raras puede generar relaves y lagunas con residuos tóxicos. Sin controles adecuados, el costo real se paga en salud y biodiversidad.'
    },
    {
      title: 'Comunidades en primera línea',
      description: 'Muchas operaciones mineras se superponen con territorios indígenas, pequeños productores y áreas de alta biodiversidad. Allí se concentra el costo ambiental de nuestra "nube" global.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-sm font-bold text-[#E94E1B] mb-3 uppercase tracking-wide">
            Cadena de valor
          </div>
          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-8 leading-[1.15] tracking-tight">
            Del salar al servidor: litio, tierras raras y comunidades
          </h2>
          <p className="text-[17px] text-neutral-600 leading-[1.7] max-w-3xl mx-auto">
            Cada servidor, notebook o sistema de respaldo lleva detrás litio, cobre y tierras raras extraídas en territorios concretos. La transición tecnológica y energética no es neutra: genera presión sobre ecosistemas y comunidades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {impactos.map((impacto, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.4 }}
              className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg hover:border-neutral-300 transition-all duration-300"
            >
              <h3 className="text-[17px] font-semibold text-[#282327] mb-4 leading-tight">
                {impacto.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.7]">
                {impacto.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#E94E1B]/5 to-[#E94E1B]/10 border-l-4 border-[#E94E1B] rounded-2xl p-8 text-center"
        >
          <p className="text-[18px] text-[#282327] leading-[1.6] italic">
            "No se trata de dejar de usar tecnología, sino de asumir que cada decisión técnica también es una decisión sobre el territorio."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function QueEsReforestar() {
  const pilares = [
    {
      icon: <Sprout className="size-10" />,
      title: 'Vivero de nativas con riego automatizado',
      description: 'Producimos plantas nativas en nuestro propio vivero, con sistemas de riego automatizado y manejo responsable, para garantizar calidad y continuidad en las reforestaciones.'
    },
    {
      icon: <TreeDeciduous className="size-10" />,
      title: 'Reforestación con foco local',
      description: 'Trabajamos en Córdoba y la región, fortaleciendo bosques nativos y recuperando áreas degradadas con especies que pertenecen al paisaje original.'
    },
    {
      icon: <GraduationCap className="size-10" />,
      title: 'Educación y conciencia',
      description: 'Cada jornada de plantación es también un espacio de aprendizaje: hablamos de huella digital, de bosque nativo y de por qué necesitamos cambiar la forma en que nos relacionamos con la tecnología.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-sm font-bold text-green-600 mb-3 uppercase tracking-wide">
            Nuestra respuesta
          </div>
          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-8 leading-[1.15] tracking-tight">
            Reforestar: la respuesta de Trendit a esta huella digital
          </h2>
          <p className="text-[17px] text-neutral-600 leading-[1.7]">
            En Trendit diseñamos infraestructuras IT para que las organizaciones sean más competitivas. Pero también sabemos que cada rack, cada cámara y cada enlace de fibra tiene un impacto ambiental. Reforestar es nuestro programa de triple impacto: un vivero de especies nativas, proyectos de reforestación y educación ambiental que conectan la tecnología con el cuidado del territorio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pilares.map((pilar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-green-100 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="size-16 rounded-2xl bg-green-600/10 flex items-center justify-center text-green-600 mb-6 mx-auto">
                {pilar.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#282327] mb-4 text-center leading-tight">
                {pilar.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.7] text-center">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EspeciesNativas() {
  const beneficios = [
    {
      icon: <Shield className="size-7" />,
      title: 'Mejor adaptadas al clima local',
      description: 'Resisten mejor sequías, heladas y condiciones propias de la región, con menor necesidad de riego y mantenimiento.'
    },
    {
      icon: <TrendingUp className="size-7" />,
      title: 'Raíces y suelos más sanos',
      description: 'Sus sistemas de raíces estabilizan el suelo sin dañar infraestructuras urbanas y ayudan a recuperar funciones ecológicas del bosque nativo.'
    },
    {
      icon: <Wind className="size-7" />,
      title: 'Más biodiversidad',
      description: 'Ofrecen alimento y refugio a aves, insectos y fauna local, fortaleciendo cadenas ecológicas que los árboles exóticos no sostienen igual.'
    },
    {
      icon: <Target className="size-7" />,
      title: 'Menos riesgo de invasión',
      description: 'A diferencia de especies exóticas de crecimiento rápido, las nativas no desplazan al resto del ecosistema ni aumentan el riesgo de incendios de forma descontrolada.'
    },
    {
      icon: <Globe className="size-7" />,
      title: 'Valor cultural e histórico',
      description: 'Son parte del paisaje, de la memoria y de las historias de las comunidades locales.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-green-50 via-green-50/50 to-white relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-green-500 rounded-full blur-[140px] opacity-[0.12]"
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

      <div className="max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="text-sm font-bold text-green-700 mb-3 uppercase tracking-wide">
            Especies nativas
          </div>
          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-8 leading-[1.15] tracking-tight">
            No cualquier árbol: especies nativas que regeneran el bosque
          </h2>
          <p className="text-[17px] text-neutral-700 leading-[1.7] max-w-3xl mx-auto">
            Reforestar trabaja exclusivamente con especies autóctonas de la región: algarrobos, espinillos, molles, chañares y otros árboles nativos que forman parte de la identidad y la biodiversidad de Córdoba.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {beneficios.map((beneficio, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="bg-white border border-green-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-400 transition-all duration-300 flex items-start gap-4"
            >
              <div className="size-12 rounded-xl bg-green-600/10 flex items-center justify-center text-green-600 flex-shrink-0">
                {beneficio.icon}
              </div>
              <div>
                <h3 className="font-semibold text-[15px] text-[#282327] mb-2 leading-tight">
                  {beneficio.title}
                </h3>
                <p className="text-[14px] text-neutral-600 leading-[1.6]">
                  {beneficio.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white/80 backdrop-blur-sm border-2 border-green-600 rounded-2xl p-6 text-center"
        >
          <p className="text-[16px] font-semibold text-green-700 leading-[1.6]">
            No plantamos por plantar: restauramos ecosistemas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const [activeStep, setActiveStep] = React.useState(0);

  const pasos = [
    {
      number: '1',
      title: 'Diseñamos una infraestructura más eficiente',
      description: 'En cada proyecto buscamos reducir consumos innecesarios: equipos de alta eficiencia, arquitecturas híbridas, diseño serio de redes y data centers.'
    },
    {
      number: '2',
      title: 'Asociamos el proyecto a Reforestar',
      description: 'Definimos un compromiso claro: por ejemplo, cierta cantidad de árboles nativos por cada sala técnica, rack, tramo de red o conjunto de cámaras implementadas.'
    },
    {
      number: '3',
      title: 'Producimos y plantamos especies nativas',
      description: 'Las plantas se producen en nuestro vivero de nativas y se plantan en proyectos definidos junto a municipios, ONG, escuelas u otras organizaciones aliadas.'
    },
    {
      number: '4',
      title: 'Documentamos y medimos el impacto',
      description: 'Te entregamos reportes con cantidad de especies, ubicación, fotos y estimaciones de captura de carbono y beneficios ambientales, listos para tus informes de sostenibilidad.'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 px-6 lg:px-12 bg-white" style={{ scrollMarginTop: '96px' }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-bold text-green-600 mb-3 uppercase tracking-wide">
            Cómo se conecta tu proyecto con el bosque
          </div>
          <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-6 leading-[1.15] tracking-tight">
            De tu data center a un bosque nativo
          </h2>
        </motion.div>

        {/* Desktop: Timeline horizontal */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-neutral-200" />
            <motion.div
              className="absolute top-8 left-0 h-0.5 bg-green-600"
              initial={{ width: '0%' }}
              whileInView={{ width: `${(activeStep / (pasos.length - 1)) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <div className="grid grid-cols-4 gap-4 relative">
              {pasos.map((paso, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.4 }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="cursor-pointer"
                >
                  {/* Number badge */}
                  <div className={`size-16 rounded-full border-4 flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                    activeStep >= idx 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : 'bg-white border-neutral-200 text-neutral-400'
                  }`}>
                    <span className="text-[20px] font-bold">{paso.number}</span>
                  </div>

                  {/* Card */}
                  <div className={`bg-white border-2 rounded-2xl p-6 min-h-[200px] transition-all duration-300 ${
                    activeStep === idx 
                      ? 'border-green-600 shadow-lg shadow-green-100' 
                      : 'border-neutral-200 hover:border-green-300'
                  }`}>
                    <h3 className="font-semibold text-[15px] text-[#282327] mb-3 leading-tight">
                      {paso.title}
                    </h3>
                    <p className={`text-[13px] leading-[1.6] transition-opacity ${
                      activeStep === idx ? 'opacity-100 text-neutral-700' : 'opacity-60 text-neutral-500'
                    }`}>
                      {paso.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="block lg:hidden space-y-4 mb-12">
          {pasos.map((paso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <button
                onClick={() => setActiveStep(activeStep === idx ? -1 : idx)}
                className="w-full text-left"
              >
                <div className={`border-2 rounded-2xl p-5 transition-all duration-300 ${
                  activeStep === idx 
                    ? 'bg-green-50 border-green-600' 
                    : 'bg-white border-neutral-200'
                }`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`size-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activeStep === idx 
                        ? 'bg-green-600 text-white' 
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      <span className="font-bold">{paso.number}</span>
                    </div>
                    <h3 className="font-semibold text-[15px] text-[#282327] leading-tight flex-1">
                      {paso.title}
                    </h3>
                  </div>
                  {activeStep === idx && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[14px] text-neutral-600 leading-[1.6] pl-14"
                    >
                      {paso.description}
                    </motion.p>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            Ver ejemplos de proyectos con Reforestar
            <FileText className="ml-2 size-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Colaboraciones() {
  const aliados = [
    {
      icon: <Building2 className="size-8" />,
      title: 'Empresas y clientes de Trendit',
      description: 'Que suman Reforestar a sus proyectos de infraestructura IT, transformando inversiones tecnológicas en impacto positivo local.'
    },
    {
      icon: <GraduationCap className="size-8" />,
      title: 'Escuelas y universidades',
      description: 'Que participan en jornadas de plantación y talleres sobre bosque nativo, huella digital y futuro del trabajo sostenible.'
    },
    {
      icon: <HandHeart className="size-8" />,
      title: 'ONG y brigadas forestales',
      description: 'Que conocen el territorio y multiplican el impacto en zonas afectadas por incendios o degradación.'
    },
    {
      icon: <Users className="size-8" />,
      title: 'Municipios y gobiernos locales',
      description: 'Que integran Reforestar a sus planes de arbolado urbano, reservas naturales y corredores biológicos.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_500px] gap-12 items-start mb-12">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm font-bold text-green-600 mb-3 uppercase tracking-wide">
              Alianzas
            </div>
            <h2 className="text-[40px] lg:text-[44px] text-[#282327] mb-6 leading-[1.15] tracking-tight">
              Reforestar es un esfuerzo colectivo
            </h2>
            <p className="text-[17px] text-neutral-600 leading-[1.7]">
              Reforestar no es solo un vivero: es una red de actores que deciden cambiar la forma en que hacemos tecnología. Invitamos a organizaciones, colegios, ONG, municipios y otros aliados a sumarse a proyectos de reforestación con especies nativas.
            </p>
          </motion.div>

          {/* Right - Highlighted message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-10 text-white shadow-xl"
          >
            <Leaf className="size-12 mb-6 opacity-80" />
            <p className="text-[18px] leading-[1.6] font-light">
              Trendit impulsa Reforestar de forma filantrópica: es nuestro mensaje al mercado de que la transformación digital también debe transformar nuestra relación con el ambiente.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aliados.map((aliado, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300"
            >
              <div className="size-14 rounded-xl bg-green-600/10 flex items-center justify-center text-green-600 mb-4">
                {aliado.icon}
              </div>
              <h3 className="font-semibold text-[15px] text-[#282327] mb-3 leading-tight">
                {aliado.title}
              </h3>
              <p className="text-[13px] text-neutral-600 leading-[1.6]">
                {aliado.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinalReforestar() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[40px] p-12 lg:p-16 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0f7547 0%, #16a05d 35%, #14925a 65%, #0d6e42 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 60px -10px rgba(13, 110, 66, 0.35), 0 8px 24px -8px rgba(13, 110, 66, 0.2)'
          }}
        >
          {/* Noise/grain texture overlay - very subtle */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px'
            }}
          />
          
          {/* Radial gradient overlay for depth */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)'
            }}
          />
          
          {/* Animated gradient blob */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, transparent 70%)'
            }}
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
            {/* Title with improved contrast */}
            <h2 
              className="text-[40px] lg:text-[48px] mb-6 leading-[1.1] tracking-tight"
              style={{
                color: 'rgba(255, 255, 255, 0.98)',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.15)'
              }}
            >
              ¿Querés que tu próxima inversión en tecnología también plante un bosque?
            </h2>
            
            {/* Description with improved contrast and line-height */}
            <p 
              className="text-[19px] mb-10 max-w-2xl mx-auto"
              style={{
                color: 'rgba(255, 255, 255, 0.82)',
                lineHeight: '1.7',
                textShadow: '0 1px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              Con Trendit y Reforestar, cada proyecto de infraestructura puede convertirse en una oportunidad para regenerar bosque nativo, educar comunidades y enviar un mensaje claro: la tecnología también puede devolverle algo a la tierra.
            </p>
            
            {/* Buttons with improved hierarchy */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              {/* Primary CTA - WhatsApp */}
              <Button 
                size="lg"
                className="group h-[54px] px-8 w-full sm:w-auto"
                style={{
                  background: 'rgba(255, 255, 255, 0.98)',
                  color: '#0f7547',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.18), 0 3px 8px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.98)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)';
                }}
                onClick={() => window.open('https://wa.me/5493516714007?text=Hola%20Trendit%20%F0%9F%91%8B%0AVengo%20desde%20la%20p%C3%A1gina%20de%20*Reforestar*.%0A%0AQuiero%20sumar%20mi%20proyecto%20de%20infraestructura%20IT%20al%20programa%20de%20triple%20impacto.', '_blank')}
              >
                <MessageCircle className="mr-2 size-5" style={{ strokeWidth: 2.2 }} />
                Escribirnos por WhatsApp
              </Button>
              
              {/* Secondary CTA - Outline */}
              <Button 
                size="lg"
                variant="outline"
                className="group h-[54px] px-8 w-full sm:w-auto"
                style={{
                  background: 'transparent',
                  color: 'rgba(255, 255, 255, 0.98)',
                  border: '1.5px solid rgba(255, 255, 255, 0.35)',
                  borderRadius: '12px',
                  boxShadow: 'none',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(4px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                }}
                onClick={() => window.open('https://wa.me/5493516714007?text=Hola%20Trendit%20%F0%9F%91%8B%0AQuiero%20conversar%20sobre%20Reforestar%20y%20c%C3%B3mo%20sumar%20mi%20organizaci%C3%B3n%20al%20programa.', '_blank')}
              >
                Hablar con Trendit sobre Reforestar
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" style={{ strokeWidth: 2.2 }} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
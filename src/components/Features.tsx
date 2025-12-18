import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cloud, Server, Shield, Sparkles, Cpu, BarChart3 } from 'lucide-react';

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Cloud className="size-6" />,
      title: "Infraestructura en la nube",
      description: "Migra a infraestructuras cloud optimizadas y sustentables con reducción de costos garantizada.",
    },
    {
      icon: <Server className="size-6" />,
      title: "Data centers verdes",
      description: "Accede a centros de datos alimentados por energía renovable y certificados ambientalmente.",
    },
    {
      icon: <Shield className="size-6" />,
      title: "Seguridad avanzada",
      description: "Protección de datos de clase empresarial con cumplimiento de normativas internacionales.",
    },
    {
      icon: <Sparkles className="size-6" />,
      title: "IA y optimización",
      description: "Algoritmos inteligentes que optimizan el consumo energético en tiempo real.",
    },
    {
      icon: <Cpu className="size-6" />,
      title: "Edge computing",
      description: "Procesa datos cerca de su origen para reducir latencia y consumo de red.",
    },
    {
      icon: <BarChart3 className="size-6" />,
      title: "Monitoreo y reportes",
      description: "Dashboard en tiempo real con métricas de sostenibilidad y rendimiento.",
    },
  ];

  return (
    <section ref={ref} id="soluciones" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm mb-4">
            Soluciones
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Tecnología que impulsa el cambio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestras soluciones combinan eficiencia operativa con responsabilidad ambiental
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-orange-200 hover:shadow-lg transition-all">
                <div className="bg-orange-50 text-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

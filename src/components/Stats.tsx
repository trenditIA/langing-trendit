import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "500+", label: "Empresas que confían en nosotros" },
    { value: "40%", label: "Reducción promedio de costos" },
    { value: "1M+", label: "Toneladas de CO₂ evitadas" },
    { value: "99.9%", label: "Uptime garantizado" },
  ];

  return (
    <section ref={ref} className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl text-[#FF6B35] mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

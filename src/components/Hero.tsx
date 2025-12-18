import { Button } from './ui/button';
import { ArrowRight, Leaf, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-gray-50 -z-10" />
      
      {/* Animated circles */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full mb-8 border border-orange-200"
          >
            <Leaf className="size-4" />
            <span className="text-sm">Tecnología Sustentable</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl text-gray-900 mb-6 tracking-tight"
          >
            El futuro de la tecnología es{' '}
            <span className="text-[#FF6B35]">sustentable</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Transformamos tu infraestructura tecnológica en soluciones eficientes, 
            sostenibles y preparadas para el futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 group"
            >
              Solicitar demo
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 hover:border-gray-400"
            >
              Ver casos de éxito
            </Button>
          </motion.div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <FloatingCard
              icon={<Zap className="size-6 text-orange-600" />}
              title="Eficiencia energética"
              description="Reduce costos hasta 40%"
            />
            <FloatingCard
              icon={<Leaf className="size-6 text-orange-600" />}
              title="Impacto ambiental"
              description="Neutraliza tu huella de carbono"
            />
            <FloatingCard
              icon={<TrendingUp className="size-6 text-orange-600" />}
              title="Escalabilidad"
              description="Crece sin límites"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}

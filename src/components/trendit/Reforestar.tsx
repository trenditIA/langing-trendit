import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sprout, TreePine, Leaf } from 'lucide-react';

export function Reforestar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="reforestar" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-green-50 to-green-100/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-green-200 opacity-20">
        <TreePine className="size-64" />
      </div>
      <div className="absolute bottom-10 left-10 text-green-200 opacity-20">
        <Leaf className="size-48" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-600/20 text-green-700 px-4 py-2 rounded-full mb-6">
              <Sprout className="size-4" />
              <span className="text-sm tracking-wide">Programa Reforestar</span>
            </div>

            <h2 className="text-[40px] text-[#282327] mb-6">
              Cuando la tecnología deja una huella positiva.
            </h2>

            <p className="text-lg text-neutral-700 leading-[1.5] mb-8">
              Reforestar es nuestro programa de triple impacto: por cada proyecto que 
              realizamos, plantamos árboles nativos en viveros de Argentina, compensando 
              la huella de carbono de la tecnología y generando empleo en comunidades locales.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6">
                <div className="text-3xl text-green-600 mb-2">
                  +10.000
                </div>
                <div className="text-sm text-neutral-600">
                  Árboles nativos plantados
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6">
                <div className="text-3xl text-green-600 mb-2">
                  100%
                </div>
                <div className="text-sm text-neutral-600">
                  Especies nativas argentinas
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1676245463050-1b287c2cced6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBmb3Jlc3QlMjB0cmVlcyUyMG5hdHVyZXxlbnwxfHx8fDE3NjUyMzk4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Reforestar - Bosque nativo" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-green-200 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Sprout className="size-6" />
                </div>
                <div>
                  <div className="text-sm text-neutral-600">Impacto acumulado</div>
                  <div className="text-xl text-[#282327]">~150 Tn CO₂</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

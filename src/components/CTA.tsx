import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="contacto" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGNkIzNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Transforma tu infraestructura hoy
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Únete a las empresas líderes que ya están construyendo un futuro más sustentable con TrendIT
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 group"
            >
              Agenda una consulta gratuita
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-400 text-white hover:bg-white/10"
            >
              Descargar whitepaper
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-green-400 rounded-full" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-green-400 rounded-full" />
              <span>Implementación en 30 días</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-green-400 rounded-full" />
              <span>Soporte 24/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTAFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%20Trendit%2C%20quiero%20informaci%C3%B3n%20general%20sobre%20sus%20servicios%20y%20una%20reuni%C3%B3n.', '_blank');
  };

  const handleMeeting = () => {
    // Navigate to contact or calendar page
    window.location.hash = 'contacto';
  };

  return (
    <section id="cta-final" ref={ref} className="py-24 px-6 lg:px-12 bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9zdmc+')] bg-repeat" />
      </div>

      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-[#E94E1B] rounded-full blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-[40px] md:text-[48px] lg:text-[56px] text-white mb-6 leading-[1.1]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            ¿Planificando una nueva etapa en tu infraestructura?
          </h2>
          
          <p 
            className="text-[17px] md:text-[19px] lg:text-[20px] text-white/70 mb-8 md:mb-10 max-w-3xl mx-auto leading-[1.6]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Conversemos sobre tus desafíos tecnológicos. Nuestro equipo está listo para diseñar 
            soluciones a medida que impulsen el crecimiento de tu negocio de manera sostenible.
          </p>

          {/* CTAs - Responsive: horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-10 lg:mb-12 px-4 sm:px-0">
            {/* Primary CTA - Orange Button */}
            <motion.button
              onClick={handleMeeting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 md:px-8 py-3.5 md:py-4 bg-[#E94E1B] hover:bg-[#D43E10] text-white rounded-xl transition-all duration-300 shadow-lg shadow-[#E94E1B]/25 hover:shadow-xl hover:shadow-[#E94E1B]/30 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              <span>Agendar una reunión con Trendit</span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary CTA - WhatsApp Button */}
            <motion.button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 md:px-8 py-3.5 md:py-4 bg-white/95 hover:bg-white text-[#1F1F1F] rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              {/* WhatsApp Icon SVG */}
              <svg 
                className="size-5 transition-transform group-hover:scale-110" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                style={{ color: '#25D366' }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Escribirnos por WhatsApp</span>
            </motion.button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-[13px] md:text-[14px] text-white/60 px-4">
            <div className="flex items-center justify-center gap-2">
              <div className="size-2 bg-green-400 rounded-full flex-shrink-0" />
              <span 
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Consultoría sin compromiso
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="size-2 bg-green-400 rounded-full flex-shrink-0" />
              <span 
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Respuesta en 24 hs
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="size-2 bg-green-400 rounded-full flex-shrink-0" />
              <span 
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Soporte técnico especializado
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
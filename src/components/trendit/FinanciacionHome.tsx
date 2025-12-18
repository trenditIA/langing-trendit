import { motion } from 'motion/react';
import { Calendar, CreditCard, Network, ArrowRight } from 'lucide-react';

export function FinanciacionHome() {
  const handleVerOpciones = () => {
    window.location.hash = 'financiacion';
  };

  const handleSimular = () => {
    window.location.hash = 'financiacion';
    // Scroll to form after navigation
    setTimeout(() => {
      const formElement = document.getElementById('formulario-solicitud');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const highlights = [
    {
      icon: <Calendar className="size-5" />,
      text: 'Cuotas previsibles en pesos o dólares'
    },
    {
      icon: <CreditCard className="size-5" />,
      text: 'Leasing + financiación directa con e-checks'
    },
    {
      icon: <Network className="size-5" />,
      text: 'Equipos y servicios integrados en una sola propuesta'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12" style={{ background: '#F8F0E7' }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 border border-neutral-200 shadow-sm"
        >
          {/* Título */}
          <h2 
            className="text-[36px] lg:text-[42px] text-center mb-6 leading-[1.2] tracking-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700,
              color: '#282327'
            }}
          >
            Financiación para tu infraestructura tecnológica
          </h2>

          {/* Párrafo principal */}
          <p 
            className="text-[16px] text-center text-neutral-600 leading-[1.75] max-w-[800px] mx-auto mb-10"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            En Trendit integramos tecnología y financiamiento para que tu empresa pueda actualizar su infraestructura hoy y pagarla con el retorno que genera mañana. Ofrecemos leasing operativo, leasing financiero y financiación propia en pesos o dólares.
          </p>

          {/* Highlights - 3 columnas en desktop */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-2xl border border-neutral-200"
              >
                <div 
                  className="size-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(233, 78, 27, 0.1)' }}
                >
                  <div style={{ color: '#E94E1B' }}>
                    {highlight.icon}
                  </div>
                </div>
                <p 
                  className="text-[15px] leading-[1.6]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 500,
                    color: '#282327'
                  }}
                >
                  {highlight.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleVerOpciones}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '16px'
              }}
            >
              Ver opciones de financiación
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={handleSimular}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-neutral-300 text-neutral-700 rounded-xl hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-300"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600,
                fontSize: '16px'
              }}
            >
              Simular un crédito ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

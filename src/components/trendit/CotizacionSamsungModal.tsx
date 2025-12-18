import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Monitor,
  Grid3x3,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../ui/button';

interface CotizacionSamsungModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

interface FormData {
  soluciones: string[];
  empresa: string;
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  contexto: string;
  urgencia: string;
}

const SOLUCIONES = [
  {
    id: 'carteleria',
    icon: <Monitor className="size-5" />,
    label: 'Cartelería digital'
  },
  {
    id: 'videowall',
    icon: <Grid3x3 className="size-5" />,
    label: 'Video wall'
  },
  {
    id: 'thewall',
    icon: <Grid3x3 className="size-5" />,
    label: 'LED The Wall'
  },
  {
    id: 'knox',
    icon: <Smartphone className="size-5" />,
    label: 'Knox/Knox Manage'
  }
];

export function CotizacionSamsungModal({ isOpen, onClose, initialProduct = '' }: CotizacionSamsungModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    soluciones: [],
    empresa: '',
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    contexto: '',
    urgencia: 'Normal'
  });

  // Set initial product if provided
  useEffect(() => {
    if (isOpen && initialProduct) {
      const productMap: Record<string, string> = {
        'LED The Wall': 'thewall',
        'Cartelería Digital': 'carteleria',
        'Video Wall': 'videowall',
        'Knox': 'knox'
      };
      const productId = productMap[initialProduct] || '';
      if (productId) {
        setFormData(prev => ({ ...prev, soluciones: [productId] }));
      }
    }
  }, [initialProduct, isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({
          soluciones: [],
          empresa: '',
          nombre: '',
          email: '',
          telefono: '',
          ciudad: '',
          contexto: '',
          urgencia: 'Normal'
        });
      }, 300);
    }
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const toggleSolucion = (id: string) => {
    setFormData(prev => ({
      ...prev,
      soluciones: prev.soluciones.includes(id)
        ? prev.soluciones.filter(s => s !== id)
        : [...prev.soluciones, id]
    }));
  };

  const canContinueStep1 = formData.soluciones.length > 0;
  const canContinueStep2 = formData.empresa && formData.nombre && formData.email && formData.telefono && formData.ciudad;
  const canContinueStep3 = formData.urgencia;

  const handleNext = () => {
    if (step === 1 && canContinueStep1) setStep(2);
    else if (step === 2 && canContinueStep2) setStep(3);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const solucionesLabels = formData.soluciones
      .map(id => SOLUCIONES.find(s => s.id === id)?.label)
      .join(', ');
    
    const message = `Hola Trendit, estoy viendo la página de Samsung (Marcas & Partners).
Me interesa: ${solucionesLabels}
Empresa: ${formData.empresa}
Contacto: ${formData.nombre} – ${formData.telefono}
Email: ${formData.email}
Ciudad/Provincia: ${formData.ciudad}
Urgencia: ${formData.urgencia}${formData.contexto ? `\nContexto: ${formData.contexto}` : ''}

¿Podemos coordinar una cotización y próximos pasos?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
    
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 sm:inset-8 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:w-full md:max-w-[680px] md:max-h-[90vh] 
                       bg-white rounded-2xl md:rounded-3xl shadow-2xl z-[70] 
                       flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 border-b border-neutral-200 flex-shrink-0">
              <div>
                <h2 
                  className="text-[20px] sm:text-[22px] md:text-[24px] mb-1"
                  style={{
                    color: '#141414',
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 700
                  }}
                >
                  Solicitar cotización Samsung
                </h2>
                <p 
                  className="text-[13px] sm:text-[14px] text-neutral-600"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 400
                  }}
                >
                  Completá los datos y te contactamos
                </p>
              </div>
              
              <button
                onClick={onClose}
                className="size-9 sm:size-10 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
                aria-label="Cerrar"
              >
                <X className="size-5 text-neutral-600" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-neutral-100 flex-shrink-0">
              <motion.div
                className="h-full bg-[#E94E1B]"
                initial={{ width: '0%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 sm:py-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 
                      className="text-[18px] sm:text-[20px] mb-3"
                      style={{
                        color: '#141414',
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      ¿Qué solución te interesa?
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Podés seleccionar más de una opción
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {SOLUCIONES.map((solucion) => (
                        <button
                          key={solucion.id}
                          onClick={() => toggleSolucion(solucion.id)}
                          className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 text-left ${
                            formData.soluciones.includes(solucion.id)
                              ? 'border-[#E94E1B] bg-[#FFF7F3]'
                              : 'border-neutral-200 hover:border-neutral-300 bg-white'
                          }`}
                        >
                          <div 
                            className={`size-10 sm:size-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                              formData.soluciones.includes(solucion.id)
                                ? 'bg-[#E94E1B] text-white'
                                : 'bg-neutral-100 text-neutral-600'
                            }`}
                          >
                            {solucion.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p 
                              className="text-[13px] sm:text-[14px] leading-tight"
                              style={{
                                color: '#141414',
                                fontFamily: 'Campton, sans-serif',
                                fontWeight: 600
                              }}
                            >
                              {solucion.label}
                            </p>
                          </div>
                          {formData.soluciones.includes(solucion.id) && (
                            <CheckCircle2 className="size-5 text-[#E94E1B] flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 
                      className="text-[18px] sm:text-[20px] mb-3"
                      style={{
                        color: '#141414',
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Tus datos de contacto
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Para preparar tu cotización personalizada
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label 
                          htmlFor="empresa"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Empresa <span className="text-[#E94E1B]">*</span>
                        </label>
                        <input
                          id="empresa"
                          type="text"
                          value={formData.empresa}
                          onChange={(e) => setFormData(prev => ({ ...prev, empresa: e.target.value }))}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                          style={{
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 400,
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="nombre"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Nombre y apellido <span className="text-[#E94E1B]">*</span>
                        </label>
                        <input
                          id="nombre"
                          type="text"
                          value={formData.nombre}
                          onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                          style={{
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 400,
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="email"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Email <span className="text-[#E94E1B]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                          style={{
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 400,
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="telefono"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Teléfono / WhatsApp <span className="text-[#E94E1B]">*</span>
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={(e) => setFormData(prev => ({ ...prev, telefono: e.target.value }))}
                          required
                          placeholder="+54 9 ..."
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                          style={{
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 400,
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="ciudad"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Ciudad / Provincia <span className="text-[#E94E1B]">*</span>
                        </label>
                        <input
                          id="ciudad"
                          type="text"
                          value={formData.ciudad}
                          onChange={(e) => setFormData(prev => ({ ...prev, ciudad: e.target.value }))}
                          required
                          placeholder="Ej: Córdoba"
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                          style={{
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 400,
                            fontSize: '15px'
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 
                      className="text-[18px] sm:text-[20px] mb-3"
                      style={{
                        color: '#141414',
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Últimos detalles
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Ayúdanos a entender mejor tu proyecto
                    </p>

                    <div className="space-y-5">
                      <div>
                        <label 
                          htmlFor="contexto"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Contexto (opcional)
                        </label>
                        <textarea
                          id="contexto"
                          value={formData.contexto}
                          onChange={(e) => setFormData(prev => ({ ...prev, contexto: e.target.value }))}
                          rows={3}
                          placeholder="Contanos brevemente sobre tu proyecto o necesidad..."
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all resize-none"
                          style={{
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 400,
                            fontSize: '14px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          className="block text-[13px] sm:text-[14px] mb-3"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Urgencia <span className="text-[#E94E1B]">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Normal', 'Urgente'].map((opcion) => (
                            <button
                              key={opcion}
                              onClick={() => setFormData(prev => ({ ...prev, urgencia: opcion }))}
                              className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                                formData.urgencia === opcion
                                  ? 'border-[#E94E1B] bg-[#FFF7F3] text-[#E94E1B]'
                                  : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700'
                              }`}
                              style={{
                                fontFamily: 'Campton, sans-serif',
                                fontWeight: 500,
                                fontSize: '14px'
                              }}
                            >
                              {opcion}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer / Actions */}
            <div className="flex items-center justify-between gap-3 px-6 sm:px-8 py-5 sm:py-6 border-t border-neutral-200 flex-shrink-0">
              {step > 1 ? (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="h-11 sm:h-12 px-5 sm:px-6 border-neutral-300 hover:bg-neutral-50"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  <ArrowLeft className="size-4 mr-2" />
                  Volver
                </Button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !canContinueStep1) ||
                    (step === 2 && !canContinueStep2)
                  }
                  className="h-11 sm:h-12 px-6 sm:px-8 bg-[#E94E1B] hover:bg-[#d94419] text-white disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    borderRadius: '10px'
                  }}
                >
                  Continuar
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canContinueStep3}
                  className="h-11 sm:h-12 px-6 sm:px-8 bg-[#E94E1B] hover:bg-[#d94419] text-white disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    borderRadius: '10px'
                  }}
                >
                  Enviar solicitud
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
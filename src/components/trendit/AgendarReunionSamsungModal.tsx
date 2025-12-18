import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Monitor,
  Grid3x3,
  Smartphone,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock
} from 'lucide-react';
import { Button } from '../ui/button';

interface AgendarReunionSamsungModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

interface FormData {
  interes: string;
  industria: string;
  cantidad: string;
  ubicaciones: string;
  necesitaObra: string;
  comentario: string;
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  fecha: string;
  hora: string;
}

const INTERESES = [
  {
    id: 'carteleria',
    icon: <Monitor className="size-5" />,
    label: 'Cartelería Digital'
  },
  {
    id: 'videowall',
    icon: <Grid3x3 className="size-5" />,
    label: 'Video Wall'
  },
  {
    id: 'thewall',
    icon: <Grid3x3 className="size-5" />,
    label: 'LED The Wall'
  },
  {
    id: 'knox',
    icon: <Smartphone className="size-5" />,
    label: 'Knox / Gestión de móviles'
  },
  {
    id: 'noseguro',
    icon: <HelpCircle className="size-5" />,
    label: 'No estoy seguro, necesito asesoramiento'
  }
];

const INDUSTRIAS = [
  'Retail',
  'Educación',
  'Salud',
  'Corporativo',
  'Logística',
  'Sector Público',
  'Manufactura',
  'Hospitalidad',
  'Otra'
];

const HORARIOS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

export function AgendarReunionSamsungModal({ isOpen, onClose, initialInterest = '' }: AgendarReunionSamsungModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    interes: '',
    industria: '',
    cantidad: '',
    ubicaciones: '',
    necesitaObra: '',
    comentario: '',
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: ''
  });

  // Set initial interest if provided
  useEffect(() => {
    if (isOpen && initialInterest) {
      const interesMap: Record<string, string> = {
        'Cartelería Digital': 'carteleria',
        'Video Wall': 'videowall',
        'Knox': 'knox'
      };
      const interesId = interesMap[initialInterest] || '';
      if (interesId) {
        setFormData(prev => ({ ...prev, interes: interesId }));
      }
    }
  }, [initialInterest, isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({
          interes: '',
          industria: '',
          cantidad: '',
          ubicaciones: '',
          necesitaObra: '',
          comentario: '',
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          fecha: '',
          hora: ''
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

  const canContinueStep1 = formData.interes !== '';
  const canContinueStep2 = formData.industria && formData.ubicaciones;
  const canContinueStep3 = formData.nombre && formData.empresa && formData.email && formData.telefono;
  const canContinueStep4 = formData.fecha && formData.hora;

  const handleNext = () => {
    if (step === 1 && canContinueStep1) setStep(2);
    else if (step === 2 && canContinueStep2) setStep(3);
    else if (step === 3 && canContinueStep3) setStep(4);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitWhatsApp = () => {
    const interesLabel = INTERESES.find(i => i.id === formData.interes)?.label || formData.interes;
    
    const message = `Hola Trendit 👋 Quiero asesoramiento en soluciones Samsung para mi empresa.
Interés: ${interesLabel}
Industria: ${formData.industria} | Ubicaciones: ${formData.ubicaciones} | Cantidad: ${formData.cantidad || 'A definir'}
¿Necesita instalación/obra?: ${formData.necesitaObra}
Fecha sugerida: ${formData.fecha} ${formData.hora}hs
Empresa: ${formData.empresa}
Contacto: ${formData.nombre} – ${formData.telefono}${formData.comentario ? `\nComentarios: ${formData.comentario}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516013543?text=${encodedMessage}`, '_blank');
    
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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
                       md:w-full md:max-w-[760px] lg:max-w-[860px] md:max-h-[90vh] 
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
                  Agendar reunión | Samsung
                </h2>
                <p 
                  className="text-[13px] sm:text-[14px] text-neutral-600"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 400
                  }}
                >
                  Definí tu proyecto y coordinamos la reunión
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
                animate={{ width: `${(step / 4) * 100}%` }}
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
                      Elegí tu interés
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 400
                      }}
                    >
                      ¿Qué solución Samsung te interesa?
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {INTERESES.map((interes) => (
                        <button
                          key={interes.id}
                          onClick={() => setFormData(prev => ({ ...prev, interes: interes.id }))}
                          className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 text-left ${
                            formData.interes === interes.id
                              ? 'border-[#E94E1B] bg-[#FFF7F3]'
                              : 'border-neutral-200 hover:border-neutral-300 bg-white'
                          }`}
                        >
                          <div 
                            className={`size-10 sm:size-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                              formData.interes === interes.id
                                ? 'bg-[#E94E1B] text-white'
                                : 'bg-neutral-100 text-neutral-600'
                            }`}
                          >
                            {interes.icon}
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
                              {interes.label}
                            </p>
                          </div>
                          {formData.interes === interes.id && (
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
                      Contexto del proyecto
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Ayúdanos a entender mejor tu necesidad
                    </p>

                    <div className="space-y-5">
                      <div>
                        <label 
                          htmlFor="industria"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Industria <span className="text-[#E94E1B]">*</span>
                        </label>
                        <select
                          id="industria"
                          value={formData.industria}
                          onChange={(e) => setFormData(prev => ({ ...prev, industria: e.target.value }))}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                          style={{
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 400,
                            fontSize: '15px'
                          }}
                        >
                          <option value="">Seleccioná una industria</option>
                          {INDUSTRIAS.map((industria) => (
                            <option key={industria} value={industria}>
                              {industria}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label 
                          htmlFor="cantidad"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Cantidad estimada
                        </label>
                        <input
                          id="cantidad"
                          type="text"
                          value={formData.cantidad}
                          onChange={(e) => setFormData(prev => ({ ...prev, cantidad: e.target.value }))}
                          placeholder="Ej: 10 pantallas, 5 dispositivos..."
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
                          className="block text-[13px] sm:text-[14px] mb-3"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Ubicaciones <span className="text-[#E94E1B]">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {['Una sede', 'Varias sedes', 'Multi-país'].map((opcion) => (
                            <button
                              key={opcion}
                              onClick={() => setFormData(prev => ({ ...prev, ubicaciones: opcion }))}
                              className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                                formData.ubicaciones === opcion
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

                      <div>
                        <label 
                          className="block text-[13px] sm:text-[14px] mb-3"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          ¿Necesitás instalación/obra?
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Sí', 'No'].map((opcion) => (
                            <button
                              key={opcion}
                              onClick={() => setFormData(prev => ({ ...prev, necesitaObra: opcion }))}
                              className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                                formData.necesitaObra === opcion
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

                      <div>
                        <label 
                          htmlFor="comentario"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Comentario breve
                        </label>
                        <textarea
                          id="comentario"
                          value={formData.comentario}
                          onChange={(e) => setFormData(prev => ({ ...prev, comentario: e.target.value }))}
                          rows={3}
                          placeholder="Contexto adicional sobre tu proyecto..."
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all resize-none"
                          style={{
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 400,
                            fontSize: '14px'
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
                      Datos de contacto
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Para coordinar la reunión necesitamos tus datos
                    </p>

                    <div className="space-y-4 sm:space-y-5">
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
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
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
                      Fecha y horario
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Confirmamos por WhatsApp en horario laboral
                    </p>

                    <div className="space-y-5">
                      <div>
                        <label 
                          htmlFor="fecha"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          <Calendar className="inline size-4 mr-1.5 mb-0.5" />
                          Fecha preferida
                        </label>
                        <input
                          id="fecha"
                          type="date"
                          value={formData.fecha}
                          onChange={(e) => setFormData(prev => ({ ...prev, fecha: e.target.value }))}
                          min={getMinDate()}
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
                          htmlFor="hora"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 600
                          }}
                        >
                          <Clock className="inline size-4 mr-1.5 mb-0.5" />
                          Horario preferido (ART - GMT-3)
                        </label>
                        <select
                          id="hora"
                          value={formData.hora}
                          onChange={(e) => setFormData(prev => ({ ...prev, hora: e.target.value }))}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                          style={{
                            fontFamily: 'Campton, sans-serif',
                            fontWeight: 400,
                            fontSize: '15px'
                          }}
                        >
                          <option value="">Seleccioná un horario</option>
                          {HORARIOS.map((horario) => (
                            <option key={horario} value={horario}>
                              {horario} hs
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Summary */}
                      {canContinueStep4 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200"
                        >
                          <h4 
                            className="text-[14px] sm:text-[15px] mb-3"
                            style={{
                              color: '#141414',
                              fontFamily: 'Campton, sans-serif',
                              fontWeight: 600
                            }}
                          >
                            Resumen de tu solicitud
                          </h4>
                          <div className="space-y-2 text-[13px] sm:text-[14px] text-neutral-700">
                            <p>
                              <strong>Interés:</strong> {INTERESES.find(i => i.id === formData.interes)?.label}
                            </p>
                            <p>
                              <strong>Industria:</strong> {formData.industria}
                            </p>
                            <p>
                              <strong>Ubicaciones:</strong> {formData.ubicaciones}
                            </p>
                            <p>
                              <strong>Reunión:</strong> {formData.fecha} - {formData.hora}hs
                            </p>
                          </div>
                        </motion.div>
                      )}
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

              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !canContinueStep1) ||
                    (step === 2 && !canContinueStep2) ||
                    (step === 3 && !canContinueStep3)
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
                  onClick={handleSubmitWhatsApp}
                  disabled={!canContinueStep4}
                  className="h-11 sm:h-12 px-6 sm:px-8 bg-[#E94E1B] hover:bg-[#d94419] text-white disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    borderRadius: '10px'
                  }}
                >
                  Enviar por WhatsApp
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

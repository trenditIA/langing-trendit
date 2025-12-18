import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Server, 
  Wifi, 
  Users, 
  Camera, 
  Zap, 
  Laptop,
  Cable,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock
} from 'lucide-react';
import { Button } from '../ui/button';

interface AgendarReunionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  servicios: string[];
  contexto: string[];
  notas: string;
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  fecha: string;
  hora: string;
}

const SERVICIOS = [
  { 
    id: 'infraestructura', 
    icon: <Server className="size-5" />, 
    label: 'Infraestructura IT & Data Center',
    shortLabel: 'Infraestructura IT'
  },
  { 
    id: 'redes', 
    icon: <Wifi className="size-5" />, 
    label: 'Redes & Conectividad',
    shortLabel: 'Redes'
  },
  { 
    id: 'collaboration', 
    icon: <Users className="size-5" />, 
    label: 'Team Collaboration',
    shortLabel: 'Collaboration'
  },
  { 
    id: 'videoseguridad', 
    icon: <Camera className="size-5" />, 
    label: 'Videoseguridad & Analítica',
    shortLabel: 'Videoseguridad'
  },
  { 
    id: 'energia', 
    icon: <Zap className="size-5" />, 
    label: 'Energía & Continuidad',
    shortLabel: 'Energía'
  },
  { 
    id: 'microinformatica', 
    icon: <Laptop className="size-5" />, 
    label: 'Microinformática',
    shortLabel: 'Microinformática'
  },
  { 
    id: 'cableado', 
    icon: <Cable className="size-5" />, 
    label: 'Cableado Estructurado',
    shortLabel: 'Cableado'
  }
];

const CONTEXTO_OPTIONS = [
  'Nuevo proyecto',
  'Ampliación / crecimiento',
  'Migración / actualización',
  'Soporte / incidente',
  'Cotización / presupuesto'
];

const HORARIOS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

export function AgendarReunionModal({ isOpen, onClose }: AgendarReunionModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    servicios: [],
    contexto: [],
    notas: '',
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: ''
  });

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({
          servicios: [],
          contexto: [],
          notas: '',
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

  const toggleServicio = (id: string) => {
    setFormData(prev => ({
      ...prev,
      servicios: prev.servicios.includes(id)
        ? prev.servicios.filter(s => s !== id)
        : [...prev.servicios, id]
    }));
  };

  const toggleContexto = (option: string) => {
    setFormData(prev => ({
      ...prev,
      contexto: prev.contexto.includes(option)
        ? prev.contexto.filter(c => c !== option)
        : [...prev.contexto, option]
    }));
  };

  const canContinueStep1 = formData.servicios.length > 0;
  const canContinueStep2 = formData.contexto.length > 0;
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

  const handleSubmit = () => {
    // Generate WhatsApp message
    const serviciosText = formData.servicios
      .map(id => SERVICIOS.find(s => s.id === id)?.shortLabel)
      .join(', ');
    
    const contextoText = formData.contexto.join(', ');
    
    const message = `Hola Trendit 👋
Quiero agendar una reunión desde la página Servicios.

✅ Servicios: ${serviciosText}
✅ Contexto: ${contextoText}
🗓️ Fecha/Hora preferida: ${formData.fecha} - ${formData.hora}

👤 Contacto: ${formData.nombre} — ${formData.empresa}
📧 ${formData.email} | 📞 ${formData.telefono}${formData.notas ? `\n📝 Notas: ${formData.notas}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5493516714007?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Close modal after short delay
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
                       md:w-full md:max-w-[720px] lg:max-w-[820px] md:max-h-[90vh] 
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
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 700
                  }}
                >
                  Agendar reunión
                </h2>
                <p 
                  className="text-[13px] sm:text-[14px] text-neutral-600"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Paso {step} de 4
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
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      ¿Qué servicios te interesan?
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Podés seleccionar uno o más servicios
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {SERVICIOS.map((servicio) => (
                        <button
                          key={servicio.id}
                          onClick={() => toggleServicio(servicio.id)}
                          className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 text-left ${
                            formData.servicios.includes(servicio.id)
                              ? 'border-[#E94E1B] bg-[#FFF7F3]'
                              : 'border-neutral-200 hover:border-neutral-300 bg-white'
                          }`}
                        >
                          <div 
                            className={`size-10 sm:size-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                              formData.servicios.includes(servicio.id)
                                ? 'bg-[#E94E1B] text-white'
                                : 'bg-neutral-100 text-neutral-600'
                            }`}
                          >
                            {servicio.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p 
                              className="text-[13px] sm:text-[14px] leading-tight"
                              style={{
                                color: '#141414',
                                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                fontWeight: 600
                              }}
                            >
                              {servicio.label}
                            </p>
                          </div>
                          {formData.servicios.includes(servicio.id) && (
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
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Contanos el contexto
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Seleccioná una o más opciones que describan tu necesidad
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                      {CONTEXTO_OPTIONS.map((option) => (
                        <button
                          key={option}
                          onClick={() => toggleContexto(option)}
                          className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border-2 transition-all duration-200 ${
                            formData.contexto.includes(option)
                              ? 'border-[#E94E1B] bg-[#FFF7F3] text-[#E94E1B]'
                              : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700'
                          }`}
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            fontSize: '14px'
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div>
                      <label 
                        htmlFor="notas"
                        className="block text-[14px] sm:text-[15px] mb-2"
                        style={{
                          color: '#141414',
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 600
                        }}
                      >
                        Notas adicionales (opcional)
                      </label>
                      <textarea
                        id="notas"
                        value={formData.notas}
                        onChange={(e) => setFormData(prev => ({ ...prev, notas: e.target.value }))}
                        maxLength={300}
                        rows={4}
                        placeholder="Detalles adicionales sobre tu proyecto..."
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all resize-none"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 400,
                          fontSize: '14px'
                        }}
                      />
                      <p className="text-xs text-neutral-500 mt-1.5">
                        {formData.notas.length}/300 caracteres
                      </p>
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
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Datos de contacto
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Elegí fecha y horario
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Te confirmamos por WhatsApp en horario laboral
                    </p>

                    <div className="space-y-5">
                      <div>
                        <label 
                          htmlFor="fecha"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 600
                          }}
                        >
                          <Clock className="inline size-4 mr-1.5 mb-0.5" />
                          Horario preferido
                        </label>
                        <select
                          id="hora"
                          value={formData.hora}
                          onChange={(e) => setFormData(prev => ({ ...prev, hora: e.target.value }))}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 600
                            }}
                          >
                            Resumen de tu solicitud
                          </h4>
                          <div className="space-y-2 text-[13px] sm:text-[14px] text-neutral-700">
                            <p>
                              <strong>Servicios:</strong>{' '}
                              {formData.servicios.map(id => SERVICIOS.find(s => s.id === id)?.shortLabel).join(', ')}
                            </p>
                            <p>
                              <strong>Contexto:</strong> {formData.contexto.join(', ')}
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
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
                  disabled={!canContinueStep4}
                  className="h-11 sm:h-12 px-6 sm:px-8 bg-[#E94E1B] hover:bg-[#d94419] text-white disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    borderRadius: '10px'
                  }}
                >
                  Solicitar reunión
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

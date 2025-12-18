import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Server,
  Network,
  Users,
  Video,
  Zap,
  Laptop,
  TreeDeciduous,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock
} from 'lucide-react';
import { Button } from '../ui/button';

interface AgendarReunionMarcasModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAreaIndex?: number; // Para prefill del área seleccionada
}

interface FormData {
  areaIndex: number;
  marcas: string[];
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  fecha: string;
  hora: string;
  notas: string;
}

const AREAS = [
  {
    id: 0,
    icon: <Server className="size-5" />,
    name: 'Data Center & Cloud',
    brands: ['Lenovo', 'Dell', 'HPE', 'IBM', 'Microsoft', 'Intel', 'AMD', 'Nvidia', 'Kingston', 'Seagate', 'QNAP', 'Huawei', 'APC', 'Eaton', 'Red Hat', 'Veeam']
  },
  {
    id: 1,
    icon: <Network className="size-5" />,
    name: 'Networking & Seguridad',
    brands: ['Cisco', 'HPE (Aruba)', 'Mikrotik', 'Ubiquiti', 'Fortinet', 'Huawei', 'Intel']
  },
  {
    id: 2,
    icon: <Users className="size-5" />,
    name: 'Team Collaboration & Workspace',
    brands: ['Microsoft', 'Cisco', 'Jabra', 'Logitech', 'Trust', 'Lenovo', 'Dell', 'HP', 'Samsung', 'Apple', 'Acer', 'Asus', 'MSI', 'Huawei']
  },
  {
    id: 3,
    icon: <Video className="size-5" />,
    name: 'Video, Analítica, IoT & Cartelería Digital',
    brands: ['Hikvision', 'Axis', 'Dahua', 'QNAP', 'Samsung (displays/cartelería digital)', 'Fluke']
  },
  {
    id: 4,
    icon: <Zap className="size-5" />,
    name: 'Energía & Infraestructura Crítica',
    brands: ['APC', 'Eaton', 'Fluke']
  },
  {
    id: 5,
    icon: <Laptop className="size-5" />,
    name: 'Dispositivos, Impresión & Edge',
    brands: ['Lenovo', 'Dell', 'HP', 'Apple', 'Samsung', 'Acer', 'Asus', 'MSI', 'Intel', 'AMD', 'Nvidia', 'Kingston', 'Seagate', 'Zebra', 'Brother', 'Huawei', 'Thermaltake']
  },
  {
    id: 6,
    icon: <TreeDeciduous className="size-5" />,
    name: 'Sostenibilidad & Triple Impacto',
    brands: ['Lenovo', 'HPE', 'Dell', 'Microsoft', 'Nvidia', 'Intel', 'AMD']
  }
];

const HORARIOS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

export function AgendarReunionMarcasModal({ isOpen, onClose, initialAreaIndex = 0 }: AgendarReunionMarcasModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    areaIndex: initialAreaIndex,
    marcas: [],
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    notas: ''
  });

  // Update area when initialAreaIndex changes
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, areaIndex: initialAreaIndex }));
    }
  }, [initialAreaIndex, isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({
          areaIndex: initialAreaIndex,
          marcas: [],
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          fecha: '',
          hora: '',
          notas: ''
        });
      }, 300);
    }
  }, [isOpen, initialAreaIndex]);

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

  const toggleMarca = (marca: string) => {
    setFormData(prev => ({
      ...prev,
      marcas: prev.marcas.includes(marca)
        ? prev.marcas.filter(m => m !== marca)
        : [...prev.marcas, marca]
    }));
  };

  const canContinueStep1 = formData.areaIndex >= 0;
  const canContinueStep2 = formData.marcas.length > 0 || formData.marcas.includes('No estoy seguro');
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
    const area = AREAS[formData.areaIndex].name;
    const marcasText = formData.marcas.join(', ');
    
    const message = `Hola Trendit 👋 Vengo desde Marcas & Partners.
Área: ${area}
Marcas: ${marcasText}
Fecha sugerida: ${formData.fecha} ${formData.hora}
Empresa: ${formData.empresa}
Contacto: ${formData.nombre} – ${formData.telefono}${formData.notas ? `\nComentarios: ${formData.notas}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
    
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

  const selectedArea = AREAS[formData.areaIndex];

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
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 700
                  }}
                >
                  Agendar reunión con Trendit
                </h2>
                <p 
                  className="text-[13px] sm:text-[14px] text-neutral-600"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Elegí área y marcas de interés, y coordinamos fecha
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
                      Área de conocimiento
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Seleccioná el área de tu interés
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {AREAS.map((area) => (
                        <button
                          key={area.id}
                          onClick={() => setFormData(prev => ({ ...prev, areaIndex: area.id, marcas: [] }))}
                          className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 text-left ${
                            formData.areaIndex === area.id
                              ? 'border-[#E94E1B] bg-[#FFF7F3]'
                              : 'border-neutral-200 hover:border-neutral-300 bg-white'
                          }`}
                        >
                          <div 
                            className={`size-10 sm:size-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                              formData.areaIndex === area.id
                                ? 'bg-[#E94E1B] text-white'
                                : 'bg-neutral-100 text-neutral-600'
                            }`}
                          >
                            {area.icon}
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
                              {area.name}
                            </p>
                          </div>
                          {formData.areaIndex === area.id && (
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
                      ¿Qué marcas querés evaluar?
                    </h3>
                    <p 
                      className="text-[14px] sm:text-[15px] text-neutral-600 mb-6"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Podés seleccionar varias
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                      {selectedArea.brands.map((marca) => (
                        <button
                          key={marca}
                          onClick={() => toggleMarca(marca)}
                          className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border-2 transition-all duration-200 ${
                            formData.marcas.includes(marca)
                              ? 'border-[#E94E1B] bg-[#FFF7F3] text-[#E94E1B]'
                              : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700'
                          }`}
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            fontSize: '14px'
                          }}
                        >
                          {marca}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, marcas: ['No estoy seguro / Quiero recomendación'] }));
                      }}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 text-center ${
                        formData.marcas.includes('No estoy seguro / Quiero recomendación')
                          ? 'border-[#E94E1B] bg-[#FFF7F3] text-[#E94E1B]'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700'
                      }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500,
                        fontSize: '14px'
                      }}
                    >
                      No estoy seguro / Quiero recomendación
                    </button>
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
                          Empresa / Razón social <span className="text-[#E94E1B]">*</span>
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
                      Fecha y horario
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
                          Horario preferido (ART - GMT-3)
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

                      <div>
                        <label 
                          htmlFor="notas"
                          className="block text-[13px] sm:text-[14px] mb-2"
                          style={{
                            color: '#141414',
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Notas (opcional)
                        </label>
                        <textarea
                          id="notas"
                          value={formData.notas}
                          onChange={(e) => setFormData(prev => ({ ...prev, notas: e.target.value }))}
                          rows={3}
                          placeholder="Contexto adicional..."
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all resize-none"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 400,
                            fontSize: '14px'
                          }}
                        />
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
                              <strong>Área:</strong> {selectedArea.name}
                            </p>
                            <p>
                              <strong>Marcas:</strong> {formData.marcas.join(', ')}
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
                  onClick={handleSubmitWhatsApp}
                  disabled={!canContinueStep4}
                  className="h-11 sm:h-12 px-6 sm:px-8 bg-[#E94E1B] hover:bg-[#d94419] text-white disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    borderRadius: '10px'
                  }}
                >
                  Abrir WhatsApp con el resumen
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

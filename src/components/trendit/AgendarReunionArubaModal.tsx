import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Wifi,
  Network,
  Settings,
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Building2
} from 'lucide-react';
import { Button } from '../ui/button';
import { AlertModal } from './AlertModal';

interface AgendarReunionArubaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  solucion: string;
  alcance: string;
  sedes: string;
  fecha: string;
  hora: string;
  nombre: string;
  empresa: string;
  cargo: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const SOLUCIONES = [
  {
    id: 'wifi-corporativo',
    icon: <Wifi className="size-6" />,
    label: 'Wi-Fi Corporativo',
    subtitle: 'Access Points profesionales'
  },
  {
    id: 'switching',
    icon: <Network className="size-6" />,
    label: 'Switching & Campus',
    subtitle: 'Backbone de red'
  },
  {
    id: 'gestion',
    icon: <Settings className="size-6" />,
    label: 'Gestión y configuración',
    subtitle: 'Operación centralizada'
  },
  {
    id: 'instant-on',
    icon: <Zap className="size-6" />,
    label: 'Aruba Instant On',
    subtitle: 'SMB / Sucursales rápidas'
  }
];

const ALCANCES = [
  'Nueva implementación (greenfield)',
  'Modernización de red existente',
  'Expansión de cobertura Wi-Fi',
  'Mejora de performance y estabilidad',
  'Segmentación y seguridad',
  'Observabilidad y gestión'
];

const SEDES = [
  '1 sede',
  '2–5 sedes',
  '6–20 sedes',
  '+20 sedes',
  'Campus/Planta (alta densidad)'
];

const HORARIOS = [
  '09:00',
  '11:00',
  '14:00',
  '16:00',
  '18:00'
];

export function AgendarReunionArubaModal({ isOpen, onClose }: AgendarReunionArubaModalProps) {
  const [step, setStep] = useState(1);
  const [alertModal, setAlertModal] = useState<{
    isOpen: boolean;
    type: 'success' | 'error' | 'warning';
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });
  const [formData, setFormData] = useState<FormData>({
    solucion: '',
    alcance: '',
    sedes: '',
    fecha: '',
    hora: '',
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({
          solucion: '',
          alcance: '',
          sedes: '',
          fecha: '',
          hora: '',
          nombre: '',
          empresa: '',
          cargo: '',
          email: '',
          telefono: '',
          mensaje: ''
        });
      }, 300);
    }
  }, [isOpen]);

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (sendViaWhatsApp: boolean = false) => {
    const selectedSolucion = SOLUCIONES.find(s => s.id === formData.solucion);

    const message = `🔷 *Solicitud Aruba Networking*\n\n` +
      `*Solución:* ${selectedSolucion?.label || 'No especificada'}\n` +
      `*Alcance:* ${formData.alcance}\n` +
      `*Sedes:* ${formData.sedes}\n` +
      `*Fecha preferida:* ${formData.fecha || 'A coordinar'}\n` +
      `*Hora preferida:* ${formData.hora || 'A coordinar'}\n\n` +
      `*Contacto:*\n` +
      `Nombre: ${formData.nombre}\n` +
      `Empresa: ${formData.empresa}\n` +
      `Cargo: ${formData.cargo}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.telefono}\n` +
      `${formData.mensaje ? `\nMensaje adicional: ${formData.mensaje}` : ''}`;

    if (sendViaWhatsApp) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
      onClose();
    } else {
      setAlertModal({
        isOpen: true,
        type: 'success',
        title: '¡Solicitud enviada!',
        message: 'Te contactaremos pronto.'
      });
    }
  };

  const handleCloseAlert = () => {
    setAlertModal({ ...alertModal, isOpen: false });
    onClose();
  };

  if (!isOpen) return null;

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#282327] to-[#2d2832] p-6 md:p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 size-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="size-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 rounded-xl bg-[#E94E1B] flex items-center justify-center">
                  <Network className="size-6 text-white" />
                </div>
                <div>
                  <h2
                    className="text-white text-[22px] md:text-[24px]"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
                  >
                    Diseño de red Aruba
                  </h2>
                  <p
                    className="text-neutral-300 text-[14px]"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                  >
                    Paso {step} de {totalSteps}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-[#E94E1B] rounded-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {step === 1 && (
                    <Step1Solucion formData={formData} setFormData={setFormData} />
                  )}
                  {step === 2 && (
                    <Step2Alcance formData={formData} setFormData={setFormData} />
                  )}
                  {step === 3 && (
                    <Step3Sedes formData={formData} setFormData={setFormData} />
                  )}
                  {step === 4 && (
                    <Step4Fecha formData={formData} setFormData={setFormData} />
                  )}
                  {step === 5 && (
                    <Step5Contacto formData={formData} setFormData={setFormData} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 p-6 bg-neutral-50">
              <div className="flex flex-col sm:flex-row gap-3">
                {step > 1 && (
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 border-neutral-300 hover:bg-neutral-100"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
                  >
                    <ArrowLeft className="mr-2 size-4" />
                    Anterior
                  </Button>
                )}

                {step < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid(step, formData)}
                    className="flex-1 bg-[#E94E1B] hover:bg-[#d44317] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                  >
                    Continuar
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={() => handleSubmit(false)}
                      disabled={!isStepValid(5, formData)}
                      className="flex-1 bg-[#E94E1B] hover:bg-[#d44317] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                    >
                      <Calendar className="mr-2 size-4" />
                      Enviar solicitud
                    </Button>
                    <Button
                      onClick={() => handleSubmit(true)}
                      disabled={!isStepValid(5, formData)}
                      variant="outline"
                      className="flex-1 border-neutral-300 hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
                    >
                      <MessageCircle className="mr-2 size-4" />
                      Enviar por WhatsApp
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Alert Modal */}
      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={handleCloseAlert}
        type={alertModal.type}
        title={alertModal.title}
        message={alertModal.message}
      />
    </AnimatePresence>
  );
}

function isStepValid(step: number, formData: FormData): boolean {
  switch (step) {
    case 1: return !!formData.solucion;
    case 2: return !!formData.alcance;
    case 3: return !!formData.sedes;
    case 4: return true; // Fecha/hora son opcionales
    case 5: return !!(formData.nombre && formData.empresa && formData.email && formData.telefono);
    default: return false;
  }
}

interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

function Step1Solucion({ formData, setFormData }: StepProps) {
  return (
    <div>
      <h3
        className="mb-2 text-neutral-900"
        style={{ fontFamily: 'Campton, sans-serif' }}
      >
        ¿Qué solución Aruba te interesa?
      </h3>
      <p
        className="text-neutral-600 mb-6 text-[15px]"
        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
      >
        Seleccioná el tipo de infraestructura de red
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {SOLUCIONES.map((solucion) => (
          <button
            key={solucion.id}
            onClick={() => setFormData({ ...formData, solucion: solucion.id })}
            className={`p-5 rounded-xl border-2 text-left transition-all duration-300 ${formData.solucion === solucion.id
              ? 'border-[#E94E1B] bg-orange-50'
              : 'border-neutral-200 hover:border-neutral-300 bg-white'
              }`}
          >
            <div className={`size-10 rounded-lg flex items-center justify-center mb-3 ${formData.solucion === solucion.id
              ? 'bg-[#E94E1B] text-white'
              : 'bg-neutral-100 text-neutral-600'
              }`}>
              {solucion.icon}
            </div>
            <div
              className="text-neutral-900 mb-1"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
            >
              {solucion.label}
            </div>
            <div
              className="text-neutral-500 text-[13px]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            >
              {solucion.subtitle}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Step2Alcance({ formData, setFormData }: StepProps) {
  return (
    <div>
      <h3
        className="mb-2 text-neutral-900"
        style={{ fontFamily: 'Campton, sans-serif' }}
      >
        ¿Cuál es el alcance del proyecto?
      </h3>
      <p
        className="text-neutral-600 mb-6 text-[15px]"
        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
      >
        Contanos qué estás buscando implementar o mejorar
      </p>

      <div className="space-y-3">
        {ALCANCES.map((alcance) => (
          <button
            key={alcance}
            onClick={() => setFormData({ ...formData, alcance })}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${formData.alcance === alcance
              ? 'border-[#E94E1B] bg-orange-50'
              : 'border-neutral-200 hover:border-neutral-300 bg-white'
              }`}
          >
            <div className={`size-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.alcance === alcance
              ? 'border-[#E94E1B]'
              : 'border-neutral-300'
              }`}>
              {formData.alcance === alcance && (
                <div className="size-2.5 rounded-full bg-[#E94E1B]" />
              )}
            </div>
            <span
              className="text-neutral-900 text-[15px]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            >
              {alcance}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Step3Sedes({ formData, setFormData }: StepProps) {
  return (
    <div>
      <h3
        className="mb-2 text-neutral-900"
        style={{ fontFamily: 'Campton, sans-serif' }}
      >
        ¿Cuántas sedes involucra?
      </h3>
      <p
        className="text-neutral-600 mb-6 text-[15px]"
        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
      >
        Nos ayuda a dimensionar la solución correctamente
      </p>

      <div className="space-y-3">
        {SEDES.map((sede) => (
          <button
            key={sede}
            onClick={() => setFormData({ ...formData, sedes: sede })}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${formData.sedes === sede
              ? 'border-[#E94E1B] bg-orange-50'
              : 'border-neutral-200 hover:border-neutral-300 bg-white'
              }`}
          >
            <div className={`size-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.sedes === sede
              ? 'border-[#E94E1B]'
              : 'border-neutral-300'
              }`}>
              {formData.sedes === sede && (
                <div className="size-2.5 rounded-full bg-[#E94E1B]" />
              )}
            </div>
            <span
              className="text-neutral-900 text-[15px]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            >
              {sede}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Step4Fecha({ formData, setFormData }: StepProps) {
  return (
    <div>
      <h3
        className="mb-2 text-neutral-900"
        style={{ fontFamily: 'Campton, sans-serif' }}
      >
        ¿Cuándo te gustaría tener la reunión? (opcional)
      </h3>
      <p
        className="text-neutral-600 mb-6 text-[15px]"
        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
      >
        Podés dejarlo en blanco y lo coordinamos después
      </p>

      <div className="space-y-4">
        <div>
          <label
            className="block text-neutral-700 mb-2 text-[14px]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
          >
            Fecha preferida
          </label>
          <input
            type="date"
            value={formData.fecha}
            onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-[#E94E1B] focus:outline-none transition-colors"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
          />
        </div>

        <div>
          <label
            className="block text-neutral-700 mb-2 text-[14px]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
          >
            Hora preferida
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {HORARIOS.map((hora) => (
              <button
                key={hora}
                onClick={() => setFormData({ ...formData, hora })}
                className={`py-3 rounded-xl border-2 text-center transition-all duration-300 ${formData.hora === hora
                  ? 'border-[#E94E1B] bg-orange-50 text-[#E94E1B]'
                  : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700'
                  }`}
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
              >
                {hora}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5Contacto({ formData, setFormData }: StepProps) {
  return (
    <div>
      <h3
        className="mb-2 text-neutral-900"
        style={{ fontFamily: 'Campton, sans-serif' }}
      >
        Datos de contacto
      </h3>
      <p
        className="text-neutral-600 mb-6 text-[15px]"
        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
      >
        Para coordinar la reunión y enviarte la propuesta
      </p>

      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-neutral-700 mb-2 text-[14px]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            >
              Nombre *
            </label>
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-[#E94E1B] focus:outline-none transition-colors"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              className="block text-neutral-700 mb-2 text-[14px]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            >
              Empresa *
            </label>
            <input
              type="text"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-[#E94E1B] focus:outline-none transition-colors"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              placeholder="Nombre de la empresa"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-neutral-700 mb-2 text-[14px]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
          >
            Cargo
          </label>
          <input
            type="text"
            value={formData.cargo}
            onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-[#E94E1B] focus:outline-none transition-colors"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            placeholder="Tu rol en la empresa"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-neutral-700 mb-2 text-[14px]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            >
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-[#E94E1B] focus:outline-none transition-colors"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              placeholder="tu@empresa.com"
            />
          </div>

          <div>
            <label
              className="block text-neutral-700 mb-2 text-[14px]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            >
              Teléfono / WhatsApp *
            </label>
            <input
              type="tel"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-[#E94E1B] focus:outline-none transition-colors"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              placeholder="+54 9 351..."
            />
          </div>
        </div>

        <div>
          <label
            className="block text-neutral-700 mb-2 text-[14px]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
          >
            Mensaje adicional (opcional)
          </label>
          <textarea
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-[#E94E1B] focus:outline-none transition-colors resize-none"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            placeholder="Detalles adicionales sobre tu proyecto..."
          />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Cloud,
  TrendingDown,
  RefreshCw,
  Shield,
  Cpu,
  Database,
  Server,
  Building2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { Button } from '../ui/button';

interface AgendarReunionGreenLakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  objetivo: string[];
  situacion: string;
  sedes: string;
  workloads: string[];
  prioridad: string;
  presupuesto: string;
  nombre: string;
  empresa: string;
  cargo: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const OBJETIVOS = [
  {
    id: 'reducir-capex',
    icon: <TrendingDown className="size-6" />,
    label: 'Reducir CAPEX',
    subtitle: 'Pasar a consumo flexible'
  },
  {
    id: 'modernizar',
    icon: <RefreshCw className="size-6" />,
    label: 'Modernizar data center',
    subtitle: 'Infraestructura híbrida'
  },
  {
    id: 'resiliencia',
    icon: <Shield className="size-6" />,
    label: 'Continuidad y resiliencia',
    subtitle: 'Disponibilidad garantizada'
  },
  {
    id: 'ia-gpu',
    icon: <Cpu className="size-6" />,
    label: 'Preparar IA / GPUs',
    subtitle: 'Alto rendimiento'
  },
  {
    id: 'storage',
    icon: <Database className="size-6" />,
    label: 'Storage y crecimiento',
    subtitle: 'Capacidad escalable'
  }
];

const SITUACIONES = [
  'On-premise principalmente',
  'Cloud principalmente',
  'Híbrido (on-premise + cloud)',
  'Migración en proceso',
  'Greenfield / nuevo proyecto'
];

const SEDES = [
  '1 sede',
  '2–5 sedes',
  '6–20 sedes',
  '+20 sedes',
  'Multinacional / Global'
];

const WORKLOADS = [
  {
    id: 'virtualizacion',
    icon: <Server className="size-5" />,
    label: 'Virtualización'
  },
  {
    id: 'bases-datos',
    icon: <Database className="size-5" />,
    label: 'Bases de datos'
  },
  {
    id: 'backup',
    icon: <Shield className="size-5" />,
    label: 'Backup / DR'
  },
  {
    id: 'vdi',
    icon: <Building2 className="size-5" />,
    label: 'VDI / Escritorios virtuales'
  },
  {
    id: 'analitica-ia',
    icon: <Cpu className="size-5" />,
    label: 'Analítica / IA / HPC'
  },
  {
    id: 'aplicaciones-criticas',
    icon: <CheckCircle2 className="size-5" />,
    label: 'Aplicaciones críticas (ERP, core)'
  }
];

const PRIORIDADES = [
  'Tiempo de implementación',
  'Seguridad y compliance',
  'Performance y latencia',
  'Costo total de operación (TCO)',
  'Escalabilidad futura',
  'Soporte y gestión'
];

const PRESUPUESTOS = [
  'Menos de USD 50k',
  'USD 50k - 150k',
  'USD 150k - 500k',
  'Más de USD 500k',
  'A definir según propuesta'
];

export function AgendarReunionGreenLakeModal({ isOpen, onClose }: AgendarReunionGreenLakeModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    objetivo: [],
    situacion: '',
    sedes: '',
    workloads: [],
    prioridad: '',
    presupuesto: '',
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
          objetivo: [],
          situacion: '',
          sedes: '',
          workloads: [],
          prioridad: '',
          presupuesto: '',
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

  const toggleObjetivo = (objetivoId: string) => {
    setFormData(prev => ({
      ...prev,
      objetivo: prev.objetivo.includes(objetivoId)
        ? prev.objetivo.filter(id => id !== objetivoId)
        : [...prev.objetivo, objetivoId]
    }));
  };

  const toggleWorkload = (workloadId: string) => {
    setFormData(prev => ({
      ...prev,
      workloads: prev.workloads.includes(workloadId)
        ? prev.workloads.filter(id => id !== workloadId)
        : [...prev.workloads, workloadId]
    }));
  };

  const handleSubmit = (sendViaWhatsApp: boolean = false) => {
    const selectedObjetivos = formData.objetivo
      .map(id => OBJETIVOS.find(o => o.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const selectedWorkloads = formData.workloads
      .map(id => WORKLOADS.find(w => w.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const message = `🟢 *Evaluación HPE GreenLake*\n\n` +
      `*Objetivo:* ${selectedObjetivos || 'No especificado'}\n` +
      `*Situación actual:* ${formData.situacion}\n` +
      `*Sedes:* ${formData.sedes}\n` +
      `*Workloads:* ${selectedWorkloads || 'No especificados'}\n` +
      `*Prioridad:* ${formData.prioridad}\n` +
      `*Presupuesto estimado:* ${formData.presupuesto}\n\n` +
      `*Contacto:*\n` +
      `Nombre: ${formData.nombre}\n` +
      `Empresa: ${formData.empresa}\n` +
      `Cargo: ${formData.cargo}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.telefono}\n` +
      `${formData.mensaje ? `\nMensaje: ${formData.mensaje}` : ''}\n\n` +
      `¿Agendamos una reunión?`;

    if (sendViaWhatsApp) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
    } else {
      console.log('Formulario enviado:', formData);
      alert('¡Solicitud enviada! Te contactaremos pronto para coordinar la evaluación.');
    }
    
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
            <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 p-6 md:p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 size-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="size-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Cloud className="size-6 text-white" />
                </div>
                <div>
                  <h2 
                    className="text-white text-[22px] md:text-[24px]"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 700 }}
                  >
                    Explorar HPE GreenLake
                  </h2>
                  <p 
                    className="text-emerald-50 text-[14px]"
                    style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
                  >
                    Paso {step} de {totalSteps}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-white rounded-full"
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
                    <Step1Objetivo formData={formData} toggleObjetivo={toggleObjetivo} />
                  )}
                  {step === 2 && (
                    <Step2Situacion formData={formData} setFormData={setFormData} />
                  )}
                  {step === 3 && (
                    <Step3Workloads formData={formData} toggleWorkload={toggleWorkload} />
                  )}
                  {step === 4 && (
                    <Step4Prioridades formData={formData} setFormData={setFormData} />
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
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
    </AnimatePresence>
  );
}

function isStepValid(step: number, formData: FormData): boolean {
  switch (step) {
    case 1: return formData.objetivo.length > 0;
    case 2: return !!(formData.situacion && formData.sedes);
    case 3: return formData.workloads.length > 0;
    case 4: return !!(formData.prioridad && formData.presupuesto);
    case 5: return !!(formData.nombre && formData.empresa && formData.email && formData.telefono);
    default: return false;
  }
}

interface Step1Props {
  formData: FormData;
  toggleObjetivo: (id: string) => void;
}

function Step1Objetivo({ formData, toggleObjetivo }: Step1Props) {
  return (
    <div>
      <h3 
        className="mb-2 text-neutral-900"
        style={{ fontFamily: 'Campton, sans-serif' }}
      >
        ¿Cuál es tu objetivo con GreenLake?
      </h3>
      <p 
        className="text-neutral-600 mb-6 text-[15px]"
        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
      >
        Podés seleccionar más de uno
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {OBJETIVOS.map((objetivo) => (
          <button
            key={objetivo.id}
            onClick={() => toggleObjetivo(objetivo.id)}
            className={`p-5 rounded-xl border-2 text-left transition-all duration-300 ${
              formData.objetivo.includes(objetivo.id)
                ? 'border-emerald-600 bg-emerald-50'
                : 'border-neutral-200 hover:border-neutral-300 bg-white'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`size-10 rounded-lg flex items-center justify-center ${
                formData.objetivo.includes(objetivo.id)
                  ? 'bg-emerald-600 text-white'
                  : 'bg-neutral-100 text-neutral-600'
              }`}>
                {objetivo.icon}
              </div>
              {formData.objetivo.includes(objetivo.id) && (
                <CheckCircle2 className="size-5 text-emerald-600" />
              )}
            </div>
            <div 
              className="text-neutral-900 mb-1"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
            >
              {objetivo.label}
            </div>
            <div 
              className="text-neutral-500 text-[13px]"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            >
              {objetivo.subtitle}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

function Step2Situacion({ formData, setFormData }: StepProps) {
  return (
    <div>
      <h3 
        className="mb-2 text-neutral-900"
        style={{ fontFamily: 'Campton, sans-serif' }}
      >
        Situación actual y sedes
      </h3>
      <p 
        className="text-neutral-600 mb-6 text-[15px]"
        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
      >
        Nos ayuda a entender tu entorno actual
      </p>

      <div className="space-y-6">
        <div>
          <label 
            className="block text-neutral-700 mb-3 text-[14px]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
          >
            ¿Dónde está tu infraestructura hoy?
          </label>
          <div className="space-y-3">
            {SITUACIONES.map((situacion) => (
              <button
                key={situacion}
                onClick={() => setFormData({ ...formData, situacion })}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${
                  formData.situacion === situacion
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white'
                }`}
              >
                <div className={`size-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  formData.situacion === situacion
                    ? 'border-emerald-600'
                    : 'border-neutral-300'
                }`}>
                  {formData.situacion === situacion && (
                    <div className="size-2.5 rounded-full bg-emerald-600" />
                  )}
                </div>
                <span 
                  className="text-neutral-900 text-[15px]"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
                >
                  {situacion}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label 
            className="block text-neutral-700 mb-3 text-[14px]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
          >
            ¿Cuántas sedes tenés?
          </label>
          <div className="space-y-3">
            {SEDES.map((sede) => (
              <button
                key={sede}
                onClick={() => setFormData({ ...formData, sedes: sede })}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${
                  formData.sedes === sede
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white'
                }`}
              >
                <div className={`size-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  formData.sedes === sede
                    ? 'border-emerald-600'
                    : 'border-neutral-300'
                }`}>
                  {formData.sedes === sede && (
                    <div className="size-2.5 rounded-full bg-emerald-600" />
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
      </div>
    </div>
  );
}

interface Step3Props {
  formData: FormData;
  toggleWorkload: (id: string) => void;
}

function Step3Workloads({ formData, toggleWorkload }: Step3Props) {
  return (
    <div>
      <h3 
        className="mb-2 text-neutral-900"
        style={{ fontFamily: 'Campton, sans-serif' }}
      >
        ¿Qué cargas de trabajo vas a correr?
      </h3>
      <p 
        className="text-neutral-600 mb-6 text-[15px]"
        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
      >
        Seleccioná todas las que apliquen
      </p>

      <div className="space-y-3">
        {WORKLOADS.map((workload) => (
          <button
            key={workload.id}
            onClick={() => toggleWorkload(workload.id)}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${
              formData.workloads.includes(workload.id)
                ? 'border-emerald-600 bg-emerald-50'
                : 'border-neutral-200 hover:border-neutral-300 bg-white'
            }`}
          >
            <div className={`size-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
              formData.workloads.includes(workload.id)
                ? 'bg-emerald-600 text-white'
                : 'bg-neutral-100 text-neutral-600'
            }`}>
              {workload.icon}
            </div>
            <span 
              className="text-neutral-900 text-[15px] flex-1"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            >
              {workload.label}
            </span>
            {formData.workloads.includes(workload.id) && (
              <CheckCircle2 className="size-5 text-emerald-600 flex-shrink-0" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function Step4Prioridades({ formData, setFormData }: StepProps) {
  return (
    <div>
      <h3 
        className="mb-2 text-neutral-900"
        style={{ fontFamily: 'Campton, sans-serif' }}
      >
        Prioridades y presupuesto
      </h3>
      <p 
        className="text-neutral-600 mb-6 text-[15px]"
        style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
      >
        Para ajustar la propuesta a tus necesidades
      </p>

      <div className="space-y-6">
        <div>
          <label 
            className="block text-neutral-700 mb-3 text-[14px]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
          >
            ¿Cuál es tu principal prioridad?
          </label>
          <div className="space-y-3">
            {PRIORIDADES.map((prioridad) => (
              <button
                key={prioridad}
                onClick={() => setFormData({ ...formData, prioridad })}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${
                  formData.prioridad === prioridad
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white'
                }`}
              >
                <div className={`size-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  formData.prioridad === prioridad
                    ? 'border-emerald-600'
                    : 'border-neutral-300'
                }`}>
                  {formData.prioridad === prioridad && (
                    <div className="size-2.5 rounded-full bg-emerald-600" />
                  )}
                </div>
                <span 
                  className="text-neutral-900 text-[15px]"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
                >
                  {prioridad}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label 
            className="block text-neutral-700 mb-3 text-[14px]"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
          >
            Rango de presupuesto estimado
          </label>
          <div className="space-y-3">
            {PRESUPUESTOS.map((presupuesto) => (
              <button
                key={presupuesto}
                onClick={() => setFormData({ ...formData, presupuesto })}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-3 ${
                  formData.presupuesto === presupuesto
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white'
                }`}
              >
                <div className={`size-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  formData.presupuesto === presupuesto
                    ? 'border-emerald-600'
                    : 'border-neutral-300'
                }`}>
                  {formData.presupuesto === presupuesto && (
                    <div className="size-2.5 rounded-full bg-emerald-600" />
                  )}
                </div>
                <span 
                  className="text-neutral-900 text-[15px]"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
                >
                  {presupuesto}
                </span>
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
        Para enviarte la evaluación y coordinar próximos pasos
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
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-600 focus:outline-none transition-colors"
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
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-600 focus:outline-none transition-colors"
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
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-600 focus:outline-none transition-colors"
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
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-600 focus:outline-none transition-colors"
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
              className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-600 focus:outline-none transition-colors"
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
            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-emerald-600 focus:outline-none transition-colors resize-none"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
            placeholder="Información adicional sobre tu proyecto..."
          />
        </div>
      </div>
    </div>
  );
}

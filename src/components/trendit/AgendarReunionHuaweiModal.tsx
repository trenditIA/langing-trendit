import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Network,
  Wifi,
  Radio,
  Cable,
  Video,
  HardDrive,
  Package,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { Button } from '../ui/button';

interface AgendarReunionHuaweiModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialArea?: string;
}

interface FormData {
  area: string;
  contexto: string;
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

const AREAS = [
  {
    id: 'enterprise-network',
    icon: <Network className="size-6" />,
    label: 'Enterprise Network',
    subtitle: 'Campus & Branch'
  },
  {
    id: 'wifi-campus',
    icon: <Wifi className="size-6" />,
    label: 'Wi-Fi & Campus',
    subtitle: 'Conectividad inalámbrica'
  },
  {
    id: 'wireless-industrial',
    icon: <Radio className="size-6" />,
    label: 'Wireless Industrial',
    subtitle: 'Conectividad crítica'
  },
  {
    id: 'optical-network',
    icon: <Cable className="size-6" />,
    label: 'Optical Network',
    subtitle: 'Backbone de fibra'
  },
  {
    id: 'collaboration',
    icon: <Video className="size-6" />,
    label: 'Enterprise Collaboration',
    subtitle: 'Modern workplace'
  },
  {
    id: 'storage',
    icon: <HardDrive className="size-6" />,
    label: 'Storage',
    subtitle: 'Almacenamiento enterprise'
  },
  {
    id: 'ekit',
    icon: <Package className="size-6" />,
    label: 'Huawei eKit',
    subtitle: 'Despliegue ágil SMB'
  }
];

const CONTEXTOS = [
  'Nueva sede / sucursal',
  'Modernización de red',
  'Mejora de cobertura Wi-Fi',
  'Enlaces / fibra / backbone',
  'Conectividad industrial',
  'Sala de reuniones / colaboración',
  'Crecimiento de almacenamiento',
  'Diagnóstico / auditoría de infraestructura'
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

export function AgendarReunionHuaweiModal({ isOpen, onClose, initialArea = '' }: AgendarReunionHuaweiModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    area: '',
    contexto: '',
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

  // Set initial area if provided
  useEffect(() => {
    if (isOpen && initialArea) {
      const areaMap: Record<string, string> = {
        'Enterprise Network': 'enterprise-network',
        'Wi-Fi & Campus': 'wifi-campus',
        'Wireless Industrial': 'wireless-industrial',
        'Optical Network': 'optical-network',
        'Enterprise Collaboration': 'collaboration',
        'Storage': 'storage',
        'Huawei eKit': 'ekit'
      };
      const areaId = areaMap[initialArea] || '';
      if (areaId) {
        setFormData(prev => ({ ...prev, area: areaId }));
      }
    }
  }, [isOpen, initialArea]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({
          area: '',
          contexto: '',
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

  const handleSubmit = () => {
    // Get area label
    const areaLabel = AREAS.find(a => a.id === formData.area)?.label || formData.area;
    
    // Construct summary
    const summary = `
🔧 *Solicitud de reunión - Huawei*

*Área de interés:* ${areaLabel}
*Contexto:* ${formData.contexto}
*Cantidad de sedes:* ${formData.sedes}
*Fecha preferida:* ${formData.fecha}
*Horario preferido:* ${formData.hora}

*Datos de contacto:*
Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Cargo: ${formData.cargo}
Email: ${formData.email}
Teléfono: ${formData.telefono}

${formData.mensaje ? `*Mensaje adicional:*\n${formData.mensaje}` : ''}
    `.trim();

    const message = encodeURIComponent(summary);
    window.open(`https://wa.me/5493516714007?text=${message}`, '_blank');
    
    onClose();
  };

  const handleWhatsApp = () => {
    const areaLabel = AREAS.find(a => a.id === formData.area)?.label || 'área de interés';
    const message = `Hola Trendit, quiero asesoramiento sobre Huawei.\nÁrea: ${areaLabel}\nEmpresa: ${formData.empresa || '___'}\nSedes: ${formData.sedes || '___'}\nObjetivo: ${formData.contexto || '___'}\n¿Podemos agendar una reunión?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493516714007?text=${encodedMessage}`, '_blank');
    onClose();
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.area !== '';
      case 2:
        return formData.contexto !== '';
      case 3:
        return formData.sedes !== '';
      case 4:
        return formData.fecha !== '' && formData.hora !== '';
      case 5:
        return formData.nombre !== '' && formData.empresa !== '' && formData.email !== '' && formData.telefono !== '';
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#282327] to-[#2d2832] px-6 py-5 flex items-center justify-between">
            <div>
              <h3 className="text-white text-[20px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
                Agendar reunión - Huawei
              </h3>
              <p className="text-white/70 text-[14px] mt-1" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}>
                Paso {step} de 5
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-neutral-100">
            <motion.div
              className="h-full bg-[#E94E1B]"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <Step1 formData={formData} setFormData={setFormData} />
              )}
              {step === 2 && (
                <Step2 formData={formData} setFormData={setFormData} />
              )}
              {step === 3 && (
                <Step3 formData={formData} setFormData={setFormData} />
              )}
              {step === 4 && (
                <Step4 formData={formData} setFormData={setFormData} />
              )}
              {step === 5 && (
                <Step5 formData={formData} setFormData={setFormData} />
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t border-neutral-200 px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-neutral-300"
                  style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
                >
                  <ArrowLeft className="mr-2 size-4" />
                  Atrás
                </Button>
              )}
              <Button
                variant="outline"
                onClick={handleWhatsApp}
                className="border-neutral-300"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                <MessageCircle className="mr-2 size-4" />
                Enviar por WhatsApp
              </Button>
            </div>

            {step < 5 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="bg-[#E94E1B] hover:bg-[#d94419] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                Continuar
                <ArrowRight className="ml-2 size-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="bg-[#E94E1B] hover:bg-[#d94419] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                Enviar solicitud
                <CheckCircle2 className="ml-2 size-4" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// Step 1: Elegir área
function Step1({ formData, setFormData }: { formData: FormData; setFormData: (data: FormData | ((prev: FormData) => FormData)) => void }) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="text-[#282327] text-[22px] mb-2" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
        Elegí tu área de interés
      </h4>
      <p className="text-neutral-600 mb-6" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}>
        ¿En qué solución Huawei estás interesado?
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {AREAS.map((area) => (
          <button
            key={area.id}
            onClick={() => setFormData(prev => ({ ...prev, area: area.id }))}
            className={`border-2 rounded-xl p-4 text-left transition-all duration-200 ${
              formData.area === area.id
                ? 'border-[#E94E1B] bg-[#E94E1B]/5'
                : 'border-neutral-200 hover:border-neutral-300 bg-white'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                formData.area === area.id ? 'bg-[#E94E1B] text-white' : 'bg-neutral-100 text-neutral-600'
              }`}>
                {area.icon}
              </div>
              <div>
                <div className="text-[#282327] mb-1" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
                  {area.label}
                </div>
                <div className="text-[13px] text-neutral-500" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}>
                  {area.subtitle}
                </div>
              </div>
              {formData.area === area.id && (
                <CheckCircle2 className="size-5 text-[#E94E1B] ml-auto flex-shrink-0" />
              )}
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// Step 2: Contexto
function Step2({ formData, setFormData }: { formData: FormData; setFormData: (data: FormData | ((prev: FormData) => FormData)) => void }) {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="text-[#282327] text-[22px] mb-2" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
        Seleccioná tu contexto
      </h4>
      <p className="text-neutral-600 mb-6" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}>
        ¿Qué desafío o proyecto estás buscando resolver?
      </p>

      <div className="flex flex-wrap gap-3">
        {CONTEXTOS.map((contexto) => (
          <button
            key={contexto}
            onClick={() => setFormData(prev => ({ ...prev, contexto }))}
            className={`px-4 py-3 rounded-xl border-2 transition-all duration-200 text-[15px] ${
              formData.contexto === contexto
                ? 'border-[#E94E1B] bg-[#E94E1B]/5 text-[#E94E1B]'
                : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
            }`}
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
          >
            {contexto}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// Step 3: Sedes
function Step3({ formData, setFormData }: { formData: FormData; setFormData: (data: FormData | ((prev: FormData) => FormData)) => void }) {
  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="text-[#282327] text-[22px] mb-2" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
        Tamaño / escenario
      </h4>
      <p className="text-neutral-600 mb-6" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}>
        ¿Cuántas sedes o qué tipo de escenario?
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {SEDES.map((sede) => (
          <button
            key={sede}
            onClick={() => setFormData(prev => ({ ...prev, sedes: sede }))}
            className={`px-6 py-4 rounded-xl border-2 transition-all duration-200 text-center ${
              formData.sedes === sede
                ? 'border-[#E94E1B] bg-[#E94E1B]/5 text-[#E94E1B]'
                : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
            }`}
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
          >
            {sede}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// Step 4: Fecha y hora
function Step4({ formData, setFormData }: { formData: FormData; setFormData: (data: FormData | ((prev: FormData) => FormData)) => void }) {
  return (
    <motion.div
      key="step4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="text-[#282327] text-[22px] mb-2" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
        Fecha y hora preferida
      </h4>
      <p className="text-neutral-600 mb-6" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}>
        Te confirmamos el horario por WhatsApp/Email.
      </p>

      <div className="space-y-6">
        {/* Fecha */}
        <div>
          <label className="block text-[#282327] mb-2 text-[15px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
            Fecha preferida
          </label>
          <input
            type="date"
            value={formData.fecha}
            onChange={(e) => setFormData(prev => ({ ...prev, fecha: e.target.value }))}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#E94E1B] focus:outline-none transition-colors"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
          />
        </div>

        {/* Hora */}
        <div>
          <label className="block text-[#282327] mb-2 text-[15px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
            Horario preferido
          </label>
          <div className="flex flex-wrap gap-3">
            {HORARIOS.map((hora) => (
              <button
                key={hora}
                onClick={() => setFormData(prev => ({ ...prev, hora }))}
                className={`px-6 py-3 rounded-xl border-2 transition-all duration-200 ${
                  formData.hora === hora
                    ? 'border-[#E94E1B] bg-[#E94E1B]/5 text-[#E94E1B]'
                    : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                }`}
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}
              >
                {hora}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Step 5: Datos de contacto
function Step5({ formData, setFormData }: { formData: FormData; setFormData: (data: FormData | ((prev: FormData) => FormData)) => void }) {
  return (
    <motion.div
      key="step5"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="text-[#282327] text-[22px] mb-2" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
        Datos de contacto
      </h4>
      <p className="text-neutral-600 mb-6" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}>
        Para coordinar la reunión y enviarte la información.
      </p>

      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#282327] mb-2 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
              Nombre y apellido *
            </label>
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
              placeholder="Juan Pérez"
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#E94E1B] focus:outline-none transition-colors"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            />
          </div>

          <div>
            <label className="block text-[#282327] mb-2 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
              Empresa / Razón social *
            </label>
            <input
              type="text"
              value={formData.empresa}
              onChange={(e) => setFormData(prev => ({ ...prev, empresa: e.target.value }))}
              placeholder="Empresa S.A."
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#E94E1B] focus:outline-none transition-colors"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#282327] mb-2 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
            Cargo
          </label>
          <select
            value={formData.cargo}
            onChange={(e) => setFormData(prev => ({ ...prev, cargo: e.target.value }))}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#E94E1B] focus:outline-none transition-colors"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
          >
            <option value="">Seleccionar...</option>
            <option value="IT / Sistemas">IT / Sistemas</option>
            <option value="Compras / Procurement">Compras / Procurement</option>
            <option value="Dirección / Gerencia">Dirección / Gerencia</option>
            <option value="Operaciones">Operaciones</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#282327] mb-2 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="email@empresa.com"
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#E94E1B] focus:outline-none transition-colors"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            />
          </div>

          <div>
            <label className="block text-[#282327] mb-2 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
              Teléfono / WhatsApp *
            </label>
            <input
              type="tel"
              value={formData.telefono}
              onChange={(e) => setFormData(prev => ({ ...prev, telefono: e.target.value }))}
              placeholder="+54 9 351..."
              className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#E94E1B] focus:outline-none transition-colors"
              style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#282327] mb-2 text-[14px]" style={{ fontFamily: 'Campton, sans-serif', fontWeight: 600 }}>
            Mensaje adicional (opcional)
          </label>
          <textarea
            value={formData.mensaje}
            onChange={(e) => setFormData(prev => ({ ...prev, mensaje: e.target.value }))}
            placeholder="Información adicional que quieras compartir..."
            rows={4}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-[#E94E1B] focus:outline-none transition-colors resize-none"
            style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

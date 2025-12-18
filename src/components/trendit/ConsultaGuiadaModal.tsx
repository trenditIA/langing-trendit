import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Clipboard,
  Shield,
  Users,
  TrendingUp,
  Car,
  Thermometer,
  Cpu,
  AlertTriangle,
  Eye,
  Camera,
  FileText,
  Building2
} from 'lucide-react';

interface ConsultaGuiadaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultaGuiadaModal({ isOpen, onClose }: ConsultaGuiadaModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Estado para las selecciones
  const [selectedSites, setSelectedSites] = useState<string[]>([]);
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);
  const [selectedAnalytics, setSelectedAnalytics] = useState<string[]>([]);
  const [numCameras, setNumCameras] = useState('');
  const [hasExistingCameras, setHasExistingCameras] = useState<boolean | null>(null);
  const [architecture, setArchitecture] = useState('');
  
  // Datos de contacto
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const totalSteps = 4;

  const sitios = [
    'Industria / Planta',
    'Depósito / Logística',
    'Retail / Sucursales',
    'Oficinas',
    'Obra / Construcción',
    'Espacio público / Smart city',
    'Aeropuertos / Terminales',
    'SOC / Centro de monitoreo'
  ];

  const objetivos = [
    { id: 'perimetro', icon: <Shield className="size-5" />, label: 'Perímetro e intrusión' },
    { id: 'hse', icon: <AlertTriangle className="size-5" />, label: 'Seguridad operativa (HSE)' },
    { id: 'accesos', icon: <Building2 className="size-5" />, label: 'Control de accesos / puertas' },
    { id: 'conteo', icon: <Users className="size-5" />, label: 'Conteo de personas / aforo' },
    { id: 'lpr', icon: <Car className="size-5" />, label: 'LPR / patentes' },
    { id: 'incidentes', icon: <Eye className="size-5" />, label: 'Detección de incidentes' },
    { id: 'evidencia', icon: <FileText className="size-5" />, label: 'Evidencia y auditoría' },
    { id: 'falsas', icon: <CheckCircle2 className="size-5" />, label: 'Reducción de falsas alarmas' }
  ];

  const analiticas = [
    'Movimiento sospechoso',
    'Objetos abandonados/retirados',
    'Línea virtual / cruce',
    'Merodeo',
    'Zona restringida',
    'Conteo / flujo',
    'Heatmaps',
    'Búsqueda por metadata',
    'Alertas automáticas'
  ];

  const arquitecturas = ['Edge', 'On-prem', 'Cloud', 'No sé'];

  const toggleSelection = (array: string[], setArray: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    if (array.includes(item)) {
      setArray(array.filter(i => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  const canProceed = () => {
    switch(currentStep) {
      case 1:
        return selectedSites.length > 0;
      case 2:
        return selectedObjectives.length > 0;
      case 3:
        return selectedAnalytics.length > 0;
      case 4:
        return company && name && email && phone;
      default:
        return false;
    }
  };

  const generateSummary = () => {
    return `Hola Trendit 👋
Consulta por *SERVICIO: Videoseguridad & Analítica* (Consulta Guiada)

📍 Sitios: ${selectedSites.join(', ') || 'No especificado'}
🎯 Objetivos: ${selectedObjectives.join(', ') || 'No especificado'}
🧠 Analíticas: ${selectedAnalytics.join(', ') || 'No especificado'}
👁️ Cantidad de cámaras: ${numCameras || 'No definido'}
🏗️ ¿Cámaras existentes?: ${hasExistingCameras === null ? 'No especificado' : hasExistingCameras ? 'Sí' : 'No'}
🌐 Arquitectura: ${architecture || 'No especificado'}

👤 Contacto:
- Empresa: ${company}
- Nombre: ${name}
- Email: ${email}
- Teléfono: ${phone}
${city ? `- Ciudad: ${city}` : ''}

¿Me ayudan con un diagnóstico y propuesta inicial?`;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleWhatsAppFromModal = () => {
    const message = generateSummary();
    window.open(`https://wa.me/5493516013543?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
    resetForm();
  };

  const copySummary = () => {
    navigator.clipboard.writeText(generateSummary());
  };

  const resetForm = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setSelectedSites([]);
    setSelectedObjectives([]);
    setSelectedAnalytics([]);
    setNumCameras('');
    setHasExistingCameras(null);
    setArchitecture('');
    setCompany('');
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)'
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[860px] max-h-[90vh] overflow-y-auto rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, #1a1618 0%, #282327 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="sticky top-0 z-10 p-6 lg:p-8 border-b border-white/10"
                  style={{
                    background: 'linear-gradient(135deg, #1a1618 0%, #282327 100%)'
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 
                        className="text-[24px] lg:text-[28px] text-white mb-2"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 700
                        }}
                      >
                        Consulta guiada — Videoseguridad & Analítica
                      </h3>
                      <p 
                        className="text-[14px] text-neutral-400"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 400
                        }}
                      >
                        Completá 60 segundos. Podés elegir múltiples opciones.
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="size-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <X className="size-5" />
                    </button>
                  </div>

                  {/* Progress */}
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className="flex-1 h-1 rounded-full transition-all duration-300"
                        style={{
                          background: step <= currentStep ? '#E94E1B' : 'rgba(255, 255, 255, 0.1)'
                        }}
                      />
                    ))}
                  </div>
                  <p 
                    className="text-[12px] text-neutral-500 mt-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Paso {currentStep} de {totalSteps}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="lg:grid lg:grid-cols-[1fr_320px] gap-8">
                    {/* Left - Steps */}
                    <div>
                      {currentStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <h4 
                            className="text-[20px] text-white mb-4"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 600
                            }}
                          >
                            ¿Dónde lo vas a implementar?
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {sitios.map((sitio) => (
                              <button
                                key={sitio}
                                onClick={() => toggleSelection(selectedSites, setSelectedSites, sitio)}
                                className={`px-4 py-3 rounded-full transition-all duration-200 ${
                                  selectedSites.includes(sitio)
                                    ? 'bg-[#E94E1B] text-white'
                                    : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                                }`}
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 600,
                                  fontSize: '14px'
                                }}
                              >
                                {sitio}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <h4 
                            className="text-[20px] text-white mb-4"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 600
                            }}
                          >
                            ¿Qué buscás resolver?
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {objetivos.map((obj) => (
                              <button
                                key={obj.id}
                                onClick={() => toggleSelection(selectedObjectives, setSelectedObjectives, obj.label)}
                                className={`p-4 rounded-xl transition-all duration-200 flex items-center gap-3 text-left ${
                                  selectedObjectives.includes(obj.label)
                                    ? 'bg-[#E94E1B] text-white'
                                    : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
                                }`}
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 600,
                                  fontSize: '14px'
                                }}
                              >
                                {obj.icon}
                                {obj.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 3 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <h4 
                            className="text-[20px] text-white mb-4"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 600
                            }}
                          >
                            ¿Qué analítica necesitás?
                          </h4>
                          <div className="flex flex-wrap gap-3 mb-6">
                            {analiticas.map((analitica) => (
                              <button
                                key={analitica}
                                onClick={() => toggleSelection(selectedAnalytics, setSelectedAnalytics, analitica)}
                                className={`px-4 py-3 rounded-full transition-all duration-200 ${
                                  selectedAnalytics.includes(analitica)
                                    ? 'bg-[#E94E1B] text-white'
                                    : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                                }`}
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 600,
                                  fontSize: '14px'
                                }}
                              >
                                {analitica}
                              </button>
                            ))}
                          </div>

                          <div className="space-y-4 p-5 rounded-xl bg-white/5 border border-white/10">
                            <div>
                              <label 
                                className="block text-[13px] text-neutral-400 mb-2"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Cantidad estimada de cámaras
                              </label>
                              <input
                                type="number"
                                value={numCameras}
                                onChange={(e) => setNumCameras(e.target.value)}
                                placeholder="Ej: 10"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E94E1B] transition-all"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500,
                                  fontSize: '14px'
                                }}
                              />
                            </div>

                            <div>
                              <label 
                                className="block text-[13px] text-neutral-400 mb-2"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                ¿Tenés cámaras hoy?
                              </label>
                              <div className="flex gap-3">
                                <button
                                  onClick={() => setHasExistingCameras(true)}
                                  className={`flex-1 px-4 py-3 rounded-lg transition-all ${
                                    hasExistingCameras === true
                                      ? 'bg-[#E94E1B] text-white'
                                      : 'bg-white/10 text-white/70 hover:bg-white/15'
                                  }`}
                                  style={{
                                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: '14px'
                                  }}
                                >
                                  Sí
                                </button>
                                <button
                                  onClick={() => setHasExistingCameras(false)}
                                  className={`flex-1 px-4 py-3 rounded-lg transition-all ${
                                    hasExistingCameras === false
                                      ? 'bg-[#E94E1B] text-white'
                                      : 'bg-white/10 text-white/70 hover:bg-white/15'
                                  }`}
                                  style={{
                                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                    fontWeight: 600,
                                    fontSize: '14px'
                                  }}
                                >
                                  No
                                </button>
                              </div>
                            </div>

                            <div>
                              <label 
                                className="block text-[13px] text-neutral-400 mb-2"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Arquitectura preferida
                              </label>
                              <div className="grid grid-cols-2 gap-2">
                                {arquitecturas.map((arq) => (
                                  <button
                                    key={arq}
                                    onClick={() => setArchitecture(arq)}
                                    className={`px-4 py-3 rounded-lg transition-all ${
                                      architecture === arq
                                        ? 'bg-[#E94E1B] text-white'
                                        : 'bg-white/10 text-white/70 hover:bg-white/15'
                                    }`}
                                    style={{
                                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                      fontWeight: 600,
                                      fontSize: '14px'
                                    }}
                                  >
                                    {arq}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 4 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <h4 
                            className="text-[20px] text-white mb-4"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 600
                            }}
                          >
                            ¿A quién contactamos?
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <label 
                                className="block text-[13px] text-neutral-400 mb-2"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Empresa / Organización *
                              </label>
                              <input
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="Nombre de tu empresa"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E94E1B] transition-all"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500,
                                  fontSize: '14px'
                                }}
                              />
                            </div>

                            <div>
                              <label 
                                className="block text-[13px] text-neutral-400 mb-2"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Nombre y apellido *
                              </label>
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Tu nombre completo"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E94E1B] transition-all"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500,
                                  fontSize: '14px'
                                }}
                              />
                            </div>

                            <div>
                              <label 
                                className="block text-[13px] text-neutral-400 mb-2"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Email *
                              </label>
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@email.com"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E94E1B] transition-all"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500,
                                  fontSize: '14px'
                                }}
                              />
                            </div>

                            <div>
                              <label 
                                className="block text-[13px] text-neutral-400 mb-2"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Teléfono *
                              </label>
                              <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+54 9 351 000-0000"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E94E1B] transition-all"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500,
                                  fontSize: '14px'
                                }}
                              />
                            </div>

                            <div>
                              <label 
                                className="block text-[13px] text-neutral-400 mb-2"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500
                                }}
                              >
                                Ciudad / Provincia (opcional)
                              </label>
                              <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Córdoba"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E94E1B] transition-all"
                                style={{
                                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                  fontWeight: 500,
                                  fontSize: '14px'
                                }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Right - Summary (desktop only) */}
                    <div className="hidden lg:block">
                      <div 
                        className="sticky top-32 p-5 rounded-xl"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <h5 
                          className="text-[15px] text-white mb-4"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 600
                          }}
                        >
                          Resumen de tu consulta
                        </h5>
                        <div className="space-y-3 text-[13px]">
                          {selectedSites.length > 0 && (
                            <div>
                              <p className="text-neutral-400 mb-1" style={{ fontFamily: 'Campton', fontWeight: 500 }}>Sitios:</p>
                              <p className="text-white/80" style={{ fontFamily: 'Campton', fontWeight: 400 }}>{selectedSites.join(', ')}</p>
                            </div>
                          )}
                          {selectedObjectives.length > 0 && (
                            <div>
                              <p className="text-neutral-400 mb-1" style={{ fontFamily: 'Campton', fontWeight: 500 }}>Objetivos:</p>
                              <p className="text-white/80" style={{ fontFamily: 'Campton', fontWeight: 400 }}>{selectedObjectives.join(', ')}</p>
                            </div>
                          )}
                          {selectedAnalytics.length > 0 && (
                            <div>
                              <p className="text-neutral-400 mb-1" style={{ fontFamily: 'Campton', fontWeight: 500 }}>Analíticas:</p>
                              <p className="text-white/80" style={{ fontFamily: 'Campton', fontWeight: 400 }}>{selectedAnalytics.join(', ')}</p>
                            </div>
                          )}
                          {numCameras && (
                            <div>
                              <p className="text-neutral-400 mb-1" style={{ fontFamily: 'Campton', fontWeight: 500 }}>Cámaras:</p>
                              <p className="text-white/80" style={{ fontFamily: 'Campton', fontWeight: 400 }}>{numCameras}</p>
                            </div>
                          )}
                          {architecture && (
                            <div>
                              <p className="text-neutral-400 mb-1" style={{ fontFamily: 'Campton', fontWeight: 500 }}>Arquitectura:</p>
                              <p className="text-white/80" style={{ fontFamily: 'Campton', fontWeight: 400 }}>{architecture}</p>
                            </div>
                          )}
                          {company && (
                            <div>
                              <p className="text-neutral-400 mb-1" style={{ fontFamily: 'Campton', fontWeight: 500 }}>Contacto:</p>
                              <p className="text-white/80" style={{ fontFamily: 'Campton', fontWeight: 400 }}>{company} - {name}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer - Navigation */}
                <div 
                  className="sticky bottom-0 p-6 lg:p-8 border-t border-white/10 flex justify-between gap-4"
                  style={{
                    background: 'linear-gradient(135deg, #1a1618 0%, #282327 100%)'
                  }}
                >
                  {currentStep > 1 ? (
                    <button
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/15 transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                    >
                      <ArrowLeft className="size-4" />
                      Anterior
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      onClick={() => setCurrentStep(currentStep + 1)}
                      disabled={!canProceed()}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                        canProceed()
                          ? 'bg-[#E94E1B] text-white hover:bg-[#D43E10] shadow-lg'
                          : 'bg-white/10 text-white/40 cursor-not-allowed'
                      }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                    >
                      Siguiente
                      <ArrowRight className="size-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canProceed()}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                        canProceed()
                          ? 'bg-[#E94E1B] text-white hover:bg-[#D43E10] shadow-lg'
                          : 'bg-white/10 text-white/40 cursor-not-allowed'
                      }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                    >
                      Enviar consulta
                      <CheckCircle2 className="size-4" />
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Success State */
              <div className="p-8 lg:p-12 text-center">
                <div 
                  className="size-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: 'rgba(233, 78, 27, 0.2)',
                    border: '2px solid #E94E1B'
                  }}
                >
                  <CheckCircle2 className="size-8 text-[#E94E1B]" />
                </div>
                <h3 
                  className="text-[28px] text-white mb-3"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 700
                  }}
                >
                  Listo. Recibimos tu consulta.
                </h3>
                <p 
                  className="text-[16px] text-neutral-400 mb-8"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Un ejecutivo te contacta a la brevedad.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleWhatsAppFromModal}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E94E1B] text-white hover:bg-[#D43E10] transition-all"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '15px'
                    }}
                  >
                    Hablar por WhatsApp ahora
                  </button>
                  <button
                    onClick={handleClose}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/15 transition-all"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '15px'
                    }}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

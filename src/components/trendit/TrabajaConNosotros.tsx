import { useState, useRef } from 'react';
import { CheckCircle2, Users, Target, Leaf, Upload, X, MessageCircle, ArrowRight, ArrowLeft, Check } from 'lucide-react';

export function TrabajaConNosotros() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    // Step 1
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    linkedin: '',
    // Step 2
    area: '',
    otraArea: '',
    experiencia: '',
    mensaje: '',
    // Step 3
    archivo: null as File | null,
    aceptaTerminos: false,
    aceptaNovedades: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, archivo: file }));
      setFileName(file.name);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFormData(prev => ({ ...prev, archivo: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const canProceedStep1 = formData.nombre && formData.email && formData.telefono && formData.ciudad;
  const canProceedStep2 = formData.area && formData.experiencia && formData.mensaje;
  const canSubmit = formData.archivo && formData.aceptaTerminos;

  const scrollToForm = () => {
    const formElement = document.getElementById('postulacion');
    if (formElement) {
      const offset = 100;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  if (submitted) {
    return (
      <div className="bg-neutral-50 min-h-screen pt-32 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-10 md:p-12 border border-neutral-200 shadow-sm">
            <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="size-8 text-green-600" />
            </div>
            <h1
              className="text-[32px] md:text-[36px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              ¡Postulación enviada!
            </h1>
            <p
              className="text-[16px] md:text-[17px] text-neutral-600 leading-[1.6] mb-8"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Trendit recibió la información. Si el perfil encaja, el equipo se contactará.
            </p>
            <a
              href="#home"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E94E1B] hover:bg-[#D43E10] text-white rounded-xl transition-all duration-300"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-neutral-100 to-neutral-50 pt-32 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
          <h1
            className="text-[42px] md:text-[52px] lg:text-[58px] leading-[1.1] mb-6 text-[#282327]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600
            }}
          >
            Trabajá con nosotros
          </h1>
          <p
            className="text-[17px] md:text-[18px] text-neutral-600 leading-[1.6] mb-8 max-w-[780px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            En Trendit construimos infraestructura tecnológica con impacto real: en operaciones, en personas y en el entorno. Buscamos perfiles con actitud, criterio y ganas de mejorar todos los días.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E94E1B] hover:bg-[#D43E10] text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              Postularme
              <ArrowRight className="size-5" />
            </button>
            <a
              href="https://wa.me/5493516714007?text=Hola%20Trendit%2C%20me%20gustar%C3%ADa%20postularme%20a%20una%20b%C3%BAsqueda%20y%20tengo%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-neutral-50 text-[#282327] border-2 border-neutral-300 hover:border-[#E94E1B]/30 rounded-xl transition-all duration-300"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              <MessageCircle className="size-5" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Cultura Trendit */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2
              className="text-[32px] md:text-[38px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              Cultura Trendit
            </h2>
            <p
              className="text-[16px] md:text-[17px] text-neutral-600 leading-[1.6] max-w-[780px] mx-auto"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Trabajamos cerca del cliente y cerca del problema. Preferimos equipos pequeños, decisiones claras y ejecución prolija. La tecnología cambia; el compromiso con la calidad y el aprendizaje continuo no.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="size-12 bg-[#E94E1B]/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="size-6 text-[#E94E1B]" />
              </div>
              <h3
                className="text-[20px] mb-3 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Mejora continua desde 2016
              </h3>
              <p
                className="text-[15px] text-neutral-600 leading-[1.6]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Documentamos, medimos y aprendemos en cada implementación para llevar mejores prácticas al siguiente proyecto.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="size-12 bg-[#E94E1B]/10 rounded-xl flex items-center justify-center mb-5">
                <Users className="size-6 text-[#E94E1B]" />
              </div>
              <h3
                className="text-[20px] mb-3 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Trabajo en equipo, con método
              </h3>
              <p
                className="text-[15px] text-neutral-600 leading-[1.6]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Planificamos con criterio (procesos, alcance, tiempos y costos) y ejecutamos con orden, sin perder agilidad cuando el contexto lo exige.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="size-12 bg-[#E94E1B]/10 rounded-xl flex items-center justify-center mb-5">
                <Leaf className="size-6 text-[#E94E1B]" />
              </div>
              <h3
                className="text-[20px] mb-3 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Tecnología con propósito
              </h3>
              <p
                className="text-[15px] text-neutral-600 leading-[1.6]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Integramos una visión ambiental a través de Reforestar: promover acciones concretas que sumen al entorno donde operamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que vas a encontrar */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2
            className="text-[32px] md:text-[38px] mb-10 text-[#282327] text-center"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600
            }}
          >
            Lo que vas a encontrar en Trendit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
            {[
              'Proyectos reales, con impacto en operaciones críticas (redes, data center, colaboración, videoseguridad, energía, obras tecnológicas).',
              'Espacio para proponer mejoras y tomar responsabilidades reales.',
              'Aprendizaje técnico constante (fabricantes, buenas prácticas, documentación).',
              'Trabajo interdisciplinario: ingeniería, proyectos, soporte y operación.',
              'Cultura de calidad: orden, trazabilidad y foco en resultados.',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-neutral-50 rounded-lg p-5 border border-neutral-200">
                <Check className="size-5 text-[#E94E1B] mt-0.5 flex-shrink-0" />
                <p
                  className="text-[15px] text-neutral-700 leading-[1.6]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <h2
            className="text-[32px] md:text-[38px] mb-10 text-[#282327] text-center"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600
            }}
          >
            Beneficios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Capacitación técnica y acompañamiento del equipo.',
              'Proyectos diversos (industrias, educación, salud, finanzas, retail y sector público).',
              'Posibilidad de crecimiento según desempeño y actitud.',
              'Herramientas y procesos para trabajar con claridad.',
              'Ambiente de trabajo profesional, directo y colaborativo.',
              'Participación en iniciativas de impacto (Reforestar).',
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="size-8 bg-[#E94E1B]/10 rounded-lg flex items-center justify-center mb-4">
                  <Check className="size-5 text-[#E94E1B]" />
                </div>
                <p
                  className="text-[15px] text-neutral-700 leading-[1.6]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reforestar Block */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-10 border-2 border-green-200/50">
            <div className="max-w-[720px] mx-auto text-center">
              <div className="inline-flex items-center justify-center size-14 bg-green-600 rounded-xl mb-6">
                <Leaf className="size-7 text-white" />
              </div>
              <h2
                className="text-[28px] md:text-[32px] mb-4 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Nuestra visión ambiental
              </h2>
              <p
                className="text-[16px] md:text-[17px] text-neutral-700 leading-[1.6] mb-6"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                La tecnología también deja huella. Con Reforestar impulsamos acciones de impacto positivo: especies nativas, educación ambiental y colaboración con organizaciones, escuelas y municipios. Cada proyecto es una oportunidad para mejorar el entorno.
              </p>
              <a
                href="#reforestar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                Conocer Reforestar
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Postulación */}
      <section id="postulacion" className="py-16 md:py-20">
        <div className="max-w-[820px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2
              className="text-[36px] md:text-[42px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              Postulación
            </h2>
            <p
              className="text-[16px] text-neutral-600 leading-[1.6]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Completá en menos de 2 minutos. Adjuntá CV en PDF o Word.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center size-10 rounded-full border-2 transition-all ${currentStep === step
                    ? 'bg-[#E94E1B] border-[#E94E1B] text-white'
                    : currentStep > step
                      ? 'bg-green-600 border-green-600 text-white'
                      : 'bg-white border-neutral-300 text-neutral-400'
                  }`}
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  {currentStep > step ? <Check className="size-5" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-12 md:w-20 h-0.5 ${currentStep > step ? 'bg-green-600' : 'bg-neutral-300'}`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-neutral-200 shadow-sm">

            {/* Step 1 - Perfil */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <h3
                  className="text-[22px] mb-6 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Paso 1 — Perfil
                </h3>

                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Nombre y apellido <span className="text-[#E94E1B]">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B]/20 focus:border-[#E94E1B] transition-all"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-[14px] text-neutral-700 mb-2"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Email <span className="text-[#E94E1B]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B]/20 focus:border-[#E94E1B] transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-[14px] text-neutral-700 mb-2"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Teléfono <span className="text-[#E94E1B]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B]/20 focus:border-[#E94E1B] transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Ciudad / Provincia <span className="text-[#E94E1B]">*</span>
                  </label>
                  <input
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B]/20 focus:border-[#E94E1B] transition-all"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    LinkedIn URL <span className="text-neutral-400">(opcional)</span>
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B]/20 focus:border-[#E94E1B] transition-all"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    disabled={!canProceedStep1}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#E94E1B] hover:bg-[#D43E10] text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Siguiente
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 - Intereses */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <h3
                  className="text-[22px] mb-6 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Paso 2 — Intereses
                </h3>

                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Área de interés <span className="text-[#E94E1B]">*</span>
                  </label>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B]/20 focus:border-[#E94E1B] transition-all"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    <option value="">Seleccionar área</option>
                    <option value="redes">Redes & Conectividad</option>
                    <option value="infraestructura">Infraestructura IT & Data Center</option>
                    <option value="microinformatica">Microinformática</option>
                    <option value="collaboration">Team Collaboration</option>
                    <option value="videoseguridad">Videoseguridad & Analítica</option>
                    <option value="energia">Energía & Continuidad</option>
                    <option value="cableado">Cableado & Obras Tecnológicas</option>
                    <option value="comercial">Comercial / Preventa</option>
                    <option value="administracion">Administración / Operaciones</option>
                    <option value="otra">Otra</option>
                  </select>
                </div>

                {formData.area === 'otra' && (
                  <div>
                    <label
                      className="block text-[14px] text-neutral-700 mb-2"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      ¿Cuál? <span className="text-[#E94E1B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="otraArea"
                      value={formData.otraArea}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B]/20 focus:border-[#E94E1B] transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    />
                  </div>
                )}

                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Nivel de experiencia <span className="text-[#E94E1B]">*</span>
                  </label>
                  <select
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B]/20 focus:border-[#E94E1B] transition-all"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    <option value="">Seleccionar nivel</option>
                    <option value="junior">Junior</option>
                    <option value="semisenior">Semi Senior</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Mensaje breve <span className="text-[#E94E1B]">*</span>
                  </label>
                  <p
                    className="text-[13px] text-neutral-500 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Contá en 3–5 líneas qué tipo de proyectos buscás y por qué Trendit.
                  </p>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E94E1B]/20 focus:border-[#E94E1B] transition-all resize-none"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-300 rounded-lg transition-all duration-300"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    <ArrowLeft className="size-5" />
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    disabled={!canProceedStep2}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#E94E1B] hover:bg-[#D43E10] text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Siguiente
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 - Adjuntos */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <h3
                  className="text-[22px] mb-6 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  Paso 3 — Adjuntos y confirmación
                </h3>

                <div>
                  <label
                    className="block text-[14px] text-neutral-700 mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Adjuntar CV <span className="text-[#E94E1B]">*</span>
                  </label>
                  <p
                    className="text-[13px] text-neutral-500 mb-3"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Máximo sugerido: 10 MB. Formatos: PDF, DOC, DOCX
                  </p>

                  <div
                    onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="relative border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center hover:border-[#E94E1B]/50 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {fileName ? (
                      <div className="flex items-center justify-center gap-3">
                        <CheckCircle2 className="size-6 text-green-600" />
                        <span
                          className="text-[15px] text-neutral-700"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500
                          }}
                        >
                          {fileName}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFileName('');
                            setFormData(prev => ({ ...prev, archivo: null }));
                          }}
                          className="text-neutral-400 hover:text-[#E94E1B] transition-colors"
                        >
                          <X className="size-5" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="size-10 text-neutral-400 mx-auto mb-3" />
                        <p
                          className="text-[15px] text-neutral-600 mb-1"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500
                          }}
                        >
                          Arrastrá tu CV aquí o hacé clic para seleccionar
                        </p>
                        <p
                          className="text-[13px] text-neutral-500"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 400
                          }}
                        >
                          PDF, DOC o DOCX
                        </p>
                      </>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="aceptaTerminos"
                      checked={formData.aceptaTerminos}
                      onChange={handleInputChange}
                      required
                      className="mt-1 size-4 text-[#E94E1B] border-neutral-300 rounded focus:ring-[#E94E1B]"
                    />
                    <span
                      className="text-[14px] text-neutral-700"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Acepto que Trendit use estos datos para gestionar la postulación. <span className="text-[#E94E1B]">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="aceptaNovedades"
                      checked={formData.aceptaNovedades}
                      onChange={handleInputChange}
                      className="mt-1 size-4 text-[#E94E1B] border-neutral-300 rounded focus:ring-[#E94E1B]"
                    />
                    <span
                      className="text-[14px] text-neutral-700"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Quiero recibir novedades de búsquedas y oportunidades.
                    </span>
                  </label>
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-300 rounded-lg transition-all duration-300"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    <ArrowLeft className="size-5" />
                    Anterior
                  </button>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#E94E1B] hover:bg-[#D43E10] text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Enviar postulación
                    <ArrowRight className="size-5" />
                  </button>
                </div>

                <p
                  className="text-[13px] text-neutral-500 text-center pt-4"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Al enviar, la postulación se dirige a{' '}
                  <a href="mailto:colaboradores@trendit.com.ar" className="text-[#E94E1B] underline">
                    colaboradores@trendit.com.ar
                  </a>
                  .
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

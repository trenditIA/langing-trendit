import { motion } from 'motion/react';
import { 
  Network,
  Server,
  Monitor,
  Camera,
  Video,
  Wrench,
  ChevronRight,
  ChevronLeft,
  Check,
  Zap
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface Categoria {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  monto: string;
  moneda: string;
}

export function WizardFinanciacion() {
  const ref = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Categorías de financiamiento
  const [categorias, setCategorias] = useState<Categoria[]>([
    { 
      id: 'redes', 
      icon: <Network className="size-7" />,
      title: 'Redes y conectividad', 
      description: 'Switches, routers, Wi-Fi, firewalls y cableado estructurado',
      monto: '',
      moneda: 'pesos'
    },
    { 
      id: 'datacenter', 
      icon: <Server className="size-7" />,
      title: 'Data Center y servidores', 
      description: 'Servidores físicos, storage, UPS y respaldo de energía',
      monto: '',
      moneda: 'pesos'
    },
    { 
      id: 'puestos', 
      icon: <Monitor className="size-7" />,
      title: 'Puestos de trabajo', 
      description: 'Notebooks, PCs de escritorio, monitores y periféricos',
      monto: '',
      moneda: 'pesos'
    },
    { 
      id: 'videoseguridad', 
      icon: <Camera className="size-7" />,
      title: 'Videoseguridad y control', 
      description: 'Cámaras, NVR/DVR y soluciones de análisis de video',
      monto: '',
      moneda: 'pesos'
    },
    { 
      id: 'colaboracion', 
      icon: <Video className="size-7" />,
      title: 'Colaboración y comunicaciones', 
      description: 'Sistemas de videoconferencia, audio profesional y salas',
      monto: '',
      moneda: 'pesos'
    },
    { 
      id: 'integracion', 
      icon: <Wrench className="size-7" />,
      title: 'Servicios de integración', 
      description: 'Diseño de arquitectura, instalación, migraciones y documentación',
      monto: '',
      moneda: 'pesos'
    }
  ]);

  const fabricantesDisponibles = ['HPE', 'Lenovo', 'Dell', 'Cisco', 'Apple', 'Samsung', 'Microsoft', 'Fortinet', 'Otros', 'Sin preferencia'];
  const [fabricantes, setFabricantes] = useState<string[]>([]);
  const [otrasMarcas, setOtrasMarcas] = useState('');
  
  // Datos de empresa
  const [formData, setFormData] = useState({
    razonSocial: '',
    cuit: '',
    telefono: '',
    email: '',
    provincia: '',
    direccion: '',
    nombreContacto: '',
    cargo: '',
    comentarios: ''
  });

  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const updateCategoria = (id: string, field: keyof Categoria, value: string) => {
    setCategorias(prev => 
      prev.map(cat => 
        cat.id === id ? { ...cat, [field]: value } : cat
      )
    );
  };

  const toggleFabricante = (fab: string) => {
    if (fab === 'Sin preferencia') {
      // Si selecciona "Sin preferencia", deseleccionar todo lo demás
      setFabricantes(['Sin preferencia']);
      setOtrasMarcas('');
    } else {
      // Si selecciona otra marca, quitar "Sin preferencia"
      setFabricantes(prev => {
        const filtered = prev.filter(f => f !== 'Sin preferencia');
        return filtered.includes(fab) ? filtered.filter(f => f !== fab) : [...filtered, fab];
      });
      
      // Si deselecciona "Otros", limpiar el campo de texto
      if (fab === 'Otros' && fabricantes.includes('Otros')) {
        setOtrasMarcas('');
      }
    }
  };

  const handleSubmit = () => {
    const selectedCategorias = categorias.filter(c => c.monto && parseFloat(c.monto) > 0);
    console.log('Solicitud enviada:', { categorias: selectedCategorias, fabricantes, otrasMarcas, formData });
    alert('¡Solicitud enviada correctamente! Un especialista de Trendit se pondrá en contacto pronto.');
  };

  const steps = [
    { number: 1, title: '¿Qué necesitás financiar?' },
    { number: 2, title: 'Datos de la empresa' },
    { number: 3, title: 'Resumen y envío' }
  ];

  const getTotalByMoneda = (moneda: string) => {
    return categorias
      .filter(c => c.moneda === moneda && c.monto && parseFloat(c.monto) > 0)
      .reduce((sum, c) => sum + parseFloat(c.monto || '0'), 0);
  };

  const hasValidCategoria = categorias.some(c => c.monto && parseFloat(c.monto) > 0);
  const hasValidFabricante = fabricantes.length > 0;
  const canProceedStep1 = hasValidCategoria && hasValidFabricante;

  return (
    <section 
      id="formulario-solicitud"
      ref={ref}
      className="py-20 px-6 lg:px-12"
      style={{ background: '#F8F0E7' }}
    >
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 
            className="text-[36px] lg:text-[42px] text-[#282327] mb-4 leading-[1.2] tracking-tight"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700
            }}
          >
            Solicitá una propuesta de financiación
          </h2>
          <p 
            className="text-[15px] text-neutral-600 leading-[1.7] max-w-[720px] mx-auto"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            Completá estos pasos para que un especialista de Trendit prepare una propuesta a medida para tu proyecto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Stepper */}
          <div className="bg-gradient-to-r from-neutral-50 to-white border-b border-neutral-200 p-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center w-full">
                    <div className="flex items-center w-full">
                      {/* Circle */}
                      <div 
                        className={`size-10 md:size-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          currentStep > step.number 
                            ? 'bg-[#E94E1B]' 
                            : currentStep === step.number
                            ? 'bg-[#E94E1B] ring-4 ring-[#E94E1B]/20'
                            : 'bg-neutral-200'
                        }`}
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 700,
                          fontSize: '16px',
                          color: currentStep >= step.number ? '#ffffff' : '#9CA3AF'
                        }}
                      >
                        {currentStep > step.number ? (
                          <Check className="size-6" />
                        ) : (
                          step.number
                        )}
                      </div>
                      
                      {/* Line connector */}
                      {idx < steps.length - 1 && (
                        <div 
                          className={`hidden md:block flex-1 h-1 mx-3 transition-all duration-300 ${
                            currentStep > step.number ? 'bg-[#E94E1B]' : 'bg-neutral-200'
                          }`}
                        />
                      )}
                    </div>
                    
                    {/* Label */}
                    <p 
                      className={`text-[11px] md:text-[13px] mt-2 text-center transition-colors duration-300 ${
                        currentStep === step.number ? 'text-[#E94E1B]' : 'text-neutral-500'
                      }`}
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: currentStep === step.number ? 600 : 500,
                        maxWidth: '120px'
                      }}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="p-8 lg:p-12">
            {/* PASO 1 */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 
                  className="text-[24px] mb-2"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#282327'
                  }}
                >
                  1. ¿Qué necesita financiar tu organización?
                </h3>
                <p 
                  className="text-[15px] text-neutral-600 mb-8"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Seleccioná los equipos y servicios, asigná un monto estimado y la moneda para cada uno. Podés dejar en 0 los rubros que no necesites.
                </p>

                {/* Grid de categorías */}
                <div className="grid md:grid-cols-2 gap-5 mb-10">
                  {categorias.map((categoria) => {
                    const isSelected = categoria.monto && parseFloat(categoria.monto) > 0;
                    
                    return (
                      <div
                        key={categoria.id}
                        className={`border-2 rounded-2xl p-5 transition-all duration-300 ${
                          isSelected
                            ? 'border-[#E94E1B] bg-[#E94E1B]/5 shadow-md' 
                            : 'border-neutral-200 bg-white hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div 
                            className="size-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: 'rgba(233, 78, 27, 0.1)' }}
                          >
                            <div style={{ color: '#E94E1B' }}>
                              {categoria.icon}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 
                              className="text-[16px] mb-1"
                              style={{
                                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                fontWeight: 600,
                                color: '#282327'
                              }}
                            >
                              {categoria.title}
                            </h4>
                            <p 
                              className="text-[13px] text-neutral-500 leading-[1.5]"
                              style={{
                                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                fontWeight: 400
                              }}
                            >
                              {categoria.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <label 
                              className="block text-[13px] mb-1.5"
                              style={{
                                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                fontWeight: 500,
                                color: '#282327'
                              }}
                            >
                              Monto estimado <span className="text-neutral-400 text-[12px]">(aprox.)</span>
                            </label>
                            <input
                              type="number"
                              placeholder="0"
                              value={categoria.monto}
                              onChange={(e) => updateCategoria(categoria.id, 'monto', e.target.value)}
                              className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                              style={{
                                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                fontSize: '14px'
                              }}
                            />
                          </div>

                          <div>
                            <label 
                              className="block text-[13px] mb-2"
                              style={{
                                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                fontWeight: 500,
                                color: '#282327'
                              }}
                            >
                              Moneda
                            </label>
                            <div className="flex gap-4">
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="radio"
                                  checked={categoria.moneda === 'pesos'}
                                  onChange={() => updateCategoria(categoria.id, 'moneda', 'pesos')}
                                  className="w-4 h-4 text-[#E94E1B]"
                                />
                                <span 
                                  className="text-[14px]"
                                  style={{
                                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                    color: '#282327'
                                  }}
                                >
                                  Pesos
                                </span>
                              </label>
                              <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="radio"
                                  checked={categoria.moneda === 'dolares'}
                                  onChange={() => updateCategoria(categoria.id, 'moneda', 'dolares')}
                                  className="w-4 h-4 text-[#E94E1B]"
                                />
                                <span 
                                  className="text-[14px]"
                                  style={{
                                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                    color: '#282327'
                                  }}
                                >
                                  Dólares
                                </span>
                              </label>
                            </div>
                            <p 
                              className="text-[12px] text-neutral-500 mt-1.5"
                              style={{
                                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                fontWeight: 400
                              }}
                            >
                              Podés mezclar monedas entre categorías
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Fabricantes preferidos */}
                <div className="border-t border-neutral-200 pt-8">
                  <h4 
                    className="text-[18px] mb-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      color: '#282327'
                    }}
                  >
                    2. Fabricantes preferidos *
                  </h4>
                  <p 
                    className="text-[14px] text-neutral-600 mb-5"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Elegí al menos una marca con la que te interese trabajar. Si no tenés preferencia, seleccioná "Sin preferencia".
                  </p>

                  <div className="flex flex-wrap gap-3 mb-5">
                    {fabricantesDisponibles.map((fab) => (
                      <button
                        key={fab}
                        type="button"
                        onClick={() => toggleFabricante(fab)}
                        className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                          fabricantes.includes(fab)
                            ? 'border-[#E94E1B] bg-[#E94E1B]/10 text-[#E94E1B]'
                            : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400'
                        }`}
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 500,
                          fontSize: '14px'
                        }}
                      >
                        {fab}
                      </button>
                    ))}
                  </div>

                  {/* Campo adicional para "Otros" */}
                  {fabricantes.includes('Otros') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4"
                    >
                      <label 
                        className="block text-[14px] mb-2"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 500,
                          color: '#282327'
                        }}
                      >
                        Otras marcas
                      </label>
                      <input
                        type="text"
                        value={otrasMarcas}
                        onChange={(e) => setOtrasMarcas(e.target.value)}
                        placeholder="Escribí las marcas que te interesan (separadas por coma)"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontSize: '14px'
                        }}
                      />
                    </motion.div>
                  )}
                </div>

                {/* Navigation - sticky en mobile */}
                <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-10 pt-6 border-t border-neutral-200 sticky sm:static bottom-0 bg-white sm:bg-transparent p-4 sm:p-0 -mx-8 sm:mx-0 shadow-lg sm:shadow-none">
                  {!canProceedStep1 && (
                    <p 
                      className="text-[13px] text-neutral-500 text-center sm:text-right"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      {!hasValidCategoria && 'Agregá al menos un monto para continuar'}
                      {hasValidCategoria && !hasValidFabricante && 'Seleccioná al menos un fabricante'}
                    </p>
                  )}
                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={!canProceedStep1}
                    className="w-full sm:w-auto px-8 py-3 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-neutral-300 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '15px'
                    }}
                  >
                    Siguiente
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* PASO 2 */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 
                  className="text-[24px] mb-2"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#282327'
                  }}
                >
                  2. Datos de la empresa y contacto
                </h3>
                <p 
                  className="text-[15px] text-neutral-600 mb-8"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Completá los datos básicos para que podamos evaluar la financiación y contactarte. No compartimos tu información con terceros.
                </p>

                <div className="space-y-8">
                  {/* Datos de la empresa */}
                  <div>
                    <h4 
                      className="text-[16px] mb-5 pb-3 border-b border-neutral-200"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        color: '#282327'
                      }}
                    >
                      Datos de la empresa
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label 
                          className="block text-[14px] mb-2"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            color: '#282327'
                          }}
                        >
                          Razón social *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.razonSocial}
                          onChange={(e) => setFormData({...formData, razonSocial: e.target.value})}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          className="block text-[14px] mb-2"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            color: '#282327'
                          }}
                        >
                          CUIT *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.cuit}
                          onChange={(e) => setFormData({...formData, cuit: e.target.value})}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          className="block text-[14px] mb-2"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            color: '#282327'
                          }}
                        >
                          Provincia / Ciudad *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.provincia}
                          onChange={(e) => setFormData({...formData, provincia: e.target.value})}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          className="block text-[14px] mb-2"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            color: '#282327'
                          }}
                        >
                          Dirección comercial *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.direccion}
                          onChange={(e) => setFormData({...formData, direccion: e.target.value})}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontSize: '15px'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Datos de contacto */}
                  <div>
                    <h4 
                      className="text-[16px] mb-5 pb-3 border-b border-neutral-200"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        color: '#282327'
                      }}
                    >
                      Datos de contacto
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label 
                          className="block text-[14px] mb-2"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            color: '#282327'
                          }}
                        >
                          Nombre y apellido de la persona de contacto *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nombreContacto}
                          onChange={(e) => setFormData({...formData, nombreContacto: e.target.value})}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          className="block text-[14px] mb-2"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            color: '#282327'
                          }}
                        >
                          Cargo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.cargo}
                          onChange={(e) => setFormData({...formData, cargo: e.target.value})}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          className="block text-[14px] mb-2"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            color: '#282327'
                          }}
                        >
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontSize: '15px'
                          }}
                        />
                      </div>

                      <div>
                        <label 
                          className="block text-[14px] mb-2"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 500,
                            color: '#282327'
                          }}
                        >
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontSize: '15px'
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Comentarios */}
                  <div>
                    <label 
                      className="block text-[14px] mb-2"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500,
                        color: '#282327'
                      }}
                    >
                      Comentarios adicionales sobre el proyecto (opcional)
                    </label>
                    <textarea
                      value={formData.comentarios}
                      onChange={(e) => setFormData({...formData, comentarios: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 transition-all resize-none"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '15px'
                      }}
                    />
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-10 pt-6 border-t border-neutral-200">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 text-neutral-600 hover:text-neutral-800 transition-all duration-300 flex items-center gap-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500,
                      fontSize: '15px'
                    }}
                  >
                    <ChevronLeft className="size-5" />
                    Volver
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-8 py-3 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 flex items-center gap-2"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      fontSize: '15px'
                    }}
                  >
                    Siguiente
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* PASO 3 */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 
                  className="text-[24px] mb-2"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    color: '#282327'
                  }}
                >
                  3. Revisá tu solicitud antes de enviarla
                </h3>
                <p 
                  className="text-[15px] text-neutral-600 mb-8"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Confirmá los montos, la moneda y tus datos de contacto.
                </p>

                {/* Card: Resumen de equipos */}
                <div className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-6 mb-6">
                  <h4 
                    className="text-[18px] mb-5"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      color: '#282327'
                    }}
                  >
                    Resumen de equipos y servicios a financiar
                  </h4>

                  {categorias.filter(c => c.monto && parseFloat(c.monto) > 0).length > 0 ? (
                    <div className="space-y-3 mb-6">
                      {categorias.filter(c => c.monto && parseFloat(c.monto) > 0).map((cat) => (
                        <div key={cat.id} className="flex justify-between items-start p-4 bg-white rounded-xl border border-neutral-200">
                          <div>
                            <p 
                              className="text-[15px] mb-1"
                              style={{
                                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                fontWeight: 600,
                                color: '#282327'
                              }}
                            >
                              {cat.title}
                            </p>
                            <p 
                              className="text-[13px] text-neutral-500"
                              style={{
                                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                                fontWeight: 400
                              }}
                            >
                              {cat.moneda === 'pesos' ? 'Pesos' : 'Dólares'}
                            </p>
                          </div>
                          <p 
                            className="text-[16px]"
                            style={{
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 700,
                              color: '#E94E1B'
                            }}
                          >
                            {cat.moneda === 'pesos' ? '$' : 'U$S'} {parseFloat(cat.monto).toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-neutral-500 text-[14px] py-4">No se seleccionaron equipos para financiar</p>
                  )}

                  {/* Totales */}
                  <div className="space-y-3">
                    {getTotalByMoneda('pesos') > 0 && (
                      <div className="flex justify-between items-center pt-4 border-t-2 border-neutral-300">
                        <p 
                          className="text-[16px]"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 600,
                            color: '#282327'
                          }}
                        >
                          Total estimado en pesos
                        </p>
                        <p 
                          className="text-[20px]"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 700,
                            color: '#E94E1B'
                          }}
                        >
                          $ {getTotalByMoneda('pesos').toLocaleString()}
                        </p>
                      </div>
                    )}

                    {getTotalByMoneda('dolares') > 0 && (
                      <div className="flex justify-between items-center pt-4 border-t-2 border-neutral-300">
                        <p 
                          className="text-[16px]"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 600,
                            color: '#282327'
                          }}
                        >
                          Total estimado en dólares
                        </p>
                        <p 
                          className="text-[20px]"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 700,
                            color: '#E94E1B'
                          }}
                        >
                          U$S {getTotalByMoneda('dolares').toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>

                  <p 
                    className="text-[13px] text-neutral-500 mt-6 italic leading-[1.6]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Esta simulación es orientativa. La propuesta final quedará sujeta al análisis crediticio y a la evaluación del proyecto.
                  </p>
                </div>

                {/* Card: Datos de contacto */}
                <div className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-6 mb-6">
                  <h4 
                    className="text-[18px] mb-4"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600,
                      color: '#282327'
                    }}
                  >
                    Datos de contacto
                  </h4>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                      <p className="text-[13px] text-neutral-500 mb-1">Razón social:</p>
                      <p className="text-[15px] text-neutral-800" style={{ fontWeight: 500 }}>{formData.razonSocial || '-'}</p>
                    </div>
                    <div>
                      <p className="text-[13px] text-neutral-500 mb-1">CUIT:</p>
                      <p className="text-[15px] text-neutral-800" style={{ fontWeight: 500 }}>{formData.cuit || '-'}</p>
                    </div>
                    <div>
                      <p className="text-[13px] text-neutral-500 mb-1">Nombre de contacto:</p>
                      <p className="text-[15px] text-neutral-800" style={{ fontWeight: 500 }}>{formData.nombreContacto || '-'}</p>
                    </div>
                    <div>
                      <p className="text-[13px] text-neutral-500 mb-1">Teléfono:</p>
                      <p className="text-[15px] text-neutral-800" style={{ fontWeight: 500 }}>{formData.telefono || '-'}</p>
                    </div>
                    <div>
                      <p className="text-[13px] text-neutral-500 mb-1">Email:</p>
                      <p className="text-[15px] text-neutral-800" style={{ fontWeight: 500 }}>{formData.email || '-'}</p>
                    </div>
                    <div>
                      <p className="text-[13px] text-neutral-500 mb-1">Ciudad:</p>
                      <p className="text-[15px] text-neutral-800" style={{ fontWeight: 500 }}>{formData.provincia || '-'}</p>
                    </div>
                  </div>
                </div>

                {/* Checkbox de términos */}
                <div className="mb-8">
                  <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={aceptaTerminos}
                      onChange={(e) => setAceptaTerminos(e.target.checked)}
                      className="w-5 h-5 text-[#E94E1B] focus:ring-[#E94E1B] rounded mt-0.5 flex-shrink-0"
                    />
                    <span 
                      className="text-[14px] leading-[1.6]"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500,
                        color: '#282327'
                      }}
                    >
                      Acepto las políticas y condiciones de financiación de Trendit.
                    </span>
                  </label>
                </div>

                {/* Navigation */}
                <div className="flex flex-col items-center gap-5 pt-6 border-t border-neutral-200">
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:ml-auto">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 text-neutral-600 hover:text-neutral-800 border-2 border-neutral-300 rounded-xl hover:border-neutral-400 transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500,
                        fontSize: '15px'
                      }}
                    >
                      Volver a editar
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!aceptaTerminos}
                      className="px-10 py-3 bg-[#E94E1B] text-white rounded-xl hover:bg-[#D43E10] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '16px'
                      }}
                    >
                      Enviar solicitud
                      <ChevronRight className="size-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-center">
                    <Zap className="size-4 text-[#E94E1B]" />
                    <p 
                      className="text-[14px]"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500,
                        color: '#6B6B6B'
                      }}
                    >
                      Un especialista de Trendit te contactará en menos de 24 h hábiles para avanzar con tu propuesta.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

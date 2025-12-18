import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  ChevronRight,
  MessageCircle,
  Upload,
  CheckCircle2,
  ChevronDown,
  Package,
  Wrench,
  Truck,
  Send,
  FileText,
  Image as ImageIcon,
  Video,
  Home,
  AlertCircle,
  Clock
} from 'lucide-react';
import { Button } from '../ui/button';

export function SoporteTecnico() {
  return (
    <div className="bg-white">
      <Breadcrumb />
      <HeaderSection />
      <ComoFunciona />
      <FormularioSoporte />
      <FAQ />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="bg-white border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center gap-2 text-[13px] text-neutral-500">
          <a href="#home" className="hover:text-[#E94E1B] transition-colors flex items-center gap-2">
            <Home className="size-4" />
            Inicio
          </a>
          <ChevronRight className="size-4" />
          <span className="text-[#282327]">Soporte técnico</span>
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  const whatsappUrl = 'https://wa.me/5493516714007?text=Hola%2C%20necesito%20soporte%20t%C3%A9cnico%20en%20Trendit.%20Quiero%20abrir%20un%20ticket%20para%20garant%C3%ADa%2Fdiagn%C3%B3stico.%20Mi%20consulta%20es%3A%20';

  return (
    <section className="bg-white pt-12 pb-16 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[40px] lg:text-[48px] text-[#282327] mb-6 leading-[1.1] tracking-tight">
              Soporte técnico y gestión de garantías
            </h1>
            
            <p className="text-[18px] text-neutral-700 mb-4 leading-[1.6]">
              Abrí un ticket para garantía, diagnóstico o reparación. También podés pedir recolección o avisarnos que enviás el producto.
            </p>

            <div className="flex items-center gap-2 text-[15px] text-[#E94E1B]">
              <Clock className="size-5" />
              <span>Respuesta en menos de 24 hs hábiles.</span>
            </div>
          </motion.div>

          {/* Columna derecha - Card Atención rápida */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-3xl p-8"
          >
            <h3 className="text-[20px] font-semibold text-[#282327] mb-6">
              Atención rápida
            </h3>

            <Button 
              size="lg"
              className="w-full bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white mb-4 group"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="mr-2 size-5" />
              Hablar por WhatsApp
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-[13px] text-neutral-500 text-center leading-[1.6]">
              Para urgencias, respondemos según disponibilidad.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const pasos = [
    {
      icon: <FileText className="size-8" />,
      title: 'Cargás datos y documentación',
      description: 'Completá el formulario con información del equipo, adjuntá factura y fotos.'
    },
    {
      icon: <CheckCircle2 className="size-8" />,
      title: 'Validamos garantía o diagnóstico',
      description: 'Nuestro equipo revisa cobertura, número de serie y documentación adjunta.'
    },
    {
      icon: <Truck className="size-8" />,
      title: 'Coordinamos logística y próximos pasos',
      description: 'Te contactamos para recolección, envío o resolución del ticket.'
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] lg:text-[36px] text-[#282327] mb-4 leading-[1.2]">
            Cómo funciona el soporte Trendit
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pasos.map((paso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#E94E1B]/30 transition-all duration-300"
            >
              <div className="size-14 rounded-xl bg-[#E94E1B]/10 flex items-center justify-center text-[#E94E1B] mb-6">
                {paso.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#282327] mb-3 leading-tight">
                {paso.title}
              </h3>
              <p className="text-[15px] text-neutral-600 leading-[1.6]">
                {paso.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormularioSoporte() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Paso 1
    tipoGestion: '',
    logistica: '',
    // Paso 2
    categoria: '',
    marca: '',
    modelo: '',
    numeroSerie: '',
    numeroParte: '',
    compradoATrendit: '',
    fechaCompra: '',
    descripcionProblema: '',
    // Paso 3
    razonSocial: '',
    cuit: '',
    nombreApellido: '',
    cargo: '',
    telefono: '',
    email: '',
    provincia: '',
    direccion: '',
    horarioContacto: '',
    direccionRetiro: '',
    personaEntrega: '',
    telefonoEntrega: '',
    franjaRetiro: '',
    comentariosLogistica: '',
    aceptaTerminos: false
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    alert('Ticket enviado correctamente. Recibirás confirmación por email/WhatsApp.');
    console.log('Datos enviados:', formData);
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-[900px] mx-auto">
        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className={`size-12 rounded-full flex items-center justify-center font-semibold mb-2 transition-all ${
                    currentStep >= step 
                      ? 'bg-[#E94E1B] text-white' 
                      : 'bg-neutral-200 text-neutral-500'
                  }`}>
                    {step}
                  </div>
                  <span className={`text-[13px] ${
                    currentStep >= step ? 'text-[#282327]' : 'text-neutral-400'
                  }`}>
                    {step === 1 && 'Tipo de gestión'}
                    {step === 2 && 'Producto'}
                    {step === 3 && 'Contacto'}
                  </span>
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-4 rounded-full ${
                    currentStep > step ? 'bg-[#E94E1B]' : 'bg-neutral-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Contenido de pasos */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && <Paso1 formData={formData} updateField={updateField} />}
          {currentStep === 2 && <Paso2 formData={formData} updateField={updateField} />}
          {currentStep === 3 && <Paso3 formData={formData} updateField={updateField} />}
        </motion.div>

        {/* Botones de navegación */}
        <div className="flex justify-between mt-10">
          {currentStep > 1 && (
            <Button 
              variant="outline"
              size="lg"
              onClick={prevStep}
            >
              Volver
            </Button>
          )}
          
          <div className="ml-auto">
            {currentStep < 3 ? (
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
                onClick={nextStep}
              >
                Siguiente
                <ArrowRight className="ml-2 size-5" />
              </Button>
            ) : (
              <Button 
                size="lg"
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white"
                onClick={handleSubmit}
                disabled={!formData.aceptaTerminos}
              >
                <Send className="mr-2 size-5" />
                Enviar ticket
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Paso1({ formData, updateField }: any) {
  const tiposGestion = [
    {
      id: 'garantia',
      icon: <Package className="size-8" />,
      title: 'Garantía / RMA',
      description: 'Para equipos con cobertura y comprobante de compra.'
    },
    {
      id: 'diagnostico',
      icon: <Wrench className="size-8" />,
      title: 'Diagnóstico / Reparación',
      description: 'Evaluación técnica y presupuesto.'
    }
  ];

  const logisticaOpciones = [
    {
      id: 'recoleccion',
      icon: <Truck className="size-6" />,
      title: 'Solicitar recolección'
    },
    {
      id: 'envio',
      icon: <Send className="size-6" />,
      title: 'Voy a enviar el producto'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-[20px] font-semibold text-[#282327] mb-6">
          Tipo de gestión
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {tiposGestion.map((tipo) => (
            <button
              key={tipo.id}
              onClick={() => updateField('tipoGestion', tipo.id)}
              className={`text-left border-2 rounded-2xl p-6 transition-all ${
                formData.tipoGestion === tipo.id
                  ? 'border-[#E94E1B] bg-[#E94E1B]/5'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className={`size-14 rounded-xl flex items-center justify-center mb-4 ${
                formData.tipoGestion === tipo.id 
                  ? 'bg-[#E94E1B] text-white' 
                  : 'bg-neutral-100 text-neutral-600'
              }`}>
                {tipo.icon}
              </div>
              <h4 className="font-semibold text-[16px] text-[#282327] mb-2">
                {tipo.title}
              </h4>
              <p className="text-[14px] text-neutral-600 leading-[1.5]">
                {tipo.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[20px] font-semibold text-[#282327] mb-6">
          Logística del equipo
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {logisticaOpciones.map((opcion) => (
            <button
              key={opcion.id}
              onClick={() => updateField('logistica', opcion.id)}
              className={`text-left border-2 rounded-2xl p-6 transition-all ${
                formData.logistica === opcion.id
                  ? 'border-[#E94E1B] bg-[#E94E1B]/5'
                  : 'border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div className={`size-12 rounded-xl flex items-center justify-center mb-3 ${
                formData.logistica === opcion.id 
                  ? 'bg-[#E94E1B] text-white' 
                  : 'bg-neutral-100 text-neutral-600'
              }`}>
                {opcion.icon}
              </div>
              <h4 className="font-semibold text-[15px] text-[#282327]">
                {opcion.title}
              </h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Paso2({ formData, updateField }: any) {
  return (
    <div className="space-y-6">
      <h3 className="text-[20px] font-semibold text-[#282327] mb-6">
        Producto y adjuntos
      </h3>

      {/* Categoría */}
      <div>
        <label className="block text-[14px] font-medium text-[#282327] mb-2">
          Categoría de equipo *
        </label>
        <select
          value={formData.categoria}
          onChange={(e) => updateField('categoria', e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
        >
          <option value="">Seleccionar categoría</option>
          <option value="notebook">Notebook</option>
          <option value="pc">PC</option>
          <option value="workstation">Workstation</option>
          <option value="servidor">Servidor</option>
          <option value="storage">Storage</option>
          <option value="ups">UPS</option>
          <option value="red">Red (Switch/Router/AP)</option>
          <option value="videoseguridad">Videoseguridad</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Marca */}
      <div>
        <label className="block text-[14px] font-medium text-[#282327] mb-2">
          Marca *
        </label>
        <select
          value={formData.marca}
          onChange={(e) => updateField('marca', e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
        >
          <option value="">Seleccionar marca</option>
          <option value="lenovo">Lenovo</option>
          <option value="dell">Dell</option>
          <option value="hp">HP</option>
          <option value="cisco">Cisco</option>
          <option value="ubiquiti">Ubiquiti</option>
          <option value="mikrotik">Mikrotik</option>
          <option value="eaton">Eaton</option>
          <option value="apc">APC</option>
          <option value="axis">Axis</option>
          <option value="hikvision">Hikvision</option>
          <option value="dahua">Dahua</option>
          <option value="tplink">TP-Link</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Modelo */}
        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Modelo
          </label>
          <input
            type="text"
            value={formData.modelo}
            onChange={(e) => updateField('modelo', e.target.value)}
            placeholder="Ej: ThinkPad X1 Carbon"
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
        </div>

        {/* Número de serie */}
        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Número de serie / Service Tag *
          </label>
          <input
            type="text"
            value={formData.numeroSerie}
            onChange={(e) => updateField('numeroSerie', e.target.value)}
            placeholder="Ej: ABC123456789"
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
          <p className="text-[12px] text-neutral-500 mt-1">
            Está en la etiqueta del equipo o en la caja.
          </p>
        </div>
      </div>

      {/* Número de parte */}
      <div>
        <label className="block text-[14px] font-medium text-[#282327] mb-2">
          Número de parte (P/N)
        </label>
        <input
          type="text"
          value={formData.numeroParte}
          onChange={(e) => updateField('numeroParte', e.target.value)}
          placeholder="Ej: 20XW005LAR"
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Comprado a Trendit */}
        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-3">
            ¿Comprado a Trendit? *
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="compradoATrendit"
                value="si"
                checked={formData.compradoATrendit === 'si'}
                onChange={(e) => updateField('compradoATrendit', e.target.value)}
                className="w-4 h-4 text-[#E94E1B] focus:ring-[#E94E1B]"
              />
              <span className="text-[15px]">Sí</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="compradoATrendit"
                value="no"
                checked={formData.compradoATrendit === 'no'}
                onChange={(e) => updateField('compradoATrendit', e.target.value)}
                className="w-4 h-4 text-[#E94E1B] focus:ring-[#E94E1B]"
              />
              <span className="text-[15px]">No</span>
            </label>
          </div>
        </div>

        {/* Fecha de compra */}
        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Fecha de compra *
          </label>
          <input
            type="date"
            value={formData.fechaCompra}
            onChange={(e) => updateField('fechaCompra', e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Descripción del problema */}
      <div>
        <label className="block text-[14px] font-medium text-[#282327] mb-2">
          Descripción del problema *
        </label>
        <textarea
          value={formData.descripcionProblema}
          onChange={(e) => updateField('descripcionProblema', e.target.value)}
          placeholder="Describe el problema o motivo de la gestión..."
          rows={4}
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none resize-none"
        />
      </div>

      {/* Uploads */}
      <div className="space-y-4">
        <h4 className="text-[16px] font-semibold text-[#282327]">
          Archivos adjuntos
        </h4>

        <div className="grid md:grid-cols-2 gap-4">
          <UploadCard 
            icon={<ImageIcon className="size-6" />}
            title="Foto del producto / etiqueta *"
            accept="image/*"
          />
          <UploadCard 
            icon={<FileText className="size-6" />}
            title="Factura de compra *"
            accept=".pdf,image/*"
          />
          <UploadCard 
            icon={<FileText className="size-6" />}
            title="Remito"
            accept=".pdf,image/*"
            optional
          />
          <UploadCard 
            icon={<Video className="size-6" />}
            title="Video / evidencia"
            accept="video/*"
            optional
          />
        </div>
      </div>
    </div>
  );
}

function UploadCard({ icon, title, accept, optional = false }: any) {
  return (
    <div className="border-2 border-dashed border-neutral-300 rounded-xl p-6 hover:border-[#E94E1B] transition-colors cursor-pointer">
      <div className="flex flex-col items-center text-center">
        <div className="size-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 mb-3">
          {icon}
        </div>
        <p className="text-[14px] font-medium text-[#282327] mb-1">
          {title}
        </p>
        {optional && (
          <span className="text-[12px] text-neutral-500">(Opcional)</span>
        )}
        <input 
          type="file" 
          accept={accept}
          className="hidden"
        />
        <Button 
          variant="ghost" 
          size="sm" 
          className="mt-3 text-[#E94E1B]"
          onClick={(e) => {
            e.preventDefault();
            const input = e.currentTarget.parentElement?.querySelector('input[type="file"]') as HTMLInputElement;
            input?.click();
          }}
        >
          <Upload className="mr-2 size-4" />
          Seleccionar archivo
        </Button>
      </div>
    </div>
  );
}

function Paso3({ formData, updateField }: any) {
  return (
    <div className="space-y-6">
      <h3 className="text-[20px] font-semibold text-[#282327] mb-6">
        Contacto y confirmación
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Razón social *
          </label>
          <input
            type="text"
            value={formData.razonSocial}
            onChange={(e) => updateField('razonSocial', e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            CUIT *
          </label>
          <input
            type="text"
            value={formData.cuit}
            onChange={(e) => updateField('cuit', e.target.value)}
            placeholder="XX-XXXXXXXX-X"
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Nombre y apellido *
          </label>
          <input
            type="text"
            value={formData.nombreApellido}
            onChange={(e) => updateField('nombreApellido', e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Cargo
          </label>
          <input
            type="text"
            value={formData.cargo}
            onChange={(e) => updateField('cargo', e.target.value)}
            placeholder="Ej: Responsable IT"
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            value={formData.telefono}
            onChange={(e) => updateField('telefono', e.target.value)}
            placeholder="+54 9 351 XXX XXXX"
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="email@empresa.com"
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Provincia / Ciudad *
          </label>
          <input
            type="text"
            value={formData.provincia}
            onChange={(e) => updateField('provincia', e.target.value)}
            placeholder="Ej: Córdoba"
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-[14px] font-medium text-[#282327] mb-2">
            Horario preferido de contacto
          </label>
          <select
            value={formData.horarioContacto}
            onChange={(e) => updateField('horarioContacto', e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
          >
            <option value="">Seleccionar horario</option>
            <option value="9-13">9–13 hs</option>
            <option value="13-18">13–18 hs</option>
            <option value="indistinto">Indistinto</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[14px] font-medium text-[#282327] mb-2">
          Dirección *
        </label>
        <input
          type="text"
          value={formData.direccion}
          onChange={(e) => updateField('direccion', e.target.value)}
          placeholder="Calle, número, piso, localidad"
          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
        />
      </div>

      {/* Condicional: si eligió "Solicitar recolección" */}
      {formData.logistica === 'recoleccion' && (
        <div className="border-t-2 border-neutral-200 pt-6 mt-6 space-y-6">
          <h4 className="text-[18px] font-semibold text-[#282327]">
            Datos para recolección
          </h4>

          <div>
            <label className="block text-[14px] font-medium text-[#282327] mb-2">
              Dirección de retiro *
            </label>
            <input
              type="text"
              value={formData.direccionRetiro}
              onChange={(e) => updateField('direccionRetiro', e.target.value)}
              placeholder="Si es distinta a la dirección principal"
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-2">
                Persona que entrega *
              </label>
              <input
                type="text"
                value={formData.personaEntrega}
                onChange={(e) => updateField('personaEntrega', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#282327] mb-2">
                Teléfono de la persona que entrega *
              </label>
              <input
                type="tel"
                value={formData.telefonoEntrega}
                onChange={(e) => updateField('telefonoEntrega', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#282327] mb-2">
              Franja horaria para retiro *
            </label>
            <select
              value={formData.franjaRetiro}
              onChange={(e) => updateField('franjaRetiro', e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none"
            >
              <option value="">Seleccionar franja</option>
              <option value="8-12">8–12 hs</option>
              <option value="12-16">12–16 hs</option>
              <option value="16-20">16–20 hs</option>
            </select>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#282327] mb-2">
              Comentarios para logística
            </label>
            <textarea
              value={formData.comentariosLogistica}
              onChange={(e) => updateField('comentariosLogistica', e.target.value)}
              placeholder="Indicaciones especiales para el retiro..."
              rows={3}
              className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-[#E94E1B] focus:border-transparent outline-none resize-none"
            />
          </div>
        </div>
      )}

      {/* Resumen */}
      <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-6 mt-8">
        <h4 className="text-[16px] font-semibold text-[#282327] mb-4 flex items-center gap-2">
          <AlertCircle className="size-5 text-[#E94E1B]" />
          Resumen de tu solicitud
        </h4>
        
        <div className="space-y-2 text-[14px]">
          <div className="flex justify-between">
            <span className="text-neutral-600">Tipo de gestión:</span>
            <span className="font-medium text-[#282327]">
              {formData.tipoGestion === 'garantia' ? 'Garantía / RMA' : 
               formData.tipoGestion === 'diagnostico' ? 'Diagnóstico / Reparación' : 
               'No seleccionado'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600">Logística:</span>
            <span className="font-medium text-[#282327]">
              {formData.logistica === 'recoleccion' ? 'Solicitar recolección' : 
               formData.logistica === 'envio' ? 'Voy a enviar el producto' : 
               'No seleccionado'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600">Equipo:</span>
            <span className="font-medium text-[#282327]">
              {formData.marca && formData.categoria 
                ? `${formData.marca} - ${formData.categoria}`
                : 'Pendiente'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600">Número de serie:</span>
            <span className="font-medium text-[#282327]">
              {formData.numeroSerie || 'Pendiente'}
            </span>
          </div>
        </div>
      </div>

      {/* Términos y condiciones */}
      <div className="flex items-start gap-3 mt-6">
        <input
          type="checkbox"
          id="terminos"
          checked={formData.aceptaTerminos}
          onChange={(e) => updateField('aceptaTerminos', e.target.checked)}
          className="mt-1 w-4 h-4 text-[#E94E1B] rounded focus:ring-[#E94E1B]"
        />
        <label htmlFor="terminos" className="text-[14px] text-neutral-700 leading-[1.6]">
          Acepto los{' '}
          <a href="#terminos-y-condiciones" className="text-[#E94E1B] hover:underline">
            términos y condiciones
          </a>
          {' '}y la{' '}
          <a href="#privacidad" className="text-[#E94E1B] hover:underline">
            política de privacidad
          </a>
          .
        </label>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4 mt-6">
        <p className="text-[13px] text-blue-900 leading-[1.6]">
          Al enviar, recibirás tu número de ticket y próximos pasos por email/WhatsApp.
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Qué necesito para garantía?',
      answer: 'Para gestionar una garantía necesitás: factura de compra, número de serie del equipo, fotos del producto y etiqueta, y una descripción clara del problema. Si el equipo fue comprado a Trendit, el proceso es más rápido.'
    },
    {
      question: '¿Qué pasa si no es garantía?',
      answer: 'Si el equipo está fuera de garantía o no aplica cobertura, te ofrecemos un diagnóstico técnico sin cargo. Luego te enviamos un presupuesto detallado para la reparación. Vos decidís si avanzar o no.'
    },
    {
      question: '¿Puedo pedir recolección?',
      answer: 'Sí, ofrecemos servicio de recolección según disponibilidad y zona. Al completar el formulario, seleccioná "Solicitar recolección" y dejá los datos de retiro. Coordinamos horario y confirmamos por WhatsApp o email.'
    },
    {
      question: '¿Cómo identifico el número de serie?',
      answer: 'El número de serie (S/N o Service Tag) está en una etiqueta en el equipo, generalmente en la parte trasera o inferior. También puede estar en la caja original o en documentos de compra. Si no lo encontrás, envianos fotos del equipo y te ayudamos.'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] lg:text-[36px] text-[#282327] mb-4 leading-[1.2]">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="text-[16px] font-semibold text-[#282327] pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`size-5 text-neutral-500 flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-[15px] text-neutral-600 leading-[1.7]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

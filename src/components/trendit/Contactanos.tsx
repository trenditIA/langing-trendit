import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Send
} from 'lucide-react';
import { Button } from '../ui/button';

export function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cuit: '',
    email: '',
    telefono: '',
    ciudad: '',
    servicio: '',
    mensaje: '',
    privacidad: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%2C%20necesito%20información%20sobre%20los%20servicios%20de%20Trendit', '_blank');
  };

  const servicios = [
    'Infraestructura IT & Data Center',
    'Redes & Conectividad',
    'Team Collaboration',
    'Videoseguridad & Analítica',
    'Energía & Continuidad',
    'Microinformática',
    'Cableado estructurado & Obras tecnológicas',
    'Financiamiento',
    'Reforestar',
    'Otro'
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Sección A - Encabezado simple */}
      <section className="pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-12 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1
              className="text-[32px] sm:text-[38px] md:text-[48px] lg:text-[56px] mb-4 md:mb-5 lg:mb-6 leading-[1.1] tracking-tight px-4"
              style={{
                color: '#282327',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 700
              }}
            >
              Contáctanos
            </h1>

            <p
              className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] mb-6 max-w-[700px] mx-auto px-4"
              style={{
                color: '#4A4A4A',
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Contanos qué necesitás. Un especialista te contacta para ayudarte a definir alcance, tiempos y propuesta.
            </p>

            {/* Dato de respuesta */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-200">
              <Clock className="size-4 text-[#E94E1B] flex-shrink-0" />
              <span
                className="text-[13px] sm:text-[14px]"
                style={{
                  color: '#6B6B6B',
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                Respuesta en horario laboral
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección B - Formulario y contacto directo */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">

            {/* Columna izquierda - Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-neutral-200"
                style={{
                  boxShadow: '0 4px 16px rgba(40, 35, 39, 0.08), 0 1px 4px rgba(40, 35, 39, 0.04)'
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Nombre y apellido */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-[14px] mb-2"
                      style={{
                        color: '#282327',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Nombre y apellido <span className="text-[#E94E1B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-[14px] mb-2"
                      style={{
                        color: '#282327',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Empresa / Razón social <span className="text-[#E94E1B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  {/* CUIT */}
                  <div>
                    <label
                      htmlFor="cuit"
                      className="block text-[14px] mb-2"
                      style={{
                        color: '#282327',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      CUIT <span className="text-neutral-400">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="cuit"
                      name="cuit"
                      value={formData.cuit}
                      onChange={handleChange}
                      placeholder="XX-XXXXXXXX-X"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[14px] mb-2"
                      style={{
                        color: '#282327',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Email <span className="text-[#E94E1B]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-[14px] mb-2"
                      style={{
                        color: '#282327',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Teléfono / WhatsApp <span className="text-[#E94E1B]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+54 9 351 XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  {/* Provincia / Ciudad */}
                  <div>
                    <label
                      htmlFor="ciudad"
                      className="block text-[14px] mb-2"
                      style={{
                        color: '#282327',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Provincia / Ciudad <span className="text-[#E94E1B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      required
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Ej: Córdoba, Argentina"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  {/* Servicio de interés */}
                  <div>
                    <label
                      htmlFor="servicio"
                      className="block text-[14px] mb-2"
                      style={{
                        color: '#282327',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Servicio de interés <span className="text-[#E94E1B]">*</span>
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all bg-white"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    >
                      <option value="">Seleccioná un servicio...</option>
                      {servicios.map((servicio, idx) => (
                        <option key={idx} value={servicio}>{servicio}</option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-[14px] mb-2"
                      style={{
                        color: '#282327',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600
                      }}
                    >
                      Mensaje <span className="text-[#E94E1B]">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Contanos sobre tu proyecto o necesidad..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#E94E1B] focus:ring-2 focus:ring-[#E94E1B]/20 focus:outline-none transition-all resize-none"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400,
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  {/* Checkbox privacidad */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacidad"
                      name="privacidad"
                      required
                      checked={formData.privacidad}
                      onChange={handleChange}
                      className="mt-1 size-4 rounded border-neutral-300 text-[#E94E1B] focus:ring-[#E94E1B]"
                    />
                    <label
                      htmlFor="privacidad"
                      className="text-[13px] leading-[1.5]"
                      style={{
                        color: '#6B6B6B',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Acepto las{' '}
                      <a href="#privacidad" className="text-[#E94E1B] hover:underline">
                        políticas de privacidad
                      </a>{' '}
                      <span className="text-[#E94E1B]">*</span>
                    </label>
                  </div>

                  {/* Botón enviar */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#E94E1B] hover:bg-[#d94419] text-white px-8 h-[54px] transition-all duration-300 group"
                      style={{
                        borderRadius: '12px',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        boxShadow: '0 4px 14px rgba(233, 78, 27, 0.25), 0 2px 6px rgba(233, 78, 27, 0.15)'
                      }}
                    >
                      Enviar consulta
                      <Send className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p
                      className="text-[13px] text-center mt-3"
                      style={{
                        color: '#6B6B6B',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 400
                      }}
                    >
                      Al enviar, un especialista de Trendit se contactará para avanzar.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Columna derecha - Contacto directo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5"
            >

              {/* WhatsApp - Card destacada */}
              <div
                className="bg-gradient-to-br from-[#FFF7F3] to-white rounded-2xl p-6 border-2 border-[#E94E1B]/30"
                style={{
                  boxShadow: '0 8px 24px rgba(233, 78, 27, 0.12), 0 2px 8px rgba(233, 78, 27, 0.08)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-xl bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="size-6 text-white" />
                  </div>
                  <h3
                    className="text-[18px]"
                    style={{
                      color: '#282327',
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 700
                    }}
                  >
                    WhatsApp directo
                  </h3>
                </div>

                <p
                  className="text-[14px] mb-5"
                  style={{
                    color: '#4A4A4A',
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400,
                    lineHeight: '1.6'
                  }}
                >
                  Escribinos y te respondemos con prioridad.
                </p>

                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white px-6 h-[50px] transition-all duration-300 mb-3"
                  style={{
                    borderRadius: '12px',
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600,
                    fontSize: '15px',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                  }}
                >
                  <MessageCircle className="mr-2 size-5" />
                  Ir a WhatsApp
                </Button>

                <p
                  className="text-[12px] text-center"
                  style={{
                    color: '#6B6B6B',
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Horario laboral. Emergencias: dejar mensaje.
                </p>
              </div>

              {/* Email */}
              <div
                className="bg-white rounded-xl p-5 border border-neutral-200"
                style={{
                  boxShadow: '0 2px 8px rgba(40, 35, 39, 0.06)'
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                    <Mail className="size-5 text-[#E94E1B]" />
                  </div>
                  <h4
                    className="text-[15px]"
                    style={{
                      color: '#282327',
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Email comercial
                  </h4>
                </div>
                <a
                  href="mailto:ventas@trendit.com.ar"
                  className="text-[14px] text-[#E94E1B] hover:underline"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 500
                  }}
                >
                  ventas@trendit.com.ar
                </a>
              </div>

              {/* Ubicación */}
              <div
                className="bg-white rounded-xl p-5 border border-neutral-200"
                style={{
                  boxShadow: '0 2px 8px rgba(40, 35, 39, 0.06)'
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                    <MapPin className="size-5 text-[#E94E1B]" />
                  </div>
                  <h4
                    className="text-[15px]"
                    style={{
                      color: '#282327',
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Ubicación
                  </h4>
                </div>
                <p
                  className="text-[14px]"
                  style={{
                    color: '#4A4A4A',
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Córdoba, Argentina
                </p>
              </div>

              {/* Horario */}
              <div
                className="bg-white rounded-xl p-5 border border-neutral-200"
                style={{
                  boxShadow: '0 2px 8px rgba(40, 35, 39, 0.06)'
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                    <Clock className="size-5 text-[#E94E1B]" />
                  </div>
                  <h4
                    className="text-[15px]"
                    style={{
                      color: '#282327',
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    Horario
                  </h4>
                </div>
                <p
                  className="text-[14px]"
                  style={{
                    color: '#4A4A4A',
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Lunes a viernes — 9:00 a 18:00
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
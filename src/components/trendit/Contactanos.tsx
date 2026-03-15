import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Send,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Button } from '../ui/button';
import emailjs from '@emailjs/browser';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Configuración de EmailJS - Reemplaza estos valores con tus credenciales de EmailJS
  // Para obtenerlas: https://www.emailjs.com/
  // Crea un archivo .env en la raíz del proyecto con estas variables:
  // VITE_EMAILJS_SERVICE_ID=tu_service_id
  // VITE_EMAILJS_TEMPLATE_ID=tu_template_id
  // VITE_EMAILJS_PUBLIC_KEY=tu_public_key
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  // Función para escapar HTML y prevenir XSS
  const escapeHtml = (text: string): string => {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  };

  const generateEmailHTML = () => {
    const fecha = new Date().toLocaleString('es-AR', {
      dateStyle: 'long',
      timeStyle: 'short'
    });

    return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Consulta - Trendit</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; background-color: #F5F5F5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #F5F5F5; padding: 20px;">
    <tr>
      <td align="center">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(40, 35, 39, 0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #E94E1B 0%, #d94419 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                Nueva Consulta
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 400;">
                Formulario de Contacto - Trendit
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Información de Contacto -->
              <div style="background-color: #F9F9F9; border-radius: 8px; padding: 24px; margin-bottom: 32px; border-left: 4px solid #E94E1B;">
                <h2 style="margin: 0 0 20px 0; color: #282327; font-size: 18px; font-weight: 700;">
                  Información de Contacto
                </h2>
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #4A4A4A; font-size: 14px; font-weight: 600; width: 140px;">Nombre:</td>
                    <td style="padding: 8px 0; color: #282327; font-size: 14px; font-weight: 400;">${escapeHtml(formData.nombre)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #4A4A4A; font-size: 14px; font-weight: 600;">Empresa:</td>
                    <td style="padding: 8px 0; color: #282327; font-size: 14px; font-weight: 400;">${escapeHtml(formData.empresa)}</td>
                  </tr>
                  ${formData.cuit ? `
                  <tr>
                    <td style="padding: 8px 0; color: #4A4A4A; font-size: 14px; font-weight: 600;">CUIT:</td>
                    <td style="padding: 8px 0; color: #282327; font-size: 14px; font-weight: 400;">${escapeHtml(formData.cuit)}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 8px 0; color: #4A4A4A; font-size: 14px; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0; color: #E94E1B; font-size: 14px; font-weight: 500;">
                      <a href="mailto:${escapeHtml(formData.email)}" style="color: #E94E1B; text-decoration: none;">${escapeHtml(formData.email)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #4A4A4A; font-size: 14px; font-weight: 600;">Teléfono:</td>
                    <td style="padding: 8px 0; color: #282327; font-size: 14px; font-weight: 400;">${escapeHtml(formData.telefono)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #4A4A4A; font-size: 14px; font-weight: 600;">Ciudad:</td>
                    <td style="padding: 8px 0; color: #282327; font-size: 14px; font-weight: 400;">${escapeHtml(formData.ciudad)}</td>
                  </tr>
                </table>
              </div>

              <!-- Servicio de Interés -->
              <div style="background-color: #FFF7F3; border-radius: 8px; padding: 24px; margin-bottom: 32px; border: 1px solid rgba(233, 78, 27, 0.2);">
                <h2 style="margin: 0 0 12px 0; color: #282327; font-size: 18px; font-weight: 700;">
                  Servicio de Interés
                </h2>
                <p style="margin: 0; color: #E94E1B; font-size: 16px; font-weight: 600;">
                  ${escapeHtml(formData.servicio)}
                </p>
              </div>

              <!-- Mensaje -->
              <div style="margin-bottom: 32px;">
                <h2 style="margin: 0 0 16px 0; color: #282327; font-size: 18px; font-weight: 700;">
                  Mensaje
                </h2>
                <div style="background-color: #F9F9F9; border-radius: 8px; padding: 20px; border: 1px solid #E5E5E5;">
                  <p style="margin: 0; color: #4A4A4A; font-size: 14px; font-weight: 400; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(formData.mensaje)}</p>
                </div>
              </div>

              <!-- Footer Info -->
              <div style="border-top: 1px solid #E5E5E5; padding-top: 24px; margin-top: 32px;">
                <p style="margin: 0 0 8px 0; color: #6B6B6B; font-size: 12px; font-weight: 400;">
                  <strong style="color: #282327;">Fecha y hora de envío:</strong> ${fecha}
                </p>
                <p style="margin: 0; color: #6B6B6B; font-size: 12px; font-weight: 400;">
                  Este correo fue enviado desde el formulario de contacto de Trendit.
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #282327; padding: 24px 40px; text-align: center;">
              <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 12px; font-weight: 400;">
                © ${new Date().getFullYear()} Trendit. Todos los derechos reservados.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Inicializar EmailJS
      if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS no está configurado. Por favor, configura las variables de entorno VITE_EMAILJS_*');
      }

      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Preparar los datos para el template
      const templateParams = {
        to_email: 'ventas@trendit.com.ar',
        from_name: formData.nombre,
        from_email: formData.email,
        subject: `Nueva consulta - ${formData.servicio}`,
        message_html: generateEmailHTML(),
        // También enviar los datos en formato texto plano para templates simples
        nombre: formData.nombre,
        empresa: formData.empresa,
        cuit: formData.cuit || 'No proporcionado',
        email: formData.email,
        telefono: formData.telefono,
        ciudad: formData.ciudad,
        servicio: formData.servicio,
        mensaje: formData.mensaje,
        fecha: new Date().toLocaleString('es-AR', {
          dateStyle: 'long',
          timeStyle: 'short'
        })
      };

      // Enviar email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setSubmitStatus('success');

      // Limpiar formulario
      setFormData({
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

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error al enviar el email:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Ocurrió un error al enviar el formulario. Por favor, intentá nuevamente o contactanos por WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
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

                  {/* Mensajes de estado */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-start gap-3"
                      >
                        <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p
                            className="text-[14px] font-semibold mb-1"
                            style={{
                              color: '#15803d',
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                            }}
                          >
                            ¡Consulta enviada exitosamente!
                          </p>
                          <p
                            className="text-[13px]"
                            style={{
                              color: '#166534',
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 400
                            }}
                          >
                            Recibimos tu mensaje. Un especialista de Trendit te contactará pronto.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3"
                      >
                        <AlertCircle className="size-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p
                            className="text-[14px] font-semibold mb-1"
                            style={{
                              color: '#dc2626',
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                            }}
                          >
                            Error al enviar la consulta
                          </p>
                          <p
                            className="text-[13px]"
                            style={{
                              color: '#991b1b',
                              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                              fontWeight: 400
                            }}
                          >
                            {errorMessage || 'Ocurrió un error. Por favor, intentá nuevamente o contactanos por WhatsApp.'}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Botón enviar */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-[#E94E1B] hover:bg-[#d94419] text-white px-8 h-[54px] transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        borderRadius: '12px',
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        boxShadow: '0 4px 14px rgba(233, 78, 27, 0.25), 0 2px 6px rgba(233, 78, 27, 0.15)'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 size-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar consulta
                          <Send className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    {submitStatus === 'idle' && (
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
                    )}
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
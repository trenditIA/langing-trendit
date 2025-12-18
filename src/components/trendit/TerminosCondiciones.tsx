import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Mail } from 'lucide-react';

export function TerminosCondiciones() {
  const [isTOCOpen, setIsTOCOpen] = useState(false);

  const sections = [
    { id: 'aceptacion', title: '1. Aceptación de los términos' },
    { id: 'definiciones', title: '2. Definiciones' },
    { id: 'uso-permitido', title: '3. Uso permitido del sitio' },
    { id: 'informacion', title: '4. Información, disponibilidad y exactitud' },
    { id: 'cotizaciones', title: '5. Cotizaciones, propuestas y contratación' },
    { id: 'condiciones-de-financiacion', title: '6. Condiciones de financiación' },
    { id: 'garantias', title: '7. Garantías, soporte y servicios de fabricantes' },
    { id: 'propiedad', title: '8. Propiedad intelectual' },
    { id: 'enlaces', title: '9. Enlaces a terceros' },
    { id: 'limitacion', title: '10. Limitación de responsabilidad' },
    { id: 'privacidad', title: '11. Privacidad y datos personales' },
    { id: 'modificaciones', title: '12. Modificaciones' },
    { id: 'ley', title: '13. Ley aplicable y jurisdicción' },
    { id: 'contacto', title: '14. Contacto' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsTOCOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%20Trendit%2C%20tengo%20una%20consulta%20sobre%20T%C3%A9rminos%20y%20Condiciones%20del%20sitio.', '_blank');
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 pt-32 md:pt-36 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
          
          {/* Left Column - TOC (Desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h3 
                className="text-[15px] uppercase tracking-wider mb-5 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Contenido
              </h3>
              <nav>
                <ul className="space-y-2.5">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="text-[14px] text-neutral-600 hover:text-[#E94E1B] transition-colors text-left w-full"
                        style={{
                          fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          fontWeight: 400
                        }}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Right Column - Content */}
          <main>
            {/* Mobile TOC Toggle */}
            <div className="lg:hidden mb-8">
              <button
                onClick={() => setIsTOCOpen(!isTOCOpen)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-neutral-200 hover:border-[#E94E1B]/30 transition-colors"
              >
                <span 
                  className="text-[14px] text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 500
                  }}
                >
                  Ver secciones
                </span>
                {isTOCOpen ? (
                  <ChevronUp className="size-5 text-[#E94E1B]" />
                ) : (
                  <ChevronDown className="size-5 text-neutral-400" />
                )}
              </button>
              
              {isTOCOpen && (
                <div className="mt-3 p-5 bg-white rounded-xl border border-neutral-200">
                  <ul className="space-y-2.5">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className="text-[14px] text-neutral-600 hover:text-[#E94E1B] transition-colors text-left w-full"
                          style={{
                            fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                            fontWeight: 400
                          }}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Header */}
            <div className="mb-12">
              <h1 
                className="text-[36px] md:text-[42px] lg:text-[48px] leading-[1.1] mb-4 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Términos y Condiciones
              </h1>
              <p 
                className="text-[16px] md:text-[17px] text-neutral-600 mb-2 leading-[1.6]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Estos términos regulan el uso del sitio web de Trendit y la solicitud de información, cotizaciones y servicios.
              </p>
              <p 
                className="text-[14px] text-neutral-500"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Última actualización: 15 de diciembre de 2024
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
              
              {/* Section 1 */}
              <section id="aceptacion">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  1. Aceptación de los términos
                </h2>
                <p 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Al acceder y utilizar este sitio web, aceptas estos Términos y Condiciones. Si no estás de acuerdo, por favor no uses el sitio.
                </p>
              </section>

              {/* Section 2 */}
              <section id="definiciones">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  2. Definiciones
                </h2>
                <div className="space-y-3">
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>"Trendit":</strong> Trendit SRL, CUIT 30-71516327-2.
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>"Sitio":</strong> el sitio web oficial de Trendit y sus páginas asociadas.
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>"Usuario":</strong> toda persona que navega el Sitio o solicita información.
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>"Servicios":</strong> soluciones de infraestructura IT, redes y conectividad, data center, microinformática, colaboración, videoseguridad, energía, cableado/obras tecnológicas, y servicios asociados.
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>"Solicitud":</strong> cualquier formulario, contacto por WhatsApp, email u otro canal publicado para pedir información, diagnóstico o cotización.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="uso-permitido">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  3. Uso permitido del sitio
                </h2>
                <div className="space-y-4">
                  <div>
                    <p 
                      className="text-[15px] md:text-[16px] text-neutral-700 mb-2 leading-[1.7]"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Puedes usar este Sitio para:
                    </p>
                    <ul className="space-y-2 ml-5">
                      <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                        <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                        <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                          Informarte sobre los servicios de Trendit.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                        <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                        <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                          Solicitar diagnósticos, cotizaciones, reuniones o asesoramiento.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                        <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                        <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                          Contactarte por los canales oficiales publicados.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p 
                      className="text-[15px] md:text-[16px] text-neutral-700 mb-2 leading-[1.7]"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      No puedes:
                    </p>
                    <ul className="space-y-2 ml-5">
                      <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                        <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                        <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                          Usar el Sitio con fines ilegales o para interferir su funcionamiento.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                        <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                        <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                          Intentar acceder sin autorización a sistemas, formularios o datos.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                        <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                        <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                          Copiar o reutilizar contenidos sin permiso.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="informacion">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  4. Información, disponibilidad y exactitud
                </h2>
                <p 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Trendit procura mantener la información actualizada. Sin embargo, el contenido puede variar por disponibilidad, cambios tecnológicos, actualizaciones de fabricantes o condiciones comerciales. La información publicada es orientativa y no constituye una oferta vinculante.
                </p>
              </section>

              {/* Section 5 */}
              <section id="cotizaciones">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  5. Cotizaciones, propuestas y contratación
                </h2>
                <div className="space-y-3">
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Las cotizaciones y propuestas comerciales:
                  </p>
                  <ul className="space-y-2 ml-5">
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        Se emiten por canales oficiales (por ejemplo, email/WhatsApp corporativo o documentación formal).
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        Pueden incluir alcances, plazos, garantías, condiciones de entrega, soporte y validez temporal.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        La contratación definitiva se confirma únicamente mediante aceptación formal de la propuesta, orden de compra, contrato o documento equivalente.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 - CRITICAL ANCHOR */}
              <section id="condiciones-de-financiacion">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  6. Condiciones de financiación
                </h2>
                <div className="space-y-3">
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Cuando el Sitio permite simular o solicitar financiación, ten en cuenta que:
                  </p>
                  <ul className="space-y-2 ml-5">
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        La simulación es orientativa y está sujeta a evaluación, validaciones y aprobación.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        Las tasas, plazos, moneda, aprobaciones y condiciones finales pueden variar según el proyecto y la documentación requerida.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        Trendit podrá solicitar información adicional para analizar la solicitud.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        La aprobación y condiciones se informarán por canales oficiales.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        La financiación no se considera confirmada hasta que exista una aprobación formal y la aceptación/documentación correspondiente.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 7 */}
              <section id="garantias">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  7. Garantías, soporte y servicios de fabricantes
                </h2>
                <p 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Algunos productos o soluciones pueden incluir garantías de fabricantes (por ejemplo, garantías on-site, coberturas especiales o programas de protección). Las condiciones específicas dependen de marca, línea, SKU y registro. Trendit puede asesorarte y gestionar la integración/implementación según el alcance acordado.
                </p>
              </section>

              {/* Section 8 */}
              <section id="propiedad">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  8. Propiedad intelectual
                </h2>
                <p 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  El contenido del Sitio (textos, imágenes, diseño, marca, logotipos y recursos) pertenece a Trendit o a sus respectivos titulares y está protegido por normas de propiedad intelectual. No se autoriza su uso comercial sin permiso previo por escrito.
                </p>
              </section>

              {/* Section 9 */}
              <section id="enlaces">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  9. Enlaces a terceros
                </h2>
                <p 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  El Sitio puede incluir enlaces a páginas de terceros. Trendit no controla su contenido ni asume responsabilidad por su disponibilidad, seguridad o políticas.
                </p>
              </section>

              {/* Section 10 */}
              <section id="limitacion">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  10. Limitación de responsabilidad
                </h2>
                <div className="space-y-3">
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Trendit no será responsable por:
                  </p>
                  <ul className="space-y-2 ml-5">
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        Daños derivados del uso o imposibilidad de uso del Sitio.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        Interrupciones, errores, malware o fallas del servicio por causas ajenas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]">
                      <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                      <span style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 400 }}>
                        Decisiones tomadas por el Usuario basadas únicamente en información general publicada en el Sitio.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 11 */}
              <section id="privacidad">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  11. Privacidad y datos personales
                </h2>
                <p 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Los datos enviados a través de formularios o canales de contacto se utilizarán para responder consultas, coordinar diagnósticos/cotizaciones y gestionar la relación comercial. Trendit adopta medidas razonables para proteger la información.
                </p>
              </section>

              {/* Section 12 */}
              <section id="modificaciones">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  12. Modificaciones
                </h2>
                <p 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Trendit puede actualizar estos Términos y Condiciones cuando sea necesario. La versión vigente será la publicada en el Sitio, indicando la fecha de actualización.
                </p>
              </section>

              {/* Section 13 */}
              <section id="ley">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  13. Ley aplicable y jurisdicción
                </h2>
                <p 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Estos términos se rigen por las leyes de la República Argentina. Cualquier controversia será sometida a los tribunales competentes de la ciudad de Córdoba, Argentina, salvo norma imperativa en contrario.
                </p>
              </section>

              {/* Section 14 */}
              <section id="contacto">
                <h2 
                  className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                >
                  14. Contacto
                </h2>
                <div className="space-y-2">
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Trendit SRL (CUIT 30-71516327-2)
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Dirección: Av. Rafael Nuñez 3594, Córdoba, Argentina.
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    Para consultas, visita la página{' '}
                    <a 
                      href="#contactanos" 
                      className="text-[#E94E1B] hover:text-[#D43E10] underline transition-colors"
                      style={{
                        fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Contactanos
                    </a>
                    {' '}o escribe por WhatsApp desde los botones del Sitio.
                  </p>
                </div>
              </section>
            </div>

            {/* CTA Final */}
            <div className="mt-16 p-8 md:p-10 bg-white rounded-2xl border border-neutral-200 shadow-sm">
              <h3 
                className="text-[24px] md:text-[26px] mb-3 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                ¿Tienes una consulta?
              </h3>
              <p 
                className="text-[15px] md:text-[16px] text-neutral-600 mb-6 leading-[1.6]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Si necesitas aclaraciones sobre estos términos o quieres continuar con una consulta comercial, Trendit puede ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contactanos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E94E1B] hover:bg-[#D43E10] text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 500
                  }}
                >
                  <Mail className="size-5" />
                  Ir a Contactanos
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-50 text-[#282327] border-2 border-neutral-300 hover:border-[#E94E1B]/30 rounded-xl transition-all duration-300"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 500
                  }}
                >
                  <MessageCircle className="size-5" />
                  WhatsApp
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

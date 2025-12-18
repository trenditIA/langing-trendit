import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield } from 'lucide-react';

export function Privacidad() {
  const [isTOCOpen, setIsTOCOpen] = useState(false);

  const sections = [
    { id: 'responsable', title: '1. Responsable del tratamiento' },
    { id: 'datos-recolectados', title: '2. Qué datos podemos recolectar' },
    { id: 'uso-datos', title: '3. Para qué usamos los datos' },
    { id: 'base-legal', title: '4. Base legal' },
    { id: 'compartir-datos', title: '5. Con quién compartimos los datos' },
    { id: 'transferencias', title: '6. Transferencias internacionales' },
    { id: 'seguridad', title: '7. Seguridad' },
    { id: 'plazos', title: '8. Plazos de conservación' },
    { id: 'derechos', title: '9. Derechos de las personas titulares' },
    { id: 'cookies', title: '10. Cookies' },
    { id: 'cambios', title: '11. Cambios a esta política' }
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

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Main Content */}
      <div className="max-w-[920px] mx-auto px-6 lg:px-12 pt-32 md:pt-36 pb-16 md:pb-20">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-white rounded-full border border-neutral-200">
            <Shield className="size-4 text-[#E94E1B]" />
            <span 
              className="text-[13px] text-neutral-700"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              Protección de datos
            </span>
          </div>
          
          <h1 
            className="text-[36px] md:text-[42px] lg:text-[48px] leading-[1.1] mb-4 text-[#282327]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 600
            }}
          >
            Política de Privacidad
          </h1>
          <p 
            className="text-[16px] md:text-[17px] text-neutral-600 mb-2 leading-[1.6]"
            style={{
              fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 400
            }}
          >
            En Trendit cuidamos los datos personales y explicamos, de forma clara, cómo se recolectan y para qué se usan.
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

        {/* TOC Card */}
        <div className="mb-10">
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            {/* Desktop: Always visible */}
            <div className="hidden md:block p-6">
              <h3 
                className="text-[15px] uppercase tracking-wider mb-4 text-[#282327]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 600
                }}
              >
                Contenido
              </h3>
              <nav>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
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

            {/* Mobile: Collapsible */}
            <div className="md:hidden">
              <button
                onClick={() => setIsTOCOpen(!isTOCOpen)}
                className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors"
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
                <div className="px-4 pb-4 border-t border-neutral-200">
                  <ul className="space-y-2.5 mt-4">
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
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section id="responsable" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              1. Responsable del tratamiento
            </h2>
            <div className="space-y-2">
              <p 
                className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                <strong style={{ fontWeight: 600 }}>Trendit SRL</strong> (CUIT 30-71516327-2)
              </p>
              <p 
                className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                <strong style={{ fontWeight: 600 }}>Domicilio:</strong> Av. Rafael Nuñez 3594, Córdoba, Argentina
              </p>
              <p 
                className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                <strong style={{ fontWeight: 600 }}>Contacto:</strong>{' '}
                <a 
                  href="mailto:ventas@trendit.com.ar" 
                  className="text-[#E94E1B] hover:text-[#D43E10] underline transition-colors"
                >
                  ventas@trendit.com.ar
                </a>
              </p>
              <p 
                className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                style={{
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                <strong style={{ fontWeight: 600 }}>WhatsApp:</strong>{' '}
                <a 
                  href="https://wa.me/5493516714007" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E94E1B] hover:text-[#D43E10] underline transition-colors"
                >
                  +54 9 3516 71-4007
                </a>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="datos-recolectados" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              2. Qué datos podemos recolectar
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7] mb-4"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Dependiendo del formulario o del contacto, Trendit puede recolectar:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <div>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Datos de identificación y contacto:
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-600 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    nombre y apellido, email, teléfono.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <div>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Datos de organización:
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-600 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    razón social, CUIT, cargo/área, dirección.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <div>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Datos del proyecto/consulta:
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-600 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    necesidad, rubro, ubicación, marcas/tecnologías de interés, presupuesto estimado.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <div>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Datos de navegación:
                  </p>
                  <p 
                    className="text-[15px] md:text-[16px] text-neutral-600 leading-[1.7]"
                    style={{
                      fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontWeight: 400
                    }}
                  >
                    información técnica básica (por ejemplo, navegador, páginas visitadas, métricas de uso) mediante cookies/tecnologías similares.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="uso-datos" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              3. Para qué usamos los datos
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7] mb-3"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Usamos los datos para:
            </p>
            <ul className="space-y-2 ml-5">
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Responder consultas comerciales y técnicas.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Preparar cotizaciones, propuestas y relevamientos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Gestionar solicitudes de financiación/leasing y simulaciones (si aplica).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Coordinar visitas, instalaciones o soporte.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Mejorar la experiencia del sitio y sus contenidos.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="base-legal" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              4. Base legal
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7] mb-3"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              El tratamiento se realiza según corresponda:
            </p>
            <ul className="space-y-2 ml-5">
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Consentimiento (por ejemplo, cuando se completa un formulario).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Ejecución de una relación precontractual/contractual (cotizaciones, proyectos, soporte).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Interés legítimo (mejora del sitio y seguridad), cuando corresponda.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="compartir-datos" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              5. Con quién compartimos los datos
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7] mb-3"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Trendit puede compartir datos solo cuando sea necesario para operar:
            </p>
            <ul className="space-y-2 ml-5 mb-4">
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Proveedores de servicios (hosting, email, analítica, formularios, CRM).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Partners técnicos o logísticos cuando el proyecto lo requiera (por ejemplo, disponibilidad, garantías, soporte o implementación).
                </span>
              </li>
            </ul>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 500
              }}
            >
              Trendit no vende datos personales.
            </p>
          </section>

          {/* Section 6 */}
          <section id="transferencias" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              6. Transferencias internacionales
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Algunos proveedores tecnológicos pueden operar infraestructura fuera de Argentina. En esos casos, Trendit procura aplicar medidas de seguridad y acuerdos adecuados para proteger la información, según buenas prácticas y normativa aplicable.
            </p>
          </section>

          {/* Section 7 */}
          <section id="seguridad" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              7. Seguridad
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Trendit aplica medidas razonables de seguridad técnica y organizativa para reducir riesgos de acceso no autorizado, pérdida o uso indebido.
            </p>
          </section>

          {/* Section 8 */}
          <section id="plazos" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              8. Plazos de conservación
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7] mb-3"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Los datos se conservan:
            </p>
            <ul className="space-y-2 ml-5">
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Mientras sean necesarios para responder y gestionar la relación comercial/proyecto; y/o
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 rounded-full bg-[#E94E1B] mt-2 flex-shrink-0" />
                <span 
                  className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 400
                  }}
                >
                  Durante los plazos exigidos por obligaciones legales o contractuales.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="derechos" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              9. Derechos de las personas titulares
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7] mb-3"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              La persona titular puede solicitar acceso, rectificación, actualización o supresión de sus datos personales conforme la Ley 25.326.
            </p>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              La Agencia de Acceso a la Información Pública (AAIP) es el órgano de control y atiende denuncias y reclamos por incumplimientos en materia de datos personales.
            </p>
          </section>

          {/* Section 10 */}
          <section id="cookies" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              10. Cookies
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Trendit puede usar cookies para funcionamiento y medición de uso. La persona usuaria puede configurar su navegador para bloquear o eliminar cookies. Algunas funciones del sitio pueden verse afectadas.
            </p>
          </section>

          {/* Section 11 */}
          <section id="cambios" className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
            <h2 
              className="text-[22px] md:text-[24px] mb-4 text-[#282327]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 600
              }}
            >
              11. Cambios a esta política
            </h2>
            <p 
              className="text-[15px] md:text-[16px] text-neutral-700 leading-[1.7]"
              style={{
                fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400
              }}
            >
              Trendit puede actualizar esta política para reflejar mejoras o cambios normativos. La versión vigente se publica en esta misma página con su fecha de actualización.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

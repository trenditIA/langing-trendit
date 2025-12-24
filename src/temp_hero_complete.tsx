function HeroServicios() {
  const [hoveredNode, setHoveredNode] = React.useState<number | null>(null);

  const orbitServices = [
    {
      icon: <Wifi className="size-6" />,
      label: 'Networking & WiFi',
      angle: 0
    },
    {
      icon: <Server className="size-6" />,
      label: 'Data center y energía',
      angle: 72
    },
    {
      icon: <Camera className="size-6" />,
      label: 'Videoseguridad y control',
      angle: 144
    },
    {
      icon: <Users className="size-6" />,
      label: 'Team collaboration y salas híbridas',
      angle: 216
    },
    {
      icon: <Wrench className="size-6" />,
      label: 'Servicios profesionales y gestión de proyectos',
      angle: 288
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516000000', '_blank');
  };

  const handleMeeting = () => {
    //DO NOTHING
  };

  return (
    <section
      className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden"
      style={{
        minHeight: '75vh',
        maxHeight: '85vh',
        background: 'linear-gradient(135deg, #FFF5ED 0%, #FFFBF7 50%, #FFFFFF 100%)'
      }}
    >
      {/* Subtle connection network pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
        <defs>
          <pattern id="connection-dots" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1.5" fill="#282327" />
            <line x1="40" y1="40" x2="80" y2="40" stroke="#282327" strokeWidth="0.5" strokeDasharray="2 4" />
            <line x1="40" y1="40" x2="40" y2="80" stroke="#282327" strokeWidth="0.5" strokeDasharray="2 4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#connection-dots)" />
      </svg>

      <div className="max-w-[1300px] mx-auto relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
          {/* Left column - Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-7"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] uppercase font-bold tracking-wider"
              style={{
                background: 'rgba(233, 78, 27, 0.08)',
                color: '#E94E1B',
                border: '1px solid rgba(233, 78, 27, 0.15)'
              }}
            >
              SERVICIOS · INFRAESTRUCTURA IT
            </div>

            {/* Main heading */}
            <h1 className="text-[44px] md:text-[54px] lg:text-[62px] leading-[1.05] text-[#282327] tracking-tight max-w-[600px]">
              De cajas a experiencias conectadas
            </h1>

            {/* Subtitle */}
            <p className="text-[19px] md:text-[20px] lg:text-[21px] text-neutral-700 leading-[1.5] font-medium max-w-[560px]">
              Transformamos switches, servidores, cámaras y licencias en una arquitectura IT que se siente simple para tus usuarios.
            </p>

            {/* Supporting paragraphs */}
            <div className="space-y-4 text-[15px] md:text-[16px] text-neutral-600 leading-[1.7] max-w-[560px]">
              <p>
                Diseñamos, integramos y sostenemos redes, data centers, energía, videoseguridad y colaboración para que tu operación tenga continuidad, seguridad y visión de futuro.
              </p>
              <p>
                Gestionamos cada proyecto con metodologías PMI y ágiles, con alcance, tiempos y resultados claros desde el inicio.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                onClick={handleMeeting}
                className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                style={{
                  borderRadius: '12px',
                  padding: '16px 32px',
                  boxShadow: '0 8px 24px rgba(233, 78, 27, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
                }}
              >
                Agendar una reunión con Trendit
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsApp}
                className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                style={{
                  borderRadius: '12px',
                  padding: '16px 32px',
                  background: 'rgba(255, 255, 255, 0.5)'
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                Escribirnos por WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right column - Service Orbit Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="relative rounded-[32px] p-8 lg:p-12"
              style={{
                minHeight: '500px',
                background: 'linear-gradient(135deg, #FEFEFE 0%, #FAFAFA 100%)',
                boxShadow: '0 12px 32px rgba(40, 35, 39, 0.08), inset 0 2px 6px rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(40, 35, 39, 0.05)'
              }}
            >
              <div className="relative w-full h-[420px] flex items-center justify-center">
                {/* Orbit ring (subtle circle guide) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: '340px',
                    height: '340px',
                    borderRadius: '50%',
                    border: '1px dashed rgba(233, 78, 27, 0.12)'
                  }}
                />

                {/* Center hub */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: "backOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div
                    className="px-6 py-5 rounded-2xl flex flex-col items-center justify-center text-white relative"
                    style={{
                      background: 'linear-gradient(135deg, #E94E1B 0%, #d94419 100%)',
                      boxShadow: '0 8px 24px rgba(233, 78, 27, 0.35), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <Server className="size-8 mb-2" />
                    <span className="text-[11px] font-bold text-center leading-tight">
                      Infraestructura<br />IT Trendit
                    </span>
                  </div>
                </motion.div>

                {/* Orbiting service nodes */}
                {orbitServices.map((service, idx) => {
                  const radius = 170;
                  const angleRad = (service.angle * Math.PI) / 180;
                  const x = Math.cos(angleRad) * radius;
                  const y = Math.sin(angleRad) * radius;

                  return (
                    <React.Fragment key={idx}>
                      {/* Connection line from center to node */}
                      <motion.svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        width="500"
                        height="500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 + idx * 0.12, duration: 0.5 }}
                        style={{ overflow: 'visible' }}
                      >
                        <motion.line
                          x1="250"
                          y1="250"
                          x2={250 + x}
                          y2={250 + y}
                          stroke={hoveredNode === idx ? '#E94E1B' : 'rgba(233, 78, 27, 0.25)'}
                          strokeWidth={hoveredNode === idx ? '2.5' : '1.5'}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.9 + idx * 0.12, duration: 0.6 }}
                        />
                      </motion.svg>

                      {/* Service node */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          x: x,
                          y: y
                        }}
                        transition={{
                          delay: 0.9 + idx * 0.12,
                          duration: 0.5,
                          ease: "backOut"
                        }}
                        className="absolute top-1/2 left-1/2 cursor-pointer z-10"
                        style={{
                          transform: 'translate(-50%, -50%)'
                        }}
                        onMouseEnter={() => setHoveredNode(idx)}
                        onMouseLeave={() => setHoveredNode(null)}
                      >
                        <motion.div
                          className="flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300"
                          style={{
                            background: hoveredNode === idx
                              ? 'linear-gradient(135deg, #FFF7F0 0%, #FFFFFF 100%)'
                              : 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)',
                            boxShadow: hoveredNode === idx
                              ? '0 8px 24px rgba(233, 78, 27, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.9)'
                              : '0 4px 12px rgba(40, 35, 39, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
                            border: `1.5px solid ${hoveredNode === idx ? 'rgba(233, 78, 27, 0.3)' : 'rgba(233, 78, 27, 0.1)'}`,
                            minWidth: '110px',
                            maxWidth: '140px'
                          }}
                          whileHover={{ scale: 1.08 }}
                        >
                          <div
                            className="size-11 rounded-xl flex items-center justify-center transition-all duration-300"
                            style={{
                              background: hoveredNode === idx
                                ? 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)'
                                : 'linear-gradient(135deg, #FFF0E6 0%, #FFE4CC 100%)',
                              color: hoveredNode === idx ? '#E94E1B' : '#d4662a'
                            }}
                          >
                            {service.icon}
                          </div>
                          <span
                            className="text-[10px] font-semibold text-center leading-tight transition-colors duration-300"
                            style={{
                              color: hoveredNode === idx ? '#E94E1B' : '#282327'
                            }}
                          >
                            {service.label}
                          </span>
                        </motion.div>
                      </motion.div>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute bottom-6 left-6 text-neutral-500 text-sm font-medium"
              >
                Mapa de servicios Trendit
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

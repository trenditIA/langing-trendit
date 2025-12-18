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

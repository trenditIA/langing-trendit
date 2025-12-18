import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface SamsungHeroProps {
  onOpenCotizacion: () => void;
  onWhatsApp: () => void;
  scrollToSection: (id: string) => void;
}

export function SamsungHero({ onOpenCotizacion, onWhatsApp, scrollToSection }: SamsungHeroProps) {
  const navPills = [
    { label: 'Cartelería digital', id: 'carteleria-digital' },
    { label: 'Video wall', id: 'video-wall' },
    { label: 'LED The Wall', id: 'the-wall' },
    { label: 'Knox & gestión de dispositivos', id: 'samsung-knox' },
    { label: 'Casos / historias de éxito', id: 'casos-uso' },
    { label: 'Servicios Trendit', id: 'por-que-trendit' },
    { label: 'Solicitar cotización', id: 'cta-final' },
  ];

  const chips = [
    'Cartelería Digital',
    'Video Wall',
    'LED The Wall',
    'Knox',
    'Knox Manage',
    'Retail',
    'Corporativo',
    'Educación'
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>

      {/* Static glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E94E1B] rounded-full blur-[140px] opacity-20" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#E94E1B] rounded-full blur-[140px] opacity-15" />

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.65fr] gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Columna izquierda - Contenido */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-6 text-[13px]">
              <a 
                href="#home" 
                className="text-neutral-400 hover:text-white transition-colors"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                Inicio
              </a>
              <ChevronRight className="size-3.5 text-neutral-500" />
              <a 
                href="#marcas-partners" 
                className="text-neutral-400 hover:text-white transition-colors"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 400 }}
              >
                Marcas & Partners
              </a>
              <ChevronRight className="size-3.5 text-neutral-500" />
              <span 
                className="text-white"
                style={{ fontFamily: 'Campton, sans-serif', fontWeight: 500 }}
              >
                Samsung
              </span>
            </nav>

            {/* H1 */}
            <h1 
              className="text-[40px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[58px] leading-[1.08] mb-6 tracking-tight text-white max-w-[900px]"
              style={{
                fontFamily: 'Campton, sans-serif',
                fontWeight: 700
              }}
            >
              Samsung en Trendit: cartelería digital, video wall y Knox para tu operación
            </h1>

            {/* Subtitle */}
            <p 
              className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.65] mb-8 text-neutral-300 max-w-[680px]"
              style={{
                fontFamily: 'Campton, sans-serif',
                fontWeight: 400
              }}
            >
              Control centralizado multi-sede, seguridad enterprise y experiencia visual premium para retail, corporativo y sectores críticos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg"
                onClick={onWhatsApp}
                className="bg-[#E94E1B] hover:bg-[#d94419] text-white px-8 h-[56px] shadow-lg shadow-[#E94E1B]/30 group transition-all duration-300 w-full sm:w-auto"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                <MessageCircle className="mr-2 size-5" />
                Hablar por WhatsApp
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={onOpenCotizacion}
                className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm w-full sm:w-auto transition-all duration-300 h-[56px]"
                style={{
                  borderRadius: '12px',
                  fontFamily: 'Campton, sans-serif',
                  fontWeight: 600,
                  fontSize: '15px'
                }}
              >
                Solicitar cotización Samsung
              </Button>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 lg:gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {chips.map((chip, idx) => (
                <span 
                  key={idx}
                  className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300 whitespace-nowrap"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Columna derecha - Navegación rápida */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-6">
            <h3 
              className="text-[17px] text-white mb-4"
              style={{
                fontFamily: 'Campton, sans-serif',
                fontWeight: 600
              }}
            >
              Navegación rápida
            </h3>
            
            <div className="space-y-2">
              {navPills.map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(pill.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-[14px] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-between group"
                  style={{
                    fontFamily: 'Campton, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {pill.label}
                  <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

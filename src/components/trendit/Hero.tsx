import { ArrowRight, MessageCircle, Server, Network, Video, Sprout } from 'lucide-react';
import { Button } from '../ui/button';
import React from 'react';

export const Hero = React.memo(function Hero() {
  const handleNavigateToService = (serviceIndex: number) => {
    // Store the service index in session storage to be picked up by the Servicios page
    sessionStorage.setItem('targetService', serviceIndex.toString());
    window.location.hash = 'servicios';
  };

  const handleNavigateToReforestar = () => {
    window.location.hash = 'reforestar';
  };

  const handleAgendar = () => {
    window.location.hash = 'contactanos';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493516714007?text=Hola%20Trendit%2C%20quiero%20informaci%C3%B3n%20general%20sobre%20sus%20servicios%20y%20una%20reuni%C3%B3n.', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-[#282327] via-[#2d2832] to-[#282327] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* Background elements - Simplified for performance */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>

      {/* Static glow - no animation for better LCP */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#E94E1B] rounded-full blur-[120px] opacity-20" />

      <div className="max-w-[1440px] mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left content - 60% on desktop */}
          <div className="lg:col-span-7">
            {/* No motion wrapper - direct render for LCP */}
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full mb-4 md:mb-6">
                <span className="text-xs sm:text-sm tracking-wide" style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
                  Trendit Tecnología Sustentable
                </span>
              </div>

              <h1 
                className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-white mb-4 md:mb-6"
                style={{ 
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700
                }}
              >
                Transformamos desafíos en oportunidades con tecnología.
              </h1>

              <p 
                className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-[1.6] max-w-2xl"
                style={{ 
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 400
                }}
              >
                Integramos infraestructura IT, redes, videoseguridad, team collaboration y energía con propósito, 
                para que tu negocio funcione, crezca y sea más sostenible con Reforestar.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button 
                  size="lg"
                  className="bg-[#E94E1B] hover:bg-[#E94E1B]/90 text-white px-6 md:px-8 group shadow-lg shadow-[#E94E1B]/20 w-full sm:w-auto"
                  style={{ 
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                  onClick={handleAgendar}
                >
                  Agendar una reunión con Trendit
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm w-full sm:w-auto transition-all duration-300"
                  style={{ 
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 size-5" />
                  Escribirnos por WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Right visual - 40% Bento grid on desktop */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            {/* Direct render without motion for LCP - animates with CSS */}
            <div className="space-y-3 md:space-y-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              {/* Top row - 2 cards */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <BentoCard
                  icon={<Server className="size-6 md:size-8" />}
                  bgColor="bg-gradient-to-br from-[#E94E1B]/20 to-[#E94E1B]/10"
                  borderColor="border-[#E94E1B]/30"
                  onClick={() => handleNavigateToService(0)}
                >
                  Infraestructura & Data Center
                </BentoCard>
                <BentoCard
                  icon={<Network className="size-6 md:size-8" />}
                  bgColor="bg-white/5"
                  borderColor="border-white/20"
                  onClick={() => handleNavigateToService(1)}
                >
                  Redes & Colaboración
                </BentoCard>
              </div>

              {/* Middle - 1 large card */}
              <BentoCard
                icon={<Video className="size-8 md:size-10" />}
                bgColor="bg-white/5"
                borderColor="border-white/20"
                className="h-28 md:h-32"
                onClick={() => handleNavigateToService(3)}
              >
                Videoseguridad & Analítica
              </BentoCard>

              {/* Bottom - Reforestar card */}
              <BentoCard
                icon={<Sprout className="size-8 md:size-10" />}
                bgColor="bg-gradient-to-br from-green-500/20 to-green-500/10"
                borderColor="border-green-500/30"
                className="h-32 md:h-40"
                onClick={handleNavigateToReforestar}
              >
                <div className="flex flex-col justify-end h-full">
                  <span className="text-green-400" style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}>
                    Reforestar
                  </span>
                  <span 
                    className="text-xs text-white/60 mt-2"
                    style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
                  >
                    Tecnología con impacto positivo
                  </span>
                </div>
              </BentoCard>

              <p 
                className="text-xs sm:text-sm text-white/50 text-center mt-4 md:mt-6"
                style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              >
                De la infraestructura crítica a la sostenibilidad (Reforestar)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

function BentoCard({ 
  icon, 
  children, 
  bgColor, 
  borderColor,
  className = "",
  onClick
}: { 
  icon: React.ReactNode; 
  children: React.ReactNode;
  bgColor: string;
  borderColor: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className={`${bgColor} ${borderColor} border backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 ${className} 
        hover:scale-105 transition-all duration-300 flex flex-col justify-between cursor-pointer w-full text-left
        active:scale-95`}
    >
      <div className="text-white/80 mb-2 md:mb-3 flex items-center justify-start">
        {icon}
      </div>
      <div 
        className="text-white text-xs sm:text-sm leading-tight"
        style={{ fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: 500 }}
      >
        {children}
      </div>
    </button>
  );
}
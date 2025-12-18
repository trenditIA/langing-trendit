import { useRef, memo } from 'react';
import { Sprout, Briefcase, Users, Calendar, CheckSquare } from 'lucide-react';

export const Stats = memo(function Stats() {
  const stats = [
    {
      value: '+10.000',
      label: 'ÁRBOLES PLANTADOS',
      icon: <Sprout className="size-6" strokeWidth={1.5} />,
      iconColor: 'text-green-600',
      iconBgColor: 'bg-green-50',
      iconBorderColor: 'border-green-100'
    },
    {
      value: '+800',
      label: 'PROYECTOS EJECUTADOS',
      icon: <CheckSquare className="size-6" strokeWidth={1.5} />,
      iconColor: 'text-[#E94E1B]',
      iconBgColor: 'bg-orange-50',
      iconBorderColor: 'border-orange-100'
    },
    {
      value: '+500',
      label: 'CLIENTES ACOMPAÑADOS',
      icon: <Users className="size-6" strokeWidth={1.5} />,
      iconColor: 'text-[#F26C3F]',
      iconBgColor: 'bg-orange-50',
      iconBorderColor: 'border-orange-100'
    },
    {
      value: '10 AÑOS',
      label: 'DE TRAYECTORIA',
      icon: <Calendar className="size-6" strokeWidth={1.5} />,
      iconColor: 'text-[#C73E0F]',
      iconBgColor: 'bg-orange-50',
      iconBorderColor: 'border-orange-100'
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-12 bg-[#FAFAFA] border-y border-neutral-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] rounded-2xl p-5 md:p-6 border border-neutral-200/50 hover:shadow-md transition-shadow duration-300 opacity-0 animate-fadeInUp"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Icon container */}
              <div className="flex items-center justify-start mb-4">
                <div className={`${stat.iconBgColor} ${stat.iconColor} ${stat.iconBorderColor} border rounded-full p-3`}>
                  {stat.icon}
                </div>
              </div>
              
              {/* Number */}
              <div 
                className="text-3xl md:text-4xl lg:text-[42px] text-[#282327] mb-2 leading-none"
                style={{ 
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 700
                }}
              >
                {stat.value}
              </div>
              
              {/* Label */}
              <div 
                className="text-[10px] md:text-xs text-neutral-600 uppercase tracking-[0.08em] leading-tight"
                style={{ 
                  fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontWeight: 500
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

/**
 * LazySection: Carga componentes below-the-fold solo cuando están cerca del viewport
 * Optimización de Performance para Lighthouse - no afecta diseño visual
 */
export function LazySection({ 
  children, 
  fallback = null, 
  rootMargin = '200px' 
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Desconectar observer después de cargar
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
}

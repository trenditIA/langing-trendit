/**
 * MotionWrapper - Lazy-loaded motion component
 * 
 * Uso: Para componentes below-the-fold que necesitan animaciones
 * Benefit: Motion/React no se carga hasta que sea necesario
 */

import { lazy, Suspense } from 'react';
import type { ComponentProps } from 'react';

const MotionDiv = lazy(() => 
  import('motion/react').then((mod) => ({ 
    default: mod.motion.div 
  }))
);

interface MotionWrapperProps extends ComponentProps<'div'> {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
}

export function MotionWrapper({ 
  children, 
  initial, 
  animate, 
  exit, 
  transition,
  whileInView,
  viewport,
  ...props 
}: MotionWrapperProps) {
  return (
    <Suspense fallback={<div {...props}>{children}</div>}>
      <MotionDiv
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        whileInView={whileInView}
        viewport={viewport}
        {...props}
      >
        {children}
      </MotionDiv>
    </Suspense>
  );
}

/**
 * Uso en componentes below-the-fold:
 * 
 * // Antes:
 * import { motion } from 'motion/react';
 * <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
 *   Content
 * </motion.div>
 * 
 * // Después:
 * import { MotionWrapper } from './MotionWrapper';
 * <MotionWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
 *   Content
 * </MotionWrapper>
 * 
 * Benefit: Motion bundle se carga lazy, no bloquea LCP
 */

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export const easeGallery = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'p' | 'span';
};

/* Entrada suave ao aparecer na tela: sobe, desfoca → foca */
export function Reveal({ children, delay = 0, y = 28, className, as = 'div' }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 1.1, delay, ease: easeGallery }}
    >
      {children}
    </Component>
  );
}

import { motion } from 'framer-motion';
import type { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';

type FadeInProps<T extends ElementType = 'div'> = {
  as?: T;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function FadeIn<T extends ElementType = 'div'>({
  as,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  ...props
}: FadeInProps<T>) {
  const Component = motion.create(as || 'div') as ElementType;
  
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}

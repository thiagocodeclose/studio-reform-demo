'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}

export function Reveal({ children, delay = 0, direction = 'up', className }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const offset = direction === 'none' ? 0 : 28;
  const xOffset =
    direction === 'left' ? -offset : direction === 'right' ? offset : 0;
  const yOffset = direction === 'up' ? offset : 0;

  const variants = {
    hidden: { opacity: 0, x: xOffset, y: yOffset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

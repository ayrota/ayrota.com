import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 36,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.22,
      }}
      transition={{
        duration: 0.9,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

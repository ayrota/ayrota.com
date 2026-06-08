import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

type CounterProps = {
  value: number;
  suffix?: string;
};

export function Counter({ value, suffix = '' }: CounterProps) {
  const count = useMotionValue(0);

  const displayValue = useTransform(count, (latest) =>
    `${Math.floor(latest).toString().padStart(2, '0')}${suffix}`
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 0.6,
    });

    return () => controls.stop();
  }, [count, value]);

  return <motion.span>{displayValue}</motion.span>;
}
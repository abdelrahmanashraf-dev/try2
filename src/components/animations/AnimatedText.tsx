import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split('');

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => (
        <Char key={i} char={char} progress={scrollYProgress} index={i} total={chars.length} />
      ))}
    </p>
  );
}

function Char({ char, progress, index, total }: { char: string, progress: MotionValue<number>, index: number, total: number }) {
  const start = index / total;
  const end = start + (1 / total) * 3;
  
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  
  if (char === ' ') {
    return <span className="inline-block whitespace-pre"> </span>;
  }
  
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

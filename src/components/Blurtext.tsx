import { motion, Transition, Variants } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

type AnimationStep = Record<string, string | number>;
type Keyframes = Record<string, Array<string | number>>;

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimationStep;
  animationTo?: AnimationStep[];
  easing?: number[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
  staggerChildren?: number;
}

const buildKeyframes = (
  from: AnimationStep,
  steps: AnimationStep[]
): Keyframes => {
  const keyframes: Keyframes = {};
  
  // Combine all property keys
  const allKeys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap(step => Object.keys(step))
  ]);

  allKeys.forEach(key => {
    keyframes[key] = [
      from[key] ?? (key.includes('opacity') ? 0 : key.includes('filter') ? 'blur(10px)' : 0),
      ...steps.map(step => step[key])
    ].filter(Boolean);
  });

  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  onAnimationComplete,
  stepDuration = 0.35,
  staggerChildren = 0.1,
}) => {
  const elements = useMemo(() => 
    animateBy === 'words' ? text.split(' ') : text.split(''), 
    [text, animateBy]
  );
  
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Default animations
  const defaultFrom = useMemo(() => {
    const base = { 
      filter: 'blur(10px)', 
      opacity: 0,
      willChange: 'transform, filter, opacity' 
    };

    switch (direction) {
      case 'top': return { ...base, y: -20 };
      case 'bottom': return { ...base, y: 20 };
      case 'left': return { ...base, x: -20 };
      case 'right': return { ...base, x: 20 };
      default: return base;
    }
  }, [direction]);

  const defaultTo = useMemo(() => [
    { filter: 'blur(5px)', opacity: 0.6 },
    { filter: 'blur(0px)', opacity: 1, ...(direction ? { [direction.includes('y') ? 'y' : 'x']: 0 } : {}) }
  ], [direction]);

  // Animation configuration
  const from = animationFrom ?? defaultFrom;
  const to = animationTo ?? defaultTo;
  const keyframes = useMemo(() => buildKeyframes(from, to), [from, to]);

  const transition: Transition = {
    duration: stepDuration,
    staggerChildren: staggerChildren,
  };

  const containerVariants: Variants = {
    hidden: { transition: { staggerChildren: 0 } },
    visible: { 
      transition: { 
        staggerChildren: staggerChildren,
        staggerDirection: 1 
      } 
    }
  };

  const childVariants: Variants = {
    hidden: from,
    visible: (i: number) => ({
      ...Object.fromEntries(
        Object.entries(keyframes).map(([key, values]) => [
          key, 
          values[values.length - 1]
        ])
      ),
      transition: {
        ...transition,
        delay: i * (delay / 1000),
      }
    })
  };

  return (
    <motion.p
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        overflow: 'hidden' 
      }}
    >
      {elements.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          custom={index}
          variants={childVariants}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
          style={{ 
            display: 'inline-block',
            whiteSpace: 'pre' 
          }}
        >
          {segment === ' ' ? '\u00A0' : segment}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default BlurText;
import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from './ui/Button';

export function PageContainer({ className, children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn("flex flex-col px-5 min-h-[calc(100%-24px)]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

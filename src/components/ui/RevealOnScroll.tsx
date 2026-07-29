"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  triggerOnLoad?: boolean; // <-- Nueva prop
}

export default function RevealOnScroll({ 
  children, 
  className = "", 
  delay = 0,
  triggerOnLoad = false 
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={triggerOnLoad ? { opacity: 1, y: 0 } : undefined}
      whileInView={triggerOnLoad ? undefined : { opacity: 1, y: 0 }}
      viewport={triggerOnLoad ? undefined : { once: false, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
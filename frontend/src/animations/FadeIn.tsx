import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
}

function FadeIn({
  children,
  delay = 0,
  y = 20,
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
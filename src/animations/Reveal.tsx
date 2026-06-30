import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
}

const Reveal = ({ children, direction = "up" }: RevealProps) => {
  const variants = {
    up: { x: 0, y: 40 },
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...variants[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

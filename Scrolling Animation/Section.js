import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -75 }}
        animate={isInView && { opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

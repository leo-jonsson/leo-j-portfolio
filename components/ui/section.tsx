"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section ref={ref} className="grid gap-2 p-2 w-full">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;

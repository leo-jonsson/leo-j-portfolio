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
          hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.3,
              ease: "easeOut",
              staggerChildren: 0.2,
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

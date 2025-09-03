"use client";

import React, { ReactNode } from "react";
import { BoxReveal } from "../magicui/box-reveal";

type SectionProps = {
  children: ReactNode;
  index: number;
};

const Section = ({ children, index }: SectionProps) => {
  return (
    <section className="grid gap-2 p-2 w-full">
      <BoxReveal duration={0.5 + index / 10}>{children}</BoxReveal>
    </section>
  );
};

export default Section;

import Section from "@/components/ui/section";
import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <Section>
      <h1 className="text-4xl font-bold text-center">Hi, i&apos;m Leo 👋</h1>
      <p className="text-2xl text-muted-foreground text-center">
        Fullstack developer{" "}
        <Link
          href={"https://www.redmind.se/en/"}
          target="_blank"
          className="text-red-500 hover:underline transition-all"
        >
          @Redmind
        </Link>
      </p>
    </Section>
  );
};

export default Intro;

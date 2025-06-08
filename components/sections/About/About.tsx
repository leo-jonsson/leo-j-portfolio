import MyTimeLine from "@/components/MyTimeline";
import Section from "@/components/ui/section";
import React from "react";

const About = () => {
  return (
    <Section>
      <h2 className="text-2xl font-bold">About</h2>
      <p className="text-foreground/80">
        {" "}
        I am currently finishing my studies at <strong>Noroff</strong> as a
        Frontend Developer. I&apos;m also doing an internship at{" "}
        <strong>Redmind</strong>, where I work as a Full Stack Developer,
        building mobile applications using <strong>React Native</strong>. In my
        freetime I like to hang out with friends and travel the world.
      </p>
      <MyTimeLine />
    </Section>
  );
};

export default About;

import React from "react";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/ui/section";

const skills: string[] = [
  "React Native",
  "Typescript",
  "Firebase",
  "MongoDB",
  "NestJS",
  "React Query",
  "TailwindCSS",
  "Redux",
  "NextJS",
  "Vite",
  "Payload CMS",
  "AWS",
  "Google Cloud Functions",
  "Figma",
  "Git",
];

const Skills: React.FC = () => {
  return (
    <Section index={3}>
      <h2 className="text-2xl font-bold mb-3">I LIKE WORKING WITH</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((s, idx) => (
          <Badge key={idx}>{s}</Badge>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

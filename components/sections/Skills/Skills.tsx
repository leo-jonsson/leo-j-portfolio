import React from "react";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/ui/section";

const skills: string[] = [
  "React Native",
  "Typescript",
  "Firebase",
  "MongoDB",
  "NestJS",
  "Mongoose",
  "React Query",
  "TailwindCSS",
  "NextJS",
];

const Skills: React.FC = () => {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-1">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((s, idx) => (
          <Badge key={idx}>{s}</Badge>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

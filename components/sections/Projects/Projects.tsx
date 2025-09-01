"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Section from "@/components/ui/section";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  tech: string[];
  images: { url: string; alt: string }[];
  links?: { label: string; url: string }[];
  period: string;
  content: string;
};
const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/data/index.json");
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <Section>
      <div className="grid py-10">
        <h2 className="text-2xl font-bold">PROJECTS</h2>
        <h3 className="text-foreground/70 text-base">
          Things I&apos;m proud of. Load more to see things I&apos;m less proud
          of.
        </h3>
      </div>
      <div className="md:grid-cols-2 grid gap-5">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="p-0 overflow-hidden gap-0 bg-background"
          >
            <CardHeader className="p-0">
              <Link href={`/${project.id}`}>
                {project.images[0]?.url && (
                  <Image
                    width={1000}
                    height={100}
                    src={project.images[0].url}
                    alt={project.images[0].alt || project.title}
                    className="w-full object-cover aspect-video"
                  />
                )}
              </Link>
            </CardHeader>
            <CardContent className="space-y-2 p-2">
              <CardTitle>{project.title}</CardTitle>
              <p className="text-sm text-foreground/80">{project.period}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech, idx) => (
                  <Badge key={idx} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.links && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge key={idx} variant="default">
                        {link.label}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

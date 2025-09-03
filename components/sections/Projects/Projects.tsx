"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image } from "@heroui/image";
import Section from "@/components/ui/section";
import Link from "next/link";
import projects from "@/public/data/index.json";
import { Button } from "@/components/ui/button";

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
  const [loadMore, setLoadMore] = React.useState<boolean>(false);

  const projectsToShow = loadMore ? projects : projects.slice(0, 2);

  const handleOnClick = () => {
    setLoadMore(true);
  };

  return (
    <Section>
      <div className="grid py-10">
        <h2 className="text-2xl font-bold">PROJECTS</h2>
        <h3 className="text-foreground/70 text-base md:text-lg">
          Some real world projects and some school assignments.
        </h3>
      </div>
      <div className="md:grid-cols-2 grid gap-5">
        {projectsToShow.map((project: Project) => (
          <Card
            key={project.id}
            className="p-0 overflow-hidden gap-0 bg-background"
          >
            <CardHeader className="p-0">
              <Link href={`/${project.id}`}>
                {project.images[0]?.url && (
                  <Image
                    width={1200}
                    src={project.images[0].url}
                    alt={project.images[0].alt || project.title}
                    className="w-full object-cover aspect-video border-b"
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
                <div className="flex flex-wrap gap-3 mt-3">
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
      <Button
        onClick={handleOnClick}
        variant={"outline"}
        className={`${loadMore ? "hidden" : "flex"} w-full mt-4`}
      >
        Show More
      </Button>
    </Section>
  );
};

export default Projects;

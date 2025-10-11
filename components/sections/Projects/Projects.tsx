"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/ui/section";
import Link from "next/link";
import projects from "@/public/data/index.json";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

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
        <AnimatePresence>
          {projectsToShow.map((project: Project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.2,
                delay: index * 0.07,
              }}
            >
              <Card className="p-0 overflow-hidden gap-0 bg-background">
                <CardHeader className="p-0">
                  <Link href={`/${project.id}`}>
                    {project.images[0]?.url && (
                      <div className="relative w-full h-full aspect-video border-b">
                        <Image
                          width={1200}
                          height={1000}
                          src={project.images[0].url}
                          alt={project.images[0].alt || project.title}
                          loading="lazy"
                          className="absolute size-full inset-0 object-cover z-10"
                        />
                        <Skeleton className="size-full inset-0 z-0 rounded-none" />
                      </div>
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
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Button
          onClick={handleOnClick}
          variant={"outline"}
          className={`${loadMore ? "hidden" : "flex"} w-full mt-4`}
        >
          Show More
        </Button>
      </motion.div>
    </Section>
  );
};

export default Projects;

"use client";

import { useParams } from "next/navigation";
import React from "react";
import projects from "@/public/data/index.json";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectPage = () => {
  const params = useParams();
  const projectId = params.id as string;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="flex items-center justify-center relative pt-10">
      <Section>
        <Link href={"/"}>
          <ArrowLeft className="mb-4" />
        </Link>
        <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
        <h2 className="text-muted-foreground mb-4">{project.period}</h2>
        {project.images && project.images.length > 0 && (
          <div className="mb-4">
            <Carousel className="rounded-sm overflow-hidden">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index} className="aspect-video relative">
                    <Skeleton className="w-full h-full z-0 absolute inset-0" />
                    <Image
                      width={1000}
                      height={500}
                      src={image.url}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover inset-0 absolute z-10"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              )}
            </Carousel>
          </div>
        )}

        <div
          dangerouslySetInnerHTML={{ __html: project.content }}
          className="grid gap-5 text-xl text-foreground/80 mb-4"
        />

        {project.links && project.links.length > 0 && (
          <div className="mb-4">
            <ul className="flex items-center gap-4">
              {project.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge>{link.label}</Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    </div>
  );
};

export default ProjectPage;

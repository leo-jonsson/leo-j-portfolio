"use client";

import { useParams } from "next/navigation";
import React from "react";
import projects from "@/public/data/index.json";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import Section from "@/components/ui/section";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

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
            <div className="flex flex-wrap gap-4">
              {project.images.map((image, index) => (
                <Image
                  width={1000}
                  height={500}
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full rounded-sm object-cover aspect-video"
                />
              ))}
            </div>
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

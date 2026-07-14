"use client";

import { ProjectData } from "@/lib/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ProjectCardProps {
    project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!project.images || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) =>
                project.images ? (prev + 1) % project.images.length : 0
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [project.images]);

    return (
        <div className={`group relative ${project.featured ? "glass" : "enigma-card"} rounded-2xl overflow-hidden hover:border-[#2f6bff]/40 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1`}>
            <div className="relative z-10 p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-extrabold text-[#f4f5f7] mb-2 leading-tight group-hover:text-white transition-colors">
                            {project.title}
                        </h3>
                        <span className="enigma-badge eyebrow inline-block px-3 py-1 text-[10px] rounded-full mb-3">
                            {project.type}
                        </span>
                    </div>
                    <div className="flex space-x-3 text-[#8b8d93] shrink-0 ml-4">
                        {project.repoUrl && project.repoUrl !== "#" && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="enigma-tile p-2 rounded-full hover:text-[#2f6bff] transition-colors"
                                aria-label="GitHub Repository"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.websiteUrl && project.websiteUrl !== "#" && (
                            <a
                                href={project.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="enigma-tile p-2 rounded-full hover:text-[#2f6bff] transition-colors"
                                aria-label="Live Demo"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                {project.images && project.images.length > 0 && (
                    <div className="mb-6 relative w-full h-52 sm:h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/20 group/slider">
                        {project.images.map((img, i) => (
                            <Image
                                key={i}
                                src={img}
                                alt={`${project.title} screenshot ${i + 1}`}
                                fill
                                className={`object-cover transition-opacity duration-1000 ${i === currentImageIndex ? "opacity-100" : "opacity-0"
                                    } hover:scale-105 transition-transform`}
                            />
                        ))}

                        {/* Dot Navigation Indicators */}
                        {project.images.length > 1 && (
                            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                                {project.images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImageIndex(i)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex
                                                ? "bg-[#2f6bff] w-6 opacity-100 shadow-[0_0_8px_rgba(47,107,255,0.8)]"
                                                : "bg-white/40 w-1.5 opacity-50 hover:bg-white/80 hover:opacity-100"
                                            }`}
                                        aria-label={`Go to image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <p className="text-base text-[#a9abb1] font-medium mb-4">
                    {project.description}
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                    {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-sm text-[#8b8d93]">
                            <span className="text-[#2f6bff] mr-2 mt-1">•</span>
                            <span className="leading-relaxed">{bullet}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="enigma-chip px-3 py-1 text-xs font-medium rounded-lg"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

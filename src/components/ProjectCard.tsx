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
        <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(8,-145,178,0.2)] transition-all duration-300 border border-white/10 hover:border-cyan-500/50 flex flex-col h-full transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" />

            <div className="relative z-10 p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-extrabold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
                            {project.title}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-bold rounded-full mb-3 shadow-sm">
                            {project.type}
                        </span>
                    </div>
                    <div className="flex space-x-3 text-slate-400 shrink-0 ml-4">
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors border border-transparent hover:border-cyan-500/30"
                                aria-label="GitHub Repository"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.websiteUrl && (
                            <a
                                href={project.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors border border-transparent hover:border-cyan-500/30"
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
                                                ? "bg-cyan-400 w-6 opacity-100 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                                : "bg-white/40 w-1.5 opacity-50 hover:bg-white/80 hover:opacity-100"
                                            }`}
                                        aria-label={`Go to image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                <p className="text-base text-slate-400 font-medium mb-4">
                    {project.description}
                </p>

                <ul className="space-y-2 mb-6 flex-grow">
                    {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-400">
                            <span className="text-cyan-500 mr-2 mt-1">•</span>
                            <span className="leading-relaxed">{bullet}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold rounded-lg shadow-sm group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

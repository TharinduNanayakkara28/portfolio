import { content } from "@/lib/content";
import Section from "../Section";
import { BookOpen, Github } from "lucide-react";

export default function Research() {
    const { research } = content;

    return (
        <Section
            id="research"
            title="Research"
            subtitle="Current academic exploration and contributions."
            lightBg
        >
            <div className="max-w-4xl mx-auto">
                <div className="enigma-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_70%)] -z-10 group-hover:scale-110 transition-transform duration-500" />

                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <BookOpen className="text-[#8b8d93]" size={24} />
                                <h3 className="text-2xl font-bold text-[#f4f5f7] leading-tight">
                                    {research.title}
                                </h3>
                            </div>
                            <span className="enigma-badge eyebrow inline-block px-3 py-1 text-[10px] rounded-full">
                                {research.status}
                            </span>
                        </div>

                        {research.repoUrl && research.repoUrl !== "#" && (
                            <a
                                href={research.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost inline-flex items-center text-sm font-medium shrink-0 px-4 py-2 rounded-full"
                            >
                                <Github className="mr-2" size={18} />
                                View Repository
                            </a>
                        )}
                    </div>

                    <ul className="space-y-4 mb-8">
                        {research.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start text-[#c9cbd0]">
                                <span className="mr-3 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#2f6bff] shadow-[0_0_8px_rgba(47,107,255,0.6)]" />
                                <span className="leading-relaxed text-lg">{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-6 border-t border-white/10">
                        <h4 className="eyebrow text-xs text-[#8b8d93] mb-4">
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {research.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="enigma-chip px-3 py-1.5 text-sm font-medium rounded-lg"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

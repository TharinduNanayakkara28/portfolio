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
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden group">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/20 via-blue-500/10 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-rose-500/20 to-transparent rounded-tr-full -z-10 group-hover:scale-110 transition-transform duration-500" />

                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <BookOpen className="text-cyan-400" size={24} />
                                <h3 className="text-2xl font-bold text-white leading-tight">
                                    {research.title}
                                </h3>
                            </div>
                            <span className="inline-block px-3 py-1 bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                                {research.status}
                            </span>
                        </div>

                        {research.repoUrl && (
                            <a
                                href={research.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors shrink-0 bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:border-cyan-500/50 shadow-sm"
                            >
                                <Github className="mr-2" size={18} />
                                View Repository
                            </a>
                        )}
                    </div>

                    <ul className="space-y-4 mb-8">
                        {research.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start text-slate-300">
                                <span className="text-cyan-400 mr-3 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                                <span className="leading-relaxed text-lg">{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-6 border-t border-white/10">
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {research.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-white/10 text-slate-300 text-sm font-semibold rounded-lg border border-white/10 shadow-sm hover:border-cyan-500/50 transition-colors"
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

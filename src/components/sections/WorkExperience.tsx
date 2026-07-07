import { content } from "@/lib/content";
import Section from "../Section";
import { Building2 } from "lucide-react";

export default function WorkExperience() {
    return (
        <Section id="work-experience" title="Work Experience">
            <div className="max-w-4xl mx-auto space-y-8">
                {content.workExperience.map((exp, index) => (
                    <div
                        key={index}
                        className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/40 border-l-4 border-l-cyan-500 transition-all transform hover:-translate-y-1"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-lg shrink-0">
                                    <Building2 size={22} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    {exp.company && (
                                        <p className="text-sm font-semibold text-cyan-400/90">{exp.company}</p>
                                    )}
                                </div>
                            </div>
                            <span className="inline-flex py-1 px-3 bg-cyan-950/50 text-cyan-400 border border-cyan-800/50 text-sm font-semibold rounded-full shrink-0 whitespace-nowrap">
                                {exp.duration}
                            </span>
                        </div>

                        <p className="text-slate-400 leading-relaxed">{exp.description}</p>

                        {exp.bullets && exp.bullets.length > 0 && (
                            <ul className="mt-4 space-y-3">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/70" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {exp.techStack && exp.techStack.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {exp.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex py-1 px-2.5 bg-white/5 text-slate-300 border border-white/10 text-xs font-medium rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

import Image from "next/image";
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
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-5 gap-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-lg shrink-0">
                                    <Building2 size={22} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-cyan-400 leading-snug">
                                        {exp.role}
                                    </h3>
                                    {exp.company && (
                                        <p className="text-sm font-semibold text-slate-300">{exp.company}</p>
                                    )}
                                </div>
                            </div>
                            <span className="inline-flex py-1 px-3 bg-cyan-950/50 text-cyan-400 border border-cyan-800/50 text-sm font-semibold rounded-full shrink-0 whitespace-nowrap">
                                {exp.duration}
                            </span>
                        </div>

                        <ol className="space-y-4">
                            {exp.items.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="flex items-center justify-center h-6 w-6 shrink-0 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold">
                                        {i + 1}
                                    </span>
                                    <div className="text-slate-400 leading-relaxed">
                                        <span className="font-bold text-slate-200">{item.title} </span>
                                        {item.description}

                                        {item.bullets && item.bullets.length > 0 && (
                                            <ul className="mt-2 space-y-2">
                                                {item.bullets.map((bullet, j) => (
                                                    <li key={j} className="flex gap-2">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/70" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ol>

                        {exp.techStack && exp.techStack.length > 0 && (
                            <div className="mt-6 flex flex-wrap items-center gap-2">
                                <span className="text-sm font-bold text-slate-300 mr-1">Technologies:</span>
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

                        {exp.providerLogos && exp.providerLogos.length > 0 && (
                            <div className="mt-6 pt-5 border-t border-white/10">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                                    LLM Providers Integrated
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                                    {exp.providerLogos.map((logo, i) => (
                                        <div
                                            key={i}
                                            title={logo.name}
                                            className="relative h-36 w-full flex items-center justify-center bg-white rounded-2xl p-4 shadow-md ring-1 ring-black/5 hover:scale-105 transition-transform"
                                        >
                                            <Image
                                                src={logo.src}
                                                alt={logo.name}
                                                fill
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

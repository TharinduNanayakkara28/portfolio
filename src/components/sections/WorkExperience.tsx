import Image from "next/image";
import { content } from "@/lib/content";
import Section from "../Section";
import { Building2 } from "lucide-react";

export default function WorkExperience() {
    return (
        <Section id="work-experience" title="Work Experience">
            <div className="aurora-field">
                <div className="aurora aurora-blue animate-drift-a w-[460px] h-[460px] top-[10%] left-[8%]" />
                <div className="aurora aurora-violet animate-drift-b w-[360px] h-[360px] bottom-[6%] right-[8%]" />
            </div>
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                {content.workExperience.map((exp, index) => (
                    <div
                        key={index}
                        className="group glass p-6 md:p-8 rounded-2xl border-l-2 border-l-[#2f6bff] hover:-translate-y-1 transition-all transform"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-5 gap-3">
                            <div className="flex items-start gap-3">
                                <div className="enigma-tile p-2.5 text-[#2f6bff] rounded-lg shrink-0">
                                    <Building2 size={22} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#f4f5f7] leading-snug">
                                        {exp.role}
                                    </h3>
                                    {exp.company && (
                                        <p className="eyebrow text-xs text-[#8b8d93] mt-1">{exp.company}</p>
                                    )}
                                </div>
                            </div>
                            <span className="enigma-badge inline-flex py-1.5 px-3 text-sm font-medium rounded-full shrink-0 whitespace-nowrap">
                                {exp.duration}
                            </span>
                        </div>

                        <ol className="space-y-4">
                            {exp.items.map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="enigma-tile flex items-center justify-center h-6 w-6 shrink-0 rounded-full text-[#f4f5f7] text-xs font-bold">
                                        {i + 1}
                                    </span>
                                    <div className="text-[#a9abb1] leading-relaxed">
                                        <span className="font-bold text-[#f4f5f7]">{item.title} </span>
                                        {item.description}

                                        {item.bullets && item.bullets.length > 0 && (
                                            <ul className="mt-2 space-y-2">
                                                {item.bullets.map((bullet, j) => (
                                                    <li key={j} className="flex gap-2">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f6bff]/80" />
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
                                <span className="eyebrow text-xs text-[#8b8d93] mr-1">Technologies:</span>
                                {exp.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="enigma-chip inline-flex py-1 px-2.5 text-xs font-medium rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        {exp.providerLogos && exp.providerLogos.length > 0 && (
                            <div className="mt-6 pt-5 border-t border-white/10">
                                <p className="eyebrow text-[10px] text-[#8b8d93] mb-3">
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

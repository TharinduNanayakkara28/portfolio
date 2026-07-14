import { content } from "@/lib/content";
import Section from "../Section";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
    return (
        <Section id="experience" title="Experience & Education">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                {/* Experience Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="enigma-tile p-3 text-[#2f6bff] rounded-lg">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="font-display text-xl font-medium uppercase tracking-[0.12em] text-[#f4f5f7]">Work &amp; Leadership</h3>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-white/15 before:via-white/10 before:to-transparent">
                        {content.experience.map((exp, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0c] enigma-tile shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute left-0 md:left-1/2 -ml-5 md:-ml-0 group-hover:scale-110 transition-transform">
                                    <span className="w-2 h-2 bg-[#2f6bff] rounded-full shadow-[0_0_8px_rgba(47,107,255,0.8)]"></span>
                                </div>

                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] enigma-card p-6 rounded-2xl hover:border-[#2f6bff]/40 transition-all ml-12 md:ml-0 group-hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                                        <h4 className="text-lg font-bold text-[#f4f5f7] group-hover:text-white transition-colors">{exp.role}</h4>
                                        <span className="enigma-badge inline-flex py-1 px-3 text-sm font-medium rounded-full shrink-0">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p className="text-[#8b8d93]">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8 mt-12 lg:mt-0">
                        <div className="enigma-tile p-3 text-[#2f6bff] rounded-lg">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="font-display text-xl font-medium uppercase tracking-[0.12em] text-[#f4f5f7]">Education</h3>
                    </div>

                    <div className="space-y-6">
                        {content.education.map((edu, index) => (
                            <div key={index} className="group enigma-card p-6 rounded-2xl border-l-2 border-l-[#2f6bff] hover:border-[#2f6bff]/40 transition-all transform hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                                    <h4 className="text-lg font-bold text-[#f4f5f7] group-hover:text-white transition-colors">{edu.institution}</h4>
                                    <span className="enigma-badge inline-flex py-1 px-3 text-sm font-medium rounded-full shrink-0">
                                        {edu.duration}
                                    </span>
                                </div>
                                <p className="text-md font-bold text-[#c9cbd0] mb-2">{edu.degree}</p>
                                <p className="text-[#8b8d93]">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}

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
                        <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-lg">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Work & Leadership</h3>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/20 before:via-blue-500/20 before:to-transparent">
                        {content.experience.map((exp, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030014] bg-cyan-600 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute left-0 md:left-1/2 -ml-5 md:-ml-0 group-hover:scale-110 transition-transform">
                                    <span className="w-2 h-2 bg-white/80 backdrop-blur-sm rounded-full"></span>
                                </div>

                                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/40 transition-all ml-12 md:ml-0 group-hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                                        <h4 className="text-lg font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{exp.role}</h4>
                                        <span className="inline-flex py-1 px-3 bg-cyan-950/50 text-cyan-400 border border-cyan-800/50 text-sm font-semibold rounded-full shrink-0">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p className="text-slate-400">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8 mt-12 lg:mt-0">
                        <div className="p-3 bg-rose-500/20 text-rose-400 rounded-lg">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Education</h3>
                    </div>

                    <div className="space-y-6">
                        {content.education.map((edu, index) => (
                            <div key={index} className="group bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-rose-500/20 hover:border-rose-500/40 border-l-4 border-l-cyan-500 hover:border-l-rose-500 transition-all transform hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                                    <h4 className="text-lg font-bold text-slate-200 group-hover:text-rose-400 transition-colors">{edu.institution}</h4>
                                    <span className="inline-flex py-1 px-3 bg-rose-950/50 text-rose-400 border border-rose-800/50 text-sm font-semibold rounded-full shrink-0">
                                        {edu.duration}
                                    </span>
                                </div>
                                <p className="text-md font-bold text-slate-300 mb-2">{edu.degree}</p>
                                <p className="text-slate-400">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}

import { content } from "@/lib/content";
import Section from "../Section";

export default function Skills() {
    return (
        <Section
            id="skills"
            title="Technical Skills"
            subtitle="The tools and technologies I use to build systems."
            lightBg
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.skills.map((category, index) => (
                    <div
                        key={index}
                        className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/10 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-white/10 border border-white/10 text-slate-300 text-sm font-semibold rounded-lg shadow-sm group-hover:border-cyan-500/50 group-hover:text-cyan-300 group-hover:bg-cyan-950/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

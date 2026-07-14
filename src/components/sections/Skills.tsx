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
                        className="group enigma-card rounded-2xl p-6 hover:border-[#2f6bff]/40 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <h3 className="eyebrow text-xs text-[#8b8d93] mb-4 pb-3 border-b border-white/10 group-hover:text-white transition-colors">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="enigma-chip px-3 py-1.5 text-sm font-medium rounded-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

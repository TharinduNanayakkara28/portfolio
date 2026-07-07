import { content } from "@/lib/content";
import Section from "../Section";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <Section
            id="about"
            title="About Me"
            subtitle="My background and what drives me."
            containerClassName="relative"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                        {content.personal.aboutParagraph}
                    </p>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-rose-400 mb-6">
                            Key Highlights
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {content.personal.aboutHighlights.map((highlight, index) => (
                                <div key={index} className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <CheckCircle2 className="text-cyan-400 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-slate-300 font-medium">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

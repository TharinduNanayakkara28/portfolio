import { content } from "@/lib/content";
import Section from "../Section";
import { Award } from "lucide-react";

export default function Certificates() {
    return (
        <Section
            id="certificates"
            title="Certificates"
            subtitle="Professional development and continuous learning."
            lightBg
        >
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="flex items-start bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(8,-145,178,0.15)] hover:border-cyan-500/50 transition-all duration-300 group transform hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />
                            <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl mr-5 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 relative z-10">
                                <Award size={20} />
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-bold text-white leading-snug mb-1 group-hover:text-cyan-400 transition-colors">
                                    {cert.title}
                                </h4>
                                <p className="text-sm font-semibold text-slate-400">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

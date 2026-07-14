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
                            className="flex items-start enigma-card p-6 rounded-2xl hover:border-[#2f6bff]/40 transition-all duration-300 group transform hover:-translate-y-1"
                        >
                            <div className="enigma-tile p-3 text-[#2f6bff] rounded-xl mr-5 shrink-0">
                                <Award size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#f4f5f7] leading-snug mb-1 group-hover:text-white transition-colors">
                                    {cert.title}
                                </h4>
                                <p className="text-sm font-medium text-[#8b8d93]">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

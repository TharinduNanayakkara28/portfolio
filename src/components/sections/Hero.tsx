import { content } from "@/lib/content";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Handwrite from "../Handwrite";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-10 flex justify-center animate-fade-in-up">
                        <div className="glass rounded-full p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]">
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
                                <Image
                                    src="/assets/profile.jpg"
                                    alt={content.personal.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <p className="eyebrow inline-block mb-8 text-xs md:text-sm text-[#2f6bff] animate-fade-in-up animation-delay-100">
                        {content.personal.headline}
                    </p>
                    <h1 className="font-script text-6xl md:text-8xl font-normal leading-[1.25] pb-4 mb-6">
                        <Handwrite text={content.personal.name} className="metal" />
                    </h1>
                    <p className="text-lg md:text-xl text-[#8b8d93] mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                        {content.personal.valueProp}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14 animate-fade-in-up animation-delay-500">
                        <a
                            href="#projects"
                            className="btn-accent eyebrow inline-flex items-center justify-center px-8 py-4 text-xs rounded-xl w-full sm:w-auto"
                        >
                            View Projects
                            <ArrowRight className="ml-2" size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="glass eyebrow inline-flex items-center justify-center px-8 py-4 text-xs rounded-xl w-full sm:w-auto text-[#f4f5f7] hover:-translate-y-0.5 transition-transform"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center space-x-5 animate-fade-in-up animation-delay-500">
                        <a
                            href={content.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="enigma-tile text-[#8b8d93] hover:text-white transition-colors p-3 rounded-xl"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href={content.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="enigma-tile text-[#8b8d93] hover:text-white transition-colors p-3 rounded-xl"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href={`mailto:${content.personal.email}`}
                            className="enigma-tile text-[#8b8d93] hover:text-white transition-colors p-3 rounded-xl"
                            aria-label="Email"
                        >
                            <Mail size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

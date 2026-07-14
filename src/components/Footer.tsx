import { Github, Linkedin, Mail } from "lucide-react";
import { content } from "@/lib/content";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#08080a] border-t border-white/10 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#2f6bff]/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-display metal text-2xl font-medium uppercase tracking-[0.1em] mb-2">
                            {content.personal.name}
                        </h3>
                        <p className="text-[#8b8d93] max-w-sm">
                            Building scalable full-stack, IoT, and cloud-native systems.
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        <a
                            href={content.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="enigma-tile text-[#8b8d93] hover:text-white rounded-xl transition-all p-3"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={content.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="enigma-tile text-[#8b8d93] hover:text-white rounded-xl transition-all p-3"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={`mailto:${content.personal.email}`}
                            className="enigma-tile text-[#8b8d93] hover:text-white rounded-xl transition-all p-3"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#5c5e65]">
                    <p>© {currentYear} {content.personal.name}. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}

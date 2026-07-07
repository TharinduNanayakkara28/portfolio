import { Github, Linkedin, Mail } from "lucide-react";
import { content } from "@/lib/content";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
            <div className="absolute -bottom-[50%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-900/30 blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-2 tracking-tight">
                            {content.personal.name}
                        </h3>
                        <p className="text-slate-400 max-w-sm">
                            Building scalable full-stack, IoT, and cloud-native systems.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href={content.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-full transition-all p-3"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={content.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-full transition-all p-3"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={`mailto:${content.personal.email}`}
                            className="text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-full transition-all p-3"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {currentYear} {content.personal.name}. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}

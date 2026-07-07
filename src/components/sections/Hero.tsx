import { content } from "@/lib/content";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Dark Theme Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a]/0 via-[#020617]/0 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-8 flex justify-center animate-fade-in-up">
                        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_30px_rgba(8,-145,178,0.3)]">
                            <Image
                                src="/assets/profile.jpg"
                                alt={content.personal.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <p className="inline-block px-4 py-1.5 mb-6 text-sm md:text-base font-bold text-cyan-400 bg-cyan-950/50 backdrop-blur-md rounded-full tracking-wider uppercase animate-fade-in-up animation-delay-100 border border-cyan-800/50">
                        👋 Welcome to my portfolio
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up animation-delay-200 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 drop-shadow-sm">
                        {content.personal.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-8 animate-fade-in-up animation-delay-300">
                        {content.personal.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                        {content.personal.valueProp}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-fade-in-up animation-delay-500">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(8,-145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,-145,178,0.6)] hover:-translate-y-1 w-full sm:w-auto"
                        >
                            View Projects
                            <ArrowRight className="ml-2" size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all hover:-translate-y-1 w-full sm:w-auto"
                        >
                            Contact Me
                        </a>
                        {/* Optional Download CV button - uncomment and add to content.ts if a CV file exists */}
                        {/* <a
              href={content.personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-blue-700 bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors w-full sm:w-auto"
            >
              Download CV
            </a> */}
                    </div>

                    <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-500">
                        <a
                            href={content.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors bg-white/5 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:border-white/20 shadow-lg"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href={content.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-colors bg-white/5 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:border-white/20 shadow-lg"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href={`mailto:${content.personal.email}`}
                            className="text-slate-400 hover:text-rose-400 transition-colors bg-white/5 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:border-white/20 shadow-lg"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

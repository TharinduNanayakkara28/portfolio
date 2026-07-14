import { content } from "@/lib/content";
import Section from "../Section";
import ProjectCard from "../ProjectCard";

export default function Projects() {
    const featuredProjects = content.projects.filter((p) => p.featured);
    const otherProjects = content.projects.filter((p) => !p.featured);

    return (
        <Section
            id="projects"
            title="Projects"
            subtitle="A selection of my recent work in full-stack dev, IoT, and ML."
        >
            <div className="mb-16 relative">
                <h3 className="eyebrow text-sm text-[#8b8d93] mb-8 flex items-center relative z-10">
                    <span className="w-8 h-px bg-white/20 mr-4"></span>
                    Featured Projects
                    <span className="flex-grow h-px bg-white/10 ml-4"></span>
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="eyebrow text-sm text-[#8b8d93] mb-8 flex items-center">
                    <span className="w-8 h-px bg-white/20 mr-4"></span>
                    More Projects
                    <span className="flex-grow h-px bg-white/10 ml-4"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {otherProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </Section>
    );
}

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

interface SectionProps {
    id: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    lightBg?: boolean;
}

export default function Section({
    id,
    title,
    subtitle,
    children,
    className,
    containerClassName,
    lightBg = false,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-28 relative z-10",
                className
            )}
        >
            <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {title && (
                            <h2 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-[0.14em] mb-5">
                                <SplitText text={title} letterClassName="metal" stagger={0.04} delay={0.05} />
                            </h2>
                        )}
                        <Reveal delay={0.15}>
                            {subtitle && (
                                <p className="text-lg text-[#8b8d93] max-w-2xl mx-auto">
                                    {subtitle}
                                </p>
                            )}
                            {title && <div className="w-14 h-px bg-gradient-to-r from-transparent via-[#2f6bff] to-transparent mx-auto mt-7" />}
                        </Reveal>
                    </div>
                )}
                <Reveal delay={0.08}>{children}</Reveal>
            </div>
        </section>
    );
}

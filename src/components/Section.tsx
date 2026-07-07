import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 drop-shadow-sm">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                        {title && <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-rose-500 mx-auto mt-6 rounded-full" />}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}

"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

interface SplitTextProps {
    text: string;
    /** class applied to every individual letter (e.g. "metal") */
    letterClassName?: string;
    /** class applied to the inline wrapper */
    className?: string;
    stagger?: number;
    delay?: number;
    /** "mount" plays on load, "view" plays when scrolled into view */
    trigger?: "mount" | "view";
}

const container: Variants = {
    hidden: {},
    show: (custom: { stagger: number; delay: number }) => ({
        transition: { staggerChildren: custom.stagger, delayChildren: custom.delay },
    }),
};

const letter: Variants = {
    hidden: { opacity: 0, y: "45%", filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function SplitText({
    text,
    letterClassName = "",
    className = "",
    stagger = 0.045,
    delay = 0.15,
    trigger = "view",
}: SplitTextProps) {
    const reduce = useReducedMotion();
    const words = text.split(" ");

    if (reduce) {
        return <span className={`${className} ${letterClassName}`}>{text}</span>;
    }

    const triggerProps =
        trigger === "mount"
            ? { animate: "show" as const }
            : { whileInView: "show" as const, viewport: { once: false, margin: "-60px" } };

    return (
        <motion.span
            aria-label={text}
            role="text"
            className={`inline-block ${className}`}
            variants={container}
            custom={{ stagger, delay }}
            initial="hidden"
            {...triggerProps}
        >
            {words.map((word, wi) => (
                <span key={wi} aria-hidden="true" className="inline-block whitespace-nowrap">
                    {Array.from(word).map((char, ci) => (
                        <motion.span key={ci} variants={letter} className={`inline-block ${letterClassName}`}>
                            {char}
                        </motion.span>
                    ))}
                    {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
            ))}
        </motion.span>
    );
}

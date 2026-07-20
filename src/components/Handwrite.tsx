"use client";

import { motion, useReducedMotion } from "framer-motion";

interface HandwriteProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
}

export default function Handwrite({ text, className = "", delay = 0.4, duration = 2.4 }: HandwriteProps) {
    const reduce = useReducedMotion();

    if (reduce) {
        return <span className={className}>{text}</span>;
    }

    return (
        <motion.span
            className={`inline-block ${className}`}
            initial={{ clipPath: "inset(0 100% -0.2em 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0% -0.2em 0)", opacity: 1 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{
                clipPath: { duration, ease: [0.22, 1, 0.36, 1], delay },
                opacity: { duration: 0.3, delay },
            }}
        >
            {text}
        </motion.span>
    );
}

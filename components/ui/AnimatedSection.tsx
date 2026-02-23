"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
    stagger?: boolean;
}

export function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
    stagger = false,
}: AnimatedSectionProps) {
    const directionVariants = {
        up: { y: 40, x: 0 },
        left: { x: -40, y: 0 },
        right: { x: 40, y: 0 },
        none: { x: 0, y: 0 },
    };

    if (stagger) {
        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directionVariants[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Export motion item wrapper for stagger children
export function AnimatedItem({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}

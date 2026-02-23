"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "framer-motion";

export function CounterStat({
    endValue,
    label,
    suffix = "",
    icon,
}: {
    endValue: number;
    label: string;
    suffix?: string;
    icon?: React.ReactNode;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const hasAnimated = useRef(false);

    const easeOutQuad = useCallback((t: number) => t * (2 - t), []);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;
        hasAnimated.current = true;

        const duration = 2000;
        let startTime: number | null = null;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuad(progress);

            setCount(Math.floor(easedProgress * endValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(animate);
    }, [endValue, isInView, easeOutQuad]);

    return (
        <div ref={ref} className="glass-card p-8 text-center relative group">
            {icon && (
                <div className="absolute top-4 right-4 text-blue-400/30 group-hover:text-blue-400/50 transition-colors">
                    {icon}
                </div>
            )}
            <div className="text-5xl md:text-6xl font-black text-gradient mb-3 tabular-nums">
                {count.toLocaleString()}
                {suffix}
            </div>
            <p className="text-gray-400 font-medium text-base">{label}</p>
        </div>
    );
}

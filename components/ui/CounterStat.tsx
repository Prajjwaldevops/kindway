"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function CounterStat({
    endValue,
    label,
    suffix = "",
}: {
    endValue: number;
    label: string;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            // Calculate steps
            const timer = setInterval(() => {
                start += Math.ceil(endValue / (duration / 50));
                if (start >= endValue) {
                    setCount(endValue);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 50);
            return () => clearInterval(timer);
        }
    }, [endValue, isInView]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2 drop-shadow-sm">
                {count}
                {suffix}
            </div>
            <p className="text-gray-700 font-medium text-lg">{label}</p>
        </div>
    );
}

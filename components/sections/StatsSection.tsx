"use client";
import React from "react";
import { CounterStat } from "@/components/ui/CounterStat";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GraduationCap, Users, HeartPulse } from "lucide-react";

export function StatsSection() {
    return (
        <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
            {/* Background orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">
                        Our Impact
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Numbers That Speak
                    </h2>
                    <p className="text-gray-400 text-lg">
                        A decade of commitment to dental excellence, training, and community health.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <CounterStat
                            endValue={1500}
                            suffix="+"
                            label="Workshops & Trainings"
                            icon={<GraduationCap size={32} />}
                        />
                        <CounterStat
                            endValue={1160}
                            suffix="+"
                            label="Dentists Trained"
                            icon={<Users size={32} />}
                        />
                        <CounterStat
                            endValue={1145}
                            suffix="+"
                            label="Medical Camps"
                            icon={<HeartPulse size={32} />}
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

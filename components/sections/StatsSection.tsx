import React from "react";
import { CounterStat } from "@/components/ui/CounterStat";

export function StatsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto glass-panel rounded-3xl p-10 md:p-16">
                    <CounterStat endValue={1500} suffix="+" label="Workshops/Trainings" />
                    <CounterStat endValue={1160} suffix="+" label="Students Enrolled" />
                    <CounterStat endValue={1145} suffix="+" label="Medical Camps" />
                </div>
            </div>
        </section>
    );
}

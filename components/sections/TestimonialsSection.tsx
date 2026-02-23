"use client";
import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// Duplicate testimonials for infinite scroll
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

// Gradient colors for avatars
const avatarGradients = [
    "from-blue-500 to-cyan-400",
    "from-emerald-500 to-teal-400",
    "from-amber-500 to-orange-400",
    "from-purple-500 to-pink-400",
];

function TestimonialCard({
    testimonial,
    index,
}: {
    testimonial: (typeof testimonials)[0];
    index: number;
}) {
    const gradientClass =
        avatarGradients[index % avatarGradients.length];

    return (
        <div className="glass-card p-6 min-w-[320px] max-w-[380px] flex-shrink-0 mx-3 group">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className="text-amber-500 fill-amber-500"
                    />
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 className="text-white font-semibold text-sm">
                        {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                        {testimonial.designation}, {testimonial.location}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                {/* Section Header */}
                <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 px-4">
                    <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Trusted by Leading Clinicians
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Hear from dental professionals who have elevated their practice with
                        our products and training programs.
                    </p>
                </AnimatedSection>

                {/* Marquee Row 1 — left */}
                <div className="relative mb-6 overflow-hidden">
                    <div className="flex animate-marquee hover:[animation-play-state:paused]">
                        {allTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={`row1-${index}`}
                                testimonial={testimonial}
                                index={index}
                            />
                        ))}
                    </div>
                    {/* Edge fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
                </div>

                {/* Marquee Row 2 — right (reverse) */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
                        {[...allTestimonials].reverse().map((testimonial, index) => (
                            <TestimonialCard
                                key={`row2-${index}`}
                                testimonial={testimonial}
                                index={index + 2}
                            />
                        ))}
                    </div>
                    {/* Edge fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}

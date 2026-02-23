"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30, align: "center" });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 6000);
        return () => {
            clearInterval(autoplay);
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <section className="py-24 bg-muted relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                        Trusted by Leading Clinicians
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Hear from dental professionals who have elevated their practice with our products and training programs.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="relative max-w-4xl mx-auto group">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-4">
                                        <div className="bg-card border border-card-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-lg">
                                            {/* Quote Icon */}
                                            <Quote size={48} className="text-primary/10 mx-auto mb-6" />

                                            {/* Stars */}
                                            <div className="flex justify-center gap-1 mb-6">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <Star key={i} size={20} className="text-accent fill-accent" />
                                                ))}
                                            </div>

                                            <blockquote className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto italic">
                                                &ldquo;{testimonial.quote}&rdquo;
                                            </blockquote>

                                            <div>
                                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <h4 className="text-lg font-bold text-foreground">{testimonial.name}</h4>
                                                <p className="text-muted-foreground text-sm">{testimonial.designation}, {testimonial.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-card border border-card-border hover:bg-primary hover:text-white hover:border-primary rounded-full flex items-center justify-center text-foreground transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
                            onClick={scrollPrev}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-card border border-card-border hover:bg-primary hover:text-white hover:border-primary rounded-full flex items-center justify-center text-foreground transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
                            onClick={scrollNext}
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                                        ? "w-8 bg-primary"
                                        : "w-2 bg-primary/20 hover:bg-primary/40"
                                        }`}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const slides = [
    {
        title: "Elevating Dental Excellence",
        description: "At Kindway Biorezens, we are dedicated to the advancement of dental healthcare. We take pride in our mission to empower dental professionals with innovative solutions, cutting-edge products, and unwavering support.",
        image: "/images/bg2.jpg",
        cta1: { text: "Discover Now", href: "/products" },
        cta2: { text: "Read More", href: "/about" },
    },
    {
        title: "Why Choose Kindway",
        description: "We’re not just a company but committed to advancing dental care through innovation, quality, and precision.",
        image: "/images/bg3.jpg",
        cta1: { text: "View Products", href: "/products" },
        cta2: { text: "Read More", href: "/about" },
    },
    {
        title: "Pioneering Products",
        description: "We offer a curated selection of dental products and medical devices that are at the forefront of dental technology.",
        image: "/images/b3.jpg",
        cta1: { text: "View Product Catalogue", href: "/products" },
        cta2: { text: "Read More", href: "/about" },
    },
    {
        title: "Training and Education",
        description: "At Kindway Biorezens, we believe in continuous learning. We offer training, workshops, and educational resources to empower dental professionals with the latest techniques and best practices.",
        image: "/images/training.jpg",
        cta1: { text: "Book Training", href: "/training" },
        cta2: { text: "Read More", href: "/about" },
    },
];

export function HeroSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 5000);
        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <div className="relative overflow-hidden w-full h-[85vh] min-h-[600px] group" ref={emblaRef}>
            <div className="flex h-full w-full">
                {slides.map((slide, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-start p-6 container mx-auto md:px-12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="max-w-2xl space-y-6 bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl"
                            >
                                <h1 className="text-4xl md:text-6xl font-display font-bold text-white drop-shadow-md leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-xl text-blue-50 max-w-2xl drop-shadow">
                                    {slide.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link href={slide.cta1.href}>
                                        <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                                            {slide.cta1.text}
                                        </Button>
                                    </Link>
                                    <Link href={slide.cta2.href}>
                                        <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                                            {slide.cta2.text}
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                onClick={scrollPrev}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                onClick={scrollNext}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}

"use client";

import Image from "next/image";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useState } from "react";

const galleryImages = [
    { src: "/images/bg1.jpg", alt: "Training Session Overview", category: "Workshop" },
    { src: "/images/bg2.jpg", alt: "Advanced Dental Implant Course", category: "Workshop" },
    { src: "/images/bg3.jpg", alt: "Tissue Augmentation Masterclass", category: "Workshop" },
    { src: "/images/b1.jpg", alt: "Surgical Kit Demonstration", category: "Training" },
    { src: "/images/b2.jpg", alt: "Hands-on Implant Placement", category: "Training" },
    { src: "/images/b3.jpg", alt: "Bone Grafting Procedure", category: "Clinical" },
    { src: "/images/b4.jpg", alt: "Post-course Certificate Distribution", category: "Workshop" },
    { src: "/images/b5.jpg", alt: "Faculty and Participants", category: "Workshop" },
    { src: "/images/b6.jpg", alt: "Live Surgery Observation", category: "Clinical" },
    { src: "/images/camp1.jpg", alt: "Mobile Dental Clinic", category: "Outreach" },
    { src: "/images/cam2.jpg", alt: "Community Medical Camp", category: "Outreach" },
    { src: "/images/cam3.jpg", alt: "Patient Consultation", category: "Outreach" },
];

const categories = ["All", "Workshop", "Training", "Clinical", "Outreach"];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <>
            <section className="bg-gradient-to-b from-blue-600/20 to-[#0A0F1E] py-20 md:py-32 pt-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/bg1.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Gallery</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A visual journey through our clinical workshops, training seminars, and outreach programs.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-[#0A0F1E] min-h-screen">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Filter Tabs */}
                    <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20"
                                    : "bg-white/5 text-gray-400 border-white/10 hover:border-blue-500/30 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </AnimatedSection>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredImages.map((img, index) => (
                            <AnimatedSection key={`${img.src}-${activeCategory}`} delay={index * 0.05} className="break-inside-avoid">
                                <div className="glass-card overflow-hidden group relative">
                                    <div className={`relative w-full overflow-hidden ${index % 3 === 0 ? 'h-96' : index % 2 === 0 ? 'h-64' : 'h-80'}`}>
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <span className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">{img.category}</span>
                                            <h3 className="text-white font-medium">{img.alt}</h3>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                </div>
            </section>

            <CTABanner
                title="Join Our Next Event"
                subtitle="Be a part of our upcoming workshops and advance your clinical skills."
                primaryCTA={{ text: "View Upcoming Workshops", href: "/training" }}
            />
        </>
    );
}

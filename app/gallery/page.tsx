import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
    title: "Clinical Gallery | Kindway BioReZens",
    description: "Browse our gallery of past workshops, training seminars, and outreach medical camps.",
};

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
    { src: "/images/g4.jpg", alt: "Community Medical Camp", category: "Outreach" },
    { src: "/images/g5.jpg", alt: "Patient Consultation", category: "Outreach" },
];

export default function GalleryPage() {
    return (
        <>
            <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/bg1.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Gallery</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        A visual journey through our clinical workshops, training seminars, and outreach programs.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white min-h-screen">
                <div className="container mx-auto px-4 md:px-6">

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group relative">
                                {/* Randomize intrinsic aspect ratios a bit for a masonry look */}
                                <div className={`relative w-full overflow-hidden ${index % 3 === 0 ? 'h-96' : index % 2 === 0 ? 'h-64' : 'h-80'}`}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{img.category}</span>
                                        <h3 className="text-white font-medium">{img.alt}</h3>
                                    </div>
                                </div>
                            </div>
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

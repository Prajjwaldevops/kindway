import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/sections/CTABanner";
import { MissionVision } from "@/components/sections/MissionVision";

export const metadata: Metadata = {
    title: "About Us | Kindway BioReZens",
    description: "Learn about Kindway BioReZens's mission, vision, and our dedicated team of dental professionals.",
};

const teamMembers = [
    {
        name: "Dr. Rajesh Bansal",
        role: "Founder Director (MDS, PhD)",
        image: "/images/sirji.jpg",
    },
    {
        name: "Prof. Monika Bansal",
        role: "Co-Founder & Clinical Head",
        image: "/images/t5.jpg",
    }
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/bg2.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">About Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Pioneering the future of dental care through innovation, precision, and compassionate healthcare solutions.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-8">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Our Story</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                        A Legacy of Excellence
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        Kindway Biorezens started with a simple yet profound vision: to bridge the gap between world-class dental technology and clinical accessibility. As a manufacturing-driven startup, we committed ourselves to research and development, aiming to produce biomaterials and implants that not only match but exceed global standards.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        Today, we are proud to support thousands of clinicians worldwide, enhancing patient outcomes through our rigorously tested product lines and continuous educational initiatives.
                    </p>
                </div>
            </section>

            <MissionVision />

            {/* Team Section */}
            <section className="py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Leadership</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                            Meet Our Team
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Guided by experienced clinicians and industry veterans, our leadership team is dedicated to driving innovation in dental healthcare.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="flex flex-col items-center text-center group w-full sm:w-80">
                                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 border-4 border-card shadow-xl group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                                <p className="text-accent font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Partner with Kindway Biorezens"
                subtitle="Experience standard-defining products and uncompromised support."
                primaryCTA={{ text: "Contact Us", href: "/contact" }}
            />
        </>
    );
}

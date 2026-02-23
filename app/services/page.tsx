import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import { CTABanner } from "@/components/sections/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Our Services | Kindway BioReZens",
    description: "Explore our comprehensive healthcare services and outreach programs.",
};

export default function ServicesPage() {
    return (
        <>
            <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/bg1.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Services</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Dedicated to advancing dental care through precision manufacturing and community outreach.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div key={service.slug} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                                <div className="w-full lg:w-1/2">
                                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden glass-panel p-2 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 space-y-6">
                                    <span className="text-accent font-semibold tracking-wider text-sm uppercase block">Service Area</span>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-xl text-muted-foreground font-medium">
                                        {service.shortDescription}
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {service.fullDescription}
                                    </p>
                                    {service.slug === "dental-implants" || service.slug === "bone-grafts" ? (
                                        <div className="pt-4">
                                            <Link href="/products">
                                                <Button variant="outline" size="lg">Explore Related Products</Button>
                                            </Link>
                                        </div>
                                    ) : null}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="We're Here to Support You"
                subtitle="Contact our dedicated team to discuss how our services can benefit your practice or community."
                primaryCTA={{ text: "Contact Us", href: "/contact" }}
            />
        </>
    );
}

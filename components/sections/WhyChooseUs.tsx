import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/b3.jpg"
                            alt="Why Choose Kindway Biorezens"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Why Choose</span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                                Kindway Biorezens
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            At Kindway Biorezens, we are driven by a mission to reshape the future of dentistry through innovation, accessibility, and compassionate care. As a pioneering startup in dental manufacturing and healthcare services, we design and produce advanced, reliable, and affordable dental implants, biomaterials, and devices that meet global standards of safety and performance.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            Our vision is clear — to elevate dental care, enhance patient quality of life, and support clinicians with technology that simplifies and strengthens clinical practice.
                        </p>

                        <div className="pt-4">
                            <Link href="/about">
                                <Button variant="primary" size="lg" className="shadow-lg hover:shadow-xl">
                                    Read More
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

import React from "react";
import Image from "next/image";

export function MissionVision() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div>
                            <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Kindway BioReZens</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 relative inline-block">
                                Our Mission
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent rounded-full"></span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At Kindway Biorezenes Medical Manufacturing, we envision a future where healthcare products and technologies are not only cutting-edge but also inherently sustainable. Our commitment is to lead the medical manufacturing industry in developing and producing innovative, biorenewable solutions that contribute to a healthier planet.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 relative inline-block">
                                Our Vision
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                At Kindway Biorezens, our vision is to be at the forefront of transformative biorenewable technologies that not only redefine industries but also contribute to a kinder and more sustainable world. We aspire to lead in creating innovative solutions that seamlessly integrate with nature, fostering a harmonious balance between human progress and environmental well-being.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-[600px] w-full rounded-3xl overflow-hidden glass-panel p-2">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                            <Image
                                src="/images/sirji.jpg"
                                alt="Kindway BioReZens Founder"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                                <h3 className="text-2xl font-bold font-display">Dr. Rajesh Bansal</h3>
                                <p className="text-blue-100 font-medium">Founder Director (MDS, PhD)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

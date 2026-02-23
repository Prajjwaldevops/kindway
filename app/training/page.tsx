import type { Metadata } from "next";
import { workshops } from "@/lib/data/workshops";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calendar, MapPin, Users, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
    title: "Training & Workshops | Kindway BioReZens",
    description: "Explore our expert-led dental implantology and tissue augmentation workshops.",
};

export default function TrainingPage() {
    return (
        <>
            <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/training.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Workshops & Training</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Elevate your clinical expertise with hands-on learning, expert guidance, and cutting-edge techniques.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {workshops.map((workshop) => (
                            <div key={workshop.slug} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={workshop.image}
                                        alt={workshop.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white/95 backdrop-blur-md shadow-sm border-0">{workshop.category}</Badge>
                                    </div>
                                    {workshop.seatsLeft < 10 && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                            Only {workshop.seatsLeft} seats left!
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{workshop.title}</h2>
                                    <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                                        {workshop.description}
                                    </p>

                                    <div className="space-y-4 mb-8 bg-gray-50/50 p-6 rounded-2xl border border-gray-50">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Calendar size={18} className="text-primary shrink-0" />
                                            <span className="font-medium">{workshop.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <MapPin size={18} className="text-primary shrink-0" />
                                            <span className="font-medium">{workshop.location}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Users size={18} className="text-primary shrink-0" />
                                            <span className="font-medium">Led by {workshop.instructor}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <IndianRupee size={18} className="text-primary shrink-0" />
                                            <span className="font-medium font-display text-lg">₹{workshop.price.toLocaleString("en-IN")}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <Link href={`/register?workshop=${workshop.slug}`} className="block w-full">
                                            <Button variant="primary" size="lg" className="w-full shadow-md text-lg h-14">
                                                Register Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8">Why Learn With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Expert Faculty</h3>
                            <p className="text-gray-600 text-sm">Learn directly from internationally renowned implantologists and periodontists.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Hands-on Practice</h3>
                            <p className="text-gray-600 text-sm">Extensive practical sessions on models using the latest instrumentation.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                            <p className="text-gray-600 text-sm">Post-course mentorship to ensure you confidently apply what you learned in your practice.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

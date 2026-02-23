import type { Metadata } from "next";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { Shield, Users, Award, Clock, Star, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Register for Workshop | Kindway BioReZens",
    description: "Secure your spot for advanced clinical training and dental implantology workshops.",
};

const benefits = [
    {
        icon: Shield,
        title: "Expert Faculty",
        description: "Learn from globally recognized implantologists and clinicians.",
    },
    {
        icon: Users,
        title: "Hands-On Practice",
        description: "Extensive practical sessions on models and cadavers.",
    },
    {
        icon: Award,
        title: "Certification",
        description: "Receive an official certificate of completion.",
    },
    {
        icon: Clock,
        title: "Limited Seats",
        description: "Small batch sizes ensure personalized attention.",
    },
];

const socialProof = [
    { stat: "1,500+", label: "Workshops Delivered" },
    { stat: "1,160+", label: "Dentists Trained" },
    { stat: "4.9★", label: "Average Rating" },
];

export default function RegisterPage() {
    return (
        <section className="min-h-screen bg-[#0A0F1E] pt-24 pb-12 md:pt-28 md:pb-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto glass-card overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Hero Side */}
                        <div className="w-full lg:w-5/12 relative p-10 md:p-14 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600/20 to-emerald-600/10">
                            {/* Bg Image Overlay */}
                            <div className="absolute inset-0 bg-[url('/images/bg1.jpg')] bg-cover bg-center opacity-10" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />

                            <div className="relative z-10 mb-12">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-amber-400 backdrop-blur-sm mb-6">
                                    <Star size={14} className="fill-amber-400" />
                                    Limited Seats Available
                                </span>
                                <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                                    Secure Your Seat in the Next Masterclass
                                </h1>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Join hundreds of dental professionals who have transformed their clinical outcomes through our hands-on programs.
                                </p>
                            </div>

                            {/* Benefits */}
                            <div className="relative z-10 space-y-5 mb-12">
                                {benefits.map((benefit) => (
                                    <div key={benefit.title} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center shrink-0 border border-white/10">
                                            <benefit.icon size={18} className="text-amber-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-0.5 text-sm">{benefit.title}</h3>
                                            <p className="text-xs text-gray-500">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Proof */}
                            <div className="relative z-10 border-t border-white/10 pt-8">
                                <div className="flex gap-6">
                                    {socialProof.map((item) => (
                                        <div key={item.label} className="text-center">
                                            <p className="text-xl font-bold text-gradient">{item.stat}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Form Side */}
                        <div className="w-full lg:w-7/12 p-10 md:p-14 bg-[#111827]/50 relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px]" />

                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold text-white mb-2">Registration Form</h2>
                                <p className="text-gray-500 text-sm mb-8">Fill in your details below. Payment links will be shared post-confirmation.</p>

                                <RegisterForm />

                                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {["S", "A", "R"].map((initial, i) => (
                                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#111827] flex items-center justify-center text-white text-xs font-bold ${["bg-blue-600", "bg-emerald-600", "bg-amber-600"][i]
                                                }`}>
                                                {initial}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        <span className="text-white font-medium">1,160+ professionals</span> have already registered
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust indicators below the card */}
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> SSL Encrypted</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> Confirmation within 24h</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500" /> 100% Refundable</span>
                </div>
            </div>
        </section>
    );
}

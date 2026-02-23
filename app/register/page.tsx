import type { Metadata } from "next";
import { RegisterForm } from "@/components/forms/RegisterForm";

export const metadata: Metadata = {
    title: "Register for Workshop | Kindway BioReZens",
    description: "Secure your spot for advanced clinical training and dental implantology workshops.",
};

export default function RegisterPage() {
    return (
        <section className="min-h-screen bg-gray-50 py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

                    {/* Hero / Info Side */}
                    <div className="w-full lg:w-5/12 bg-primary relative p-10 md:p-14 text-white flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/images/training.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>

                        <div className="relative z-10 mb-12">
                            <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">Level Up Your Practice</span>
                            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                                Secure Your Seat in the Next Masterclass
                            </h1>
                            <p className="text-blue-100 leading-relaxed text-lg">
                                Join hundreds of dental professionals who have transformed their clinical outcomes through our hands-on educational programs.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 backdrop-blur-md">
                                    <span className="text-accent font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Expert Led</h3>
                                    <p className="text-sm text-blue-100">Learn directly from global industry leaders.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 backdrop-blur-md">
                                    <span className="text-accent font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Hands-On Practice</h3>
                                    <p className="text-sm text-blue-100">Extensive practical sessions on models.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 backdrop-blur-md">
                                    <span className="text-accent font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Limited Seats</h3>
                                    <p className="text-sm text-blue-100">Small batch sizes for personalized attention.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="w-full lg:w-7/12 p-10 md:p-14 bg-white relative">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Registration Form</h2>
                        <RegisterForm />
                    </div>

                </div>
            </div>
        </section>
    );
}

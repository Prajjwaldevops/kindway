import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTABanner } from "@/components/sections/CTABanner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Kindway BioReZens",
    description: "Get in touch with Kindway BioReZens for dental implants, biomaterials, and training inquiries.",
};

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/b2.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Have questions about our products, services, or upcoming workshops? Our team is here to help.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 bg-background relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Reach Out</span>
                                <h2 className="text-3xl font-display font-bold text-foreground mb-6">Let&apos;s Connect</h2>
                                <p className="text-muted-foreground">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-1">Office Address</h3>
                                        <a href="https://maps.google.com/?q=Kindway+Biorezens+Pvt.+Ltd.+Varanasi+Uttar+Pradesh+India" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition">
                                            Kindway Biorezens Pvt. Ltd.<br />Varanasi, Uttar Pradesh, India
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                                        <a href="tel:+919198846529" className="text-muted-foreground hover:text-accent transition">+91 91988 46529</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                                        <a href="mailto:info@kindwaybio.com" className="text-muted-foreground hover:text-accent transition">info@kindwaybio.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground mb-1">Working Hours</h3>
                                        <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-card-border relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h3>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="h-[400px] w-full bg-muted relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.08985172283!2d82.90870631671986!3d25.32089493922378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711352451234!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale dark:grayscale-0 dark:opacity-70 contrast-125 dark:contrast-100 opacity-80 mix-blend-multiply dark:mix-blend-normal"
                ></iframe>
            </section>

            <CTABanner
                title="Ready to Elevate Your Practice?"
                subtitle="Explore our comprehensive range of high-performance dental implants and biomaterials."
                primaryCTA={{ text: "View Products", href: "/products" }}
            />
        </>
    );
}

"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    subject: z.string().min(5, { message: "Subject is required" }),
    message: z.string().min(10, { message: "Message is required" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactFormContent() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const searchParams = useSearchParams();
    const productName = searchParams?.get("product");

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    // Auto-fill subject & message for product quote requests
    useEffect(() => {
        if (productName) {
            setValue("subject", `Quote Request: ${productName}`);
            setValue("message", `Hi, I would like to request a quote for "${productName}". Please share pricing details, MOQ, and delivery timelines.\n\nThank you.`);
        }
    }, [productName, setValue]);

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        console.log("Form submitted", data);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            reset();
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    const inputClasses =
        "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all placeholder:text-gray-600 backdrop-blur-sm";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {productName && (
                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-3">
                    <CheckCircle2 size={20} className="shrink-0" />
                    Requesting quote for <strong className="ml-1">{productName}</strong>
                </div>
            )}

            {isSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-3">
                    <CheckCircle2 size={20} className="shrink-0" />
                    Thank you for reaching out! We will get back to you shortly.
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                    <input id="name" {...register("name")} className={inputClasses} placeholder="Dr. John Doe" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                    <input id="email" type="email" {...register("email")} className={inputClasses} placeholder="john@example.com" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input id="phone" type="tel" {...register("phone")} className={inputClasses} placeholder="+91 98765 43210" />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                    <input id="subject" {...register("subject")} className={inputClasses} placeholder="Product Inquiry" />
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className={`${inputClasses} resize-none`}
                    placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message →"}
            </Button>
        </form>
    );
}

export function ContactForm() {
    return (
        <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading form...</div>}>
            <ContactFormContent />
        </Suspense>
    );
}

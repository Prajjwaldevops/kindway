"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    subject: z.string().min(5, { message: "Subject is required" }),
    message: z.string().min(10, { message: "Message is required" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

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

    const inputClasses = "w-full px-4 py-3 rounded-lg border border-card-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/50";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {isSuccess && (
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800">
                    Thank you for reaching out! We will get back to you shortly.
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                    <input id="name" {...register("name")} className={inputClasses} placeholder="Dr. John Doe" />
                    {errors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                    <input id="email" type="email" {...register("email")} className={inputClasses} placeholder="john@example.com" />
                    {errors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                    <input id="phone" type="tel" {...register("phone")} className={inputClasses} placeholder="+91 98765 43210" />
                    {errors.phone && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                    <input id="subject" {...register("subject")} className={inputClasses} placeholder="Product Inquiry" />
                    {errors.subject && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className={`${inputClasses} resize-none`}
                    placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}

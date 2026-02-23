"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { workshops } from "@/lib/data/workshops";
import { useSearchParams } from "next/navigation";

const registerSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    workshopSlug: z.string().min(1, { message: "Please select a workshop" }),
    experience: z.string().min(1, { message: "Please select your experience level" }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

function RegisterFormContent() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const searchParams = useSearchParams();
    const preSelectedWorkshop = searchParams?.get("workshop");

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    useEffect(() => {
        if (preSelectedWorkshop) {
            setValue("workshopSlug", preSelectedWorkshop);
        }
    }, [preSelectedWorkshop, setValue]);

    const onSubmit = async (data: RegisterFormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        console.log("Registration submitted", data);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            reset();
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {isSuccess && (
                <div className="p-4 rounded-lg bg-green-50 text-green-800 border border-green-200 shadow-sm animate-in fade-in">
                    Thank you for registering! We have sent a confirmation email with further details.
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name (Dr.)</label>
                    <input
                        id="name"
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Dr. John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number (WhatsApp)</label>
                    <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium text-gray-700">Years of Clinical Experience</label>
                    <select
                        id="experience"
                        {...register("experience")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                    >
                        <option value="">Select Experience</option>
                        <option value="student">Dental Student / Intern</option>
                        <option value="0-2">0 - 2 Years</option>
                        <option value="3-5">3 - 5 Years</option>
                        <option value="5-10">5 - 10 Years</option>
                        <option value="10+">10+ Years</option>
                    </select>
                    {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="workshopSlug" className="text-sm font-medium text-gray-700">Select Workshop</label>
                <select
                    id="workshopSlug"
                    {...register("workshopSlug")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                >
                    <option value="">Choose a Workshop...</option>
                    {workshops.map(w => (
                        <option key={w.slug} value={w.slug}>
                            {w.title} - {w.date} (₹{w.price})
                        </option>
                    ))}
                </select>
                {errors.workshopSlug && <p className="text-red-500 text-xs mt-1">{errors.workshopSlug.message}</p>}
            </div>

            <div className="pt-4 border-t border-gray-100">
                <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Secure My Spot"}
                </Button>
                <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
                    By registering, you agree to our Terms of Service. Payment links will be shared post-registration confirmation.
                </p>
            </div>
        </form>
    );
}

export function RegisterForm() {
    return (
        <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading form...</div>}>
            <RegisterFormContent />
        </Suspense>
    );
}

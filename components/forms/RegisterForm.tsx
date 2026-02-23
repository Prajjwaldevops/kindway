"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { workshops } from "@/lib/data/workshops";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

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
        console.log("Registration submitted", data);
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
            {isSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-3">
                    <CheckCircle2 size={20} className="shrink-0" />
                    Thank you for registering! We have sent a confirmation email with further details.
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Full Name (Dr.)
                    </label>
                    <input
                        id="name"
                        {...register("name")}
                        className={inputClasses}
                        placeholder="Dr. John Doe"
                    />
                    {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={inputClasses}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                        Phone Number (WhatsApp)
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className={inputClasses}
                        placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium text-gray-300">
                        Years of Clinical Experience
                    </label>
                    <select
                        id="experience"
                        {...register("experience")}
                        className={inputClasses}
                    >
                        <option value="" className="bg-[#111827]">Select Experience</option>
                        <option value="student" className="bg-[#111827]">Dental Student / Intern</option>
                        <option value="0-2" className="bg-[#111827]">0 - 2 Years</option>
                        <option value="3-5" className="bg-[#111827]">3 - 5 Years</option>
                        <option value="5-10" className="bg-[#111827]">5 - 10 Years</option>
                        <option value="10+" className="bg-[#111827]">10+ Years</option>
                    </select>
                    {errors.experience && (
                        <p className="text-red-400 text-xs mt-1">{errors.experience.message}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="workshopSlug" className="text-sm font-medium text-gray-300">
                    Select Workshop
                </label>
                <select
                    id="workshopSlug"
                    {...register("workshopSlug")}
                    className={inputClasses}
                >
                    <option value="" className="bg-[#111827]">Choose a Workshop...</option>
                    {workshops.map((w) => (
                        <option key={w.slug} value={w.slug} className="bg-[#111827]">
                            {w.title} - {w.date} (₹{w.price})
                        </option>
                    ))}
                </select>
                {errors.workshopSlug && (
                    <p className="text-red-400 text-xs mt-1">{errors.workshopSlug.message}</p>
                )}
            </div>

            <div className="pt-4">
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Processing..." : "Secure My Spot →"}
                </Button>
            </div>
        </form>
    );
}

export function RegisterForm() {
    return (
        <Suspense
            fallback={
                <div className="p-8 text-center text-gray-500">Loading form...</div>
            }
        >
            <RegisterFormContent />
        </Suspense>
    );
}

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2 focus:ring-offset-[#0A0F1E] disabled:opacity-50 disabled:pointer-events-none min-h-[44px] cursor-pointer";

    const variants = {
        primary:
            "bg-amber-500 text-black hover:bg-amber-400 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30",
        secondary:
            "border border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm",
        outline:
            "border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40",
        ghost: "text-blue-400 hover:text-blue-300 hover:bg-white/5",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3 text-lg",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}

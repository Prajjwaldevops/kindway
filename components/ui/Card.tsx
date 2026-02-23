import React from "react";
import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }: CardProps) {
    return (
        <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ className, children, ...props }: CardProps) {
    return (
        <h3
            className={cn(
                "font-semibold leading-none tracking-tight text-white",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
}

export function CardContent({ className, children, ...props }: CardProps) {
    return (
        <div className={cn("p-6 pt-0", className)} {...props}>
            {children}
        </div>
    );
}

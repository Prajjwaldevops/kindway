import React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

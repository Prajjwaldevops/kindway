import React from "react";
import { cn } from "@/lib/utils";

export function Badge({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors border-blue-500/20 bg-blue-500/10 text-blue-400",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

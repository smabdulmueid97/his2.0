"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "min-h-[120px] w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-white)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-blue-700)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-blue-700),#fff_70%)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-11 w-full rounded-full border border-[var(--color-line)] bg-[var(--color-white)] px-4 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-blue-700)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-blue-700),#fff_70%)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

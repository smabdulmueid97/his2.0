"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-blue-700)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-blue-700)] text-[var(--color-white)] hover:bg-[var(--color-blue-900)]",
        gold:
          "bg-[var(--color-gold-500)] text-[var(--color-blue-900)] hover:bg-[color-mix(in_srgb,var(--color-gold-500),#000_8%)]",
        secondary:
          "bg-[var(--color-blue-100)] text-[var(--color-blue-900)] hover:bg-[color-mix(in_srgb,var(--color-blue-100),#000_6%)]",
        outline:
          "border border-[var(--color-line)] bg-[var(--color-white)] text-[var(--color-blue-900)] hover:bg-[var(--color-blue-100)]",
        ghost:
          "bg-transparent text-[var(--color-blue-700)] hover:bg-[var(--color-blue-100)]",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

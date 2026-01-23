"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-blue-100)] text-[var(--color-blue-900)]",
        info:
          "bg-[color-mix(in_srgb,var(--color-blue-700),#fff_70%)] text-[var(--color-blue-900)]",
        success:
          "bg-[color-mix(in_srgb,#16a34a,#fff_75%)] text-[#14532d]",
        warn: "bg-[var(--color-gold-100)] text-[var(--color-blue-900)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-dark",
  secondary:
    "bg-forest text-offwhite hover:bg-forest-dark",
  ghost:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/40",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

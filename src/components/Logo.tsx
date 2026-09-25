import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      <span className="flex h-9 w-9 items-center justify-center bg-forest text-offwhite font-display text-lg">
        T
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base tracking-wide text-charcoal">
          Tribe
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">
          Foundation
        </span>
      </span>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-3 shrink-0">
      <Image src="/logo.png" alt="" width={52} height={40} loading="eager" className="h-10 w-auto" />
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
